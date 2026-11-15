# threads-37.ts — BATCH 33 (id 901-925, authorId 751-775)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(901, "½ × 78 = 39. Genap rapi, hasil prima 39? eh 39 = 3 × 13, bukan prima! Temen baru sadar 39 komposit. Susulan: ½ × 90? 45 ya? Cek dong",
 ["39 pas", "39 = 3 × 13, komposit", "susulan 45 pas", "PR gue: 39 dua digit prima? bukan", "iya pas", "susulan: cek faktor dulu sebelum prima", "iya, wajib", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 78 = 2 × 3 × 13"],
 "telat dari arsip. separuh 78. tuntas", ("78/2 = 39", "78/2", "39"))

t(902, "14 dari 56 = 25%. Sederhanakan 14/56 = ¼ (bagi 14). Temen langsung bagi panjang — kenali perempatan lebih cepet. Susulan: 28 dari 56? 50% ya? Cek dong",
 ["¼ dulu pas", "75%? eh 25% pas", "susulan 50% pas", "PR gue: 56 enak dibagi 14", "iya pas", "susulan: 56 = 4 × 14", "iya pas", "jawaban post semua kuku", "catet: sederhanakan dulu", "iya, mantra", "jawaban post lengkap", "susulan: 42 dari 56 = 75%"],
 "telat dari arsip. 14 dari 56. tuntas", ("14/56 = 1/4 = 25%", "14/56", "0.25"))

t(903, "6 × 19 = 114. Seratus empat belas. Temen tulis 104 — salah 10. Cek: 6 × 19 = 6 × 20 − 6 = 114. Susulan: 19 × 7? 133 ya? Cek dong",
 ["114 pas", "104 salah 10", "133 pas", "PR gue: 120 − 6 rapi", "iya pas", "susulan: deket 20 dikurangi", "iya, trik", "jawaban post semua kuku", "catet: × 20 minus 6", "iya, dua langkah", "jawaban post lengkap", "susulan: 114 = 6 × 19"],
 "telat dari arsip. 6 × 19. tuntas", ("6 × 19 = 114", "6*19", "114"))

t(904, "Keliling trapesium: 12 + 9 + 6 + 5 = 32. Empat sisi beda semua — trapesium tak beraturan. Temen tanya tinggi? keliling gak butuh tinggi. Susulan: sisi 10, 10, 7, 5? 32 juga ya? kebetulan. Cek dong",
 ["32 pas", "empat sisi beda pas", "keliling gak butuh tinggi", "susulan 32 juga pas", "PR gue: jumlah sisi aja", "iya, rumus", "jawaban post semua kuku", "catet: keliling vs luas beda data", "iya, b26 juga", "jawaban post lengkap", "susulan: luas butuh tinggi"],
 "telat dari arsip. keliling trapesium 32. tuntas", ("12+9+6+5 = 32", "12+9+6+5", "32"))

t(905, "5 × 26 = 130. Seratus tiga puluh. Temen tulis 120 — salah 10. Cek: 5 × 26 = 5 × 20 + 5 × 6 = 130. Susulan: 26 × 6? 156 ya? Cek dong",
 ["130 pas", "120 salah 10", "156 pas", "PR gue: 100 + 30 rapi", "iya pas", "susulan: deket 20 ditambah", "iya, trik", "jawaban post semua kuku", "catet: pecah 20 + 6", "iya, standar", "jawaban post lengkap", "susulan: 130 = 2 × 5 × 13"],
 "telat dari arsip. 5 × 26. tuntas", ("5 × 26 = 130", "5*26", "130"))

t(906, "Cash 120rb, bayar 45rb dan 50rb → sisa 25rb. Temen hitung 120 − 95 = 25 langsung — jumlahkan pembayaran dulu juga pas. Susulan: bayar ketiga 30rb? −5rb kurang ya? Cek dong",
 ["sisa 25rb pas", "jumlah dulu 95rb pas", "kurang 5rb pas", "PR gue: dua langkah sama hasil", "iya, konsisten", "susulan: cek sebelum bayar ketiga", "iya, aman", "jawaban post semua kuku", "catet: sisa berkurang tiap bayar", "iya, urutan", "jawaban post lengkap", "susulan: minus = kurang uang"],
 "telat dari arsip. sisa 120rb. tuntas", ("120 − 45 − 50 = 25rb", "120-45-50", "25"))

t(907, "7 × 21 = 147. Seratus empat puluh tujuh. Temen tulis 137 — salah 10. Cek: 7 × 21 = 7 × 20 + 7 = 147. Susulan: 21 × 8? 168 ya? Cek dong",
 ["147 pas", "137 salah 10", "168 pas", "PR gue: 140 + 7 rapi", "iya pas", "susulan: deket 20 ditambah", "iya, trik", "jawaban post semua kuku", "catet: 147 = 3 × 7²", "iya pas", "jawaban post lengkap", "susulan: 147 = 21 × 7"],
 "telat dari arsip. 7 × 21. tuntas", ("7 × 21 = 147", "7*21", "147"))

t(908, "Rata delapan nilai 70 → total 560. Tujuh diketahui jumlah 480 → kedelapan 80. Temen salah jumlah → 90. Cek: 560 − 480 = 80. Susulan: tujuh jumlah 500? kedelapan 60 ya? Cek dong",
 ["560 pas", "480 pas", "80 pas", "susulan 60 pas", "PR gue: total − jumlah diketahui", "iya, rumus", "jawaban post semua kuku", "catet: rata × banyak = total", "iya, b24 juga", "jawaban post lengkap", "susulan: cek jumlah tujuh dulu"],
 "telat dari arsip. rata delapan. tuntas", ("560 − 480 = 80", "560-480", "80"))

t(909, "12 × 6 = 72. Tujuh puluh dua. Temen tulis 62 — salah 10. Cek: 12 × 6 = 12 × 6 = 72 (12 + 12 enam kali). Susulan: 12 × 7? 84 ya? Cek dong",
 ["72 pas", "62 salah 10", "84 pas", "PR gue: tabel 12 naik 12", "iya, konsisten", "susulan: 72 = 8 × 9 juga", "iya pas", "jawaban post semua kuku", "catet: dua wajah perkalian", "iya, seru", "jawaban post lengkap", "susulan: 72 jam = 3 hari"],
 "telat dari arsip. 12 × 6. tuntas", ("12 × 6 = 72", "12*6", "72"))

t(910, "Kelereng 8 merah 4 biru: satu tarik merah = 8/12 = 2/3. Temen sederhanakan 8/12 langsung — bagi 4. Susulan: biru? 4/12 = 1/3 ya? jumlah 1 pas. Cek dong",
 ["8/12 pas", "2/3 pas", "biru 1/3 pas", "jumlah 1 pas", "PR gue: 12 total, 8 merah", "iya pas", "susulan: sederhanakan bagi 4", "iya, mantra", "jawaban post semua kuku", "catet: bagian ÷ total", "iya, dasar", "jawaban post lengkap", "susulan: dua warna saling komplemen"],
 "telat dari arsip. kelereng 8-4. tuntas", ("8/12 = 2/3", "8/12", "0.6666666666666666"))

t(911, "5 hari 6 jam = 126 jam (5 × 24 + 6). Temen kali 5 × 6 — salah operand. Cek: 120 + 6. Susulan: 3 hari 9 jam? 81 ya? Cek dong",
 ["126 jam pas", "5 × 6 salah operand", "81 jam pas", "PR gue: hari × 24 + jam", "iya, rumus", "susulan: 126 jam = 5,25 hari", "iya, balik", "jawaban post semua kuku", "catet: campuran hari-jam", "iya, b31 juga", "jawaban post lengkap", "susulan: 0,25 hari = 6 jam"],
 "telat dari arsip. 5 hari 6 jam. tuntas", ("5 × 24 + 6 = 126", "5*24+6", "126"))

t(912, "8 × 19 = 152. Seratus lima puluh dua. Temen tulis 142 — salah 10. Cek: 8 × 19 = 8 × 20 − 8 = 152. Susulan: 19 × 9? 171 ya? Cek dong",
 ["152 pas", "142 salah 10", "171 pas", "PR gue: 160 − 8 rapi", "iya pas", "susulan: deket 20 dikurangi", "iya, trik", "jawaban post semua kuku", "catet: × 20 minus 8", "iya, dua langkah", "jawaban post lengkap", "susulan: 152 = 8 × 19"],
 "telat dari arsip. 8 × 19. tuntas", ("8 × 19 = 152", "8*19", "152"))

t(913, "Prima 180-200: 181, 191, 193, 197, 199 — lima. 183? habis 3 (digit sum 12). 189? habis 3 juga. 187? 11 × 17. Susulan: 199 prima terakhir sebelum 200 ya? Cek dong",
 ["lima prima pas", "183 habis 3 pas", "187 = 11 × 17 pas", "199 pas", "PR gue: digit sum cek cepat", "iya, hemat", "jawaban post semua kuku", "catet: √200 < 15, cek sampai 13", "iya, batas", "jawaban post lengkap", "susulan: 197 juga prima"],
 "telat dari arsip. prima 180-200. tuntas", ("prima 180-200 ada 5", "1*5", "5"))

t(914, "7/10 × 5/14 = 35/140 = ¼. Kali lurus lalu sederhana (bagi 35). Temen heran hasil kecil — dua pecahan di bawah 1. Susulan: 2/5 × 5/8? 10/40 = ¼ ya? Cek dong",
 ["35/140 pas", "¼ pas", "susulan ¼ pas lagi", "PR gue: coret 5 dan 5? eh 7/10 × 5/14: coret 7 & 14 → 7→1, 14→2", "iya, coret dulu", "jawaban post semua kuku", "catet: kali lalu sederhana", "iya, dua langkah", "jawaban post lengkap", "susulan: desimal 0,25"],
 "telat dari arsip. 7/10 × 5/14. tuntas", ("35/140 = 1/4", "35/140", "0.25"))

t(915, "5 × 31 = 155. Seratus lima puluh lima. Temen tulis 145 — salah 10. Cek: 5 × 31 = 5 × 30 + 5 = 155. Susulan: 31 × 6? 186 ya? Cek dong",
 ["155 pas", "145 salah 10", "186 pas", "PR gue: 150 + 5 rapi", "iya pas", "susulan: 31 prima", "iya pas", "jawaban post semua kuku", "catet: deket 30 ditambah", "iya, trik", "jawaban post lengkap", "susulan: 155 habis dibagi 5"],
 "telat dari arsip. 5 × 31. tuntas", ("5 × 31 = 155", "5*31", "155"))

t(916, "33² = 1.089. Seribu delapan puluh sembilan. Temen tulis 1.098 — kebalik. Cek: 33² = (30 + 3)² = 900 + 180 + 9. Susulan: 34²? 1.156 ya? Cek dong",
 ["1.089 pas", "1.098 kebalik", "1.156 pas", "PR gue: (30+3)² rapi", "iya pas", "susulan: 30² + 2×30×3 + 3²", "iya, rumus", "jawaban post semua kuku", "catet: kuadrat 30-an", "iya, tangga naik", "jawaban post lengkap", "susulan: 32² = 1.024 = 2¹⁰"],
 "telat dari arsip. 33² = 1.089. tuntas", ("33² = 1.089", "33*33", "1089"))

t(917, "3 × 51 = 153. Seratus lima puluh tiga — bilangan Armstrong! (1³ + 5³ + 3³ = 153). Temen baru nyambung ke b32. Susulan: 51 × 4? 204 ya? Cek dong",
 ["153 pas", "Armstrong pas", "204 pas", "PR gue: 150 + 3 rapi", "iya pas", "susulan: 153 = 9 × 17 juga", "iya pas", "jawaban post semua kuku", "catet: dua wajah bilangan", "iya, seru", "jawaban post lengkap", "susulan: Armstrong cuma 4 di 3 digit"],
 "telat dari arsip. 3 × 51. tuntas", ("3 × 51 = 153", "3*51", "153"))

t(918, "180 km dengan 90 km/j → 2 jam. Berangkat 06.30 → tiba 08.30. Temen tulis 08.02 — 2 jam, bukan 2 menit. Cek dong",
 ["2 jam pas", "08.30 pas", "08.02 salah satuan", "PR gue: jarak ÷ laju", "iya, rumus", "susulan: jam vs menit beda jauh", "iya, hati-hati", "jawaban post semua kuku", "catet: durasi lalu jumlah", "iya, dua langkah", "jawaban post lengkap", "susulan: 180 km jauh, siap istirahat"],
 "telat dari arsip. 180 km 90 km/j. tuntas", ("180/90 = 2 jam", "180/90", "2"))

t(919, "7x = 91 → x = 13. Bagi 7. Temen nanya kenapa 13 — 7 × 13 = 91 cek balik. Susulan: 6x = 78? x = 13 juga ya? kebetulan. Cek dong",
 ["x = 13 pas", "cek 7 × 13 = 91 pas", "susulan x = 13 lagi pas", "PR gue: cek balik wajib", "iya, selalu", "susulan: 91 = 7 × 13", "iya pas", "jawaban post semua kuku", "catet: bagi koefisien", "iya, dasar", "jawaban post lengkap", "susulan: 78 = 6 × 13 juga"],
 "telat dari arsip. 7x = 91. tuntas", ("91/7 = 13", "91/7", "13"))

t(920, "10 × 53 = 530. Lima ratus tiga puluh. Temen tulis 53 — kurang nol. Susulan: 53 × 5? 265 ya? Cek dong",
 ["530 pas", "53 kurang nol", "265 pas", "PR gue: × 10 tambah nol", "iya, geser", "susulan: 530 = 53 × 10", "iya pas", "jawaban post semua kuku", "catet: tangga nol", "iya, b34 juga", "jawaban post lengkap", "susulan: 530 = 2 × 5 × 53"],
 "telat dari arsip. 10 × 53. tuntas", ("10 × 53 = 530", "10*53", "530"))

t(921, "Keliling persegi panjang 46 → p + l = 23. Panjang 15 → lebar 8, luas 120. Tiga langkah: keliling → jumlah → masing-masing → luas. Susulan: panjang 18? lebar 5, luas 90 ya? Cek dong",
 ["23 pas", "lebar 8 pas", "luas 120 pas", "susulan 90 pas", "PR gue: setengah keliling dulu", "iya, kunci", "jawaban post semua kuku", "catet: tiga langkah sistematis", "iya, urutan", "jawaban post lengkap", "susulan: keliling 46 → 23 jumlah"],
 "telat dari arsip. keliling 46. tuntas", ("p + l = 23; 15 × 8 = 120", "15*8", "120"))

t(922, "11 × 13 = 143. Seratus empat puluh tiga. Temen tulis 133 — salah 10. Cek: 11 × 13 = 10 × 13 + 13 = 143. Susulan: 13 × 12? 156 ya? Cek dong",
 ["143 pas", "133 salah 10", "156 pas", "PR gue: 130 + 13 rapi", "iya pas", "susulan: 143 = 11 × 13", "iya pas", "jawaban post semua kuku", "catet: × 11 = + n dari × 10", "iya, trik 11", "jawaban post lengkap", "susulan: 143 = 13 × 11 palindrom gak? bukan"],
 "telat dari arsip. 11 × 13. tuntas", ("11 × 13 = 143", "11*13", "143"))

t(923, "4,2 jam = 4 jam 12 menit (0,2 × 60 = 12). Temen tulis 4j2m — salah konversi desimal lagi. Susulan: 2,4 jam? 2j24m ya? Cek dong",
 ["12 menit pas", "4j2m salah", "2j24m pas", "PR gue: 0,2 × 60 = 12", "iya, rumus", "susulan: 0,4 jam = 24 menit", "iya, dua kali", "jawaban post semua kuku", "catet: pecahan jam × 60", "iya, b34 juga", "jawaban post lengkap", "susulan: 0,75 jam = 45 mnt"],
 "telat dari arsip. 4,2 jam. tuntas", ("0,2 × 60 = 12 menit", "0.2*60", "12"))

t(924, "Median 10 data (genap) = rata nilai ke-5 dan ke-6. Contoh urut: 3,5,6,8,9,11,12,14,15,20 → median (9+11)/2 = 10. Temen ambil satu nilai — harus dua diratain. Susulan: ke-5 = 9, ke-6 = 13? median 11 ya? Cek dong",
 ["rata dua tengah pas", "10 pas", "susulan 11 pas", "PR gue: genap = dua tengah", "iya, aturan", "susulan: ganjil = satu tengah", "iya, dua kasus", "jawaban post semua kuku", "catet: urutkan dulu", "iya, wajib", "jawaban post lengkap", "susulan: 9 + 11 = 20, bagi 2"],
 "telat dari arsip. median genap 10. tuntas", ("(9 + 11)/2 = 10", "9+11", "20"))

t(925, "925 = 5² × 37. Faktorisasi: 925 ÷ 5 = 185, ÷ 5 lagi = 37 (prima). Temen berhenti di 185 — 5 × 37 masih tersisa. Cek dong",
 ["5² × 37 pas", "185 belum selesai", "37 prima pas", "PR gue: ekor 25 = habis dibagi 25", "iya, keterbagian", "jawaban post semua kuku", "catet: pecah sampai prima semua", "iya, b24 juga", "jawaban post lengkap", "susulan: 925 habis dibagi 25"],
 "telat dari arsip. faktorisasi 925. tuntas", ("925 = 25 × 37", "25*37", "925"))

assert len(T) == 25, len(T)
build2(T, 901, "threads-37.ts", 37, 33, 751, 37,
       "Topik: separuh 78, 14 dari 56, 6×19, keliling trapesium 32, 5×26, sisa 120rb, 7×21, rata delapan, 12×6, kelereng 8-4, 5 hari 6 jam, 8×19, prima 180-200, 7/10 × 5/14, 5×31, 33², 3×51 Armstrong, 180 km 90 km/j, 7x = 91, 10×53, keliling 46, 11×13, 4,2 jam, median genap 10, faktorisasi 925.")
print("threads-37 ok")
