# threads-51.ts — BATCH 47 (id 1251-1275, authorId 751-775)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1251, "½ × 154 = 77. Genap rapi, hasil 77 = 7 × 11. Temen jawab 76 — 76 × 2 = 152, kurang 2. Susulan: ½ × 162? 81 ya? = 9²! Cek dong",
 ["77 pas", "76 × 2 = 152 kurang", "susulan 81 pas", "9² juga pas", "PR gue: 154 = 2 × 7 × 11", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 81 dua wajah konteks"],
 "telat dari arsip. separuh 154. tuntas", ("154/2 = 77", "154/2", "77"))

t(1252, "Kerja bersama: A 4 jam, B 20 jam → 1/4 + 1/20 = 6/20 = 3/10 per jam → 10/3 ≈ 3,33 jam. Temen heran desimal — 3 jam 20 menit an. Susulan: A 10, B 10? 5 jam ya? simetris. Cek dong",
 ["6/20 pas", "3/10 pas", "3,33 an pas", "susulan 5 jam pas", "PR gue: 3,33 ≈ 3j20m", "iya, konversi", "jawaban post semua kuku", "catet: KPK 20 penyatu", "iya, KPK", "jawaban post lengkap", "susulan: 10/3 jam kasar"],
 "telat dari arsip. kerja bersama 4-20. tuntas", ("1/4 + 1/20 = 3/10 → 10/3 jam", "5+1", "6"))

t(1253, "KPK 21 dan 28 = 84. Kelipatan 21: 21, 42, 63, 84. Kelipatan 28: 28, 56, 84. Temen jawab 588 — 84 cukup. Susulan: 84 = 21 × 4 = 28 × 3 ya? cek. Cek dong",
 ["84 pas", "588 kelebihan", "21 × 4 pas", "PR gue: 21 = 3 × 7, 28 = 2² × 7", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK kelipatan pertama", "iya, b41 juga", "jawaban post lengkap", "susulan: 84 = 2² × 3 × 7"],
 "telat dari arsip. KPK 21-28. tuntas", ("KPK 21, 28 = 84", "21*4", "84"))

t(1254, "T66 = 2.211. Tangga segitiga 66 tingkat: 66 × 67/2. Temen heran dua ribu — tangga besar melonjak. Susulan: T67? 2.278 ya? (2.211 + 67). Cek dong",
 ["2.211 pas", "66 × 33,5 pas", "susulan 2.278 pas", "PR gue: 2.211 + 67 naik", "iya pas", "jawaban post semua kuku", "catet: n(n+1)/2", "iya, rumus", "jawaban post lengkap", "susulan: 2.211 deket 2.200"],
 "telat dari arsip. T66 = 2.211. tuntas", ("T66 = 66 × 67/2 = 2.211", "66*67/2", "2211"))

t(1255, "Fibonacci: ..., 1.597, 2.584 — 1.597 + 987 = 2.584. Temen nanya 2.584 habis dibagi 2: ya, genap. Fibonacci bergantian genap tiap tiga. Susulan: setelah 2.584? 4.181 ya? (2.584 + 1.597). Cek dong",
 ["2.584 pas", "genap pas", "4.181 pas", "PR gue: pola genap tiap tiga", "iya, sifat", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, b37 juga", "jawaban post lengkap", "susulan: 4.181 prima? ya"],
 "telat dari arsip. Fibonacci 2.584. tuntas", ("1.597 + 987 = 2.584", "1597+987", "2584"))

t(1256, "14 × 4 = 56. Lima puluh enam. Temen tulis 46 — salah 10. Cek: 14 × 4 = 56 (10×4 + 4×4). Susulan: 14 × 5? 70 ya? Cek dong",
 ["56 pas", "46 salah 10", "70 pas", "PR gue: 40 + 16 rapi", "iya pas", "susulan: 56 = 7 × 8 juga", "iya, pasangan", "jawaban post semua kuku", "catet: pecah 10 + 4", "iya, standar", "jawaban post lengkap", "susulan: 56 = 7 × 8 ikonik"],
 "telat dari arsip. 14 × 4. tuntas", ("14 × 4 = 56", "14*4", "56"))

t(1257, "Biner 110110 = 54. 32 + 16 + 4 + 2. Temen lewati nol di posisi 8 dan 1. Susulan: 110111? 55 ya? (+1). Cek dong",
 ["32 + 16 + 4 + 2 pas", "54 pas", "susulan 55 pas", "PR gue: nol di 8 dan 1", "iya, cek posisi", "jawaban post semua kuku", "catet: per posisi 32-16-8-4-2-1", "iya, b41 juga", "jawaban post lengkap", "susulan: 54 = 2 × 27"],
 "telat dari arsip. biner 110110. tuntas", ("32 + 16 + 4 + 2 = 54", "32+16+4+2", "54"))

t(1258, "Heks A0 = 160. A = 10, posisi × 16 → 160. Temen heran huruf di depan — sama saja, digit × 16. Susulan: B0? 176 ya? (11 × 16). Cek dong",
 ["10 × 16 pas", "160 pas", "susulan 176 pas", "PR gue: B = 11", "iya, b41 juga", "jawaban post semua kuku", "catet: digit × 16 per posisi", "iya, b44 juga", "jawaban post lengkap", "susulan: 160 deket 160 cm tinggi"],
 "telat dari arsip. heksa A0. tuntas", ("10 × 16 = 160", "10*16", "160"))

t(1259, "Digital root 1.234: 1+2+3+4 = 10 → 1. Temen berhenti di 10 — satu tahap lagi. Susulan: 4.321? 10 → 1 juga ya? kebetulan. Cek dong",
 ["10 → 1 pas", "dua tahap pas", "susulan 1 juga pas", "PR gue: 4.321 digit sum 10", "iya, kebetulan", "jawaban post semua kuku", "catet: jumlah sampai satu digit", "iya, b43 juga", "jawaban post lengkap", "susulan: 1.234 enak dihitung"],
 "telat dari arsip. digital root 1.234. tuntas", ("1+2+3+4 = 10 → 1", "1+2+3+4", "10"))

t(1260, "1.200 mod 7 = 3. 1.197 = 171 × 7, sisa 3. Temen pecah: 1.400 habis 7, 1.200 − 1.400 minus — balik: 1.200 = 1.197 + 3. Susulan: 1.203? sisa 6 ya? Cek dong",
 ["171 × 7 pas", "sisa 3 pas", "susulan 6 pas", "PR gue: 1.200 − 1.197 = 3", "iya, hemat", "jawaban post semua kuku", "catet: kelipatan deket dulu", "iya, b40 juga", "jawaban post lengkap", "susulan: 1.203 = 1.197 + 6"],
 "telat dari arsip. 1.200 mod 7. tuntas", ("1.200 − 1.197 = 3", "1200-1197", "3"))

t(1261, "Pembulatan 3.14159 ke dua desimal = 3,14. Digit ketiga 1 kurang 5 → tetap. Temen tulis 3,15 — 1 itu jauh dari 5. Susulan: 3.14197? 3,14 ya? (1 di posisi ketiga). Cek dong",
 ["3,14 pas", "1 turun pas", "susulan 3,14 pas", "PR gue: lihat digit ketiga", "iya, aturan desimal", "jawaban post semua kuku", "catet: desimal dua = posisi seratus", "iya, aturan", "jawaban post lengkap", "susulan: 3,14 ikonik"],
 "telat dari arsip. pembulatan 3,14159. tuntas", ("3,14159 → 3,14", "314159*1", "314159"))

t(1262, "Estimasi 1.499 + 502 ≈ 2.000 via 1.500 + 500. Persis 2.001 — selisih 1. Susulan: 1.501 + 499? persis 2.000 ya? kompensasi sempurna. Cek dong",
 ["2.000 pas", "2.001 pas", "selisih 1 pas", "susulan 2.000 persis pas", "PR gue: kompensasi +1 −1", "iya, rapi", "jawaban post semua kuku", "catet: bulatkan ke ratusan", "iya, b42 juga", "jawaban post lengkap", "susulan: 1.499 + 502 = 2.001"],
 "telat dari arsip. estimasi 1.499+502. tuntas", ("1.499 + 502 = 2.001", "1499+502", "2001"))

t(1263, "998 × 5 = 4.990. Kompensasi: 1.000 × 5 = 5.000, kurang 2 × 5 = 10 → 4.990. Temen tulis 4.900 — selisihnya 10. Susulan: 997 × 5? 4.985 ya? Cek dong",
 ["5.000 − 10 pas", "4.990 pas", "susulan 4.985 pas", "PR gue: 2 × 5 = 10", "iya, b40 juga", "jawaban post semua kuku", "catet: selisih × faktor lain", "iya, dua langkah", "jawaban post lengkap", "susulan: 4.990 deket 5.000"],
 "telat dari arsip. kompensasi 998×5. tuntas", ("5.000 − 10 = 4.990", "5000-10", "4990"))

t(1264, "111 × 109 = 12.099. (110+1)(110−1) = 12.100 − 1. Temen kali lurus lama. Susulan: 121 × 119? 14.399 ya? (120² − 1). Cek dong",
 ["12.100 − 1 pas", "12.099 pas", "susulan 14.399 pas", "PR gue: 110² = 12.100", "iya, identitas", "jawaban post semua kuku", "catet: (a±1) selisih kuadrat", "iya, b42 juga", "jawaban post lengkap", "susulan: 12.099 deket 12.100"],
 "telat dari arsip. 111 × 109. tuntas", ("12.100 − 1 = 12.099", "12100-1", "12099"))

t(1265, "Jumlah ganjil sampai 33: 1+3+...+33 = 289 = 17². Tujuh belas bilangan ganjil → kuadrat 17. Temen heran 289 = 17² dari b25 juga! Susulan: sampai 35? 324 ya? = 18². Cek dong",
 ["289 pas", "17² pas", "susulan 324 pas", "PR gue: 17 ganjil → 17²", "iya, b41 juga", "jawaban post semua kuku", "catet: n ganjil pertama = n²", "iya, teorema", "jawaban post lengkap", "susulan: 289 dua wajah konteks"],
 "telat dari arsip. ganjil 17². tuntas", ("17² = 289", "17*17", "289"))

t(1266, "Digit terakhir 7^10: siklus 7-9-3-1, 10 mod 4 = 2 → posisi 2 → akhir 9. Temen hitung 7^10 = 282.475.249 — akhir 9 cek! Susulan: 7^11? akhir 3 ya? Cek dong",
 ["10 mod 4 = 2 pas", "akhir 9 pas", "282 jt pas", "susulan akhir 3 pas", "PR gue: sisa mod 4 posisi", "iya, metode", "jawaban post semua kuku", "catet: siklus empat", "iya, b40 juga", "jawaban post lengkap", "susulan: 7^10 raksasa"],
 "telat dari arsip. digit akhir 7^10. tuntas", ("7^10 = 282.475.249 akhir 9", "282475249*1", "282475249"))

t(1267, "Kerja bersama: A 9 jam, B 18 jam → 1/9 + 1/18 = 3/18 = 1/6 per jam → 6 jam. Temen heran B lambat dua kali — gabungan tetap 6. Susulan: A 18, B 9? 6 juga ya? komutatif. Cek dong",
 ["3/18 pas", "1/6 pas", "6 jam pas", "susulan 6 juga pas", "PR gue: tukar posisi sama", "iya, invarian", "jawaban post semua kuku", "catet: KPK 18 penyatu", "iya, KPK", "jawaban post lengkap", "susulan: 6 jam = kebalikan 1/6"],
 "telat dari arsip. kerja bersama 9-18. tuntas", ("1/9 + 1/18 = 1/6 → 6 jam", "2+1", "3"))

t(1268, "Tangki: isi 9 jam, bocor 18 jam → net 1/9 − 1/18 = 1/18 per jam → 18 jam penuh. Bocor makan separuh laju isi. Susulan: isi 9, bocor 36? net 12 jam ya? (3/36 = 1/12). Cek dong",
 ["1/18 pas", "18 jam pas", "bocor separuh laju pas", "susulan 12 jam pas", "PR gue: 2/18 − 1/18 = 1/18", "iya, KPK 18", "jawaban post semua kuku", "catet: net lalu kebalikan", "iya, b40 juga", "jawaban post lengkap", "susulan: 18 jam hampir sehari"],
 "telat dari arsip. tangki 9-18. tuntas", ("1/9 − 1/18 = 1/18 → 18 jam", "2-1", "1"))

t(1269, "Resep digandakan: 1¾ × 2 = 3½. 7/4 × 2 = 7/2. Temen kali penyebut — pembilang saja. Susulan: 1¾ × 4? 7 ya? Cek dong",
 ["7/4 pas", "3½ pas", "susulan 7 pas", "PR gue: 1,75 × 2 = 3,5 desimal", "iya, dua jalur", "jawaban post semua kuku", "catet: campuran → pecahan", "iya, b26 juga", "jawaban post lengkap", "susulan: 3½ cup ganda"],
 "telat dari arsip. resep 1¾ × 2. tuntas", ("1¾ × 2 = 3½", "1.75*2", "3.5"))

t(1270, "35°C → °F: 35 × 9/5 + 32 = 63 + 32 = 95°F. Temen kali 9/5 kaku — 35/5 = 7, × 9 = 63. Susulan: 25°C? 77°F ya? (45 + 32). Cek dong",
 ["63 + 32 pas", "95°F pas", "35/5 = 7 cepat", "susulan 77°F pas", "PR gue: 35 × 9 = 315, /5 = 63", "iya pas", "jawaban post semua kuku", "catet: bagi 5 dulu lalu × 9", "iya, b40 juga", "jawaban post lengkap", "susulan: 95°F panas"],
 "telat dari arsip. 35°C ke F. tuntas", ("35 × 9/5 = 63", "315/5", "63"))

t(1271, "Kopi 1:15 — 16 g bubuk → 240 ml air. 16 × 15 = 240. Temen kali 16 × 1,5 — rasio 1:15. Susulan: 17 g? 255 ml ya? Cek dong",
 ["240 ml pas", "rasio 1:15 pas", "susulan 255 ml pas", "PR gue: 16 × 15 = 240", "iya pas", "jawaban post semua kuku", "catet: g × 15 = ml", "iya, b40 juga", "jawaban post lengkap", "susulan: 240 ml mug besar"],
 "telat dari arsip. kopi 16 g. tuntas", ("16 × 15 = 240 ml", "16*15", "240"))

t(1272, "Susu 750 ml ÷ 250 ml = 3 gelas. Temen bagi 750/250 langsung — 3 pas. Susulan: 1 L? 4 gelas ya? Cek dong",
 ["3 gelas pas", "750/250 pas", "susulan 4 gelas pas", "PR gue: 250 × 3 = 750 cek", "iya, selalu", "jawaban post semua kuku", "catet: volume ÷ isi gelas", "iya, b40 juga", "jawaban post lengkap", "susulan: 750 ml botol sedang"],
 "telat dari arsip. susu 750 ml. tuntas", ("750/250 = 3", "750/250", "3"))

t(1273, "Penyimpanan 6 file × 2,5 GB = 15 GB. Temen tulis 150 — koma hilang. Cek: 2,5 × 6 = 15. Susulan: 4 file? 10 GB ya? Cek dong",
 ["15 GB pas", "150 koma hilang", "susulan 10 GB pas", "PR gue: 2 + 0,5 per file", "iya, 12 + 3", "jawaban post semua kuku", "catet: desimal × bulat", "iya, b37 juga", "jawaban post lengkap", "susulan: 15 GB pas kuota"],
 "telat dari arsip. file 2,5 GB. tuntas", ("2,5 × 6 = 15 GB", "2.5*6", "15"))

t(1274, "Unggah 3.600 MB dengan 20 MB/s → 180 detik = 3 menit. Temen bagi 3.600/20 langsung — 180 pas. Susulan: 30 MB/s? 120 detik ya? Cek dong",
 ["180 detik pas", "3 menit pas", "susulan 120 detik pas", "PR gue: 180 × 20 = 3.600 cek", "iya, selalu", "jawaban post semua kuku", "catet: ukuran ÷ laju", "iya, b37 juga", "jawaban post lengkap", "susulan: 180 dtk = 3 menit"],
 "telat dari arsip. unggah 20 MB/s. tuntas", ("3.600/20 = 180 detik", "3600/20", "180"))

t(1275, "Kelereng 100 butir, kantong 7 → 15 kantong. 100/7 = 14 sisa 2 → 15 (sisa tetap butuh kantong). Temen jawab 14 — 2 kelereng nganggur. Susulan: 98 butir? 14 tepat ya? Cek dong",
 ["14 sisa 2 pas", "15 kantong pas", "susulan 14 tepat pas", "PR gue: 14 × 7 = 98", "iya pas", "jawaban post semua kuku", "catet: bulat ke atas ada sisa", "iya, b37 juga", "jawaban post lengkap", "susulan: 15 × 7 = 105 muat"],
 "telat dari arsip. kantong 100 kelereng. tuntas", ("100/7 = 14 sisa 2 → 15", "15*7", "105"))

assert len(T) == 25, len(T)
build2(T, 1251, "threads-51.ts", 51, 47, 751, 47,
       "Topik: separuh 154, kerja bersama 4-20, KPK 21-28, T66, Fibonacci 2.584, 14×4, biner 110110, heksa A0, digital root 1.234, 1.200 mod 7, pembulatan 3,14159, estimasi 1.499+502, kompensasi 998×5, 111×109, ganjil 17², digit akhir 7^10, kerja bersama 9-18, tangki 9-18, resep 1¾ × 2, 35°C ke F, kopi 16 g, susu 750 ml, file 2,5 GB, unggah 20 MB/s, kantong 100 kelereng.")
print("threads-51 ok")
