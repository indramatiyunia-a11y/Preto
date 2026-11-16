#!/usr/bin/env python3
"""Scan string literals di data threads: temukan sapaan klaim identitas
(bang/mbak/om/nenek/pak/bu/kak/dll) + konteksnya, untuk dipisahkan:
- SAPAAN ke lawan bicara  -> harus dihapus (realisme forum anonim)
- TOPIK/kepunyaan sendiri -> dipertahankan (nenek saya, pak RT, bu guru sebagai orang ketiga)
Output: pola unik + jumlah + contoh file, dump lengkap ke scan_dump.txt
"""
import re, glob, collections, os

TERMS = ["kakak","kak","pak","bu","om","bang","abang","mbak","mba","mas",
         "dik","dek","adik","nenek","tante","kakek","paman","bibi"]
PAT = re.compile(r'\b(' + '|'.join(TERMS) + r')\b', re.IGNORECASE)
STR = re.compile(r'"([^"\n]*)"|\'([^\'\n]*)\'')

ROOT = '/home/z/my-project/src/lib/threadz'
files = sorted(glob.glob(ROOT + '/data/*.ts')) + sorted(glob.glob(ROOT + '/*.ts'))

def norm(s):
    s = re.sub(r'\d+', '#', s.lower())
    s = re.sub(r'[^a-z# ]+', ' ', s)
    return re.sub(r'\s+', ' ', s).strip()

by_term = collections.defaultdict(collections.Counter)   # term -> pattern -> count
ex_by_pat = {}                                            # pattern -> contoh file
dump = open('/home/z/my-project/scripts/scan_dump.txt', 'w')
total = 0
for f in files:
    src = open(f).read()
    for m in STR.finditer(src):
        s = m.group(1) if m.group(1) is not None else m.group(2)
        for tm in PAT.finditer(s):
            term = tm.group(1).lower()
            total += 1
            # konteks 40 char di kiri-kanan
            a, b = max(0, tm.start()-45), min(len(s), tm.end()+45)
            ctx = ('…' if a else '') + s[a:b] + ('…' if b < len(s) else '')
            p = norm(ctx)
            by_term[term][p] += 1
            ex_by_pat.setdefault((term, p), os.path.basename(f))
            dump.write(f"{os.path.basename(f)}\t[{term}]\t{ctx}\n")
dump.close()

for term, c in sorted(by_term.items(), key=lambda kv: -sum(kv[1].values())):
    print(f"\n### [{term}] total {sum(c.values())} | pola unik {len(c)}")
    for p, n in c.most_common():
        print(f"  {n:4d}x  {p}   (mis. {ex_by_pat[(term,p)]})")
print(f"\nTOTAL {total} kemunculan di {len(files)} file")
