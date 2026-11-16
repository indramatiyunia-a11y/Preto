# threads-54.ts — BATCH 50 (id 1326-1350, authorId 826-850)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1326, "½ × 170 = 85. Genap rapi, hasil 85 = 5 × 17. Temen jawab 84 — 84 × 2 = 168, kurang 2. Susulan: ½ × 178? 89 ya? Fibonacci prima! Cek dong",
 ["85 pas", "84 × 2 = 168 kurang", "susulan 89 pas", "Fibonacci prima pas", "PR gue: 170 = 2 × 5 × 17", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 89 = Fibonacci ke-11"],
 "telat dari arsip. separuh 170. tuntas", ("170/2 = 85", "170/2", "85"))

t(1327, "Kerja bersama: A 40 jam, B 24 jam → 1/40 + 1/24 = 8/120 = 1/15 per jam → 15 jam. Penyebut 120 penyatu. Temen heran lama — keduanya lambat. Susulan: A 40, B 10? 8 jam ya? (1/40 + 4/40 = 1/8). Cek dong",
 ["8/120 pas", "1/15 pas", "15 jam pas", "susulan 8 jam pas", "PR gue: KPK 120 penyatu", "iya, KPK", "jawaban post semua kuku", "catet: jumlah laju", "iya, b41 juga", "jawaban post lengkap", "susulan: 15 jam dua shift"],
 "telat dari arsip. kerja bersama 40-24. tuntas", ("1/40 + 1/24 = 1/15 → 15 jam", "3+5", "8"))

t(1328, "KPK 32 dan 48 = 96. Kelipatan 32: 32, 64, 96. Kelipatan 48: 48, 96. Temen jawab 1.536 — 96 cukup. Susulan: 96 = 32 × 3 = 48 × 2 ya? cek. Cek dong",
 ["96 pas", "1.536 kelebihan", "32 × 3 pas", "PR gue: 32 = 2⁵, 48 = 2⁴ × 3", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK kelipatan pertama", "iya, b41 juga", "jawaban post lengkap", "susulan: 96 = 2⁵ × 3"],
 "telat dari arsip. KPK 32-48. tuntas", ("KPK 32, 48 = 96", "32*3", "96"))

t(1329, "T90 = 4.095. Tangga segitiga 90 tingkat — dan 4.095 = 2^12 − 1! Deret dan pangkat bertemu lagi. Temen kaget. Susulan: T91? 4.186 ya? (4.095 + 91). Cek dong",
 ["4.095 pas", "2^12 − 1 pas", "susulan 4.186 pas", "PR gue: 90 × 91/2", "iya, rumus", "jawaban post semua kuku", "catet: segitiga-pangkat ketemu", "iya, b43 juga", "jawaban post lengkap", "susulan: 4.095 deket 4.096"],
 "telat dari arsip. T90 = 4.095. tuntas", ("T90 = 90 × 91/2 = 4.095", "90*91/2", "4095"))

t(1330, "Fibonacci: ..., 6.765, 10.946 — 6.765 + 4.181 = 10.946. Temen nanya 10.946 habis dibagi 2: ya, genap — posisi Fibonacci ke-21. Susulan: setelah 10.946? 17.711 ya? (10.946 + 6.765). Cek dong",
 ["10.946 pas", "genap pas", "17.711 pas", "PR gue: 6.765 + 4.181 cek", "iya pas", "susulan: pola genap tiap tiga", "iya, b47 juga", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, b37 juga", "jawaban post lengkap", "susulan: 17.711 lima digit"],
 "telat dari arsip. Fibonacci 10.946. tuntas", ("6.765 + 4.181 = 10.946", "6765+4181", "10946"))

t(1331, "31 × 3 = 93. Sembilan puluh tiga. Temen tulis 83 — salah 10. Cek: 31 × 3 = 93 (30×3 + 3). Susulan: 31 × 4? 124 ya? Cek dong",
 ["93 pas", "83 salah 10", "124 pas", "PR gue: 90 + 3 rapi", "iya pas", "susulan: 31 prima", "iya pas", "jawaban post semua kuku", "catet: deket 30 ditambah", "iya, trik", "jawaban post lengkap", "susulan: 93 habis dibagi 3"],
 "telat dari arsip. 31 × 3. tuntas", ("31 × 3 = 93", "31*3", "93"))

t(1332, "2^13 = 8.192. Tangga pangkat 2 lanjut. Temen nanya 8.192 = 2 × 4.096 ya? pas — lipat dua. Susulan: 2^14? 16.384 ya? Cek dong",
 ["8.192 pas", "2 × 4.096 pas", "16.384 pas", "PR gue: tangga lipat dua", "iya, b37 juga", "jawaban post semua kuku", "catet: pangkat 2 naik terus", "iya, b49 juga", "jawaban post lengkap", "susulan: 8.192 GB = 8 TB basis 2"],
 "telat dari arsip. 2^13 = 8.192. tuntas", ("2^13 = 8.192", "4096*2", "8192"))

t(1333, "Heks 110 = 272. 1 × 256 + 1 × 16. Temen baca seratus sepuluh desimal — heksa dibaca per posisi 256-16-1. Susulan: 111? 273 ya? (+1). Cek dong",
 ["1 × 256 pas", "272 pas", "posisi 256-16-1 pas", "susulan 273 pas", "PR gue: 256 + 16 rapi", "iya pas", "jawaban post semua kuku", "catet: digit × pangkat 16", "iya, b44 juga", "jawaban post lengkap", "susulan: 272 habis dibagi 16"],
 "telat dari arsip. heksa 110. tuntas", ("256 + 16 = 272", "256+16", "272"))

t(1334, "Digital root 12.345: 1+2+3+4+5 = 15 → 6. Berurutan cantik! Temen heran jumlahnya rapi. Susulan: 12.346? 16 → 7 ya? Cek dong",
 ["15 → 6 pas", "berurutan pas", "susulan 7 pas", "PR gue: 1+5 = 6 lanjut", "iya pas", "jawaban post semua kuku", "catet: jumlah sampai satu digit", "iya, b43 juga", "jawaban post lengkap", "susulan: 12.345 ikonik"],
 "telat dari arsip. digital root 12.345. tuntas", ("1+2+3+4+5 = 15 → 6", "1+2+3+4+5", "15"))

t(1335, "5.000 mod 7 = 2. 4.998 = 714 × 7, sisa 2. Temen pecah: 4.900 habis 7 (7 × 700), 5.000 − 4.900 = 100, 100 mod 7 = 2. Susulan: 5.002? sisa 4 ya? Cek dong",
 ["714 × 7 pas", "sisa 2 pas", "susulan 4 pas", "PR gue: 4.900 + 100 pecah", "iya, hemat", "jawaban post semua kuku", "catet: kelipatan besar dulu", "iya, b40 juga", "jawaban post lengkap", "susulan: 5.000 = 4.998 + 2"],
 "telat dari arsip. 5.000 mod 7. tuntas", ("5.000 − 4.998 = 2", "5000-4998", "2"))

t(1336, "Pembulatan 6.666 ke ratusan = 6.700. 66 di atas 50 → naik. Temen tulis 6.600 — 66 lewat tengah. Susulan: 6.616? 6.600 ya? (16 turun). Cek dong",
 ["6.700 pas", "66 naik pas", "susulan 6.600 pas", "PR gue: tengah 50 ratusan", "iya, b41 juga", "jawaban post semua kuku", "catet: dua digit akhir penentu", "iya, b43 juga", "jawaban post lengkap", "susulan: 6.666 seragam, seru"],
 "telat dari arsip. pembulatan 6.666. tuntas", ("6.666 → 6.700", "6700-6666", "34"))

t(1337, "Estimasi 51 × 39 ≈ 2.000 via 50 × 40. Persis 1.989 — selisih 11. Dua pembulatan arah beda saling sebagian. Susulan: 49 × 41 ≈ 2.000 ya? persis 2.009. Cek dong",
 ["2.000 pas", "1.989 pas", "selisih 11 pas", "susulan 2.009 pas", "PR gue: 50 × 40 tengah", "iya, cepat", "jawaban post semua kuku", "catet: bulatkan dua faktor", "iya, b42 juga", "jawaban post lengkap", "susulan: 51 × 39 = 1.989"],
 "telat dari arsip. estimasi 51×39. tuntas", ("51 × 39 = 1.989", "51*39", "1989"))

t(1338, "194 × 5 = 970. Kompensasi: 200 × 5 = 1.000, kurang 6 × 5 = 30 → 970. Temen tulis 980 — selisihnya 30. Susulan: 192 × 5? 960 ya? Cek dong",
 ["1.000 − 30 pas", "970 pas", "susulan 960 pas", "PR gue: 6 × 5 = 30", "iya, b40 juga", "jawaban post semua kuku", "catet: selisih × faktor lain", "iya, dua langkah", "jawaban post lengkap", "susulan: 970 deket 1.000"],
 "telat dari arsip. kompensasi 194×5. tuntas", ("1.000 − 30 = 970", "1000-30", "970"))

t(1339, "301 × 299 = 89.999. (300+1)(300−1) = 90.000 − 1. Temen kali lurus lama. Susulan: 401 × 399? 159.999 ya? (400² − 1). Cek dong",
 ["90.000 − 1 pas", "89.999 pas", "susulan 159.999 pas", "PR gue: 300² = 90.000", "iya, identitas", "jawaban post semua kuku", "catet: (a±1) selisih kuadrat", "iya, b42 juga", "jawaban post lengkap", "susulan: 89.999 deket 90.000"],
 "telat dari arsip. 301 × 299. tuntas", ("90.000 − 1 = 89.999", "90000-1", "89999"))

t(1340, "Digit terakhir 8^10: siklus 8-4-2-6, 10 mod 4 = 2 → posisi 2 → akhir 4. Temen nanya 8^9? akhir 8. Susulan: 8^8? akhir 6 ya? Cek dong",
 ["10 mod 4 = 2 pas", "akhir 4 pas", "8^9 akhir 8 pas", "susulan akhir 6 pas", "PR gue: siklus 8-4-2-6", "iya, b46 juga", "jawaban post semua kuku", "catet: sisa mod 4 posisi", "iya, b40 juga", "jawaban post lengkap", "susulan: siklus empat stabil"],
 "telat dari arsip. digit akhir 8^10. tuntas", ("8^2 = 64 akhir 4", "64*1", "64"))

t(1341, "Orang-hari: 45 orang-hari ÷ 9 orang = 5 hari. Temen kali — kebalik. Bagi total ÷ orang. Susulan: 15 orang? 3 hari ya? Cek dong",
 ["45 ÷ 9 pas", "5 hari pas", "susulan 3 hari pas", "PR gue: 9 × 5 = 45 cek", "iya, selalu", "jawaban post semua kuku", "catet: total ÷ orang", "iya, b40 juga", "jawaban post lengkap", "susulan: 45 = 9 × 5"],
 "telat dari arsip. orang-hari 45. tuntas", ("45/9 = 5 hari", "45/9", "5"))

t(1342, "Tangki: isi 6 jam, bocor 42 jam → net 1/6 − 1/42 = 6/42 = 1/7 per jam → 7 jam penuh. Penyebut 42 penyatu. Susulan: isi 6, bocor 84? net 8 jam ya? (13/84 = 1/6,46? cek: 1/6 − 1/84 = 13/84 → 6,46 an). Cek dong",
 ["6/42 pas", "1/7 pas", "7 jam pas", "susulan 6,46 an pas", "PR gue: 14/84 − 1/84 = 13/84", "iya, rumit dikit", "jawaban post semua kuku", "catet: KPK 42 penyatu", "iya, b40 juga", "jawaban post lengkap", "susulan: 7 jam satu shift"],
 "telat dari arsip. tangki 6-42. tuntas", ("1/6 − 1/42 = 1/7 → 7 jam", "7-1", "6"))

t(1343, "Reseh dikualipatkan: 3¾ × 4 = 15. 15/4 × 4 = 15 utuh — coret 4 dan 4. Temen heran hasil besar: empat resep. Susulan: 3¾ × 8? 30 ya? dua kali lipatnya. Cek dong",
 ["15/4 pas", "15 pas", "coret 4-4 pas", "susulan 30 pas", "PR gue: 3,75 × 4 = 15 desimal", "iya, dua jalur", "jawaban post semua kuku", "catet: coret silang", "iya, b43 juga", "jawaban post lengkap", "susulan: 15 cup banyak!"],
 "telat dari arsip. resep 3¾ × 4. tuntas", ("3¾ × 4 = 15", "3.75*4", "15"))

t(1344, "55°C → °F: 55 × 9/5 + 32 = 99 + 32 = 131°F. Temen kali 9/5 kaku — 55/5 = 11, × 9 = 99. Susulan: 65°C? 149°F ya? (117 + 32). Cek dong",
 ["99 + 32 pas", "131°F pas", "55/5 = 11 cepat", "susulan 149°F pas", "PR gue: 55 × 9 = 495, /5 = 99", "iya pas", "jawaban post semua kuku", "catet: bagi 5 dulu lalu × 9", "iya, b40 juga", "jawaban post lengkap", "susulan: 131°F sangat panas"],
 "telat dari arsip. 55°C ke F. tuntas", ("55 × 9/5 = 99", "495/5", "99"))

t(1345, "Kopi 1:15 — 13 g bubuk → 195 ml air. 13 × 15 = 195. Temen kali 13 × 1,5 — rasio 1:15. Susulan: 12 g? 180 ml ya? Cek dong",
 ["195 ml pas", "rasio 1:15 pas", "susulan 180 ml pas", "PR gue: 13 × 15 = 195", "iya pas", "jawaban post semua kuku", "catet: g × 15 = ml", "iya, b40 juga", "jawaban post lengkap", "susulan: 195 ml mug standar"],
 "telat dari arsip. kopi 13 g. tuntas", ("13 × 15 = 195 ml", "13*15", "195"))

t(1346, "Sepuluh kaleng 330 ml = 3,3 L. 330 × 10. Temen tulis 33 L — salah tangga. Cek: 3.300 ml = 3,3 L. Susulan: 5 kaleng? 1,65 L ya? Cek dong",
 ["3,3 L pas", "33 salah tangga", "susulan 1,65 L pas", "PR gue: 3.300 ml", "iya pas", "jawaban post semua kuku", "catet: ml ke liter bagi 1.000", "iya, b37 juga", "jawaban post lengkap", "susulan: 3,3 L stok seminggu"],
 "telat dari arsip. kaleng 330 × 10. tuntas", ("330 × 10 = 3.300 ml", "330*10", "3300"))

t(1347, "Penyimpanan 5 file × 7,2 GB = 36 GB. Temen tulis 360 — koma hilang. Cek: 7,2 × 5 = 36. Susulan: 2 file? 14,4 GB ya? Cek dong",
 ["36 GB pas", "360 koma hilang", "susulan 14,4 GB pas", "PR gue: 7 + 0,2 per file", "iya, 35 + 1", "jawaban post semua kuku", "catet: desimal × bulat", "iya, b37 juga", "jawaban post lengkap", "susulan: 36 GB boros"],
 "telat dari arsip. file 7,2 GB. tuntas", ("7,2 × 5 = 36 GB", "7.2*5", "36"))

t(1348, "Unggah 4.200 MB dengan 30 MB/s → 140 detik = 2 menit 20 detik. Temen bagi 4.200/30 langsung — 140 pas. Susulan: 60 MB/s? 70 detik ya? Cek dong",
 ["140 detik pas", "2m20d pas", "susulan 70 detik pas", "PR gue: 42 × 10 jalur", "iya, pecah", "jawaban post semua kuku", "catet: ukuran ÷ laju", "iya, b37 juga", "jawaban post lengkap", "susulan: 140 dtk dua menitan"],
 "telat dari arsip. unggah 30 MB/s. tuntas", ("4.200/30 = 140 detik", "4200/30", "140"))

t(1349, "Bus 30 kursi, 130 siswa → 5 bus. 130/30 = 4 sisa 10 → 5 (sisa tetap jalan). Temen jawab 4 — 10 siswa tertinggal! Susulan: 120 siswa? 4 tepat ya? Cek dong",
 ["4 sisa 10 pas", "5 bus pas", "susulan 4 tepat pas", "PR gue: 4 × 30 = 120", "iya pas", "jawaban post semua kuku", "catet: bulat ke atas ada sisa", "iya, b37 juga", "jawaban post lengkap", "susulan: 5 × 30 = 150 muat"],
 "telat dari arsip. bus 130 siswa. tuntas", ("130/30 = 4 sisa 10 → 5", "5*30", "150"))

t(1350, "1+2+...+55 = 1.540. Pasangan 27,5 an? eh rumus 55 × 56/2 = 55 × 28. Temen heran desimal tengah — 28 pasang penuh kok: (1+55) sampai (27+29), plus 28 sendirian di tengah. Susulan: 1..56? 1.596 ya? (1.540 + 56). Cek dong",
 ["55 × 28 pas", "1.540 pas", "28 sendirian tengah pas", "susulan 1.596 pas", "PR gue: genap data punya tengah", "iya, menarik", "jawaban post semua kuku", "catet: berpasangan dua ujung", "iya, b37 juga", "jawaban post lengkap", "susulan: 1.540 = 55 × 28"],
 "telat dari arsip. deret 1..55. tuntas", ("55 × 56/2 = 1.540", "55*56/2", "1540"))

assert len(T) == 25, len(T)
build2(T, 1326, "threads-54.ts", 54, 50, 826, 50,
       "Topik: separuh 170, kerja bersama 40-24, KPK 32-48, T90 = 2^12 − 1, Fibonacci 10.946, 31×3, 2^13, heksa 110, digital root 12.345, 5.000 mod 7, pembulatan 6.666, estimasi 51×39, kompensasi 194×5, 301×299, digit akhir 8^10, orang-hari 45, tangki 6-42, resep 3¾ × 4, 55°C ke F, kopi 13 g, kaleng 330 × 10, file 7,2 GB, unggah 30 MB/s, bus 130 siswa, deret 1..55.")
print("threads-54 ok")
