#!/usr/bin/env python3
"""PEMBONGKARAN FORMULA META-KEDATANGAN v2 (17 Nov 2026).
HANYA komentar yang kalimat awalnya diawali penanda kedatangan/cek-in yang
disentuh. Kalimat meta murni (tanpa digit) dibuang beruntun maks 3; kalimat
meta berlabel ("Telat dari arsip: 20% ...") cukup potong labelnya. Sisa
dipertahankan; kalau sisa < 5 kata -> disusun dari angka post induk.
Komentar tanpa penanda meta TIDAK DIS ENTUH SAMA SEKALI."""
import re, glob, collections, hashlib, os

ROOT = '/home/z/my-project/src/lib/threadz/data'
TH = re.compile(r'id: (\d+),\s*\n\s*authorId: \d+,\s*\n\s*minutesAgo: \d+,\s*\n\s*shares: \d+,\s*\n\s*content:\s*\n?\s*"([^"]*)"', re.S)
REPLY = re.compile(r'(\{ authorId: (\d+), minutesAgo: (\d+), content: ")((?:[^"\\]|\\.)*)(")')

ARR = re.compile(r'^\s*(telat|nyusul|mampir|nyampe|kelewat|lewat dari|dari arsip|dari simpanan|dari notif|sori|maaf|comeback|nyamber|nanggepin)\b', re.I)
ARR_CUT = re.compile(r'^\s*(?:telat|nyusul|mampir|nyampe|kelewat|lewat dari|dari arsip|dari simpanan|dari notif|sori|maaf|comeback|nyamber|nanggepin)\b(?:\s+(?:banget|banget aku|banget nih|nyamber|nanggepin|mampir|lewat|dari (?:arsip|simpanan|notif|pencarian)|di thread ini|di sini|sejam|dikit|nih|deh|wkwk|tapi(?: tetep| tetap)?|tapi jawabannya tetep|tapi tetap))*[\.,:;!]?\s*', re.I)
CHK = re.compile(r'^\s*udah (?:kejawab|beres|kelar|dijawab|dikumpul)[^.?!]*\?\s*', re.I)
AGE = re.compile(r'^\s*udah (?:minggu|hari|jam|bulan) ke berapa[^.?!]*\?\s*', re.I)
GUARD = re.compile(r'\b(wajar|biasa|normal)\b', re.I)
CONNECTOR = re.compile(r'^(tapi( tetep| tetap| jawabannya tetep)?|nah|terus|padahal)\s+', re.I)
TEMPL = [
 "kalau {n} diganti angka lain, langkahnya tetep sama kan?",
 "angka {n} di soal ini emang buat ngetes teliti",
 "{n}-nya kuncinya, sisanya tinggal jalanin",
 "soal {n} kayak gini suka nongol pas ulangan",
 "ada yang coba {n} lewat jalan lain gak?",
 "dari {n} ke {m} itu lompatan yang paling sering ketuker",
 "kasus {n} begini enak buat latihan cepet",
 "{n} dan {m} beda tipis, gampang ketuker",
 "catet {n}-nya, soal begini balik modal pas ujian",
 "{n} itu contoh klasik, langsung nyambung ke rumusnya",
 "yang bikin mikir di soal ini {n}-nya",
 "angka {n} ama {m}-nya cocok buat latihan bareng",
]

def clean_rest(r):
    r = CONNECTOR.sub('', r)
    r = r.lstrip(' ,.;:–-')
    r = re.sub(r'^([a-z])', lambda m: m.group(1).upper(), r)
    return r

def rewrite(c):
    """kembalikan teks baru, atau None kalau komentar tidak meta"""
    sents = re.split(r'(?<=[.!?])\s+', c)
    out, dropped, i = [], 0, 0
    while i < len(sents) and dropped < 3:
        s = sents[i]
        if GUARD.search(s):
            break
        if ARR.match(s):
            m = ARR_CUT.match(s)
            if m and m.end() < len(s) and re.search(r'\d', s):
                out.append(s[m.end():]); i += 1; dropped += 1
                break
            if not re.search(r'\d', s):
                i += 1; dropped += 1
                continue
            break
        if CHK.match(s) or AGE.match(s):
            i += 1; dropped += 1
            continue
        break
    if dropped == 0: return None
    rest = clean_rest(' '.join(sents[i:] if i < len(sents) else []) or ' '.join(out))
    rest = rest.strip()
    return rest

files = sorted(glob.glob(ROOT + '/threads-[0-9]*.ts'))
filesrc, insts = {}, []
posts = {}
for f in files:
    s = open(f).read(); filesrc[f] = s
    th = [(m.start(), m.group(1), m.group(2)) for m in TH.finditer(s)]
    for m in REPLY.finditer(s):
        st = m.start(); tid, post = '?', ''
        for a, t, p in th:
            if a < st: tid, post = t, p
            else: break
        insts.append([f, m.group(2), m.start(4), m.end(4), m.group(4), tid, post])

def post_nums(post):
    nums = re.findall(r'\d+(?:[.,]\d+)*', post)
    out, seen = [], set()
    for n in nums:
        if n not in seen: out.append(n); seen.add(n)
        if len(out) == 2: break
    while len(out) < 2: out.append(out[-1] if out else '?')
    return out

plan, log = [], []
used_tpl_thread = collections.defaultdict(set)
cap = collections.Counter()
n_keep = n_tpl = 0
for e in insts:
    f, aid, st, en, c, tid, post = e
    rest = rewrite(c)
    if rest is None: continue
    if rest and len(rest.split()) >= 5:
        n_keep += 1
        plan.append((f, st, en, rest))
        log.append(f"{os.path.basename(f)} T{tid} KEEP: {c[:55]} -> {rest[:55]}")
    else:
        n1, n2 = post_nums(post)
        a0 = int(hashlib.md5((aid + tid).encode()).hexdigest()[:4], 16) % len(TEMPL)
        used = used_tpl_thread[(f, tid)]
        cand = None
        for t in range(len(TEMPL)):
            k = (a0 + t) % len(TEMPL)
            if k not in used and cap[(k, n1, n2)] < 12:
                cand = k; break
        if cand is None:
            cand = min(range(len(TEMPL)), key=lambda k: cap[(k, n1, n2)])
        used_tpl_thread[(f, tid)].add(cand)
        cap[(cand, n1, n2)] += 1
        new = TEMPL[cand].format(n=n1, m=n2)
        n_tpl += 1
        plan.append((f, st, en, new))
        log.append(f"{os.path.basename(f)} T{tid} TPL{cand}: {c[:55]} -> {new[:55]}")

plan.sort(key=lambda t: (t[0], -t[1]))
cur, src = None, ""
for f, st, en, new in plan:
    if f != cur:
        if cur is not None: open(cur, 'w').write(src)
        cur, src = f, filesrc[f]
    src = src[:st] + new + src[en:]
if cur is not None: open(cur, 'w').write(src)
print(f"disentuh: {len(plan)} (keep {n_keep}, template {n_tpl})")
LOG = open('/home/z/my-project/scripts/fix_log3.txt', 'w'); LOG.write('\n'.join(log)); LOG.close()

sisa = 0
for f in files:
    for m in REPLY.finditer(open(f).read()):
        if ARR.match(m.group(4)): sisa += 1
print("sisa pembuka meta:", sisa)
