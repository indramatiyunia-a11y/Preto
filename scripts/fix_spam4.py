#!/usr/bin/env python3
"""FASE 3d: (A) pecah skeleton 'telat dari arsip ... tuntas' per author,
(B) skeleton 'susulan X pas' / 'PR gue: X rapi', (C) core dobel per author.
Laporkan pasangan >=0.85 (>=5 kata) yang gak kejawab -> patch manual."""
import re, glob, os, difflib, collections, hashlib

ROOT = '/home/z/my-project/src/lib/threadz/data'
REPLYPAT = re.compile(r'(\{ authorId: (\d+), minutesAgo: (\d+), content: ")((?:[^"\\]|\\.)*)(")')
def norm(s):
    s = re.sub(r'[^a-z0-9 ]+', ' ', s.lower()); return re.sub(r'\s+', ' ', s).strip()

OP = ["nyusul dari arsip,", "kelewat, dari arsip:", "dari arsip gue:", "mampir telat,",
      "telat nyamber,", "nyambung dari arsip,", "lewat dari arsip,", "telat dari arsip,"]
CL = ["tuntas", "tuntas kok", "kelar", "beres", "kuku", "tuntas semua", "pas semua", "beres semua"]
CL2 = ["pas", "cocok", "nyantol", "pas semua", "cocok semua", "mantap", "aman", "pas kok"]

filesrc = {}
insts = []  # [file, aid, start, end, content]
for f in sorted(glob.glob(ROOT + '/*.ts')):
    s = open(f).read(); filesrc[f] = s
    for m in REPLYPAT.finditer(s):
        insts.append([f, m.group(2), m.start(4), m.end(4), m.group(4)])

by_author = collections.defaultdict(list)
for i, e in enumerate(insts): by_author[e[1]].append(i)

plan, resolved = [], set()

# --- A: skeleton telat dari arsip ... tuntas ---
SKEL = re.compile(r'^(telat dari arsip[\.,:]?\s*)(.*?)([\.,]?\s*tuntas\.?)$', re.I)
for aid, idxs in by_author.items():
    sel = [i for i in idxs if SKEL.match(insts[i][4])]
    if len(sel) < 3: continue
    for k, i in enumerate(sorted(sel, key=lambda i: (insts[i][0], insts[i][2]))):
        if k < 1: continue
        m = SKEL.match(insts[i][4]); mid = m.group(2).strip().rstrip('.')
        a0 = int(hashlib.md5((aid + str(k)).encode()).hexdigest()[:4], 16) % len(OP)
        c0 = int(hashlib.md5((aid + 'c' + str(k)).encode()).hexdigest()[:4], 16) % len(CL)
        new = f"{OP[(a0+k) % len(OP)]} {mid}. {CL[(c0+k) % len(CL)]}"
        plan.append((insts[i][0], insts[i][2], insts[i][3], new)); resolved.add(i)

# --- B: skeleton 'susulan X pas' / 'PR gue: X rapi' / 'susulan X juga pas' ---
SK2 = re.compile(r'^(susulan\s+)([^,]+?)(\s+juga pas|\s+pas)$', re.I)
SK3 = re.compile(r'^(PR gue:\s*)(.+?)(\s+rapi|\s+pas)$', re.I)
for aid, idxs in by_author.items():
    for sk, cls in [(SK2, CL2), (SK3, CL2)]:
        sel = [i for i in idxs if sk.match(insts[i][4])]
        if len(sel) < 3: continue
        for k, i in enumerate(sorted(sel, key=lambda i: (insts[i][0], insts[i][2]))):
            if k < 2: continue
            m = sk.match(insts[i][4])
            mid = m.group(2).strip().rstrip('.')
            c0 = int(hashlib.md5((aid + 'b' + str(k)).encode()).hexdigest()[:4], 16) % len(cls)
            tail = cls[(c0+k) % len(cls)]
            pfx = "susulan" if insts[i][4].lower().startswith("susulan") else "PR gue:"
            new = f"{pfx} {mid}, {tail}"
            plan.append((insts[i][0], insts[i][2], insts[i][3], new)); resolved.add(i)

# --- C: core dobel per author (ratio >=0.85, >=5 kata) ---
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
}
REACT = ["semuanya udah kuku", "jawabannya udah tuntas", "sudah lengkap semua", "udah kejawab semua di atas",
         "gak ada yang kurang", "semua langkah udah ada", "isinya tuntas semua", "jawaban di atas udah nutup semua",
         "udah rapi semua", "semua udah nyambung", "gak ada yang melayang", "udah pas semua",
         "komennya udah nutup", "di atas udah kuku semua", "tinggal dicerna doang", "gak ada sisa lagi"]
def core_family(n):
    for k, ps in SUS_CORES.items():
        fam = [k] + ps
        for v in fam:
            if n.endswith(v) or n.endswith(v + ' wkwk') or n.endswith(v + ' 👍'):
                return fam, v
    for v in REACT:
        if n.startswith(v) or n.endswith(v) or (v + ' wkwk') in n:
            return REACT, v
    return None, None

unresolved = []
for aid, idxs in by_author.items():
    items = [insts[i] for i in idxs if i not in resolved]
    for i in range(len(items)):
        for j in range(i+1, len(items)):
            a, b = items[i], items[j]
            if len(norm(a[4]).split()) < 5: continue
            r = difflib.SequenceMatcher(None, norm(a[4]), norm(b[4])).ratio()
            if r < 0.85: continue
            fam_b, core_b = core_family(norm(b[4]))
            if fam_b:
                others = [c for c in fam_b if c != core_b]
                new_core = others[int(hashlib.md5((aid+'x').encode()).hexdigest()[:3],16) % len(others)]
                # ganti core di dalam content b (case-insensitive substring)
                pat = re.compile(re.escape(core_b), re.I)
                if pat.search(b[4]):
                    new = pat.sub(new_core, b[4], count=1)
                    plan.append((b[0], b[2], b[3], new)); resolved.add(idx_of := None) if False else None
                    continue
            unresolved.append((r, aid, a, b))

plan.sort(key=lambda t: (t[0], -t[1]))
cur, src = None, ""
for f, st, en, new in plan:
    if f != cur:
        if cur: open(cur, 'w').write(src)
        cur, src = f, filesrc[f]
    src = src[:st] + new + src[en:]
if cur: open(cur, 'w').write(src)
print("penggantian fase 3d:", len(plan))
print("\n=== UNRESOLVED (>=0.85, >=5 kata) ===")
for r, aid, a, b in unresolved[:30]:
    print(f"  {r:.2f} a{aid}\n    A[{a[0]}] {a[4][:95]}\n    B[{b[0]}] {b[4][:95]}")
