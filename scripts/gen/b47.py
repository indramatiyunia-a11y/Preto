# threads-47.ts — BATCH 43 (id 1151-1175, authorId 651-675)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1151, "½ × 134 = 67. Genap rapi, hasil prima 67. Temen jawab 66 — 66 × 2 = 132, kurang 2. Susulan: ½ × 142? 71 ya? Cek dong",
 ["67 pas", "66 × 2 = 132 kurang", "susulan 71 pas", "PR gue: 67 prima pas", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 134 = 2 × 67"],
 "telat dari arsip. separuh 134. tuntas", ("134/2 = 67", "134/2", "67"))

t(1152, "Kerja bersama simetris: A 8 jam, B 8 jam → 1/8 + 1/8 = 1/4 per jam → 4 jam. Dua orang sama kuat selesai setengah waktu solo. Susulan: A 6, B 6? 3 jam ya? Cek dong",
 ["1/4 per jam pas", "4 jam pas", "setengah waktu pas", "susulan 3 jam pas", "PR gue: sama kuat → bagi dua", "iya, shortcut", "jawaban post semua kuku", "catet: simetris = waktu ÷ 2", "iya, cepat", "jawaban post lengkap", "susulan: 4 jam = 8/2"],
 "telat dari arsip. kerja simetris 8-8. tuntas", ("1/8 + 1/8 = 1/4 → 4 jam", "1+1", "2"))

t(1153, "KPK 15 dan 20 = 60. Kelipatan 15: 15, 30, 45, 60. Kelipatan 20: 20, 40, 60. Temen jawab 300 — 60 lebih kecil. Susulan: olahraga tiap 15 dan 20 hari → bareng tiap 60 hari ya? dua bulanan. Cek dong",
 ["60 pas", "300 kelebihan", "bareng 60 hari pas", "PR gue: 15 = 3 × 5, 20 = 2² × 5", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK kelipatan pertama", "iya, b41 juga", "jawaban post lengkap", "susulan: 60 = 15 × 4 = 20 × 3"],
 "telat dari arsip. KPK 15-20. tuntas", ("KPK 15, 20 = 60", "15*4", "60"))

t(1154, "T40 = 820. Tangga segitiga 40 tingkat: 40 × 41/2. Temen heran delapan ratus — naik cepat. Susulan: T41? 861 ya? (820 + 41). Cek dong",
 ["820 pas", "40 × 20,5 pas", "susulan 861 pas", "PR gue: 820 + 41 naik", "iya pas", "susulan: 820 habis dibagi 41", "iya pas", "jawaban post semua kuku", "catet: n(n+1)/2", "iya, rumus", "jawaban post lengkap", "susulan: 861 = 41 × 21 juga"],
 "telat dari arsip. T40 = 820. tuntas", ("T40 = 40 × 41/2 = 820", "40*41/2", "820"))

t(1155, "Fibonacci: ..., 233, 377 — 233 + 144 = 377. Temen nanya 377 prima? bukan — 13 × 29! Fibonacci bisa komposit. Susulan: setelah 377? 610 ya? (377 + 233). Cek dong",
 ["377 pas", "13 × 29 pas", "610 pas", "PR gue: 233 + 144 cek", "iya pas", "susulan: 610 deket 600", "iya pas", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, aturan", "jawaban post lengkap", "susulan: 610 = 2 × 5 × 61"],
 "telat dari arsip. Fibonacci 377. tuntas", ("233 + 144 = 377", "233+144", "377"))

t(1156, "11 × 15 = 165. Seratus enam puluh lima. Temen tulis 155 — salah 10. Cek: 11 × 15 = 10 × 15 + 15 = 165. Susulan: 15 × 12? 180 ya? Cek dong",
 ["165 pas", "155 salah 10", "180 pas", "PR gue: 150 + 15 rapi", "iya pas", "susulan: × 11 = + n dari × 10", "iya, trik 11", "jawaban post semua kuku", "catet: pecah 10 + 1", "iya, standar", "jawaban post lengkap", "susulan: 165 habis dibagi 11"],
 "telat dari arsip. 11 × 15. tuntas", ("11 × 15 = 165", "11*15", "165"))

t(1157, "Biner 111111 = 63. Enam digit penuh → 2⁶ − 1 = 63. Temen nanya kenapa satu kurang: digit penuh = max, max = 2^n − 1. Susulan: tujuh digit penuh? 127 ya? Cek dong",
 ["63 pas", "2⁶ − 1 pas", "127 pas", "PR gue: 64 − 1 cepat", "iya, deket pangkat", "jawaban post semua kuku", "catet: digit penuh = 2^n − 1", "iya, b39 juga", "jawaban post lengkap", "susulan: 63 deket 64"],
 "telat dari arsip. biner 111111. tuntas", ("64 − 1 = 63", "64-1", "63"))

t(1158, "Heks 60 = 96. 6 × 16. Temen tulis 60 — kali 16, bukan 10. Susulan: 70? 112 ya? Cek dong",
 ["6 × 16 pas", "96 pas", "susulan 112 pas", "PR gue: 7 × 16 = 112", "iya pas", "jawaban post semua kuku", "catet: digit × 16", "iya, b44 juga", "jawaban post lengkap", "susulan: 96 = 2⁵ × 3"],
 "telat dari arsip. heksa 60. tuntas", ("6 × 16 = 96", "6*16", "96"))

t(1159, "999 mod 9 = 0. Digit sum 27 → 2+7 = 9 → habis dibagi 9. Temen nanya 999 ÷ 9 = 111 pas — cek nyata! Susulan: 9.999? digit sum 36 → habis 9 juga ya? Cek dong",
 ["27 → 9 pas", "habis 9 pas", "111 pas", "susulan habis 9 pas", "PR gue: 36 habis dibagi 9", "iya pas", "jawaban post semua kuku", "catet: mod 9 via digit sum", "iya, b43 juga", "jawaban post lengkap", "susulan: sembilan sembilan seru"],
 "telat dari arsip. 999 mod 9. tuntas", ("9+9+9 = 27 → habis 9", "9+9+9", "27"))

t(1160, "1.000 mod 7 = 6. 994 = 142 × 7, sisa 6. Temen heran bukan 4: 1.000 − 994 = 6. Susulan: 1.001? sisa 0 ya? — 1.001 = 7 × 143! Cek dong",
 ["142 × 7 pas", "sisa 6 pas", "1.001 habis 7 pas", "PR gue: 994 dekat 1.000", "iya, hemat", "jawaban post semua kuku", "catet: cari kelipatan deket", "iya, b40 juga", "jawaban post lengkap", "susulan: 1.001 = 7 × 11 × 13!"],
 "telat dari arsip. 1.000 mod 7. tuntas", ("1.000 − 994 = 6", "1000-994", "6"))

t(1161, "Pembulatan 4.501 ke ratusan = 4.500. 01 di atas? eh 4.501 → 4.500 karena 1 kurang 50. Temen tulis 4.600 — 1 itu cuma satu. Susulan: 4.551? 4.600 ya? (51 naik). Cek dong",
 ["4.500 pas", "1 turun pas", "susulan 4.600 pas", "PR gue: 50 tengah ratusan", "iya, b41 juga", "jawaban post semua kuku", "catet: lihat dua digit akhir", "iya, cepat", "jawaban post lengkap", "susulan: 4.501 nyaris rapi"],
 "telat dari arsip. pembulatan 4.501. tuntas", ("4.501 → 4.500", "4501-4500", "1"))

t(1162, "Estimasi 999 + 1.001 ≈ 2.000 via 1.000 + 1.000. Persis 2.000! Saling kompensasi (−1 dan +1). Susulan: 998 + 1.003 ≈ 2.000 ya? persis 2.001, selisih 1. Cek dong",
 ["2.000 persis pas", "kompensasi pas", "susulan 2.001 pas", "PR gue: bulatkan ke ribuan", "iya, cepat", "jawaban post semua kuku", "catet: estimasi bukan janji", "iya, b42 juga", "jawaban post lengkap", "susulan: 999 + 1.001 = 2.000"],
 "telat dari arsip. estimasi ribuan. tuntas", ("999 + 1.001 = 2.000", "999+1001", "2000"))

t(1163, "999 × 4 = 3.996. Kompensasi: 1.000 × 4 = 4.000, kurang 4 → 3.996. Temen tulis 3.994 — selisihnya cuma 4. Susulan: 999 × 3? 2.997 ya? Cek dong",
 ["4.000 − 4 pas", "3.996 pas", "susulan 2.997 pas", "PR gue: 1 × 4 = 4 doang", "iya, gampang", "jawaban post semua kuku", "catet: selisih × faktor lain", "iya, b40 juga", "jawaban post lengkap", "susulan: 3.996 deket 4.000"],
 "telat dari arsip. kompensasi 999×4. tuntas", ("4.000 − 4 = 3.996", "4000-4", "3996"))

t(1164, "61 × 59 = 3.599. (60+1)(60−1) = 3.600 − 1. Temen kali lurus lama. Susulan: 81 × 79? 6.399 ya? — kebetulan sama dengan 79 × 81! komutatif. Cek dong",
 ["3.600 − 1 pas", "3.599 pas", "susulan 6.399 pas", "PR gue: 80² − 1", "iya, identitas", "jawaban post semua kuku", "catet: (a±1) bentuk selisih", "iya, b42 juga", "jawaban post lengkap", "susulan: 3.599 deket 3.600"],
 "telat dari arsip. 61 × 59. tuntas", ("3.600 − 1 = 3.599", "3600-1", "3599"))

t(1165, "Jumlah ganjil sampai 25: 1+3+...+25 = 169 = 13². Tiga belas bilangan ganjil → kuadrat 13. Temen heran 169 muncul lagi — 13² dari b24! Susulan: sampai 27? 196 ya? = 14². Cek dong",
 ["169 pas", "13² pas", "susulan 196 pas", "PR gue: 13 ganjil → 13²", "iya, b41 juga", "jawaban post semua kuku", "catet: n ganjil pertama = n²", "iya, teorema", "jawaban post lengkap", "susulan: 169 dua wajah konteks"],
 "telat dari arsip. ganjil 13². tuntas", ("13² = 169", "13*13", "169"))

t(1166, "Digit terakhir 9^n berulang: 9, 1, 9, 1 — siklus 2! 9^7 → ganjil → akhir 9. Temen nanya 9^10? akhir 1 (genap). Susulan: 9^1 = 9, 9² = 81, 9³ = 729 — cek nyata. Cek dong",
 ["siklus 9-1 pas", "9^7 akhir 9 pas", "9^10 akhir 1 pas", "729 cek pas", "PR gue: 9^n = 3^(2n)", "iya, nyambung", "jawaban post semua kuku", "catet: siklus terpendek", "iya, b41 juga", "jawaban post lengkap", "susulan: 729 = 3^6 juga"],
 "telat dari arsip. siklus 9^n. tuntas", ("9^3 = 729", "729*1", "729"))

t(1167, "Kerja bersama: A 12 jam, B 4 jam → 1/12 + 1/4 = 4/12 = 1/3 per jam → 3 jam. B dominan, hasil dekat 4. Susulan: A 20, B 5? 4 jam ya? (1/20 + 1/5 = 1/4). Cek dong",
 ["4/12 pas", "1/3 pas", "3 jam pas", "susulan 4 jam pas", "PR gue: 1/20 + 1/5 rapi", "iya pas", "jawaban post semua kuku", "catet: penyebut 12 penyatu", "iya, KPK", "jawaban post lengkap", "susulan: dominan menentukan"],
 "telat dari arsip. kerja bersama 12-4. tuntas", ("1/12 + 1/4 = 1/3 → 3 jam", "1+3", "4"))

t(1168, "Tangki: isi 6 jam, bocor 8 jam → net 1/6 − 1/8 = 1/24 per jam → 24 jam penuh. Temen heran lama banget — netnya tipis. Susulan: isi 6, bocor 12? net 12 jam ya? (1/6 − 1/12 = 1/12). Cek dong",
 ["1/24 pas", "24 jam pas", "net tipis pas", "susulan 12 jam pas", "PR gue: 3/24 − 2/24", "iya, KPK 24", "jawaban post semua kuku", "catet: net tipis lama", "iya, logis", "jawaban post lengkap", "susulan: 24 jam satu hari penuh!"],
 "telat dari arsip. tangki 6-8. tuntas", ("1/6 − 1/8 = 1/24 → 24 jam", "4-3", "1"))

t(1169, "Resep dikualipatkan: ¾ × 4 = 3. 3/4 × 4 = 3 utuh. Temen nanya sisa penyebut — coret 4 dan 4, tinggal 3. Susulan: ¾ × 8? 6 ya? dua kali lipatnya. Cek dong",
 ["3 pas", "coret 4-4 pas", "susulan 6 pas", "PR gue: 3/4 × 4 = 3", "iya pas", "jawaban post semua kuku", "catet: coret silang dulu", "iya, cepat", "jawaban post lengkap", "susulan: 3 cup ganda"],
 "telat dari arsip. resep × 4. tuntas", ("¾ × 4 = 3", "3*4/4", "3"))

t(1170, "45°C → °F: 45 × 9/5 + 32 = 81 + 32 = 113°F. Temen kali 9/5 kaku — 45/5 = 9, × 9 = 81. Susulan: 55°C? 131°F ya? (99 + 32). Cek dong",
 ["81 + 32 pas", "113°F pas", "45/5 = 9 cepat", "susulan 131°F pas", "PR gue: 45 × 9 = 405, /5 = 81", "iya pas", "jawaban post semua kuku", "catet: bagi 5 dulu lalu × 9", "iya, b40 juga", "jawaban post lengkap", "susulan: 113°F panas banget"],
 "telat dari arsip. 45°C ke F. tuntas", ("45 × 9/5 = 81", "405/5", "81"))

t(1171, "Kopi 1:15 — 12 g bubuk → 180 ml air. 12 × 15. Temen kali 12 × 1,5 — rasio 1:15. Susulan: 16 g? 240 ml ya? Cek dong",
 ["180 ml pas", "rasio 1:15 pas", "susulan 240 ml pas", "PR gue: 12 × 15 = 180", "iya pas", "jawaban post semua kuku", "catet: g × 15 = ml", "iya, b40 juga", "jawaban post lengkap", "susulan: 180 ml cup sedang"],
 "telat dari arsip. kopi 12 g. tuntas", ("12 × 15 = 180 ml", "12*15", "180"))

t(1172, "Gelas 240 ml × 5 = 1,2 L. Temen tulis 1.200 L — salah tangga. Cek: 1.200 ml = 1,2 L. Susulan: 6 gelas? 1,44 L ya? Cek dong",
 ["1,2 L pas", "1.200 salah tangga", "susulan 1,44 L pas", "PR gue: 1.440 ml", "iya pas", "jawaban post semua kuku", "catet: ml ke liter bagi 1.000", "iya, b37 juga", "jawaban post lengkap", "susulan: 1,2 L botol standar"],
 "telat dari arsip. gelas 240. tuntas", ("240 × 5 = 1.200 ml", "240*5", "1200"))

t(1173, "Penyimpanan 8 file × 1,5 GB = 12 GB. Temen tulis 120 — koma hilang. Cek: 1,5 × 8 = 12. Susulan: 6 file? 9 GB ya? Cek dong",
 ["12 GB pas", "120 koma hilang", "susulan 9 GB pas", "PR gue: 1 + 0,5 per file", "iya, 8 + 4", "jawaban post semua kuku", "catet: desimal × bulat", "iya, b37 juga", "jawaban post lengkap", "susulan: 12 GB kuota habis"],
 "telat dari arsip. file 1,5 GB. tuntas", ("1,5 × 8 = 12 GB", "1.5*8", "12"))

t(1174, "Unggah 750 MB dengan 5 MB/s → 150 detik = 2,5 menit. Temen bagi 750/5 langsung — 150 pas. Susulan: 3 MB/s? 250 detik ya? Cek dong",
 ["150 detik pas", "2,5 menit pas", "susulan 250 detik pas", "PR gue: 75 × 2 jalur", "iya pas", "jawaban post semua kuku", "catet: ukuran ÷ laju", "iya, b37 juga", "jawaban post lengkap", "susulan: 150 dtk = 2m30d"],
 "telat dari arsip. unggah 5 MB/s. tuntas", ("750/5 = 150 detik", "750/5", "150"))

t(1175, "Tamu 100 orang, meja 8 kursi → 13 meja. 100/8 = 12 sisa 4 → 13 (sisa tetap butuh meja). Temen jawab 12 — 4 orang berdiri! Susulan: 96 tamu? 12 tepat ya? Cek dong",
 ["12 sisa 4 pas", "13 meja pas", "susulan 12 tepat pas", "PR gue: 12 × 8 = 96, sisa 4", "iya pas", "jawaban post semua kuku", "catet: bulat ke atas ada sisa", "iya, b37 juga", "jawaban post lengkap", "susulan: 13 × 8 = 104 muat"],
 "telat dari arsip. meja 100 tamu. tuntas", ("100/8 = 12 sisa 4 → 13", "13*8", "104"))

assert len(T) == 25, len(T)
build2(T, 1151, "threads-47.ts", 47, 43, 651, 43,
       "Topik: separuh 134, kerja simetris 8-8, KPK 15-20, T40, Fibonacci 377, 11×15, biner 111111, heksa 60, 999 mod 9, 1.000 mod 7, pembulatan 4.501, estimasi 999+1.001, kompensasi 999×4, 61×59, ganjil 13², siklus 9^n, kerja bersama 12-4, tangki 6-8, resep × 4, 45°C ke F, kopi 12 g, gelas 240, file 1,5 GB, unggah 5 MB/s, meja 100 tamu.")
print("threads-47 ok")
