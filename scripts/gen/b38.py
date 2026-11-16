# threads-38.ts — BATCH 34 (id 926-950, authorId 776-800)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(926, "½ × 86 = 43. Genap rapi, hasil prima 43. Temen jawab 42 — 42 × 2 = 84, kurang 2. Susulan: ½ × 94? 47 ya? Cek dong",
 ["43 pas", "42 × 2 = 84 kurang", "susulan 47 pas", "PR gue: 43 prima pas", "iya pas", "susulan: 86 = 2 × 43", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 43 dua digit prima"],
 "telat dari arsip. separuh 86. tuntas", ("86/2 = 43", "86/2", "43"))

t(927, "Kembalian 100rb − 68rb = 32rb. Temen tulis 42 — salah 10. Cek: 68 + 32 = 100. Susulan: 100rb − 76rb? 24rb ya? Cek dong",
 ["32rb pas", "42 salah 10", "24rb pas", "PR gue: cek balik jumlah", "iya, selalu", "susulan: kembalian cepat via komplemen", "iya, b26 juga", "jawaban post semua kuku", "catet: total − bayar", "iya, dasar", "jawaban post lengkap", "susulan: 68 → 100 butuh 32"],
 "telat dari arsip. kembalian 68. tuntas", ("100 − 68 = 32rb", "100-68", "32"))

t(928, "8 × 23 = 184. Seratus delapan puluh empat. Temen tulis 174 — salah 10. Cek: 8 × 23 = 8 × 20 + 8 × 3 = 184. Susulan: 23 × 9? 207 ya? Cek dong",
 ["184 pas", "174 salah 10", "207 pas", "PR gue: 160 + 24 rapi", "iya pas", "susulan: deket 20 ditambah", "iya, trik", "jawaban post semua kuku", "catet: pecah 20 + 3", "iya, standar", "jawaban post lengkap", "susulan: 184 = 8 × 23"],
 "telat dari arsip. 8 × 23. tuntas", ("8 × 23 = 184", "8*23", "184"))

t(929, "Balok 5×4×3: volume 60, permukaan 2(20 + 15 + 12) = 94. Temen jumlah volume + permukaan — dua ukuran jangan digabung. Susulan: balok 2×3×6? volume 36, permukaan 72 ya? Cek dong",
 ["volume 60 pas", "permukaan 94 pas", "jangan gabung", "susulan 36 & 72 pas", "PR gue: 20 + 15 + 12 = 47, × 2", "iya, rapi", "jawaban post semua kuku", "catet: dua rumus dua ukuran", "iya, b29 juga", "jawaban post lengkap", "susulan: cm³ vs cm²"],
 "telat dari arsip. balok 5×4×3. tuntas", ("5×4×3 = 60", "5*4*3", "60"))

t(930, "5 × 33 = 165. Seratus enam puluh lima. Temen tulis 155 — salah 10. Cek: 5 × 33 = 5 × 30 + 5 × 3 = 165. Susulan: 33 × 6? 198 ya? Cek dong",
 ["165 pas", "155 salah 10", "198 pas", "PR gue: 150 + 15 rapi", "iya pas", "susulan: 165 = 11 × 15 juga", "iya pas", "jawaban post semua kuku", "catet: pecah 30 + 3", "iya, standar", "jawaban post lengkap", "susulan: 165 habis dibagi 5"],
 "telat dari arsip. 5 × 33. tuntas", ("5 × 33 = 165", "5*33", "165"))

t(931, "4 hari 12 jam = 108 jam (4 × 24 + 12). Temen kali 4 × 12 — salah operand. Cek: 96 + 12. Susulan: 2 hari 15 jam? 63 ya? Cek dong",
 ["108 jam pas", "4 × 12 salah operand", "63 jam pas", "PR gue: hari × 24 + jam", "iya, rumus", "susulan: 108 jam = 4,5 hari", "iya, balik", "jawaban post semua kuku", "catet: campuran hari-jam", "iya, b31 juga", "jawaban post lengkap", "susulan: 0,5 hari = 12 jam"],
 "telat dari arsip. 4 hari 12 jam. tuntas", ("4 × 24 + 12 = 108", "4*24+12", "108"))

t(932, "12 × 15 = 180. Seratus delapan puluh. Temen tulis 170 — salah 10. Cek: 12 × 15 = 12 × 10 + 12 × 5 = 180. Susulan: 15 × 13? 195 ya? Cek dong",
 ["180 pas", "170 salah 10", "195 pas", "PR gue: 120 + 60 rapi", "iya pas", "susulan: 180 = 12 × 15", "iya pas", "jawaban post semua kuku", "catet: pecah 10 + 5", "iya, standar", "jawaban post lengkap", "susulan: 180 mnt = 3 jam"],
 "telat dari arsip. 12 × 15. tuntas", ("12 × 15 = 180", "12*15", "180"))

t(933, "21 dari 84 = 25%. Sederhanakan 21/84 = ¼ (bagi 21). Temen langsung bagi panjang — perempatan lebih cepet. Susulan: 42 dari 84? 50% ya? Cek dong",
 ["¼ dulu pas", "25% pas", "susulan 50% pas", "PR gue: 84 = 4 × 21", "iya pas", "susulan: 84 enak dibagi", "iya, banyak pembagi", "jawaban post semua kuku", "catet: sederhanakan dulu", "iya, mantra", "jawaban post lengkap", "susulan: 63 dari 84 = 75%"],
 "telat dari arsip. 21 dari 84. tuntas", ("21/84 = 1/4 = 25%", "21/84", "0.25"))

t(934, "6 × 29 = 174. Seratus tujuh puluh empat. Temen tulis 164 — salah 10. Cek: 6 × 29 = 6 × 30 − 6 = 174. Susulan: 29 × 7? 203 ya? Cek dong",
 ["174 pas", "164 salah 10", "203 pas", "PR gue: 180 − 6 rapi", "iya pas", "susulan: deket 30 dikurangi", "iya, trik", "jawaban post semua kuku", "catet: × 30 minus 6", "iya, dua langkah", "jawaban post lengkap", "susulan: 174 = 6 × 29"],
 "telat dari arsip. 6 × 29. tuntas", ("6 × 29 = 174", "6*29", "174"))

t(935, "Prima 210-250: 211, 223, 227, 229, 233, 239, 241 — tujuh. 219? habis 3 (digit sum 12). 221? 13 × 17. Susulan: 241 prima terakhir sebelum 250 ya? Cek dong",
 ["tujuh prima pas", "219 habis 3 pas", "221 = 13 × 17 pas", "241 pas", "PR gue: digit sum cek cepat", "iya, hemat", "jawaban post semua kuku", "catet: √250 < 16, cek sampai 13", "iya, batas", "jawaban post lengkap", "susulan: 217 = 7 × 31 juga"],
 "telat dari arsip. prima 210-250. tuntas", ("prima 210-250 ada 7", "1*7", "7"))

t(936, "4 × 41 = 164. Seratus enam puluh empat. Temen tulis 154 — salah 10. Cek: 4 × 41 = 4 × 40 + 4 = 164. Susulan: 41 × 5? 205 ya? Cek dong",
 ["164 pas", "154 salah 10", "205 pas", "PR gue: 160 + 4 rapi", "iya pas", "susulan: 41 prima", "iya pas", "jawaban post semua kuku", "catet: deket 40 ditambah", "iya, trik", "jawaban post lengkap", "susulan: 164 = 4 × 41"],
 "telat dari arsip. 4 × 41. tuntas", ("4 × 41 = 164", "4*41", "164"))

t(937, "8x − 3 = 5x + 12 → 3x = 15 → x = 5. Kumpulkan x di satu sisi, angka di sisi lain. Temen pindah ruas ganti tanda salah. Susulan: cek balik: 8(5) − 3 = 37; 5(5) + 12 = 37 pas! Cek dong",
 ["3x = 15 pas", "x = 5 pas", "cek 37 = 37 pas", "PR gue: pindah ruas ubah tanda", "iya, aturan", "susulan: urutkan langkah", "iya, sistematis", "jawaban post semua kuku", "catet: dua sisi aljabar", "iya, b25 juga", "jawaban post lengkap", "susulan: cek balik wajib"],
 "telat dari arsip. 8x − 3 = 5x + 12. tuntas", ("8(5) − 3 = 37", "8*5-3", "37"))

t(938, "13 × 5 = 65. Enam puluh lima. Temen tulis 55 — salah 10. Cek: 13 × 5 = 13 × 5 = 10×5 + 3×5 = 65. Susulan: 13 × 6? 78 ya? Cek dong",
 ["65 pas", "55 salah 10", "78 pas", "PR gue: 50 + 15 rapi", "iya pas", "susulan: tabel 13 naik 13", "iya, konsisten", "jawaban post semua kuku", "catet: pecah 10 + 3", "iya, standar", "jawaban post lengkap", "susulan: 65 = 5 × 13"],
 "telat dari arsip. 13 × 5. tuntas", ("13 × 5 = 65", "13*5", "65"))

t(939, "Median 12 data (genap) = rata ke-6 dan ke-7. Urut: 4,6,7,9,10,11,13,15,16,18,20,22 → (11+13)/2 = 12. Temen ambil satu — harus diratain. Susulan: ke-6 = 10, ke-7 = 14? median 12 ya? Cek dong",
 ["rata dua tengah pas", "12 pas", "susulan 12 pas lagi", "PR gue: urutkan dulu", "iya, wajib", "susulan: 11 + 13 = 24, bagi 2", "iya, rapi", "jawaban post semua kuku", "catet: genap = dua tengah", "iya, b33 juga", "jawaban post lengkap", "susulan: ganjil = satu tengah"],
 "telat dari arsip. median genap 12. tuntas", ("(11 + 13)/2 = 12", "11+13", "24"))

t(940, "11 × 17 = 187. Seratus delapan puluh tujuh. Temen tulis 177 — salah 10. Cek: 11 × 17 = 10 × 17 + 17 = 187. Susulan: 17 × 12? 204 ya? Cek dong",
 ["187 pas", "177 salah 10", "204 pas", "PR gue: 170 + 17 rapi", "iya pas", "susulan: × 11 = + n dari × 10", "iya, trik 11", "jawaban post semua kuku", "catet: 187 = 11 × 17", "iya pas", "jawaban post lengkap", "susulan: 187 deket 200"],
 "telat dari arsip. 11 × 17. tuntas", ("11 × 17 = 187", "11*17", "187"))

t(941, "Kartu: peluang raja HATI (satu kartu) = 1/52. Temen kira 1/13 — itu peluang raja suit apa saja. Satu kartu spesifik lebih kecil. Susulan: raja (semua suit)? 4/52 = 1/13 ya? Cek dong",
 ["1/52 pas", "1/13 itu semua suit", "spesifik lebih kecil pas", "susulan 1/13 pas", "PR gue: satu kartu vs satu jenis", "iya, beda kategori", "jawaban post semua kuku", "catet: definisi kejadian dulu", "iya, penting", "jawaban post lengkap", "susulan: 1/52 ≈ 0,019"],
 "telat dari arsip. raja hati. tuntas", ("1/52 vs 4/52 = 1/13", "1/52", "0.019230769230769232"))

t(942, "6 × 31 = 186. Seratus delapan puluh enam. Temen tulis 176 — salah 10. Cek: 6 × 31 = 6 × 30 + 6 = 186. Susulan: 31 × 7? 217 ya? Cek dong",
 ["186 pas", "176 salah 10", "217 pas", "PR gue: 180 + 6 rapi", "iya pas", "susulan: deket 30 ditambah", "iya, trik", "jawaban post semua kuku", "catet: 31 prima", "iya pas", "jawaban post lengkap", "susulan: 186 = 6 × 31"],
 "telat dari arsip. 6 × 31. tuntas", ("6 × 31 = 186", "6*31", "186"))

t(943, "Luas lingkaran r 14 = 22/7 × 196 = 616. Temen pakai 3,14 → 615,44 — beda tipis, dua konstanta. 22/7 pas untuk r kelipatan 7. Susulan: r 21? 1.386 ya? Cek dong",
 ["616 pas", "615,44 versi 3,14 pas", "dua konstanta beda tipis", "susulan 1.386 pas", "PR gue: r kelipatan 7 → 22/7", "iya, itu alasannya", "jawaban post semua kuku", "catet: pilih konstanta sesuai soal", "iya, b25 juga", "jawaban post lengkap", "susulan: 616 = 2 × 308"],
 "telat dari arsip. luas r 14. tuntas", ("22/7 × 196 = 616", "22/7*196", "616"))

t(944, "5 × 37 = 185. Seratus delapan puluh lima. Temen tulis 175 — salah 10. Cek: 5 × 37 = 5 × 40 − 5 × 3 = 185. Susulan: 37 × 6? 222 ya? Cek dong",
 ["185 pas", "175 salah 10", "222 pas", "PR gue: 200 − 15 rapi", "iya pas", "susulan: 37 prima", "iya pas", "jawaban post semua kuku", "catet: deket 40 dikurangi", "iya, trik", "jawaban post lengkap", "susulan: 185 habis dibagi 5"],
 "telat dari arsip. 5 × 37. tuntas", ("5 × 37 = 185", "5*37", "185"))

t(945, "5,6 jam = 5 jam 36 menit (0,6 × 60 = 36). Temen tulis 5j6m — salah konversi desimal. Susulan: 3,8 jam? 3j48m ya? Cek dong",
 ["36 menit pas", "5j6m salah", "3j48m pas", "PR gue: 0,6 × 60 = 36", "iya, rumus", "susulan: 0,8 jam = 48 menit", "iya, dua kali", "jawaban post semua kuku", "catet: pecahan jam × 60", "iya, b34 juga", "jawaban post lengkap", "susulan: 5,6 jam kerja wajar"],
 "telat dari arsip. 5,6 jam. tuntas", ("0,6 × 60 = 36 menit", "0.6*60", "36"))

t(946, "8 × 27 = 216. Dua ratus enam belas — juga 6³! Temen baru sadar 216 kubik 6. Susulan: 27 × 8 = 216 sama ya? komutatif. Cek dong",
 ["216 pas", "6³ = 216 pas", "komutatif pas", "PR gue: 200 + 16 rapi", "iya pas", "susulan: 216 = 2³ × 3³", "iya pas", "jawaban post semua kuku", "catet: dua wajah bilangan", "iya, seru", "jawaban post lengkap", "susulan: 216 kubik 6 rusuk"],
 "telat dari arsip. 8 × 27. tuntas", ("8 × 27 = 216 = 6³", "8*27", "216"))

t(947, "34² = 1.156. Seribu seratus lima puluh enam. Temen tulis 1.165 — kebalik. Cek: 34² = (30 + 4)² = 900 + 240 + 16. Susulan: 35²? 1.225 ya? Cek dong",
 ["1.156 pas", "1.165 kebalik", "1.225 pas", "PR gue: (30+4)² rapi", "iya pas", "susulan: 900 + 240 + 16", "iya, rumus", "jawaban post semua kuku", "catet: kuadrat 30-an naik", "iya, tangga", "jawaban post lengkap", "susulan: 35² trik ujung 5"],
 "telat dari arsip. 34² = 1.156. tuntas", ("34² = 1.156", "34*34", "1156"))

t(948, "12 × 17 = 204. Dua ratus empat. Temen tulis 194 — salah 10. Cek: 12 × 17 = 12 × 20 − 12 × 3 = 240 − 36. Susulan: 17 × 13? 221 ya? Cek dong",
 ["204 pas", "194 salah 10", "221 pas", "PR gue: 240 − 36 rapi", "iya pas", "susulan: deket 20 dikurangi", "iya, trik", "jawaban post semua kuku", "catet: 204 = 12 × 17", "iya pas", "jawaban post lengkap", "susulan: 204 habis dibagi 12"],
 "telat dari arsip. 12 × 17. tuntas", ("12 × 17 = 204", "12*17", "204"))

t(949, "11/16 = 0,6875. Per-16 = pangkat dua, desimal berhenti. 1/16 = 0,0625 → 11 × 0,0625 = 0,6875. Temen heran empat desimal — ya, per-16 begitu. Cek dong",
 ["0,6875 pas", "1/16 = 0,0625 pas", "empat desimal wajar pas", "PR gue: 16 = 2⁴", "iya, pangkat dua", "susulan: 3/16 = 0,1875 juga", "iya, b34 juga", "jawaban post semua kuku", "catet: per-16 berhenti", "iya, keluarga 8-16", "jawaban post lengkap", "susulan: 15/16 = 0,9375"],
 "telat dari arsip. 11/16. tuntas", ("11 × 0,0625 = 0,6875", "11*0.0625", "0.6875"))

t(950, "950 = 2 × 5² × 19. Faktorisasi: 950 ÷ 2 = 475, ÷ 5 = 95, ÷ 5 = 19 (prima). Temen berhenti di 95 — 5 × 19 masih ada. Cek dong",
 ["2 × 5² × 19 pas", "95 belum selesai pas", "19 prima pas", "PR gue: ekor 50 = habis 2 dan 25", "iya, cek awal", "jawaban post semua kuku", "catet: pecah sampai prima", "iya, b30 juga", "jawaban post lengkap", "susulan: 950 habis dibagi 25"],
 "telat dari arsip. faktorisasi 950. tuntas", ("950 = 50 × 19", "50*19", "950"))

assert len(T) == 25, len(T)
build2(T, 926, "threads-38.ts", 38, 34, 776, 38,
       "Topik: separuh 86, kembalian 68, 8×23, balok 5×4×3, 5×33, 4 hari 12 jam, 12×15, 21 dari 84, 6×29, prima 210-250, 4×41, 8x−3 = 5x+12, 13×5, median genap 12, 11×17, raja hati, 6×31, luas r 14, 5×37, 5,6 jam, 8×27, 34², 12×17, 11/16, faktorisasi 950.")
print("threads-38 ok")
