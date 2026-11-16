#!/usr/bin/env python3
"""FASE 3e: parafrasa manual pasangan kembar per-author + variasi penutup."""
import re, glob, os, difflib, collections

ROOT = '/home/z/my-project/src/lib/threadz/data'
REPLYPAT = re.compile(r'(\{ authorId: (\d+), minutesAgo: (\d+), content: ")((?:[^"\\]|\\.)*)(")')
def norm(s):
    s = re.sub(r'[^a-z0-9 ]+', ' ', s.lower()); return re.sub(r'\s+', ' ', s).strip()

MANU = {
 "telat. hujannya udah reda? 40% itu fix": "Telat nyusul. hujannya udah reda? 40% wajar juga kok",
 "pr gue: ganti angka biar gak identik": "PR gue: angkanya gue ganti, biar beda",
 "pr gue: pindah ruas ubah tanda": "PR gue: pindah ruas, tandanya ganti",
 "catet: cek balik kali 2": "catet: cek balik dua kali",
 "catet: bagi 5 dulu lalu x 9": "catet: bagi lima dulu, baru kali 9",
 "note susulan: contoh dunia nyata bikin paham cepat": "note susulan: kasus sehari-hari bikin cepat paham",
 "susulan polanya mirip aturannya sama": "susulan — aturannya sama, polanya mirip",
 "note susulan: yang kecil duluan, sisa nyusul": "note susulan: mulai dari yang kecil, sisa nyusul",
 "susulan gambar petak petak dulu biar keliatan": "susulan — kertas berpetak dulu biar keliatan",
 "note susulan: kalo gak yakin, itung ulang aja": "note susulan: kalo ragu, dihitung ulang aja",
 "susulan tipe soal kayak gini sering nongol": "susulan — soal model begini langganan",
 "note susulan: pola begini rajin muncul di soal": "note susulan: pola begini langganan soal",
 "susulan: kalo gak yakin, itung ulang aja": "susulan: kalo ragu, itung lagi aja",
 "note susulan: gambar petak petak dulu biar keliatan": "note susulan: gambar berpetak dulu biar keliatan",
 "udah kejawab semua di atas kok": "udah kejawab semua di atas, aman",
 "udah kejawab semua di atas wkwk": "udah kejawab semua di atas, kuku",
 "susulan 489 999 deket 490 000": "susulan: 489.999 nempel ke 490.000",
 "0 5 jam itu 30 menit 0 5 x 60 bukan 50 menit": "0,5 jam itu 30 menit. 0,5 × 60, bukan 50 menit ya",
 "4 8 km per jam bener 400 5 x 60 dua kali dicek": "4,8 km per jam bener. 400 ÷ 5 × 60, dicek dua kali",
 "32 40 0 8 jam 48 menit dua kali dicek bener": "32 ÷ 40 = 0,8 jam = 48 menit. dicek dua kali, bener",
 "215 belum selesai": "215 belum kelar",
 "185 belum selesai": "185 belum kelar juga",
 "13 00 ke 15 00 dua jam pas bos teliti": "13.00 ke 15.00. dua jam pas, bos-nya teliti banget",
 "telat bos udah tutup 15 00 selesainya itu bener": "telat bos. udah tutup? 15.00 selesainya itu tepat",
}
CLOSER = [(r'\s+rapi\.?$', [", rapi juga", " rapi nih", " rapi kok"]),
          (r'\s+pas\.?$',   [", pas juga", " pas kok", " pas semua"]),
          (r'\s+prima pas\.?$', [" prima kok", " prima juga"]),
          (r'\s+desimal\.?$', [" desimal juga"]),
          (r'\s+tuntas\.?$', [" kelar", " beres", " kuku"])]

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
            nb = norm(b[4])
            if nb in MANU:
                plan.append((b[0], b[2], b[3], MANU[nb]))
            else:
                done = False
                for pat, opts in CLOSER:
                    if re.search(pat, b[4].rstrip()):
                        new = re.sub(pat, opts[(int(aid) + j) % len(opts)], b[4].rstrip())
                        plan.append((b[0], b[2], b[3], new)); done = True; break
                if not done:
                    leftover.add((aid, a[4][:70], b[4][:70]))

import hashlib
plan.sort(key=lambda t: (t[0], -t[1]))
cur, src = None, ""
for f, st, en, new in plan:
    if f != cur:
        if cur: open(cur, 'w').write(src)
        cur, src = f, filesrc[f]
    src = src[:st] + new + src[en:]
if cur: open(cur, 'w').write(src)
print("penggantian fase 3e:", len(plan))
print("sisa leftover:", len(leftover))
for aid, x, y in list(leftover)[:15]:
    print(f"  a{aid}\n    A: {x}\n    B: {y}")
