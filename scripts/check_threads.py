"""Verify threadz data: ids, comment distribution, forbidden words, template patterns."""
import re, importlib.util, sys

def load(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    # we only need the raw text for checks; parse via regex instead of TS import
    return open(path, encoding="utf-8").read()

base = "/home/z/my-project/src/lib/threadz/data/"
valid_ids = set(range(1, 51))
all_posts = []  # (file, id, author, n_comments, content)

for f in ["threads-1.ts", "threads-2.ts", "threads-3.ts", "threads-4.ts"]:
    text = load(f, base + f)
    # split per post block
    blocks = re.split(r"\n  \{\n", text)[1:]
    for b in blocks:
        m_id = re.search(r"id: (\d+)", b)
        m_a = re.search(r"authorId: (\d+)", b)
        m_min = re.search(r"minutesAgo: (\d+)", b)
        m_sh = re.search(r"shares: (\d+)", b)
        pid, aid = int(m_id.group(1)), int(m_a.group(1))
        mins = int(m_min.group(1))
        # comments: authorId occurrences after "comments:"
        cm = b.split("comments: [", 1)
        n_comments = 0
        if len(cm) > 1:
            n_comments = len(re.findall(r"authorId: (\d+)", cm[1]))
        content = re.search(r'content:\s*\n?\s*"(.*?)"', b, re.S)
        body = content.group(1) if content else ""
        all_posts.append((f, pid, aid, mins, n_comments, body, [int(x) for x in re.findall(r"authorId: (\d+)", cm[1])] if len(cm) > 1 else []))

print(f"total posts: {len(all_posts)}")
ids = [p[1] for p in all_posts]
assert len(ids) == len(set(ids)) == 100, "ids not unique/100"
print("ids 1..100 unique OK")

bad_authors = [(p[1], p[2]) for p in all_posts if p[2] not in valid_ids]
bad_coms = [(p[1], a) for p in all_posts for a in p[6] if a not in valid_ids]
print("invalid authors:", bad_authors, "invalid comment authors:", bad_coms)

counts = sorted((p[4] for p in all_posts), reverse=True)
print("top comment counts:", counts[:6])
print("posts with 0 comments:", sum(1 for c in counts if c == 0))
print("posts with 10 comments:", sum(1 for c in counts if c == 10))
ten = [p[1] for p in all_posts if p[4] == 10]
assert len(ten) == 1, f"exactly-one-10 violated: {ten}"
assert all(c <= 10 for c in counts), "comment count > 10"

# minutesAgo decreasing within files, comment minutes < post minutes
import collections
for f in ["threads-1.ts", "threads-2.ts", "threads-3.ts", "threads-4.ts"]:
    mins = [p[3] for p in all_posts if p[0] == f]
    assert mins == sorted(mins), f"{f} minutesAgo not increasing: {mins}"

# forbidden brand/template words
forbidden = ["indomaret", "alfamart", "gojek", "grab", "shopee", "tokopedia", "whatsapp", "whats app",
             "tiktok", "youtube", "instagram", "threads", "facebook", "vespa", "honda", "yamaha",
             "indomie", "powerball", "THR", "angkot", "nasi padang", "pisang goreng", "bu yati",
             "gorengan", "judol", "slot online", "lotre", "jackpot", "pinjol", "dokter", "guru",
             "murid", "kelas saya", "ajarin", "masih sering ditanya", "kantor saya", "klien"]
issues = []
for p in all_posts:
    blob = (p[5] + " ").lower()
    for w in forbidden:
        if w.lower() in blob:
            issues.append((p[1], w))
print("forbidden hits:", issues if issues else "NONE")

# posyandu-style inventory template: line starting with "word: number"
tpl = []
for p in all_posts:
    for line in p[5].split("\\n"):
        for seg in line.split(". "):
            if re.match(r"^[a-z ]{2,20}:\s*\d", seg.strip()):
                tpl.append((p[1], seg.strip()[:60]))
print("inventory-template patterns:", tpl if tpl else "NONE")

# slot/gambling topic count (anti posts)
gambling_kw = ["slot", "ludru", "undian", "menang", "modal", "cair", "aplikasi"]
anti_posts = [p[1] for p in all_posts if any(k in p[5].lower() for k in ["slot online", "untung gede", "modal kecil untung", "cair 5 menit", "modal dobel", "menang dikit", "slot", "modal bangun", "undian di struk", "jackpot"])]
print("anti-gambling posts:", sorted(set(anti_posts)), f"({len(set(anti_posts))})")

# minutesAgo comment < post check (re-parse per block)
ok = True
for f in ["threads-1.ts", "threads-2.ts", "threads-3.ts", "threads-4.ts"]:
    text = load(f, base + f)
    blocks = re.split(r"\n  \{\n", text)[1:]
    for b in blocks:
        pid = int(re.search(r"id: (\d+)", b).group(1))
        pmin = int(re.search(r"minutesAgo: (\d+)", b).group(1))
        cm = b.split("comments: [", 1)
        if len(cm) > 1:
            for cmin in re.findall(r"minutesAgo: (\d+)", cm[1]):
                if int(cmin) >= pmin:
                    ok = False
                    print(f"comment minutes >= post minutes at post {pid}")
print("comment timing OK" if ok else "TIMING BAD")

# author uniqueness adjacency: no two consecutive posts by same author
for i in range(1, len(all_posts)):
    if all_posts[i][2] == all_posts[i-1][2]:
        print(f"adjacent same author: posts {all_posts[i-1][1]} & {all_posts[i][1]} author {all_posts[i][2]}")
print("done")
