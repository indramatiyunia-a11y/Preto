# threads-57.ts — BATCH 53 (id 1401-1425, authorId 901-925)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1401, "½ × 186 = 93. Genap rapi, hasil 93 = 3 × 31. Temen jawab 92 — 92 × 2 = 184, kurang 2. Susulan: ½ × 194? 97 ya? prima besar! Cek dong",
 ["93 pas", "92 × 2 = 184 kurang", "3 × 31 pas", "susulan 97 pas", "PR gue: 186 = 2 × 3 × 31", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 97 prima dua digit terakhir"],
 "telat dari arsip. separuh 186. tuntas", ("186/2 = 93", "186/2", "93"))

t(1402, "Kerja bersama: A 12 jam, B 60 jam → 1/12 + 1/60 = 6/60 = 1/10 per jam → 10 jam. Penyebut 60 penyatu. Susulan: A 60, B 12? 10 juga ya? komutatif. Cek dong",
 ["6/60 pas", "1/10 pas", "10 jam pas", "susulan 10 juga pas", "PR gue: 5/60 + 1/60 = 6/60", "iya, KPK", "jawaban post semua kuku", "catet: jumlah laju", "iya, b41 juga", "jawaban post lengkap", "susulan: 10 jam satu hari kerja"],
 "telat dari arsip. kerja bersama 12-60. tuntas", ("1/12 + 1/60 = 1/10 → 10 jam", "5+1", "6"))

t(1403, "KPK 45 dan 60 = 180. Kelipatan 45: 45, 90, 135, 180. Kelipatan 60: 60, 120, 180. Temen jawab 2.700 — 180 cukup. Susulan: 180 = 45 × 4 = 60 × 3 ya? cek. Cek dong",
 ["180 pas", "2.700 kelebihan", "45 × 4 pas", "PR gue: 45 = 3² × 5, 60 = 2² × 3 × 5", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK kelipatan pertama", "iya, b41 juga", "jawaban post lengkap", "susulan: 180 = 2² × 3² × 5"],
 "telat dari arsip. KPK 45-60. tuntas", ("KPK 45, 60 = 180", "45*4", "180"))

t(1404, "T88 = 3.916. Tangga segitiga 88 tingkat: 88 × 89/2. Temen nanya dekat 4.000 — ya, 84 lagi. Susulan: T89? 4.005 ya? (3.916 + 89). Cek dong",
 ["3.916 pas", "88 × 44,5 pas", "susulan 4.005 pas", "PR gue: 3.916 + 89 naik", "iya pas", "jawaban post semua kuku", "catet: n(n+1)/2", "iya, rumus", "jawaban post lengkap", "susulan: T89 lewat 4.000"],
 "telat dari arsip. T88 = 3.916. tuntas", ("T88 = 88 × 89/2 = 3.916", "88*89/2", "3916"))

t(1405, "Fibonacci: ..., 28.657, 46.368 — 28.657 + 17.711 = 46.368. Temen nanya 46.368 habis dibagi 2: ya, genap. Susulan: setelah 46.368? 75.025 ya? (46.368 + 28.657). Cek dong",
 ["46.368 pas", "genap pas", "75.025 pas", "PR gue: 28.657 + 17.711 cek", "iya pas", "susulan: 75.025 habis dibagi 5", "iya pas", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, b37 juga", "jawaban post lengkap", "susulan: 46.368 lima digit"],
 "telat dari arsip. Fibonacci 46.368. tuntas", ("28.657 + 17.711 = 46.368", "28657+17711", "46368"))

t(1406, "41 × 3 = 123. Seratus dua puluh tiga. Temen tulis 113 — salah 10. Cek: 41 × 3 = 123 (40×3 + 3). Susulan: 41 × 4? 164 ya? Cek dong",
 ["123 pas", "113 salah 10", "164 pas", "PR gue: 120 + 3 rapi", "iya pas", "susulan: 41 prima", "iya pas", "jawaban post semua kuku", "catet: deket 40 ditambah", "iya, trik", "jawaban post lengkap", "susulan: 123 habis dibagi 3"],
 "telat dari arsip. 41 × 3. tuntas", ("41 × 3 = 123", "41*3", "123"))

t(1407, "2^16 = 65.536. Tangga pangkat 2 besar. Temen nanya 65.536 = 256² ya? pas! (2^8)². Susulan: 2^17? 131.072 ya? Cek dong",
 ["65.536 pas", "256² pas", "131.072 pas", "PR gue: 32.768 × 2 jalur", "iya, b52 juga", "jawaban post semua kuku", "catet: pangkat genap = kuadrat", "iya, b33 juga", "jawaban post lengkap", "susulan: 65.536 = 2^16 ikonik"],
 "telat dari arsip. 2^16 = 65.536. tuntas", ("2^16 = 65.536 = 256²", "256*256", "65536"))

t(1408, "Heks 400 = 1.024. 4 × 256 — dan 1.024 = 2^10! Temen heran heksa masuk tangga 2: 16² × 4 = 2^8 × 2² = 2^10. Susulan: 800? 2.048 ya? (8 × 256). Cek dong",
 ["4 × 256 pas", "1.024 pas", "2^10 juga pas", "susulan 2.048 pas", "PR gue: 16² = 256 dasar", "iya, b48 juga", "jawaban post semua kuku", "catet: heksa digit × 256", "iya, b44 juga", "jawaban post lengkap", "susulan: 1.024 tiga wajah konteks"],
 "telat dari arsip. heksa 400. tuntas", ("4 × 256 = 1.024", "4*256", "1024"))

t(1409, "Digital root 222.222: 2×6 = 12 → 3. Temen kali enam dua — cepat. Susulan: 555.555? 30 → 3 ya? Cek dong",
 ["12 → 3 pas", "2 × 6 cepat pas", "susulan 3 juga pas", "PR gue: 555.555 digit sum 30", "iya pas", "jawaban post semua kuku", "catet: jumlah sampai satu digit", "iya, b43 juga", "jawaban post lengkap", "susulan: digit seragam cepat"],
 "telat dari arsip. digital root 222.222. tuntas", ("2 × 6 = 12 → 3", "2*6", "12"))

t(1410, "9.000 mod 7 = 5. 8.995 = 1.285 × 7, sisa 5. Temen pecah: 8.400 habis 7 (7 × 1.200), 9.000 − 8.400 = 600, 600 mod 7 = 5 (595 sisa 5). Susulan: 9.002? sisa 0 ya? — 7 × 1.286. Cek dong",
 ["1.285 × 7 pas", "sisa 5 pas", "susulan 0 pas", "PR gue: 8.400 + 600 pecah", "iya, hemat", "jawaban post semua kuku", "catet: kelipatan besar dulu", "iya, b40 juga", "jawaban post lengkap", "susulan: 9.002 = 7 × 1.286"],
 "telat dari arsip. 9.000 mod 7. tuntas", ("9.000 − 8.995 = 5", "9000-8995", "5"))

t(1411, "Pembulatan 2.718 ke dua desimal = 2,72. Digit ketiga 8 lewat 5 → naik. Temen tulis 2,71 — 8 jelas naik. Susulan: 2.715? 2,72 ya? (5 naik, aturan). Cek dong",
 ["2,72 pas", "8 naik pas", "susulan 2,72 pas", "PR gue: lihat digit ketiga", "iya, b47 juga", "jawaban post semua kuku", "catet: desimal dua aturan", "iya, b47 juga", "jawaban post lengkap", "susulan: 2,718 dekat e!"],
 "telat dari arsip. pembulatan 2,718. tuntas", ("2,718 → 2,72", "2718*1", "2718"))

t(1412, "Estimasi 8.004 − 3.996 ≈ 4.000 via 8.000 − 4.000. Persis 4.008 — selisih 8. Temen heran kompensasi ganda (+4 dan −4). Susulan: 7.996 − 4.004? persis 3.992 ya? Cek dong",
 ["4.000 pas", "4.008 pas", "selisih 8 pas", "susulan 3.992 pas", "PR gue: 8.000 − 4.000 bulat", "iya, cepat", "jawaban post semua kuku", "catet: bulatkan dua suku", "iya, b44 juga", "jawaban post lengkap", "susulan: 8.004 − 3.996 = 4.008"],
 "telat dari arsip. estimasi 8.004−3.996. tuntas", ("8.004 − 3.996 = 4.008", "8004-3996", "4008"))

t(1413, "89 × 11 = 979. Kompensasi: 90 × 11 = 990, kurang 11 → 979. Temen tulis 990 — lupa selisih 1 × 11. Susulan: 88 × 11? 968 ya? Cek dong",
 ["990 − 11 pas", "979 pas", "susulan 968 pas", "PR gue: 1 × 11 = 11", "iya, b40 juga", "jawaban post semua kuku", "catet: deket 90 dikurangi", "iya, trik", "jawaban post lengkap", "susulan: 979 deket 980"],
 "telat dari arsip. kompensasi 89×11. tuntas", ("990 − 11 = 979", "990-11", "979"))

t(1414, "601 × 599 = 359.999. (600+1)(600−1) = 360.000 − 1. Temen kali lurus lama. Susulan: 701 × 699? 489.999 ya? (700² − 1). Cek dong",
 ["360.000 − 1 pas", "359.999 pas", "susulan 489.999 pas", "PR gue: 600² = 360.000", "iya, identitas", "jawaban post semua kuku", "catet: (a±1) selisih kuadrat", "iya, b42 juga", "jawaban post lengkap", "susulan: 359.999 deket 360.000"],
 "telat dari arsip. 601 × 599. tuntas", ("360.000 − 1 = 359.999", "360000-1", "359999"))

t(1415, "Jumlah ganjil sampai 45: 1+3+...+45 = 529 = 23². Dua puluh tiga bilangan ganjil → kuadrat 23. Temen heran 529 juga 23² dari b25! Susulan: sampai 47? 576 ya? = 24². Cek dong",
 ["529 pas", "23² pas", "susulan 576 pas", "PR gue: 23 ganjil → 23²", "iya, b41 juga", "jawaban post semua kuku", "catet: n ganjil pertama = n²", "iya, teorema", "jawaban post lengkap", "susulan: 529 dua wajah konteks"],
 "telat dari arsip. ganjil 23². tuntas", ("23² = 529", "23*23", "529"))

t(1416, "Digit terakhir 7^100: siklus 7-9-3-1, 100 mod 4 = 0 → posisi 4 → akhir 1. Temen heran pangkat ratusan sekali lihat sisa. Susulan: 7^101? akhir 7 ya? Cek dong",
 ["100 mod 4 = 0 pas", "akhir 1 pas", "susulan akhir 7 pas", "PR gue: habis dibagi 4 = posisi 4", "iya, b46 juga", "jawaban post semua kuku", "catet: siklus empat", "iya, b40 juga", "jawaban post lengkap", "susulan: 7^100 raksasa"],
 "telat dari arsip. digit akhir 7^100. tuntas", ("100 mod 4 = 0 → akhir 1", "100", "100"))

t(1417, "Kerja bersama: A 40 jam, B 60 jam → 1/40 + 1/60 = 5/120 = 1/24 per jam → 24 jam. Penyebut 120 penyatu. Temen heran lama — dua-duanya lambat. Susulan: A 30, B 60? 20 jam ya? (2/60 + 1/60 = 1/20). Cek dong",
 ["5/120 pas", "1/24 pas", "24 jam pas", "susulan 20 jam pas", "PR gue: 3/120 + 2/120 = 5/120", "iya, KPK", "jawaban post semua kuku", "catet: jumlah laju", "iya, b41 juga", "jawaban post lengkap", "susulan: 24 jam satu hari"],
 "telat dari arsip. kerja bersama 40-60. tuntas", ("1/40 + 1/60 = 1/24 → 24 jam", "3+2", "5"))

t(1418, "Tangki: isi 20 jam, bocor 30 jam → net 1/20 − 1/30 = 1/60 per jam → 60 jam penuh. Net super tipis — bocor rakus banget. Susulan: isi 20, bocor 60? net 30 jam ya? (2/60 = 1/30). Cek dong",
 ["1/60 pas", "60 jam pas", "net super tipis pas", "susulan 30 jam pas", "PR gue: 3/60 − 2/60 = 1/60", "iya, KPK 60", "jawaban post semua kuku", "catet: net tipis sangat lama", "iya, b40 juga", "jawaban post lengkap", "susulan: 60 jam dua setengah hari"],
 "telat dari arsip. tangki 20-30. tuntas", ("1/20 − 1/30 = 1/60 → 60 jam", "3-2", "1"))

t(1419, "Reseh dibelah: 2⅔ ÷ 2 = 1⅓. 8/3 × 1/2 = 8/6 = 4/3. Temen heran campuran balik — setengah dari 2⅔ memang 1⅓. Susulan: 2⅔ ÷ 4? ⅔ ya? Cek dong",
 ["8/3 pas", "4/3 pas", "1⅓ pas", "susulan ⅔ pas", "PR gue: 8/3 × 1/4 = 2/3", "iya pas", "jawaban post semua kuku", "catet: bagi = kali kebalikan", "iya, b48 juga", "jawaban post lengkap", "susulan: 1⅓ cup setengah"],
 "telat dari arsip. resep 2⅔ ÷ 2. tuntas", ("8/3 × 1/2 = 4/3", "8*1", "8"))

t(1420, "90°C → °F: 90 × 9/5 + 32 = 162 + 32 = 194°F. Temen kali 9/5 kaku — 90/5 = 18, × 9 = 162. Susulan: 80°C? 176°F ya? (144 + 32). Cek dong",
 ["162 + 32 pas", "194°F pas", "90/5 = 18 cepat", "susulan 176°F pas", "PR gue: 90 × 9 = 810, /5 = 162", "iya pas", "jawaban post semua kuku", "catet: bagi 5 dulu lalu × 9", "iya, b40 juga", "jawaban post lengkap", "susulan: 194°F oven"],
 "telat dari arsip. 90°C ke F. tuntas", ("90 × 9/5 = 162", "810/5", "162"))

t(1421, "Kopi 1:15 — 6 g bubuk → 90 ml air. 6 × 15. Temen nanya 6 g sangat kecil? ristretto. Susulan: 8 g? 120 ml ya? Cek dong",
 ["90 ml pas", "6 g ristretto pas", "susulan 120 ml pas", "PR gue: 6 × 15 = 90", "iya pas", "jawaban post semua kuku", "catet: g × 15 = ml", "iya, b40 juga", "jawaban post lengkap", "susulan: 90 ml ristretto"],
 "telat dari arsip. kopi 6 g. tuntas", ("6 × 15 = 90 ml", "6*15", "90"))

t(1422, "Lima kaleng 240 ml = 1,2 L. 240 × 5. Temen tulis 12 L — salah tangga. Cek: 1.200 ml = 1,2 L. Susulan: 4 kaleng? 960 ml ya? Cek dong",
 ["1,2 L pas", "12 salah tangga", "susulan 960 ml pas", "PR gue: 1.200 ml", "iya pas", "jawaban post semua kuku", "catet: ml ke liter bagi 1.000", "iya, b37 juga", "jawaban post lengkap", "susulan: 1,2 L kotak jus"],
 "telat dari arsip. kaleng 240. tuntas", ("240 × 5 = 1.200 ml", "240*5", "1200"))

t(1423, "Penyimpanan 5 file × 6,6 GB = 33 GB. Temen tulis 330 — koma hilang. Cek: 6,6 × 5 = 33. Susulan: 2 file? 13,2 GB ya? Cek dong",
 ["33 GB pas", "330 koma hilang", "susulan 13,2 GB pas", "PR gue: 6 + 0,6 per file", "iya, 30 + 3", "jawaban post semua kuku", "catet: desimal × bulat", "iya, b37 juga", "jawaban post lengkap", "susulan: 33 GB boros"],
 "telat dari arsip. file 6,6 GB. tuntas", ("6,6 × 5 = 33 GB", "6.6*5", "33"))

t(1424, "Unggah 7.200 MB dengan 40 MB/s → 180 detik = 3 menit. Temen bagi 7.200/40 langsung — 180 pas. Susulan: 80 MB/s? 90 detik ya? Cek dong",
 ["180 detik pas", "3 menit pas", "susulan 90 detik pas", "PR gue: 72 × 10 jalur", "iya, pecah", "jawaban post semua kuku", "catet: ukuran ÷ laju", "iya, b37 juga", "jawaban post lengkap", "susulan: 180 dtk tiga menit"],
 "telat dari arsip. unggah 40 MB/s. tuntas", ("7.200/40 = 180 detik", "7200/40", "180"))

t(1425, "Kartu 77 lembar dibagi 8 pemain: tiap 9, sisa 5. Beda dengan kapasitas — sini sisa dibagi adil manual. Susulan: 80 kartu? 10 tepat ya? Cek dong",
 ["tiap 9 pas", "sisa 5 pas", "sisa dibagi manual pas", "susulan 10 tepat pas", "PR gue: 8 × 9 = 72", "iya pas", "jawaban post semua kuku", "catet: konteks pembagian rata", "iya, b52 juga", "jawaban post lengkap", "susulan: 5 kartu aman di tengah"],
 "telat dari arsip. kartu 77. tuntas", ("77 − 72 = 5 sisa", "77-72", "5"))

assert len(T) == 25, len(T)
build2(T, 1401, "threads-57.ts", 57, 53, 901, 53,
       "Topik: separuh 186, kerja bersama 12-60, KPK 45-60, T88, Fibonacci 46.368, 41×3, 2^16, heksa 400, digital root 222.222, 9.000 mod 7, pembulatan 2,718, estimasi 8.004−3.996, kompensasi 89×11, 601×599, ganjil 23², digit akhir 7^100, kerja bersama 40-60, tangki 20-30, resep 2⅔ ÷ 2, 90°C ke F, kopi 6 g, kaleng 240, file 6,6 GB, unggah 40 MB/s, kartu 77.")
print("threads-57 ok")
