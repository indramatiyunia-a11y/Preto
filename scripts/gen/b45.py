# threads-45.ts — BATCH 41 (id 1101-1125, authorId 601-625)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1101, "½ × 126 = 63. Genap rapi, hasil 63 = 7 × 9. Temen jawab 62 — 62 × 2 = 124, kurang 2. Susulan: ½ × 134? 67 ya? Cek dong",
 ["63 pas", "62 × 2 = 124 kurang", "susulan 67 pas", "PR gue: 63 = 7 × 9", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 67 prima"],
 "telat dari arsip. separuh 126. tuntas", ("126/2 = 63", "126/2", "63"))

t(1102, "Kerja bersama: A 2 jam, B 6 jam → 1/2 + 1/6 = 2/3 per jam → 1,5 jam. Penyebut 6: 3/6 + 1/6. Susulan: A 3, B 6? 2 jam ya? (1/3 + 1/6 = 1/2). Cek dong",
 ["2/3 per jam pas", "1,5 jam pas", "3/6 + 1/6 pas", "susulan 2 jam pas", "PR gue: 1,5 jam = 1j30m", "iya, konversi", "jawaban post semua kuku", "catet: jumlah laju", "iya, b41 juga", "jawaban post lengkap", "susulan: 2/3 → bagi 3/2"],
 "telat dari arsip. kerja bersama 2-6. tuntas", ("1/2 + 1/6 = 2/3 → 1,5 jam", "3+1", "4"))

t(1103, "KPK 10 dan 15 = 30. Kelipatan 10: 10, 20, 30. Kelipatan 15: 15, 30. Temen jawab 150 — 30 lebih kecil dan sah. Susulan: dua servis tiap 10 dan 15 hari → bareng tiap 30 hari ya? Cek dong",
 ["30 pas", "150 kelebihan", "servis 30 hari pas", "PR gue: KPK 10 dan 6? 30 juga", "iya pas", "susulan: 10 = 2 × 5, 15 = 3 × 5", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK kelipatan pertama", "iya, definisi", "jawaban post lengkap", "susulan: 30 = 10 × 3 = 15 × 2"],
 "telat dari arsip. KPK 10-15. tuntas", ("KPK 10, 15 = 30", "10*3", "30"))

t(1104, "T25 = 325. Tangga segitiga 25 tingkat: 25 × 26/2. Temen heran T25 juga 25² + 100? eh cukup rumusnya. Susulan: T26? 351 ya? (325 + 26). Cek dong",
 ["325 pas", "25 × 13 pas", "susulan 351 pas", "PR gue: 325 + 26 naik tingkat", "iya pas", "susulan: 325 = 5² × 13", "iya pas", "jawaban post semua kuku", "catet: n(n+1)/2", "iya, rumus", "jawaban post lengkap", "susulan: T25 deket 324 = 18²"],
 "telat dari arsip. T25 = 325. tuntas", ("T25 = 25 × 26/2 = 325", "25*26/2", "325"))

t(1105, "Fibonacci: ..., 89, 144 — 89 + 55 = 144. Dan 144 = 12²! Fibonacci kena kuadrat. Temen baru sadar. Susulan: setelah 144? 233 ya? (144 + 89). Cek dong",
 ["144 pas", "12² juga pas", "233 pas", "PR gue: 89 + 55 cek", "iya pas", "susulan: 144 = 1 gros", "iya, b24 juga", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, aturan", "jawaban post lengkap", "susulan: Fibonacci × kuadrat jarang"],
 "telat dari arsip. Fibonacci 144. tuntas", ("89 + 55 = 144", "89+55", "144"))

t(1106, "8 × 14 = 112. Seratus dua belas. Temen tulis 102 — salah 10. Cek: 8 × 14 = 8 × 10 + 8 × 4 = 112. Susulan: 14 × 9? 126 ya? Cek dong",
 ["112 pas", "102 salah 10", "126 pas", "PR gue: 80 + 32 rapi", "iya pas", "susulan: 112 = 16 × 7 juga", "iya pas", "jawaban post semua kuku", "catet: pecah 10 + 4", "iya, standar", "jawaban post lengkap", "susulan: 112 = 2⁴ × 7"],
 "telat dari arsip. 8 × 14. tuntas", ("8 × 14 = 112", "8*14", "112"))

t(1107, "Biner 10000 = 16. Satu lalu empat nol → posisi 2⁴. Temen tulis sepuluh ribu — itu desimal. Susulan: 100000? 32 ya? (2⁵). Cek dong",
 ["2⁴ pas", "16 pas", "susulan 32 pas", "PR gue: nol banyak = pangkat", "iya, hitung nol", "jawaban post semua kuku", "catet: biner posisi pangkat 2", "iya, b41 juga", "jawaban post lengkap", "susulan: 16 = 2⁴ dua wajah"],
 "telat dari arsip. biner 10000. tuntas", ("2⁴ = 16", "16*1", "16"))

t(1108, "Heks 40 = 64. 4 × 16 — dan 64 = 2⁶! Heks dan biner ketemu lagi. Temen heran kebetulan: 40 heksa = 4 × 16 memang pangkat 2. Susulan: 80? 128 ya? (8 × 16). Cek dong",
 ["4 × 16 pas", "64 pas", "128 pas", "PR gue: 80 heksa = 2⁷", "iya, pola", "jawaban post semua kuku", "catet: digit × 16", "iya, b44 juga", "jawaban post lengkap", "susulan: 64 = 8² = 2⁶ juga"],
 "telat dari arsip. heksa 40. tuntas", ("4 × 16 = 64", "4*16", "64"))

t(1109, "2025 mod 9: 2+0+2+5 = 9 → habis dibagi 9! Tahun 2025 kelipatan 9. Temen cek: 2025 ÷ 9 = 225 pas. Susulan: 2026? 10 → 1 ya? Cek dong",
 ["9 pas", "habis 9 pas", "225 pas", "susulan 1 pas", "PR gue: 225 = 15² juga", "iya, lucu", "jawaban post semua kuku", "catet: digit sum = mod 9", "iya, sifat 9", "jawaban post lengkap", "susulan: 2025 tahun lalu, 225² = 50625"],
 "telat dari arsip. 2025 mod 9. tuntas", ("2+0+2+5 = 9 → habis 9", "2+0+2+5", "9"))

t(1110, "366 mod 7 = 2. Tahun kabisat 366 hari — sisa 2 hari geser. 364 = 52 × 7, sisa 2. Temen nanya tahun biasa: 365 mod 7 = 1. Susulan: hari ke-366 kalau 1 Januari Senin? geser 2 → Rabu ya? Cek dong",
 ["364 pas", "sisa 2 pas", "tahun biasa sisa 1 pas", "susulan Rabu pas", "PR gue: 52 × 7 = 364", "iya pas", "jawaban post semua kuku", "catet: kabisat geser lebih 1", "iya, b24 juga", "jawaban post lengkap", "susulan: 366 = 2 × 3 × 61"],
 "telat dari arsip. 366 mod 7. tuntas", ("366 − 364 = 2", "366-364", "2"))

t(1111, "Pembulatan 7.500 ke ribuan = 8.000 — pas di tengah, aturan umum naik. Temen nanya kenapa bukan 7.000: kesepakatan setengah naik. Susulan: 8.500? 9.000 ya? sama aturan. Cek dong",
 ["tengah pas", "8.000 pas", "aturan naik pas", "susulan 9.000 pas", "PR gue: sebut aturannya dulu", "iya, penting", "jawaban post semua kuku", "catet: 500 = setengah ribuan", "iya, b43 juga", "jawaban post lengkap", "susulan: konsisten satu aturan"],
 "telat dari arsip. pembulatan 7.500. tuntas", ("7.500 → 8.000", "8000-7500", "500"))

t(1112, "Estimasi 59 + 61 ≈ 120 via 60 + 60. Persis 120! Saling kompensasi (−1 dan +1). Susulan: 58 + 63 ≈ 120 ya? persis 121, selisih 1. Cek dong",
 ["60 + 60 pas", "120 persis pas", "susulan 121 pas", "PR gue: estimasi bukan janji tepat", "iya, wajar", "jawaban post semua kuku", "catet: bulatkan ke puluhan", "iya, cepat", "jawaban post lengkap", "susulan: kompensasi bikin mepet"],
 "telat dari arsip. estimasi 59+61. tuntas", ("59 + 61 = 120", "59+61", "120"))

t(1113, "197 × 6 = 1.182. Kompensasi: 200 × 6 = 1.200, kurang 3 × 6 = 18 → 1.182. Temen tulis 1.192 — selisihnya 18. Susulan: 195 × 6? 1.170 ya? (1.200 − 30). Cek dong",
 ["1.200 − 18 pas", "1.182 pas", "susulan 1.170 pas", "PR gue: 3 × 6 = 18", "iya, hati-hati", "jawaban post semua kuku", "catet: selisih × faktor lain", "iya, b40 juga", "jawaban post lengkap", "susulan: 1.182 habis dibagi 3"],
 "telat dari arsip. kompensasi 197×6. tuntas", ("1.200 − 18 = 1.182", "1200-18", "1182"))

t(1114, "1+2+...+28 = 406. Pasangan 14: (1+28) sampai (14+15), masing 29 × 14 = 406. Temen nanya rumus: 28 × 29/2. Susulan: 1..29? 435 ya? (406 + 29). Cek dong",
 ["14 pasang pas", "406 pas", "susulan 435 pas", "PR gue: 29 × 14 cek", "iya pas", "susulan: T28 = 406", "iya, sama", "jawaban post semua kuku", "catet: berpasangan dua ujung", "iya, b37 juga", "jawaban post lengkap", "susulan: 406 habis dibagi 7"],
 "telat dari arsip. deret 1..28. tuntas", ("29 × 14 = 406", "29*14", "406"))

t(1115, "Digit terakhir 4^n berulang: 4, 6, 4, 6 — siklus 2! 4^3 = 64 → akhir 4 (posisi ganjil). Temen nanya 4^8? akhir 6 (genap). Susulan: 4^100? 6 ya? genap. Cek dong",
 ["siklus 4-6 pas", "64 akhir 4 pas", "4^8 akhir 6 pas", "susulan 6 pas", "PR gue: 4^n = 2^(2n), pangkat genap 2", "iya, nyambung", "jawaban post semua kuku", "catet: siklus terpendek", "iya, cuma dua", "jawaban post lengkap", "susulan: 64 = 2⁶ juga"],
 "telat dari arsip. siklus 4^n. tuntas", ("4^3 = 64", "64*1", "64"))

t(1116, "Lembur 1,5 × tarif (kesepakatan kantor): 20rb per jam × 4 jam lembur × 1,5 = 120rb. Temen lupa faktor 1,5. Susulan: 2 jam lembur? 60rb ya? Cek dong",
 ["1,5 × pas", "120rb pas", "susulan 60rb pas", "PR gue: 20 × 1,5 = 30rb per jam", "iya, per jam lembur", "jawaban post semua kuku", "catet: tarif × faktor × jam", "iya, tiga faktor", "jawaban post lengkap", "susulan: aturan kantor jelas dulu"],
 "telat dari arsip. lembur 1,5. tuntas", ("20rb × 4 × 1,5 = 120rb", "20*4*1.5", "120"))

t(1117, "Komisi 8% dari penjualan 1.250rb = 100rb. 1.250 × 8/100. Temen jawab 10rb — kurang satu nol, itu 1%? eh 1% = 12,5rb. 8% = 100rb pas. Susulan: 5%? 62,5rb ya? Cek dong",
 ["100rb pas", "12,5rb itu 1% pas", "susulan 62,5rb pas", "PR gue: 1.250 × 8 = 10.000, /100", "iya, dua langkah", "jawaban post semua kuku", "catet: kali persen bagi 100", "iya, standar", "jawaban post lengkap", "susulan: 10.000/100 = 100rb"],
 "telat dari arsip. komisi 8%. tuntas", ("1.250.000 × 8/100 = 100.000", "1250000/100*8", "100000"))

t(1118, "Budget 50/30/20 dari gaji 3jt: kebutuhan 1,5jt, keinginan 900rb, tabungan 600rb. Temen tukar posisi — urutannya 50-30-20. Susulan: gaji 4jt? 2jt / 1,2jt / 800rb ya? Cek dong",
 ["1,5jt pas", "900rb pas", "600rb pas", "susulan 800rb pas", "PR gue: 4jt × 20% = 800rb", "iya pas", "jawaban post semua kuku", "catet: tiga potongan", "iya, tiga langkah", "jawaban post lengkap", "susulan: jumlah kembali 100%"],
 "telat dari arsip. aturan 50-30-20. tuntas", ("3jt × 20% = 600rb", "3000000*20/100", "600000"))

t(1119, "Dana darurat: biaya 2jt per bulan × 6 bulan = 12jt target. Temen nanya 3 bulan? 6jt. Susulan: biaya naik 2,5jt? target 15jt ya? Cek dong",
 ["12jt pas", "6jt pas", "susulan 15jt pas", "PR gue: bulan × biaya", "iya, dua faktor", "jawaban post semua kuku", "catet: dana darurat 3-6 bulan umum", "iya, patokan umum", "jawaban post lengkap", "susulan: 12jt = 6 × 2jt"],
 "telat dari arsip. dana darurat. tuntas", ("2jt × 6 = 12jt", "2000000*6", "12000000"))

t(1120, "Kurs 15.500 per dolar. 100 dolar = 1.550.000. Temen kali 100 × 15.000 — kursnya 15.500. Susulan: 10 dolar? 155rb ya? Cek dong",
 ["1.550.000 pas", "15.500 kurs pas", "susulan 155rb pas", "PR gue: 200 dolar? 3,1jt", "iya pas", "jawaban post semua kuku", "catet: dolar × kurs", "iya, dua faktor", "jawaban post lengkap", "susulan: kurs berubah, cek harian"],
 "telat dari arsip. kurs 100 dolar. tuntas", ("100 × 15.500 = 1.550.000", "100*15500", "1550000"))

t(1121, "Beras grosir 5 kg × 12rb = 60rb vs ecer 14rb × 5 = 70rb → hemat 10rb. Temen beli ecer tiap minggu — kumpul sekali lebih murah. Susulan: 3 kg? grosir gak tersedia, 42rb ya? Cek dong",
 ["60rb pas", "70rb pas", "hemat 10rb pas", "susulan 42rb pas", "PR gue: per kg grosir 12rb", "iya, banding satuan", "jawaban post semua kuku", "catet: total vs total", "iya, b26 juga", "jawaban post lengkap", "susulan: hemat 10rb per 5 kg"],
 "telat dari arsip. beras grosir. tuntas", ("70rb − 60rb = 10rb", "70000-60000", "10000"))

t(1122, "Masak nasi 1:1,5 — 2 cup beras → 3 cup air. Temen kali 2 × 1,5 langsung. Susulan: 4 cup beras? 6 cup air ya? Cek dong",
 ["3 cup pas", "rasio 1:1,5 pas", "susulan 6 cup pas", "PR gue: 1,5 × 2 = 3", "iya pas", "jawaban post semua kuku", "catet: beras × 1,5", "iya, rasio", "jawaban post lengkap", "susulan: 6 cup = 1,5 L an"],
 "telat dari arsip. nasi 1:1,5. tuntas", ("2 × 1,5 = 3 cup", "2*1.5", "3"))

t(1123, "Mesin cuci 5 kg, cucian 17 kg → 4 putaran. 17/5 = 3,4 → 4 (bulat ke atas). Temen jawab 3 — 15 kg masuk, 2 kg nyangkut. Susulan: 20 kg? 4 tepat ya? Cek dong",
 ["3,4 → 4 pas", "3 putaran kurang", "susulan 4 tepat pas", "PR gue: 20/5 = 4 pas", "iya pas", "jawaban post semua kuku", "catet: bulat ke atas kapasitas", "iya, b37 juga", "jawaban post lengkap", "susulan: 4 × 5 = 20 muat"],
 "telat dari arsip. cuci 17 kg. tuntas", ("17/5 = 3,4 → 4 putaran", "4*5", "20"))

t(1124, "Lift turun lantai 12 ke 5: perjalanan 7 lantai (12 − 5). Bukan 12. Temen nanya naik 5 → 12: sama 7, bolak-balik. Susulan: 12 → 1? 11 lantai ya? Cek dong",
 ["7 lantai pas", "12 − 5 pas", "susulan 11 lantai pas", "PR gue: selisih, bukan tujuan", "iya, b37 juga", "jawaban post semua kuku", "catet: turun juga selisih", "iya, simetris", "jawaban post lengkap", "susulan: 12 − 1 = 11"],
 "telat dari arsip. lift turun. tuntas", ("12 − 5 = 7 lantai", "12-5", "7"))

t(1125, "Jumlah ganjil sampai 21: 1+3+...+21 = 121 = 11². Sebelas bilangan ganjil → kuadrat 11. Temen cek pasangan: (1+21) × ... 22 × 5,5? eh 11 pasang tak rata — cukup rumus n². Susulan: sampai 23? 144 ya? = 12² dan Fibonacci! Cek dong",
 ["121 pas", "11² pas", "susulan 144 pas", "PR gue: 11 ganjil → 11²", "iya, b41 juga", "jawaban post semua kuku", "catet: n ganjil pertama = n²", "iya, teorema", "jawaban post lengkap", "susulan: 144 muncul lagi!"],
 "telat dari arsip. ganjil 11². tuntas", ("11² = 121", "11*11", "121"))

assert len(T) == 25, len(T)
build2(T, 1101, "threads-45.ts", 45, 41, 601, 41,
       "Topik: separuh 126, kerja bersama 2-6, KPK 10-15, T25, Fibonacci 144, 8×14, biner 10000, heksa 40, 2025 mod 9, 366 mod 7, pembulatan 7.500, estimasi 59+61, kompensasi 197×6, deret 1..28, siklus 4^n, lembur 1,5, komisi 8%, 50-30-20, dana darurat, kurs 100 dolar, beras grosir, nasi 1:1,5, cuci 17 kg, lift turun, ganjil 11².")
print("threads-45 ok")
