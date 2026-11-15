# threads-31.ts — BATCH 27 (id 751-775, authorId 601-625)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(751, "½ × 26 = 13. Dua belas... eh dua puluh enam dibagi dua. Temen jawab 12 — cek 13 × 2 = 26 pas. Susulan: ½ × 34? 17 ya? Cek dong",
 ["13 pas", "12 × 2 = 24, kurang", "susulan 17 pas", "PR gue: ½ × 50? 25", "iya pas", "susulan: 26 = 2 × 13 prima 13", "iya pas", "jawaban post semua kuku", "catet: separuh bagi 2", "iya dasar"],
 "telat dari arsip. separuh 26. tuntas", ("½ × 26 = 13", "26/2", "13"))

t(752, "Kelereng 6 merah 6 biru, dua tarik tanpa pengembalian, sama warna: 2 × (6/12 × 5/11) = 60/132 = 5/11. Temen lupa faktor dua arah. Susulan: beda warna? 6/11 ya? komplemen. Cek dong",
 ["5/11 pas", "dua arah dijumlah", "12 kelereng simetris", "susulan 6/11 pas", "PR gue: dua-duanya merah? 30/132 = 5/22", "iya pas", "susulan: tanpa pengembalian 12-11", "iya, b25 juga", "jawaban post semua kuku", "catet: sama + beda = 1", "iya, cek 5/11 + 6/11"],
 "telat dari arsip. kelereng 6-6. tuntas", ("sama warna: 2 × 30/132 = 5/11", "2*30", "60"))

t(753, "9 × 11 = 99. Trik 11: 9 × 10 + 9 = 99. Temen nanya 12 × 11? 132 (12 × 10 + 12). Naik 11 per langkah. Cek dong",
 ["99 pas", "132 pas", "naik 11 konsisten", "PR gue: 11 × 11? 121", "iya pas", "susulan: tabel 11 enak", "iya, b28 juga", "jawaban post semua kuku", "catet: × 11 = × 10 + n", "iya, itu triknya"],
 "telat dari arsip. 9 × 11. tuntas", ("9 × 11 = 99", "9*11", "99"))

t(754, "Tripel 8-15-17: 64 + 225 = 289 = 17². Segitiga siku sah tanpa mengukur sudut. Temen nanya asal tripel: keluarga k = 3-4-5 gak semua, ada keluarga lain. Susulan: 20-21-29? 400 + 441 = 841 = 29² ya? Cek dong",
 ["289 pas, 17²", "tripel keluarga lain ada", "susulan 841 pas", "PR gue: 7-24-25? 49 + 576 = 625", "iya pas", "susulan: tripel cuma segitiga siku", "iya, definisi", "jawaban post semua kuku", "catet: banyak keluarga tripel", "iya, makin ramai", "jawaban post lengkap", "susulan: 9-40-41 juga ada"],
 "telat dari arsip. tripel 8-15-17. tuntas", ("8² + 15² = 64 + 225 = 289", "64+225", "289"))

t(755, "28 Februari → 1 Maret: geser SATU hari (Februari 28 hari, non-kabisat). Temen ngeser 2 — itu tahun kabisat. Cek dong",
 ["geser 1 pas", "2 hari itu kabisat", "PR gue: 2028 kabisat? ya", "iya pas", "susulan: 29 Februari ada di kabisat", "iya, sekali 4 tahun", "jawaban post semua kuku", "catet: Februari 28/29", "iya, dua kasus"],
 "telat dari arsip. Februari geser. tuntas", ("28 Feb → 1 Mar = 1 hari", "28+1", "29"))

t(756, "Wifi rumah: 3 perangkat × 2 GB per hari = 6 GB per hari, sebulan ≈ 180 GB. Temen heran kok paket 100 GB abis — karena tiga perangkat! Susulan: dua perangkat? 4 GB/hari ≈ 120 GB ya? Cek dong",
 ["6 GB per hari pas", "180 GB per bulan pas", "tiga perangkat = tiga kali", "susulan 120 GB pas", "PR gue: 4 perangkat? 8 GB/hari", "iya pas", "susulan: batasi jam pakai", "iya, saran", "jawaban post semua kuku", "catet: perangkat × pemakaian", "iya, dua faktor", "jawaban post lengkap", "susulan: video paling boros"],
 "telat dari arsip. wifi perangkat. tuntas", ("3 × 2 = 6 GB/hari", "3*2", "6"))

t(757, "Rata empat nilai 65 → total 260. Tiga diketahui 60, 70, 75 (jumlah 205) → keempat 55. Temen salah jumlah 3 nilai jadi 200 — kelebihan 5. Susulan: rata 70, tiga diketahui 65, 68, 72 (205)? keempat 75 ya? (280 − 205). Cek dong",
 ["total 260 pas", "205 pas", "55 pas", "susulan 75 pas", "PR gue: cek rata ulang (205+55)/4 = 65", "iya, selalu", "jawaban post semua kuku", "catet: rata × banyak = total", "iya, b24 juga", "jawaban post lengkap", "susulan: dua hilang? dua persamaan"],
 "telat dari arsip. rata empat. tuntas", ("total 4 × 65 = 260", "4*65", "260"))

t(758, "4 × 25 = 100. Empat perempat seribu... eh empat dua-puluh-lima. Koin 25 empat koin = 100rb? eh 100 rupiah koin lama. Susulan: 8 × 25? 200 ya? Cek dong",
 ["100 pas", "8 × 25 = 200 pas", "PR gue: 12 × 25? 300", "iya pas", "susulan: 25 = 100/4", "iya, kebalikan", "jawaban post semua kuku", "catet: × 25 = × 100/4", "iya, itu triknya"],
 "telat dari arsip. 4 × 25. tuntas", ("4 × 25 = 100", "4*25", "100"))

t(759, "Persegi panjang panjang 3 × lebar, panjang 24 → lebar 8, luas 192. Temen hitung luas 24 × 8 = 192 pas tapi lupa cek panjang 3 × lebar: 24 = 3 × 8 ✓. Susulan: panjang 27? lebar 9, luas 243 ya? Cek dong",
 ["lebar 8 pas", "192 pas", "24 = 3 × 8 cek", "susulan 243 pas", "PR gue: panjang 30? lebar 10, luas 300", "iya pas", "susulan: keliling? 2 × 32 = 64", "iya pas", "jawaban post semua kuku", "catet: dua syarat, dua langkah", "iya, sistematis", "jawaban post lengkap", "susulan: persegi? 3l = l gak mungkin"],
 "telat dari arsip. 3 kali lebar. tuntas", ("3 × 8 = 24; luas 192", "24*8", "192"))

t(760, "Lahir 2010 → 2026 umur 16. KTP bisa diambil umur 17 → 2027. Temen heran kok temennya masih gak bisa buat KTP: umur 16, tahun depan baru cukup. Susulan: lahir 2009? umur 17 sekarang, bisa ya? Cek dong",
 ["16 pas", "KTP 17 tahun pas", "2027 bisa", "susulan 2009 bisa sekarang pas", "PR gue: lahir Desember 2009? masih 16 sampai ultahnya", "iya, tepat hari", "jawaban post semua kuku", "catet: tahun − lahir, cek bulan", "iya, b16 juga", "jawaban post lengkap", "susulan: e-KTP online juga"],
 "telat dari arsip. umur KTP. tuntas", ("2026 − 2010 = 16", "2026-2010", "16"))

t(761, "Prima terbesar di bawah 200 adalah 199. Cek cepat: 199 gak habis 2, 3, 5, 7, 11, 13 (√199 ≈ 14,1). Temen tanya 197? prima juga, tapi 199 lebih besar. Cek dong",
 ["199 prima pas", "cek sampai 13 pas", "197 prima tapi lebih kecil", "PR gue: prima pertama > 200? 211", "iya pas", "susulan: daftar 190-an: 191, 193, 197, 199", "iya, empat", "jawaban post semua kuku", "catet: akar batas cek", "iya, b19 juga", "jawaban post lengkap", "susulan: 201 = 3 × 67, bukan"],
 "telat dari arsip. prima 199. tuntas", ("√199 ≈ 14,1: 14 × 14 = 196", "14*14", "196"))

t(762, "2 × 60 = 120. Dua jam = 120 menit. Temen nulis 102 — angka kebalik, sering. Cek: 60 + 60. Susulan: 3 jam? 180 ya? Cek dong",
 ["120 pas", "102 itu kebalik", "180 pas", "PR gue: 1,5 jam? 90", "iya pas", "susulan: tulis pelan, cek balik", "iya, disiplin", "jawaban post semua kuku", "catet: jam × 60", "iya, dasar", "jawaban post lengkap", "susulan: 2j30m = 150 mnt"],
 "telat dari arsip. 2 × 60. tuntas", ("2 × 60 = 120 mnt", "2*60", "120"))

t(763, "Akar 625 = 25 (25² = 625) dan akar 441 = 21 (21² = 441). Dua kuadrat dari tabel 20-an. Temen nanya 529? akar 23. Cek dong",
 ["25² = 625 pas", "21² = 441 pas", "23² = 529 pas", "PR gue: 22²? 484", "iya pas", "susulan: hafal tabel 20-25", "iya, b24 juga", "jawaban post semua kuku", "catet: kuadrat dua digit 20-an", "iya, itu daftarnya", "jawaban post lengkap", "susulan: 24² = 576"],
 "telat dari arsip. akar 625 & 441. tuntas", ("25² = 625; 21² = 441", "25*25", "625"))

t(764, "5/6 × 3/10 = 15/60 = ¼. Kali lurus lalu sederhanakan. Temen heran kok hasil kecil — dua pecahan di bawah 1, kali ya makin kecil. Susulan: 2/3 × 3/4? 6/12 = ½ ya? Cek dong",
 ["15/60 pas", "¼ pas", "kali pecahan makin kecil", "susulan ½ pas", "PR gue: 3/5 × 5/6? 15/30 = ½", "iya pas", "susulan: coret silang lebih cepet", "iya, 5 dan 5 coret", "jawaban post semua kuku", "catet: kali lalu sederhana", "iya, dua langkah", "jawaban post lengkap", "susulan: coret sebelum kali juga sah"],
 "telat dari arsip. 5/6 × 3/10. tuntas", ("5/6 × 3/10 = 15/60 = 1/4", "15/60", "0.25"))

t(765, "15² = 225. Kuadrat 15 — trik ujung 5: 1 × 2 lalu tulis 25 → 225. Temen pakai 15 × 15 panjang juga sah. Susulan: 25²? 625 ya? trik ujung 5 lagi. Cek dong",
 ["225 pas", "trik ujung 5 jalan", "625 pas", "PR gue: 35²? 1.225", "iya pas", "susulan: 45² = 2.025, ikonik", "iya, b27", "jawaban post semua kuku", "catet: ujung 5 → n(n+1) + 25", "iya, itu triknya", "jawaban post lengkap", "susulan: 5² = 25 pun jalan"],
 "telat dari arsip. 15² = 225. tuntas", ("15² = 225", "15*15", "225"))

t(766, "Nilai 75 dari target 90 → 75/90 = 83,3% pencapaian. Temen nanya kenapa bukan 90/75: pencapaian = yang dicapai ÷ target. Susulan: 88 dari 80 target? 110% — lewat target ya? Cek dong",
 ["83,3% pas", "capai ÷ target", "susulan 110% pas, lewat", "PR gue: 90 dari 90? 100% tepat", "iya pas", "susulan: 90/75 kebalik jadi 120", "iya, jangan tukar", "jawaban post semua kuku", "catet: atas bawah yang jelas", "iya, itu kuncinya", "jawaban post lengkap", "susulan: lewat target bukan salah"],
 "telat dari arsip. pencapaian. tuntas", ("75/90 ≈ 83,3%", "75/90", "0.8333333333333334"))

t(767, "Tripel 20-21-29: 400 + 441 = 841 = 29². Tripel dengan sisi berurutan 20 dan 21 — jarang. Keliling 70. Susulan: 12-35-37? 144 + 1.225 = 1.369 = 37² ya? Cek dong",
 ["841 pas", "keliling 70 pas", "sisi berurutan jarang", "susulan 1.369 pas", "PR gue: 9-40-41? 81 + 1.600 = 1.681", "iya pas", "jawaban post semua kuku", "catet: keluarga tripel luas", "iya, b27 juga", "jawaban post lengkap", "susulan: cek ketaksamaan dulu"],
 "telat dari arsip. tripel 20-21-29. tuntas", ("20² + 21² = 841 = 29²", "400+441", "841"))

t(768, "3 × 40 = 120. Tiga sesi empat puluh menit. Temen nulis 130 — salah 10. Cek: 40 + 40 + 40. Susulan: 40 × 5? 200 ya? Cek dong",
 ["120 pas", "130 salah 10", "200 pas", "PR gue: 40 × 10? 400", "iya pas", "susulan: 4 × 40 = 160", "iya pas", "jawaban post semua kuku", "catet: jumlah berulang", "iya, cepat", "jawaban post lengkap", "susulan: 120 mnt = 2 jam"],
 "telat dari arsip. 3 × 40. tuntas", ("3 × 40 = 120", "3*40", "120"))

t(769, "Prisma segiempat alas 5×6, tinggi 9 → volume 30 × 9 = 270. Rumus prisma: luas alas × tinggi prisma. Temen kali tiga dimensi langsung — kebetulan hasil sama untuk prisma! Tapi jalan benar tetap lewat luas alas. Susulan: alas 4×8, tinggi 5? 160 ya? Cek dong",
 ["270 pas", "30 × 9 rapi", "kebetulan sama untuk prisma", "susulan 160 pas", "PR gue: alas 7×2, tinggi 10? 140", "iya pas", "susulan: satuan cm³", "iya, selalu", "jawaban post semua kuku", "catet: luas alas × tinggi", "iya, rumus prisma", "jawaban post lengkap", "susulan: setengah? limas, bagi 3"],
 "telat dari arsip. prisma segiempat. tuntas", ("5×6×9 = 270", "5*6*9", "270"))

t(770, "Cash 100rb, bayar 62rb dan 25rb → sisa 13rb. Temen hitung 100 − 62 = 38 lalu 38 − 25 = 13 pas — dua langkah juga oke. Susulan: bayar ketiga 15rb? 13 − 15 = −2, kurang 2rb ya? Cek dong",
 ["sisa 13rb pas", "dua langkah juga pas", "−2 berarti kurang", "PR gue: gak jadi bayar ketiga? aman 13rb", "iya pas", "susulan: minus saldo = hutang", "iya, b12 utang", "jawaban post semua kuku", "catet: sisa berkurang tiap bayar", "iya, urutan", "jawaban post lengkap", "susulan: cek sebelum bayar ketiga"],
 "telat dari arsip. sisa cash. tuntas", ("100 − 62 − 25 = 13rb", "100-62-25", "13"))

t(771, "10 × 30 = 300. Tiga ratus. Temen nanya 10 × 33? 330. Naik 30 per langkah. Cek dong",
 ["300 pas", "330 pas", "PR gue: 10 × 27? 270", "iya pas", "susulan: × 10 tambah nol", "iya, geser", "jawaban post semua kuku", "catet: tabel 10 gampang", "iya, dasar", "jawaban post lengkap", "susulan: 30 × 10 sama 300"],
 "telat dari arsip. 10 × 30. tuntas", ("10 × 30 = 300", "10*30", "300"))

t(772, "90 hari ≈ 3 bulan (3 × 30). Bukan persis — bulan 28-31 hari, tapi aproksimasi 30 standar. Temen nanya 365 ÷ 12 = 30,42 — rata bulan. Cek dong",
 ["3 × 30 = 90 pas", "bulan 28-31, aproksimasi", "30,42 rata bulan pas", "PR gue: 1 tahun = 52,14 pekan", "iya pas", "susulan: aproksimasi bukan pasti", "iya, sebut itu", "jawaban post semua kuku", "catet: 30 hari per bulan kasar", "iya, umum dipakai", "jawaban post lengkap", "susulan: kabisat 366"],
 "telat dari arsip. 90 hari. tuntas", ("3 × 30 = 90 hari", "3*30", "90"))

t(773, "Dek: kartu ANGKA (As sampai 10) satu suit = 10 dari 13 → 10/13 ≈ 76,9%. Kartu gambar (J-Q-K) cuma 3 per suit. Temen kira angka lebih jarang — kebalik. Susulan: dua suit angka? 20/26 = 10/13 juga ya? Cek dong",
 ["10/13 pas", "gambar cuma 3 per suit", "angka mayoritas pas", "susulan 20/26 = 10/13 pas", "PR gue: kartu gambar? 3/13", "iya pas", "susulan: As dihitung angka di sini", "iya, kesepakatan", "jawaban post semua kuku", "catet: hitung kategori dulu", "iya, dua langkah", "jawaban post lengkap", "susulan: 10/13 ≈ 0,769"],
 "telat dari arsip. kartu angka. tuntas", ("10/13 ≈ 0,769", "10/13", "0.7692307692307693"))

t(774, "3 hari 4 jam = 76 jam (3 × 24 + 4). Temen kali 3 × 4 — salah operand. Susulan: 2 hari 10 jam? 58 ya? Cek dong",
 ["76 jam pas", "3 × 4 salah operand", "58 pas", "PR gue: 5 hari 8 jam? 128", "iya pas", "susulan: jam × 24 balik", "iya, b24 juga", "jawaban post semua kuku", "catet: hari × 24 + jam", "iya, dua komponen", "jawaban post lengkap", "susulan: 76 jam = 3,17 hari"],
 "telat dari arsip. 3 hari 4 jam. tuntas", ("3 × 24 + 4 = 76 jam", "3*24+4", "76"))

t(775, "5 × 45 = 225. Lima kali empat puluh lima — 225. Temen nulis 215 — salah 10. Cek: 45 × 5 = 200 + 25. Susulan: 45 × 6? 270 ya? Cek dong",
 ["225 pas", "215 salah 10", "270 pas", "PR gue: 45 × 10? 450", "iya pas", "susulan: 45 = 90/2, dua jalur", "iya, b26", "jawaban post semua kuku", "catet: pecah 40 + 5", "iya, 180 + 45", "jawaban post lengkap", "susulan: 225 = 15² juga"],
 "telat dari arsip. 5 × 45. tuntas", ("5 × 45 = 225", "5*45", "225"))

assert len(T) == 25, len(T)
build2(T, 751, "threads-31.ts", 31, 27, 601, 31,
       "Topik: separuh 26, kelereng 6-6, 9×11, tripel 8-15-17, Februari geser, wifi perangkat, rata empat, 4×25, 3 kali lebar, umur KTP, prima 199, 2×60, akar 625-441, 5/6 × 3/10, 15², pencapaian, tripel 20-21-29, 3×40, prisma segiempat, sisa cash, 10×30, 90 hari, kartu angka, 3 hari 4 jam, 5×45.")
print("threads-31 ok")
