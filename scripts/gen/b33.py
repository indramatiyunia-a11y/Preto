# threads-33.ts — BATCH 29 (id 801-825, authorId 651-675)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(801, "½ × 46 = 23. Genap rapi. Temen jawab 24 — 24 × 2 = 48, kelebihan. Susulan: ½ × 58? 29 ya? Cek dong",
 ["23 pas", "24 × 2 = 48 kelebihan", "susulan 29 pas", "PR gue: ½ × 47? 23,5 — ganjil", "iya pas", "susulan: 46 = 2 × 23 prima 23", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 23 prima kembar 22-23? gak, 21-23? bukan"],
 "telat dari arsip. separuh 46. tuntas", ("46/2 = 23", "46/2", "23"))

t(802, "Pulang-pergi 8 km sekali jalan → total 16 km. Temen nanya bensin: 25 km/L → 16/25 = 0,64 L. Cek dong",
 ["16 km pas", "0,64 L pas", "susulan: 0,64 × 10rb/L? 6.400 an", "iya pas", "PR gue: 10 km sekali? 20 km total, 0,8 L", "iya pas", "jawaban post semua kuku", "catet: dua kali jarak", "iya, pulang-pergi", "jawaban post lengkap", "susulan: lupa pulang = salah setengah"],
 "telat dari arsip. pulang-pergi. tuntas", ("16/25 = 0,64 L", "16/25", "0.64"))

t(803, "5 × 8 = 40. Empat puluh. Temen tulis 45 — salah 5. Cek: 5 × 8 = 5 × 10 − 10 = 50 − 10. Susulan: 5 × 9? 45 ya? Cek dong",
 ["40 pas", "45 itu 5 × 9", "susulan 45 pas juga", "PR gue: 8 × 5 sama 40", "iya, komutatif", "susulan: tabel 5 ujung 0/5", "iya, pola", "jawaban post semua kuku", "catet: deket 50 dikurangi", "iya, trik", "jawaban post lengkap", "susulan: 40 = 4 lusin? eh 3⅓ lusin"],
 "telat dari arsip. 5 × 8. tuntas", ("5 × 8 = 40", "5*8", "40"))

t(804, "Diagonal RUANG kubus rusuk 4: √(4² + 4² + 4²) = √48 = 4√3 ≈ 6,93. Tiga dimensi, beda dengan diagonal muka (4√2 ≈ 5,66). Temen campur dua diagonal. Cek dong",
 ["√48 pas", "4√3 ≈ 6,93 pas", "muka 4√2 ≈ 5,66 pas", "PR gue: rusuk 6? 6√3 ≈ 10,39", "iya pas", "susulan: tiga dimensi = tambah satu sisi", "iya, beda rumus", "jawaban post semua kuku", "catet: muka 2 sisi, ruang 3 sisi", "iya, itu bedanya", "jawaban post lengkap", "susulan: 6-6-6? jadi 6√3"],
 "telat dari arsip. diagonal ruang. tuntas", ("√(16+16+16) = √48 = 4√3", "16+16+16", "48"))

t(805, "7 × 14 = 98. Sembilan puluh delapan — deket 100, kurang 2. Temen tulis 88 — salah 10. Cek: 7 × 14 = 7 × 14 = 49 × 2. Susulan: 14 × 8? 112 ya? Cek dong",
 ["98 pas", "88 salah 10", "112 pas", "PR gue: 49 × 2 dua jalur", "iya pas", "susulan: 14 = 2 × 7", "iya, lipat", "jawaban post semua kuku", "catet: deket 100", "iya, minus 2", "jawaban post lengkap", "susulan: 98 = 2 × 49"],
 "telat dari arsip. 7 × 14. tuntas", ("7 × 14 = 98", "7*14", "98"))

t(806, "Persen: 90% dari 45 = 40,5. 10% = 4,5, sembilan kali = 40,5. Temen bulatkan 41 — boleh laporan kasar, tapi 40,5 pas. Susulan: 90% dari 60? 54 ya? Cek dong",
 ["4,5 = 10% pas", "40,5 pas", "susulan 54 pas", "PR gue: 90% = 100% − 10%", "iya, komplemen", "susulan: 45 − 4,5 juga jalan", "iya, dua jalur", "jawaban post semua kuku", "catet: 90% via komplemen", "iya, cepat", "jawaban post lengkap", "susulan: 40,5 = 81/2"],
 "telat dari arsip. 90 persen. tuntas", ("45 − 4,5 = 40,5", "45-4.5*1", "40.5"))

t(807, "6 × 9 = 54. Lima puluh empat. Temen tulis 56 — itu 7 × 8, kecampur. Cek: 6 × 9 = 54. Susulan: 6 × 8? 48 ya? Cek dong",
 ["54 pas", "56 itu 7 × 8", "48 pas", "PR gue: tabel 6 naik 6", "iya pas", "susulan: 54 = 9 × 6", "iya, komutatif", "jawaban post semua kuku", "catet: jangan kecampur tetangga", "iya, jebakan hafalan", "jawaban post lengkap", "susulan: 6 × 7 = 42 juga"],
 "telat dari arsip. 6 × 9. tuntas", ("6 × 9 = 54", "6*9", "54"))

t(808, "Tabel frekuensi: nilai 5 muncul 4×, 6 muncul 3×, 7 muncul 2×. Total = 20 + 18 + 14 = 52, banyak data 9, rata ≈ 5,78. Temen rata-ratain 5,6,7 polos jadi 6 — salah, bobot frekuensi. Susulan: semua 6? rata 6 pas ya? Cek dong",
 ["52 pas", "9 data pas", "5,78 pas", "6 polos salah", "susulan semua 6 → rata 6 pas", "PR gue: kalau frekuensi sama? baru polos boleh", "iya, syarat", "jawaban post semua kuku", "catet: nilai × frekuensi", "iya, bobot", "jawaban post lengkap", "susulan: modus 5 (4 kali)"],
 "telat dari arsip. tabel frekuensi. tuntas", ("20 + 18 + 14 = 52", "20+18+14", "52"))

t(809, "3 × 34 = 102. Seratus dua. Temen tulis 92 — salah 10. Cek: 3 × 34 = 3 × 30 + 3 × 4 = 90 + 12. Susulan: 34 × 4? 136 ya? Cek dong",
 ["102 pas", "92 salah 10", "136 pas", "PR gue: 90 + 12 rapi", "iya pas", "susulan: pecah 30 + 4", "iya, standar", "jawaban post semua kuku", "catet: cek dua kali", "iya, disiplin", "jawaban post lengkap", "susulan: 102 habis dibagi 3"],
 "telat dari arsip. 3 × 34. tuntas", ("3 × 34 = 102", "3*34", "102"))

t(810, "Keterbagian 11: jumlah digit selang-seling selisihnya kelipatan 11 (termasuk 0). 121: 1 − 2 + 1 = 0 → habis dibagi 11. Temen coba 132: 1 − 3 + 2 = 0 → ya, 132 = 12 × 11. Cek dong",
 ["121 ya pas", "selang-seling 0 pas", "132 ya pas", "PR gue: 143? 1 − 4 + 3 = 0 → ya, 13 × 11", "iya pas", "susulan: 100? 1 − 0 + 0 = 1 → bukan", "iya pas", "jawaban post semua kuku", "catet: dua digit sama juga selalu habis 11", "iya, 22-33-99", "jawaban post lengkap", "susulan: 3 digit dua angka sama = habis 11"],
 "telat dari arsip. keterbagian 11. tuntas", ("121: 1 − 2 + 1 = 0", "1-2+1", "0"))

t(811, "4 × 21 = 84. Delapan puluh empat. Temen tulis 74 — salah 10. Cek: 4 × 21 = 4 × 20 + 4 = 84. Susulan: 21 × 5? 105 ya? Cek dong",
 ["84 pas", "74 salah 10", "105 pas", "PR gue: 80 + 4 rapi", "iya pas", "susulan: 21 = 3 × 7", "iya pas", "jawaban post semua kuku", "catet: deket 20 ditambah", "iya, trik", "jawaban post lengkap", "susulan: 84 = 12 × 7 juga"],
 "telat dari arsip. 4 × 21. tuntas", ("4 × 21 = 84", "4*21", "84"))

t(812, "3 pekan 2 hari = 23 hari (21 + 2). Temen tulis 32 — kebalik. Cek: 3 × 7 = 21, plus 2. Susulan: 2 pekan 5 hari? 19 ya? Cek dong",
 ["23 pas", "32 kebalik", "19 pas", "PR gue: pekan × 7 dulu", "iya, dua langkah", "susulan: tulis pelan biar gak kebalik", "iya, disiplin", "jawaban post semua kuku", "catet: campuran pekan-hari", "iya, b27 juga", "jawaban post lengkap", "susulan: 23 hari ≈ 3,3 pekan"],
 "telat dari arsip. pekan-hari. tuntas", ("3 × 7 + 2 = 23 hari", "3*7+2", "23"))

t(813, "9 × 12 = 108. Seratus delapan. Temen tulis 108 pas? bagus. Yang sering salah 98. Cek: 9 × 12 = 9 × 10 + 9 × 2 = 90 + 18. Susulan: 12 × 9 sama 108 ya? komutatif. Cek dong",
 ["108 pas", "90 + 18 rapi", "komutatif pas", "PR gue: 108 = 4 × 27 juga", "iya pas", "susulan: 108 = jumlah sudut segi-5? eh 540. 108 = sudut segi-5 beraturan", "iya, b26 segi", "jawaban post semua kuku", "catet: pecah 10 + 2", "iya, standar", "jawaban post lengkap", "susulan: digit sum 108 = 9"],
 "telat dari arsip. 9 × 12. tuntas", ("9 × 12 = 108", "9*12", "108"))

t(814, "Kelereng 4 merah 3 biru 2 hijau. Dua tarik dua-duanya biru: 3/9 × 2/8 = 6/72 = 1/12. Temen kira 1/9 — kartu berkurang. Susulan: dua-duanya hijau? 2/9 × 1/8 = 2/72 = 1/36 ya? Cek dong",
 ["1/12 pas", "9 → 8 berkurang", "susulan 1/36 pas", "PR gue: tiga warna lebih rumit", "iya, hati-hati", "susulan: beda warna? lama, tiga jalur", "iya, lain soal", "jawaban post semua kuku", "catet: hitung per warna", "iya, sistematis", "jawaban post lengkap", "susulan: 1/12 ≈ 0,083"],
 "telat dari arsip. kelereng tiga warna. tuntas", ("3/9 × 2/8 = 1/12", "3*2", "6"))

t(815, "Belanja tiga minggu: 80rb, 85rb, 75rb → total 240rb, rata 80rb. Temen rata polos 80 juga kebetulan pas (jumlah sama). Susulan: 80, 90, 70? rata 80 lagi ya? simetri. Cek dong",
 ["240rb pas", "rata 80rb pas", "susulan 80 lagi pas", "PR gue: 60, 90, 90? rata 80 juga", "iya pas", "susulan: median 80 juga", "iya, simetris", "jawaban post semua kuku", "catet: total dulu", "iya, urutan", "jawaban post lengkap", "susulan: rentang 20rb (70-90)"],
 "telat dari arsip. belanja tiga minggu. tuntas", ("(80+85+75)/3 = 80rb", "240/3", "80"))

t(816, "2 × 65 = 130. Seratus tiga puluh. Temen tulis 120 — salah 10. Cek: 65 + 65 = 130. Susulan: 65 × 3? 195 ya? Cek dong",
 ["130 pas", "120 salah 10", "195 pas", "PR gue: 65 = 60 + 5", "iya, 120 + 10", "susulan: 130 mnt = 2j10m", "iya, konversi", "jawaban post semua kuku", "catet: jumlah berulang", "iya, cepat", "jawaban post lengkap", "susulan: 65 × 4 = 260"],
 "telat dari arsip. 2 × 65. tuntas", ("2 × 65 = 130", "2*65", "130"))

t(817, "Diagonal muka balok 3×4 = 5 (tripel 3-4-5), lalu ruang √(5² + 12²) = √169 = 13. Dua langkah Pythagoras bertingkat. Temen langsung √(9+16+144) — hasil sama 13! satu jalur juga oke. Cek dong",
 ["5 pas muka", "13 pas ruang", "satu jalur juga 13 pas", "PR gue: balok 2×3×6? muka √13 an", "iya, gak bulat", "susulan: tripel ruang 3-4-12", "iya, cantik", "jawaban post semua kuku", "catet: dua langkah bertingkat", "iya, sistematis", "jawaban post lengkap", "susulan: 169 = 13² lagi"],
 "telat dari arsip. diagonal balok. tuntas", ("√(25 + 144) = √169 = 13", "25+144", "169"))

t(818, "7 × 17 = 119. Seratus sembilan belas — deket 120, kurang 7. Temen tulis 109 — salah 10. Cek: 7 × 17 = 7 × 20 − 7 × 3 = 140 − 21. Susulan: 17 × 8? 136 ya? Cek dong",
 ["119 pas", "109 salah 10", "136 pas", "PR gue: 140 − 21 rapi", "iya pas", "susulan: 17 prima, 119 = 7 × 17", "iya pas", "jawaban post semua kuku", "catet: deket 20 dikurangi", "iya, trik", "jawaban post lengkap", "susulan: 119 habis dibagi 7"],
 "telat dari arsip. 7 × 17. tuntas", ("7 × 17 = 119", "7*17", "119"))

t(819, "2½ + 1¾ = 4¼. Campuran: pecahan ½ + ¾ = 1¼, bulat 2 + 1 = 3, jumlah 4¼. Temen jumlah bulat & pecahan terpisah — bener jalan. Susulan: 3⅓ + 2⅔? 6 ya? pecahan pas utuh. Cek dong",
 ["1¼ pecahan pas", "4¼ total pas", "susulan 6 pas", "PR gue: ¾ + ¾ = 1½ juga", "iya pas", "susulan: campuran enak dipisah", "iya, standar", "jawaban post semua kuku", "catet: bulat & pecahan terpisah", "iya, dua jalur", "jawaban post lengkap", "susulan: cek desimal 4,25"],
 "telat dari arsip. campuran jumlah. tuntas", ("2,5 + 1,75 = 4,25", "2.5+1.75", "4.25"))

t(820, "11 × 11 = 121 — kuadrat 11, juga repunit kuadrat (111... pattern). Temen tanya 12²? 144. Cek dong",
 ["121 pas", "144 pas", "PR gue: 11² pakai trik (a+b)²? (10+1)² = 100 + 20 + 1", "iya pas", "susulan: 121 palindrom", "iya, bolak balik", "jawaban post semua kuku", "catet: kuadrat belasan", "iya, b24 juga", "jawaban post lengkap", "susulan: 121 = 11², bukan prima"],
 "telat dari arsip. 11² = 121. tuntas", ("11 × 11 = 121", "11*11", "121"))

t(821, "1 Mei → 1 Juni = 31 hari (Mei 31 hari). Geser 31 mod 7 = 3 hari: Rabu → Sabtu. Temen geser 2 — Mei 30? bukan. Cek dong",
 ["31 hari pas", "geser 3 pas", "Rabu → Sabtu pas", "PR gue: 1 Juni → 1 Juli? 30 hari, geser 2", "iya pas", "susulan: bulan 30/31 bergantian", "iya, kebanyakan", "jawaban post semua kuku", "catet: jumlah hari bulan dulu", "iya, langkah awal", "jawaban post lengkap", "susulan: mod 7 = geser hari"],
 "telat dari arsip. Mei-Juni. tuntas", ("31 mod 7 = 3", "31", "31"))

t(822, "Kecepatan rata 60 km/j → 90 km butuh 1,5 jam (90/60). Temen tulis 15 jam — koma hilang. Cek: 60 × 1,5 = 90. Susulan: 120 km? 2 jam ya? Cek dong",
 ["1,5 jam pas", "15 jam koma hilang", "2 jam pas", "PR gue: cek balik 60 × 1,5", "iya, selalu", "susulan: waktu = jarak ÷ laju", "iya, rumus", "jawaban post semua kuku", "catet: jangan hilangkan koma", "iya, jebakan", "jawaban post lengkap", "susulan: 45 km? 45 menit pas"],
 "telat dari arsip. 90 km 60 km/j. tuntas", ("90/60 = 1,5 jam", "90/60", "1.5"))

t(823, "6 × 13 = 78. Tujuh puluh delapan. Temen tulis 68 — kebalik. Cek: 6 × 13 = 6 × 10 + 6 × 3 = 60 + 18. Susulan: 13 × 7? 91 ya? Cek dong",
 ["78 pas", "68 kebalik", "91 pas", "PR gue: 60 + 18 rapi", "iya pas", "susulan: 78 = 6 × 13, habis 6", "iya pas", "jawaban post semua kuku", "catet: kebalik sering, cek", "iya, disiplin", "jawaban post lengkap", "susulan: 78 = 2 × 3 × 13"],
 "telat dari arsip. 6 × 13. tuntas", ("6 × 13 = 78", "6*13", "78"))

t(824, "5x + 2x = 56 → 7x = 56 → x = 8. Gabung suku sejenis dulu. Temen langsung bagi 5 — salah, 2x belum ikut. Susulan: 6x − x = 45? 5x = 45 → x = 9 ya? Cek dong",
 ["7x pas", "x = 8 pas", "gabung dulu", "susulan x = 9 pas", "PR gue: cek balik 5(8) + 2(8) = 56", "iya, selalu", "jawaban post semua kuku", "catet: suku sejenis dulu", "iya, langkah awal", "jawaban post lengkap", "susulan: −x juga suku sejenis"],
 "telat dari arsip. 5x + 2x. tuntas", ("5 + 2 = 7; 56/7 = 8", "56/7", "8"))

t(825, "825 hari ≈ 2,26 tahun (825/365). Temen kira 2,5 — 2,5 tahun itu 912 hari. Cek dong",
 ["2,26 an pas", "912 hari untuk 2,5 tahun pas", "PR gue: 825 hari ≈ 117,9 pekan", "iya pas", "susulan: 825 ÷ 30 ≈ 27,5 bulan", "iya pas", "jawaban post semua kuku", "catet: tahun = 365 hari", "iya, dasar", "jawaban post lengkap", "susulan: 800 hari ≈ 2,2 tahun"],
 "telat dari arsip. 825 hari. tuntas", ("825/365 ≈ 2,26 tahun", "365*2", "730"))

assert len(T) == 25, len(T)
build2(T, 801, "threads-33.ts", 33, 29, 651, 33,
       "Topik: separuh 46, pulang-pergi, 5×8, diagonal ruang, 7×14, 90 persen, 6×9, tabel frekuensi, 3×34, keterbagian 11, 4×21, pekan-hari, 9×12, kelereng tiga warna, belanja tiga minggu, 2×65, diagonal balok, 7×17, campuran jumlah, 11², Mei-Juni, 90 km, 6×13, 5x+2x, 825 hari.")
print("threads-33 ok")
