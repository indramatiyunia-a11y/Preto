#!/usr/bin/env python3
"""Scan populasi formula META-KEDATANGAN: komentar yang mengumumkan
kedatangan (telat/nyusul/dari arsip/baru nyampe/mampir/kelewat) atau
cek-in ke penulis (udah kejawab kan? / udah beres kan?) alih-alih
langsung ke isi soal. Output: statistik + inventaris lengkap."""
import re, glob, collections, os

ROOT = '/home/z/my-project/src/lib/threadz/data'
TH = re.compile(r'id: (\d+),\s*\n\s*authorId: \d+,\s*\n\s*minutesAgo: \d+,\s*\n\s*shares: \d+,\s*\n\s*content:\s*\n?\s*"([^"]*)"', re.S)
REPLY = re.compile(r'\{ authorId: (\d+), minutesAgo: (\d+), content: "((?:[^"\\]|\\.)*)"')

OPENERS = [
 ("telat",      re.compile(r'^telat\b', re.I)),
 ("nyusul",     re.compile(r'^nyusul\b', re.I)),
 ("mampir",     re.compile(r'^mampir\b', re.I)),
 ("nyampe",     re.compile(r'^(baru |barusan |baru saja )?nyampe\b|^nyampe-nyampe\b', re.I)),
 ("dari-arsip", re.compile(r'^dari (arsip|simpanan|notif)\b', re.I)),
 ("kelewat",    re.compile(r'^kelewat\b|^lewat dari (arsip|notif|simpanan)\b', re.I)),
 ("sori-telat", re.compile(r'^(sori|maa?p|sorry)\b.*(telat|baru liat|nyambung)', re.I)),
 ("nyamber",    re.compile(r'^nyamber\b', re.I)),
]
CHECKIN = re.compile(r'udah (kejawab|beres|dikumpulin|laku|dijawab|tutup|kelar)\b[^.?!]*\?|udah (kejawab|beres|dikumpulin|laku|kelar)\s+(kan|semua|di atas|di sekolah)\b', re.I)
MATH = re.compile(r'\d|kali\b|bagi|per\b|persen|rumus|prima|kelipatan|faktor|pangkat|akar|luas|keliling|selisih|jumlah|rata|derajat|sudut|pecah|desimal|fraksi|median|modus|mean|skala|rasio|liter|cm|km|kg|ml|gram|rb|ribu|juta', re.I)

def strip_open(c):
    """potong pembuka meta, kembalikan sisa"""
    for _, p in OPENERS:
        m = p.match(c)
        if m:
            rest = c[m.end():].lstrip(' ,.:;-–')
            return rest, m.group(0)
    return c, None

def main():
    stats = collections.Counter(); richness = collections.Counter()
    dump = open('/home/z/my-project/scripts/kedatangan_dump.txt', 'w')
    n_total = 0
    for f in sorted(glob.glob(ROOT + '/threads-*.ts')):
        src = open(f).read()
        posts = {}
        for m in TH.finditer(src):
            posts[m.start()] = (m.group(1), m.group(2))
        keys = sorted(posts)
        for m in REPLY.finditer(src):
            c = m.group(3)
            k = 0
            for i, p in enumerate(keys):
                if p > m.start(): break
                k = p
            tid, post = posts[k] if keys else ('?', '')
            rest, opener = strip_open(c)
            chk = CHECKIN.search(c)
            cls = None
            if opener:
                cls = 'opener/' + next(n for n, p in OPENERS if p.match(c))
            elif re.match(r'^(comeback|come back)\b', c, re.I):
                cls = 'opener/comeback'
            if chk and not cls:
                cls = 'checkin'
            elif chk:
                cls += '+checkin'
            if cls:
                n_total += 1
                stats[cls] += 1
                rich = ('angka' if re.search(r'\d', rest) else ('istilah' if MATH.search(rest) else 'kosong'))
                richness[(cls.split('+')[0], rich)] += 1
                dump.write(f"{os.path.basename(f)}\tT{tid}\t[{cls}]\t[{rich}]\tPOST: {post[:130]}\n\tKOMEN: {c}\n\tSISA: {rest[:150]}\n\n")
    dump.close()
    print("TOTAL komentar meta-kedatangan:", n_total)
    for k, v in stats.most_common(): print(f"  {v:5d}  {k}")
    print("\nkekayaan sisa konten (per kelas utama):")
    agg = collections.Counter()
    for (cls, rich), v in richness.items(): agg[(cls, rich)] += v
    for (cls, rich), v in sorted(agg.items()):
        if v > 3: print(f"  {cls:12s} {rich:8s} {v}")
main()
