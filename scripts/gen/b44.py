# threads-44.ts — BATCH 40 (id 1076-1100, authorId 576-600)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1076, "½ × 122 = 61. Genap rapi, hasil prima 61. Temen jawab 60 — 60 × 2 = 120, kurang 2. Susulan: ½ × 126? 63 ya? Cek dong",
 ["61 pas", "60 × 2 = 120 kurang", "susulan 63 pas", "PR gue: 61 prima pas", "iya pas", "susulan: 126 = 2 × 3² × 7", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 63 = 7 × 9"],
 "telat dari arsip. separuh 122. tuntas", ("122/2 = 61", "122/2", "61"))

t(1077, "Kerja bersama: A 5 jam, B 20 jam → 1/5 + 1/20 = 5/20 = 1/4 per jam → 4 jam. Temen heran B lambat banget tetap ngebantu — 1/20 tetap nambah laju. Susulan: A 4, B 20? 3,33 an ya? (6/20 = 3/10). Cek dong",
 ["5/20 pas", "1/4 pas", "4 jam pas", "susulan 3,33 an pas", "PR gue: A 2, B 20? 1,82 an", "iya, 11/20", "jawaban post semua kuku", "catet: penyebut 20 penyatu", "iya, KPK", "jawaban post lengkap", "susulan: B lambat tetap nambah"],
 "telat dari arsip. kerja bersama 5-20. tuntas", ("1/5 + 1/20 = 1/4 → 4 jam", "4+1", "5"))

t(1078, "KPK 9 dan 12 = 36. Kelipatan 9: 9, 18, 27, 36. Kelipatan 12: 12, 24, 36. Temen jawab 108 — 36 lebih kecil. Susulan: bus dua rute tiap 9 dan 12 menit → bersama tiap 36 menit ya? Cek dong",
 ["36 pas", "108 kelebihan", "bersama tiap 36 mnt pas", "PR gue: KPK 9 dan 6? 18", "iya pas", "susulan: 9 = 3², 12 = 2² × 3", "iya, pangkat max", "jawaban post semua kuku", "catet: daftar kelipatan dua baris", "iya, visual", "jawaban post lengkap", "susulan: 36 = 9 × 4 = 12 × 3"],
 "telat dari arsip. KPK 9-12. tuntas", ("KPK 9, 12 = 36", "9*4", "36"))

t(1079, "T20 = 210. Tangga segitiga 20 tingkat: 20 × 21/2. Temen nanya hubungan deret 1..20: sama persis, 210. Susulan: T21? 231 ya? (210 + 21). Cek dong",
 ["210 pas", "sama deret 1..20 pas", "susulan 231 pas", "PR gue: 20 × 21/2 rapi", "iya pas", "susulan: 210 = 21 × 10", "iya pas", "jawaban post semua kuku", "catet: segitiga = deret berurutan", "iya, identik", "jawaban post lengkap", "susulan: 231 = 21 × 11 juga"],
 "telat dari arsip. T20 = 210. tuntas", ("T20 = 20 × 21/2 = 210", "20*21/2", "210"))

t(1080, "Fibonacci: ..., 55, 89 — 55 + 34 = 89. Temen nanya 89 prima? ya! Fibonacci prima: 2, 3, 5, 13, 89... Susulan: setelah 89? 144 ya? (89 + 55) — 12² juga! Cek dong",
 ["89 pas", "89 prima pas", "144 pas", "144 = 12² pas", "PR gue: 144 dua wajah lagi", "iya, b33 juga", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, aturan", "jawaban post lengkap", "susulan: 89 Fibonacci prima"],
 "telat dari arsip. Fibonacci 89. tuntas", ("55 + 34 = 89", "55+34", "89"))

t(1081, "7 × 15 = 105. Seratus lima. Temen tulis 95 — salah 10. Cek: 7 × 15 = 7 × 10 + 7 × 5 = 105. Susulan: 15 × 8? 120 ya? Cek dong",
 ["105 pas", "95 salah 10", "120 pas", "PR gue: 70 + 35 rapi", "iya pas", "susulan: 105 = 3 × 5 × 7", "iya pas", "jawaban post semua kuku", "catet: pecah 10 + 5", "iya, standar", "jawaban post lengkap", "susulan: 105 habis dibagi 7"],
 "telat dari arsip. 7 × 15. tuntas", ("7 × 15 = 105", "7*15", "105"))

t(1082, "Biner 1111 = 15. Empat digit penuh: 8+4+2+1. Temen nanya max 4 digit: 2⁴ − 1 = 15 pas. Susulan: 5 digit penuh? 31 ya? (b43 1F heksa juga 31!). Cek dong",
 ["15 pas", "8+4+2+1 pas", "5 digit = 31 pas", "PR gue: 2⁴ − 1 rumus max", "iya pas", "susulan: 31 = heksa 1F juga", "iya, nyambung", "jawaban post semua kuku", "catet: digit penuh = 2^n − 1", "iya, b43 juga", "jawaban post lengkap", "susulan: 1111₂ jarang ditulis 15"],
 "telat dari arsip. biner 1111. tuntas", ("8+4+2+1 = 15", "8+4+2+1", "15"))

t(1083, "Heks 30 = 48. 3 × 16. Temen kali 3 × 10 — posisi kedua heksa bernilai 16. Susulan: 40? 64 ya? — juga 2⁶! Cek dong",
 ["3 × 16 pas", "48 pas", "64 pas", "2⁶ juga pas", "PR gue: 50? 80", "iya pas", "jawaban post semua kuku", "catet: digit × 16 per posisi", "iya, b42 juga", "jawaban post lengkap", "susulan: 64 dua wajah heksa-pangkat"],
 "telat dari arsip. heksa 30. tuntas", ("3 × 16 = 48", "3*16", "48"))

t(1084, "Digital root 456: 4+5+6 = 15 → 1+5 = 6. Dua tahap. Temen berhenti di 15. Susulan: 789? 24 → 6 ya? Cek dong",
 ["15 → 6 pas", "dua tahap pas", "susulan 6 pas", "PR gue: 456 habis dibagi 3", "iya, 15 habis 3", "jawaban post semua kuku", "catet: jumlah sampai satu digit", "iya, b43 juga", "jawaban post lengkap", "susulan: 789 digit sum 24 juga"],
 "telat dari arsip. digital root 456. tuntas", ("4+5+6 = 15 → 6", "4+5+6", "15"))

t(1085, "500 mod 7 = 3. 497 = 71 × 7, sisa 3. Temen bagi panjang — 500 − 497 lebih cepet. Susulan: 700 mod 7? 0 ya? kelipatan penuh. Cek dong",
 ["497 pas", "sisa 3 pas", "susulan 0 pas", "PR gue: 71 × 7 = 497 cek", "iya pas", "susulan: 700 = 7 × 100, jelas", "iya pas", "jawaban post semua kuku", "catet: cari kelipatan deket", "iya, hemat", "jawaban post lengkap", "susulan: mod 7 untuk geser hari"],
 "telat dari arsip. 500 mod 7. tuntas", ("500 − 497 = 3", "500-497", "3"))

t(1086, "Pembulatan 5.649 ke ribuan = 6.000. 649 > 500 → naik. Temen tulis 5.000 — 649 jelas lewat tengah. Susulan: 5.449? 5.000 ya? Cek dong",
 ["6.000 pas", "649 naik pas", "susulan 5.000 pas", "PR gue: tengah 500 penentu", "iya, b41 juga", "jawaban post semua kuku", "catet: ribuan tengahnya 500", "iya, aturan", "jawaban post lengkap", "susulan: 5.649 deket 5.650"],
 "telat dari arsip. pembulatan 5.649. tuntas", ("5.649 → 6.000", "6000-5649", "351"))

t(1087, "Estimasi 49 × 51 ≈ 2.500 via 50 × 50. Persis 2.499 — selisih 1. Temen langsung tahu pola (a−1)(a+1). Susulan: 69 × 71? ≈ 4.900, persis 4.899 ya? Cek dong",
 ["50 × 50 pas", "2.499 pas", "selisih 1 pas", "susulan 4.899 pas", "PR gue: 70² − 1 = 4.899", "iya, identitas", "jawaban post semua kuku", "catet: estimasi tengahnya", "iya, b42 juga", "jawaban post lengkap", "susulan: 2.499 = 50² − 1"],
 "telat dari arsip. estimasi 49×51. tuntas", ("49 × 51 = 2.499", "2500-1", "2499"))

t(1088, "98 × 7 = 686. Kompensasi: 100 × 7 = 700, kurang 2 × 7 = 14 → 686. Temen tulis 696 — kurangnya 14, bukan 4. Susulan: 96 × 7? 672 ya? (700 − 28). Cek dong",
 ["700 − 14 pas", "686 pas", "696 salah selisih", "susulan 672 pas", "PR gue: 2 × 7 = 14 doang", "iya, hati-hati", "jawaban post semua kuku", "catet: selisih × faktor lain", "iya, dua langkah", "jawaban post lengkap", "susulan: 686 = 2 × 7³"],
 "telat dari arsip. kompensasi 98×7. tuntas", ("700 − 14 = 686", "700-14", "686"))

t(1089, "Jumlah ganjil sampai 19: 1+3+...+19 = 100 = 10². Sepuluh bilangan ganjil → kuadrat 10. Temen cek: pasangan (1+19), (3+17)... 20 × 5 = 100. Susulan: sampai 21? 121 = 11² ya? Cek dong",
 ["100 pas", "10² pas", "5 pasang 20 pas", "susulan 121 pas", "PR gue: 11 ganjil → 11²", "iya, teorema", "jawaban post semua kuku", "catet: n ganjil pertama = n²", "iya, b41 juga", "jawaban post lengkap", "susulan: 100 = 10² cantik"],
 "telat dari arsip. ganjil sampai 19. tuntas", ("20 × 5 = 100", "20*5", "100"))

t(1090, "Digit terakhir 7^n berulang: 7, 9, 3, 1 — siklus 4. 7^5 → posisi 1 → akhir 7. Temen nanya 7^8? akhir 1 (posisi 4). Cek dong",
 ["siklus 7-9-3-1 pas", "7^5 akhir 7 pas", "7^8 akhir 1 pas", "PR gue: 7^4 = 2.401 akhir 1", "iya, cek nyata", "jawaban post semua kuku", "catet: siklus empat lagi", "iya, b39 juga", "jawaban post lengkap", "susulan: 2.401 = 49² juga"],
 "telat dari arsip. siklus 7^n. tuntas", ("7^4 = 2.401 akhir 1", "2401*1", "2401"))

t(1091, "Orang-hari balik: total 18 orang-hari, 9 orang → 2 hari. Bagi total ÷ orang. Temen kali 18 × 9 — kebalik, hasil 162 absurd. Susulan: 6 orang? 3 hari ya? Cek dong",
 ["18 ÷ 9 pas", "2 hari pas", "162 absurd pas", "susulan 3 hari pas", "PR gue: 3 orang? 6 hari", "iya pas", "jawaban post semua kuku", "catet: total ÷ orang = hari", "iya, b41 juga", "jawaban post lengkap", "susulan: makin banyak orang makin cepet"],
 "telat dari arsip. orang-hari balik. tuntas", ("18/9 = 2 hari", "18/9", "2"))

t(1092, "Tangki: isi 4 jam, bocor 12 jam → net 1/4 − 1/12 = 2/12 = 1/6 → 6 jam penuh. Temen bingung 2/12 — sederhanakan jadi 1/6. Susulan: isi 3, bocor 12? net 4 jam ya? (3/12 − 1/12 = 1/6? cek: 1/3 − 1/12 = 3/12 = 1/4 → 4 jam). Cek dong",
 ["2/12 pas", "1/6 pas", "6 jam pas", "susulan 4 jam pas", "PR gue: 1/3 − 1/12 = 1/4", "iya, sederhanakan dulu", "jawaban post semua kuku", "catet: net lalu kebalikan", "iya, dua langkah", "jawaban post lengkap", "susulan: 6 jam dari 1/6"],
 "telat dari arsip. tangki 4-12. tuntas", ("1/4 − 1/12 = 1/6 → 6 jam", "3-1", "2"))

t(1093, "Resep setengah setengah: ½ sdt × ½ = ¼ sdt. Kali pecahan kali lurus. Temen heran hasil makin kecil — kali dua pecahan di bawah 1 memang begitu. Susulan: ¾ × ½? ⅜ ya? Cek dong",
 ["¼ sdt pas", "kali lurus pas", "hasil mengecil wajar", "susulan ⅜ pas", "PR gue: 1 × ½? ½", "iya pas", "jawaban post semua kuku", "catet: kali pembilang & penyebut", "iya, b24 juga", "jawaban post lengkap", "susulan: ¼ sdt cukup dijepit ujung sendok"],
 "telat dari arsip. setengah dari setengah. tuntas", ("½ × ½ = ¼", "1*1", "1"))

t(1094, "15°C → °F: 15 × 9/5 + 32 = 27 + 32 = 59°F. Temen kali 9/5 kaku — 15/5 = 3 dulu, × 9 = 27. Susulan: 5°C? 41°F ya? (9 + 32). Cek dong",
 ["27 + 32 pas", "59°F pas", "15/5 = 3 cepat", "susulan 41°F pas", "PR gue: 10°C? 50°F", "iya pas", "jawaban post semua kuku", "catet: bagi 5 dulu lalu × 9", "iya, efisien", "jawaban post lengkap", "susulan: 59 aneh tapi bener"],
 "telat dari arsip. 15°C ke F. tuntas", ("15 × 9/5 = 27", "135/5", "27"))

t(1095, "Kopi 1:15 — 20 g bubuk → 300 ml air. 20 × 15. Temen kali 20 × 1,5 — rasionya 1:15, bukan 1:1,5. Susulan: 15 g? 225 ml ya? Cek dong",
 ["300 ml pas", "1:15 bukan 1:1,5", "susulan 225 ml pas", "PR gue: 10 g? 150 ml", "iya pas", "jawaban post semua kuku", "catet: rasio kali 15", "iya, definisi rasio", "jawaban post lengkap", "susulan: 300 ml = satu mug besar"],
 "telat dari arsip. rasio kopi. tuntas", ("20 × 15 = 300 ml", "20*15", "300"))

t(1096, "Susu 1 L ÷ 250 ml = 4 gelas. Temen bagi 1.000/250 langsung — 4 pas. Susulan: 750 ml? 3 gelas ya? Cek dong",
 ["4 gelas pas", "1.000/250 pas", "susulan 3 gelas pas", "PR gue: 500 ml? 2 gelas", "iya pas", "susulan: 250 × 4 = 1.000 cek", "iya, selalu", "jawaban post semua kuku", "catet: liter ke ml dulu", "iya, satuan", "jawaban post lengkap", "susulan: 4 gelas pas satu botol"],
 "telat dari arsip. susu 1 L. tuntas", ("1.000/250 = 4", "1000/250", "4"))

t(1097, "Penyimpanan: 6 file × 3,5 GB = 21 GB. Temen tulis 210 — koma hilang. Cek: 3,5 × 6 = 21. Susulan: 4 file? 14 GB ya? Cek dong",
 ["21 GB pas", "210 koma hilang", "susulan 14 GB pas", "PR gue: 3 + 0,5 per file", "iya, pecah 3 + 3", "jawaban post semua kuku", "catet: desimal × bulat", "iya, hati-hati koma", "jawaban post lengkap", "susulan: 21 GB makan banyak kuota"],
 "telat dari arsip. file 3,5 GB. tuntas", ("3,5 × 6 = 21 GB", "3.5*6", "21"))

t(1098, "Unggah 1.200 MB dengan 8 MB/s → 150 detik = 2,5 menit. Temen bagi 1.200/8 kaku — 120 ÷ 8 = 15, tambah nol. Susulan: 6 MB/s? 200 detik ya? Cek dong",
 ["150 detik pas", "2,5 menit pas", "susulan 200 detik pas", "PR gue: 12 MB/s? 100 dtk", "iya pas", "jawaban post semua kuku", "catet: ukuran ÷ laju", "iya, rumus waktu", "jawaban post lengkap", "susulan: 150 dtk = 2j30m? eh 2,5 mnt"],
 "telat dari arsip. unggah 8 MB/s. tuntas", ("1.200/8 = 150 detik", "1200/8", "150"))

t(1099, "Gelas 200 ml × 9 = 1,8 L. Temen tulis 180 ml — kurang satu tangga. Cek: 200 × 9 = 1.800 ml. Susulan: 10 gelas? 2 L ya? Cek dong",
 ["1,8 L pas", "180 salah tangga", "susulan 2 L pas", "PR gue: 1.800 ml = 1,8 L", "iya, bagi 1.000", "jawaban post semua kuku", "catet: ml ke liter bagi 1.000", "iya, tangga", "jawaban post lengkap", "susulan: 9 gelas hampir 2 L"],
 "telat dari arsip. 9 gelas 200 ml. tuntas", ("200 × 9 = 1.800 ml", "200*9", "1800"))

t(1100, "1100 = 2² × 5² × 11. Faktorisasi: 1100 ÷ 2 = 550, ÷ 2 = 275, ÷ 5 = 55, ÷ 5 = 11 (prima). Temen berhenti di 55. Susulan: 1100 = 11 × 100 juga ya? (2² × 5² × 11 sama saja). Cek dong",
 ["2² × 5² × 11 pas", "55 belum selesai", "11 prima pas", "11 × 100 pas", "PR gue: ekor 00 = habis 4 dan 25", "iya, cek cepat", "jawaban post semua kuku", "catet: pecah sampai prima", "iya, b24 juga", "jawaban post lengkap", "susulan: 1100 = 44 × 25 juga"],
 "telat dari arsip. faktorisasi 1100. tuntas", ("1100 = 44 × 25", "44*25", "1100"))

assert len(T) == 25, len(T)
build2(T, 1076, "threads-44.ts", 44, 40, 576, 40,
       "Topik: separuh 122, kerja bersama 5-20, KPK 9-12, T20, Fibonacci 89, 7×15, biner 1111, heksa 30, digital root 456, 500 mod 7, pembulatan 5.649, estimasi 49×51, kompensasi 98×7, ganjil 10², siklus 7^n, orang-hari balik, tangki 4-12, ½ × ½, 15°C ke F, kopi 1:15, susu 1 L, file 3,5 GB, unggah 8 MB/s, 9 gelas, faktorisasi 1100.")
print("threads-44 ok")
