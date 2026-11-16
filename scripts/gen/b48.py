# threads-48.ts — BATCH 44 (id 1176-1200, authorId 676-700)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1176, "½ × 142 = 71. Genap rapi, hasil prima 71. Temen jawab 70 — 70 × 2 = 140, kurang 2. Susulan: ½ × 146? 73 ya? Cek dong",
 ["71 pas", "70 × 2 = 140 kurang", "susulan 73 pas", "PR gue: 71 prima pas", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 142 = 2 × 71"],
 "telat dari arsip. separuh 142. tuntas", ("142/2 = 71", "142/2", "71"))

t(1177, "Kerja bersama: A 6 jam, B 12 jam → 1/6 + 1/12 = 3/12 = 1/4 per jam → 4 jam. Penyebut 12 penyatu. Susulan: A 8, B 8? 4 jam juga ya? kebetulan sama. Cek dong",
 ["3/12 pas", "1/4 pas", "4 jam pas", "susulan 4 jam juga pas", "PR gue: dua jalur satu hasil", "iya, seru", "jawaban post semua kuku", "catet: penyebut 12", "iya, KPK", "jawaban post lengkap", "susulan: 4 jam dua kasus"],
 "telat dari arsip. kerja bersama 6-12. tuntas", ("1/6 + 1/12 = 1/4 → 4 jam", "2+1", "3"))

t(1178, "KPK 18 dan 24 = 72. Kelipatan 18: 18, 36, 54, 72. Kelipatan 24: 24, 48, 72. Temen jawab 432 — 72 cukup. Susulan: 72 = 8 × 9 juga ya? (2³ × 3²). Cek dong",
 ["72 pas", "432 kelebihan", "8 × 9 pas", "PR gue: 18 = 2 × 3², 24 = 2³ × 3", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK kelipatan pertama", "iya, b41 juga", "jawaban post lengkap", "susulan: 72 = 8 × 9 cantik"],
 "telat dari arsip. KPK 18-24. tuntas", ("KPK 18, 24 = 72", "18*4", "72"))

t(1179, "T50 = 1.275. Tangga segitiga 50 tingkat: 50 × 51/2. Temen heran ribuan — tangga besar memang melonjak. Susulan: T51? 1.326 ya? (1.275 + 51). Cek dong",
 ["1.275 pas", "50 × 25,5 pas", "susulan 1.326 pas", "PR gue: 1.275 + 51 naik", "iya pas", "jawaban post semua kuku", "catet: n(n+1)/2", "iya, rumus", "jawaban post lengkap", "susulan: 1.275 habis dibagi 51"],
 "telat dari arsip. T50 = 1.275. tuntas", ("T50 = 50 × 51/2 = 1.275", "50*51/2", "1275"))

t(1180, "Fibonacci: ..., 377, 610 — 377 + 233 = 610. Temen nanya 610 habis dibagi apa: 2 × 5 × 61. Susulan: setelah 610? 987 ya? (610 + 377) — digital root 6 juga! Cek dong",
 ["610 pas", "2 × 5 × 61 pas", "987 pas", "PR gue: digit sum 610 = 7", "iya pas", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, b37 juga", "jawaban post lengkap", "susulan: 987 = 3 × 329"],
 "telat dari arsip. Fibonacci 610. tuntas", ("377 + 233 = 610", "377+233", "610"))

t(1181, "7 × 17 = 119. Seratus sembilan belas. Temen tulis 109 — salah 10. Cek: 7 × 17 = 7 × 20 − 7 × 3 = 119. Susulan: 17 × 8? 136 ya? Cek dong",
 ["119 pas", "109 salah 10", "136 pas", "PR gue: 140 − 21 rapi", "iya pas", "susulan: 119 = 7 × 17", "iya pas", "jawaban post semua kuku", "catet: deket 20 dikurangi", "iya, b29 juga", "jawaban post lengkap", "susulan: 119 bukan prima"],
 "telat dari arsip. 7 × 17. tuntas", ("7 × 17 = 119", "7*17", "119"))

t(1182, "Biner 100000 = 32. Satu lalu lima nol → 2⁵. Temen nanya hubungan saklar: 5 saklar 32 kombinasi — sama! Susulan: 6 nol? 64 ya? Cek dong",
 ["2⁵ pas", "32 pas", "64 pas", "PR gue: hitung nol = pangkat", "iya, cepat", "jawaban post semua kuku", "catet: satu di depan = pangkat", "iya, b41 juga", "jawaban post lengkap", "susulan: 32 = saklar 5"],
 "telat dari arsip. biner 100000. tuntas", ("2⁵ = 32", "32*1", "32"))

t(1183, "Heks 70 = 112. 7 × 16. Temen tulis 70 — kali 16. Susulan: 90? 144 ya? — 12² juga! Cek dong",
 ["7 × 16 pas", "112 pas", "144 pas", "PR gue: 9 × 16 = 144", "iya pas", "jawaban post semua kuku", "catet: digit × 16", "iya, b44 juga", "jawaban post lengkap", "susulan: 144 dua wajah lagi"],
 "telat dari arsip. heksa 70. tuntas", ("7 × 16 = 112", "7*16", "112"))

t(1184, "Digital root 5.678: 5+6+7+8 = 26 → 2+6 = 8. Temen berhenti di 26 — dua digit lagi. Susulan: 8.888? 32 → 5 ya? Cek dong",
 ["26 → 8 pas", "dua tahap pas", "susulan 5 pas", "PR gue: 3+2 = 5 lanjut", "iya pas", "jawaban post semua kuku", "catet: jumlah sampai satu digit", "iya, b43 juga", "jawaban post lengkap", "susulan: 5.678 bukan habis 3"],
 "telat dari arsip. digital root 5.678. tuntas", ("5+6+7+8 = 26 → 8", "5+6+7+8", "26"))

t(1185, "2.000 mod 7 = 5. 1.995 = 285 × 7, sisa 5. Temen bagi panjang — 2.000 − 1.400 = 600, 600 mod 7 = 5 juga (595 sisa 5). Susulan: 2.100? sisa 0 ya? — 7 × 300. Cek dong",
 ["285 × 7 pas", "sisa 5 pas", "2.100 habis 7 pas", "PR gue: pecah 1.400 + 600", "iya, hemat", "jawaban post semua kuku", "catet: cari kelipatan deket", "iya, b40 juga", "jawaban post lengkap", "susulan: 2.000 − 1.995 = 5"],
 "telat dari arsip. 2.000 mod 7. tuntas", ("2.000 − 1.995 = 5", "2000-1995", "5"))

t(1186, "Pembulatan 9.999 ke ribuan = 10.000. Satu di bawah 10 ribu — naik. Temen tulis 9.000 — 999 jelas lewat 500. Susulan: 10.499? 10.000 ya? (499 turun). Cek dong",
 ["10.000 pas", "999 naik pas", "susulan 10.000 pas", "PR gue: tengah 500 ribuan", "iya, b41 juga", "jawaban post semua kuku", "catet: tiga digit akhir penentu", "iya, cepat", "jawaban post lengkap", "susulan: 9.999 mepet, seru"],
 "telat dari arsip. pembulatan 9.999. tuntas", ("9.999 → 10.000", "10000-9999", "1"))

t(1187, "Estimasi 503 − 298 ≈ 200 via 500 − 300. Persis 205 — selisih 5. Estimasi selisih juga kepakai. Susulan: 697 − 402 ≈ 300 ya? persis 295. Cek dong",
 ["500 − 300 pas", "205 pas", "selisih 5 pas", "susulan 295 pas", "PR gue: 700 − 400 = 300", "iya pas", "jawaban post semua kuku", "catet: bulatkan dua suku", "iya, b42 juga", "jawaban post lengkap", "susulan: 503 − 298 = 205"],
 "telat dari arsip. estimasi selisih. tuntas", ("503 − 298 = 205", "503-298", "205"))

t(1188, "199 × 4 = 796. Kompensasi: 200 × 4 = 800, kurang 4 → 796. Temen tulis 784 — selisihnya 1 × 4. Susulan: 198 × 4? 792 ya? Cek dong",
 ["800 − 4 pas", "796 pas", "susulan 792 pas", "PR gue: 1 × 4 = 4 doang", "iya, b43 juga", "jawaban post semua kuku", "catet: deket 200", "iya, trik", "jawaban post lengkap", "susulan: 796 deket 800"],
 "telat dari arsip. kompensasi 199×4. tuntas", ("800 − 4 = 796", "800-4", "796"))

t(1189, "71 × 69 = 4.899. (70+1)(70−1) = 4.900 − 1. Temen kali lurus — bentuk selisih instan. Susulan: 91 × 89? 8.099 ya? (90² − 1). Cek dong",
 ["4.900 − 1 pas", "4.899 pas", "susulan 8.099 pas", "PR gue: 70² = 4.900", "iya, identitas", "jawaban post semua kuku", "catet: (a±1) selisih kuadrat", "iya, b42 juga", "jawaban post lengkap", "susulan: 4.899 deket 4.900"],
 "telat dari arsip. 71 × 69. tuntas", ("4.900 − 1 = 4.899", "4900-1", "4899"))

t(1190, "Digit terakhir 6^n SELALU 6. 6² = 36, 6³ = 216, 6⁴ = 1.296 — semuanya akhir 6. Temen kaget ada yang konstan. Susulan: 5^n? selalu 5 ya? sepasang konstan. Cek dong",
 ["36 pas", "216 pas", "1.296 pas", "5^n selalu 5 pas", "PR gue: 6 dan 5 pengecualian", "iya, spesial", "jawaban post semua kuku", "catet: konstan jarang ada", "iya, unik", "jawaban post lengkap", "susulan: 1.296 = 6⁴ juga"],
 "telat dari arsip. 6^n konstan. tuntas", ("6^4 = 1.296 akhir 6", "1296*1", "1296"))

t(1191, "Orang-hari: 5 orang × 8 hari = 40 orang-hari. Total tenaga 40. Temen nanya baliknya: 8 orang? 5 hari ya — tukar posisi. Susulan: 10 orang? 4 hari ya? Cek dong",
 ["40 orang-hari pas", "5 hari pas", "susulan 4 hari pas", "PR gue: tukar posisi sama", "iya, invarian", "jawaban post semua kuku", "catet: orang × hari", "iya, b39 juga", "jawaban post lengkap", "susulan: 40 ÷ 10 = 4"],
 "telat dari arsip. orang-hari 40. tuntas", ("5 × 8 = 40 orang-hari", "5*8", "40"))

t(1192, "Tangki: isi 3 jam, bocor 5 jam → net 1/3 − 1/5 = 2/15 per jam → 7,5 jam penuh. Penyebut 15. Temen heran desimal — 15/2 jam. Susulan: isi 3, bocor 15? net 3,75 an ya? (4/15 → 3,75). Cek dong",
 ["2/15 pas", "7,5 jam pas", "15/2 pas", "susulan 3,75 an pas", "PR gue: 15 × 0,25? eh 60/16? cek: 1/3 − 1/15 = 4/15", "iya, 3,75", "jawaban post semua kuku", "catet: KPK 15 penyatu", "iya, b40 juga", "jawaban post lengkap", "susulan: 7,5 jam = 7j30m"],
 "telat dari arsip. tangki 3-5. tuntas", ("1/3 − 1/5 = 2/15 → 7,5 jam", "5-3", "2"))

t(1193, "Resep dibelah: ⅔ ÷ 2 = ⅓. Bagi 2 = kali ½ → 2/3 × 1/2 = 2/6 = 1/3. Temen bagi penyebut — hasil 2/6 juga ⅓, dua jalur! Susulan: ¾ ÷ 3? ¼ ya? Cek dong",
 ["⅓ pas", "kali ½ pas", "dua jalur pas", "susulan ¼ pas", "PR gue: ¾ × ⅓ = ¼", "iya pas", "jawaban post semua kuku", "catet: bagi = kali kebalikan", "iya, mantra", "jawaban post lengkap", "susulan: ⅓ cup setengah resep"],
 "telat dari arsip. resep ÷ 2. tuntas", ("⅔ × ½ = ⅓", "2*1", "2"))

t(1194, "77°F → °C: (77 − 32) × 5/9 = 45 × 5/9 = 25°C. Temen balik urutan — kurangi 32 dulu. Susulan: 59°F? 15°C ya? (27 × 5/9). Cek dong",
 ["45 × 5/9 pas", "25°C pas", "kurangi 32 dulu pas", "susulan 15°C pas", "PR gue: 45 habis dibagi 9", "iya, rapi", "jawaban post semua kuku", "catet: balik urutan ke F", "iya, b39 juga", "jawaban post lengkap", "susulan: 25°C nyaman"],
 "telat dari arsip. 77°F ke C. tuntas", ("(77 − 32) × 5/9 = 25", "45*5/9", "25"))

t(1195, "Kopi 1:15 — 18 g bubuk → 270 ml air. 18 × 15 = 270. Temen kali 18 × 1,5 — rasio 1:15. Susulan: 14 g? 210 ml ya? Cek dong",
 ["270 ml pas", "rasio 1:15 pas", "susulan 210 ml pas", "PR gue: 18 × 15 = 270", "iya pas", "jawaban post semua kuku", "catet: g × 15 = ml", "iya, b40 juga", "jawaban post lengkap", "susulan: 270 ml mug penuh"],
 "telat dari arsip. kopi 18 g. tuntas", ("18 × 15 = 270 ml", "18*15", "270"))

t(1196, "Lima botol 600 ml = 3 L. 600 × 5. Temen tulis 30 L — salah tangga. Cek: 3.000 ml = 3 L. Susulan: 8 botol? 4,8 L ya? Cek dong",
 ["3 L pas", "30 salah tangga", "susulan 4,8 L pas", "PR gue: 4.800 ml", "iya pas", "jawaban post semua kuku", "catet: ml ke liter bagi 1.000", "iya, b37 juga", "jawaban post lengkap", "susulan: 3 L galon kecil"],
 "telat dari arsip. botol 600. tuntas", ("600 × 5 = 3.000 ml", "600*5", "3000"))

t(1197, "Penyimpanan 5 file × 2,2 GB = 11 GB. Temen tulis 110 — koma hilang. Cek: 2,2 × 5 = 11. Susulan: 3 file? 6,6 GB ya? Cek dong",
 ["11 GB pas", "110 koma hilang", "susulan 6,6 GB pas", "PR gue: 2 + 0,2 per file", "iya, 10 + 1", "jawaban post semua kuku", "catet: desimal × bulat", "iya, b37 juga", "jawaban post lengkap", "susulan: 11 GB pas kuota"],
 "telat dari arsip. file 2,2 GB. tuntas", ("2,2 × 5 = 11 GB", "2.2*5", "11"))

t(1198, "Unggah 300 MB dengan 6 MB/s → 50 detik. Temen bagi 300/6 langsung — 50 pas. Susulan: 10 MB/s? 30 detik ya? Cek dong",
 ["50 detik pas", "susulan 30 detik pas", "PR gue: 50 × 6 = 300 cek", "iya, selalu", "jawaban post semua kuku", "catet: ukuran ÷ laju", "iya, b37 juga", "jawaban post lengkap", "susulan: 50 dtk cepat"],
 "telat dari arsip. unggah 6 MB/s. tuntas", ("300/6 = 50 detik", "300/6", "50"))

t(1199, "Mobil 12 kursi, 55 orang → 5 mobil. 55/12 = 4 sisa 7 → 5 (sisa tetap jalan). Temen jawab 4 — 7 orang tertinggal! Susulan: 48 orang? 4 tepat ya? Cek dong",
 ["4 sisa 7 pas", "5 mobil pas", "susulan 4 tepat pas", "PR gue: 4 × 12 = 48", "iya pas", "jawaban post semua kuku", "catet: bulat ke atas ada sisa", "iya, b37 juga", "jawaban post lengkap", "susulan: 5 × 12 = 60 muat"],
 "telat dari arsip. mobil 55 orang. tuntas", ("55/12 = 4 sisa 7 → 5", "5*12", "60"))

t(1200, "1+2+...+36 = 666. Pasangan 18: (1+36) sampai (18+19), masing 37 × 18 = 666. Angka ikonik! Susulan: 666 = 2 × 3² × 37 juga ya? faktor rapi. Cek dong",
 ["18 pasang pas", "666 pas", "2 × 3² × 37 pas", "PR gue: 37 × 18 rapi", "iya pas", "jawaban post semua kuku", "catet: berpasangan dua ujung", "iya, b37 juga", "jawaban post lengkap", "susulan: 666 = T36"],
 "telat dari arsip. deret 1..36. tuntas", ("37 × 18 = 666", "37*18", "666"))

assert len(T) == 25, len(T)
build2(T, 1176, "threads-48.ts", 48, 44, 676, 44,
       "Topik: separuh 142, kerja bersama 6-12, KPK 18-24, T50, Fibonacci 610, 7×17, biner 100000, heksa 70, digital root 5.678, 2.000 mod 7, pembulatan 9.999, estimasi 503−298, kompensasi 199×4, 71×69, 6^n konstan, orang-hari 5×8, tangki 3-5, resep ÷ 2, 77°F, kopi 18 g, botol 600, file 2,2 GB, unggah 6 MB/s, mobil 55 orang, deret 1..36 = 666.")
print("threads-48 ok")
