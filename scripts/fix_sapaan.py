#!/usr/bin/env python3
"""REVISI SAPAAN ANONIM (16 Nov 2026)
Hapus klaim identitas ke lawan bicara di komentar: kak/pak/bu/bang/mbak/mba/dik/om/teh.
SIMPAN: tokoh cerita (abang toko, bu kos, om tukang bengkel, om-om pelanggan, nenek
persona, adik/kakak keluarga sendiri, ibu/bapak pasangan cerita), takaran "sendok
teh", minuman/es teh, survei kopi-teh, soal permutasi KAKAK/MAMA, dek kartu.
Post (content panjang) TIDAK disentuh massal — hanya lewat tabel eksplisit.
"""
import re, glob, collections, os

ROOT = '/home/z/my-project/src/lib/threadz/data'
LOG = open('/home/z/my-project/scripts/fix_log.txt', 'w')
STRPAT = re.compile(r'"((?:[^"\\]|\\.)*)"')
REPLYCTX = re.compile(r'\{ authorId: \d+, minutesAgo: \d+, content: $')

# --- tabel eksplisit: substring unik -> pengganti (post & komentar) ---
REPL = [
    # vocative "om-om," di awal post (mangga, mangga-lapis, oli, bodi x2)
    ("om-om, bantu itung.", "bantu itung dong."),
    ("om-om, jelasin ke gue cara ngitungnya.", "jelasin ke gue cara ngitungnya dong."),
    ("om-om, campuran oli mesin dua tak rasio 1:25.", "campuran oli mesin dua tak rasio 1:25."),
    ("om-om, itungan bodi gue.", "itungan bodi gue."),
    ("om-om biasanya itung begini buat atur servis", "orang biasanya itung begini buat atur servis"),
    # om ke lawan bicara di komentar
    ("bini om yang bener", "bini lu yang bener"),
    ("itungan om pas", "itunganmu pas"),
    ("ke om: jam pertama", "jam pertama"),
    ("balik aja ke om: kalau semua jam 1 ribu", "balik aja: kalau semua jam 1 ribu"),
    ("pegang buku mesin om.", "pegang buku mesinnya."),
    ("om-om lama kadang hafalan lama", "mekanik lama kadang hafalan lama"),
    ("om-om bengkel biasanya bener", "mekanik bengkel biasanya bener"),
    ("om-om boleh punya pendapat, mesin gak", "orang boleh punya pendapat, mesin gak"),
    # bunda/bapak tanpa dasar persona
    ("Bunda beda periode. Cek dong", "Beda periode. Cek dong"),
    ("bunda rajin banget ngitung buat masak", "rajin banget ngitung buat masak"),
    ("bunda bisa jelasin ke anak-anak", "bisa jelasin ke anak-anak"),
    # mas
    ("pakai kalimat tanya: mas, di slip 22 hari", "pakai kalimat tanya: di slip 22 hari"),
    # teh
    # ("teh" TIDAK dihapus: persona penjual pasar menyebut dirinya "teh"
    #  di post sendiri + partikel Sunda (= sih). Sapaan grounded oleh self-ID.)
]

def teh_keep(s, i):
    """teh yang harus dipertahankan (komoditas/takaran/survei)"""
    before = s[max(0, i-9):i].lower()
    after = s[i+3:i+8].lower()
    if before.endswith('sendok ') or before.endswith('es '): return True
    if after.startswith('-an'): return True           # sendok teh-an
    if re.search(r'\d $', before): return True        # "10 teh, 5 lain-lain"
    if before.endswith('dari '): return True          # "lebih dari teh"
    if re.search(r'\b(es teh|teh (tarik|melati|tubruk|botol|kiloan|ikat))', s.lower()): 
        if re.search(r'\b(es teh|teh (tarik|melati|tubruk|botol))', s.lower()): return True
    return False

BULK = re.compile(r'(?<!-)\b(kak|pak|bu|bang|mbak|mba|dik|om)\b(?!-)', re.IGNORECASE)

def bulk_edit(s):
    out = list(s); changes = []
    for m in BULK.finditer(s):
        t = m.group(1).lower()
        if t == 'bu' and re.match(r'\s+(kos|guru)', s[m.end():]): continue
        if t == 'om' and s[m.end():m.end()+1] == '-': continue
        if t == 'teh' and teh_keep(s, m.start()): continue
        for j in range(m.start(), m.end()): out[j] = ''
        changes.append(t)
    if not changes: return s, []
    s = ''.join(out)
    s = re.sub(r'[ ]{2,}', ' ', s)
    s = re.sub(r' ([,.:;?!])', r'\1', s)
    s = re.sub(r'^[\s,]+', '', s)
    s = re.sub(r'^([a-z])', lambda m: m.group(1).upper(), s)
    return s, changes

stats = collections.Counter(); changed_files = set()
report_posts = []
for f in sorted(glob.glob(ROOT + '/*.ts')):
    src = open(f).read(); orig = src
    # 1) tabel eksplisit
    for old, new in REPL:
        n = src.count(old)
        if n:
            src = src.replace(old, new)
            stats['repl/' + old[:34]] += n
            LOG.write(f"{os.path.basename(f)} REPL x{n}: {old[:70]} -> {new[:70]}\n")
    # 2) bulk di string komentar saja
    spans = list(STRPAT.finditer(src))
    newparts, last = [], 0
    for m in spans:
        s = m.group(1)
        pre = src[max(0, m.start()-70):m.start()]
        is_reply = bool(REPLYCTX.search(pre))
        if is_reply:
            ns, ch = bulk_edit(s)
            if ch:
                for c in ch: stats['bulk/' + c] += 1
                LOG.write(f"{os.path.basename(f)} BULK[{','.join(ch)}]: {s[:60]} -> {ns[:60]}\n")
                s = ns
        else:
            for t in ['kak','pak','bu','bang','mbak','mba','dik']:
                if re.search(r'(?<!-)\b' + t + r'\b(?!-)', s, re.I):
                    report_posts.append((os.path.basename(f), s[:110]))
        newparts.append(src[last:m.start(1)]); newparts.append(s); last = m.end(1)
    newparts.append(src[last:]); src = ''.join(newparts)
    if src != orig:
        open(f, 'w').write(src); changed_files.add(os.path.basename(f))

LOG.close()
print("file berubah:", len(changed_files))
for k, v in stats.most_common(40): print(f"  {v:5d}  {k}")
print("\n=== POST berisi istilah bulk (REVIEW, tidak diedit) ===")
for fn, s in report_posts: print(f"  [{fn}] {s}")
