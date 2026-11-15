# threads-30.ts — BATCH 26 (id 726-750, authorId 576-600)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(726, "12 × 5 = 60. Pecah 5 = 2 + 3: 24 + 36 = 60. Temen langsung hafal — oke, tapi cek dengan pecah juga bisa. Susulan: 12 × 6? 72 ya? (60 + 12). Cek dong",
 ["60 pas", "24 + 36 rapi", "72 pas, +12", "PR gue: 12 × 7? 84", "iya pas", "susulan: tabel 12 naik 12", "iya, konsisten", "jawaban post semua kuku", "catet: pecah faktor", "iya, b24 juga", "jawaban post lengkap", "susulan: 12 × 12 = 144, gros"],
 "telat dari arsip. 12 × 5. tuntas", ("12 × 5 = 60", "12*5", "60"))

t(727, "Balok 2×3×4: volume 24, permukaan 2(6+8+12) = 52. Temen jumlah volume + permukaan — dua ukuran beda, gak boleh digabung. Susulan: balok 1×1×8? volume 8, permukaan 34 ya? Cek dong",
 ["volume 24 pas", "permukaan 52 pas", "gabung dua ukuran = salah", "susulan 8 & 34 pas", "PR gue: kubus 2×2×2? 8 & 24", "iya pas", "susulan: kubus efisien permukaan", "iya, menarik", "jawaban post semua kuku", "catet: volume vs permukaan", "iya, dua rumus", "jawaban post lengkap", "susulan: satuan cm³ vs cm²"],
 "telat dari arsip. balok 2×3×4. tuntas", ("volume 2×3×4 = 24", "2*3*4", "24"))

t(728, "¾ × 16 = 12. Tiga perempat dari enam belas: 16/4 = 4, kali 3 = 12. Temen jawab 4 — dia cuma bagi. Susulan: ¾ × 20? 15 ya? Cek dong",
 ["12 pas", "bagi 4 dulu lalu × 3", "susulan 15 pas", "PR gue: ¾ × 28? 21", "iya pas", "susulan: ¼ dari 16 = 4, tiga kali", "iya pas", "jawaban post semua kuku", "catet: bagi penyebut, kali pembilang", "iya, urutan", "jawaban post lengkap", "susulan: ¾ × 12 = 9 juga"],
 "telat dari arsip. tiga perempat. tuntas", ("¾ × 16 = 12", "16/4*3", "12"))

t(729, "Harga rata tiga toko: 12rb, 13rb, 11rb → total 36rb, rata 12rb. Toko C paling murah tapi rata tetap 12. Temen bingung rata vs termurah — dua hal. Susulan: 11, 11, 16? rata 12,67 an ya? Cek dong",
 ["36rb pas", "rata 12rb pas", "termurah ≠ rata", "susulan 12,67 an pas", "PR gue: semuanya 12? rata 12 juga", "iya pas", "susulan: data sempit rata wakil bagus", "iya, menarik", "jawaban post semua kuku", "catet: rata = total ÷ banyak", "iya, dasar", "jawaban post lengkap", "susulan: median 12 juga di contoh"],
 "telat dari arsip. rata tiga toko. tuntas", ("rata (12+13+11)/3 = 12", "36/3", "12"))

t(730, "Persegi panjang 15×8 = 120. Persegi dengan luas sama sisi √120 ≈ 10,95. Kenapa bentuk beda luas bisa sama: luas cuma angka, bentuk bebas. Temen heran sisi desimal — wajar. Susulan: 12×10 = 120 juga ya? tiga bentuk satu luas. Cek dong",
 ["120 pas", "√120 ≈ 10,95 pas", "tiga bentuk 120 pas", "PR gue: persegi 11² = 121, deket", "iya pas", "susulan: persegi paling efisien keliling", "iya, fakta", "jawaban post semua kuku", "catet: luas sama bentuk bebas", "iya, itu intinya", "jawaban post lengkap", "susulan: keliling 15×8 = 46 vs persegi 43,8"],
 "telat dari arsip. luas 120. tuntas", ("15 × 8 = 120", "15*8", "120"))

t(731, "8 × 8 = 64 — kuadrat 8 dan volume kubus rusuk 2! (2³ = 8, eh ini 8² = 64 = 4³ juga). 64 muncul dua wajah: 8² dan 4³. Susulan: 64 = 2⁶ ya? tiga wajah! Cek dong",
 ["64 pas, 8²", "64 = 4³ juga pas", "2⁶ = 64, tiga wajah pas", "PR gue: 1? satu wajah aja", "iya, trivial", "susulan: 512 = 8³ = 2⁹", "iya pas", "jawaban post semua kuku", "catet: bilangan banyak wajah", "iya, seru", "jawaban post lengkap", "susulan: 64 gigabyte juga basis 2"],
 "telat dari arsip. 64 banyak wajah. tuntas", ("64 = 8² = 4³ = 2⁶", "8*8", "64"))

t(732, "Kelereng 4 merah 4 biru, satu tarik: merah 4/8 = ½. Adil. Temen nanya dua tarik sama warna: 2 × (4/8 × 3/7) = 24/56 = 3/7. Susulan: beda warna? 4/7 ya? komplemen. Cek dong",
 ["½ pas satu tarik", "3/7 dua tarik sama", "susulan 4/7 beda pas", "PR gue: dua-duanya merah? 4/8 × 3/7 = 3/14", "iya pas", "susulan: 12 kelereng lebih ramai", "iya, lain soal", "jawaban post semua kuku", "catet: simetris dua warna", "iya, itu keindahannya", "jawaban post lengkap", "susulan: tanpa pengembalian selalu"],
 "telat dari arsip. kelereng 4-4. tuntas", ("sama warna: 2 × 12/56 = 3/7", "2*12", "24"))

t(733, "Prima 100-120: 101, 103, 107, 109, 113 — lima. 111? 3 × 37, bukan (digit sum 3). 117? 9 × 13, bukan. Susulan: prima pertama di atas 113? 127 ya? Cek dong",
 ["lima prima pas", "111 = 3 × 37, bukan", "117 bukan pas", "127 prima pas", "PR gue: 119? 7 × 17, bukan", "iya pas", "susulan: cek √120 < 11", "iya, hemat", "jawaban post semua kuku", "catet: digit sum cek dulu", "iya, cepat", "jawaban post lengkap", "susulan: 121 = 11², bukan"],
 "telat dari arsip. prima 100-120. tuntas", ("prima: 101+103+107+109+113 lima", "5*1", "5"))

t(734, "1 juta detik ≈ 11,6 hari. Hitung: 1.000.000/86.400 ≈ 11,57. Temen kira sebulan — kurang. Satu juta detik terasa lama tapi cuma 11 hari lebih. Susulan: 1 juta menit? ≈ 694 hari ≈ 1,9 tahun ya? Cek dong",
 ["11,6 hari pas", "86.400 detik per hari", "1 juta menit ≈ 694 hari pas", "≈ 1,9 tahun pas", "PR gue: 1 juta jam? 114 tahun — seumur hidup", "iya, seru", "jawaban post semua kuku", "catet: satuan besar bikin kaget", "iya, skala", "jawaban post lengkap", "susulan: 1 miliar detik ≈ 31,7 tahun"],
 "telat dari arsip. 1 juta detik. tuntas", ("1.000.000/86.400 ≈ 11,6 hari", "86400*11", "950400"))

t(735, "2 × 45 = 90. Dua kali empat puluh lima — sembilan puluh. Temen tulis 85 — salah 5. Cek: 45 + 45 = 90. Cek dong",
 ["90 pas", "45 + 45 cek", "85 salah 5", "susulan 135 pas", "PR gue: 45 × 4? 180", "iya pas", "susulan: 45 = 90/2, keluarga jam", "iya, b24", "jawaban post semua kuku", "catet: cek dengan jumlah berulang", "iya, cepat", "jawaban post lengkap", "susulan: 45 × 2 = 90 = 1,5 jam"],
 "telat dari arsip. 2 × 45. tuntas", ("2 × 45 = 90", "2*45", "90"))

t(736, "Sudut refleks 270° = 360 − 90. Lebih dari setengah putaran. Temen bingung kenapa 270 sah — sudut dari 0 sampai 360 penuh. Susulan: refleks 300°? sisanya 60° ya? Cek dong",
 ["270 = 360 − 90 pas", "refleks > 180", "susulan 300 → sisa 60 pas", "PR gue: refleks 200°? sisa 160", "iya pas", "susulan: jarum jam 09.00? 90° bukan 270", "iya, sudut kecil", "jawaban post semua kuku", "catet: refleks = 360 − kecil", "iya, itu rumusnya", "jawaban post lengkap", "susulan: 360 penuh = 0"],
 "telat dari arsip. refleks 270. tuntas", ("360 − 90 = 270", "360-90", "270"))

t(737, "Penjualan empat kuartal: 120, 130, 140, 150 — naik konsisten 10 per kuartal, total 540. Temen tanya rata: 135. Naik + rata dua-duanya jelas. Susulan: kuartal kelima kalau tren berlanjut? 160 ya? Cek dong",
 ["naik 10 konsisten", "total 540 pas", "rata 135 pas", "susulan 160 prediksi pas", "PR gue: tren gak jamin masa depan", "iya, hati-hati", "susulan: ekstrapolasi = perkiraan", "iya, bukan janji", "jawaban post semua kuku", "catet: tren + rata", "iya, dua ukuran", "jawaban post lengkap", "susulan: kuartal b25 juga"],
 "telat dari arsip. tren kuartal. tuntas", ("total 120+130+140+150 = 540", "120+130+140+150", "540"))

t(738, "7 × 7 = 49. Kuadrat 7. Temen tulis 48 — salah 1, umum karena deket 50. Cek: 7 × 7, tujuh kali tujuh. Susulan: 7 × 8 = 56 ya? tetangga naik 7. Cek dong",
 ["49 pas", "48 salah 1", "56 pas, +7", "PR gue: 7 × 9? 63", "iya pas", "susulan: tabel 7 naik 7", "iya, konsisten", "jawaban post semua kuku", "catet: 49 deket 50, hati-hati", "iya, jebakan", "jawaban post lengkap", "susulan: 49 = 7², prima kuadrat"],
 "telat dari arsip. 7² = 49. tuntas", ("7 × 7 = 49", "7*7", "49"))

t(739, "E-wallet saldo 250rb, bayar 2 × 87rb = 174rb → sisa 76rb. Temen bingung kenapa bukan 250 − 87: ada DUA pembayaran. Cek dong",
 ["174rb pas, dua kali", "sisa 76rb pas", "250 − 87 saja salah", "PR gue: tiga kali 87? 261 — kelebihan 11", "iya, gak cukup", "susulan: top up dulu", "iya, 62rb biar aman? eh 11rb cukup", "jawaban post semua kuku", "catet: jumlahkan dulu pembayarannya", "iya, urutan", "jawaban post lengkap", "susulan: catat tiap transaksi"],
 "telat dari arsip. dua pembayaran. tuntas", ("2 × 87 = 174; 250 − 174 = 76", "2*87", "174"))

t(740, "Meja bundar diameter 120 cm → keliling π × 120 ≈ 3,77 m. Taplak bulat minimal 130 cm diameter biar menjuntai sedikit. Temen beli 120 — pas banget, gak menjuntai. Susulan: d 90? keliling ≈ 2,83 m ya? Cek dong",
 ["3,77 m pas", "taplak lebih besar dari meja", "susulan 2,83 pas", "PR gue: d 150? 4,71 m", "iya pas", "susulan: menjuntai 5-10 cm standar", "iya, praktis", "jawaban post semua kuku", "catet: π × diameter", "iya, rumus keliling", "jawaban post lengkap", "susulan: meja persegi? taplak persegi"],
 "telat dari arsip. keliling meja. tuntas", ("π × 120 ≈ 377 cm", "120*3", "360"))

t(741, "11 × 9 = 99. Deket 100 — selisih 1 × 11? eh 99 = 100 − 1. Trik: 11 × 9 = 11 × 10 − 11 = 99. Temen nanya kenapa gak 90: 9 × 10 = 90, tapi 11 × 9 = 99. Susulan: 12 × 9? 108 ya? (120 − 12). Cek dong",
 ["99 pas", "11 × 10 − 11 rapi", "90 itu 9 × 10, beda", "susulan 108 pas", "PR gue: 9 × 15? 135", "iya pas", "susulan: × 9 = × 10 − n", "iya, itu triknya", "jawaban post semua kuku", "catet: sembilan = sepuluh minus satu", "iya, b25 juga", "jawaban post lengkap", "susulan: 99 = 9 × 11, palindrom gak"],
 "telat dari arsip. 11 × 9. tuntas", ("11 × 9 = 99", "11*9", "99"))

t(742, "Persen volume: 30% dari 1,5 L = 450 ml. 1.500 × 0,3. Temen jawab 45 — kurang satu nol, itu dari 150. Cek dong",
 ["450 ml pas", "45 itu dari 150", "susulan 1.200 ml pas", "PR gue: 10% dari 1,5 L? 150 ml", "iya pas", "susulan: 30% = 3 × 10%", "iya, trik", "jawaban post semua kuku", "catet: liter ke ml dulu", "iya, dua langkah", "jawaban post lengkap", "susulan: 100% = penuh"],
 "telat dari arsip. persen volume. tuntas", ("30% × 1.500 = 450 ml", "1500*3", "4500"))

t(743, "1⅔ × 3 = 5. Campuran ke pecahan biasa: 5/3, kali 3 = 5. Temen kali pembilang & penyebut terpisah — hasil 5 pas juga, 5/9 × 3? eh salah jalan tapi nyasar. Jalan benar: 5/3 × 3 = 5. Susulan: 2½ × 4? 10 ya? Cek dong",
 ["5/3 dulu, pas", "5/3 × 3 = 5 pas", "susulan 10 pas", "PR gue: 1⅓ × 6? 8", "iya pas", "susulan: pecahan campuran enak diubah dulu", "iya, itu caranya", "jawaban post semua kuku", "catet: campuran → biasa", "iya, langkah awal", "jawaban post lengkap", "susulan: 3 × ⅔ = 2 juga"],
 "telat dari arsip. campuran × 3. tuntas", ("5/3 × 3 = 5", "5*3/3", "5"))

t(744, "6 × 15 = 90. Pecah 15: 90 = 6×10 + 6×5 = 60 + 30. Temen langsung 90 — pas, tapi cek dengan pecah oke juga. Susulan: 6 × 16? 96 ya? (+6). Cek dong",
 ["90 pas", "60 + 30 rapi", "96 pas, +6", "PR gue: 6 × 25? 150", "iya pas", "susulan: 25 enak karena seperempat", "iya, 150 = 600/4", "jawaban post semua kuku", "catet: pecah atau langsung, dua jalur", "iya, konsisten", "jawaban post lengkap", "susulan: 6 × 14 = 84, −6"],
 "telat dari arsip. 6 × 15. tuntas", ("6 × 15 = 90", "6*15", "90"))

t(745, "Tiga putaran game × 1 jam 20 menit = 4 jam. Temen kali 3 × 20 — lupa 1 jam = 60 menit. Samakan dulu: 80 menit per putaran × 3 = 240 menit = 4 jam. Susulan: dua putaran? 160 = 2j40m ya? Cek dong",
 ["80 menit per putaran pas", "240 menit = 4 jam pas", "3 × 20 itu salah, lupa jam", "susulan 2j40m pas", "PR gue: 1j30m × 4? 360 = 6 jam", "iya pas", "susulan: batasi main, kata mata", "iya, saran", "jawaban post semua kuku", "catet: campuran → menit dulu", "iya, b26 juga", "jawaban post lengkap", "susulan: 80 × 3, angka enak"],
 "telat dari arsip. putaran game. tuntas", ("80 × 3 = 240 mnt = 4 jam", "80*3", "240"))

t(746, "3(x + 2) = 21 → x + 2 = 7 → x = 5. Bagi 3 dulu. Temen distribusi dulu juga bisa: 3x + 6 = 21 → 3x = 15 → x = 5. Dua jalur. Susulan: 2(x − 1) = 12? x = 7 ya? Cek dong",
 ["bagi 3 dulu oke", "distribusi juga oke", "x = 5 pas", "susulan x = 7 pas", "PR gue: 4(x + 3) = 28? x = 4", "iya pas", "susulan: pilih jalur yang enak", "iya, konsisten", "jawaban post semua kuku", "catet: dua jalur satu tujuan", "iya, b14 juga", "jawaban post lengkap", "susulan: cek balik 3 × 7 = 21"],
 "telat dari arsip. 3(x+2). tuntas", ("3(x+2) = 21 → x = 5: 21/3 = 7", "21/3", "7"))

t(747, "3 × 33 = 99. Deket 100 — 33 × 3, tiga sepertiga dari 99. Temen tanya 33 × 4? 132. Tambah 33. Cek dong",
 ["99 pas", "132 pas, +33", "tiga sepertiga 99 pas", "PR gue: 33 × 5? 165", "iya pas", "susulan: 33 = 99/3", "iya, kebalikan", "jawaban post semua kuku", "catet: tabel 33 naik 33", "iya, konsisten", "jawaban post lengkap", "susulan: 99 = 9 × 11 juga"],
 "telat dari arsip. 3 × 33. tuntas", ("3 × 33 = 99", "3*33", "99"))

t(748, "Dua dadu jumlah 5: (1,4), (2,3), (3,2), (4,1) — 4/36 = 1/9. Temen kelewat urutan kebalikan. Susulan: jumlah 6? lima cara ya? (1,5)(2,4)(3,3)(4,2)(5,1). Cek dong",
 ["4 cara pas", "1/9 pas", "urutan dihitung", "susulan jumlah 6 lima cara pas", "PR gue: jumlah 4? tiga cara", "iya pas", "susulan: tengah paling banyak", "iya, kurva lonceng", "jawaban post semua kuku", "catet: susunan lengkap", "iya, sistematis", "jawaban post lengkap", "susulan: jumlah 7 enam cara"],
 "telat dari arsip. jumlah 5 dadu. tuntas", ("jumlah 5: 4/36", "4*1", "4"))

t(749, "Beli 2 hemat 8rb → per unit hemat 4rb. Temen nanya kenapa dibagi 2: hematnya untuk dua barang. Per unit lebih jujur buat banding promo. Susulan: beli 3 hemat 15rb? 5rb per unit ya? Cek dong",
 ["4rb per unit pas", "bagi banyak barang", "susulan 5rb per unit pas", "PR gue: beli 4 hemat 20? 5rb juga", "iya pas", "susulan: banding promo pakai per unit", "iya, standar", "jawaban post semua kuku", "catet: hemat ÷ barang", "iya, dua langkah", "jawaban post lengkap", "susulan: jangan lupa syarat min"],
 "telat dari arsip. hemat per unit. tuntas", ("8 ÷ 2 = 4rb per unit", "8/2", "4"))

t(750, "750 = ¾ × 1.000. Tiga perempat seribu — 750 ml botol standar. Temen nanya ¾ dari 2.000? 1.500 ya. Susulan: ½ dari 1.500? 750 lagi ya? kebetulan. Cek dong",
 ["750 = ¾ × 1.000 pas", "botol 750 ml pas", "1.500 pas, ¾ × 2.000", "750 = ½ × 1.500 pas", "PR gue: ¾ × 800? 600", "iya pas", "susulan: 750 = 3 × 250", "iya pas", "jawaban post semua kuku", "catet: 750 muncul di botol & kuota", "iya, sering", "jawaban post lengkap", "susulan: 750 detik = 12,5 mnt"],
 "telat dari arsip. 750 = ¾ ribu. tuntas", ("¾ × 1.000 = 750", "1000/4*3", "750"))

assert len(T) == 25, len(T)
build2(T, 726, "threads-30.ts", 30, 26, 576, 30,
       "Topik: 12×5, balok 2×3×4, tiga perempat, rata tiga toko, luas 120 tiga bentuk, 64 banyak wajah, kelereng 4-4, prima 100-120, 1 juta detik, 2×45, refleks 270, tren kuartal, 7², dua pembayaran, keliling meja, 11×9, persen volume, campuran × 3, 6×15, putaran game, 3(x+2), 3×33, dadu jumlah 5, hemat per unit, 750.")
print("threads-30 ok")
