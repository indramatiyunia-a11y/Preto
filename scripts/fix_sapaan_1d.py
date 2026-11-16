#!/usr/bin/env python3
"""Fase 1d: 4 sapaan 'kakak' tanpa dasar + cek kembar-bot."""
import re, glob, os, difflib, collections

ROOT = '/home/z/my-project/src/lib/threadz/data'
REPL = [
    ("hitungan kakak udah bener", "hitunganmu udah bener"),
    ("itungan kakak bener", "itunganmu bener"),
    ('bener kakak. 28 < 30 < 35', 'bener. 28 < 30 < 35'),
    ("roda kakak jujur", "berarti roda jujur"),
]
for f in sorted(glob.glob(ROOT + '/*.ts')):
    src = open(f).read(); orig = src
    for old, new in REPL:
        n = src.count(old)
        if n:
            src = src.replace(old, new)
            print(f"{os.path.basename(f)}: '{old[:40]}' x{n}")
    if src != orig: open(f, 'w').write(src)

# ---- deteksi komentar kembar (authorId sama) ----
TH = re.compile(r'"((?:[^"\\]|\\.)*)"')
REPLYPAT = re.compile(r'\{ authorId: (\d+), minutesAgo: (\d+), content: "((?:[^"\\]|\\.)*)"')
def norm(s):
    s = s.lower()
    s = re.sub(r'[^a-z0-9 ]+', ' ', s)
    return re.sub(r'\s+', ' ', s).strip()

pairs = collections.defaultdict(list)
for f in sorted(glob.glob(ROOT + '/*.ts')):
    for m in REPLYPAT.finditer(open(f).read()):
        pairs[m.group(1)].append((os.path.basename(f), norm(m.group(3)), m.group(3)[:70]))

flagged = []
for aid, items in pairs.items():
    for i in range(len(items)):
        for j in range(i+1, len(items)):
            r = difflib.SequenceMatcher(None, items[i][1], items[j][1]).ratio()
            if r >= 0.72:
                flagged.append((r, aid, items[i], items[j]))
flagged.sort(reverse=True)
print(f"\n=== PASANGAN KEMBAR (authorId sama, ratio>=0.72): {len(flagged)} ===")
for r, aid, a, b in flagged:
    print(f"  {r:.2f} author {aid}")
    print(f"    A[{a[0]}] {a[2]}")
    print(f"    B[{b[0]}] {b[2]}")
