# threads-34.ts — BATCH 30 (id 826-850, authorId 676-700)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(826, "½ × 54 = 27. Genap rapi. Temen jawab 26 — cek 27 × 2 = 54 pas. Susulan: ½ × 66? 33 ya? Cek dong",
 ["27 pas", "26 × 2 = 52 kurang", "susulan 33 pas", "PR gue: ½ × 55? 27,5 — ganjil", "iya pas", "susulan: 54 = 2 × 27, 27 = 3³", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 27 kubik 3"],
 "telat dari arsip. separuh 54. tuntas", ("54/2 = 27", "54/2", "27"))

t(827, "18 dari 24 = 75%. Kenali dulu 18/24 = ¾ (bagi 6), lalu ¾ = 75%. Temen langsung bagi panjang — sederhanakan dulu lebih cepet. Susulan: 20 dari 24? 5/6 ≈ 83,3% ya? Cek dong",
 ["¾ dulu pas", "75% pas", "susulan 83,3% pas", "PR gue: 12 dari 24? 50%", "iya pas", "susulan: 24 enak dibagi", "iya, banyak pembagi", "jawaban post semua kuku", "catet: sederhana dulu", "iya, mantra", "jawaban post lengkap", "susulan: 24/24 = 100%"],
 "telat dari arsip. 18 dari 24. tuntas", ("18/24 = 3/4 = 75%", "18/24", "0.75"))

t(828, "5 × 14 = 70. Tujuh puluh. Temen tulis 75 — salah 5. Cek: 5 × 14 = 5 × 10 + 5 × 4 = 70. Susulan: 14 × 6? 84 ya? Cek dong",
 ["70 pas", "75 salah 5", "84 pas", "PR gue: 50 + 20 rapi", "iya pas", "susulan: × 5 ujung 0/5", "iya, pola", "jawaban post semua kuku", "catet: pecah 10 + 4", "iya, standar", "jawaban post lengkap", "susulan: 70 = 7 × 10 juga"],
 "telat dari arsip. 5 × 14. tuntas", ("5 × 14 = 70", "5*14", "70"))

t(829, "Prima 150-180: 151, 157, 163, 167, 173, 179 — enam. 153? digit sum 9, habis 3. 169? 13². 177? habis 3. Susulan: 181 prima ya? cek sampai √181 ≈ 13,4. Cek dong",
 ["enam prima pas", "153 habis 3 pas", "169 = 13² pas", "181 prima pas", "PR gue: cek 2,3,5,7,11,13", "iya, batas akar", "jawaban post semua kuku", "catet: digit sum cek cepat", "iya, hemat", "jawaban post lengkap", "susulan: 171 habis 3 juga"],
 "telat dari arsip. prima 150-180. tuntas", ("prima 150-180 ada 6", "3*2", "6"))

t(830, "2/3 × 9/10 = 18/30 = 3/5. Kali lurus, sederhanakan. Temen jumlah pecahan — itu untuk tambah, bukan kali. Susulan: 3/4 × 2/9? 6/36 = 1/6 ya? Cek dong",
 ["18/30 pas", "3/5 pas", "kali ≠ jumlah", "susulan 1/6 pas", "PR gue: coret silang 3 dan 9, 2 dan 4? eh 2/4... 2/3 × 9/10: coret 3 & 9 → 2/3 × 3/10 = 6/30 = 1/5? cek lagi", "hmm 18/30 = 3/5 pas, coret 6 & 30? eh 18/30 bagi 6 → 3/5", "iya, bagi 6", "jawaban post semua kuku", "catet: kali pembilang & penyebut", "iya, lalu sederhana", "jawaban post lengkap", "susulan: desimal 0,6"],
 "telat dari arsip. kali dua pecahan. tuntas", ("18/30 = 3/5", "18/30", "0.6"))

t(831, "5 × 19 = 95. Sembilan puluh lima — deket 100, kurang 5. Temen tulis 85 — salah 10. Cek: 5 × 19 = 5 × 20 − 5. Susulan: 19 × 6? 114 ya? Cek dong",
 ["95 pas", "85 salah 10", "114 pas", "PR gue: 100 − 5 rapi", "iya pas", "susulan: deket 20", "iya, trik", "jawaban post semua kuku", "catet: × 20 minus 5", "iya, dua langkah", "jawaban post lengkap", "susulan: 95 = 5 × 19, habis 5"],
 "telat dari arsip. 5 × 19. tuntas", ("5 × 19 = 95", "5*19", "95"))

t(832, "Banyak diagonal MUKA kubus: 2 per muka × 6 muka = 12. Banyak rusuk 12 juga — kebetulan sama. Temen kira diagonal 6 — per muka ada dua. Cek dong",
 ["12 diagonal muka pas", "12 rusuk juga pas", "2 per muka × 6", "PR gue: diagonal ruang? 4 (dua arah × 2? eh 4)", "iya, empat", "susulan: hitung per muka dulu", "iya, sistematis", "jawaban post semua kuku", "catet: dua diagonal per persegi", "iya, X di tiap muka", "jawaban post lengkap", "susulan: gambar kubus bantu"],
 "telat dari arsip. diagonal muka kubus. tuntas", ("2 × 6 = 12 diagonal muka", "2*6", "12"))

t(833, "8 × 15 = 120. Seratus dua puluh. Temen tulis 110 — salah 10. Cek: 8 × 15 = 8 × 10 + 8 × 5 = 80 + 40. Susulan: 15 × 9? 135 ya? Cek dong",
 ["120 pas", "110 salah 10", "135 pas", "PR gue: 80 + 40 rapi", "iya pas", "susulan: 120 = 12 × 10 juga", "iya pas", "jawaban post semua kuku", "catet: pecah 10 + 5", "iya, standar", "jawaban post lengkap", "susulan: 120 mnt = 2 jam"],
 "telat dari arsip. 8 × 15. tuntas", ("8 × 15 = 120", "8*15", "120"))

t(834, "Jam kerja tiga hari × 6,5 jam = 19,5 jam. Desimal jam × 3. Temen tulis 195 — koma hilang. Cek: 6,5 × 3 = 19,5. Susulan: dua hari? 13 jam ya? Cek dong",
 ["19,5 jam pas", "195 koma hilang", "13 jam pas", "PR gue: 0,5 × 3 = 1,5, plus 18", "iya, pecah dua jalur", "susulan: 19,5 jam = 19j30m", "iya, konversi", "jawaban post semua kuku", "catet: desimal × bulat", "iya, hati-hati koma", "jawaban post lengkap", "susulan: 6,5 = 6j30m per hari"],
 "telat dari arsip. 6,5 × 3. tuntas", ("6,5 × 3 = 19,5 jam", "6.5*3", "19.5"))

t(835, "15 × 6 = 90. Sembilan puluh. Temen tulis 80 — salah 10. Cek: 15 × 6 = 90 (15 × 5 = 75, +15). Susulan: 15 × 8? 120 ya? Cek dong",
 ["90 pas", "80 salah 10", "120 pas", "PR gue: 75 + 15 naik", "iya pas", "susulan: tabel 15 naik 15", "iya, konsisten", "jawaban post semua kuku", "catet: cek tetangga", "iya, cepat", "jawaban post lengkap", "susulan: 90 = 6 × 15 = 9 × 10"],
 "telat dari arsip. 15 × 6. tuntas", ("15 × 6 = 90", "15*6", "90"))

t(836, "Dompet pisah: tunai 50rb + digital 80rb = 130rb total. Temen tanya bisa beli barang 125rb? bisa, tapi campur dua sumber. Susulan: barang 135rb? kurang 5rb ya? Cek dong",
 ["130rb pas", "125rb bisa pas", "135rb kurang 5rb pas", "PR gue: digital aja cukup? 80rb kurang 45rb", "iya pas", "susulan: pisah sumber hati-hati", "iya, catat", "jawaban post semua kuku", "catet: jumlahkan dua sumber", "iya, dua langkah", "jawaban post lengkap", "susulan: saldo digital cek dulu"],
 "telat dari arsip. dompet pisah. tuntas", ("50 + 80 = 130rb", "50000+80000", "130000"))

t(837, "6 × 17 = 102. Seratus dua. Temen tulis 96 — salah 6. Cek: 6 × 17 = 6 × 20 − 6 × 3 = 120 − 18. Susulan: 17 × 7? 119 ya? Cek dong",
 ["102 pas", "96 salah 6", "119 pas", "PR gue: 120 − 18 rapi", "iya pas", "susulan: deket 20 dikurangi", "iya, trik", "jawaban post semua kuku", "catet: pecah 20 − 3", "iya, dua jalur", "jawaban post lengkap", "susulan: 102 = 2 × 3 × 17"],
 "telat dari arsip. 6 × 17. tuntas", ("6 × 17 = 102", "6*17", "102"))

t(838, "2x − 4 = 4x → −4 = 2x → x = −2. Pindah ruas, x jadi negatif — sah! Temen kaget jawaban minus — negatif sah di aljabar. Susulan: cek balik: 2(−2) − 4 = −8; 4(−2) = −8. pas! Cek dong",
 ["x = −2 pas", "minus sah di aljabar", "cek balik −8 = −8 pas", "PR gue: 3x − 9 = 6x? x = −3", "iya pas", "susulan: pindah ruas ubah tanda", "iya, aturan", "jawaban post semua kuku", "catet: minus bukan error", "iya, itu pesannya", "jawaban post lengkap", "susulan: selalu cek balik"],
 "telat dari arsip. x negatif. tuntas", ("2(−2) − 4 = −8 = 4(−2)", "2*(-2)-4", "-8"))

t(839, "8 × 11 = 88. Delapan puluh delapan — palindrom! Temen baru sadar 88 bolak-balik sama. Susulan: 11 × 9? 99 — juga palindrom ya? Cek dong",
 ["88 pas", "palindrom pas", "99 juga palindrom pas", "PR gue: 11 × 8, angka kembar", "iya pas", "susulan: × 11 duakan angka", "iya, trik 11", "jawaban post semua kuku", "catet: palindrom angka", "iya, seru", "jawaban post lengkap", "susulan: 121 juga palindrom"],
 "telat dari arsip. 8 × 11. tuntas", ("8 × 11 = 88", "8*11", "88"))

t(840, "Dadu: peluang BUKAN prima (mata 1, 4, 6) = 3/6 = ½. Prima di dadu: 2, 3, 5. Temen kira 1 prima — bukan, 1 cuma satu faktor. Susulan: peluang prima? 3/6 = ½ juga ya? simetris. Cek dong",
 ["prima dadu: 2, 3, 5 pas", "1 bukan prima", "bukan prima = ½ pas", "susulan ½ juga pas", "PR gue: 6 bukan prima karena 2 × 3", "iya pas", "jawaban post semua kuku", "catet: hitung sisi prima dulu", "iya, tiga sisi", "jawaban post lengkap", "susulan: 1 satu faktor saja"],
 "telat dari arsip. prima dadu. tuntas", ("3/6 = 1/2", "3/6", "0.5"))

t(841, "Rata tujuh nilai 65 → total 455. Enam diketahui jumlah 390 → ketujuh = 65 (kebetulan sama rata). Temen salah jumlah enam → 60. Susulan: enam jumlah 400? ketujuh 55 ya? Cek dong",
 ["455 pas", "390 pas", "65 pas", "susulan 55 pas", "PR gue: kebetulan ketujuh = rata", "iya, lucu", "jawaban post semua kuku", "catet: total − jumlah diketahui", "iya, b24 juga", "jawaban post lengkap", "susulan: cek jumlah enam dulu"],
 "telat dari arsip. rata tujuh. tuntas", ("455 − 390 = 65", "455-390", "65"))

t(842, "10 × 46 = 460. Empat ratus enam puluh. Temen tulis 46 — kurang nol. × 10 = tambah nol. Susulan: 46 × 5? 230 ya? Cek dong",
 ["460 pas", "46 kurang nol", "230 pas", "PR gue: × 10 geser koma", "iya, b26 geser", "susulan: 46 × 10 = 460 langsung", "iya pas", "jawaban post semua kuku", "catet: tambah nol = × 10", "iya, dasar", "jawaban post lengkap", "susulan: × 100 = dua nol"],
 "telat dari arsip. × 10. tuntas", ("10 × 46 = 460", "10*46", "460"))

t(843, "7,2 jam = 7 jam 12 menit (0,2 × 60 = 12). Temen tulis 7j2m — salah konversi desimal. Susulan: 3,5 jam? 3j30m ya? Cek dong",
 ["12 menit pas", "7j2m salah", "3j30m pas", "PR gue: 0,2 jam ≠ 2 menit", "iya, × 60 dulu", "susulan: desimal × 60", "iya, b20 juga", "jawaban post semua kuku", "catet: pecahan jam × 60", "iya, itu rumusnya", "jawaban post lengkap", "susulan: 0,5 jam = 30 mnt"],
 "telat dari arsip. 7,2 jam. tuntas", ("0,2 × 60 = 12 menit", "0.2*60", "12"))

t(844, "13 × 3 = 39. Tiga puluh sembilan. Temen tulis 36 — salah 3. Cek: 13 × 3 = 39 (10×3 + 3×3 = 30 + 9). Susulan: 13 × 4? 52 ya? Cek dong",
 ["39 pas", "36 salah 3", "52 pas", "PR gue: 30 + 9 rapi", "iya pas", "susulan: tabel 13 naik 13", "iya, konsisten", "jawaban post semua kuku", "catet: pecah 10 + 3", "iya, standar", "jawaban post lengkap", "susulan: 39 = 3 × 13"],
 "telat dari arsip. 13 × 3. tuntas", ("13 × 3 = 39", "13*3", "39"))

t(845, "Keliling persegi 60 → sisi 15 (60 ÷ 4), luas 225. Dua langkah: keliling → sisi → luas. Temen langsung 60² — beda soal. Susulan: keliling 36? sisi 9, luas 81 ya? Cek dong",
 ["sisi 15 pas", "luas 225 pas", "60² itu salah soal", "susulan 81 pas", "PR gue: keliling 4s", "iya, rumus", "jawaban post semua kuku", "catet: tiga langkah berurutan", "iya, sistematis", "jawaban post lengkap", "susulan: luas dari keliling butuh sisi dulu"],
 "telat dari arsip. keliling → luas. tuntas", ("60/4 = 15; 15² = 225", "60/4", "15"))

t(846, "Persen: 33 dari 44 = 75%. Sederhanakan 33/44 = ¾ dulu. Temen bagi panjang — kenali perempat lebih cepet. Susulan: 36 dari 48? ¾ juga ya? (bagi 12). Cek dong",
 ["¾ dulu pas", "75% pas", "susulan 75% pas lagi", "PR gue: 33-44-55? kelipatan 11", "iya pas", "susulan: 44 = 4 × 11", "iya pas", "jawaban post semua kuku", "catet: sederhanakan sebelum persen", "iya, cepat", "jawaban post lengkap", "susulan: 55 dari 44 = 125%"],
 "telat dari arsip. 33 dari 44. tuntas", ("33/44 = 3/4 = 75%", "33/44", "0.75"))

t(847, "5 × 17 = 85. Delapan puluh lima. Temen tulis 75 — salah 10. Cek: 5 × 17 = 5 × 20 − 5 × 3 = 100 − 15. Susulan: 17 × 6? 102 ya? Cek dong",
 ["85 pas", "75 salah 10", "102 pas", "PR gue: 100 − 15 rapi", "iya pas", "susulan: deket 20", "iya, trik", "jawaban post semua kuku", "catet: 85 = 5 × 17", "iya pas", "jawaban post lengkap", "susulan: 85 habis dibagi 5"],
 "telat dari arsip. 5 × 17. tuntas", ("5 × 17 = 85", "5*17", "85"))

t(848, "19² = 361. Tiga ratus enam puluh satu — kuadrat 19, yang terakhir sebelum 20². Temen tulis 369 — kebalik. Cek: 19 × 19 = 20 × 19 − 19 = 380 − 19. Susulan: 20²? 400 ya? Cek dong",
 ["361 pas", "369 kebalik", "400 pas", "PR gue: 380 − 19 rapi", "iya pas", "susulan: kuadrat 20-an selesai di 400", "iya, tangga", "jawaban post semua kuku", "catet: deket 20 dikurangi", "iya, trik", "jawaban post lengkap", "susulan: 361 deket 360 derajat"],
 "telat dari arsip. 19² = 361. tuntas", ("19² = 361", "19*19", "361"))

t(849, "1.200 hari ≈ 3,3 tahun (1200/365 ≈ 3,29). Temen kira 4 tahun — 4 tahun itu 1.460 hari. Cek dong",
 ["3,29 an pas", "1.460 hari 4 tahun pas", "PR gue: 1.200 hari ≈ 171 pekan", "iya pas", "susulan: 3 tahun = 1.095 hari", "iya pas", "jawaban post semua kuku", "catet: tahun × 365", "iya, dasar", "jawaban post lengkap", "susulan: 1.000 hari ≈ 2,74 tahun"],
 "telat dari arsip. 1.200 hari. tuntas", ("1200/365 ≈ 3,29", "365*3", "1095"))

t(850, "850 = 2 × 5² × 17 — faktorisasi prima 850. Cek: 2 × 25 × 17 = 850. Temen tulis 2 × 5 × 85 — 85 belum prima (5 × 17). Cek dong",
 ["2 × 5² × 17 pas", "85 belum prima", "2 × 25 × 17 cek pas", "PR gue: 850 habis dibagi 5 dua kali", "iya, 5²", "susulan: 850 ÷ 2 = 425 dulu", "iya, urutan", "jawaban post semua kuku", "catet: pecah sampai prima", "iya, b24 juga", "jawaban post lengkap", "susulan: 850 ÷ 17 = 50 pas"],
 "telat dari arsip. faktorisasi 850. tuntas", ("850 = 2 × 25 × 17", "2*25*17", "850"))

assert len(T) == 25, len(T)
build2(T, 826, "threads-34.ts", 34, 30, 676, 34,
       "Topik: separuh 54, 18 dari 24, 5×14, prima 150-180, kali dua pecahan, 5×19, diagonal muka kubus, 8×15, 6,5 × 3, 15×6, dompet pisah, 6×17, x negatif, 8×11 palindrom, prima dadu, rata tujuh, ×10, 7,2 jam, 13×3, keliling → luas, 33 dari 44, 5×17, 19², 1.200 hari, faktorisasi 850.")
print("threads-34 ok")
