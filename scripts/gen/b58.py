# threads-58.ts — BATCH 54 (id 1426-1450, authorId 926-950)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1426, "½ × 190 = 95. Genap rapi, hasil 95 = 5 × 19. Temen jawab 94 — 94 × 2 = 188, kurang 2. Susulan: ½ × 194? 97 ya? dua digit prima terakhir! Cek dong",
 ["95 pas", "94 × 2 = 188 kurang", "5 × 19 pas", "susulan 97 pas", "PR gue: 190 = 2 × 5 × 19", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 97 prima terakhir dua digit"],
 "telat dari arsip. separuh 190. tuntas", ("190/2 = 95", "190/2", "95"))

t(1427, "Kerja bersama: A 10 jam, B 40 jam → 1/10 + 1/40 = 5/40 = 1/8 per jam → 8 jam. Penyebut 40 penyatu. Susulan: A 40, B 10? 8 juga ya? komutatif. Cek dong",
 ["5/40 pas", "1/8 pas", "8 jam pas", "susulan 8 juga pas", "PR gue: 4/40 + 1/40 = 5/40", "iya, KPK", "jawaban post semua kuku", "catet: jumlah laju", "iya, b41 juga", "jawaban post lengkap", "susulan: 8 jam kerja penuh"],
 "telat dari arsip. kerja bersama 10-40. tuntas", ("1/10 + 1/40 = 1/8 → 8 jam", "4+1", "5"))

t(1428, "KPK 55 dan 66 = 330. Kelipatan 55: 55, 110, 165, 220, 275, 330. Kelipatan 66: 66, 132, ..., 330. Temen jawab 3.630 — 330 cukup. Susulan: 330 = 55 × 6 = 66 × 5 ya? cek. Cek dong",
 ["330 pas", "3.630 kelebihan", "55 × 6 pas", "PR gue: 55 = 5 × 11, 66 = 2 × 3 × 11", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK kelipatan pertama", "iya, b41 juga", "jawaban post lengkap", "susulan: 330 = 2 × 3 × 5 × 11"],
 "telat dari arsip. KPK 55-66. tuntas", ("KPK 55, 66 = 330", "55*6", "330"))

t(1429, "T84 = 3.570. Tangga segitiga 84 tingkat: 84 × 85/2. Temen nanya 3.570 habis dibagi 7: ya, 510. Susulan: T85? 3.655 ya? (3.570 + 85). Cek dong",
 ["3.570 pas", "84 × 42,5 pas", "susulan 3.655 pas", "PR gue: 3.570 + 85 naik", "iya pas", "jawaban post semua kuku", "catet: n(n+1)/2", "iya, rumus", "jawaban post lengkap", "susulan: 3.570 = 7 × 510"],
 "telat dari arsip. T84 = 3.570. tuntas", ("T84 = 84 × 85/2 = 3.570", "84*85/2", "3570"))

t(1430, "Fibonacci: ..., 46.368, 75.025 — 46.368 + 28.657 = 75.025. Temen nanya 75.025 habis dibagi 5: ya, akhir 5 — posisi Fibonacci ke-25! Susulan: setelah 75.025? 121.393 ya? (75.025 + 46.368). Cek dong",
 ["75.025 pas", "habis 5 pas", "121.393 pas", "PR gue: 46.368 + 28.657 cek", "iya pas", "susulan: 121.393 lima digit", "iya pas", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, b37 juga", "jawaban post lengkap", "susulan: 121.393 Fibonacci prima? ya"],
 "telat dari arsip. Fibonacci 75.025. tuntas", ("46.368 + 28.657 = 75.025", "46368+28657", "75025"))

t(1431, "43 × 3 = 129. Seratus dua puluh sembilan. Temen tulis 119 — salah 10. Cek: 43 × 3 = 129 (40×3 + 3×3). Susulan: 43 × 4? 172 ya? Cek dong",
 ["129 pas", "119 salah 10", "172 pas", "PR gue: 120 + 9 rapi", "iya pas", "susulan: 43 prima", "iya pas", "jawaban post semua kuku", "catet: deket 40 ditambah", "iya, trik", "jawaban post lengkap", "susulan: 129 habis dibagi 3"],
 "telat dari arsip. 43 × 3. tuntas", ("43 × 3 = 129", "43*3", "129"))

t(1432, "2^17 = 131.072. Tangga pangkat 2 besar. Temen nanya 131.072 = 2 × 65.536 ya? pas — lipat dua. Susulan: 2^18? 262.144 ya? Cek dong",
 ["131.072 pas", "2 × 65.536 pas", "262.144 pas", "PR gue: 65.536 × 2 jalur", "iya, b53 juga", "jawaban post semua kuku", "catet: tangga lipat dua", "iya, b37 juga", "jawaban post lengkap", "susulan: 262.144 = 2^18"],
 "telat dari arsip. 2^17 = 131.072. tuntas", ("2^17 = 131.072", "65536*2", "131072"))

t(1433, "Heks 500 = 1.280. 5 × 256. Temen baca lima ratus — heksa per posisi 256-16-1. Susulan: 600? 1.536 ya? (6 × 256). Cek dong",
 ["5 × 256 pas", "1.280 pas", "susulan 1.536 pas", "PR gue: 256 × 5 rapi", "iya pas", "jawaban post semua kuku", "catet: digit × pangkat 16", "iya, b44 juga", "jawaban post lengkap", "susulan: 1.280 habis dibagi 256"],
 "telat dari arsip. heksa 500. tuntas", ("5 × 256 = 1.280", "5*256", "1280"))

t(1434, "Digital root 333.333: 3×6 = 18 → 9. Temen heran habis 9: 333.333 = 9 × 37.037. Susulan: 666.666? 36 → 9 juga ya? Cek dong",
 ["18 → 9 pas", "3 × 6 pas", "habis 9 pas", "susulan 9 juga pas", "PR gue: 6 × 3 = 18", "iya, b52 juga", "jawaban post semua kuku", "catet: digit seragam cepat", "iya, b43 juga", "jawaban post lengkap", "susulan: 666.666 seru"],
 "telat dari arsip. digital root 333.333. tuntas", ("3 × 6 = 18 → 9", "3*6", "18"))

t(1435, "10.000 mod 7 = 4. 9.996 = 1.428 × 7, sisa 4. Temen pecah: 9.800 habis 7 (7 × 1.400), 10.000 − 9.800 = 200, 200 mod 7 = 4. Susulan: 10.004? sisa 1 ya? Cek dong",
 ["1.428 × 7 pas", "sisa 4 pas", "susulan 1 pas", "PR gue: 9.800 + 200 pecah", "iya, hemat", "jawaban post semua kuku", "catet: kelipatan besar dulu", "iya, b40 juga", "jawaban post lengkap", "susulan: 10.000 = 9.996 + 4"],
 "telat dari arsip. 10.000 mod 7. tuntas", ("10.000 − 9.996 = 4", "10000-9996", "4"))

t(1436, "Pembulatan 4.045 ke ratusan = 4.000. 45 kurang 50 → turun. Temen tulis 4.100 — 45 belum lewat tengah. Susulan: 4.055? 4.100 ya? (55 naik). Cek dong",
 ["4.000 pas", "45 turun pas", "susulan 4.100 pas", "PR gue: tengah 50 ratusan", "iya, b41 juga", "jawaban post semua kuku", "catet: dua digit akhir penentu", "iya, b43 juga", "jawaban post lengkap", "susulan: 4.045 mepet bawah"],
 "telat dari arsip. pembulatan 4.045. tuntas", ("4.045 → 4.000", "4045-4000", "45"))

t(1437, "Estimasi 6.997 + 2.003 ≈ 9.000 via 7.000 + 2.000. Persis 9.000! Kompensasi sempurna (−3 dan +3). Susulan: 6.998 + 2.003? 9.001 ya? selisih 1. Cek dong",
 ["9.000 pas", "kompensasi sempurna pas", "susulan 9.001 pas", "PR gue: 7.000 + 2.000 bulat", "iya, cepat", "jawaban post semua kuku", "catet: bulatkan dua suku", "iya, b42 juga", "jawaban post lengkap", "susulan: estimasi tepat sasaran"],
 "telat dari arsip. estimasi 6.997+2.003. tuntas", ("6.997 + 2.003 = 9.000", "6997+2003", "9000"))

t(1438, "87 × 9 = 783. Kompensasi: 90 × 9 = 810, kurang 3 × 9 = 27 → 783. Temen tulis 787 — selisihnya 27. Susulan: 86 × 9? 774 ya? Cek dong",
 ["810 − 27 pas", "783 pas", "susulan 774 pas", "PR gue: 3 × 9 = 27", "iya, b46 juga", "jawaban post semua kuku", "catet: deket 90 dikurangi", "iya, trik", "jawaban post lengkap", "susulan: 783 habis dibagi 9"],
 "telat dari arsip. kompensasi 87×9. tuntas", ("810 − 27 = 783", "810-27", "783"))

t(1439, "701 × 699 = 489.999. (700+1)(700−1) = 490.000 − 1. Temen kali lurus lama. Susulan: 801 × 799? 639.999 ya? (800² − 1). Cek dong",
 ["490.000 − 1 pas", "489.999 pas", "susulan 639.999 pas", "PR gue: 700² = 490.000", "iya, identitas", "jawaban post semua kuku", "catet: (a±1) selisih kuadrat", "iya, b42 juga", "jawaban post lengkap", "susulan: 489.999 deket 490.000"],
 "telat dari arsip. 701 × 699. tuntas", ("490.000 − 1 = 489.999", "490000-1", "489999"))

t(1440, "Digit terakhir 2^50: siklus 2-4-8-6, 50 mod 4 = 2 → posisi 2 → akhir 4. Temen heran pangkat lima puluh sekali sisa. Susulan: 2^51? akhir 8 ya? Cek dong",
 ["50 mod 4 = 2 pas", "akhir 4 pas", "susulan akhir 8 pas", "PR gue: sisa 2 = posisi 2", "iya, b46 juga", "jawaban post semua kuku", "catet: siklus empat", "iya, b40 juga", "jawaban post lengkap", "susulan: 2^50 raksasa"],
 "telat dari arsip. digit akhir 2^50. tuntas", ("50 mod 4 = 2 → akhir 4", "50", "50"))

t(1441, "Orang-hari: 7 orang × 8 hari = 56 orang-hari. Total tenaga 56. Temen nanya 14 orang? 4 hari ya. Susulan: 28 orang? 2 hari ya? Cek dong",
 ["56 orang-hari pas", "4 hari pas", "susulan 2 hari pas", "PR gue: 56 ÷ 14 = 4", "iya, invarian", "jawaban post semua kuku", "catet: orang × hari", "iya, b39 juga", "jawaban post lengkap", "susulan: 56 = 7 × 8"],
 "telat dari arsip. orang-hari 7×8. tuntas", ("7 × 8 = 56 orang-hari", "7*8", "56"))

t(1442, "Tangki: isi 18 jam, bocor 36 jam → net 1/18 − 1/36 = 1/36 per jam → 36 jam penuh. Net tipis — bocor separuh laju isi. Susulan: isi 18, bocor 72? net 24 jam ya? (3/72 = 1/24). Cek dong",
 ["1/36 pas", "36 jam pas", "bocor separuh laju pas", "susulan 24 jam pas", "PR gue: 2/36 − 1/36 = 1/36", "iya, KPK 36", "jawaban post semua kuku", "catet: net tipis lama", "iya, b40 juga", "jawaban post lengkap", "susulan: 36 jam setengah hari lebih"],
 "telat dari arsip. tangki 18-36. tuntas", ("1/18 − 1/36 = 1/36 → 36 jam", "2-1", "1"))

t(1443, "Reseh dibagi: 4½ ÷ 1½ = 3. 9/2 ÷ 3/2 = 9/2 × 2/3 = 3. Temen heran coret 2-2 tinggal 9/3 = 3. Susulan: 4½ ÷ ¾? 6 ya? Cek dong",
 ["9/2 ÷ 3/2 pas", "coret 2-2 pas", "3 pas", "susulan 6 pas", "PR gue: 9/2 × 4/3 = 6", "iya pas", "jawaban post semua kuku", "catet: bagi = kali kebalikan", "iya, b48 juga", "jawaban post lengkap", "susulan: 3 kali resep dasar"],
 "telat dari arsip. resep 4½ ÷ 1½. tuntas", ("9/2 × 2/3 = 3", "9*2", "18"))

t(1444, "−15°C → °F: −15 × 9/5 + 32 = −27 + 32 = 5°F. Temen kali minus — hasil minus 27, tambah 32. Susulan: −25°C? −13°F ya? (−45 + 32). Cek dong",
 ["−27 + 32 pas", "5°F pas", "minus dikali pas", "susulan −13°F pas", "PR gue: −15 × 9/5 = −27", "iya pas", "jawaban post semua kuku", "catet: tanda minus hati-hati", "iya, b45 juga", "jawaban post lengkap", "susulan: 5°F dingin"],
 "telat dari arsip. −15°C ke F. tuntas", ("32 − 27 = 5", "32-27", "5"))

t(1445, "Kopi 1:15 — 17 g bubuk → 255 ml air. 17 × 15 = 255. Temen kali 17 × 1,5 — rasio 1:15. Susulan: 16 g? 240 ml ya? Cek dong",
 ["255 ml pas", "rasio 1:15 pas", "susulan 240 ml pas", "PR gue: 17 × 15 = 255", "iya pas", "jawaban post semua kuku", "catet: g × 15 = ml", "iya, b40 juga", "jawaban post lengkap", "susulan: 255 ml mug penuh"],
 "telat dari arsip. kopi 17 g. tuntas", ("17 × 15 = 255 ml", "17*15", "255"))

t(1446, "Dua belas gelas 150 ml = 1,8 L. 150 × 12. Temen tulis 18 L — salah tangga. Cek: 1.800 ml = 1,8 L. Susulan: 10 gelas? 1,5 L ya? Cek dong",
 ["1,8 L pas", "18 salah tangga", "susulan 1,5 L pas", "PR gue: 1.800 ml", "iya pas", "jawaban post semua kuku", "catet: ml ke liter bagi 1.000", "iya, b37 juga", "jawaban post lengkap", "susulan: 1,8 L pas sehari"],
 "telat dari arsip. gelas 150 × 12. tuntas", ("150 × 12 = 1.800 ml", "150*12", "1800"))

t(1447, "Penyimpanan 6 file × 4,4 GB = 26,4 GB. Temen tulis 264 — koma hilang. Cek: 4,4 × 6 = 26,4. Susulan: 3 file? 13,2 GB ya? Cek dong",
 ["26,4 GB pas", "264 koma hilang", "susulan 13,2 GB pas", "PR gue: 4 + 0,4 per file", "iya, 24 + 2,4", "jawaban post semua kuku", "catet: desimal × bulat", "iya, b37 juga", "jawaban post lengkap", "susulan: 26,4 GB boros"],
 "telat dari arsip. file 4,4 GB. tuntas", ("4,4 × 6 = 26,4 GB", "4.4*6", "26.4"))

t(1448, "Unggah 8.100 MB dengan 45 MB/s → 180 detik = 3 menit. Temen bagi 8.100/45 langsung — 180 pas. Susulan: 90 MB/s? 90 detik ya? Cek dong",
 ["180 detik pas", "3 menit pas", "susulan 90 detik pas", "PR gue: 81 × 10 jalur", "iya, pecah", "jawaban post semua kuku", "catet: ukuran ÷ laju", "iya, b37 juga", "jawaban post lengkap", "susulan: 180 dtk tiga menit"],
 "telat dari arsip. unggah 45 MB/s. tuntas", ("8.100/45 = 180 detik", "8100/45", "180"))

t(1449, "Kelereng 101 butir, tas 10 → 11 tas. 101/10 = 10 sisa 1 → 11 (sisa tetap butuh tas). Temen jawab 10 — 1 kelereng nganggur. Susulan: 100 butir? 10 tepat ya? Cek dong",
 ["10 sisa 1 pas", "11 tas pas", "susulan 10 tepat pas", "PR gue: 10 × 10 = 100", "iya pas", "jawaban post semua kuku", "catet: bulat ke atas ada sisa", "iya, b37 juga", "jawaban post lengkap", "susulan: 11 × 10 = 110 muat"],
 "telat dari arsip. tas 101 kelereng. tuntas", ("101/10 = 10 sisa 1 → 11", "11*10", "110"))

t(1450, "1+2+...+62 = 1.953. Pasangan 31: (1+62) sampai (31+32), masing 63 × 31. Temen nanya 1.953 habis dibagi 3: ya, digit sum 18. Susulan: 1..63? 2.016 ya? (1.953 + 63). Cek dong",
 ["31 pasang pas", "1.953 pas", "63 × 31 pas", "susulan 2.016 pas", "PR gue: 63 × 31 rapi", "iya pas", "jawaban post semua kuku", "catet: berpasangan dua ujung", "iya, b37 juga", "jawaban post lengkap", "susulan: 2.016 tahun lalu juga"],
 "telat dari arsip. deret 1..62. tuntas", ("63 × 31 = 1.953", "63*31", "1953"))

assert len(T) == 25, len(T)
build2(T, 1426, "threads-58.ts", 58, 54, 926, 54,
       "Topik: separuh 190, kerja bersama 10-40, KPK 55-66, T84, Fibonacci 75.025, 43×3, 2^17, heksa 500, digital root 333.333, 10.000 mod 7, pembulatan 4.045, estimasi 6.997+2.003, kompensasi 87×9, 701×699, digit akhir 2^50, orang-hari 7×8, tangki 18-36, resep 4½ ÷ 1½, −15°C ke F, kopi 17 g, gelas 150 × 12, file 4,4 GB, unggah 45 MB/s, tas 101 kelereng, deret 1..62.")
print("threads-58 ok")
