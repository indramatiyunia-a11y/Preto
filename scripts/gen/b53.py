# threads-53.ts — BATCH 49 (id 1301-1325, authorId 801-825)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1301, "½ × 162 = 81. Genap rapi, hasil 81 = 9² = 3⁴. Temen jawab 80 — 80 × 2 = 160, kurang 2. Susulan: ½ × 170? 85 ya? Cek dong",
 ["81 pas", "80 × 2 = 160 kurang", "9² pas", "susulan 85 pas", "PR gue: 162 = 2 × 81", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 81 dua wajah"],
 "telat dari arsip. separuh 162. tuntas", ("162/2 = 81", "162/2", "81"))

t(1302, "Kerja bersama: A 30 jam, B 20 jam → 1/30 + 1/20 = 5/60 = 1/12 per jam → 12 jam. Penyebut 60 penyatu. Susulan: A 60, B 20? 15 jam ya? (1/60 + 3/60 = 4/60 = 1/15). Cek dong",
 ["5/60 pas", "1/12 pas", "12 jam pas", "susulan 15 jam pas", "PR gue: KPK 60 penyatu", "iya, KPK", "jawaban post semua kuku", "catet: jumlah laju", "iya, b41 juga", "jawaban post lengkap", "susulan: 12 jam setengah hari"],
 "telat dari arsip. kerja bersama 30-20. tuntas", ("1/30 + 1/20 = 1/12 → 12 jam", "2+3", "5"))

t(1303, "KPK 25 dan 30 = 150. Kelipatan 25: 25, 50, ..., 150. Kelipatan 30: 30, 60, 90, 120, 150. Temen jawab 750 — 150 cukup. Susulan: 150 = 25 × 6 = 30 × 5 ya? cek. Cek dong",
 ["150 pas", "750 kelebihan", "25 × 6 pas", "PR gue: 25 = 5², 30 = 2 × 3 × 5", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK kelipatan pertama", "iya, b41 juga", "jawaban post lengkap", "susulan: 150 = 2 × 3 × 5²"],
 "telat dari arsip. KPK 25-30. tuntas", ("KPK 25, 30 = 150", "25*6", "150"))

t(1304, "T80 = 3.240. Tangga segitiga 80 tingkat: 80 × 81/2. Temen nanya 3.240 kuadrat? bukan — akar ≈ 56,9. Susulan: T81? 3.321 ya? (3.240 + 81). Cek dong",
 ["3.240 pas", "80 × 40,5 pas", "susulan 3.321 pas", "PR gue: 3.240 + 81 naik", "iya pas", "jawaban post semua kuku", "catet: n(n+1)/2", "iya, rumus", "jawaban post lengkap", "susulan: 3.240 habis dibagi 81"],
 "telat dari arsip. T80 = 3.240. tuntas", ("T80 = 80 × 81/2 = 3.240", "80*81/2", "3240"))

t(1305, "Fibonacci: ..., 4.181, 6.765 — 4.181 + 2.584 = 6.765. Temen nanya habis dibagi 5: ya, akhir 5. Fibonacci tiap lima kelipatan 5. Susulan: setelah 6.765? 10.946 ya? (6.765 + 4.181). Cek dong",
 ["6.765 pas", "habis 5 pas", "10.946 pas", "PR gue: 4.181 + 2.584 cek", "iya pas", "susulan: pola kelipatan 5 tiap 5", "iya, sifat", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, b37 juga", "jawaban post lengkap", "susulan: 6.765 = 5 × 1.353"],
 "telat dari arsip. Fibonacci 6.765. tuntas", ("4.181 + 2.584 = 6.765", "4181+2584", "6765"))

t(1306, "24 × 3 = 72. Tujuh puluh dua. Temen tulis 62 — salah 10. Cek: 24 × 3 = 72 (20×3 + 4×3). Susulan: 24 × 4? 96 ya? Cek dong",
 ["72 pas", "62 salah 10", "96 pas", "PR gue: 60 + 12 rapi", "iya pas", "susulan: 72 = 8 × 9 juga", "iya pas", "jawaban post semua kuku", "catet: pecah 20 + 4", "iya, standar", "jawaban post lengkap", "susulan: 72 jam = 3 hari"],
 "telat dari arsip. 24 × 3. tuntas", ("24 × 3 = 72", "24*3", "72"))

t(1307, "2^12 = 4.096. Tangga pangkat 2 naik terus: ..., 1.024, 2.048, 4.096. Temen heran 4.096 = 64² juga! Susulan: 2^13? 8.192 ya? Cek dong",
 ["4.096 pas", "64² juga pas", "8.192 pas", "PR gue: 1.024 × 4 jalur", "iya, b33 juga", "jawaban post semua kuku", "catet: tangga pangkat 2", "iya, b37 juga", "jawaban post lengkap", "susulan: 4.096 = 2¹² = 64²"],
 "telat dari arsip. 2^12 = 4.096. tuntas", ("2^12 = 4.096", "64*64", "4096"))

t(1308, "Heks FF = 255. F × 16 + F = 240 + 15. Max satu byte! Temen baru sadar 255 = 2⁸ − 1. Susulan: FE? 254 ya? satu di bawah. Cek dong",
 ["240 + 15 pas", "255 pas", "2⁸ − 1 pas", "susulan 254 pas", "PR gue: FF heksa penuh", "iya, ikonik", "jawaban post semua kuku", "catet: F = 15 dua digit", "iya, b41 juga", "jawaban post lengkap", "susulan: 255 max byte"],
 "telat dari arsip. heksa FF. tuntas", ("15 × 16 + 15 = 255", "240+15", "255"))

t(1309, "Digital root 888: 24 → 6. Tiga delapan → enam. Temen nanya 888 habis dibagi 3: ya, 296. Susulan: 999? 27 → 9 ya? habis 9 juga. Cek dong",
 ["24 → 6 pas", "296 pas", "susulan 9 pas", "PR gue: 888 = 8 × 111", "iya pas", "jawaban post semua kuku", "catet: jumlah sampai satu digit", "iya, b43 juga", "jawaban post lengkap", "susulan: 888 deket 900"],
 "telat dari arsip. digital root 888. tuntas", ("8+8+8 = 24 → 6", "8+8+8", "24"))

t(1310, "3.500 mod 7 = 0. 3.500 = 7 × 500 — kelipatan penuh. Temen heran gampang: 500 sudah habis 7. Susulan: 3.507? sisa 0 lagi ya? (7 × 501). Cek dong",
 ["0 pas", "7 × 500 pas", "3.507 juga 0 pas", "PR gue: ratusan kali 7", "iya, hemat", "jawaban post semua kuku", "catet: pecah 3.000 + 500", "iya, b46 juga", "jawaban post lengkap", "susulan: 3.500 habis 7"],
 "telat dari arsip. 3.500 mod 7. tuntas", ("3.500 = 7 × 500 → 0", "3500", "3500"))

t(1311, "Pembulatan 8.888 ke ribuan = 9.000. 888 lewat 500 → naik. Temen tulis 8.000 — 888 jelas besar. Susulan: 8.488? 8.000 ya? (488 turun). Cek dong",
 ["9.000 pas", "888 naik pas", "susulan 8.000 pas", "PR gue: tengah 500 ribuan", "iya, b41 juga", "jawaban post semua kuku", "catet: tiga digit akhir penentu", "iya, b44 juga", "jawaban post lengkap", "susulan: 8.888 seragam, seru"],
 "telat dari arsip. pembulatan 8.888. tuntas", ("8.888 → 9.000", "9000-8888", "112"))

t(1312, "Estimasi 598 + 401 ≈ 1.000 via 600 + 400. Persis 999 — selisih 1. Susulan: 599 + 402? persis 1.001 ya? selisih 1 kebalik. Cek dong",
 ["1.000 pas", "999 pas", "selisih 1 pas", "susulan 1.001 pas", "PR gue: 600 + 400 bulat", "iya, cepat", "jawaban post semua kuku", "catet: bulatkan dua suku", "iya, b42 juga", "jawaban post lengkap", "susulan: 598 + 401 = 999"],
 "telat dari arsip. estimasi 598+401. tuntas", ("598 + 401 = 999", "598+401", "999"))

t(1313, "299 × 3 = 897. Kompensasi: 300 × 3 = 900, kurang 3 → 897. Temen tulis 894 — selisihnya 1 × 3. Susulan: 298 × 3? 894 ya? Cek dong",
 ["900 − 3 pas", "897 pas", "susulan 894 pas", "PR gue: 1 × 3 = 3", "iya, b40 juga", "jawaban post semua kuku", "catet: deket 300", "iya, trik", "jawaban post lengkap", "susulan: 897 habis dibagi 3"],
 "telat dari arsip. kompensasi 299×3. tuntas", ("900 − 3 = 897", "900-3", "897"))

t(1314, "151 × 149 = 22.499. (150+1)(150−1) = 22.500 − 1. Temen kali lurus lama. Susulan: 161 × 159? 25.599 ya? (160² − 1). Cek dong",
 ["22.500 − 1 pas", "22.499 pas", "susulan 25.599 pas", "PR gue: 150² = 22.500", "iya, identitas", "jawaban post semua kuku", "catet: (a±1) selisih kuadrat", "iya, b42 juga", "jawaban post lengkap", "susulan: 22.499 deket 22.500"],
 "telat dari arsip. 151 × 149. tuntas", ("22.500 − 1 = 22.499", "22500-1", "22499"))

t(1315, "Jumlah ganjil sampai 37: 1+3+...+37 = 361 = 19². Sembilan belas bilangan ganjil → kuadrat 19. Temen heran 361 juga 19² dari b26! Susulan: sampai 39? 400 ya? = 20². Cek dong",
 ["361 pas", "19² pas", "susulan 400 pas", "PR gue: 19 ganjil → 19²", "iya, b41 juga", "jawaban post semua kuku", "catet: n ganjil pertama = n²", "iya, teorema", "jawaban post lengkap", "susulan: 361 dua wajah konteks"],
 "telat dari arsip. ganjil 19². tuntas", ("19² = 361", "19*19", "361"))

t(1316, "Digit terakhir 4^10: siklus 4-6, 10 genap → akhir 6. Temen hitung 4^10 = 1.048.576 — akhir 6 cek! (sama dengan 2^20, wajar: 4^10 = 2^20). Susulan: 4^11? akhir 4 ya? ganjil. Cek dong",
 ["siklus 4-6 pas", "10 genap → 6 pas", "1.048.576 pas", "4^10 = 2^20 pas", "PR gue: pangkat genap 2", "iya, b41 juga", "jawaban post semua kuku", "catet: siklus dua", "iya, b45 juga", "jawaban post lengkap", "susulan: dua notasi satu angka"],
 "telat dari arsip. digit akhir 4^10. tuntas", ("4^10 = 1.048.576 akhir 6", "1048576*1", "1048576"))

t(1317, "Kerja bersama: A 12 jam, B 36 jam → 1/12 + 1/36 = 4/36 = 1/9 per jam → 9 jam. Temen heran B tiga kali lebih lambat — gabungan tetap wajar. Susulan: A 36, B 18? 12 jam ya? (2/36 + 1/36 = 1/12). Cek dong",
 ["4/36 pas", "1/9 pas", "9 jam pas", "susulan 12 jam pas", "PR gue: KPK 36 penyatu", "iya, KPK", "jawaban post semua kuku", "catet: jumlah laju", "iya, b41 juga", "jawaban post lengkap", "susulan: 9 jam kerja penuh"],
 "telat dari arsip. kerja bersama 12-36. tuntas", ("1/12 + 1/36 = 1/9 → 9 jam", "3+1", "4"))

t(1318, "Tangki: isi 12 jam, bocor 36 jam → net 1/12 − 1/36 = 2/36 = 1/18 per jam → 18 jam penuh. Temen heran net tipis lagi. Susulan: isi 12, bocor 60? net 15 jam ya? (3/60 = 1/20? cek: 1/12 − 1/60 = 4/60 = 1/15 → 15 jam). Cek dong",
 ["2/36 pas", "1/18 pas", "18 jam pas", "susulan 15 jam pas", "PR gue: 5/60 − 1/60 = 4/60", "iya pas", "jawaban post semua kuku", "catet: KPK penyatu dulu", "iya, b40 juga", "jawaban post lengkap", "susulan: 18 jam hampir sehari"],
 "telat dari arsip. tangki 12-36. tuntas", ("1/12 − 1/36 = 1/18 → 18 jam", "3-1", "2"))

t(1319, "Reseh dibagi separuh: 2½ ÷ ½ = 5. Kali kebalikan: 5/2 × 2 = 5. Temen kaget hasil besar — memang, berapa banyak separuhan muat. Susulan: 3½ ÷ ½? 7 ya? Cek dong",
 ["5/2 pas", "5 pas", "kali kebalikan pas", "susulan 7 pas", "PR gue: 5/2 × 2 coret", "iya, cepat", "jawaban post semua kuku", "catet: bagi = kali kebalikan", "iya, b48 juga", "jawaban post lengkap", "susulan: 5 porsi separuh"],
 "telat dari arsip. resep 2½ ÷ ½. tuntas", ("5/2 × 2 = 5", "5*2/2", "5"))

t(1320, "−10°C → °F: −10 × 9/5 + 32 = −18 + 32 = 14°F. Temen kali minus — hasil minus 18, tambah 32. Susulan: −20°C? −4°F ya? (−36 + 32). Cek dong",
 ["−18 + 32 pas", "14°F pas", "minus dikali pas", "susulan −4°F pas", "PR gue: −20 × 9/5 = −36", "iya pas", "jawaban post semua kuku", "catet: tanda minus hati-hati", "iya, b45 juga", "jawaban post lengkap", "susulan: 14°F dingin banget"],
 "telat dari arsip. −10°C ke F. tuntas", ("32 − 18 = 14", "32-18", "14"))

t(1321, "Kopi 1:15 — 8 g bubuk → 120 ml air. 8 × 15. Temen nanya 8 g kecil? espresso single. Susulan: 9 g? 135 ml ya? Cek dong",
 ["120 ml pas", "8 g espresso pas", "susulan 135 ml pas", "PR gue: 8 × 15 = 120", "iya pas", "jawaban post semua kuku", "catet: g × 15 = ml", "iya, b40 juga", "jawaban post lengkap", "susulan: 120 ml single shot"],
 "telat dari arsip. kopi 8 g. tuntas", ("8 × 15 = 120 ml", "8*15", "120"))

t(1322, "Lima gelas 300 ml = 1,5 L. 300 × 5. Temen tulis 15 L — salah tangga. Cek: 1.500 ml = 1,5 L. Susulan: 4 gelas? 1,2 L ya? Cek dong",
 ["1,5 L pas", "15 salah tangga", "susulan 1,2 L pas", "PR gue: 1.500 ml", "iya pas", "jawaban post semua kuku", "catet: ml ke liter bagi 1.000", "iya, b37 juga", "jawaban post lengkap", "susulan: 1,5 L botol standar"],
 "telat dari arsip. gelas 300. tuntas", ("300 × 5 = 1.500 ml", "300*5", "1500"))

t(1323, "Penyimpanan 3 file × 3,3 GB = 9,9 GB. Temen tulis 99 — koma hilang. Cek: 3,3 × 3 = 9,9. Susulan: 2 file? 6,6 GB ya? Cek dong",
 ["9,9 GB pas", "99 koma hilang", "susulan 6,6 GB pas", "PR gue: 3 + 0,3 per file", "iya, 9 + 0,9", "jawaban post semua kuku", "catet: desimal × bulat", "iya, b37 juga", "jawaban post lengkap", "susulan: 9,9 GB mepet 10"],
 "telat dari arsip. file 3,3 GB. tuntas", ("3,3 × 3 = 9,9 GB", "3.3*3", "9.9"))

t(1324, "Unggah 2.500 MB dengan 25 MB/s → 100 detik. Temen bagi 2.500/25 langsung — 100 pas. Susulan: 50 MB/s? 50 detik ya? Cek dong",
 ["100 detik pas", "susulan 50 detik pas", "PR gue: 100 × 25 = 2.500 cek", "iya, selalu", "jawaban post semua kuku", "catet: ukuran ÷ laju", "iya, b37 juga", "jawaban post lengkap", "susulan: 100 dtk = 1m40d"],
 "telat dari arsip. unggah 25 MB/s. tuntas", ("2.500/25 = 100 detik", "2500/25", "100"))

t(1325, "Kursi 85, baris 12 → 8 baris. 85/12 = 7 sisa 1 → 8 (sisa tetap butuh baris). Temen jawab 7 — 1 kursi nganggur. Susulan: 84 kursi? 7 tepat ya? Cek dong",
 ["7 sisa 1 pas", "8 baris pas", "susulan 7 tepat pas", "PR gue: 7 × 12 = 84", "iya pas", "jawaban post semua kuku", "catet: bulat ke atas ada sisa", "iya, b37 juga", "jawaban post lengkap", "susulan: 8 × 12 = 96 muat"],
 "telat dari arsip. kursi 85. tuntas", ("85/12 = 7 sisa 1 → 8", "8*12", "96"))

assert len(T) == 25, len(T)
build2(T, 1301, "threads-53.ts", 53, 49, 801, 49,
       "Topik: separuh 162, kerja bersama 30-20, KPK 25-30, T80, Fibonacci 6.765, 24×3, 2^12, heksa FF, digital root 888, 3.500 mod 7, pembulatan 8.888, estimasi 598+401, kompensasi 299×3, 151×149, ganjil 19², digit akhir 4^10, kerja bersama 12-36, tangki 12-36, resep 2½ ÷ ½, −10°C ke F, kopi 8 g, gelas 300, file 3,3 GB, unggah 25 MB/s, kursi 85.")
print("threads-53 ok")
