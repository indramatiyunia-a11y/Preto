# threads-40.ts — BATCH 36 (id 976-1000, authorId 826-850) — BATCH TERAKHIR
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(976, "½ × 98 = 49. Genap rapi, hasil 49 = 7²! Temen jawab 48 — 48 × 2 = 96, kurang 2. Susulan: ½ × 102? 51 ya? Cek dong",
 ["49 pas", "48 × 2 = 96 kurang", "49 = 7² pas", "susulan 51 pas", "PR gue: 51 = 3 × 17, bukan prima", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 98 = 2 × 7²"],
 "telat dari arsip. separuh 98. tuntas", ("98/2 = 49 = 7²", "98/2", "49"))

t(977, "30 dari 40 = 75%. Sederhanakan 30/40 = ¾ (bagi 10). Temen langsung bagi panjang — perempatan lebih cepet. Susulan: 10 dari 40? 25% ya? Cek dong",
 ["¾ dulu pas", "75% pas", "susulan 25% pas", "PR gue: 40 = 4 × 10", "iya pas", "susulan: 40 enak dibagi", "iya, banyak pembagi", "jawaban post semua kuku", "catet: sederhanakan dulu", "iya, mantra", "jawaban post lengkap", "susulan: 10 dari 40 = 25%"],
 "telat dari arsip. 30 dari 40. tuntas", ("30/40 = 3/4 = 75%", "30/40", "0.75"))

t(978, "6 × 33 = 198. Seratus sembilan puluh delapan — deket 200, kurang 2. Temen tulis 188 — salah 10. Cek: 6 × 33 = 6 × 30 + 6 × 3 = 198. Susulan: 33 × 7? 231 ya? Cek dong",
 ["198 pas", "188 salah 10", "231 pas", "PR gue: 180 + 18 rapi", "iya pas", "susulan: 198 = 2 × 9 × 11", "iya pas", "jawaban post semua kuku", "catet: deket 200", "iya, minus 2", "jawaban post lengkap", "susulan: 198 habis dibagi 11"],
 "telat dari arsip. 6 × 33. tuntas", ("6 × 33 = 198", "6*33", "198"))

t(979, "Luas 168 punya tiga pasangan bulat: 24×7, 21×8, 14×12. Tiga bentuk beda, luas sama. Temen baru nemu 14×12. Susulan: 28×6 juga 168 ya? empat pasangan! Cek dong",
 ["168 pas", "tiga pasangan pas", "susulan 28×6 pas juga", "PR gue: faktor 168 banyak", "iya, banyak pasangan", "susulan: 168 = 2³ × 3 × 7", "iya pas", "jawaban post semua kuku", "catet: luas sama bentuk bebas", "iya, b30 juga", "jawaban post lengkap", "susulan: keliling beda tiap bentuk"],
 "telat dari arsip. luas 168. tuntas", ("24 × 7 = 168; 21 × 8 = 168", "24*7", "168"))

t(980, "5 × 41 = 205. Dua ratus lima. Temen tulis 195 — salah 10. Cek: 5 × 41 = 5 × 40 + 5 = 205. Susulan: 41 × 6? 246 ya? Cek dong",
 ["205 pas", "195 salah 10", "246 pas", "PR gue: 200 + 5 rapi", "iya pas", "susulan: 41 prima", "iya pas", "jawaban post semua kuku", "catet: deket 40 ditambah", "iya, trik", "jawaban post lengkap", "susulan: 205 habis dibagi 5"],
 "telat dari arsip. 5 × 41. tuntas", ("5 × 41 = 205", "5*41", "205"))

t(981, "7 hari 2 jam = 170 jam (7 × 24 + 2). Temen kali 7 × 2 — salah operand. Cek: 168 + 2. Susulan: 5 hari 5 jam? 125 ya? Cek dong",
 ["170 jam pas", "7 × 2 salah operand", "125 jam pas", "PR gue: hari × 24 + jam", "iya, rumus", "susulan: 168 jam = 1 pekan", "iya, b33 juga", "jawaban post semua kuku", "catet: campuran hari-jam", "iya, sistematis", "jawaban post lengkap", "susulan: 170 jam ≈ 7,1 hari"],
 "telat dari arsip. 7 hari 2 jam. tuntas", ("7 × 24 + 2 = 170", "7*24+2", "170"))

t(982, "8 × 29 = 232. Dua ratus tiga puluh dua. Temen tulis 222 — salah 10. Cek: 8 × 29 = 8 × 30 − 8 = 232. Susulan: 29 × 9? 261 ya? Cek dong",
 ["232 pas", "222 salah 10", "261 pas", "PR gue: 240 − 8 rapi", "iya pas", "susulan: deket 30 dikurangi", "iya, trik", "jawaban post semua kuku", "catet: 29 prima", "iya pas", "jawaban post lengkap", "susulan: 232 = 8 × 29"],
 "telat dari arsip. 8 × 29. tuntas", ("8 × 29 = 232", "8*29", "232"))

t(983, "Prima 280-320: 281, 283, 293, 307, 311, 313, 317 — tujuh. 287? 7 × 41. 301? 7 × 43. 309? habis 3. Susulan: 311 prima ya? (√311 ≈ 17,6, cek sampai 13 cukup? prima cek sampai akar — 17 juga perlu). Cek dong",
 ["tujuh prima pas", "287 = 7 × 41 pas", "301 = 7 × 43 pas", "311 prima pas", "PR gue: cek prima sampai akar penuh", "iya, wajib", "jawaban post semua kuku", "catet: daftar + coret", "iya, sistematis", "jawaban post lengkap", "susulan: 317 prima juga"],
 "telat dari arsip. prima 280-320. tuntas", ("prima 280-320 ada 7", "1*7", "7"))

t(984, "11 × 19 = 209. Dua ratus sembilan. Temen tulis 199 — salah 10. Cek: 11 × 19 = 10 × 19 + 19 = 209. Susulan: 19 × 12? 228 ya? Cek dong",
 ["209 pas", "199 salah 10", "228 pas", "PR gue: 190 + 19 rapi", "iya pas", "susulan: × 11 = + n dari × 10", "iya, trik 11", "jawaban post semua kuku", "catet: 209 = 11 × 19", "iya pas", "jawaban post lengkap", "susulan: 209 bukan prima"],
 "telat dari arsip. 11 × 19. tuntas", ("11 × 19 = 209", "11*19", "209"))

t(985, "12x − 5 = 7x + 20 → 5x = 25 → x = 5. Kumpulkan x kiri, angka kanan. Temen lupa ubah tanda −5. Susulan: cek balik: 12(5) − 5 = 55; 7(5) + 20 = 55 pas! Cek dong",
 ["5x = 25 pas", "x = 5 pas", "cek 55 = 55 pas", "PR gue: pindah ruas ubah tanda", "iya, aturan", "susulan: langkah berurutan", "iya, sistematis", "jawaban post semua kuku", "catet: dua sisi aljabar", "iya, b34 juga", "jawaban post lengkap", "susulan: cek balik wajib"],
 "telat dari arsip. 12x − 5 = 7x + 20. tuntas", ("12(5) − 5 = 55", "12*5-5", "55"))

t(986, "4 × 53 = 212. Dua ratus dua belas. Temen tulis 202 — salah 10. Cek: 4 × 53 = 4 × 50 + 4 × 3 = 212. Susulan: 53 × 5? 265 ya? Cek dong",
 ["212 pas", "202 salah 10", "265 pas", "PR gue: 200 + 12 rapi", "iya pas", "susulan: 53 prima", "iya pas", "jawaban post semua kuku", "catet: pecah 50 + 3", "iya, standar", "jawaban post lengkap", "susulan: 212 = 4 × 53"],
 "telat dari arsip. 4 × 53. tuntas", ("4 × 53 = 212", "4*53", "212"))

t(987, "Rata sepuluh nilai 68 → total 680. Sembilan diketahui jumlah 604 → kesepuluh 76. Temen salah jumlah → 86. Cek: 680 − 604 = 76. Susulan: sembilan jumlah 580? kesepuluh 100 ya? Cek dong",
 ["680 pas", "604 pas", "76 pas", "susulan 100 pas", "PR gue: total − jumlah diketahui", "iya, rumus", "jawaban post semua kuku", "catet: rata × banyak = total", "iya, b24 juga", "jawaban post lengkap", "susulan: cek jumlah sembilan dulu"],
 "telat dari arsip. rata sepuluh. tuntas", ("680 − 604 = 76", "680-604", "76"))

t(988, "7 × 27 = 189. Seratus delapan puluh sembilan. Temen tulis 179 — salah 10. Cek: 7 × 27 = 7 × 30 − 7 × 3 = 210 − 21. Susulan: 27 × 8? 216 ya? (= 6³ juga). Cek dong",
 ["189 pas", "179 salah 10", "216 pas", "PR gue: 210 − 21 rapi", "iya pas", "susulan: deket 30 dikurangi", "iya, trik", "jawaban post semua kuku", "catet: 189 = 27 × 7", "iya pas", "jawaban post lengkap", "susulan: 189 habis dibagi 7"],
 "telat dari arsip. 7 × 27. tuntas", ("7 × 27 = 189", "7*27", "189"))

t(989, "7,8 jam = 7 jam 48 menit (0,8 × 60 = 48). Temen tulis 7j8m — salah konversi desimal. Susulan: 2,9 jam? 2j54m ya? Cek dong",
 ["48 menit pas", "7j8m salah", "2j54m pas", "PR gue: 0,8 × 60 = 48", "iya, rumus", "susulan: 0,9 jam = 54 menit", "iya, dua kali", "jawaban post semua kuku", "catet: pecahan jam × 60", "iya, b36 juga", "jawaban post lengkap", "susulan: 7,8 jam kerja wajar"],
 "telat dari arsip. 7,8 jam. tuntas", ("0,8 × 60 = 48 menit", "0.8*60", "48"))

t(990, "990 = 2 × 3² × 5 × 11. Faktorisasi: 990 ÷ 2 = 495, ÷ 3 = 165, ÷ 3 = 55, ÷ 5 = 11 (prima). Temen berhenti di 55 — 5 × 11 masih ada. Cek dong",
 ["2 × 3² × 5 × 11 pas", "55 belum selesai pas", "11 prima pas", "PR gue: ekor 90 = habis 2, 3, 5", "iya, cek awal", "jawaban post semua kuku", "catet: pecah sampai prima", "iya, b34 juga", "jawaban post lengkap", "susulan: 990 habis dibagi 11"],
 "telat dari arsip. faktorisasi 990. tuntas", ("990 = 2 × 495 = 2 × 3 × 165", "990/2", "495"))

t(991, "Kelereng 10 merah 5 biru: satu tarik merah = 10/15 = 2/3. Temen balik 5/15 — merah yang banyak. Susulan: biru? 5/15 = 1/3 ya? jumlah 1 pas. Cek dong",
 ["2/3 pas", "5/15 itu biru", "1/3 pas", "jumlah 1 pas", "PR gue: 15 total, 10 merah", "iya pas", "susulan: mayoritas menang", "iya, logis", "jawaban post semua kuku", "catet: bagian ÷ total", "iya, dasar", "jawaban post lengkap", "susulan: 2/3 ≈ 0,667"],
 "telat dari arsip. kelereng 10-5. tuntas", ("10/15 = 2/3", "10/15", "0.6666666666666666"))

t(992, "13 × 7 = 91. Sembilan puluh satu — 91 = 7 × 13. Temen tulis 81 — salah 10. Cek: 13 × 7 = 10×7 + 3×7 = 91. Susulan: 13 × 8? 104 ya? Cek dong",
 ["91 pas", "81 salah 10", "104 pas", "PR gue: 70 + 21 rapi", "iya pas", "susulan: 91 bukan prima", "iya pas", "jawaban post semua kuku", "catet: pecah 10 + 3", "iya, standar", "jawaban post lengkap", "susulan: 91 = 7 × 13 dua faktor"],
 "telat dari arsip. 13 × 7. tuntas", ("13 × 7 = 91", "13*7", "91"))

t(993, "9/16 = 0,5625. Per-16 berhenti (pangkat dua). 1/16 = 0,0625 → 9 × 0,0625 = 0,5625. Temen nanya empat desimal — wajar per-16. Susulan: 5/16? 0,3125 ya? Cek dong",
 ["0,5625 pas", "1/16 dasar pas", "0,3125 pas", "PR gue: 16 = 2⁴", "iya, pangkat dua", "susulan: 16 × 0,5625 = 9 cek", "iya pas", "jawaban post semua kuku", "catet: per-16 keluarga", "iya, b36 juga", "jawaban post lengkap", "susulan: 0,5625 = 9 × 0,0625"],
 "telat dari arsip. 9/16. tuntas", ("9 × 0,0625 = 0,5625", "9*0.0625", "0.5625"))

t(994, "15 × 13 = 195. Seratus sembilan puluh lima — deket 200, kurang 5. Temen tulis 185 — salah 10. Cek: 15 × 13 = 15 × 10 + 15 × 3 = 195. Susulan: 13 × 16? 208 ya? Cek dong",
 ["195 pas", "185 salah 10", "208 pas", "PR gue: 150 + 45 rapi", "iya pas", "susulan: deket 200", "iya, minus 5", "jawaban post semua kuku", "catet: pecah 10 + 3", "iya, standar", "jawaban post lengkap", "susulan: 195 = 15 × 13"],
 "telat dari arsip. 15 × 13. tuntas", ("15 × 13 = 195", "15*13", "195"))

t(995, "36² = 1.296. Seribu dua ratus sembilan puluh enam. Temen tulis 1.296 pas? bagus. Yang sering salah 1.269 (kebalik). Cek: (35 + 1)² = 1.225 + 70 + 1. Susulan: 37²? 1.369 ya? Cek dong",
 ["1.296 pas", "1.269 kebalik", "1.369 pas", "PR gue: 1.225 + 71 = 1.296", "iya, jarak 71 = 2×35+1", "jawaban post semua kuku", "catet: kuadrat 30-an lanjut", "iya, tangga", "jawaban post lengkap", "susulan: 1.296 = 6⁴ juga!"],
 "telat dari arsip. 36² = 1.296. tuntas", ("36² = 1.296 = 6⁴", "36*36", "1296"))

t(996, "12 × 21 = 252. Dua ratus lima puluh dua. Temen tulis 242 — salah 10. Cek: 12 × 21 = 12 × 20 + 12 = 252. Susulan: 21 × 13? 273 ya? Cek dong",
 ["252 pas", "242 salah 10", "273 pas", "PR gue: 240 + 12 rapi", "iya pas", "susulan: 252 = 2² × 3² × 7", "iya pas", "jawaban post semua kuku", "catet: deket 20 ditambah", "iya, trik", "jawaban post lengkap", "susulan: 252 = 4 × 63"],
 "telat dari arsip. 12 × 21. tuntas", ("12 × 21 = 252", "12*21", "252"))

t(997, "9 hari 3 jam = 219 jam (9 × 24 + 3). Temen kali 9 × 3 — salah operand. Cek: 216 + 3. Susulan: 7 hari 7 jam? 175 ya? Cek dong",
 ["219 jam pas", "9 × 3 salah operand", "175 jam pas", "PR gue: hari × 24 + jam", "iya, rumus", "susulan: 219 jam ≈ 9,1 hari", "iya, balik", "jawaban post semua kuku", "catet: campuran hari-jam", "iya, b35 juga", "jawaban post lengkap", "susulan: 219 = 3 × 73"],
 "telat dari arsip. 9 hari 3 jam. tuntas", ("9 × 24 + 3 = 219", "9*24+3", "219"))

t(998, "8 × 37 = 296. Dua ratus sembilan puluh enam — deket 300, kurang 4. Temen tulis 286 — salah 10. Cek: 8 × 37 = 8 × 40 − 8 × 3 = 320 − 24. Susulan: 37 × 9? 333 ya? Cek dong",
 ["296 pas", "286 salah 10", "333 pas", "PR gue: 320 − 24 rapi", "iya pas", "susulan: deket 40 dikurangi", "iya, trik", "jawaban post semua kuku", "catet: 296 = 8 × 37", "iya pas", "jawaban post lengkap", "susulan: 333 = 3 × 111"],
 "telat dari arsip. 8 × 37. tuntas", ("8 × 37 = 296", "8*37", "296"))

t(999, "999 = 3³ × 37. Faktorisasi: 999 ÷ 3 = 333, ÷ 3 = 111, ÷ 3 = 37 (prima). Juga 999 = 1.000 − 1 — satu di bawah seribu. Temen kira 999 prima — digit sum 27, habis 3! Cek dong",
 ["3³ × 37 pas", "999 = 1.000 − 1 pas", "999 bukan prima pas", "digit sum 27 pas", "PR gue: 111 = 3 × 37 juga", "iya pas", "jawaban post semua kuku", "catet: digit sum cek cepat", "iya, hemat", "jawaban post lengkap", "susulan: 999 angka keren, bukan prima"],
 "telat dari arsip. faktorisasi 999. tuntas", ("999 = 27 × 37", "27*37", "999"))

t(1000, "CUITAN KE-1.000! Angkanya cantik: 1.000 = 2³ × 5³ = 10³ — pangkat tiga sepuluh, hasil kali 8 × 125 (pasangan favorit b25). 1.000 jam ≈ 41,7 hari. 1.000 detik ≈ 16,7 menit. Susulan: 1.000 hari ≈ 2,74 tahun ya? Cek dong",
 ["2³ × 5³ pas", "10³ pas", "8 × 125 pas", "41,7 hari pas", "16,7 menit pas", "2,74 tahun pas", "PR gue: 1.000 pekan ≈ 19,2 tahun", "iya pas", "jawaban post semua kuku", "catet: 1.000 = 10³, paling bulat", "iya, milestone", "jawaban post lengkap", "susulan: seribu cuitan, komplit!"],
 "telat dari arsip. 1.000 = 10³. tuntas", ("1.000 = 10³ = 2³ × 5³", "10*10*10", "1000"))

assert len(T) == 25, len(T)
build2(T, 976, "threads-40.ts", 40, 36, 826, 40,
       "Topik: separuh 98, 30 dari 40, 6×33, luas 168, 5×41, 7 hari 2 jam, 8×29, prima 280-320, 11×19, 12x−5 = 7x+20, 4×53, rata sepuluh, 7×27, 7,8 jam, faktorisasi 990, kelereng 10-5, 13×7, 9/16, 15×13, 36², 12×21, 9 hari 3 jam, 8×37, faktorisasi 999, 1.000 = 10³ cuitan ke-1000.")
print("threads-40 ok")
