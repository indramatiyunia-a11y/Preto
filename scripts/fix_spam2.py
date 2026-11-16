#!/usr/bin/env python3
"""FASE 3b: (a) hapus junk meta 'iya, bNN juga' + seluruh sisa template
'susulan ...' (termasuk 2 varian kemarin), (b) audit string massal lintas author."""
import re, glob, os, collections, hashlib

ROOT = '/home/z/my-project/src/lib/threadz/data'
REPLYPAT = re.compile(r'(\{ authorId: (\d+), minutesAgo: (\d+), content: ")((?:[^"\\]|\\.)*)(")')
def norm(s):
    s = re.sub(r'[^a-z0-9 ]+', ' ', s.lower())
    return re.sub(r'\s+', ' ', s).strip()

CEK_BALIK = [
 "susulan: dihitung balik pelan-pelan, tetep nyantol","susulan dicek dua arah, hasil sama, aman",
 "susulan: kebalik jalannya, angka tetap satu","susulan: gue jalanin mundur dari jawaban, ketemu soalnya lagi",
 "susulan verifikasi manual, cocok semua","susulan: diulang pake cara sebelah, gak geser",
 "susulan cek silang dua metode, pas","susulan: gak ada yang lepas pas gue balikin",
 "susulan: dua jalur, satu jawaban","susulan: dihitung ulang sambil ngopi, tetep bener",
 "susulan cek mundur, angkanya nggak lari","susulan: gue tes pake contoh kecil dulu, cocok",
 "susulan: dipecah per langkah, semua cocok","susulan: cek pakai contoh lain, sama hasilnya",
 "susulan: gue catet ulang di kertas, pas","susulan: diulang tiga kali, tetep di situ",
 "susulan: cek pakai logika balik, aman","susulan: dua kali putar, hasil nggak pindah",
]
JALAN_LAIN = [
 "susulan: lewat jalur beda, nyampe di angka yang sama","susulan cara kedua, hasilnya nempel",
 "susulan: gue pake jalan pintas beda, tetep nyantol","susulan: metode lain, jawaban gak pindah",
 "susulan: dicoba lewat pecahan, hasil sama","susulan: pakai skema lain, pas juga",
 "susulan: gue geser urutan langkah, tetep bener","susulan: lewat tabel, angkanya sama",
 "susulan: jalur B juga nyampe","susulan: dibongkar cara lain, tetep cocok",
 "susulan: coba lewat gambar, pas juga","susulan: pakai rasio beda, hasil konsisten",
 "susulan: jalan ketiga, gak ada geser","susulan: cek pake contoh mirip, nyambung",
 "susulan: cara kilat, hasil sama","susulan: gue susun ulang, jawaban diam di tempat",
 "susulan: lewat pembagian, cocok juga","susulan: dicoba mundur dari jawaban, pas",
 "susulan: pakai pendekatan lain, gak ada selisih",
]
KALKULATOR = [
 "susulan: kalkulator cuma juri, hitungannya tetep manual","susulan: mesin buat verifikasi, nalar yang nyusun",
 "susulan: cek kalkulator, cocok, tapi logikanya yang jalan duluan","susulan: tekan tombol doang, alur tetep dari otak",
 "susulan: kalkulator nyumbang pasti, bukan pemikiran","susulan: dicocokin ke kalkulator, hasil sepaham",
 "susulan: alat bantu boleh, jalan pikir tetep diperlukan","susulan: tombolnya gue yang ngitung, rencananya dari kepala",
 "susulan: kalkulator dipanggil belakangan, bukan duluan","susulan: angka dari mesin, makna dari orang",
 "susulan: dicek via kalkulator, bener juga","susulan: alat ukur, bukan pengganti langkah",
 "susulan: kalkulator setuju, gue lebih setuju","susulan: mesin nambah keyakinan, bukan jalan pintas",
 "susulan: verifikasi kilat pakai kalkulator, aman","susulan: hitung manual duluan, kalkulator tinggal ngangguk",
 "susulan: angka akurat, cara tetep manusiawi","susulan: kalkulator buat cek akhir, bukan awal",
]
BULAT = [
 "susulan: dibulatkan dulu, dikeja belakangan","susulan: angkanya bulat, gak maksa",
 "susulan: bulat dulu, sisa dihitung jujur","susulan: bulatan bikin enak dibawa ke kepala",
 "susulan: dibulat dikit, makna tetep utuh","susulan: angka bulat enak diinget, sisa dicatet",
 "susulan: dibulat ke angka ramah, aman","susulan: bulatnya membantu, bukan mengubah",
 "susulan: dibulatin dikit, hasil tetep jujur","susulan: angka enak, langkah makin enteng",
 "susulan: bulat dulu, cek presisi belakangan","susulan: angka bulat bikin cepet, gak bohong",
 "susulan: dibulat sepersekian, intinya gak geser","susulan: bulatnya pas buat perkiraan cepet",
 "susulan: dibulat, tapi batasnya jelas","susulan: angka rapi, langkah makin enteng",
 "susulan: bulat dikit, niat tetep presisi","susulan: bulatan enak buat verbal, presisi tulis",
]
GAMBAR = [
 "susulan: sketsa dulu, rumus belakangan","susulan gambar bikin langkah keliatan",
 "susulan: gambar dulu, angka nyusul","susulan: gambar bikin arah jelas baru dihitung",
 "susulan: sketsa kecil, jalan pikir kelihatan","susulan: digambar dulu biar gak buntu",
 "susulan: visual dulu, hitungan nyantol","susulan: gambar duluan, rumus tinggal ngaku",
 "susulan: sketsa bikin langkah gak melompat","susulan: gambar dulu, jadi keliatan mana yang salah",
 "susulan: digambar dulu, bingungnya ilang","susulan: gambar bikin gak salah arah",
 "susulan: sketsa dulu, bingung turun setengah","susulan: visual bikin langkah nempel di kepala",
 "susulan: gambar dulu baru itung, urutan yang enak","susulan: sketsa kecil, efeknya gede",
 "susulan: gambar dulu, angka gak lari","susulan: visual dulu, rumus jadi teman",
]
FAM = [
 ("cekbalik", re.compile(r'susulan( cek balik selalu|: gue cek balik pake cara beda, hasil sama| dihitung balik dua arah, cocok semua)$', re.I), CEK_BALIK),
 ("jalurlain", re.compile(r'susulan( cek lagi pakai jalan lain|: dicoba lewat jalan ketiga, nyantol juga| pakai cara lain, hasil gak geser)$', re.I), JALAN_LAIN),
 ("kalku", re.compile(r'susulan( kalkulator boleh buat cek bukan jalan pintas|: kalkulator buat verifikasi, nalar tetap utama| mesin boleh bantu, otak yang mutusin)$', re.I), KALKULATOR),
 ("bulat", re.compile(r'susulan( angka bulat enak|: dibulatkan dulu baru dikeja, enak| angkanya bulat, gak memaksa)$', re.I), BULAT),
 ("gambar", re.compile(r'susulan( gambar dulu kalau bingung|: sketsa dulu baru masuk rumus| gambar bikin langkah keliatan)$', re.I), GAMBAR),
]
BN = re.compile(r'^iya,? b\d+ juga$', re.I)
BN_POOL = ["iya","pas","iya juga","ikut setuju","sepaham","iya betul","gak bantah","sama arah","setuju saya",
           "iya nih","bener juga","iya sih","manggut","yes","true itu","oke","mantap itu","sepakat juga",
           "iya banget","benar itu","ok kuku","iya amin","serupa","gitu juga","iya jelas"]

filesrc, plan = {}, []
used_thread = collections.defaultdict(set)
ctr_by_author = collections.defaultdict(int)
for f in sorted(glob.glob(ROOT + '/*.ts')):
    src = open(f).read(); filesrc[f] = src
    for m in REPLYPAT.finditer(src):
        n = norm(m.group(4))
        pool = None
        for name, pat, p in FAM:
            if pat.match(n): pool = p; break
        if pool is None and BN.match(n): pool = BN_POOL
        if pool is None: continue
        aid = m.group(2)
        a0 = int(hashlib.md5((name_of := aid + (pat.pattern if pool is not BN_POOL else 'BN')).encode()).hexdigest()[:5], 16) % len(pool)
        k = ctr_by_author[a0]; ctr_by_author[a0] += 1
        anchor = (f, src.rfind("id:", max(0, m.start(4)-6000), m.start(4)))
        cand, t = None, 0
        while t < len(pool) * 2:
            c = pool[(a0 + k + t) % len(pool)]
            if c not in used_thread[anchor] and c != m.group(4):
                cand = c; break
            t += 1
        if cand is None: cand = pool[a0 % len(pool)] + " nih"
        used_thread[anchor].add(cand)
        plan.append((f, m.start(4), m.end(4), cand))

plan.sort(key=lambda t: (t[0], -t[1]))
cur_f, src = None, ""
for f, st, en, new in plan:
    if f != cur_f:
        if cur_f is not None: open(cur_f, 'w').write(src)
        cur_f, src = f, filesrc[f]
    src = src[:st] + new + src[en:]
if cur_f is not None: open(cur_f, 'w').write(src)
print("penggantian fase 3b:", len(plan))

# --- audit: string yang masih muncul massal lintas author ---
groups = collections.defaultdict(lambda: [0, set(), ""])
for f in sorted(glob.glob(ROOT + '/*.ts')):
    for m in REPLYPAT.finditer(open(f).read()):
        n = norm(m.group(4))
        g = groups[n]; g[0] += 1; g[1].add(m.group(2)); g[2] = m.group(4)
mass = [(v[0], len(v[1]), v[2]) for v in groups.values() if v[0] >= 15]
mass.sort(reverse=True)
print("\n=== string >=15x (semua author) ===")
for c, na, s in mass[:25]:
    print(f"  {c:4d}x oleh {na:4d} author | {s[:90]}")
