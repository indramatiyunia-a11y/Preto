# threads-60.ts — BATCH 56 (id 1476-1500, authorId 976-1000) — BATCH PENUTUP 1500
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1476, "½ × 198 = 99. Genap rapi, hasil 99 = 9 × 11. Temen jawab 98 — 98 × 2 = 196, kurang 2. Susulan: ½ × 202? 101 ya? prima tiga digit pertama! Cek dong",
 ["99 pas", "98 × 2 = 196 kurang", "9 × 11 pas", "susulan 101 pas", "PR gue: 198 = 2 × 9 × 11", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 101 prima tiga digit"],
 "telat dari arsip. separuh 198. tuntas", ("198/2 = 99", "198/2", "99"))

t(1477, "Kerja bersama: A 48 jam, B 24 jam → 1/48 + 1/24 = 3/48 = 1/16 per jam → 16 jam. Penyebut 48 penyatu. Susulan: A 48, B 16? 12 jam ya? (1/48 + 3/48 = 1/12). Cek dong",
 ["3/48 pas", "1/16 pas", "16 jam pas", "susulan 12 jam pas", "PR gue: 1/48 + 2/48 = 3/48", "iya, KPK", "jawaban post semua kuku", "catet: jumlah laju", "iya, b41 juga", "jawaban post lengkap", "susulan: 16 jam dua shift"],
 "telat dari arsip. kerja bersama 48-24. tuntas", ("1/48 + 1/24 = 1/16 → 16 jam", "1+2", "3"))

t(1478, "KPK 70 dan 105 = 210. Kelipatan 70: 70, 140, 210. Kelipatan 105: 105, 210. Temen jawab 7.350 — 210 cukup. Susulan: 210 = 70 × 3 = 105 × 2 ya? cek. Cek dong",
 ["210 pas", "7.350 kelebihan", "70 × 3 pas", "PR gue: 70 = 2 × 5 × 7, 105 = 3 × 5 × 7", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK kelipatan pertama", "iya, b41 juga", "jawaban post lengkap", "susulan: 210 = 2 × 3 × 5 × 7"],
 "telat dari arsip. KPK 70-105. tuntas", ("KPK 70, 105 = 210", "70*3", "210"))

t(1479, "T96 = 4.656. Tangga segitiga 96 tingkat: 96 × 97/2. Temen nanya 4.656 habis dibagi 16: ya, 291. Susulan: T97? 4.753 ya? (4.656 + 97). Cek dong",
 ["4.656 pas", "96 × 48,5 pas", "susulan 4.753 pas", "PR gue: 4.656 + 97 naik", "iya pas", "jawaban post semua kuku", "catet: n(n+1)/2", "iya, rumus", "jawaban post lengkap", "susulan: 4.656 = 16 × 291"],
 "telat dari arsip. T96 = 4.656. tuntas", ("T96 = 96 × 97/2 = 4.656", "96*97/2", "4656"))

t(1480, "Fibonacci: ..., 121.393, 196.418 — 121.393 + 75.025 = 196.418. Enam digit lanjut. Temen nanya 196.418 habis dibagi 2: ya, genap. Susulan: setelah 196.418? 317.811 ya? (196.418 + 121.393). Cek dong",
 ["196.418 pas", "genap pas", "317.811 pas", "PR gue: 121.393 + 75.025 cek", "iya pas", "susulan: 317.811 lima tiga digit? enam digit", "iya pas", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, b37 juga", "jawaban post lengkap", "susulan: 317.811 enam digit"],
 "telat dari arsip. Fibonacci 196.418. tuntas", ("121.393 + 75.025 = 196.418", "121393+75025", "196418"))

t(1481, "59 × 3 = 177. Seratus tujuh puluh tujuh. Temen tulis 167 — salah 10. Cek: 59 × 3 = 177 (60×3 − 3). Susulan: 59 × 4? 236 ya? Cek dong",
 ["177 pas", "167 salah 10", "236 pas", "PR gue: 180 − 3 rapi", "iya pas", "susulan: 59 prima", "iya pas", "jawaban post semua kuku", "catet: deket 60 dikurangi", "iya, trik", "jawaban post lengkap", "susulan: 177 habis dibagi 3"],
 "telat dari arsip. 59 × 3. tuntas", ("59 × 3 = 177", "59*3", "177"))

t(1482, "2^19 = 524.288. Tangga pangkat 2 besar. Temen nanya 524.288 = 2 × 262.144 ya? pas — lipat dua. Susulan: 2^20? 1.048.576 ya? Cek dong",
 ["524.288 pas", "2 × 262.144 pas", "1.048.576 pas", "PR gue: 262.144 × 2 jalur", "iya, b55 juga", "jawaban post semua kuku", "catet: tangga lipat dua", "iya, b37 juga", "jawaban post lengkap", "susulan: 1.048.576 = 2^20"],
 "telat dari arsip. 2^19 = 524.288. tuntas", ("2^19 = 524.288", "262144*2", "524288"))

t(1483, "Heks 700 = 1.792. 7 × 256. Temen baca tujuh ratus — heksa per posisi 256-16-1. Susulan: 710? 1.808 ya? (1.792 + 16). Cek dong",
 ["7 × 256 pas", "1.792 pas", "susulan 1.808 pas", "PR gue: 256 × 7 rapi", "iya pas", "jawaban post semua kuku", "catet: digit × pangkat 16", "iya, b44 juga", "jawaban post lengkap", "susulan: 1.792 habis dibagi 256"],
 "telat dari arsip. heksa 700. tuntas", ("7 × 256 = 1.792", "7*256", "1792"))

t(1484, "Digital root 555.555: 5×6 = 30 → 3. Temen kali enam lima — cepat. Susulan: 888.888? 48 → 3 juga ya? Cek dong",
 ["30 → 3 pas", "5 × 6 pas", "susulan 3 juga pas", "PR gue: 888.888 digit sum 48", "iya pas", "jawaban post semua kuku", "catet: jumlah sampai satu digit", "iya, b43 juga", "jawaban post lengkap", "susulan: 48 → 3 dua langkah"],
 "telat dari arsip. digital root 555.555. tuntas", ("5 × 6 = 30 → 3", "5*6", "30"))

t(1485, "21.000 mod 7 = 0. 21.000 = 7 × 3.000 — kelipatan penuh. Temen nanya 21.007? sisa 0 lagi ya? (7 × 3.001). Susulan: 21.014? sisa 0 lagi ya? Cek dong",
 ["0 pas", "7 × 3.000 pas", "21.007 juga 0 pas", "susulan 0 lagi pas", "PR gue: 21.007 = 7 × 3.001", "iya pas", "jawaban post semua kuku", "catet: ribuan kelipatan 7", "iya, b40 juga", "jawaban post lengkap", "susulan: 21.014 = 7 × 3.002"],
 "telat dari arsip. 21.000 mod 7. tuntas", ("21.000 = 7 × 3.000 → 0", "21000", "21000"))

t(1486, "Pembulatan 149.500 ke ribuan = 150.000. Tepat tengah 500 → naik (aturan umum). Temen tulis 149.000 — 500 memicu naik. Susulan: 149.499? 149.000 ya? (499 turun mepet). Cek dong",
 ["150.000 pas", "tengah naik pas", "susulan 149.000 pas", "PR gue: 500 = setengah ribuan", "iya, b41 juga", "jawaban post semua kuku", "catet: tiga digit akhir penentu", "iya, b44 juga", "jawaban post lengkap", "susulan: 149.500 mepet tengah"],
 "telat dari arsip. pembulatan 149.500. tuntas", ("149.500 → 150.000", "150000-149500", "500"))

t(1487, "Estimasi 4.998 + 3.002 ≈ 8.000 via 5.000 + 3.000. Persis 8.000! Kompensasi sempurna (−2 dan +2). Susulan: 4.997 + 3.002? 7.999 ya? selisih 1. Cek dong",
 ["8.000 pas", "kompensasi sempurna pas", "susulan 7.999 pas", "PR gue: 5.000 + 3.000 bulat", "iya, cepat", "jawaban post semua kuku", "catet: bulatkan dua suku", "iya, b42 juga", "jawaban post lengkap", "susulan: estimasi tepat sasaran"],
 "telat dari arsip. estimasi 4.998+3.002. tuntas", ("4.998 + 3.002 = 8.000", "4998+3002", "8000"))

t(1488, "197 × 15 = 2.955. Kompensasi: 200 × 15 = 3.000, kurang 3 × 15 = 45 → 2.955. Temen tulis 2.965 — selisihnya 45. Susulan: 196 × 15? 2.940 ya? Cek dong",
 ["3.000 − 45 pas", "2.955 pas", "susulan 2.940 pas", "PR gue: 3 × 15 = 45", "iya, b40 juga", "jawaban post semua kuku", "catet: selisih × faktor lain", "iya, dua langkah", "jawaban post lengkap", "susulan: 2.955 habis dibagi 15"],
 "telat dari arsip. kompensasi 197×15. tuntas", ("3.000 − 45 = 2.955", "3000-45", "2955"))

t(1489, "1.001 × 999 = 999.999. (1.000+1)(1.000−1) = 1.000.000 − 1. Temen kaget hasil ikonik: enam angka sembilan! Susulan: 1.001 = 7 × 11 × 13 juga ya? tiga prima berurutan. Cek dong",
 ["1.000.000 − 1 pas", "999.999 pas", "enam sembilan pas", "7 × 11 × 13 pas", "PR gue: 1.000² = 1.000.000", "iya, identitas", "jawaban post semua kuku", "catet: (a±1) selisih kuadrat", "iya, b42 juga", "jawaban post lengkap", "susulan: 999.999 ikonik"],
 "telat dari arsip. 1.001 × 999. tuntas", ("1.000.000 − 1 = 999.999", "1000000-1", "999999"))

t(1490, "Digit terakhir 4^99: siklus 4-6, 99 ganjil → akhir 4. Temen cek 4^1 = 4, 4^3 = 64 — konsisten. Susulan: 4^100? akhir 6 ya? genap. Cek dong",
 ["siklus 4-6 pas", "99 ganjil → 4 pas", "64 pas", "susulan akhir 6 pas", "PR gue: 4^3 = 64 bener", "iya, b45 juga", "jawaban post semua kuku", "catet: ganjil-genap penentu", "iya, sederhana", "jawaban post lengkap", "susulan: siklus dua stabil"],
 "telat dari arsip. digit akhir 4^99. tuntas", ("4^3 = 64 akhir 4", "64*1", "64"))

t(1491, "Kerja bersama: A 20 jam, B 12 jam → 1/20 + 1/12 = 8/60 = 2/15 per jam → 7,5 jam. Penyebut 60 penyatu. Temen heran hasil desimal — 7j30m. Susulan: A 12, B 20? 7,5 juga ya? komutatif. Cek dong",
 ["8/60 pas", "2/15 pas", "7,5 jam pas", "susulan 7,5 juga pas", "PR gue: 3/60 + 5/60 = 8/60", "iya, KPK", "jawaban post semua kuku", "catet: jumlah laju", "iya, b41 juga", "jawaban post lengkap", "susulan: 7,5 jam = 7j30m"],
 "telat dari arsip. kerja bersama 20-12. tuntas", ("1/20 + 1/12 = 2/15 → 7,5 jam", "3+5", "8"))

t(1492, "Tangki: isi 15 jam, bocor 60 jam → net 1/15 − 1/60 = 3/60 = 1/20 per jam → 20 jam penuh. Penyebut 60 penyatu. Susulan: isi 15, bocor 30? net 30 jam ya? (1/30). Cek dong",
 ["3/60 pas", "1/20 pas", "20 jam pas", "susulan 30 jam pas", "PR gue: 4/60 − 1/60 = 3/60", "iya, KPK", "jawaban post semua kuku", "catet: net lalu kebalikan", "iya, b40 juga", "jawaban post lengkap", "susulan: 20 jam dua shift"],
 "telat dari arsip. tangki 15-60. tuntas", ("1/15 − 1/60 = 1/20 → 20 jam", "4-1", "3"))

t(1493, "Reseh dibagi: 6¾ ÷ 1½ = 4½. 27/4 × 2/3 = 54/12 = 4½. Temen heran coret 3-3 tinggal 27/6? eh 54/12 sederhanakan 9/2. Susulan: 6¾ ÷ 2¼? 3 ya? (27/4 × 4/9 = 3). Cek dong",
 ["27/4 pas", "9/2 pas", "4½ pas", "susulan 3 pas", "PR gue: 27/4 × 4/9 coret", "iya pas", "jawaban post semua kuku", "catet: bagi = kali kebalikan", "iya, b48 juga", "jawaban post lengkap", "susulan: 4,5 kali resep"],
 "telat dari arsip. resep 6¾ ÷ 1½. tuntas", ("27/4 × 2/3 = 9/2", "27*2", "54"))

t(1494, "10°C → °F: 10 × 9/5 + 32 = 18 + 32 = 50°F. Temen kali 9/5 kaku — 10/5 = 2, × 9 = 18. Susulan: 20°C? 68°F ya? (36 + 32). Cek dong",
 ["18 + 32 pas", "50°F pas", "10/5 = 2 cepat", "susulan 68°F pas", "PR gue: 10 × 9 = 90, /5 = 18", "iya pas", "jawaban post semua kuku", "catet: bagi 5 dulu lalu × 9", "iya, b40 juga", "jawaban post lengkap", "susulan: 50°F sejuk"],
 "telat dari arsip. 10°C ke F. tuntas", ("10 × 9/5 = 18", "90/5", "18"))

t(1495, "Kopi 1:15 — 22 g bubuk → 330 ml air. 22 × 15 = 330. Temen kali 22 × 1,5 — rasio 1:15. Susulan: 21 g? 315 ml ya? Cek dong",
 ["330 ml pas", "rasio 1:15 pas", "susulan 315 ml pas", "PR gue: 22 × 15 = 330", "iya pas", "jawaban post semua kuku", "catet: g × 15 = ml", "iya, b40 juga", "jawaban post lengkap", "susulan: 330 ml termos kecil"],
 "telat dari arsip. kopi 22 g. tuntas", ("22 × 15 = 330 ml", "22*15", "330"))

t(1496, "Lima belas gelas 200 ml = 3 L. 200 × 15. Temen tulis 30 L — salah tangga. Cek: 3.000 ml = 3 L. Susulan: 10 gelas? 2 L ya? Cek dong",
 ["3 L pas", "30 salah tangga", "susulan 2 L pas", "PR gue: 3.000 ml", "iya pas", "jawaban post semua kuku", "catet: ml ke liter bagi 1.000", "iya, b37 juga", "jawaban post lengkap", "susulan: 3 L galon kecil"],
 "telat dari arsip. gelas 200 × 15. tuntas", ("200 × 15 = 3.000 ml", "200*15", "3000"))

t(1497, "Penyimpanan 8 file × 3,5 GB = 28 GB. Temen tulis 280 — koma hilang. Cek: 3,5 × 8 = 28. Susulan: 4 file? 14 GB ya? Cek dong",
 ["28 GB pas", "280 koma hilang", "susulan 14 GB pas", "PR gue: 3 + 0,5 per file", "iya, 24 + 4", "jawaban post semua kuku", "catet: desimal × bulat", "iya, b37 juga", "jawaban post lengkap", "susulan: 28 GB boros"],
 "telat dari arsip. file 3,5 GB. tuntas", ("3,5 × 8 = 28 GB", "3.5*8", "28"))

t(1498, "Unggah 10.000 MB dengan 50 MB/s → 200 detik. Temen bagi 10.000/50 langsung — 200 pas. Susulan: 100 MB/s? 100 detik ya? Cek dong",
 ["200 detik pas", "susulan 100 detik pas", "PR gue: 200 × 50 = 10.000 cek", "iya, selalu", "jawaban post semua kuku", "catet: ukuran ÷ laju", "iya, b37 juga", "jawaban post lengkap", "susulan: 10 GB doser besar"],
 "telat dari arsip. unggah 50 MB/s. tuntas", ("10.000/50 = 200 detik", "10000/50", "200"))

t(1499, "Kertas 1.500 lembar ÷ 500 per rim = 3 rim. Rim = 500 lembar standar. Temen bagi 1.500/500 langsung — 3 pas. Susulan: 2.500 lembar? 5 rim ya? Cek dong",
 ["3 rim pas", "rim = 500 pas", "susulan 5 rim pas", "PR gue: 500 × 3 = 1.500 cek", "iya, selalu", "jawaban post semua kuku", "catet: lembar ÷ per rim", "iya, satuan kantor", "jawaban post lengkap", "susulan: 3 rim stok bulanan"],
 "telat dari arsip. rim 1.500 lembar. tuntas", ("1.500/500 = 3 rim", "1500/500", "3"))

t(1500, "CUITAN KE-1.500! Angkanya rapi: 1.500 = 2² × 3 × 5³ — faktor rapi. 1.500 menit = 25 jam. 1.500 jam ≈ 62,5 hari. 1.500 cm = 15 m. Susulan: 1.500 hari ≈ 4,1 tahun ya? Cek dong",
 ["2² × 3 × 5³ pas", "25 jam pas", "62,5 hari pas", "15 m pas", "susulan 4,1 an pas", "PR gue: 1.500 = 3 × 500", "iya pas", "jawaban post semua kuku", "catet: 1.500 angka penutup", "iya, milestone", "jawaban post lengkap", "susulan: seribu lima ratus, komplit!"],
 "telat dari arsip. 1.500 angka penutup. tuntas", ("1.500 = 2² × 3 × 5³", "4*3*125", "1500"))

assert len(T) == 25, len(T)
build2(T, 1476, "threads-60.ts", 60, 56, 976, 56,
       "Topik: separuh 198, kerja bersama 48-24, KPK 70-105, T96, Fibonacci 196.418, 59×3, 2^19, heksa 700, digital root 555.555, 21.000 mod 7, pembulatan 149.500, estimasi 4.998+3.002, kompensasi 197×15, 1.001×999, digit akhir 4^99, kerja bersama 20-12, tangki 15-60, resep 6¾ ÷ 1½, 10°C ke F, kopi 22 g, gelas 200 × 15, file 3,5 GB, unggah 50 MB/s, rim 1.500 lembar, 1.500 angka penutup.")
print("threads-60 ok")
