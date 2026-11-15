# threads-39.ts — BATCH 35 (id 951-975, authorId 801-825)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(951, "½ × 94 = 47. Genap rapi, hasil prima 47. Temen jawab 46 — 46 × 2 = 92, kurang 2. Susulan: ½ × 106? 53 ya? Cek dong",
 ["47 pas", "46 × 2 = 92 kurang", "susulan 53 pas", "PR gue: 47 prima pas", "iya pas", "susulan: 94 = 2 × 47", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 47 dua digit prima"],
 "telat dari arsip. separuh 94. tuntas", ("94/2 = 47", "94/2", "47"))

t(952, "6 hari 10 jam = 154 jam (6 × 24 + 10). Temen kali 6 × 10 — salah operand. Cek: 144 + 10. Susulan: 4 hari 8 jam? 104 ya? Cek dong",
 ["154 jam pas", "6 × 10 salah operand", "104 jam pas", "PR gue: hari × 24 + jam", "iya, rumus", "susulan: 154 jam = 6,4 hari an", "iya, balik", "jawaban post semua kuku", "catet: campuran hari-jam", "iya, b33 juga", "jawaban post lengkap", "susulan: 154 jam = 9j14m? eh 6 hari 10 jam"],
 "telat dari arsip. 6 hari 10 jam. tuntas", ("6 × 24 + 10 = 154", "6*24+10", "154"))

t(953, "7 × 29 = 203. Dua ratus tiga. Temen tulis 193 — salah 10. Cek: 7 × 29 = 7 × 30 − 7 = 203. Susulan: 29 × 8? 232 ya? Cek dong",
 ["203 pas", "193 salah 10", "232 pas", "PR gue: 210 − 7 rapi", "iya pas", "susulan: deket 30 dikurangi", "iya, trik", "jawaban post semua kuku", "catet: 203 = 7 × 29", "iya pas", "jawaban post lengkap", "susulan: 203 bukan prima"],
 "telat dari arsip. 7 × 29. tuntas", ("7 × 29 = 203", "7*29", "203"))

t(954, "Segitiga sama kaki 10-10-12: tinggi √(100 − 36) = 8, luas ½ × 12 × 8 = 48. Temen pakai alas 10 — tinggi ke ALAS 12 dulu. Susulan: 10-10-16? tinggi 6, luas 48 juga ya? kebetulan. Cek dong",
 ["tinggi 8 pas", "luas 48 pas", "susulan 48 lagi pas", "PR gue: tinggi membagi alas", "iya, simetris", "susulan: 6-8-10 tripel di dalam", "iya, b24 juga", "jawaban post semua kuku", "catet: alas 12 dibagi dua 6-6", "iya, kunci", "jawaban post lengkap", "susulan: keliling 32"],
 "telat dari arsip. sama kaki 10-10-12. tuntas", ("½ × 12 × 8 = 48", "12*8/2", "48"))

t(955, "4 × 47 = 188. Seratus delapan puluh delapan. Temen tulis 178 — salah 10. Cek: 4 × 47 = 4 × 40 + 4 × 7 = 188. Susulan: 47 × 5? 235 ya? Cek dong",
 ["188 pas", "178 salah 10", "235 pas", "PR gue: 160 + 28 rapi", "iya pas", "susulan: 188 deket 200", "iya pas", "jawaban post semua kuku", "catet: pecah 40 + 7", "iya, standar", "jawaban post lengkap", "susulan: 188 = 4 × 47"],
 "telat dari arsip. 4 × 47. tuntas", ("4 × 47 = 188", "4*47", "188"))

t(956, "Cash 300rb, bayar 145rb dan 85rb → sisa 70rb. Temen hitung 300 − 230 = 70 langsung — jumlahkan dulu juga pas. Susulan: bayar ketiga 75rb? −5rb kurang ya? Cek dong",
 ["sisa 70rb pas", "jumlah 230rb pas", "kurang 5rb pas", "PR gue: dua langkah sama hasil", "iya, konsisten", "susulan: minus = kurang", "iya, b12 juga", "jawaban post semua kuku", "catet: sisa berkurang", "iya, urutan", "jawaban post lengkap", "susulan: cek sebelum bayar"],
 "telat dari arsip. sisa 300rb. tuntas", ("300 − 145 − 85 = 70rb", "300-145-85", "70"))

t(957, "9 × 23 = 207. Dua ratus tujuh. Temen tulis 197 — salah 10. Cek: 9 × 23 = 9 × 23 = 180 + 27. Susulan: 23 × 10? 230 ya? Cek dong",
 ["207 pas", "197 salah 10", "230 pas", "PR gue: 180 + 27 rapi", "iya pas", "susulan: × 9 = − n dari × 10? eh × 10 − 23 = 207", "iya, dua jalur", "jawaban post semua kuku", "catet: pecah 20 + 3", "iya, standar", "jawaban post lengkap", "susulan: 207 = 9 × 23"],
 "telat dari arsip. 9 × 23. tuntas", ("9 × 23 = 207", "9*23", "207"))

t(958, "27 dari 36 = 75%. Sederhanakan 27/36 = ¾ (bagi 9). Temen bagi panjang — perempatan lebih cepet. Susulan: 18 dari 36? 50% ya? Cek dong",
 ["¾ dulu pas", "75% pas", "susulan 50% pas", "PR gue: 36 = 4 × 9", "iya pas", "susulan: 36 enak dibagi", "iya, banyak pembagi", "jawaban post semua kuku", "catet: sederhanakan dulu", "iya, mantra", "jawaban post lengkap", "susulan: 9 dari 36 = 25%"],
 "telat dari arsip. 27 dari 36. tuntas", ("27/36 = 3/4 = 75%", "27/36", "0.75"))

t(959, "8 × 31 = 248. Dua ratus empat puluh delapan. Temen tulis 238 — salah 10. Cek: 8 × 31 = 8 × 30 + 8 = 248. Susulan: 31 × 9? 279 ya? Cek dong",
 ["248 pas", "238 salah 10", "279 pas", "PR gue: 240 + 8 rapi", "iya pas", "susulan: deket 30 ditambah", "iya, trik", "jawaban post semua kuku", "catet: 31 prima", "iya pas", "jawaban post lengkap", "susulan: 248 = 8 × 31"],
 "telat dari arsip. 8 × 31. tuntas", ("8 × 31 = 248", "8*31", "248"))

t(960, "Rata sembilan nilai 76 → total 684. Delapan diketahui jumlah 592 → kesembilan 92. Temen salah jumlah → 102. Cek: 684 − 592 = 92. Susulan: delapan jumlah 604? kesembilan 80 ya? Cek dong",
 ["684 pas", "592 pas", "92 pas", "susulan 80 pas", "PR gue: total − jumlah diketahui", "iya, rumus", "jawaban post semua kuku", "catet: rata × banyak = total", "iya, b24 juga", "jawaban post lengkap", "susulan: cek jumlah delapan dulu"],
 "telat dari arsip. rata sembilan. tuntas", ("684 − 592 = 92", "684-592", "92"))

t(961, "6 × 37 = 222. Dua ratus dua puluh dua. Temen tulis 212 — salah 10. Cek: 6 × 37 = 6 × 40 − 6 × 3 = 240 − 18. Susulan: 37 × 7? 259 ya? Cek dong",
 ["222 pas", "212 salah 10", "259 pas", "PR gue: 240 − 18 rapi", "iya pas", "susulan: deket 40 dikurangi", "iya, trik", "jawaban post semua kuku", "catet: 222 = 6 × 37", "iya pas", "jawaban post lengkap", "susulan: 222 palindrom!"],
 "telat dari arsip. 6 × 37. tuntas", ("6 × 37 = 222", "6*37", "222"))

t(962, "9x − 4 = 6x + 11 → 3x = 15 → x = 5. Pindah ruas ubah tanda. Temen lupa ganti tanda −4 → +11 salah arah. Susulan: cek balik: 9(5) − 4 = 41; 6(5) + 11 = 41 pas! Cek dong",
 ["3x = 15 pas", "x = 5 pas", "cek 41 = 41 pas", "PR gue: ubah tanda saat pindah", "iya, aturan", "susulan: kumpulkan x kiri, angka kanan", "iya, standar", "jawaban post semua kuku", "catet: dua sisi aljabar", "iya, b34 juga", "jawaban post lengkap", "susulan: cek balik wajib"],
 "telat dari arsip. 9x − 4 = 6x + 11. tuntas", ("9(5) − 4 = 41", "9*5-4", "41"))

t(963, "12 × 19 = 228. Dua ratus dua puluh delapan. Temen tulis 218 — salah 10. Cek: 12 × 19 = 12 × 20 − 12 = 228. Susulan: 19 × 13? 247 ya? Cek dong",
 ["228 pas", "218 salah 10", "247 pas", "PR gue: 240 − 12 rapi", "iya pas", "susulan: deket 20 dikurangi", "iya, trik", "jawaban post semua kuku", "catet: 228 = 12 × 19", "iya pas", "jawaban post lengkap", "susulan: 228 = 4 × 57"],
 "telat dari arsip. 12 × 19. tuntas", ("12 × 19 = 228", "12*19", "228"))

t(964, "Kelereng 9 biru 3 merah: satu tarik biru = 9/12 = ¾. Temen balik jadi 3/12 — biru yang banyak. Susulan: merah? 3/12 = ¼ ya? jumlah 1 pas. Cek dong",
 ["¾ pas", "3/12 itu merah", "¼ pas", "jumlah 1 pas", "PR gue: 12 total, 9 biru", "iya pas", "susulan: mayoritas warna menang", "iya, logis", "jawaban post semua kuku", "catet: bagian ÷ total", "iya, dasar", "jawaban post lengkap", "susulan: ¾ = 0,75"],
 "telat dari arsip. kelereng 9-3. tuntas", ("9/12 = 3/4", "9/12", "0.75"))

t(965, "5 × 43 = 215. Dua ratus lima belas. Temen tulis 205 — salah 10. Cek: 5 × 43 = 5 × 40 + 5 × 3 = 215. Susulan: 43 × 6? 258 ya? Cek dong",
 ["215 pas", "205 salah 10", "258 pas", "PR gue: 200 + 15 rapi", "iya pas", "susulan: 43 prima", "iya pas", "jawaban post semua kuku", "catet: deket 40 ditambah", "iya, trik", "jawaban post lengkap", "susulan: 215 habis dibagi 5"],
 "telat dari arsip. 5 × 43. tuntas", ("5 × 43 = 215", "5*43", "215"))

t(966, "Prima 250-280: 251, 257, 263, 269, 271, 277 — enam. 253? 11 × 23. 259? 7 × 37. 279? habis 3. Susulan: 281 prima ya? (√281 ≈ 16,8, cek sampai 13... eh 16 — cek 2,3,5,7,11,13). Cek dong",
 ["enam prima pas", "253 = 11 × 23 pas", "259 = 7 × 37 pas", "279 habis 3 pas", "PR gue: √281 ≈ 16,8, cek sampai 16? prima hanya perlu sampai 13", "iya, prima cek sampai akar", "jawaban post semua kuku", "catet: daftar + coret", "iya, sistematis", "jawaban post lengkap", "susulan: 281 prima"],
 "telat dari arsip. prima 250-280. tuntas", ("prima 250-280 ada 6", "1*6", "6"))

t(967, "10 × 61 = 610. Enam ratus sepuluh. Temen tulis 61 — kurang nol. Susulan: 61 × 5? 305 ya? Cek dong",
 ["610 pas", "61 kurang nol", "305 pas", "PR gue: × 10 tambah nol", "iya, geser", "susulan: 610 = 61 × 10", "iya pas", "jawaban post semua kuku", "catet: tangga nol", "iya, b36 juga", "jawaban post lengkap", "susulan: 610 palindrom? bukan (016)"],
 "telat dari arsip. 10 × 61. tuntas", ("10 × 61 = 610", "10*61", "610"))

t(968, "6,4 jam = 6 jam 24 menit (0,4 × 60 = 24). Temen tulis 6j4m — salah konversi desimal. Susulan: 2,6 jam? 2j36m ya? Cek dong",
 ["24 menit pas", "6j4m salah", "2j36m pas", "PR gue: 0,4 × 60 = 24", "iya, rumus", "susulan: 0,6 jam = 36 menit", "iya, dua kali", "jawaban post semua kuku", "catet: pecahan jam × 60", "iya, b36 juga", "jawaban post lengkap", "susulan: 6,4 jam kerja wajar"],
 "telat dari arsip. 6,4 jam. tuntas", ("0,4 × 60 = 24 menit", "0.4*60", "24"))

t(969, "7 × 35 = 245. Dua ratus empat puluh lima. Temen tulis 235 — salah 10. Cek: 7 × 35 = 7 × 35 = 7 × 30 + 7 × 5 = 245. Susulan: 35 × 8? 280 ya? Cek dong",
 ["245 pas", "235 salah 10", "280 pas", "PR gue: 210 + 35 rapi", "iya pas", "susulan: 245 = 5 × 49 = 5 × 7²", "iya pas", "jawaban post semua kuku", "catet: pecah 30 + 5", "iya, standar", "jawaban post lengkap", "susulan: 245 habis dibagi 5 dan 7"],
 "telat dari arsip. 7 × 35. tuntas", ("7 × 35 = 245", "7*35", "245"))

t(970, "35² = 1.225. Trik ujung 5: 3 × 4 = 12, tulis 25 → 1.225. Temen tulis 1.252 — kebalik. Susulan: 45²? 2.025 ya? (4 × 5 = 20, tulis 25). Cek dong",
 ["1.225 pas", "1.252 kebalik", "2.025 pas", "PR gue: n(n+1) + 25", "iya, trik ujung 5", "susulan: 25² = 625 juga", "iya, b27 juga", "jawaban post semua kuku", "catet: kuadrat ujung 5", "iya, b24 juga", "jawaban post lengkap", "susulan: 1.225 = 35²"],
 "telat dari arsip. 35² = 1.225. tuntas", ("35² = 1.225", "35*35", "1225"))

t(971, "14 × 9 = 126. Seratus dua puluh enam. Temen tulis 116 — salah 10. Cek: 14 × 9 = 14 × 10 − 14 = 126. Susulan: 9 × 15? 135 ya? Cek dong",
 ["126 pas", "116 salah 10", "135 pas", "PR gue: 140 − 14 rapi", "iya pas", "susulan: × 9 = − n dari × 10", "iya, trik 9", "jawaban post semua kuku", "catet: 126 = 6 × 21 juga", "iya pas", "jawaban post lengkap", "susulan: digit sum 126 = 9"],
 "telat dari arsip. 14 × 9. tuntas", ("14 × 9 = 126", "14*9", "126"))

t(972, "8 hari 5 jam = 197 jam (8 × 24 + 5). Temen kali 8 × 5 — salah operand. Cek: 192 + 5. Susulan: 6 hari 3 jam? 147 ya? Cek dong",
 ["197 jam pas", "8 × 5 salah operand", "147 jam pas", "PR gue: hari × 24 + jam", "iya, rumus", "susulan: 197 jam ≈ 8,2 hari", "iya, balik", "jawaban post semua kuku", "catet: campuran hari-jam", "iya, b33 juga", "jawaban post lengkap", "susulan: 0,2 hari ≈ 5 jam"],
 "telat dari arsip. 8 hari 5 jam. tuntas", ("8 × 24 + 5 = 197", "8*24+5", "197"))

t(973, "15 × 9 = 135. Seratus tiga puluh lima. Temen tulis 125 — salah 10. Cek: 15 × 9 = 15 × 10 − 15 = 135. Susulan: 9 × 16? 144 ya? Cek dong",
 ["135 pas", "125 salah 10", "144 pas", "PR gue: 150 − 15 rapi", "iya pas", "susulan: × 9 = − n dari × 10", "iya, trik 9", "jawaban post semua kuku", "catet: 135 = 27 × 5", "iya pas", "jawaban post lengkap", "susulan: 135 mnt = 2j15m"],
 "telat dari arsip. 15 × 9. tuntas", ("15 × 9 = 135", "15*9", "135"))

t(974, "7/16 = 0,4375. Per-16 berhenti (pangkat dua). 1/16 = 0,0625 → 7 × 0,0625 = 0,4375. Temen nanya empat desimal — wajar per-16. Susulan: 13/16? 0,8125 ya? Cek dong",
 ["0,4375 pas", "1/16 dasar pas", "0,8125 pas", "PR gue: 16 = 2⁴", "iya, pangkat dua", "susulan: 9/16 = 0,5625", "iya pas", "jawaban post semua kuku", "catet: per-16 keluarga", "iya, b36 juga", "jawaban post lengkap", "susulan: 16 × 0,4375 = 7 cek"],
 "telat dari arsip. 7/16. tuntas", ("7 × 0,0625 = 0,4375", "7*0.0625", "0.4375"))

t(975, "975 = 3 × 5² × 13. Faktorisasi: 975 ÷ 3 = 325, ÷ 5 = 65, ÷ 5 = 13 (prima). Temen berhenti di 65 — 5 × 13 masih ada. Cek dong",
 ["3 × 5² × 13 pas", "65 belum selesai pas", "13 prima pas", "PR gue: ekor 75 = habis 3 dan 25", "iya, cek awal", "jawaban post semua kuku", "catet: pecah sampai prima", "iya, b24 juga", "jawaban post lengkap", "susulan: 975 habis dibagi 25"],
 "telat dari arsip. faktorisasi 975. tuntas", ("975 = 75 × 13", "75*13", "975"))

assert len(T) == 25, len(T)
build2(T, 951, "threads-39.ts", 39, 35, 801, 39,
       "Topik: separuh 94, 6 hari 10 jam, 7×29, sama kaki 10-10-12, 4×47, sisa 300rb, 9×23, 27 dari 36, 8×31, rata sembilan, 6×37, 9x−4 = 6x+11, 12×19, kelereng 9-3, 5×43, prima 250-280, 10×61, 6,4 jam, 7×35, 35², 14×9, 8 hari 5 jam, 15×9, 7/16, faktorisasi 975.")
print("threads-39 ok")
