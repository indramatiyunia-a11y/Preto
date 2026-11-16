#!/usr/bin/env python3
"""Fase 1b: post yang menyapa pembaca dengan klaim identitas (bang/kak)."""
import glob, os
ROOT = '/home/z/my-project/src/lib/threadz/data'
REPL = [
    ("tarif ojol ini bang. 2 km pertama", "tarif ojol ini. 2 km pertama"),
    ("bang, apps bilang jarak order 8,4 km.", "apps bilang jarak order 8,4 km."),
    ("order batal gak bang. hari hujan", "order batal gak. hari hujan"),
    ("bang, order 6 km biasanya 18 menit", "order 6 km biasanya 18 menit"),
    ("bang, tolong cek PR adik gue", "tolong cek PR adik gue"),
    ("namanya median kak, bukan modus", "namanya median, bukan modus"),
]
for f in sorted(glob.glob(ROOT + '/*.ts')):
    src = open(f).read(); orig = src
    for old, new in REPL:
        n = src.count(old)
        if n:
            src = src.replace(old, new)
            print(f"{os.path.basename(f)}: '{old[:44]}' x{n}")
    if src != orig: open(f, 'w').write(src)
print("selesai")
