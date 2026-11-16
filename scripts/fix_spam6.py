#!/usr/bin/env python3
"""FASE 3f (v2): selesaikan sisa pasangan kembar per-author.
1) kamus MANU (kunci ternormalisasi), 2) swap core (susulan/reaksi),
3) swap penutup (CL_MAP), 4) tambahan ekor skeleton, 5) artefak kata ganda."""
import re, glob, os, difflib, collections

ROOT = '/home/z/my-project/src/lib/threadz/data'
REPLYPAT = re.compile(r'(\{ authorId: (\d+), minutesAgo: (\d+), content: ")((?:[^"\\]|\\.)*)(")')
def norm(s):
    s = re.sub(r'[^a-z0-9 ]+', ' ', s.lower()); return re.sub(r'\s+', ' ', s).strip()

MANU = {
 "telat hujannya udah reda 40 itu fix": "Telat nyusul. hujannya udah reda? 40% wajar juga kok",
 "pr gue ganti angka biar gak identik": "PR gue: angkanya gue ganti, biar beda",
 "pr gue pindah ruas ubah tanda": "PR gue: pindah ruas, tandanya ganti",
 "catet cek balik kali 2": "catet: cek balik dua kali",
 "catet bagi 5 dulu lalu x 9": "catet: bagi lima dulu, baru kali 9",
 "note susulan contoh dunia nyata bikin paham cepat": "note susulan: kasus sehari-hari bikin cepat paham",
 "susulan polanya mirip aturannya sama": "susulan — aturannya sama, polanya mirip",
 "note susulan yang kecil duluan sisa nyusul": "note susulan: mulai dari yang kecil, sisa nyusul",
 "susulan gambar petak petak dulu biar keliatan": "susulan — kertas berpetak dulu biar keliatan",
 "note susulan kalo gak yakin itung ulang aja": "note susulan: kalo ragu, dihitung ulang aja",
 "susulan tipe soal kayak gini sering nongol": "susulan — soal model begini langganan",
 "note susulan pola begini rajin muncul di soal": "note susulan: pola begini langganan soal",
 "susulan kalo gak yakin itung ulang aja": "susulan: kalo ragu, itung lagi aja",
 "note susulan gambar petak petak dulu biar keliatan": "note susulan: gambar berpetak dulu biar keliatan",
 "udah kejawab semua di atas kok": "udah kejawab semua di atas, aman",
 "udah kejawab semua di atas wkwk": "udah kejawab semua di atas, kuku",
 "0 5 jam itu 30 menit 0 5 x 60 bukan 50 menit": "0,5 jam itu 30 menit. 0,5 × 60, bukan 50 menit ya",
 "4 8 km per jam bener 400 5 x 60 dua kali dicek": "4,8 km per jam bener. 400 ÷ 5 × 60, dicek dua kali",
 "32 40 0 8 jam 48 menit dua kali dicek bener": "32 ÷ 40 = 0,8 jam = 48 menit. dicek dua kali, bener",
 "215 belum selesai": "215 belum kelar",
 "185 belum selesai": "185 belum kelar juga",
 "13 00 ke 15 00 dua jam pas bos teliti": "13.00 ke 15.00. dua jam pas, bos-nya teliti banget",
 "telat bos udah tutup 15 00 selesainya itu bener": "telat bos. udah tutup? 15.00 selesainya itu tepat",
 "susulan 165 habis dibagi 11": "susulan: 165 habis dibagi 11, pas",
}
REACT = ["semuanya udah kuku", "jawabannya udah tuntas", "sudah lengkap semua", "udah kejawab semua di atas",
         "gak ada yang kurang", "semua langkah udah ada", "isinya tuntas semua", "jawaban di atas udah nutup semua",
         "udah rapi semua", "semua udah nyambung", "gak ada yang melayang", "udah pas semua",
         "komennya udah nutup", "di atas udah kuku semua", "tinggal dicerna doang", "gak ada sisa lagi"]
SUS_FAM = [
 ["pola yang sama berlaku", "polanya mirip, aturannya sama", "aturan yang sama jalan juga di sini", "pola sama, hasil konsisten"],
 ["gambar kotak kotak", "gambar petak-petak dulu biar keliatan", "kertas berpetak bikin nggak salah hitung", "petak-petak dulu, hitungan nyusul"],
 ["yang kecil dulu", "yang kecil dikeja dulu", "mulai dari yang kecil, enteng", "yang kecil duluan, sisa nyusul"],
 ["pola ini sering keluar", "pola begini rajin muncul di soal", "tipe soal kayak gini sering nongol", "pola ini langganan soal"],
 ["contoh nyata di kehidupan", "sambungin ke contoh nyata biar nempel", "pakai kasus sehari-hari, langsung nyantol", "contoh dunia nyata bikin paham cepat"],
 ["hitung dua kali kalau ragu", "ragu ya dihitung lagi, murah", "dua kali itung itu murah meriah", "kalo gak yakin, itung ulang aja"],
]
CL_MAP = {"beres semua": "beres", "tuntas semua": "tuntas", "pas semua": "pas", "kuku semua": "kuku"}

def find_core(b, nb):
    """kembalikan (teks_asli_core, teks_pengganti_norm) bila core keluarga cocok"""
    for fam in SUS_FAM:
        normfam = [norm(v) for v in fam]
        for idx, v in enumerate(fam):
            vn = norm(v)
            if nb.endswith(vn) or nb.endswith(vn + ' wkwk'):
                others = [fam[i2] for i2 in range(len(fam)) if i2 != idx]
                pick = others[int(nb[:2].encode().hex(), 16) % len(others)] if False else others[(len(nb)) % len(others)]
                if re.search(re.escape(v), b, re.I):
                    return v, pick
    for idx, v in enumerate(REACT):
        vn = norm(v)
        if nb.startswith(vn) or nb.endswith(vn) or nb.endswith(vn + ' wkwk'):
            others = [REACT[i2] for i2 in range(len(REACT)) if i2 != idx]
            pick = others[(len(nb)) % len(others)]
            if re.search(re.escape(v), b, re.I):
                return v, pick
    return None, None

total, leftover_all = 0, set()
for rnd in range(4):
    filesrc, insts = {}, []
    for f in sorted(glob.glob(ROOT + '/*.ts')):
        s = open(f).read(); filesrc[f] = s
        for m in REPLYPAT.finditer(s):
            insts.append([f, m.group(2), m.start(4), m.end(4), m.group(4)])
    by_author = collections.defaultdict(list)
    for i, e in enumerate(insts): by_author[e[1]].append(i)
    plan, leftover = [], set()
    for aid, idxs in by_author.items():
        items = [insts[i] for i in idxs]
        for i in range(len(items)):
            for j in range(i+1, len(items)):
                a, b = items[i], items[j]
                if len(norm(a[4]).split()) < 4: continue
                r = difflib.SequenceMatcher(None, norm(a[4]), norm(b[4])).ratio()
                if r < 0.85: continue
                nb, orig = norm(b[4]), b[4]
                new = MANU.get(nb)
                if not new:
                    oc, pc = find_core(orig, nb)
                    if oc:
                        new = re.sub(re.escape(oc), pc, orig, count=1, flags=re.I)
                if not new:
                    for k, v in CL_MAP.items():
                        m2 = re.search(re.escape(k) + r'\.?$', orig, re.I)
                        if m2:
                            dot = '.' if m2.group(0).endswith('.') else ''
                            new = orig[:m2.start()] + v + dot; break
                if not new and re.search(r'habis dibagi \d+$', orig):
                    new = orig + ', pas'
                if new and new != orig:
                    plan.append((b[0], b[2], b[3], new))
                else:
                    leftover.add((aid, a[4][:70], b[4][:70]))
    plan.sort(key=lambda t: (t[0], -t[1]))
    cur, src = None, ""
    for f, st, en, new in plan:
        if f != cur:
            if cur: open(cur, 'w').write(src)
            cur, src = f, filesrc[f]
        src = src[:st] + new + src[en:]
    if cur: open(cur, 'w').write(src)
    total += len(plan)
    print(f"ronde {rnd+1}: {len(plan)} penggantian, leftover {len(leftover)}")
    if not plan: break

print("\n=== leftover ===")
for aid, x, y in list(leftover_all if False else leftover)[:20]:
    print(f"  a{aid}\n    A: {x}\n    B: {y}")

art = collections.Counter()
for f in sorted(glob.glob(ROOT + '/*.ts')):
    for m in REPLYPAT.finditer(open(f).read()):
        for pat in [r'\bsemua semua\b', r'\bdi atas di atas\b', r'\bkuku kuku\b', r'\bpas pas\b',
                    r'\btuntas tuntas\b', r'\bkok kok\b', r'\bdeh deh\b', r'\bwkwk wkwk\b']:
            if re.search(pat, m.group(4), re.I): art[pat] += 1
print("\nartefak kata ganda:", dict(art))
