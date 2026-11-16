# threads-59.ts — BATCH 55 (id 1451-1475, authorId 951-975)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1451, "½ × 194 = 97. Genap rapi, hasil prima 97 — prima dua digit terakhir! Temen jawab 96 — 96 × 2 = 192, kurang 2. Susulan: ½ × 198? 99 ya? Cek dong",
 ["97 pas", "96 × 2 = 192 kurang", "prima terakhir pas", "susulan 99 pas", "PR gue: 194 = 2 × 97", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 97 prima penutup"],
 "telat dari arsip. separuh 194. tuntas", ("194/2 = 97", "194/2", "97"))

t(1452, "Kerja bersama: A 9 jam, B 45 jam → 1/9 + 1/45 = 6/45 = 2/15 per jam → 7,5 jam. Penyebut 45 penyatu. Susulan: A 45, B 9? 7,5 juga ya? komutatif. Cek dong",
 ["6/45 pas", "2/15 pas", "7,5 jam pas", "susulan 7,5 juga pas", "PR gue: 5/45 + 1/45 = 6/45", "iya, KPK", "jawaban post semua kuku", "catet: jumlah laju", "iya, b41 juga", "jawaban post lengkap", "susulan: 7,5 jam = 7j30m"],
 "telat dari arsip. kerja bersama 9-45. tuntas", ("1/9 + 1/45 = 2/15 → 7,5 jam", "5+1", "6"))

t(1453, "KPK 60 dan 80 = 240. Kelipatan 60: 60, 120, 180, 240. Kelipatan 80: 80, 160, 240. Temen jawab 4.800 — 240 cukup. Susulan: 240 = 60 × 4 = 80 × 3 ya? cek. Cek dong",
 ["240 pas", "4.800 kelebihan", "60 × 4 pas", "PR gue: 60 = 2² × 3 × 5, 80 = 2⁴ × 5", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK kelipatan pertama", "iya, b41 juga", "jawaban post lengkap", "susulan: 240 = 2⁴ × 3 × 5"],
 "telat dari arsip. KPK 60-80. tuntas", ("KPK 60, 80 = 240", "60*4", "240"))

t(1454, "T92 = 4.278. Tangga segitiga 92 tingkat: 92 × 93/2. Temen nanya dekat 4.096 pangkat 2? deket tapi beda. Susulan: T93? 4.371 ya? (4.278 + 93). Cek dong",
 ["4.278 pas", "92 × 46,5 pas", "susulan 4.371 pas", "PR gue: 4.278 + 93 naik", "iya pas", "jawaban post semua kuku", "catet: n(n+1)/2", "iya, rumus", "jawaban post lengkap", "susulan: 4.278 habis dibagi 3"],
 "telat dari arsip. T92 = 4.278. tuntas", ("T92 = 92 × 93/2 = 4.278", "92*93/2", "4278"))

t(1455, "Fibonacci: ..., 75.025, 121.393 — 75.025 + 46.368 = 121.393. Enam digit! Temen heran deret tembus seratus ribu. Susulan: setelah 121.393? 196.418 ya? (121.393 + 75.025). Cek dong",
 ["121.393 pas", "enam digit pas", "196.418 pas", "PR gue: 75.025 + 46.368 cek", "iya pas", "susulan: 196.418 habis dibagi 2", "iya pas", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, b37 juga", "jawaban post lengkap", "susulan: 121.393 Fibonacci prima? ya"],
 "telat dari arsip. Fibonacci 121.393. tuntas", ("75.025 + 46.368 = 121.393", "75025+46368", "121393"))

t(1456, "53 × 3 = 159. Seratus lima puluh sembilan. Temen tulis 149 — salah 10. Cek: 53 × 3 = 159 (50×3 + 3×3). Susulan: 53 × 4? 212 ya? Cek dong",
 ["159 pas", "149 salah 10", "212 pas", "PR gue: 150 + 9 rapi", "iya pas", "susulan: 53 prima", "iya pas", "jawaban post semua kuku", "catet: deket 50 ditambah", "iya, trik", "jawaban post lengkap", "susulan: 159 habis dibagi 3"],
 "telat dari arsip. 53 × 3. tuntas", ("53 × 3 = 159", "53*3", "159"))

t(1457, "2^18 = 262.144. Tangga pangkat 2 besar. Temen nanya 262.144 = 512² ya? pas! (2^9)². Susulan: 2^19? 524.288 ya? Cek dong",
 ["262.144 pas", "512² pas", "524.288 pas", "PR gue: 131.072 × 2 jalur", "iya, b54 juga", "jawaban post semua kuku", "catet: pangkat genap = kuadrat", "iya, b33 juga", "jawaban post lengkap", "susulan: 262.144 dua wajah"],
 "telat dari arsip. 2^18 = 262.144. tuntas", ("2^18 = 262.144 = 512²", "512*512", "262144"))

t(1458, "Heks 600 = 1.536. 6 × 256. Temen baca enam ratus — heksa per posisi 256-16-1. Susulan: 610? 1.552 ya? (1.536 + 16). Cek dong",
 ["6 × 256 pas", "1.536 pas", "susulan 1.552 pas", "PR gue: 256 × 6 rapi", "iya pas", "jawaban post semua kuku", "catet: digit × pangkat 16", "iya, b44 juga", "jawaban post lengkap", "susulan: 1.536 habis dibagi 256"],
 "telat dari arsip. heksa 600. tuntas", ("6 × 256 = 1.536", "6*256", "1536"))

t(1459, "Digital root 444.444: 4×6 = 24 → 6. Temen kali enam empat — cepat. Susulan: 777.777? 42 → 6 juga ya? Cek dong",
 ["24 → 6 pas", "4 × 6 pas", "susulan 6 juga pas", "PR gue: 777.777 digit sum 42", "iya pas", "jawaban post semua kuku", "catet: jumlah sampai satu digit", "iya, b43 juga", "jawaban post lengkap", "susulan: 42 → 6 dua langkah"],
 "telat dari arsip. digital root 444.444. tuntas", ("4 × 6 = 24 → 6", "4*6", "24"))

t(1460, "18.000 mod 7 = 3. 17.997 = 2.571 × 7, sisa 3. Temen pecah: 17.500 habis 7 (7 × 2.500), 18.000 − 17.500 = 500, 500 mod 7 = 3 (497 sisa 3). Susulan: 18.002? sisa 5 ya? Cek dong",
 ["2.571 × 7 pas", "sisa 3 pas", "susulan 5 pas", "PR gue: 17.500 + 500 pecah", "iya, hemat", "jawaban post semua kuku", "catet: kelipatan besar dulu", "iya, b40 juga", "jawaban post lengkap", "susulan: 18.000 = 17.997 + 3"],
 "telat dari arsip. 18.000 mod 7. tuntas", ("18.000 − 17.997 = 3", "18000-17997", "3"))

t(1461, "Pembulatan 3.14159 ke TIGA desimal = 3,142. Digit keempat 5 → naik (aturan). Temen tulis 3,141 — digit keempat 5 memicu naik. Susulan: 3.14149? 3,141 ya? (4 turun). Cek dong",
 ["3,142 pas", "5 naik pas", "susulan 3,141 pas", "PR gue: lihat digit keempat", "iya, b47 juga", "jawaban post semua kuku", "catet: tiga desimal aturan", "iya, aturan", "jawaban post lengkap", "susulan: 3,142 dekat pi"],
 "telat dari arsip. pembulatan 3,14159 tiga desimal. tuntas", ("3,14159 → 3,142", "314159*1", "314159"))

t(1462, "Estimasi 5.005 − 2.999 ≈ 2.000 via 5.000 − 3.000. Persis 2.006 — selisih 6. Temen heran kompensasi ganda (+5 dan −1). Susulan: 4.996 − 2.997? persis 1.999 ya? Cek dong",
 ["2.000 pas", "2.006 pas", "selisih 6 pas", "susulan 1.999 pas", "PR gue: 5.000 − 3.000 bulat", "iya, cepat", "jawaban post semua kuku", "catet: bulatkan dua suku", "iya, b44 juga", "jawaban post lengkap", "susulan: 5.005 − 2.999 = 2.006"],
 "telat dari arsip. estimasi 5.005−2.999. tuntas", ("5.005 − 2.999 = 2.006", "5005-2999", "2006"))

t(1463, "79 × 12 = 948. Kompensasi: 80 × 12 = 960, kurang 12 → 948. Temen tulis 952 — selisihnya 1 × 12. Susulan: 78 × 12? 936 ya? Cek dong",
 ["960 − 12 pas", "948 pas", "susulan 936 pas", "PR gue: 1 × 12 = 12", "iya, b40 juga", "jawaban post semua kuku", "catet: deket 80 dikurangi", "iya, trik", "jawaban post lengkap", "susulan: 948 habis dibagi 12"],
 "telat dari arsip. kompensasi 79×12. tuntas", ("960 − 12 = 948", "960-12", "948"))

t(1464, "801 × 799 = 639.999. (800+1)(800−1) = 640.000 − 1. Temen kali lurus lama. Susulan: 901 × 899? 809.999 ya? (900² − 1). Cek dong",
 ["640.000 − 1 pas", "639.999 pas", "susulan 809.999 pas", "PR gue: 800² = 640.000", "iya, identitas", "jawaban post semua kuku", "catet: (a±1) selisih kuadrat", "iya, b42 juga", "jawaban post lengkap", "susulan: 639.999 deket 640.000"],
 "telat dari arsip. 801 × 799. tuntas", ("640.000 − 1 = 639.999", "640000-1", "639999"))

t(1465, "Jumlah ganjil sampai 49: 1+3+...+49 = 625 = 25². Dua puluh lima bilangan ganjil → kuadrat 25. Dan 625 = 5⁴ juga! Susulan: sampai 51? 676 ya? = 26². Cek dong",
 ["625 pas", "25² pas", "5⁴ juga pas", "susulan 676 pas", "PR gue: 25 ganjil → 25²", "iya, b41 juga", "jawaban post semua kuku", "catet: n ganjil pertama = n²", "iya, teorema", "jawaban post lengkap", "susulan: 625 dua wajah konteks"],
 "telat dari arsip. ganjil 25². tuntas", ("25² = 625", "25*25", "625"))

t(1466, "Digit terakhir 8^100: siklus 8-4-2-6, 100 mod 4 = 0 → posisi 4 → akhir 6. Temen heran pangkat seratus sekali lihat sisa. Susulan: 8^101? akhir 8 ya? Cek dong",
 ["100 mod 4 = 0 pas", "akhir 6 pas", "susulan akhir 8 pas", "PR gue: habis dibagi 4 = posisi 4", "iya, b46 juga", "jawaban post semua kuku", "catet: siklus empat", "iya, b40 juga", "jawaban post lengkap", "susulan: 8^100 raksasa"],
 "telat dari arsip. digit akhir 8^100. tuntas", ("100 mod 4 = 0 → akhir 6", "100", "100"))

t(1467, "Kerja bersama: A 60 jam, B 30 jam → 1/60 + 1/30 = 3/60 = 1/20 per jam → 20 jam. Penyebut 60 penyatu. Susulan: A 30, B 60? 20 juga ya? komutatif. Cek dong",
 ["3/60 pas", "1/20 pas", "20 jam pas", "susulan 20 juga pas", "PR gue: 1/60 + 2/60 = 3/60", "iya, KPK", "jawaban post semua kuku", "catet: jumlah laju", "iya, b41 juga", "jawaban post lengkap", "susulan: 20 jam dua hari"],
 "telat dari arsip. kerja bersama 60-30. tuntas", ("1/60 + 1/30 = 1/20 → 20 jam", "1+2", "3"))

t(1468, "Tangki: isi 14 jam, bocor 21 jam → net 1/14 − 1/21 = 1/42 per jam → 42 jam penuh. Penyebut 42 penyatu. Susulan: isi 14, bocor 42? net 21 jam ya? (2/42 = 1/21). Cek dong",
 ["1/42 pas", "42 jam pas", "penyebut 42 pas", "susulan 21 jam pas", "PR gue: 3/42 − 2/42 = 1/42", "iya, KPK 42", "jawaban post semua kuku", "catet: net lalu kebalikan", "iya, b40 juga", "jawaban post lengkap", "susulan: 42 jam dua hari"],
 "telat dari arsip. tangki 14-21. tuntas", ("1/14 − 1/21 = 1/42 → 42 jam", "3-2", "1"))

t(1469, "Reseh dibelah: 5½ ÷ 2 = 2¾. 11/2 × 1/2 = 11/4. Temen heran campuran keluar — setengah dari 5½ memang 2¾. Susulan: 5½ ÷ 11? ½ ya? Cek dong",
 ["11/2 pas", "11/4 pas", "2¾ pas", "susulan ½ pas", "PR gue: 11/2 × 1/11 = 1/2", "iya pas", "jawaban post semua kuku", "catet: bagi = kali kebalikan", "iya, b48 juga", "jawaban post lengkap", "susulan: 2¾ cup setengah"],
 "telat dari arsip. resep 5½ ÷ 2. tuntas", ("11/2 × 1/2 = 11/4", "11*1", "11"))

t(1470, "0°C → °F: 0 × 9/5 + 32 = 32°F. Titik beku air! Kali nol tetap nol, tambah 32. Temen nanya 0°F? −17,78°C an — jauh lebih dingin. Susulan: 100°C? 212°F ya? Cek dong",
 ["32°F pas", "titik beku pas", "kali nol pas", "susulan 212°F pas", "PR gue: 0 peculiarity konversi", "iya, menarik", "jawaban post semua kuku", "catet: +32 selalu ada", "iya, rumus", "jawaban post lengkap", "susulan: dua titik ikonik"],
 "telat dari arsip. 0°C ke F. tuntas", ("0 + 32 = 32", "0+32", "32"))

t(1471, "Kopi 1:15 — 19 g bubuk → 285 ml air. 19 × 15 = 285. Temen kali 19 × 1,5 — rasio 1:15. Susulan: 18 g? 270 ml ya? Cek dong",
 ["285 ml pas", "rasio 1:15 pas", "susulan 270 ml pas", "PR gue: 19 × 15 = 285", "iya pas", "jawaban post semua kuku", "catet: g × 15 = ml", "iya, b40 juga", "jawaban post lengkap", "susulan: 285 ml mug besar"],
 "telat dari arsip. kopi 19 g. tuntas", ("19 × 15 = 285 ml", "19*15", "285"))

t(1472, "Delapan botol 600 ml = 4,8 L. 600 × 8. Temen tulis 48 L — salah tangga. Cek: 4.800 ml = 4,8 L. Susulan: 5 botol? 3 L ya? Cek dong",
 ["4,8 L pas", "48 salah tangga", "susulan 3 L pas", "PR gue: 4.800 ml", "iya pas", "jawaban post semua kuku", "catet: ml ke liter bagi 1.000", "iya, b37 juga", "jawaban post lengkap", "susulan: 4,8 L stok dua hari"],
 "telat dari arsip. botol 600 × 8. tuntas", ("600 × 8 = 4.800 ml", "600*8", "4800"))

t(1473, "Penyimpanan 9 file × 2,4 GB = 21,6 GB. Temen tulis 216 — koma hilang. Cek: 2,4 × 9 = 21,6. Susulan: 5 file? 12 GB ya? Cek dong",
 ["21,6 GB pas", "216 koma hilang", "susulan 12 GB pas", "PR gue: 2 + 0,4 per file", "iya, 18 + 3,6", "jawaban post semua kuku", "catet: desimal × bulat", "iya, b37 juga", "jawaban post lengkap", "susulan: 21,6 GB makan kuota"],
 "telat dari arsip. file 2,4 GB. tuntas", ("2,4 × 9 = 21,6 GB", "2.4*9", "21.6"))

t(1474, "Unggah 9.000 MB dengan 50 MB/s → 180 detik = 3 menit. Temen bagi 9.000/50 langsung — 180 pas. Susulan: 25 MB/s? 360 detik ya? Cek dong",
 ["180 detik pas", "3 menit pas", "susulan 360 detik pas", "PR gue: 180 × 50 = 9.000 cek", "iya, selalu", "jawaban post semua kuku", "catet: ukuran ÷ laju", "iya, b37 juga", "jawaban post lengkap", "susulan: 180 dtk tiga menit"],
 "telat dari arsip. unggah 50 MB/s. tuntas", ("9.000/50 = 180 detik", "9000/50", "180"))

t(1475, "Kelereng 144 butir, wadah 12 → 12 wadah tepat. 144/12 = 12 — tanpa sisa! Temen heran rapi: 144 = 12². Susulan: 156 butir? 13 wadah ya? (12 × 13 = 156). Cek dong",
 ["12 wadah pas", "tanpa sisa pas", "144 = 12² pas", "susulan 13 wadah pas", "PR gue: 12 × 12 = 144", "iya pas", "jawaban post semua kuku", "catet: tepat lebih enak", "iya, kebetulan", "jawaban post lengkap", "susulan: 156 = 12 × 13"],
 "telat dari arsip. wadah 144 kelereng. tuntas", ("144/12 = 12 wadah", "144/12", "12"))

assert len(T) == 25, len(T)
build2(T, 1451, "threads-59.ts", 59, 55, 951, 55,
       "Topik: separuh 194, kerja bersama 9-45, KPK 60-80, T92, Fibonacci 121.393, 53×3, 2^18, heksa 600, digital root 444.444, 18.000 mod 7, pembulatan 3,14159 tiga desimal, estimasi 5.005−2.999, kompensasi 79×12, 801×799, ganjil 25², digit akhir 8^100, kerja bersama 60-30, tangki 14-21, resep 5½ ÷ 2, 0°C ke F, kopi 19 g, botol 600 × 8, file 2,4 GB, unggah 50 MB/s, wadah 144 kelereng.")
print("threads-59 ok")
