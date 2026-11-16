# threads-43.ts — BATCH 39 (id 1051-1075, authorId 551-575)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1051, "½ × 118 = 59. Genap rapi, hasil prima 59. Temen jawab 58 — 58 × 2 = 116, kurang 2. Susulan: ½ × 122? 61 ya? Cek dong",
 ["59 pas", "58 × 2 = 116 kurang", "susulan 61 pas", "PR gue: 59 prima pas", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 118 = 2 × 59"],
 "telat dari arsip. separuh 118. tuntas", ("118/2 = 59", "118/2", "59"))

t(1052, "Kerja bersama: A 4 jam, B 12 jam → 1/4 + 1/12 = 1/3 per jam → 3 jam. Kuncinya penyebut 12: 3/12 + 1/12. Susulan: A 6, B 12? 4 jam ya? (1/6 + 1/12 = 1/4). Cek dong",
 ["1/3 per jam pas", "3 jam pas", "penyebut 12 pas", "susulan 4 jam pas", "PR gue: A 12, B 12? 6 jam", "iya, simetris", "jawaban post semua kuku", "catet: jumlah laju per jam", "iya, b41 juga", "jawaban post lengkap", "susulan: 3/12 + 1/12 rapi"],
 "telat dari arsip. kerja bersama 4-12. tuntas", ("1/4 + 1/12 = 1/3 → 3 jam", "3+1", "4"))

t(1053, "KPK 6 dan 9 = 18. Kelipatan 6: 6, 12, 18. Kelipatan 9: 9, 18. Temen jawab 54 — 18 lebih kecil. Susulan: dua alarm tiap 6 dan 9 menit → bunyi bersama tiap 18 menit ya? Cek dong",
 ["18 pas", "54 kelebihan", "alarm tiap 18 mnt pas", "PR gue: KPK 4 dan 6? 12", "iya pas", "susulan: 6 = 2 × 3, 9 = 3²", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK = kelipatan pertama sama", "iya, definisi", "jawaban post lengkap", "susulan: 18 = 6 × 3 = 9 × 2"],
 "telat dari arsip. KPK 6-9. tuntas", ("KPK 6, 9 = 18", "6*3", "18"))

t(1054, "T15 = 120. Tangga segitiga 15 tingkat: 15 × 16/2 = 120. Temen heran rapi — T15 juga 5!, kebetulan manis. Susulan: T16? 136 ya? (120 + 16). Cek dong",
 ["120 pas", "15 × 8 pas", "T16 = 136 pas", "PR gue: 120 + 16 naik tingkat", "iya pas", "susulan: T15 = 5! kebetulan", "iya, seru", "jawaban post semua kuku", "catet: n(n+1)/2", "iya, rumus", "jawaban post lengkap", "susulan: 120 dekat 121 = 11²"],
 "telat dari arsip. T15 = 120. tuntas", ("T15 = 15 × 16/2 = 120", "15*16/2", "120"))

t(1055, "Fibonacci: ..., 21, 34, 55 — 34 + 21 = 55. Temen nanya 55 muncul di mana: T10 juga 55! Fibonacci dan segitiga bertemu. Susulan: setelah 55? 89 ya? (55 + 34). Cek dong",
 ["55 pas", "T10 juga 55 pas", "89 pas", "PR gue: 55 = 5 × 11", "iya pas", "susulan: dua deret nempel di 55", "iya, menyenangkan", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, aturan", "jawaban post lengkap", "susulan: 89 = 55 + 34"],
 "telat dari arsip. Fibonacci 55. tuntas", ("34 + 21 = 55", "34+21", "55"))

t(1056, "6 × 19 = 114. Seratus empat belas. Temen tulis 104 — salah 10. Cek: 6 × 19 = 6 × 20 − 6 = 114. Susulan: 19 × 7? 133 ya? Cek dong",
 ["114 pas", "104 salah 10", "133 pas", "PR gue: 120 − 6 rapi", "iya pas", "susulan: deket 20 dikurangi", "iya, trik", "jawaban post semua kuku", "catet: × 20 minus 6", "iya, dua langkah", "jawaban post lengkap", "susulan: 114 = 6 × 19"],
 "telat dari arsip. 6 × 19. tuntas", ("6 × 19 = 114", "6*19", "114"))

t(1057, "Biner 110 = 6. 1×4 + 1×2 + 0×1. Posisi 4-2-1 tiga digit. Temen tulis 110 desimal — tambahkan subscript ₂ biar jelas. Susulan: 111? 7 ya? Cek dong",
 ["4 + 2 pas", "6 pas", "susulan 7 pas", "PR gue: 100? 4", "iya pas", "susulan: tiga digit = sampai 7", "iya, 2³ − 1", "jawaban post semua kuku", "catet: posisi pangkat 2", "iya, basis 2", "jawaban post lengkap", "susulan: 111₂ = 7, tangga penuh"],
 "telat dari arsip. biner 110. tuntas", ("4 + 2 = 6", "4+2", "6"))

t(1058, "Heks 1F = 31. 1 × 16 + 15. Temen heran 31 deket 32 = 2^5 — max 5 bit! Susulan: 2F? 47 ya? (32 + 15). Cek dong",
 ["1 × 16 pas", "31 pas", "max 5 bit pas", "susulan 47 pas", "PR gue: 10 heksa? 16", "iya pas", "jawaban post semua kuku", "catet: F = 15 terbesar satu digit", "iya, b41 juga", "jawaban post lengkap", "susulan: 1F = 31, deket pangkat 2"],
 "telat dari arsip. heksa 1F. tuntas", ("16 + 15 = 31", "16+15", "31"))

t(1059, "Digital root 987: 9+8+7 = 24 → 2+4 = 6. Dijumlah sampai satu digit. Temen berhenti di 24 — masih dua digit. Susulan: 999? 27 → 9 ya? Cek dong",
 ["24 → 6 pas", "dua tahap pas", "susulan 9 pas", "PR gue: 123? 6 juga", "iya pas", "susulan: sama dengan mod 9", "iya, nyambung", "jawaban post semua kuku", "catet: jumlah sampai satu digit", "iya, digital root", "jawaban post lengkap", "susulan: 987 habis dibagi 3"],
 "telat dari arsip. digital root. tuntas", ("9+8+7 = 24 → 2+4 = 6", "9+8+7", "24"))

t(1060, "Hari ke-100 dalam seminggu berulang: 100 mod 7 = 2 — geser 2 hari dari awal. Senin mulai → hari ke-100 Rabu? cek: 98 habis dibagi 7, sisa 2. Susulan: hari ke-101? Rabu + 1 = Kamis ya? Cek dong",
 ["100 mod 7 = 2 pas", "98 kelipatan 7 pas", "susulan Kamis pas", "PR gue: hari ke-7? Senin lagi", "iya, satu pekan", "jawaban post semua kuku", "catet: mod 7 geser hari", "iya, b24 juga", "jawaban post lengkap", "susulan: hitung sisa, bukan jumlah"],
 "telat dari arsip. mod 7 hari. tuntas", ("100 mod 7 = 2", "100", "100"))

t(1061, "Pembulatan 999 ke ribuan = 1.000. 999 itu 1 di bawah — naik. Temen tulis 900 — pembulatan ribuan, bukan ratusan. Susulan: 1.499? 1.000 ya? (499 kurang 500). Cek dong",
 ["1.000 pas", "900 salah satuan", "susulan 1.000 pas", "PR gue: 1.500? pas tengah → naik 2.000", "iya, bila aturan naik", "jawaban post semua kuku", "catet: tengah 500 penentu ribuan", "iya, b41 juga", "jawaban post lengkap", "susulan: 999 mepet, makin seru"],
 "telat dari arsip. pembulatan 999. tuntas", ("999 → 1.000, selisih 1", "1000-999", "1"))

t(1062, "Estimasi 398 + 402 ≈ 800 via 400 + 400. Persis 800! Estimasi kebetulan tepat karena saling kompensasi (−2 dan +2). Susulan: 397 + 401 ≈ 800 ya? persis 798, selisih 2. Cek dong",
 ["400 + 400 pas", "800 persis pas", "kompensasi pas", "susulan 798 pas", "PR gue: 405 + 399? ≈ 804 persis", "iya pas", "jawaban post semua kuku", "catet: estimasi bulatkan per suku", "iya, cepat", "jawaban post lengkap", "susulan: kompensasi bikin tepat"],
 "telat dari arsip. estimasi jumlah. tuntas", ("398 + 402 = 800", "398+402", "800"))

t(1063, "398 × 3 = 1.194. Kompensasi: 400 × 3 = 1.200, kurang 2 × 3 = 6 → 1.194. Temen langsung kaku. Susulan: 597 × 2? 1.194 juga ya? (600 × 2 − 6). Kebetulan seru. Cek dong",
 ["1.200 − 6 pas", "1.194 pas", "susulan 1.194 lagi pas", "kebetulan sama pas", "PR gue: 396 × 3? 1.200 − 12 = 1.188", "iya pas", "jawaban post semua kuku", "catet: deket bulat dikurangi", "iya, trik", "jawaban post lengkap", "susulan: 1.194 habis dibagi 3"],
 "telat dari arsip. kompensasi 398×3. tuntas", ("1.200 − 6 = 1.194", "1200-6", "1194"))

t(1064, "1+2+...+20 = 210. Pasangan 10: (1+20) sampai (10+11), masing 21 × 10 = 210. Temen nanya rumus: 20 × 21/2. Susulan: 1..25? 325 ya? (25 × 26/2). Cek dong",
 ["10 pasang pas", "210 pas", "susulan 325 pas", "PR gue: 21 × 10 cek", "iya pas", "susulan: T20 = 210 juga", "iya, sama deret", "jawaban post semua kuku", "catet: berpasangan dua ujung", "iya, trik Gauss", "jawaban post lengkap", "susulan: 210 = T20"],
 "telat dari arsip. deret 1..20. tuntas", ("21 × 10 = 210", "21*10", "210"))

t(1065, "Digit terakhir 3^n berulang: 3, 9, 7, 1 — siklus 4. 3^5 = 243 → akhir 3 (posisi 1 siklus). Temen nanya 3^6? akhir 9. Cek dong",
 ["siklus 3-9-7-1 pas", "243 akhir 3 pas", "3^6 akhir 9 pas", "PR gue: 3^4 = 81 akhir 1", "iya, siklus penuh", "jawaban post semua kuku", "catet: digit akhir berulang", "iya, pola kuat", "jawaban post lengkap", "susulan: 243 = 3^5 bener"],
 "telat dari arsip. siklus 3^n. tuntas", ("3^5 = 243", "243*1", "243"))

t(1066, "Salip searah: A 90 km/j, B 70 km/j, gap 15 km. Menutup 20 km per jam → 45 menit (15 ÷ 20 × 60). Temen bagi 15/90 — selisih laju yang dipakai. Susulan: gap 10 km? 30 menit ya? Cek dong",
 ["20 km per jam pas", "45 menit pas", "susulan 30 menit pas", "PR gue: 5 km? 15 menit", "iya pas", "jawaban post semua kuku", "catet: laju relatif selisih", "iya, b41 juga", "jawaban post lengkap", "susulan: 20 km/j = 1 km per 3 menit"],
 "telat dari arsip. salip 90-70. tuntas", ("15 ÷ 20 = 0,75 jam", "15/20", "0.75"))

t(1067, "Tangki: isi 2 jam penuh, bocor kosong 4 jam. Net 1/2 − 1/4 = 1/4 per jam → 4 jam penuh. Temen heran setengah tangki hilang — ya, bocor makan separuh laju. Susulan: isi 2, bocor 12? net 2,4 jam ya? (1/2 − 1/12 = 5/12). Cek dong",
 ["1/4 per jam pas", "4 jam pas", "bocor makan laju pas", "susulan 2,4 jam pas", "PR gue: 12/5 rumusnya", "iya, b41 juga", "jawaban post semua kuku", "catet: net = isi minus bocor", "iya, b41 juga", "jawaban post lengkap", "susulan: 2,4 jam = 2j24m"],
 "telat dari arsip. tangki 2-4. tuntas", ("1/2 − 1/4 = 1/4 → 4 jam", "2-1", "1"))

t(1068, "Resep digandakan: ⅔ cup × 2 = 4/3 = 1⅓ cup. Temen kali penyebut — kali pembilang aja. Susulan: ¾ × 2? 1½ ya? Cek dong",
 ["4/3 pas", "1⅓ pas", "susulan 1½ pas", "PR gue: ½ × 2? 1 utuh", "iya pas", "susulan: gandakan = kali 2 pembilang", "iya, cepat", "jawaban post semua kuku", "catet: kali 2 ke pembilang", "iya, b38 juga", "jawaban post lengkap", "susulan: 1⅓ = 4/3 campuran"],
 "telat dari arsip. resep ganda. tuntas", ("⅔ × 2 = 4/3", "2*2", "4"))

t(1069, "Balik konversi: 68°F → °C = (68 − 32) × 5/9 = 36 × 5/9 = 20°C. Kurangi 32 dulu, baru kali 5/9. Temen kebalik urutan. Susulan: 50°F? 10°C ya? (18 × 5/9). Cek dong",
 ["36 × 5/9 pas", "20°C pas", "kurangi 32 dulu", "susulan 10°C pas", "PR gue: 32°F? 0°C pas", "iya, titik beku", "jawaban post semua kuku", "catet: urutan balik dari ke F", "iya, penting", "jawaban post lengkap", "susulan: 36 habis dibagi 9"],
 "telat dari arsip. F ke Celsius. tuntas", ("(68 − 32) × 5/9 = 20", "36*5/9", "20"))

t(1070, "Baca buku 320 halaman, 40 halaman per hari → 8 hari. Temen bagi 320/40 langsung — 32 ÷ 4 pas. Susulan: 50 halaman per hari? 6,4 → 7 hari ya? bulat ke atas. Cek dong",
 ["8 hari pas", "32 ÷ 4 pas", "susulan 7 hari pas", "PR gue: 80/hari? 4 hari", "iya pas", "susulan: sisa 0,4 hari tetap hari", "iya, bulat ke atas", "jawaban post semua kuku", "catet: bagi lalu bulatkan bila perlu", "iya, b41 juga", "jawaban post lengkap", "susulan: 8 × 40 = 320 cek"],
 "telat dari arsip. baca buku. tuntas", ("320/40 = 8 hari", "320/40", "8"))

t(1071, "Puzzle 500 keping, 60% terpasang → 300 pas, sisa 200. Temen hitung 60% dari 500 = 300 dulu, baru sisa. Susulan: 80%? 400 pas, sisa 100 ya? Cek dong",
 ["300 pas", "sisa 200 pas", "susulan 100 pas", "PR gue: 60% = 3/5, 500/5 × 3", "iya, cepat", "jawaban post semua kuku", "catet: persen dulu, sisa belakangan", "iya, urutan", "jawaban post lengkap", "susulan: 500 − 300 = 200"],
 "telat dari arsip. progres puzzle. tuntas", ("500 − 300 = 200", "500-300", "200"))

t(1072, "Kursi bioskop: 15 baris × 20 kursi = 300 total. Terisi 265 → kosong 35. Temen kali 15 × 20 kaku — pecah 15 × 2 × 10. Susulan: 12 baris? 240 kursi ya? Cek dong",
 ["300 pas", "kosong 35 pas", "susulan 240 pas", "PR gue: 15 × 20 = 15 × 2 × 10", "iya, pecah", "jawaban post semua kuku", "catet: baris × kursi", "iya, dua faktor", "jawaban post lengkap", "susulan: 300 − 265 = 35"],
 "telat dari arsip. kursi 15×20. tuntas", ("15 × 20 = 300", "15*20", "300"))

t(1073, "Poin belanja: 2 poin per 10rb. Belanja 450rb → 45 × 2 = 90 poin. Temen bagi 450/10 = 45 dulu, baru kali 2. Susulan: 600rb? 120 poin ya? Cek dong",
 ["45 blok pas", "90 poin pas", "susulan 120 poin pas", "PR gue: 10rb = 2 poin, kali enam", "iya, 450rb = 45 blok", "jawaban post semua kuku", "catet: blok dulu, poin belakangan", "iya, dua langkah", "jawaban post lengkap", "susulan: 600/10 × 2 = 120"],
 "telat dari arsip. poin 2 per 10rb. tuntas", ("45 × 2 = 90 poin", "45*2", "90"))

t(1074, "Keramik 40 × 40 cm di lantai 4 × 5 m: per m² butuh 6,25 keping (100 × 100/40 × 40), total 20 m² × 6,25 = 125. Temen heran pecahan — 6,25 = 25/4, wajar. Susulan: lantai 3 × 4? 75 keping ya? Cek dong",
 ["6,25 per m² pas", "20 m² pas", "125 keping pas", "susulan 75 keping pas", "PR gue: 12 m² × 6,25 = 75", "iya pas", "jawaban post semua kuku", "catet: m² ke cm² hati-hati", "iya, 6,25 per m²", "jawaban post lengkap", "susulan: 125 × 1.600 cm² = 20 m² cek"],
 "telat dari arsip. keramik 40 cm. tuntas", ("20 × 6,25 = 125 keping", "20*625", "12500"))

t(1075, "1075 = 5² × 43. Faktorisasi: 1075 ÷ 5 = 215, ÷ 5 lagi = 43 (prima). Temen berhenti di 215. Susulan: 1075 habis dibagi 25 — ekor 75 ya? (75 = 3 × 25). Cek dong",
 ["5² × 43 pas", "215 belum selesai", "43 prima pas", "ekor 75 pas", "PR gue: 25 × 43 = 1075 cek", "iya pas", "jawaban post semua kuku", "catet: pecah sampai prima", "iya, b24 juga", "jawaban post lengkap", "susulan: 1075 = 1075/25 = 43"],
 "telat dari arsip. faktorisasi 1075. tuntas", ("1075 = 25 × 43", "25*43", "1075"))

assert len(T) == 25, len(T)
build2(T, 1051, "threads-43.ts", 43, 39, 551, 39,
       "Topik: separuh 118, kerja bersama 4-12, KPK 6-9, T15, Fibonacci 55, 6×19, biner 110, heksa 1F, digital root, mod 7 hari ke-100, pembulatan 999, estimasi 398+402, kompensasi 398×3, deret 1..20, siklus 3^n, salip 90-70, tangki 2-4, resep ganda, F→C 68, baca buku, puzzle 60%, kursi 15×20, poin 2 per 10rb, keramik 40 cm, faktorisasi 1075.")
print("threads-43 ok")
