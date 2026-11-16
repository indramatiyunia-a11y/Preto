# threads-56.ts — BATCH 52 (id 1376-1400, authorId 876-900)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1376, "½ × 182 = 91. Genap rapi, hasil 91 = 7 × 13. Temen jawab 90 — 90 × 2 = 180, kurang 2. Susulan: ½ × 190? 95 ya? Cek dong",
 ["91 pas", "90 × 2 = 180 kurang", "7 × 13 pas", "susulan 95 pas", "PR gue: 182 = 2 × 7 × 13", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 91 bukan prima"],
 "telat dari arsip. separuh 182. tuntas", ("182/2 = 91", "182/2", "91"))

t(1377, "Kerja bersama: A 6 jam, B 30 jam → 1/6 + 1/30 = 6/30 = 1/5 per jam → 5 jam. Penyebut 30 penyatu. Susulan: A 6, B 12? 4 jam ya? (2/12 + 1/12 = 1/4). Cek dong",
 ["6/30 pas", "1/5 pas", "5 jam pas", "susulan 4 jam pas", "PR gue: 5/30 + 1/30 = 6/30", "iya, KPK", "jawaban post semua kuku", "catet: jumlah laju", "iya, b41 juga", "jawaban post lengkap", "susulan: 5 jam satu shift"],
 "telat dari arsip. kerja bersama 6-30. tuntas", ("1/6 + 1/30 = 1/5 → 5 jam", "5+1", "6"))

t(1378, "KPK 40 dan 60 = 120. Kelipatan 40: 40, 80, 120. Kelipatan 60: 60, 120. Temen jawab 2.400 — 120 cukup. Susulan: 120 = 40 × 3 = 60 × 2 ya? cek. Cek dong",
 ["120 pas", "2.400 kelebihan", "40 × 3 pas", "PR gue: 40 = 2³ × 5, 60 = 2² × 3 × 5", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK kelipatan pertama", "iya, b41 juga", "jawaban post lengkap", "susulan: 120 = dua jam menit"],
 "telat dari arsip. KPK 40-60. tuntas", ("KPK 40, 60 = 120", "40*3", "120"))

t(1379, "T93 = 4.371. Tangga segitiga 93 tingkat: 93 × 94/2. Temen nanya 4.371 habis dibagi 3: ya, digit sum 15. Susulan: T94? 4.465 ya? (4.371 + 94). Cek dong",
 ["4.371 pas", "93 × 47 pas", "susulan 4.465 pas", "PR gue: 4.371 + 94 naik", "iya pas", "jawaban post semua kuku", "catet: n(n+1)/2", "iya, rumus", "jawaban post lengkap", "susulan: 4.371 = 3 × 1.457"],
 "telat dari arsip. T93 = 4.371. tuntas", ("T93 = 93 × 94/2 = 4.371", "93*94/2", "4371"))

t(1380, "Fibonacci: ..., 17.711, 28.657 — 17.711 + 10.946 = 28.657. Temen nanya 28.657 prima? ya! Fibonacci prima besar. Susulan: setelah 28.657? 46.368 ya? (28.657 + 17.711). Cek dong",
 ["28.657 pas", "prima pas", "46.368 pas", "PR gue: 17.711 + 10.946 cek", "iya pas", "susulan: 46.368 habis dibagi 2", "iya pas", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, b37 juga", "jawaban post lengkap", "susulan: 46.368 lima digit"],
 "telat dari arsip. Fibonacci 28.657. tuntas", ("17.711 + 10.946 = 28.657", "17711+10946", "28657"))

t(1381, "37 × 3 = 111. Seratus sebelas — tiga angka satu! Temen baru sadar 111 repunit: 37 × 3 = 111, 37 × 6 = 222, 37 × 9 = 333. Susulan: 37 × 12? 444 ya? Cek dong",
 ["111 pas", "repunit pas", "444 pas", "PR gue: 37 keluarga 111", "iya, seru", "jawaban post semua kuku", "catet: 37 × 3 = 111 dasar", "iya, menarik", "jawaban post lengkap", "susulan: 444 = 4 × 111"],
 "telat dari arsip. 37 × 3 = 111. tuntas", ("37 × 3 = 111", "37*3", "111"))

t(1382, "2^15 = 32.768. Tangga pangkat 2 lanjut. Temen nanya 32.768 GB? 32 TB basis 2. Susulan: 2^16? 65.536 ya? Cek dong",
 ["32.768 pas", "32 TB basis 2 pas", "65.536 pas", "PR gue: 16.384 × 2 jalur", "iya, b51 juga", "jawaban post semua kuku", "catet: tangga lipat dua", "iya, b37 juga", "jawaban post lengkap", "susulan: 65.536 = 2^16"],
 "telat dari arsip. 2^15 = 32.768. tuntas", ("2^15 = 32.768", "16384*2", "32768"))

t(1383, "Heks 200 = 512. 2 × 256 — dan 512 = 2⁹! Temen heran heksa rapi: digit kedua × 16 pas pangkat 2. Susulan: 300? 768 ya? (3 × 256). Cek dong",
 ["2 × 256 pas", "512 pas", "2⁹ juga pas", "susulan 768 pas", "PR gue: 512 = 2⁹", "iya, pola", "jawaban post semua kuku", "catet: digit ketiga × 256", "iya, b48 juga", "jawaban post lengkap", "susulan: 512 dua wajah"],
 "telat dari arsip. heksa 200. tuntas", ("2 × 256 = 512", "2*256", "512"))

t(1384, "Digital root 111.111: 6 → 6? jumlah enam satu → 6. Satu tahap langsung! Temen heran gak perlu tahap dua. Susulan: 222.222? 12 → 3 ya? Cek dong",
 ["6 pas", "satu tahap pas", "susulan 3 pas", "PR gue: 6 sudah satu digit", "iya, selesai", "jawaban post semua kuku", "catet: berhenti satu digit", "iya, aturan", "jawaban post lengkap", "susulan: 111.111 cantik"],
 "telat dari arsip. digital root 111.111. tuntas", ("1+1+1+1+1+1 = 6", "1+1+1+1+1+1", "6"))

t(1385, "7.000 mod 7 = 0. 7.000 = 7 × 1.000 — kelipatan penuh. Temen nanya 7.007? sisa 0 lagi ya? (7 × 1.001). Susulan: 7.014? sisa 0 lagi ya? Cek dong",
 ["0 pas", "7 × 1.000 pas", "7.007 juga 0 pas", "susulan 0 lagi pas", "PR gue: 7.007 = 7 × 1.001", "iya pas", "jawaban post semua kuku", "catet: ribuan kelipatan 7", "iya, b46 juga", "jawaban post lengkap", "susulan: 7.014 = 7 × 1.002"],
 "telat dari arsip. 7.000 mod 7. tuntas", ("7.000 = 7 × 1.000 → 0", "7000", "7000"))

t(1386, "Pembulatan 9.444 ke ribuan = 9.000. 444 kurang 500 → turun. Temen tulis 9.500 — itu bukan ribuan. Susulan: 9.544? 10.000 ya? (544 naik). Cek dong",
 ["9.000 pas", "444 turun pas", "susulan 10.000 pas", "PR gue: tengah 500 ribuan", "iya, b41 juga", "jawaban post semua kuku", "catet: tiga digit akhir penentu", "iya, b44 juga", "jawaban post lengkap", "susulan: 9.444 deket 9.400"],
 "telat dari arsip. pembulatan 9.444. tuntas", ("9.444 → 9.000", "9444-9000", "444"))

t(1387, "Estimasi 399 × 201 ≈ 80.000 via 400 × 200. Persis 80.199 — selisih 199. Temen heran selisih besar: dua pembulatan arah beda. Susulan: 398 × 202? 80.396 ya? jauh lagi. Cek dong",
 ["80.000 pas", "80.199 pas", "selisih 199 pas", "susulan 80.396 pas", "PR gue: 400 × 200 tengah", "iya, cepat", "jawaban post semua kuku", "catet: bulatkan dua faktor", "iya, b42 juga", "jawaban post lengkap", "susulan: estimasi kasar saja"],
 "telat dari arsip. estimasi 399×201. tuntas", ("399 × 201 = 80.199", "399*201", "80199"))

t(1388, "97 × 13 = 1.261. Kompensasi: 100 × 13 = 1.300, kurang 3 × 13 = 39 → 1.261. Temen tulis 1.263 — selisihnya 39. Susulan: 96 × 13? 1.248 ya? Cek dong",
 ["1.300 − 39 pas", "1.261 pas", "susulan 1.248 pas", "PR gue: 3 × 13 = 39", "iya, b40 juga", "jawaban post semua kuku", "catet: selisih × faktor lain", "iya, dua langkah", "jawaban post lengkap", "susulan: 1.261 habis dibagi 13"],
 "telat dari arsip. kompensasi 97×13. tuntas", ("1.300 − 39 = 1.261", "1300-39", "1261"))

t(1389, "501 × 499 = 249.999. (500+1)(500−1) = 250.000 − 1. Temen kali lurus lama. Susulan: 601 × 599? 359.999 ya? (600² − 1). Cek dong",
 ["250.000 − 1 pas", "249.999 pas", "susulan 359.999 pas", "PR gue: 500² = 250.000", "iya, identitas", "jawaban post semua kuku", "catet: (a±1) selisih kuadrat", "iya, b42 juga", "jawaban post lengkap", "susulan: 249.999 deket 250.000"],
 "telat dari arsip. 501 × 499. tuntas", ("250.000 − 1 = 249.999", "250000-1", "249999"))

t(1390, "Digit terakhir 3^100: siklus 3-9-7-1, 100 mod 4 = 0 → posisi 4 → akhir 1. Temen heran pangkat raksasa tinggal lihat sisa 4. Susulan: 3^101? akhir 3 ya? Cek dong",
 ["100 mod 4 = 0 pas", "akhir 1 pas", "susulan akhir 3 pas", "PR gue: habis dibagi 4 = posisi 4", "iya, metode", "jawaban post semua kuku", "catet: siklus empat", "iya, b46 juga", "jawaban post lengkap", "susulan: 3^100 raksasa"],
 "telat dari arsip. digit akhir 3^100. tuntas", ("100 mod 4 = 0 → akhir 1", "100", "100"))

t(1391, "Orang-hari: 60 orang-hari ÷ 12 orang = 5 hari. Temen kali — kebalik. Bagi total ÷ orang. Susulan: 20 orang? 3 hari ya? Cek dong",
 ["60 ÷ 12 pas", "5 hari pas", "susulan 3 hari pas", "PR gue: 12 × 5 = 60 cek", "iya, selalu", "jawaban post semua kuku", "catet: total ÷ orang", "iya, b40 juga", "jawaban post lengkap", "susulan: 60 = 12 × 5"],
 "telat dari arsip. orang-hari 60. tuntas", ("60/12 = 5 hari", "60/12", "5"))

t(1392, "Tangki: isi 3 jam, bocor 12 jam → net 1/3 − 1/12 = 3/12 = 1/4 per jam → 4 jam penuh. Temen heran net rapi lagi. Susulan: isi 3, bocor 24? net 3,43 an ya? (7/24). Cek dong",
 ["3/12 pas", "1/4 pas", "4 jam pas", "susulan 3,43 an pas", "PR gue: 8/24 − 1/24 = 7/24", "iya pas", "jawaban post semua kuku", "catet: KPK 12 penyatu", "iya, b40 juga", "jawaban post lengkap", "susulan: 4 jam shift pendek"],
 "telat dari arsip. tangki 3-12. tuntas", ("1/3 − 1/12 = 1/4 → 4 jam", "4-1", "3"))

t(1393, "Reseh digandakan setengah: ⅗ × 2,5 = 1½. 3/5 × 5/2 = 15/10 = 3/2. Temen heran coret 5-5 tinggal 3/2. Susulan: ⅖ × 2,5? 1 ya? Cek dong",
 ["3/5 × 5/2 pas", "3/2 pas", "1½ pas", "coret 5-5 pas", "susulan 1 pas", "PR gue: 2/5 × 5/2 = 1", "iya pas", "jawaban post semua kuku", "catet: desimal 2,5 = 5/2", "iya, dua jalur", "jawaban post lengkap", "susulan: 1½ cup ganda setengah"],
 "telat dari arsip. resep ⅗ × 2,5. tuntas", ("3/5 × 5/2 = 3/2", "15/10", "1.5"))

t(1394, "86°F → °C: (86 − 32) × 5/9 = 54 × 5/9 = 30°C. Temen balik urutan — kurangi 32 dulu. Susulan: 95°F? 35°C ya? (63 × 5/9). Cek dong",
 ["54 × 5/9 pas", "30°C pas", "kurangi 32 dulu pas", "susulan 35°C pas", "PR gue: 54 habis dibagi 9", "iya, rapi", "jawaban post semua kuku", "catet: balik urutan ke F", "iya, b39 juga", "jawaban post lengkap", "susulan: 30°C hangat"],
 "telat dari arsip. 86°F ke C. tuntas", ("(86 − 32) × 5/9 = 30", "54*5/9", "30"))

t(1395, "Kopi 1:15 — 7 g bubuk → 105 ml air. 7 × 15. Temen nanya 7 g sangat kecil? single pendek. Susulan: 9 g? 135 ml ya? Cek dong",
 ["105 ml pas", "7 g pendek pas", "susulan 135 ml pas", "PR gue: 7 × 15 = 105", "iya pas", "jawaban post semua kuku", "catet: g × 15 = ml", "iya, b40 juga", "jawaban post lengkap", "susulan: 105 ml single"],
 "telat dari arsip. kopi 7 g. tuntas", ("7 × 15 = 105 ml", "7*15", "105"))

t(1396, "Enam gelas 160 ml = 960 ml. 160 × 6. Temen tulis 96 L — salah tangga. Cek: 960 ml hampir 1 L. Susulan: 7 gelas? 1,12 L ya? Cek dong",
 ["960 ml pas", "96 salah tangga", "susulan 1,12 L pas", "PR gue: 960 deket 1.000", "iya pas", "jawaban post semua kuku", "catet: ml ke liter bagi 1.000", "iya, b37 juga", "jawaban post lengkap", "susulan: 960 ml hampir liter"],
 "telat dari arsip. gelas 160. tuntas", ("160 × 6 = 960 ml", "160*6", "960"))

t(1397, "Penyimpanan 9,9 GB − 6,6 GB = 3,3 GB sisa. Temen tulis 4,3 — 9,9 − 6,6: 9−6 = 3, 0,9−0,6 = 0,3. Susulan: 9,9 − 7,7? 2,2 ya? Cek dong",
 ["3,3 GB pas", "9−6 dan 0,9−0,6 pas", "susulan 2,2 pas", "PR gue: pisah bulat desimal", "iya, teknik", "jawaban post semua kuku", "catet: kurangi per bagian", "iya, sistematis", "jawaban post lengkap", "susulan: 3,3 GB sisa pas"],
 "telat dari arsip. sisa 9,9. tuntas", ("9,9 − 6,6 = 3,3", "9.9-6.6", "3.3"))

t(1398, "Unggah 6.300 MB dengan 35 MB/s → 180 detik = 3 menit. Temen bagi 6.300/35 langsung — 180 pas. Susulan: 70 MB/s? 90 detik ya? Cek dong",
 ["180 detik pas", "3 menit pas", "susulan 90 detik pas", "PR gue: 180 × 35 = 6.300 cek", "iya, selalu", "jawaban post semua kuku", "catet: ukuran ÷ laju", "iya, b37 juga", "jawaban post lengkap", "susulan: 180 dtk tiga menit"],
 "telat dari arsip. unggah 35 MB/s. tuntas", ("6.300/35 = 180 detik", "6300/35", "180"))

t(1399, "Kursi 93, baris 12 → 7 baris penuh + 9 kursi terpisah. 93/12 = 7 sisa 9. Beda dengan kasus kapasitas: sini sisa boleh berdiri sendiri. Susulan: 96 kursi? 8 baris tepat ya? Cek dong",
 ["7 sisa 9 pas", "7 penuh + 9 pas", "sisa boleh lepas", "susulan 8 tepat pas", "PR gue: 7 × 12 = 84", "iya pas", "jawaban post semua kuku", "catet: konteks menentukan sisa", "iya, nuansa", "jawaban post lengkap", "susulan: 96 = 8 × 12"],
 "telat dari arsip. kursi 93. tuntas", ("93 − 84 = 9 sisa", "93-84", "9"))

t(1400, "1+2+...+58 = 1.711. Pasangan 29: (1+58) sampai (29+30), masing 59 × 29. Temen heran 1.711 prima? cek: 1.711 ÷ 29 = 59 — bukan prima! 29 × 59. Susulan: 1..59? 1.770 ya? (1.711 + 59). Cek dong",
 ["29 pasang pas", "1.711 pas", "29 × 59 pas", "bukan prima pas", "susulan 1.770 pas", "PR gue: 1.711 = 29 × 59", "iya pas", "jawaban post semua kuku", "catet: berpasangan dua ujung", "iya, b37 juga", "jawaban post lengkap", "susulan: prima harus dicek"],
 "telat dari arsip. deret 1..58. tuntas", ("59 × 29 = 1.711", "59*29", "1711"))

assert len(T) == 25, len(T)
build2(T, 1376, "threads-56.ts", 56, 52, 876, 52,
       "Topik: separuh 182, kerja bersama 6-30, KPK 40-60, T93, Fibonacci 28.657, 37×3 = 111, 2^15, heksa 200, digital root 111.111, 7.000 mod 7, pembulatan 9.444, estimasi 399×201, kompensasi 97×13, 501×499, digit akhir 3^100, orang-hari 60, tangki 3-12, resep ⅗ × 2,5, 86°F ke C, kopi 7 g, gelas 160, sisa 9,9 GB, unggah 35 MB/s, kursi 93, deret 1..58.")
print("threads-56 ok")
