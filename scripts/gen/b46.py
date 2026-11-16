# threads-46.ts — BATCH 42 (id 1126-1150, authorId 626-650)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1126, "½ × 130 = 65. Genap rapi, hasil 65 = 5 × 13. Temen jawab 64 — 64 × 2 = 128, kurang 2. Susulan: ½ × 138? 69 ya? Cek dong",
 ["65 pas", "64 × 2 = 128 kurang", "susulan 69 pas", "PR gue: 65 habis dibagi 5", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 69 = 3 × 23"],
 "telat dari arsip. separuh 130. tuntas", ("130/2 = 65", "130/2", "65"))

t(1127, "Kerja bersama: A 3 jam, B 15 jam → 1/3 + 1/15 = 6/15 = 2/5 per jam → 2,5 jam. Temen heran hasil desimal — 5/2 jam memang begini. Susulan: A 5, B 5? 2,5 juga ya? simetris. Cek dong",
 ["6/15 pas", "2/5 pas", "2,5 jam pas", "susulan 2,5 pas juga", "PR gue: sama kuat → 2,5 jam", "iya, 1/5 + 1/5", "jawaban post semua kuku", "catet: sederhanakan sebelum balik", "iya, mantra", "jawaban post lengkap", "susulan: 2,5 jam = 2j30m"],
 "telat dari arsip. kerja bersama 3-15. tuntas", ("1/3 + 1/15 = 2/5 → 2,5 jam", "5+1", "6"))

t(1128, "KPK 14 dan 21 = 42. Kelipatan 14: 14, 28, 42. Kelipatan 21: 21, 42. Temen jawab 294 — 42 cukup. Susulan: jadwal dua tugas tiap 14 dan 21 hari → bareng tiap 42 hari ya? Cek dong",
 ["42 pas", "294 kelebihan", "bareng 42 hari pas", "PR gue: 14 = 2 × 7, 21 = 3 × 7", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK kelipatan pertama", "iya, b41 juga", "jawaban post lengkap", "susulan: 42 = 14 × 3 = 21 × 2"],
 "telat dari arsip. KPK 14-21. tuntas", ("KPK 14, 21 = 42", "14*3", "42"))

t(1129, "T30 = 465. Tangga segitiga 30 tingkat: 30 × 31/2. Temen heran deket 466 — T30 deket 21² = 441 juga. Susulan: T31? 496 ya? (465 + 31). Cek dong",
 ["465 pas", "30 × 15,5 pas", "susulan 496 pas", "PR gue: 465 + 31 naik", "iya pas", "susulan: 496 bilangan sempurna!", "iya, b19 juga", "jawaban post semua kuku", "catet: n(n+1)/2", "iya, rumus", "jawaban post lengkap", "susulan: T31 = 496 sempurna"],
 "telat dari arsip. T30 = 465. tuntas", ("T30 = 30 × 31/2 = 465", "30*31/2", "465"))

t(1130, "Fibonacci: ..., 144, 233 — 144 + 89 = 233. Temen nanya 233 prima? ya! Fibonacci prima lanjutan. Susulan: setelah 233? 377 ya? (233 + 144). Cek dong",
 ["233 pas", "233 prima pas", "377 pas", "PR gue: 377 = 13 × 29, bukan prima", "iya pas", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, b37 juga", "jawaban post lengkap", "susulan: 377 = 13 × 29"],
 "telat dari arsip. Fibonacci 233. tuntas", ("144 + 89 = 233", "144+89", "233"))

t(1131, "9 × 13 = 117. Seratus tujuh belas. Temen tulis 107 — salah 10. Cek: 9 × 13 = 90 + 27. Susulan: 13 × 9 sama 117 ya? komutatif. Cek dong",
 ["117 pas", "107 salah 10", "komutatif pas", "PR gue: 90 + 27 rapi", "iya pas", "susulan: digit sum 117 = 9", "iya pas", "jawaban post semua kuku", "catet: pecah 10 + 3", "iya, standar", "jawaban post lengkap", "susulan: 117 = 9 × 13"],
 "telat dari arsip. 9 × 13. tuntas", ("9 × 13 = 117", "9*13", "117"))

t(1132, "Biner 10101 = 21. 16 + 4 + 1. Temen lewati posisi tengah nol — 10101 punya nol di 8 dan 2. Susulan: 10111? 23 ya? (16+4+2+1). Cek dong",
 ["16 + 4 + 1 pas", "21 pas", "nol di 8 dan 2 pas", "susulan 23 pas", "PR gue: 10111 tiga satu", "iya pas", "jawaban post semua kuku", "catet: per posisi 16-8-4-2-1", "iya, b41 juga", "jawaban post lengkap", "susulan: 21 = T6 juga!"],
 "telat dari arsip. biner 10101. tuntas", ("16 + 4 + 1 = 21", "16+4+1", "21"))

t(1133, "Heks 50 = 80. 5 × 16. Temen kali 5 × 10 — puluhan heksa 16. Susulan: 60? 96 ya? — juga digit sum 9! Cek dong",
 ["5 × 16 pas", "80 pas", "96 pas", "PR gue: 6 × 16 = 96", "iya pas", "jawaban post semua kuku", "catet: digit × 16", "iya, b44 juga", "jawaban post lengkap", "susulan: 96 = 2⁵ × 3"],
 "telat dari arsip. heksa 50. tuntas", ("5 × 16 = 80", "5*16", "80"))

t(1134, "1.000 mod 9 = 1. Digit sum 1 → sisa 1. 999 = 111 × 9 habis, 1.000 sisa 1. Temen heran bilangan besar — mod 9 cuma butuh digit sum! Susulan: 10.000? 1 juga ya? (1+0+0+0+0 = 1). Cek dong",
 ["999 habis 9 pas", "sisa 1 pas", "10.000 sisa 1 pas", "PR gue: digit sum cukup", "iya, sifat 9", "jawaban post semua kuku", "catet: mod 9 via digit sum", "iya, b43 juga", "jawaban post lengkap", "susulan: 1.000 = 999 + 1"],
 "telat dari arsip. 1.000 mod 9. tuntas", ("1.000 − 999 = 1", "1000-999", "1"))

t(1135, "1.500 mod 7 = 2. 1.498 = 214 × 7, sisa 2. Temen bagi panjang — 1.500 − 1.400 = 100, 100 mod 7 = 2 juga! Susulan: 1.400 mod 7? 0 ya? Cek dong",
 ["214 × 7 pas", "sisa 2 pas", "1.400 habis 7 pas", "PR gue: 200 mod 7 dulu", "iya, 196 sisa 4? eh 1.400 = 7 × 200", "iya, tepat", "jawaban post semua kuku", "catet: pecah ribuan dulu", "iya, hemat", "jawaban post lengkap", "susulan: 1.500 = 1.400 + 100"],
 "telat dari arsip. 1.500 mod 7. tuntas", ("1.500 − 1.498 = 2", "1500-1498", "2"))

t(1136, "Pembulatan 2.345 ke ratusan = 2.300. 45 kurang 50 → turun. Temen tulis 2.400 — 45 belum lewat tengah. Susulan: 2.355? 2.400 ya? (55 naik). Cek dong",
 ["2.300 pas", "45 turun pas", "susulan 2.400 pas", "PR gue: 50 tengah ratusan", "iya, b41 juga", "jawaban post semua kuku", "catet: tengah 50 penentu", "iya, aturan", "jawaban post lengkap", "susulan: 2.345 mepet bawah"],
 "telat dari arsip. pembulatan 2.345. tuntas", ("2.345 → 2.300", "2345-2300", "45"))

t(1137, "Estimasi 79 × 81 ≈ 6.400 via 80 × 80. Persis 6.399 — selisih 1 lagi! Pola (a−1)(a+1). Susulan: 89 × 91? persis 8.099 ya? Cek dong",
 ["6.400 pas", "6.399 pas", "selisih 1 pas", "susulan 8.099 pas", "PR gue: 90² − 1", "iya, identitas", "jawaban post semua kuku", "catet: tengah kuadrat", "iya, b40 juga", "jawaban post lengkap", "susulan: 6.399 = 80² − 1"],
 "telat dari arsip. estimasi 79×81. tuntas", ("79 × 81 = 6.399", "6400-1", "6399"))

t(1138, "96 × 5 = 480. Kompensasi: 100 × 5 = 500, kurang 4 × 5 = 20 → 480. Temen tulis 490 — selisihnya 20. Susulan: 94 × 5? 470 ya? Cek dong",
 ["500 − 20 pas", "480 pas", "susulan 470 pas", "PR gue: 4 × 5 = 20", "iya, b40 juga", "jawaban post semua kuku", "catet: selisih × faktor lain", "iya, dua langkah", "jawaban post lengkap", "susulan: 480 deket 500"],
 "telat dari arsip. kompensasi 96×5. tuntas", ("500 − 20 = 480", "500-20", "480"))

t(1139, "101 × 99 = 9.999. (100+1)(100−1) = 100² − 1. Temen kali lurus lama — bentuk selisih instan. Susulan: 201 × 199? 39.999 ya? Cek dong",
 ["100² − 1 pas", "9.999 pas", "susulan 39.999 pas", "PR gue: 200² − 1 = 39.999", "iya pas", "jawaban post semua kuku", "catet: (a±1) selisih kuadrat", "iya, b42 juga", "jawaban post lengkap", "susulan: 9.999 deket 10.000"],
 "telat dari arsip. 101 × 99. tuntas", ("10.000 − 1 = 9.999", "10000-1", "9999"))

t(1140, "Digit terakhir 8^n berulang: 8, 4, 2, 6 — siklus 4. 8^6 → posisi 2 → akhir 4. Temen nanya 8^9? akhir 8 lagi. Cek dong",
 ["siklus 8-4-2-6 pas", "8^6 akhir 4 pas", "8^9 akhir 8 pas", "PR gue: 8^4 = 4.096 akhir 6", "iya, cek nyata", "jawaban post semua kuku", "catet: siklus empat", "iya, b40 juga", "jawaban post lengkap", "susulan: 4.096 = 2¹² juga"],
 "telat dari arsip. siklus 8^n. tuntas", ("8^4 = 4.096 akhir 6", "4096*1", "4096"))

t(1141, "Orang-hari: total 40 orang-hari, 8 orang → 5 hari. Temen kali — kebalik lagi. Bagi total ÷ orang. Susulan: 10 orang? 4 hari ya? Cek dong",
 ["40 ÷ 8 pas", "5 hari pas", "susulan 4 hari pas", "PR gue: 20 orang? 2 hari", "iya pas", "jawaban post semua kuku", "catet: total ÷ orang", "iya, b40 juga", "jawaban post lengkap", "susulan: 5 × 8 = 40 cek"],
 "telat dari arsip. orang-hari 40. tuntas", ("40/8 = 5 hari", "40/8", "5"))

t(1142, "Tangki: isi 5 jam, bocor 10 jam → net 1/5 − 1/10 = 1/10 per jam → 10 jam penuh. Bocor makan separuh laju isi. Susulan: isi 5, bocor 20? net 6,67 an ya? (3/20 → 6,67). Cek dong",
 ["1/10 pas", "10 jam pas", "bocor separuh laju pas", "susulan 6,67 an pas", "PR gue: 20/3 rumusnya", "iya, b41 juga", "jawaban post semua kuku", "catet: net lalu kebalikan", "iya, b40 juga", "jawaban post lengkap", "susulan: 6,67 an = 6j40m an"],
 "telat dari arsip. tangki 5-10. tuntas", ("1/5 − 1/10 = 1/10 → 10 jam", "2-1", "1"))

t(1143, "Resep ditriplipat: 1½ × 3 = 4½. 3/2 × 3 = 9/2. Temen kali penyebut — pembilang saja. Susulan: 1½ × 4? 6 ya? Cek dong",
 ["9/2 pas", "4½ pas", "susulan 6 pas", "PR gue: 1,5 × 3 = 4,5 desimal", "iya, dua jalur", "jawaban post semua kuku", "catet: campuran → pecahan dulu", "iya, b26 juga", "jawaban post lengkap", "susulan: 4½ cup banyak!"],
 "telat dari arsip. resep × 3. tuntas", ("1½ × 3 = 4½", "1.5*3", "4.5"))

t(1144, "41°F → °C: (41 − 32) × 5/9 = 9 × 5/9 = 5°C. Temen bagi 9/9 langsung — kebetulan 41 pilih biar bulat. Susulan: 50°F? 10°C ya? (18 × 5/9). Cek dong",
 ["9 × 5/9 pas", "5°C pas", "kebetulan bulat pas", "susulan 10°C pas", "PR gue: kurangi 32 dulu", "iya, b39 juga", "jawaban post semua kuku", "catet: balik urutan ke F", "iya, b39 juga", "jawaban post lengkap", "susulan: 5°C dingin banget"],
 "telat dari arsip. 41°F ke C. tuntas", ("(41 − 32) × 5/9 = 5", "9*5/9", "5"))

t(1145, "Kopi 1:15 — 15 g bubuk → 225 ml air. 15 × 15 = 225. Temen nanya kok 225 aneh: 15² juga! Rasio kuadrat. Susulan: 12 g? 180 ml ya? Cek dong",
 ["225 ml pas", "15² juga pas", "susulan 180 ml pas", "PR gue: 15 × 15 rapi", "iya pas", "jawaban post semua kuku", "catet: g × 15 = ml", "iya, rasio", "jawaban post lengkap", "susulan: 225 = satu mug"],
 "telat dari arsip. kopi 15 g. tuntas", ("15 × 15 = 225 ml", "15*15", "225"))

t(1146, "Empat kaleng 330 ml = 1,32 L. 330 × 4. Temen tulis 1.320 L — salah tangga. Cek: 1.320 ml = 1,32 L. Susulan: 6 kaleng? 1,98 L ya? — hampir 2 L! Cek dong",
 ["1,32 L pas", "1.320 salah tangga", "susulan 1,98 L pas", "PR gue: 1.980 ml", "iya pas", "jawaban post semua kuku", "catet: ml ke liter bagi 1.000", "iya, b37 juga", "jawaban post lengkap", "susulan: 6 kaleng hampir 2 L"],
 "telat dari arsip. kaleng 330. tuntas", ("330 × 4 = 1.320 ml", "330*4", "1320"))

t(1147, "Penyimpanan 4 file × 6 GB = 24 GB. Temen tulis 24 pas? bagus. Yang sering salah 204 — kebalik. Susulan: 5 file? 30 GB ya? Cek dong",
 ["24 GB pas", "204 kebalik", "susulan 30 GB pas", "PR gue: 6 × 4 = 24 komutatif", "iya pas", "jawaban post semua kuku", "catet: cek dua kali", "iya, disiplin", "jawaban post lengkap", "susulan: 30 GB makan banyak"],
 "telat dari arsip. file 6 GB. tuntas", ("6 × 4 = 24 GB", "6*4", "24"))

t(1148, "Unggah 2.000 MB dengan 10 MB/s → 200 detik = 3 menit 20 detik. Temen bagi 2.000/10 langsung — 200 pas. Susulan: 5 MB/s? 400 detik ya? Cek dong",
 ["200 detik pas", "3j20d pas", "susulan 400 detik pas", "PR gue: 20 MB/s? 100 dtk", "iya pas", "jawaban post semua kuku", "catet: ukuran ÷ laju", "iya, b37 juga", "jawaban post lengkap", "susulan: 200 dtk = 3m20d"],
 "telat dari arsip. unggah 10 MB/s. tuntas", ("2.000/10 = 200 detik", "2000/10", "200"))

t(1149, "Lima saklar → 2⁵ = 32 kombinasi. Tiap saklar dua keadaan, dikali lima kali. Temen nanya semua nyala satu-satunya? ya, 1 dari 32. Susulan: 6 saklar? 64 ya? Cek dong",
 ["2⁵ = 32 pas", "kombinasi pas", "susulan 64 pas", "PR gue: 2 × 2 × 2 × 2 × 2", "iya, lima kali", "jawaban post semua kuku", "catet: dikali per saklar", "iya, prinsip perkalian", "jawaban post lengkap", "susulan: 32 = 2⁵ dua wajah"],
 "telat dari arsip. saklar 2⁵. tuntas", ("2⁵ = 32", "2*2*2*2*2", "32"))

t(1150, "1+2+...+24 = 300. Pasangan 12: (1+24) sampai (12+13), masing 25 × 12 = 300. Angka rapi! Susulan: 1..26? 351 ya? (27 × 13). Cek dong",
 ["12 pasang pas", "300 pas", "susulan 351 pas", "PR gue: 25 × 12 rapi", "iya pas", "jawaban post semua kuku", "catet: berpasangan dua ujung", "iya, b37 juga", "jawaban post lengkap", "susulan: 300 = T24"],
 "telat dari arsip. deret 1..24. tuntas", ("25 × 12 = 300", "25*12", "300"))

assert len(T) == 25, len(T)
build2(T, 1126, "threads-46.ts", 46, 42, 626, 42,
       "Topik: separuh 130, kerja bersama 3-15, KPK 14-21, T30, Fibonacci 233, 9×13, biner 10101, heksa 50, 1.000 mod 9, 1.500 mod 7, pembulatan 2.345, estimasi 79×81, kompensasi 96×5, 101×99, siklus 8^n, orang-hari 40, tangki 5-10, resep × 3, 41°F, kopi 15 g, kaleng 330, file 6 GB, unggah 10 MB/s, saklar 2⁵, deret 1..24.")
print("threads-46 ok")
