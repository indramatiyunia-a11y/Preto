#!/usr/bin/env python3
"""Fase 1c: sisa om/bang sapaan (bukan tokoh cerita) + typo hakib."""
import glob, os
ROOT = '/home/z/my-project/src/lib/threadz/data'
REPL = [
    ("om-nya detail ya nanya mana yang sah", "pertanyaannya detail ya, nanya mana yang sah"),
    ("wajar gak bang? atau", "wajar gak? atau"),
    ("enaknya ya om? musim rame", "enaknya ya? musim rame"),
    ("penasaran bang: kalau kecepatan", "penasaran: kalau kecepatan"),
    ("panjangnya ya bang, atau rumusnya", "panjangnya ya, atau rumusnya"),
    ("tolong om yang sering ngurus kuli", "tolong yang sering ngurus kuli"),
    ("teh jadi hakib damai", "teh jadi hakim damai"),
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
