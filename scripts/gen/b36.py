# threads-36.ts — BATCH 32 (id 876-900, authorId 726-750)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(876, "½ × 74 = 37. Genap rapi, hasil prima 37. Temen jawab 36 — 36 × 2 = 72, kurang 2. Susulan: ½ × 82? 41 ya? Cek dong",
 ["37 pas", "36 × 2 = 72 kurang", "susulan 41 pas", "PR gue: 37 prima pas", "iya pas", "susulan: 74 = 2 × 37", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 37 dua digit prima"],
 "telat dari arsip. separuh 74. tuntas", ("74/2 = 37", "74/2", "37"))

t(877, "Persen hari: 9 jam dari 24 jam = 37,5%. Sembilan per dua puluh empat, sederhana 3/8. Temen heran desimal — 9/24 gak rapi, tapi 3/8 = 0,375 pas. Susulan: 12 jam? 50% ya? Cek dong",
 ["37,5% pas", "3/8 pas", "susulan 50% pas", "PR gue: 24 enak dibagi 8", "iya pas", "susulan: 6 jam = 25%, 9 = 37,5%", "iya, tangga 1/8", "jawaban post semua kuku", "catet: sederhanakan dulu", "iya, mantra", "jawaban post lengkap", "susulan: 18 jam = 75%"],
 "telat dari arsip. persen hari. tuntas", ("9/24 = 3/8 = 37,5%", "9/24", "0.375"))

t(878, "7 × 16 = 112. Seratus dua belas. Temen tulis 102 — salah 10. Cek: 7 × 16 = 7 × 10 + 7 × 6 = 70 + 42. Susulan: 16 × 8? 128 ya? Cek dong",
 ["112 pas", "102 salah 10", "128 pas", "PR gue: 70 + 42 rapi", "iya pas", "susulan: 112 = 16 × 7", "iya pas", "jawaban post semua kuku", "catet: pecah 10 + 6", "iya, standar", "jawaban post lengkap", "susulan: 112 = 2⁴ × 7"],
 "telat dari arsip. 7 × 16. tuntas", ("7 × 16 = 112", "7*16", "112"))

t(879, "Dua lingkaran r 5 dalam persegi panjang 20×10 segaris: luas 2 × 3,14 × 25 = 157; sisa 200 − 157 = 43. Temen pakai r 10 — itu satu lingkaran besar. Susulan: tiga lingkaran r 5? 235,5 luas, sisa 164,5 an ya? (300 − 235,5). Cek dong",
 ["157 pas", "sisa 43 pas", "r 10 itu satu besar", "susulan 235,5 pas", "PR gue: 3,14 × 25 = 78,5 satu", "iya dasar", "jawaban post semua kuku", "catet: hitung satu, kali banyak", "iya, b26 juga", "jawaban post lengkap", "susulan: menyinggung sisi & sesama"],
 "telat dari arsip. dua lingkaran 20×10. tuntas", ("2 × 78,5 = 157", "2*78.5", "157"))

t(880, "15 × 5 = 75. Tujuh puluh lima. Temen tulis 65 — salah 10. Cek: 15 × 5 = 75 (15 × 5 = 10×5 + 5×5). Susulan: 15 × 7? 105 ya? Cek dong",
 ["75 pas", "65 salah 10", "105 pas", "PR gue: 50 + 25 rapi", "iya pas", "susulan: 75 = ¾ × 100", "iya, b30 juga", "jawaban post semua kuku", "catet: pecah 10 + 5", "iya, standar", "jawaban post lengkap", "susulan: 75 mnt = 1j15m"],
 "telat dari arsip. 15 × 5. tuntas", ("15 × 5 = 75", "15*5", "75"))

t(881, "Tebak 4 pilihan: benar satu soal = ¼. Dua soal dua-duanya benar (tebak) = ¼ × ¼ = 1/16. Temen kira ½ — kali, bukan jumlah. Susulan: tiga soal semua benar? 1/64 ya? Cek dong",
 ["¼ pas", "1/16 pas", "kali bukan jumlah", "susulan 1/64 pas", "PR gue: independent events dikali", "iya, itu prinsipnya", "susulan: makin banyak soal makin kecil", "iya, logis", "jawaban post semua kuku", "catet: tebak = peluang per soal", "iya, dasar", "jawaban post lengkap", "susulan: minimal satu benar? lain soal"],
 "telat dari arsip. tebak pilihan. tuntas", ("¼ × ¼ = 1/16", "1/4*1/4", "0.0625"))

t(882, "6 × 21 = 126. Seratus dua puluh enam. Temen tulis 116 — salah 10. Cek: 6 × 21 = 6 × 20 + 6 = 126. Susulan: 21 × 7? 147 ya? Cek dong",
 ["126 pas", "116 salah 10", "147 pas", "PR gue: 120 + 6 rapi", "iya pas", "susulan: deket 20 ditambah", "iya, trik", "jawaban post semua kuku", "catet: pecah 20 + 1", "iya, standar", "jawaban post lengkap", "susulan: 126 = 2 × 3² × 7"],
 "telat dari arsip. 6 × 21. tuntas", ("6 × 21 = 126", "6*21", "126"))

t(883, "31² = 961. Sembilan ratus enam puluh satu — kuadrat 31, di atas 30² = 900. Temen tulis 916 — kebalik. Cek: 31² = 900 + 60 + 1. Susulan: 32²? 1.024 ya? (= 2¹⁰ juga!). Cek dong",
 ["961 pas", "916 kebalik", "1.024 pas", "PR gue: 900 + 60 + 1 rapi", "iya pas", "susulan: 32² = 2¹⁰ dua wajah", "iya, b25 juga", "jawaban post semua kuku", "catet: (a+1)² = a² + 2a + 1", "iya, rumus", "jawaban post lengkap", "susulan: 31 prima juga"],
 "telat dari arsip. 31² = 961. tuntas", ("31² = 961", "31*31", "961"))

t(884, "3 × 47 = 141. Seratus empat puluh satu. Temen tulis 131 — salah 10. Cek: 3 × 47 = 3 × 40 + 3 × 7 = 120 + 21. Susulan: 47 × 4? 188 ya? Cek dong",
 ["141 pas", "131 salah 10", "188 pas", "PR gue: 120 + 21 rapi", "iya pas", "susulan: pecah 40 + 7", "iya, standar", "jawaban post semua kuku", "catet: cek dua kali", "iya, disiplin", "jawaban post lengkap", "susulan: 141 habis dibagi 3"],
 "telat dari arsip. 3 × 47. tuntas", ("3 × 47 = 141", "3*47", "141"))

t(885, "0,75 hari = 18 jam (0,75 × 24). Tiga perempat hari. Temen tulis 75 jam — koma hilang. Susulan: 0,9 hari? 21,6 jam ya? Cek dong",
 ["18 jam pas", "75 jam koma hilang", "21,6 jam pas", "PR gue: hari × 24", "iya, rumus", "susulan: 0,75 = ¾", "iya, pecahan", "jawaban post semua kuku", "catet: pecahan hari × 24", "iya, b34 juga", "jawaban post lengkap", "susulan: 18 jam = 3/4 hari"],
 "telat dari arsip. 0,75 hari. tuntas", ("0,75 × 24 = 18 jam", "0.75*24", "18"))

t(886, "9 × 18 = 162. Seratus enam puluh dua. Temen tulis 152 — salah 10. Cek: 9 × 18 = 9 × 20 − 9 × 2 = 180 − 18. Susulan: 18 × 10? 180 ya? Cek dong",
 ["162 pas", "152 salah 10", "180 pas", "PR gue: 180 − 18 rapi", "iya pas", "susulan: × 9 = − n dari × 10", "iya, trik 9", "jawaban post semua kuku", "catet: deket 20 dikurangi", "iya, dua trik", "jawaban post lengkap", "susulan: 162 = 2 × 81 = 2 × 3⁴"],
 "telat dari arsip. 9 × 18. tuntas", ("9 × 18 = 162", "9*18", "162"))

t(887, "Prima ke-20 = 71; prima ke-25 = 97. Daftar: ...47, 53, 59, 61, 67, 71 (ke-20). Temen salah hitung — daftar pelan-pelan. Susulan: prima ke-10? 29 ya? (b25 daftar). Cek dong",
 ["71 ke-20 pas", "97 ke-25 pas", "29 ke-10 pas", "PR gue: daftar sistematis", "iya, jangan melompat", "susulan: hitung sambil coret", "iya, aman", "jawaban post semua kuku", "catet: urutan prima penting", "iya, daftar", "jawaban post lengkap", "susulan: prima ke-30 = 113"],
 "telat dari arsip. prima ke-20. tuntas", ("prima ke-10 = 29; ke-20 = 71", "10*2", "20"))

t(888, "12 × 14 = 168. Seratus enam puluh delapan. Temen tulis 158 — salah 10. Cek: 12 × 14 = 12 × 10 + 12 × 4 = 168. Susulan: 14 × 12 sama 168 ya? komutatif. Cek dong",
 ["168 pas", "158 salah 10", "komutatif pas", "PR gue: 120 + 48 rapi", "iya pas", "susulan: 168 = 8 × 21 juga", "iya pas", "jawaban post semua kuku", "catet: pecah 10 + 4", "iya, standar", "jawaban post lengkap", "susulan: 168 jam = 1 pekan"],
 "telat dari arsip. 12 × 14. tuntas", ("12 × 14 = 168", "12*14", "168"))

t(889, "Pecah 500rb: 5 × 100rb, 10 × 50rb, 25 × 20rb — tiga cara rapi. Temen tanya 50 × 10rb? juga sah, 500rb pas. Susulan: 250rb? 5 × 50rb atau 2 × 100 + 1 × 50 ya? Cek dong",
 ["5 × 100rb pas", "10 × 50rb pas", "25 × 20rb pas", "50 × 10rb pas", "PR gue: banyak cara pecah", "iya, kombinasi uang", "jawaban post semua kuku", "catet: nilai × banyak cek", "iya, b26 juga", "jawaban post lengkap", "susulan: 25 × 20rb = 500rb cek"],
 "telat dari arsip. pecah 500rb. tuntas", ("25 × 20rb = 500rb", "25*20000", "500000"))

t(890, "8 × 16 = 128. Seratus dua puluh delapan. Temen tulis 118 — salah 10. Cek: 8 × 16 = 8 × 16 = 64 × 2 = 128 (dua jalur). Susulan: 16 × 9? 144 ya? Cek dong",
 ["128 pas", "118 salah 10", "144 pas", "PR gue: 64 × 2 dua jalur", "iya pas", "susulan: 128 = 2⁷", "iya, pangkat 2", "jawaban post semua kuku", "catet: lipat ganda jalur", "iya, menarik", "jawaban post lengkap", "susulan: 128 GB kapasitas umum"],
 "telat dari arsip. 8 × 16. tuntas", ("8 × 16 = 128", "8*16", "128"))

t(891, "32² = 1.024 = 2¹⁰ — kuadrat 32 SEKALIGUS pangkat sepuluh dua. Dua wajah bilangan. Temen baru sadar 1.024 kuadrat — ya, akar 1.024 = 32. Susulan: 64² = 4.096 = 2¹² ya? dua wajah lagi. Cek dong",
 ["1.024 pas", "32² pas", "2¹⁰ pas", "4.096 = 64² = 2¹² pas", "PR gue: pangkat genap = kuadrat", "iya, itu alasannya", "jawaban post semua kuku", "catet: 2^(2k) = (2^k)²", "iya, sifat pangkat", "jawaban post lengkap", "susulan: 16² = 256 = 2⁸ juga"],
 "telat dari arsip. 32² dua wajah. tuntas", ("32² = 1.024 = 2¹⁰", "32*32", "1024"))

t(892, "5 × 28 = 140. Seratus empat puluh. Temen tulis 130 — salah 10. Cek: 5 × 28 = 5 × 30 − 5 × 2 = 150 − 10. Susulan: 28 × 6? 168 ya? Cek dong",
 ["140 pas", "130 salah 10", "168 pas", "PR gue: 150 − 10 rapi", "iya pas", "susulan: deket 30", "iya, trik", "jawaban post semua kuku", "catet: 140 = 14 × 10 juga", "iya pas", "jawaban post lengkap", "susulan: 28 = 4 × 7"],
 "telat dari arsip. 5 × 28. tuntas", ("5 × 28 = 140", "5*28", "140"))

t(893, "3(x − 2) = 2(x + 1) → 3x − 6 = 2x + 2 → x = 8. Distribusi dua sisi lalu kumpulkan. Temen gak distribusi — mentah susah. Susulan: cek balik: 3(6) = 18; 2(9) = 18 pas! Cek dong",
 ["3x − 6 pas", "2x + 2 pas", "x = 8 pas", "cek 18 = 18 pas", "PR gue: distribusi dulu", "iya, langkah awal", "susulan: kumpulkan x di satu sisi", "iya, standar", "jawaban post semua kuku", "catet: dua sisi × distribusi", "iya, level naik", "jawaban post lengkap", "susulan: cek balik wajib"],
 "telat dari arsip. 3(x−2) = 2(x+1). tuntas", ("3(8−2) = 18 = 2(8+1)", "3*6", "18"))

t(894, "7 × 23 = 161. Seratus enam puluh satu. Temen tulis 151 — salah 10. Cek: 7 × 23 = 7 × 20 + 7 × 3 = 140 + 21. Susulan: 23 × 8? 184 ya? Cek dong",
 ["161 pas", "151 salah 10", "184 pas", "PR gue: 140 + 21 rapi", "iya pas", "susulan: deket 20 ditambah", "iya, trik", "jawaban post semua kuku", "catet: 161 = 7 × 23", "iya pas", "jawaban post lengkap", "susulan: 161 bukan prima"],
 "telat dari arsip. 7 × 23. tuntas", ("7 × 23 = 161", "7*23", "161"))

t(895, "Rentang nol: semua data sama (7, 7, 7) → rentang 0, rata = median = modus = 7. Temen tanya rentang 0 sah? sah, datanya homogen. Susulan: tambah satu 9? rentang 2, rata 7,5 ya? (22/3). Cek dong",
 ["rentang 0 pas", "rata = median = modus pas", "susulan rentang 2 pas", "rata 7,33 an pas", "PR gue: homogen = satu nilai", "iya, definisi", "jawaban post semua kuku", "catet: rentang = max − min", "iya, rumus", "jawaban post lengkap", "susulan: data variatif rentang gede"],
 "telat dari arsip. rentang nol. tuntas", ("(7+7+7)/3 = 7", "21/3", "7"))

t(896, "6 × 24 = 144. Seratus empat puluh empat — 12² juga! Temen baru sadar 144 dua wajah. Susulan: 24 × 6 sama 144 ya? komutatif. Cek dong",
 ["144 pas", "12² juga pas", "komutatif pas", "PR gue: 144 = 1 gros", "iya, b24 juga", "susulan: 24 = 2 lusin", "iya pas", "jawaban post semua kuku", "catet: 144 = 6 × 24", "iya pas", "jawaban post lengkap", "susulan: 144 jam = 6 hari"],
 "telat dari arsip. 6 × 24. tuntas", ("6 × 24 = 144", "6*24", "144"))

t(897, "Jam kerja 4 hari × 7,5 jam = 30 jam. Desimal × bulat. Temen tulis 300 — koma hilang. Cek: 7,5 × 4 = 30. Susulan: 5 hari? 37,5 jam ya? Cek dong",
 ["30 jam pas", "300 koma hilang", "37,5 jam pas", "PR gue: 7,5 = 7j30m", "iya, konversi", "susulan: 30 jam kerja standar sebagian tempat", "iya, wajar", "jawaban post semua kuku", "catet: desimal × bulat", "iya, hati-hati koma", "jawaban post lengkap", "susulan: 37,5 jam = 37j30m"],
 "telat dari arsip. 7,5 × 4. tuntas", ("7,5 × 4 = 30 jam", "7.5*4", "30"))

t(898, "11 × 14 = 154. Seratus lima puluh empat. Temen tulis 144 — salah 10. Cek: 11 × 14 = 10 × 14 + 14 = 154. Susulan: 14 × 12? 168 ya? Cek dong",
 ["154 pas", "144 salah 10", "168 pas", "PR gue: 140 + 14 rapi", "iya pas", "susulan: × 11 = + n dari × 10", "iya, trik 11", "jawaban post semua kuku", "catet: 154 = 2 × 7 × 11", "iya pas", "jawaban post lengkap", "susulan: 154 deket 150"],
 "telat dari arsip. 11 × 14. tuntas", ("11 × 14 = 154", "11*14", "154"))

t(899, "1,1 pekan = 7,7 hari (1,1 × 7). Temen tulis 11 hari — koma hilang. Cek: 1,1 × 7 = 7,7. Susulan: 1,5 pekan? 10,5 hari ya? Cek dong",
 ["7,7 hari pas", "11 hari koma hilang", "10,5 hari pas", "PR gue: pekan × 7", "iya, rumus", "susulan: 7,7 hari = 7 hari 16,8 jam an", "iya, rinci lagi", "jawaban post semua kuku", "catet: desimal × 7", "iya, hati-hati koma", "jawaban post lengkap", "susulan: 0,1 pekan = 0,7 hari"],
 "telat dari arsip. 1,1 pekan. tuntas", ("1,1 × 7 = 7,7 hari", "1.1*7", "7.7"))

t(900, "900 = 30² — kuadrat bulat 30! Temen baru sadar 900 kuadrat sempurna. Susulan: 901? bukan, 901 = 17 × 53. Cek dong",
 ["900 = 30² pas", "901 bukan kuadrat pas", "901 = 17 × 53 pas", "PR gue: 900 = 9 × 100", "iya pas", "susulan: kuadrat puluhan selesai di 900", "iya, b26 juga", "jawaban post semua kuku", "catet: 30² = 900 hafalan", "iya, penting", "jawaban post lengkap", "susulan: akar 900 = 30"],
 "telat dari arsip. 900 = 30². tuntas", ("30² = 900", "30*30", "900"))

assert len(T) == 25, len(T)
build2(T, 876, "threads-36.ts", 36, 32, 726, 36,
       "Topik: separuh 74, persen hari, 7×16, dua lingkaran 20×10, 15×5, tebak pilihan, 6×21, 31², 3×47, 0,75 hari, 9×18, prima ke-20, 12×14, pecah 500rb, 8×16, 32² dua wajah, 5×28, 3(x−2)=2(x+1), 7×23, rentang nol, 6×24, 7,5 × 4, 11×14, 1,1 pekan, 900 = 30².")
print("threads-36 ok")
