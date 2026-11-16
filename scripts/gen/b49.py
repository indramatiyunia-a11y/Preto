# threads-49.ts — BATCH 45 (id 1201-1225, authorId 701-725)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1201, "½ × 146 = 73. Genap rapi, hasil prima 73. Temen jawab 72 — 72 × 2 = 144, kurang 2. Susulan: ½ × 154? 77 ya? Cek dong",
 ["73 pas", "72 × 2 = 144 kurang", "susulan 77 pas", "PR gue: 73 prima pas", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 154 = 2 × 7 × 11"],
 "telat dari arsip. separuh 146. tuntas", ("146/2 = 73", "146/2", "73"))

t(1202, "Kerja bersama simetris: A 3 jam, B 3 jam → 1/3 + 1/3 = 2/3 per jam → 1,5 jam. Sama kuat = setengah waktu solo. Susulan: A 5, B 5? 2,5 ya? Cek dong",
 ["2/3 pas", "1,5 jam pas", "setengah waktu pas", "susulan 2,5 pas", "PR gue: 3 ÷ 2 = 1,5", "iya, shortcut", "jawaban post semua kuku", "catet: simetris = ÷ 2", "iya, b43 juga", "jawaban post lengkap", "susulan: 1,5 jam = 1j30m"],
 "telat dari arsip. kerja simetris 3-3. tuntas", ("1/3 + 1/3 = 2/3 → 1,5 jam", "1+1", "2"))

t(1203, "KPK 16 dan 24 = 48. Kelipatan 16: 16, 32, 48. Kelipatan 24: 24, 48. Temen jawab 384 — 48 cukup. Susulan: 48 = 16 × 3 = 24 × 2 ya? cek. Cek dong",
 ["48 pas", "384 kelebihan", "16 × 3 pas", "PR gue: 16 = 2⁴, 24 = 2³ × 3", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK kelipatan pertama", "iya, b41 juga", "jawaban post lengkap", "susulan: 48 = 2⁴ × 3"],
 "telat dari arsip. KPK 16-24. tuntas", ("KPK 16, 24 = 48", "16*3", "48"))

t(1204, "T64 = 2.080. Tangga segitiga 64 tingkat: 64 × 65/2. Temen heran — 64 pangkat 2, T64 segitiga, dua dunia. Susulan: T65? 2.145 ya? (2.080 + 65). Cek dong",
 ["2.080 pas", "64 × 32,5 pas", "susulan 2.145 pas", "PR gue: 2.080 + 65 naik", "iya pas", "jawaban post semua kuku", "catet: n(n+1)/2", "iya, rumus", "jawaban post lengkap", "susulan: 2.080 = 64 × 32,5"],
 "telat dari arsip. T64 = 2.080. tuntas", ("T64 = 64 × 65/2 = 2.080", "64*65/2", "2080"))

t(1205, "Fibonacci: ..., 610, 987 — 610 + 377 = 987. Temen nanya 987 prima? bukan — 3 × 7 × 47. Susulan: setelah 987? 1.597 ya? (987 + 610). Cek dong",
 ["987 pas", "3 × 7 × 47 pas", "1.597 pas", "PR gue: digit sum 987 = 24 → habis 3", "iya, cepat", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, b37 juga", "jawaban post lengkap", "susulan: 1.597 prima? ya"],
 "telat dari arsip. Fibonacci 987. tuntas", ("610 + 377 = 987", "610+377", "987"))

t(1206, "12 × 8 = 96. Sembilan puluh enam. Temen tulis 86 — kebalik lagi. Cek: 12 × 8 = 96 (96 = 12 × 8). Susulan: 8 × 12 sama 96 ya? komutatif. Cek dong",
 ["96 pas", "86 kebalik", "komutatif pas", "PR gue: 12 × 8 = 8 × 12", "iya pas", "susulan: 96 = 2⁵ × 3", "iya pas", "jawaban post semua kuku", "catet: cek dua kali", "iya, disiplin", "jawaban post lengkap", "susulan: 96 deket 100"],
 "telat dari arsip. 12 × 8. tuntas", ("12 × 8 = 96", "12*8", "96"))

t(1207, "Biner 1111111 (tujuh digit) = 127 = 2⁷ − 1. Temen nanya max 7 digit: ya, 127. Susulan: 2⁷ itu 128 ya? satu lebihnya. Cek dong",
 ["127 pas", "2⁷ − 1 pas", "128 pas", "PR gue: 128 − 1 cepat", "iya, b43 juga", "jawaban post semua kuku", "catet: digit penuh = max", "iya, b39 juga", "jawaban post lengkap", "susulan: 127 prima Mersenne!"],
 "telat dari arsip. biner 127. tuntas", ("128 − 1 = 127", "128-1", "127"))

t(1208, "Heks 80 = 128. 8 × 16 — dan 128 = 2⁷! Heks satu digit × 16 selalu pangkat 2 kalau digitnya pangkat 2. Susulan: 20? 32 ya? Cek dong",
 ["8 × 16 pas", "128 pas", "2⁷ juga pas", "susulan 32 pas", "PR gue: 2 × 16 = 32", "iya, pola", "jawaban post semua kuku", "catet: digit × 16", "iya, b44 juga", "jawaban post lengkap", "susulan: 128 = 2⁷ dua wajah"],
 "telat dari arsip. heksa 80. tuntas", ("8 × 16 = 128", "8*16", "128"))

t(1209, "2.026 mod 9: digit sum 10 → 1. 2025 habis 9, 2026 sisa 1 — tahun bergeser satu. Temen heran tahun bisa di-mod. Susulan: 2.027? 11 → 2 ya? Cek dong",
 ["10 → 1 pas", "2025 habis 9 pas", "susulan 2 pas", "PR gue: 2026 = 2025 + 1", "iya, geser satu", "jawaban post semua kuku", "catet: digit sum = mod 9", "iya, b43 juga", "jawaban post lengkap", "susulan: 2.027 → 2"],
 "telat dari arsip. 2.026 mod 9. tuntas", ("2+0+2+6 = 10 → 1", "2+0+2+6", "10"))

t(1210, "2.500 mod 7 = 1. 2.499 = 357 × 7, sisa 1. Temen bagi panjang — 2.500 − 2.100 = 400, 400 mod 7 = 1 (399 habis). Susulan: 2.501? sisa 2 ya? Cek dong",
 ["357 × 7 pas", "sisa 1 pas", "susulan 2 pas", "PR gue: 2.100 habis 7 dulu", "iya, b44 juga", "jawaban post semua kuku", "catet: pecah ke kelipatan deket", "iya, hemat", "jawaban post lengkap", "susulan: 2.500 = 2.499 + 1"],
 "telat dari arsip. 2.500 mod 7. tuntas", ("2.500 − 2.499 = 1", "2500-2499", "1"))

t(1211, "Pembulatan 1.234 ke ribuan = 1.000. 234 kurang 500 → turun. Temen tulis 1.200 — itu ratusan. Susulan: 1.534? 2.000 ya? (534 naik). Cek dong",
 ["1.000 pas", "234 turun pas", "susulan 2.000 pas", "PR gue: ribuan tengah 500", "iya, b41 juga", "jawaban post semua kuku", "catet: satuan yang diminta", "iya, baca soal", "jawaban post lengkap", "susulan: 1.234 deket 1.200"],
 "telat dari arsip. pembulatan 1.234. tuntas", ("1.234 → 1.000", "1234-1000", "234"))

t(1212, "Estimasi 602 − 397 ≈ 200 via 600 − 400. Persis 205 — selisih 5. Estimasi selisih ribuan juga jalan. Susulan: 899 − 503 ≈ 400 ya? persis 396. Cek dong",
 ["600 − 400 pas", "205 pas", "selisih 5 pas", "susulan 396 pas", "PR gue: 900 − 500 = 400", "iya pas", "jawaban post semua kuku", "catet: bulatkan dua suku", "iya, b44 juga", "jawaban post lengkap", "susulan: 602 − 397 = 205"],
 "telat dari arsip. estimasi 602−397. tuntas", ("602 − 397 = 205", "602-397", "205"))

t(1213, "98 × 25 = 2.450. Kompensasi: 100 × 25 = 2.500, kurang 2 × 25 = 50 → 2.450. Temen tulis 2.475 — selisihnya 50. Susulan: 96 × 25? 2.400 ya? Cek dong",
 ["2.500 − 50 pas", "2.450 pas", "susulan 2.400 pas", "PR gue: 2 × 25 = 50", "iya, b40 juga", "jawaban post semua kuku", "catet: selisih × faktor lain", "iya, dua langkah", "jawaban post lengkap", "susulan: × 25 = × 100/4 juga"],
 "telat dari arsip. kompensasi 98×25. tuntas", ("2.500 − 50 = 2.450", "2500-50", "2450"))

t(1214, "91 × 89 = 8.099. (90+1)(90−1) = 8.100 − 1. Temen kali lurus lama. Susulan: 71 × 69? 4.899 ya? — kebetulan sama dengan 69 × 71! Cek dong",
 ["8.100 − 1 pas", "8.099 pas", "susulan 4.899 pas", "PR gue: 90² = 8.100", "iya, identitas", "jawaban post semua kuku", "catet: (a±1) selisih kuadrat", "iya, b42 juga", "jawaban post lengkap", "susulan: 8.099 deket 8.100"],
 "telat dari arsip. 91 × 89. tuntas", ("8.100 − 1 = 8.099", "8100-1", "8099"))

t(1215, "Jumlah ganjil sampai 29: 1+3+...+29 = 225 = 15². Lima belas bilangan ganjil → kuadrat 15. Dan 225 = 15² dari ujung 5 juga! Susulan: sampai 31? 256 ya? = 16² = 2⁸! Cek dong",
 ["225 pas", "15² pas", "susulan 256 pas", "2⁸ juga pas", "PR gue: 15 ganjil → 15²", "iya, b41 juga", "jawaban post semua kuku", "catet: n ganjil pertama = n²", "iya, teorema", "jawaban post lengkap", "susulan: 256 tiga wajah konteks"],
 "telat dari arsip. ganjil 15². tuntas", ("15² = 225", "15*15", "225"))

t(1216, "Digit terakhir 5^n SELALU 5. 5² = 25, 5³ = 125, 5⁴ = 625 — akhir 5 terus. Sepasang konstan dengan 6. Susulan: kenapa? 5 × 5 ujung 5 selalu. Cek dong",
 ["25 pas", "125 pas", "625 pas", "5 × 5 ujung 5 pas", "PR gue: pasangan konstan 5-6", "iya, b44 juga", "jawaban post semua kuku", "catet: konstan karena × 5", "iya, unik", "jawaban post lengkap", "susulan: 625 = 5⁴ juga"],
 "telat dari arsip. 5^n konstan. tuntas", ("5^4 = 625 akhir 5", "625*1", "625"))

t(1217, "Kerja bersama: A 15 jam, B 10 jam → 1/15 + 1/10 = 5/30 = 1/6 per jam → 6 jam. Penyebut 30 penyatu. Susulan: A 30, B 15? 10 jam ya? (1/30 + 1/15 = 1/10). Cek dong",
 ["5/30 pas", "1/6 pas", "6 jam pas", "susulan 10 jam pas", "PR gue: 1/30 + 2/30 = 3/30", "iya pas", "jawaban post semua kuku", "catet: KPK 30 penyatu", "iya, KPK", "jawaban post lengkap", "susulan: 6 jam = kebalikan 1/6"],
 "telat dari arsip. kerja bersama 15-10. tuntas", ("1/15 + 1/10 = 1/6 → 6 jam", "2+3", "5"))

t(1218, "Tangki: isi 2 jam, bocor 3 jam → net 1/2 − 1/3 = 1/6 per jam → 6 jam penuh. Bocor makan sepertiga laju... eh lebih: net tipis. Susulan: isi 2, bocor 6? net 3 jam ya? (1/2 − 1/6 = 1/3). Cek dong",
 ["1/6 pas", "6 jam pas", "net tipis pas", "susulan 3 jam pas", "PR gue: 3/6 − 2/6 = 1/6", "iya, KPK 6", "jawaban post semua kuku", "catet: net = isi − bocor", "iya, b40 juga", "jawaban post lengkap", "susulan: 6 jam satu shift"],
 "telat dari arsip. tangki 2-3. tuntas", ("1/2 − 1/3 = 1/6 → 6 jam", "3-2", "1"))

t(1219, "Resep ditriplipat: 1⅓ × 3 = 4. 4/3 × 3 = 4 utuh — coret 3 dan 3. Temen heran hasil bulat cantik. Susulan: 1⅓ × 6? 8 ya? dua kali lipatnya. Cek dong",
 ["4/3 pas", "4 pas", "coret 3-3 pas", "susulan 8 pas", "PR gue: 4/3 × 6 = 8", "iya pas", "jawaban post semua kuku", "catet: coret silang", "iya, b43 juga", "jawaban post lengkap", "susulan: 4 cup ganda"],
 "telat dari arsip. resep 1⅓ × 3. tuntas", ("4/3 × 3 = 4", "4*3/3", "4"))

t(1220, "−5°C → °F: −5 × 9/5 + 32 = −9 + 32 = 23°F. Suhu minus masuk hitungan — minus dikali minus tetap minus sini. Temen kaget 23 anget? eh dingin tapi positif F. Susulan: −10°C? 14°F ya? Cek dong",
 ["−9 + 32 pas", "23°F pas", "minus dikali pas", "susulan 14°F pas", "PR gue: −10 × 9/5 = −18", "iya pas", "jawaban post semua kuku", "catet: tanda minus hati-hati", "iya, b29 juga", "jawaban post lengkap", "susulan: 23°F dingin"],
 "telat dari arsip. −5°C ke F. tuntas", ("−5 × 9/5 = −9; 32 − 9 = 23", "32-9", "23"))

t(1221, "Kopi 1:15 — 9 g bubuk → 135 ml air. 9 × 15. Temen nanya 9 g dikit? single shot. Susulan: 11 g? 165 ml ya? Cek dong",
 ["135 ml pas", "9 g single pas", "susulan 165 ml pas", "PR gue: 9 × 15 = 135", "iya pas", "jawaban post semua kuku", "catet: g × 15 = ml", "iya, b40 juga", "jawaban post lengkap", "susulan: 135 ml single"],
 "telat dari arsip. kopi 9 g. tuntas", ("9 × 15 = 135 ml", "9*15", "135"))

t(1222, "Empat botol 1,5 L = 6 L. 1,5 × 4. Temen tulis 60 L — salah tangga. Cek: 6.000 ml = 6 L. Susulan: 6 botol? 9 L ya? Cek dong",
 ["6 L pas", "60 salah tangga", "susulan 9 L pas", "PR gue: 1.500 × 4 = 6.000 ml", "iya pas", "jawaban post semua kuku", "catet: desimal × bulat", "iya, b37 juga", "jawaban post lengkap", "susulan: 6 L galon"],
 "telat dari arsip. botol 1,5 L. tuntas", ("1,5 × 4 = 6 L", "1.5*4", "6"))

t(1223, "Penyimpanan 15 file × 0,8 GB = 12 GB. Temen heran desimal kecil — 0,8 × 15 = 12. Susulan: 20 file? 16 GB ya? Cek dong",
 ["12 GB pas", "0,8 × 15 pas", "susulan 16 GB pas", "PR gue: 8 × 15 = 120, geser", "iya, dua jalur", "jawaban post semua kuku", "catet: desimal × bulat", "iya, b37 juga", "jawaban post lengkap", "susulan: 12 GB pas kuota"],
 "telat dari arsip. file 0,8 GB. tuntas", ("0,8 × 15 = 12 GB", "0.8*15", "12"))

t(1224, "Unggah 1.500 MB dengan 15 MB/s → 100 detik. Temen bagi 1.500/15 langsung — 100 pas. Susulan: 30 MB/s? 50 detik ya? Cek dong",
 ["100 detik pas", "susulan 50 detik pas", "PR gue: 100 × 15 = 1.500 cek", "iya, selalu", "jawaban post semua kuku", "catet: ukuran ÷ laju", "iya, b37 juga", "jawaban post lengkap", "susulan: 100 dtk = 1m40d"],
 "telat dari arsip. unggah 15 MB/s. tuntas", ("1.500/15 = 100 detik", "1500/15", "100"))

t(1225, "1+2+...+44 = 990. Pasangan 22: (1+44) sampai (22+23), masing 45 × 22 = 990. Temen heran dekat 1.000. Susulan: 1..45? 1.035 ya? (990 + 45). Cek dong",
 ["22 pasang pas", "990 pas", "susulan 1.035 pas", "PR gue: 45 × 22 rapi", "iya pas", "jawaban post semua kuku", "catet: berpasangan dua ujung", "iya, b37 juga", "jawaban post lengkap", "susulan: 990 = 45 × 22"],
 "telat dari arsip. deret 1..44. tuntas", ("45 × 22 = 990", "45*22", "990"))

assert len(T) == 25, len(T)
build2(T, 1201, "threads-49.ts", 49, 45, 701, 45,
       "Topik: separuh 146, kerja simetris 3-3, KPK 16-24, T64, Fibonacci 987, 12×8, biner 127, heksa 80, 2.026 mod 9, 2.500 mod 7, pembulatan 1.234, estimasi 602−397, kompensasi 98×25, 91×89, ganjil 15², 5^n konstan, kerja bersama 15-10, tangki 2-3, resep 1⅓ × 3, −5°C ke F, kopi 9 g, botol 1,5 L, file 0,8 GB, unggah 15 MB/s, deret 1..44.")
print("threads-49 ok")
