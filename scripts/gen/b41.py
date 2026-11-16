# threads-41.ts — BATCH 37 (id 1001-1025, authorId 501-525)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1001, "½ × 102 = 51. Genap rapi, hasil prima 51? eh 51 = 3 × 17, komposit. Temen baru sadar. Susulan: ½ × 110? 55 ya? Cek dong",
 ["51 pas", "51 = 3 × 17, komposit", "susulan 55 pas", "PR gue: 55 = 5 × 11", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 102 = 2 × 3 × 17"],
 "telat dari arsip. separuh 102. tuntas", ("102/2 = 51", "102/2", "51"))

t(1002, "Kerja bersama: A selesai 4 jam, B selesai 6 jam. Bareng: 1/4 + 1/6 = 5/12 per jam → 12/5 = 2,4 jam. Temen heran bukan 5 — gabung lebih cepet dari masing-masing. Susulan: A 3, B 6? 2 jam ya? Cek dong",
 ["5/12 per jam pas", "12/5 = 2,4 jam pas", "gabung lebih cepet pas", "susulan 2 jam pas", "PR gue: A 2, B 6? 1,5 jam", "iya, 2/3 per jam", "jawaban post semua kuku", "catet: jumlah laju, bukan jumlah waktu", "iya, itu kuncinya", "jawaban post lengkap", "susulan: 2,4 jam = 2j24m"],
 "telat dari arsip. kerja bersama. tuntas", ("1/4 + 1/6 = 5/12 → 12/5 jam", "4+6", "10"))

t(1003, "KPK 12 dan 18 = 36. Kelipatan 12: 12, 24, 36. Kelipatan 18: 18, 36. Bertemu di 36. Temen jawab 72 — 36 lebih kecil dan sudah sama. Susulan: KPK 8 dan 12? 24 ya? Cek dong",
 ["36 pas", "72 bukan KPK, kelebihan", "susulan 24 pas", "PR gue: KPK 6 dan 9? 18", "iya pas", "susulan: faktor prima 12 = 2² × 3, 18 = 2 × 3²", "iya, ambil pangkat max", "jawaban post semua kuku", "catet: KPK = pangkat tertinggi", "iya, itu rumusnya", "jawaban post lengkap", "susulan: 36 = 2² × 3²"],
 "telat dari arsip. KPK 12-18. tuntas", ("KPK 12, 18 = 36", "12*3", "36"))

t(1004, "Bilangan segitiga: 1+2+3+...+10 = 55. Rumus n(n+1)/2: 10 × 11/2. Temen nanya gunanya: baris bertingkat, susun kelereng 1-2-3. Susulan: T12? 78 ya? (12 × 13/2). Cek dong",
 ["55 pas", "n(n+1)/2 pas", "susulan 78 pas", "PR gue: T20? 210", "iya pas", "susulan: 55 = T10, dua digit kembar", "iya, seru", "jawaban post semua kuku", "catet: segitiga = jumlah berurutan", "iya, definisi", "jawaban post lengkap", "susulan: 1..10 juga 55"],
 "telat dari arsip. T10 = 55. tuntas", ("T10 = 10 × 11/2 = 55", "10*11/2", "55"))

t(1005, "Fibonacci: 1, 1, 2, 3, 5, 8, 13 — dua sebelumnya dijumlah. Berikutnya 21. Temen tanya asal pola: muncul di kotak spiral dan kelipatan kelinci versi buku lama. Susulan: 21 + 13? eh setelah 21 = 34 ya? Cek dong",
 ["21 pas", "dua sebelumnya dijumlah", "34 pas", "PR gue: 8 + 13 = 21 cek", "iya pas", "susulan: 13 = 5 + 8", "iya pas", "jawaban post semua kuku", "catet: mulai dari dua angka", "iya, syaratnya", "jawaban post lengkap", "susulan: 34 = 21 + 13"],
 "telat dari arsip. Fibonacci 21. tuntas", ("8 + 13 = 21", "8+13", "21"))

t(1006, "9 × 12 = 108. Seratus delapan. Temen tulis 98 — salah 10. Cek: 9 × 12 = 9 × 10 + 9 × 2 = 108. Susulan: 12 × 9 sama 108 ya? komutatif. Cek dong",
 ["108 pas", "98 salah 10", "komutatif pas", "PR gue: 108 = 4 × 27 juga", "iya pas", "susulan: 108 = sudut segi-5 beraturan", "iya, b29 juga", "jawaban post semua kuku", "catet: pecah 10 + 2", "iya, standar", "jawaban post lengkap", "susulan: digit sum 108 = 9"],
 "telat dari arsip. 9 × 12. tuntas", ("9 × 12 = 108", "9*12", "108"))

t(1007, "2^10 = 1.024, bukan 1.000. Seribu = 10³; seribu DUA PULUH EMPAT = 2^10. Temen kecampur dua basis. Keluarga 2: 2, 4, 8, ..., 1.024 (10 kali lipat dua). Susulan: 2^11? 2.048 ya? Cek dong",
 ["1.024 pas", "1.000 = 10³, beda keluarga", "2.048 pas", "PR gue: 2^12? 4.096", "iya pas", "susulan: 1.024 = 32² juga", "iya, b33 juga", "jawaban post semua kuku", "catet: pangkat 2 tangganya sendiri", "iya, basis 2", "jawaban post lengkap", "susulan: 1.024 GB = 1 TB basis 2"],
 "telat dari arsip. 2^10 = 1.024. tuntas", ("2^10 = 1.024", "1024*1", "1024"))

t(1008, "Heksadesimal: A = 10, F = 15. Satu digit heksa isi 0-15. Temen bingung kenapa ada huruf — habis digit tunggal, lanjut huruf. Cek dong",
 ["A = 10 pas", "F = 15 pas", "huruf isi 10-15 pas", "PR gue: B? 11", "iya pas", "susulan: 16 basis, 4 bit per digit", "iya, keluarga biner", "jawaban post semua kuku", "catet: heksa = basis 16", "iya, definisi", "jawaban post lengkap", "susulan: FF = 255 nanti"],
 "telat dari arsip. A = 10. tuntas", ("F − A = 15 − 10 = 5", "15-10", "5"))

t(1009, "Skala peta 1:100.000. 5 cm di peta = 5 km nyata (5 × 100.000 cm = 500.000 cm = 5 km). Temen tulis 50 km — koma hilang dua tangga cm. Susulan: 1:50.000, 4 cm = 2 km ya? Cek dong",
 ["5 km pas", "50 km kelebihan tangga", "susulan 2 km pas", "PR gue: 12 cm skala ini? 12 km", "iya pas", "susulan: cm × skala = cm nyata", "iya, lalu bagi 100.000", "jawaban post semua kuku", "catet: satuan harus disamakan", "iya, itu kuncinya", "jawaban post lengkap", "susulan: 100.000 cm = 1 km"],
 "telat dari arsip. skala peta. tuntas", ("5 × 100.000 = 500.000 cm = 5 km", "5*100000", "500000"))

t(1010, "Salip: A 80 km/j, B 60 km/j, A di belakang 10 km. Menutup 20 km per jam → 30 menit. Temen hitung 10/80 — beda laju yang dipakai. Susulan: gap 15 km? 45 menit ya? Cek dong",
 ["20 km per jam pas", "30 menit pas", "10/80 salah jalan", "susulan 45 menit pas", "PR gue: 5 km? 15 menit", "iya pas", "jawaban post semua kuku", "catet: laju relatif = selisih", "iya, searah selisih", "jawaban post lengkap", "susulan: 20 km/j = 1 km per 3 menit"],
 "telat dari arsip. salip searah. tuntas", ("10 ÷ 20 = 0,5 jam", "10/20", "0.5"))

t(1011, "40 jam kerja = 144.000 detik (40 × 3.600). Temen kira 2.400 — itu menit. Satu tangga lagi: menit × 60. Susulan: 1 jam penuh kerja = 3.600 detik ya? Cek dong",
 ["2.400 itu menit", "144.000 detik pas", "susulan 3.600 pas", "PR gue: 8 jam? 28.800 dtk", "iya pas", "susulan: jam × 60 × 60", "iya, dua tangga", "jawaban post semua kuku", "catet: dua konversi berurutan", "iya, sistematis", "jawaban post lengkap", "susulan: 144.000 dtk ≈ 40 jam"],
 "telat dari arsip. jam ke detik. tuntas", ("40 × 3.600 = 144.000", "40*3600", "144000"))

t(1012, "Tagihan air: 12 m³ × 8rb = 96rb. Temen kira 96 juta — salah tangga rupiah. Cek: 12 × 8 = 96, kali seribu. Susulan: 15 m³? 120rb ya? Cek dong",
 ["96rb pas", "96 juta kelebihan", "susulan 120rb pas", "PR gue: 10 m³? 80rb", "iya pas", "susulan: m³ × tarif per m³", "iya, dua faktor", "jawaban post semua kuku", "catet: satuan × harga satuan", "iya, dasar", "jawaban post lengkap", "susulan: pemakaian bulan lalu dibanding"],
 "telat dari arsip. tagihan air. tuntas", ("12 × 8.000 = 96.000", "12*8000", "96000"))

t(1013, "Hektare: 1 ha = 10.000 m² (persegi 100 × 100 m). Sawah 2,5 ha = 25.000 m². Temen kira 2.500 — kurang satu nol. Susulan: 0,5 ha? 5.000 m² ya? Cek dong",
 ["10.000 m² per ha pas", "25.000 m² pas", "susulan 5.000 m² pas", "PR gue: 3 ha? 30.000 m²", "iya pas", "susulan: 100 × 100 asal ha", "iya, persegi", "jawaban post semua kuku", "catet: ha × 10.000", "iya, tangga", "jawaban post lengkap", "susulan: 10.000 m² = 1 ha balik"],
 "telat dari arsip. hektare. tuntas", ("2,5 × 10.000 = 25.000 m²", "25000*1", "25000"))

t(1014, "Komisi 5% dari penjualan 800rb = 40rb. 800rb ÷ 20 (karena 5% = 1/20). Temen jawab 4rb — kurang satu nol, itu dari 80rb. Susulan: 10%? 80rb ya? dua kali komisi 5%. Cek dong",
 ["40rb pas", "5% = bagi 20", "susulan 80rb pas", "PR gue: 1.000rb? 50rb", "iya pas", "susulan: 10% = 2 × 5%", "iya, dua kali", "jawaban post semua kuku", "catet: persen dari penjualan", "iya, basis penjualan", "jawaban post lengkap", "susulan: 40rb = 800 × 0,05"],
 "telat dari arsip. komisi 5%. tuntas", ("800.000/20 = 40.000", "800000/20", "40000"))

t(1015, "7 × 14 = 98. Sembilan puluh delapan. Temen tulis 88 — salah 10. Cek: 7 × 14 = 7 × 14 = 49 × 2. Cek dong",
 ["98 pas", "88 salah 10", "112 pas", "PR gue: 49 × 2 dua jalur", "iya pas", "susulan: 98 deket 100", "iya, kurang 2", "jawaban post semua kuku", "catet: dua jalur perkalian", "iya, konsisten", "jawaban post lengkap", "susulan: 98 = 2 × 7²"],
 "telat dari arsip. 7 × 14. tuntas", ("7 × 14 = 98", "7*14", "98"))

t(1016, "Ujian 50 soal dalam 90 menit → 1,8 menit per soal. 90 ÷ 50. Temen balik 50/90 — soal per menit 0,56 an, sah juga tapi satuannya beda. Susulan: 40 soal 80 menit? 2 menit per soal ya? Cek dong",
 ["1,8 menit per soal pas", "0,56 soal per menit pas", "satuannya jangan tertukar", "susulan 2 menit pas", "PR gue: 25 soal 50 menit? 2 juga", "iya pas", "jawaban post semua kuku", "catet: durasi ÷ banyak", "iya, per soal", "jawaban post lengkap", "susulan: sisakan waktu cek ulang"],
 "telat dari arsip. waktu per soal. tuntas", ("90/50 = 1,8 menit", "90/50", "1.8"))

t(1017, "Skor latihan: benar +4, salah −1. 20 benar 5 salah → 80 − 5 = 75. Temen lupa pengurang — skor murni 80 salah. Susulan: 18 benar 2 salah? 70 ya? (72 − 2). Cek dong",
 ["80 − 5 pas", "75 pas", "susulan 70 pas", "PR gue: 25 benar semua? 100", "iya pas", "susulan: −1 bikin hati-hati menebak", "iya, itu desainnya", "jawaban post semua kuku", "catet: bonus dikurangi penalti", "iya, dua komponen", "jawaban post lengkap", "susulan: 20 × 4 = 80 dulu"],
 "telat dari arsip. skor penalti. tuntas", ("20 × 4 − 5 = 75", "20*4-5", "75"))

t(1018, "Bus 45 kursi, 120 orang → 3 bus. 120/45 = 2,67 — dibulatkan ke atas karena orang gak bisa dibelah. Temen jawab 2 — 90 orang naik, 30 tertinggal! Susulan: 90 orang? 2 bus ya? (2 sisa 0). Cek dong",
 ["2,67 → 3 pas", "2 bus tertinggal 30 orang", "susulan 2 bus pas", "PR gue: 45 orang? 1 bus", "iya pas", "susulan: bulat ke atas kalau kapasitas", "iya, aturan utuh", "jawaban post semua kuku", "catet: bagi lalu bulatkan ke atas", "iya, bila perlu", "jawaban post lengkap", "susulan: 3 × 45 = 135 kursi, 15 kosong"],
 "telat dari arsip. kapasitas bus. tuntas", ("120/45 = 2,67 → 3 bus", "3*45", "135"))

t(1019, "Mesin cuci muat 5 kg, cucian 12 kg → 3 putaran. 12/5 = 2,4 → 3 (bulat ke atas). Temen jawab 2 — 10 kg masuk, 2 kg nyangkut. Susulan: 10 kg? 2 putaran ya? Cek dong",
 ["2,4 → 3 pas", "2 putaran kurang", "susulan 2 putaran pas", "PR gue: 5 kg? 1 putaran", "iya pas", "susulan: kelebihan sedikit tetap putaran baru", "iya, realistis", "jawaban post semua kuku", "catet: kapasitas dibulatkan ke atas", "iya, b41 juga", "jawaban post lengkap", "susulan: jangan paksa melebihi muat"],
 "telat dari arsip. putaran cuci. tuntas", ("12/5 = 2,4 → 3 putaran", "3*5", "15"))

t(1020, "Lift dari lantai 3 ke 11: perjalanan 8 lantai (11 − 3). Bukan 11 — lantai awal gak dihitung. Temen nanya kalau turun ke 1: 3 − 1 = 2 lantai. Cek dong",
 ["8 lantai pas", "bukan 11, kurangi awal", "turun 2 lantai pas", "PR gue: 3 → 3? nol, di tempat", "iya pas", "susulan: beda lantai = selisih", "iya, selalu", "jawaban post semua kuku", "catet: selisih, bukan tujuan", "iya, itu intinya", "jawaban post lengkap", "susulan: 1 → 11 = 10 lantai"],
 "telat dari arsip. lantai lift. tuntas", ("11 − 3 = 8 lantai", "11-3", "8"))

t(1021, "Telur 30 butuh kotak 12 butir: 30/12 = 2 sisa 6 → 3 kotak (2 penuh + 1 sisa). Temen jawab 2 — 6 telur nganggur. Susulan: 24 telur? 2 kotak tepat ya? Cek dong",
 ["2 sisa 6 pas", "3 kotak pas", "susulan 2 kotak pas", "PR gue: 36 telur? 3 tepat", "iya pas", "susulan: sisa tetap butuh wadah", "iya, bulat ke atas", "jawaban post semua kuku", "catet: bagi + sisa + wadah", "iya, tiga langkah", "jawaban post lengkap", "susulan: 12 × 3 = 36 muat semua"],
 "telat dari arsip. kotak telur. tuntas", ("30 = 2 × 12 + 6 → 3 kotak", "2*12", "24"))

t(1022, "Tiga saklar on/off → 2³ = 8 kombinasi keadaan. Tiap saklar dua pilihan, dikali. Temen jumlah 3+3+3 — dikali, bukan dijumlah. Susulan: 4 saklar? 16 ya? Cek dong",
 ["2³ = 8 pas", "kali bukan jumlah", "16 pas", "PR gue: 2 saklar? 4", "iya pas", "susulan: satu kombinasi = semua mati", "iya, termasuk", "jawaban post semua kuku", "catet: pilihan per saklar dikali", "iya, prinsip perkalian", "jawaban post lengkap", "susulan: 8 = 2 × 2 × 2"],
 "telat dari arsip. kombinasi saklar. tuntas", ("2 × 2 × 2 = 8", "2*2*2", "8"))

t(1023, "Jumlah ganjil 1+3+5+7+9 = 25 = 5². Lima bilangan ganjil pertama jumlahnya kuadrat 5. Temen cek manual: 1+3 = 4, +5 = 9, +7 = 16, +9 = 25 — semuanya kuadrat! Susulan: sampai 11? 36 = 6² ya? Cek dong",
 ["25 pas", "5² pas", "tangga kuadrat pas", "susulan 36 pas", "PR gue: sampai 13? 49 = 7²", "iya pas", "jawaban post semua kuku", "catet: n ganjil pertama = n²", "iya, itu teorema", "jawaban post lengkap", "susulan: visual kotak L jelasin"],
 "telat dari arsip. jumlah ganjil. tuntas", ("1+3+5+7+9 = 25 = 5²", "1+3+5+7+9", "25"))

t(1024, "1+2+...+100 = 5050. Pasangan 50: (1+100), (2+99)... masing 101 × 50 pasang. Temen nanya metode: berpasangan dari dua ujung. Susulan: 1..10? 55 ya? (11 × 5). Cek dong",
 ["50 pasang pas", "5050 pas", "susulan 55 pas", "PR gue: 1..20? 210", "iya pas", "susulan: n(n+1)/2 rumusnya", "iya, b41 T10", "jawaban post semua kuku", "catet: pasangan dari dua ujung", "iya, trik Gauss", "jawaban post lengkap", "susulan: 101 × 50 = 5050"],
 "telat dari arsip. deret 1..100. tuntas", ("101 × 50 = 5050", "101*50", "5050"))

t(1025, "1025 = 5² × 41. Faktorisasi: 1025 ÷ 5 = 205, ÷ 5 lagi = 41 (prima). Temen berhenti di 205 — 5 × 41 masih tersisa. Susulan: 1025 deket 1024 = 2^10, selisih 1! Cek dong",
 ["5² × 41 pas", "205 belum selesai", "41 prima pas", "deket 2^10 pas", "PR gue: 1025 − 1024 = 1", "iya, lucu", "jawaban post semua kuku", "catet: pecah sampai prima", "iya, b24 juga", "jawaban post lengkap", "susulan: 1025 habis dibagi 25"],
 "telat dari arsip. faktorisasi 1025. tuntas", ("1025 = 25 × 41", "25*41", "1025"))

assert len(T) == 25, len(T)
build2(T, 1001, "threads-41.ts", 41, 37, 501, 37,
       "Topik: separuh 102, kerja bersama 4-6, KPK 12-18, T10, Fibonacci 21, 9×12, 2^10, heksa A-F, skala 1:100.000, salip searah, jam ke detik, tagihan air, hektare, komisi 5%, 7×14, waktu per soal, skor penalti, kapasitas bus, putaran cuci, lantai lift, kotak telur, saklar 2³, jumlah ganjil 5², deret 1..100, faktorisasi 1025.")
print("threads-41 ok")
