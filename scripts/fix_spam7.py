#!/usr/bin/env python3
"""FASE 3g (v3): artefak kata ganda + patch eksplisit leftover (global 2-fase)."""
import re, glob, collections

ROOT = '/home/z/my-project/src/lib/threadz/data'
REPLYPAT = re.compile(r'(\{ authorId: (\d+), minutesAgo: (\d+), content: ")((?:[^"\\]|\\.)*)(")')
def norm(s):
    s = re.sub(r'[^a-z0-9 ]+', ' ', s.lower()); return re.sub(r'\s+', ' ', s).strip()

PATCH = {
 ("66",  "0 5 jam itu 30 menit 0 5 x 60 bukan 50 menit"): "0,5 jam itu 30 menit. 0,5 × 60, bukan 50 menit ya",
 ("352", "pr gue 150 5 rapi kok"): "PR gue: 150 + 5, rapi juga",
 ("204", "catet pecah 20 3"): "catet: pecah 20 + 3 dulu",
 ("488", "catet dua sebelumnya dijumlah"): "catet: dua angka sebelumnya dijumlah",
 ("425", "susulan bandingin dua cara"): "susulan: adu dua cara dulu",
 ("236", "catet cek balik dua kali"): "catet: dicek balik dua kali",
 ("493", "susulan desimal x 60"): "susulan: desimalnya dikali 60",
 ("275", "13 00 ke 15 00 dua jam pas bos nya teliti banget"): "13.00 ke 15.00. dua jam pas, bos-nya detail",
 ("143", "4 8 km per jam bener 400 5 x 60 dua kali dicek"): "4,8 km per jam bener. 400 ÷ 5 × 60, dicek dua kali",
 ("144", "nyusul dari arsip faktorisasi 1075 beres"): "nyusul dari arsip, faktorisasi 1075. tuntas juga",
 ("101", "catet bagi 5 dulu lalu 9"): "catet: bagi lima dulu, baru kali 9",
 ("440", "catet pecah sampai prima"): "catet: dipecah sampai prima",
}
ART = [(r'\bsemua semua\b', 'semua'), (r'\bdi atas di atas\b', 'di atas'),
       (r'\bpas pas\b', 'pas'), (r'\bkuku kuku\b', 'kuku'), (r'\btuntas tuntas\b', 'tuntas'),
       (r'\bkok kok\b', 'kok'), (r'\bdeh deh\b', 'deh'), (r'\bwkwk wkwk\b', 'wkwk'),
       (r'\bsemuanya semua\b', 'semuanya'), (r'\bsemua semuanya\b', 'semuanya')]

allfiles = sorted(glob.glob(ROOT + '/*.ts'))
srcs = {f: open(f).read() for f in allfiles}

# fase A: artefak
n_art = 0
for f in allfiles:
    def art_sub(mm):
        global n_art
        s2 = mm.group(4)
        for pat, rep in ART:
            s2 = re.sub(pat, rep, s2, flags=re.I)
        if s2 != mm.group(4): n_art += 1
        return mm.group(1) + s2 + mm.group(5)
    srcs[f] = REPLYPAT.sub(art_sub, srcs[f])

# fase B: patch instance ke-2 GLOBAL per (author, norm)
n_patch = 0
running = collections.defaultdict(int)
for f in allfiles:
    src = srcs[f]; edits = []
    for m in REPLYPAT.finditer(src):
        key = (m.group(2), norm(m.group(4)))
        if key in PATCH:
            running[key] += 1
            if running[key] == 2:
                edits.append((m.start(4), m.end(4), PATCH[key]))
    for st, en, new in sorted(edits, reverse=True):
        src = src[:st] + new + src[en:]
    n_patch += len(edits)
    srcs[f] = src
    open(f, 'w').write(src)

print("artefak dibersihkan:", n_art, "| patch eksplisit:", n_patch)
left = collections.Counter()
for f in allfiles:
    for m in REPLYPAT.finditer(open(f).read()):
        for pat, _ in ART:
            if re.search(pat, m.group(4), re.I): left[pat] += 1
print("artefak sisa:", dict(left))
