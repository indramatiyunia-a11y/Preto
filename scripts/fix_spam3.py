#!/usr/bin/env python3
"""FASE 3c: pecah semua string massal >=20x (>=3 kata) di bawah kap 12.
Keluarga: SUSULAN (parafrasa per tema x prefiks), REAKSI (inti x ekor),
PR, CATET, fallback reaksi pendek 1-2 kata."""
import re, glob, os, collections, hashlib

ROOT = '/home/z/my-project/src/lib/threadz/data'
REPLYPAT = re.compile(r'(\{ authorId: (\d+), minutesAgo: (\d+), content: ")((?:[^"\\]|\\.)*)(")')
def norm(s):
    s = re.sub(r'[^a-z0-9 ]+', ' ', s.lower())
    return re.sub(r'\s+', ' ', s).strip()

KEEP = 12
CAP = 12

SUS_PFX = ["susulan:", "susulan —", "susulan singkat:", "note susulan:"]
SUS_CORES = {
 "yang besar belakangan": ["yang besar kelakuan belakangan", "besarnya nunggu di ujung", "yang gede dateng belakangan"],
 "pola yang sama berlaku": ["polanya mirip, aturannya sama", "aturan yang sama jalan juga di sini", "pola sama, hasil konsisten"],
 "pakai contoh kedua": ["coba contoh kedua buat bukti", "contoh kedua bikin makin yakin", "tes lagi pake contoh kedua"],
 "jangan asal tebak": ["tebak-tebakan gak cukup, hitung", "jangan hajar nebak, tunjukin jalannya", "nebak doang gak nyelametin angka"],
 "bandingin dua cara": ["adu dua metode, liat mana gampang", "dua jalan dibanding, hasil sama", "coba dua cara, pilih yang lancar"],
 "gambar kotak kotak": ["gambar petak-petak dulu biar keliatan", "kertas berpetak bikin nggak salah hitung", "petak-petak dulu, hitungan nyusul"],
 "dua jalur satu jawaban": ["dua jalan, satu tujuan", "jalur dobel, angka tetap satu", "dua pintu keluar, jawaban sama"],
 "cek keterbagian dulu": ["cek habis dibagi dulu sebelum ambil jalur lain", "keterbagian dicek duluan, hemat langkah", "mulai dari cek dibagi berapa"],
 "angka gampang dipilih": ["pilih angka yang ramah buat latihan", "angka gampang bikin latihan lancar", "mulai dari angka yang ramah"],
 "pola ini sering keluar": ["pola begini rajin muncul di soal", "tipe soal kayak gini sering nongol", "pola ini langganan soal"],
 "jangan lupa sederhanakan": ["sederhanain dulu sebelum ditulis rapi", "pecah yang bisa disederhanain dulu", "ringkesin pecahannya sebelum final"],
 "contoh nyata di kehidupan": ["sambungin ke contoh nyata biar nempel", "pakai kasus sehari-hari, langsung nyantol", "contoh dunia nyata bikin paham cepat"],
 "triknya hafal": ["triknya masuk hafalan, gak perlu mikir lama", "sekali hafal, langsung jalan", "cuma hafalan doang begitu"],
 "sistematis lebih cepet": ["kalo urut, cepet kelar", "langkah rapi bikin cepet", "jalan sistematis makin enteng"],
 "hitung dua kali kalau ragu": ["ragu ya dihitung lagi, murah", "dua kali itung itu murah meriah", "kalo gak yakin, itung ulang aja"],
 "latihan lagi biar lancar": ["latihan dikit lagi, tangan lancar sendiri", "sering latihan, otomatis jadi", "satu dua soal lagi biar lancar"],
 "jangan lupa satuan": ["satuan jangan keteteran, dicatet", "satuan ikut ditulis, jangan dilepas", "satuan itu bagian jawaban juga"],
 "tulis langkahnya pelan pelan": ["langkah ditulis pelan-pelan, gak ada yang bolong", "tulis pelan biar bisa dicek", "langkah rapi, gak ada lompatan"],
 "yang kecil dulu": ["yang kecil dikeja dulu", "mulai dari yang kecil, enteng", "yang kecil duluan, sisa nyusul"],
 "hasilnya konsisten": ["hasilnya konsisten di semua jalur", "dijalur mana pun tetep nyantol", "konsisten, gak geser-geser"],
 "catet rumusnya": ["rumusnya dicatet, nanti kepake", "catet rumus, besok kepake lagi", "rumus masuk catatan, gak hilang"],
 "catat biar gak lupa": ["dicatet biar gak kelewat", "catet dikit, gak susah kok", "biar gak lupa, catet aja"],
 "catet cek balik kali 2": ["catet: cek balik dua kali kebiasaan bagus", "catet: dihitung ulang dua arah", "catet: bolak-balik dicek dulu"],
}
CAT_PFX = ["catet:", "catet —", "catet kecil:", "note:"]
PR_CORES = ["pr gue: ganti angka lain sendiri buat latihan", "pr gue: angka gue ganti, jalannya sama",
            "pr gue: sekalian gue ubah angkanya", "pr gue: ganti angka biar gak identik",
            "pr gue: angkanya gue ubah sendiri kayak saran"]
REACT_CORES = ["semuanya udah kuku", "jawabannya udah tuntas", "sudah lengkap semua", "udah kejawab semua di atas",
               "gak ada yang kurang", "semua langkah udah ada", "isinya tuntas semua", "jawaban di atas udah nutup semua",
               "udah rapi semua", "semua udah nyambung", "gak ada yang melayang", "udah pas semua",
               "komennya udah nutup", "di atas udah kuku semua", "tinggal dicerna doang", "gak ada sisa lagi"]
REACT_TAILS = ["", " kok", " di atas", " semua", " sih", " deh", " sampai bawah", " dari awal", " tanpa sisa", " wkwk"]
SHORT = ["pas","iya","bener","kuku","ok","sip","setuju","mantap","yoi","betul","oke","pas sih","iya sih",
         "bener nih","ok deh","sip lah","yoi fix","kuku itu","betul tuh","mantap jiwa","pas tuh","iya lah",
         "bener tuh","ok fix","sip deh","yaudah pas","oke kuku","yes","okee","sip fix","pas deh","bener juga",
         "iya juga","betul juga","mantap juga","ok juga","pas juga","kuku juga","setuju sih","iya deh",
         "bener sih","oke nih","pas nih","benar nih","kuku nih"]

def pool_for(n):
    if n.startswith("susulan "):
        core = n[len("susulan "):]
        for k, ps in SUS_CORES.items():
            if n.startswith("susulan " + k) or core.startswith(k):
                return [p + " " + c for c in ps for p in SUS_PFX]
        return [p + " " + core for p in SUS_PFX]
    if n.startswith("catet "):
        core = n[len("catet "):]
        for k, ps in SUS_CORES.items():
            if core.startswith(k):
                return [p + " " + c for c in ps for p in CAT_PFX]
        return [p + " " + core for p in CAT_PFX]
    if n.startswith("pr gue "):
        return PR_CORES
    return [c + t for c in REACT_CORES for t in REACT_TAILS] + SHORT[:12]

filesrc = {}
groups = collections.defaultdict(list)   # norm -> [(file, aid, start, end, orig)]
for f in sorted(glob.glob(ROOT + '/*.ts')):
    s = open(f).read(); filesrc[f] = s
    for m in REPLYPAT.finditer(s):
        groups[norm(m.group(4))].append([f, m.group(2), m.start(4), m.end(4), m.group(4)])

bad = {n: insts for n, insts in groups.items() if len(insts) >= 20 and len(n.split()) >= 3}
print("template >=20x & >=3 kata:", len(bad), "| instance:", sum(len(v) for v in bad.values()))

plan = []
pool_use = collections.Counter()
used_thread = collections.defaultdict(set)
for n, insts in bad.items():
    insts_sorted = sorted(insts, key=lambda e: (e[0], e[2]))
    for i, e in enumerate(insts_sorted):
        if i < KEEP: continue
        f, aid, st, en, orig = e
        pool = pool_for(n)
        a0 = int(hashlib.md5((aid + n[:20]).encode()).hexdigest()[:5], 16) % len(pool)
        anchor = (f, filesrc[f].rfind("id:", max(0, st-6000), st))
        cand = None
        for t in range(len(pool) * 2):
            c = pool[(a0 + i + t) % len(pool)]
            if pool_use[c] < CAP and c not in used_thread[anchor] and c != orig:
                cand = c; break
        if cand is None:
            for t in range(len(SHORT)):
                c = SHORT[(a0 + t) % len(SHORT)]
                if c not in used_thread[anchor] and c != orig:
                    cand = c; break
        if cand is None: cand = orig
        pool_use[cand] += 1
        used_thread[anchor].add(cand)
        plan.append((f, st, en, cand))

plan.sort(key=lambda t: (t[0], -t[1]))
cur_f, src = None, ""
for f, st, en, new in plan:
    if f != cur_f:
        if cur_f is not None: open(cur_f, 'w').write(src)
        cur_f, src = f, filesrc[f]
    src = src[:st] + new + src[en:]
if cur_f is not None: open(cur_f, 'w').write(src)
print("penggantian fase 3c:", len(plan))
mx = pool_use.most_common(1)
print("string pool terpakai terbanyak:", mx)

# audit ulang
groups2 = collections.Counter()
for f in sorted(glob.glob(ROOT + '/*.ts')):
    for m in REPLYPAT.finditer(open(f).read()):
        groups2[norm(m.group(4))] += 1
bad2 = [(c, s) for s, c in groups2.items() if c >= 12 and len(s.split()) >= 3]
bad2.sort(reverse=True)
print("sisa template >=12x & >=3 kata:", len(bad2), "| instance:", sum(c for c, s in bad2))
for c, s in bad2[:20]: print(f"  {c:4d}x  {s[:95]}")
