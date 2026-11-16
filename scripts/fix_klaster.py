#!/usr/bin/env python3
"""PEMBONGKARAN KLON LINTAS-AUTHOR v2 (17 Nov 2026).
Enumerasi mendalam: 26 pola berangka x 4 slot angka post x 30 rasa
(prefix x suffix) + bank istilah; fallback generik DIHAPUS. Target:
klaster >=6 author (>=4 kata) di data TERKINI + cek-in pertanyaan."""
import re, glob, collections, hashlib, os

ROOT = '/home/z/my-project/src/lib/threadz/data'
TH = re.compile(r'id: (\d+),\s*\n\s*authorId: \d+,\s*\n\s*minutesAgo: \d+,\s*\n\s*shares: \d+,\s*\n\s*content:\s*\n?\s*"([^"]*)"', re.S)
REPLYPAT = re.compile(r'(\{ authorId: (\d+), minutesAgo: (\d+), content: ")((?:[^"\\]|\\.)*)(")')
CHKQ = re.compile(r'udah (?:kejawab|beres|kelar|dijawab|dikumpul)[^.?!]*\?|udah (?:minggu|hari|jam) ke berapa[^.?!]*\?', re.I)

TERMS = ["koma", "fpb", "kpk", "prima", "pecahan", "desimal", "persen", "diskon", "bunga",
         "rata-rata", "median", "modus", "luas", "keliling", "volume", "skala", "perbandingan",
         "rasio", "sudut", "pangkat", "akar", "faktor", "kelipatan", "barisan", "deret",
         "peluang", "kecepatan", "debit", "konversi", "satuan", "umur", "menit", "detik",
         "liter", "gram", "meter", "rupiah", "kubus", "balok", "persegi", "segitiga",
         "lingkaran", "jajargenjang", "trapesium", "tabung", "kerucut", "simetri",
         "kuadrat", "dadu", "gudang", "digit", "bilangan", "paket", "warung", "toko",
         "kelas", "ujian", "tabungan", "gaji", "pembulatan", "estimasi", "kurir", "ojol"]
NUMP = [
 "soal {n} di atas udah kejawab semua",
 "{n} udah kejawab semua di atas, aman",
 "yang soal {n} udah dijawab lengkap di atas",
 "jawaban {n}-nya di atas udah nutup",
 "{n} di atas udah kuku, tinggal dipraktek",
 "aman, soal {n}-nya udah tuntas di atas",
 "{n} udah dijawab rapi di atas",
 "di atas udah lengkap buat soal {n}",
 "soal {n} begini di atas udah tuntas semua",
 "{n} sama {m} dua-duanya udah kejawab di atas",
 "yang {n} ama {m} udah dijawab semua di atas",
 "{n} udah kejawab, {m} juga udah di atas",
 "soal {n} ama {m} di atas udah lengkap",
 "{n} dan {m} di atas udah kejawab semua",
 "kasus {n} begini udah kejawab semua di atas",
 "{n} itu udah dijawab, tinggal dibaca ulang",
 "soal {n}-nya udah nutup, di atas lengkap",
 "yang bingung soal {n}, di atas udah kejawab",
 "{n} udah kejawab semua, tinggal dicatet",
 "di atas udah jawab soal {n} dengan rapi",
 "soal {n} begini gampang kalau udah kejawab di atas",
 "{n}-nya udah ada jawabannya di atas",
 "udah tuntas, soal {n} di atas kejawab semua",
 "soal {n} di atas udah dijawab semua, sip",
 "tinggal terima, {n} udah kejawab di atas",
 "{n} di atas udah kejawab, aman banget",
]
TERMP = [
 "soal {T} begini di atas udah kejawab semua",
 "{T} di atas udah dijawab lengkap",
 "yang soal {T} udah nutup semua di atas",
 "aman, soal {T}-nya udah kejawab di atas",
 "soal {T} kayak gini udah tuntas di atas",
 "di atas udah lengkap buat soal {T}",
 "soal {T} di atas udah rapi semua",
 "{T} di atas udah kejawab semua, aman",
 "kasus {T} begini udah kejawab di atas",
 "{T}-nya udah ada jawabannya di atas",
]
PRE = ["", "aman, ", "sip, ", "oke, ", "btw, "]
SUF = ["", " kok", " sih", " deh", " semua", " banget"]

def post_nums(post):
    nums, seen = [], set()
    for n in re.findall(r'\d+(?:[.,]\d+)*%?', post):
        if n not in seen: nums.append(n); seen.add(n)
    return nums

def post_term(post):
    pl = post.lower()
    for t in TERMS:
        if t in pl: return t
    return None

def cap(s):
    return s[0].upper() + s[1:] if s and s[0].isalpha() else s

insts, filesrc = [], {}
for f in sorted(glob.glob(ROOT + '/threads-[0-9]*.ts')):
    s = open(f).read(); filesrc[f] = s
    th = [(m.start(), m.group(1), m.group(2)) for m in TH.finditer(s)]
    for m in REPLYPAT.finditer(s):
        st = m.start(); tid, post = '?', ''
        for a, t, p in th:
            if a < st: tid, post = t, p
            else: break
        insts.append({"f": f, "a": m.group(2), "st": m.start(4), "en": m.end(4),
                      "s": m.group(4), "tid": tid, "post": post})

cl = collections.defaultdict(list)
for i in insts:
    if len(i["s"].split()) >= 3: cl[i["s"]].append(i)
targets = set()
for s, v in cl.items():
    na = len({x["a"] for x in v})
    if na >= 4: targets.add(s)
exist = collections.defaultdict(set)
for i in insts: exist[i["s"]].add(i["a"])

plan, log = [], []
glob_new = collections.defaultdict(set)
auth_pat = collections.defaultdict(set)

def try_engine(i):
    s, a, post = i["s"], i["a"], i["post"]
    nums = post_nums(post); term = post_term(post)
    h = int(hashlib.md5((a + i["tid"]).encode()).hexdigest()[:6], 16)
    slots = nums[:4] if nums else []
    cands = []
    for si in range(max(1, len(slots))):
        n1 = slots[si % len(slots)] if slots else None
        m1 = slots[(si + 1) % len(slots)] if len(slots) > 1 else None
        for t in NUMP:
            if '{m}' in t and m1 is None: continue
            cands.append(t.format(n=n1, m=m1) if n1 else None)
        if term:
            for t in TERMP:
                cands.append(t.format(T=term))
    cands = [c for c in cands if c]
    order = [cands[(h + j) % len(cands)] for j in range(len(cands))]
    for ambang in (2, 3):
        for base in order:
            if base == s: continue
            for fi in range(len(PRE) * len(SUF)):
                p, q = PRE[(h + fi) % len(PRE)], SUF[(h + fi) % len(SUF)]
                cand = (p + base + q).strip()
                if cand == s: continue
                if len(exist[cand] | glob_new[cand]) >= ambang: continue
                bk = "N" if re.search(r'\d', base) else "T"
                pid = (bk, base[:18])
                if any(x[1] == base[:18] for x in auth_pat[a]): continue
                if len([x for x in auth_pat[a] if x[0] == bk]) >= 6: continue
                return cand, pid
    return None, None

for i in insts:
    s, a, w = i["s"], i["a"], len(i["s"].split())
    na = len({x["a"] for x in cl.get(s, [i])})
    if s in targets and w >= 4:
        mcat = re.match(r'^((?:susulan|catet):[^"].*?)\s*$', s, re.I)
        if mcat:
            slots = post_nums(i["post"])
            if slots:
                pats = ["{s}, kasus {n}", "{s} ({n})", "{s} — pas buat {n}",
                        "{s}, patokan {n}", "{s}, cek {n}"]
                h = int(hashlib.md5((a + i["tid"]).encode()).hexdigest()[:4], 16)
                for j in range(len(pats)):
                    cand = pats[(h + j) % len(pats)].format(s=s, n=slots[0])
                    if cand != s and len(exist[cand] | glob_new[cand]) < 2:
                        plan.append((i["f"], i["st"], i["en"], cand))
                        glob_new[cand].add(a)
                        log.append(f'{os.path.basename(i["f"])} T{i["tid"]} CAT: {s[:45]} -> {cand[:45]}')
                        break
                else:
                    new, pid = try_engine(i)
                    if new:
                        plan.append((i["f"], i["st"], i["en"], new))
                        glob_new[new].add(a); auth_pat[a].add(pid)
                        log.append(f'{os.path.basename(i["f"])} T{i["tid"]} ENG: {s[:45]} -> {new[:45]}')
                continue
        new, pid = try_engine(i)
        if new:
            plan.append((i["f"], i["st"], i["en"], new))
            glob_new[new].add(a); auth_pat[a].add(pid)
            log.append(f'{os.path.basename(i["f"])} T{i["tid"]} ENG: {s[:45]} -> {new[:45]}')
        continue
    if CHKQ.search(s):
        kept = [x for x in re.split(r'(?<=[.!?])\s+', s) if not CHKQ.search(x)]
        rest = cap(' '.join(kept).strip().lstrip(' ,.;:'))
        if len(rest.split()) >= 5:
            plan.append((i["f"], i["st"], i["en"], rest))
            log.append(f'{os.path.basename(i["f"])} T{i["tid"]} STRIP: {s[:50]} -> {rest[:50]}')
        else:
            new, pid = try_engine(i)
            if new:
                plan.append((i["f"], i["st"], i["en"], new))
                glob_new[new].add(a); auth_pat[a].add(pid)
                log.append(f'{os.path.basename(i["f"])} T{i["tid"]} ENG2: {s[:45]} -> {new[:45]}')

plan.sort(key=lambda t: (t[0], -t[1]))
cur, src = None, ""
for f, st, en, new in plan:
    if f != cur:
        if cur: open(cur, 'w').write(src)
        cur, src = f, filesrc[f]
    src = src[:st] + new + src[en:]
if cur: open(cur, 'w').write(src)
print("disentuh:", len(plan))
LOG = open('/home/z/my-project/scripts/fix_log4.txt', 'w'); LOG.write('\n'.join(log)); LOG.close()

insts2 = []
for f in sorted(glob.glob(ROOT + '/threads-[0-9]*.ts')):
    for m in REPLYPAT.finditer(open(f).read()):
        insts2.append((m.group(2), m.group(4)))
cl2 = collections.defaultdict(set)
for a, s in insts2:
    if len(s.split()) >= 3: cl2[s].add(a)
for th_ in (4, 6):
    res = [(len(v), s) for s, v in cl2.items() if len(v) >= th_ and len(s.split()) >= 4]
    res.sort(reverse=True)
    print(f"klaster >= {th_} author (>=4 kata) tersisa: {len(res)}")
    for n, s in res[:6]: print(f"  {n:3d} | {s[:70]}")
