#!/usr/bin/env python3
"""FASE 3: hancurkan template spam persis-sama per author.
Keluarga: 'iya pas' / 'jawaban post semua kuku' / 'jawaban post lengkap'
(+ 6 template kecil 3x). Tiap instance diganti varian dari pool:
rotasi deterministik per authorId, tidak boleh dobel dalam thread yang sama.
"""
import re, glob, os, collections, hashlib

ROOT = '/home/z/my-project/src/lib/threadz/data'
REPLYPAT = re.compile(r'(\{ authorId: (\d+), minutesAgo: (\d+), content: ")((?:[^"\\]|\\.)*)(")')
def norm(s):
    s = re.sub(r'[^a-z0-9 ]+', ' ', s.lower())
    return re.sub(r'\s+', ' ', s).strip()

PAS = [
 "pas","iya","benar","bener","kuku","ok","sip","setuju","mantap","yoi",
 "betul","oke sip","pas sih","bener banget","yes fix","iya kuku","correct",
 "fix itu","sepakat","aman pas","pas udah","gitu aja bener","ga ada bantahan",
 "udah pas kok","benar kok","santuy tapi benar","simpel tapi pas",
 "gak usah debat, pas","ijo itu","pas tanpa debat",
]
KUKU = [
 "semua jawaban di atas udah kuku, gak ada yang perlu dibantah lagi",
 "komennya udah tuntas semua, tinggal dicerna",
 "kuku semuanya, dari awal sampai bawah jelas",
 "jawabannya lengkap, ga ada yang nyangkut",
 "udah tuntas, gak usah nambah apa-apa",
 "semua udah dijawab, tinggal dipraktekin",
 "tuntas, ga ada lubangnya",
 "semuanya kuku, gue tinggal manggut-manggut",
 "udah kuku semua di atas, gak ada sisa",
 "lengkap semua, gak ada yang kelewat",
 "udah ditutup rapi sama komentar di atas",
 "ga ada yang tersisa, semua kejawab",
 "tuntas semua, tenang aja",
 "semua pembahasan udah pas, gak usah diperpanjang",
 "udah kuku, tinggal praktek",
 "jawaban di atas udah nongkrong semua",
 "komplit, gak ada yang bolong",
 "semua udah kejawab di atas, aman",
 "kuku dari kolom pertama sampai terakhir",
 "udah selesai semua, gak ada lanjutan",
 "kuku semua, gak perlu suara tambahan",
 "ditutup rapi, semua udah kuku",
 "ga ada gantungnya, tuntas semua",
 "tuntas, gak ada yang melayang",
]
LENGKAP = [
 "penjelasannya utuh dari awal sampai akhir",
 "jawabannya lengkap, gak ada yang dilewatin",
 "lengkap, sampai alasan kenapanya juga ada",
 "bahasanya gampang, isinya lengkap",
 "dari soal sampai jalan keluarnya lengkap semua",
 "ga ada yang bolong, jawabannya lengkap",
 "lengkap dan langsung nyambung ke masalahnya",
 "satu baca langsung ngerti, lengkap soalnya",
 "isinya padat tapi lengkap",
 "jawabannya lengkap sampai detail kecil",
 "lengkap semua, gak ada langkah yang dipotong",
 "penjelasan penuh, ga setengah-setengah",
 "lengkap, malah nambah konteks yang berguna",
 "dari hitungan sampai alasannya ada semua",
 "jawabannya rapi dan lengkap",
 "lengkap banget, tinggal dipraktekin",
 "semua langkah ditulis, lengkap",
 "lengkap, gak ada yang dilempar gantung",
 "post lengkap, komen di bawah tinggal konfirmasi",
 "lengkap dari depan sampai belakang",
 "utuh semua, gak ada bagian yang discipat",
 "lengkap, susah nambah apa-apa lagi",
]
SPECIAL = {  # template kecil 3x -> varian utk instance ke-2 dan ke-3
 "susulan cek balik selalu": ["susulan: gue cek balik pake cara beda, hasil sama",
                             "susulan dihitung balik dua arah, cocok semua"],
 "susulan cek lagi pakai jalan lain": ["susulan: dicoba lewat jalan ketiga, nyantol juga",
                                      "susulan pakai cara lain, hasil gak geser"],
 "susulan kalkulator boleh buat cek bukan jalan pintas": ["susulan: kalkulator buat verifikasi, nalar tetap utama",
                                                         "susulan mesin boleh bantu, otak yang mutusin"],
 "susulan angka bulat enak": ["susulan: dibulatkan dulu baru dikeja, enak",
                             "susulan angkanya bulat, gak memaksa"],
 "susulan gambar dulu kalau bingung": ["susulan: sketsa dulu baru masuk rumus",
                                      "susulan gambar bikin langkah keliatan"],
}

def fam_of(c):
    if c == "iya pas": return "PAS"
    if c == "jawaban post semua kuku": return "KUKU"
    if c == "jawaban post lengkap": return "LENGKAP"
    return None

# kumpulkan instance per file
inst = collections.defaultdict(list)   # (family|special) -> [(file, aid, spaninfo, idx)]
per_author = collections.Counter()
special_seen = collections.Counter()
filesrc = {}
for f in sorted(glob.glob(ROOT + '/*.ts')):
    s = open(f).read(); filesrc[f] = s
    for m in REPLYPAT.finditer(s):
        n = norm(m.group(4))
        fam = fam_of(n)
        if fam:
            inst[fam].append([f, m.group(2), m.start(4), m.end(4), m.group(4), 0])
            per_author[(fam, m.group(2))] += 1
        elif n in SPECIAL:
            special_seen[n] += 1
            inst[n].append([f, m.group(2), m.start(4), m.end(4), m.group(4), special_seen[n]])

for fam, pool in [("PAS", PAS), ("KUKU", KUKU), ("LENGKAP", LENGKAP)]:
    mx = max([c for (f2, a), c in per_author.items() if f2 == fam] or [0])
    print(f"{fam}: {len(inst[fam])} instance, per-author max {mx}, pool {len(pool)}", "OK" if mx <= len(pool) else "POOL KURANG!")

# susun rencana penggantian
plan = []   # (file, start, end, newtext)
used_thread = collections.defaultdict(set)  # (file, threadanchor~offset blok) -> set(variant)
for fam, pool in [("PAS", PAS), ("KUKU", KUKU), ("LENGKAP", LENGKAP)]:
    # rotasi awal per author dari hash
    rot = {a: int(hashlib.md5(a.encode()).hexdigest()[:6], 16) % len(pool)
           for f2, a in per_author if f2 == fam}
    ctr = collections.Counter()
    for e in inst[fam]:
        f, aid, st, en, orig, _ = e
        a = rot[aid]; k = ctr[aid]; ctr[aid] += 1
        # anchor thread: blok 3000 char sebelum posisi (cukup unik per thread)
        anchor = (f, filesrc[f].rfind("id:", max(0, st-6000), st))
        n_try = 0
        while True:
            cand = pool[(a + k + n_try) % len(pool)]
            if cand not in used_thread[anchor] and cand != orig:
                break
            n_try += 1
            if n_try > len(pool): cand = cand + " 👍"; break
        used_thread[anchor].add(cand)
        e[5] = cand
        plan.append((f, st, en, cand))
# special ke-2 & ke-3
for n, pool in SPECIAL.items():
    for e in inst[n]:
        f, aid, st, en, orig, idx = e
        if idx >= 2 and idx - 2 < len(pool):
            plan.append((f, st, en, pool[idx-2]))
            e[5] = pool[idx-2]

# cek "iya b41 juga" tanpa varian -> laporkan konteks
for f in sorted(glob.glob(ROOT + '/*.ts')):
    s = open(f).read()
    for m in REPLYPAT.finditer(s):
        if norm(m.group(4)) == "iya b41 juga":
            pre = s[max(0, m.start()-1500):m.start()]
            p = re.search(r'content:\s*\n?\s*"([^"]{0,150})', pre)
            print("B41 konteks:", (p.group(1)[:120] if p else "?"), "||", m.group(4)[:40])

# terapkan dari belakang
plan.sort(key=lambda t: (t[0], -t[1]))
cur_f, src = None, ""
for f, st, en, new in plan:
    if f != cur_f:
        if cur_f is not None: open(cur_f, 'w').write(src)
        cur_f, src = f, filesrc[f]
    src = src[:st] + new + src[en:]
if cur_f is not None: open(cur_f, 'w').write(src)

print("\nDiterapkan:", len(plan), "penggantian")
for fam in ["PAS", "KUKU", "LENGKAP"]: print(f"  {fam}: {len(inst[fam])}")
print("  special:", {k: sum(1 for e in v if e[5]) for k, v in inst.items() if k.startswith('susulan') or k == 'iya b41 juga'} if False else
      {n: len(inst[n]) for n in SPECIAL})
LOG = open('/home/z/my-project/scripts/fix_log2.txt', 'w')
for fam, pool in [("PAS", PAS), ("KUKU", KUKU), ("LENGKAP", LENGKAP)]:
    for e in inst[fam]:
        LOG.write(f"{os.path.basename(e[0])} author {e[1]}: '{e[4]}' -> '{e[5]}'\n")
LOG.close()
