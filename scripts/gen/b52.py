# threads-52.ts — BATCH 48 (id 1276-1300, authorId 776-800)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1276, "½ × 158 = 79. Genap rapi, hasil prima 79. Temen jawab 78 — 78 × 2 = 156, kurang 2. Susulan: ½ × 166? 83 ya? Cek dong",
 ["79 pas", "78 × 2 = 156 kurang", "susulan 83 pas", "PR gue: 79 prima pas", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 158 = 2 × 79"],
 "telat dari arsip. separuh 158. tuntas", ("158/2 = 79", "158/2", "79"))

t(1277, "Kerja bersama simetris: A 9 jam, B 9 jam → 1/9 + 1/9 = 2/9 per jam → 4,5 jam. Sama kuat = setengah waktu solo. Temen nanya 4,5 jam = 4j30m ya? pas. Susulan: A 7, B 7? 3,5 ya? Cek dong",
 ["2/9 pas", "4,5 jam pas", "setengah waktu pas", "4j30m pas", "susulan 3,5 pas", "PR gue: 9 ÷ 2 = 4,5", "iya, shortcut", "jawaban post semua kuku", "catet: simetris = ÷ 2", "iya, b43 juga", "jawaban post lengkap", "susulan: 4,5 jam sorean"],
 "telat dari arsip. kerja simetris 9-9. tuntas", ("1/9 + 1/9 = 2/9 → 4,5 jam", "1+1", "2"))

t(1278, "KPK 22 dan 33 = 66. Kelipatan 22: 22, 44, 66. Kelipatan 33: 33, 66. Temen jawab 726 — 66 cukup. Susulan: 66 = 22 × 3 = 33 × 2 ya? cek. Cek dong",
 ["66 pas", "726 kelebihan", "22 × 3 pas", "PR gue: 22 = 2 × 11, 33 = 3 × 11", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK kelipatan pertama", "iya, b41 juga", "jawaban post lengkap", "susulan: 66 = 2 × 3 × 11"],
 "telat dari arsip. KPK 22-33. tuntas", ("KPK 22, 33 = 66", "22*3", "66"))

t(1279, "T75 = 2.850. Tangga segitiga 75 tingkat: 75 × 76/2. Temen nanya hubungan 3.025 = 55²? jauh. Susulan: T76? 2.926 ya? (2.850 + 76). Cek dong",
 ["2.850 pas", "75 × 38 pas", "susulan 2.926 pas", "PR gue: 2.850 + 76 naik", "iya pas", "jawaban post semua kuku", "catet: n(n+1)/2", "iya, rumus", "jawaban post lengkap", "susulan: 2.850 habis dibagi 75"],
 "telat dari arsip. T75 = 2.850. tuntas", ("T75 = 75 × 76/2 = 2.850", "75*76/2", "2850"))

t(1280, "Fibonacci: ..., 2.584, 4.181 — 2.584 + 1.597 = 4.181. Temen nanya 4.181 prima? ya! Fibonacci prima lagi. Susulan: setelah 4.181? 6.765 ya? (4.181 + 2.584). Cek dong",
 ["4.181 pas", "prima pas", "6.765 pas", "PR gue: 2.584 + 1.597 cek", "iya pas", "susulan: 6.765 habis dibagi 5", "iya pas", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, b37 juga", "jawaban post lengkap", "susulan: 6.765 = 5 × 1.353"],
 "telat dari arsip. Fibonacci 4.181. tuntas", ("2.584 + 1.597 = 4.181", "2584+1597", "4181"))

t(1281, "22 × 5 = 110. Seratus sepuluh. Temen tulis 100 — salah 10. Cek: 22 × 5 = 110 (20×5 + 2×5). Susulan: 22 × 6? 132 ya? Cek dong",
 ["110 pas", "100 salah 10", "132 pas", "PR gue: 100 + 10 rapi", "iya pas", "susulan: 110 = 2 × 5 × 11", "iya pas", "jawaban post semua kuku", "catet: pecah 20 + 2", "iya, standar", "jawaban post lengkap", "susulan: 110 habis dibagi 11"],
 "telat dari arsip. 22 × 5. tuntas", ("22 × 5 = 110", "22*5", "110"))

t(1282, "Biner 11111 (lima digit) = 31 = 2⁵ − 1. Temen nanya max 5 digit: 31. Susulan: 6 digit penuh? 63 ya? Cek dong",
 ["31 pas", "2⁵ − 1 pas", "63 pas", "PR gue: 32 − 1 cepat", "iya, b43 juga", "jawaban post semua kuku", "catet: digit penuh = max", "iya, b39 juga", "jawaban post lengkap", "susulan: 31 deket 32"],
 "telat dari arsip. biner 11111. tuntas", ("32 − 1 = 31", "32-1", "31"))

t(1283, "Heks 100 = 256. 1 × 256 — dan 256 = 2⁸! Tiga digit heksa masuk pangkat 2. Temen heran lompatan: 16² = 256. Susulan: 200? 512 ya? (2 × 256). Cek dong",
 ["1 × 256 pas", "256 pas", "2⁸ juga pas", "susulan 512 pas", "PR gue: 16² = 256", "iya, identitas", "jawaban post semua kuku", "catet: heksa posisi ketiga × 256", "iya, basis 16", "jawaban post lengkap", "susulan: 256 = 2⁸ dua wajah"],
 "telat dari arsip. heksa 100. tuntas", ("16² = 256", "16*16", "256"))

t(1284, "Digital root 65.432: 6+5+4+3+2 = 20 → 2. Temen berhenti di 20 — satu tahap lagi. Susulan: 12.345? 15 → 6 ya? Cek dong",
 ["20 → 2 pas", "dua tahap pas", "susulan 6 pas", "PR gue: 1+5 = 6 lanjut", "iya pas", "jawaban post semua kuku", "catet: jumlah sampai satu digit", "iya, b43 juga", "jawaban post lengkap", "susulan: 65.432 bukan habis 3"],
 "telat dari arsip. digital root 65.432. tuntas", ("6+5+4+3+2 = 20 → 2", "6+5+4+3+2", "20"))

t(1285, "3.000 mod 7 = 4. 2.996 = 428 × 7, sisa 4. Temen pecah: 2.800 habis 7 (7 × 400), 3.000 − 2.800 = 200, 200 mod 7 = 4 (196 sisa 4). Susulan: 3.003? sisa 0 ya? Cek dong",
 ["428 × 7 pas", "sisa 4 pas", "3.003 habis 7 pas", "PR gue: 2.800 + 200 pecah", "iya, hemat", "jawaban post semua kuku", "catet: kelipatan besar dulu", "iya, b40 juga", "jawaban post lengkap", "susulan: 3.003 = 7 × 429"],
 "telat dari arsip. 3.000 mod 7. tuntas", ("3.000 − 2.996 = 4", "3000-2996", "4"))

t(1286, "Pembulatan 7.777 ke ratusan = 7.800. 77 di atas 50 → naik. Temen tulis 7.700 — 77 lewat tengah. Susulan: 7.727? 7.700 ya? (27 turun). Cek dong",
 ["7.800 pas", "77 naik pas", "susulan 7.700 pas", "PR gue: tengah 50 ratusan", "iya, b41 juga", "jawaban post semua kuku", "catet: dua digit akhir penentu", "iya, b43 juga", "jawaban post lengkap", "susulan: 7.777 seragam, seru"],
 "telat dari arsip. pembulatan 7.777. tuntas", ("7.777 → 7.800", "7800-7777", "23"))

t(1287, "Estimasi 4 × 198 ≈ 800 via 4 × 200. Persis 792 — selisih 8. Estimasi kali juga jalan. Susulan: 5 × 397 ≈ 2.000 ya? persis 1.985. Cek dong",
 ["800 pas", "792 pas", "selisih 8 pas", "susulan 1.985 pas", "PR gue: 2 × 4 = 8 selisih", "iya, kompensasi", "jawaban post semua kuku", "catet: bulatkan satu faktor", "iya, cepat", "jawaban post lengkap", "susulan: 4 × 198 = 792"],
 "telat dari arsip. estimasi 4×198. tuntas", ("4 × 198 = 792", "4*198", "792"))

t(1288, "95 × 8 = 760. Kompensasi: 100 × 8 = 800, kurang 5 × 8 = 40 → 760. Temen tulis 780 — selisihnya 40. Susulan: 93 × 8? 744 ya? Cek dong",
 ["800 − 40 pas", "760 pas", "susulan 744 pas", "PR gue: 5 × 8 = 40", "iya, b40 juga", "jawaban post semua kuku", "catet: selisih × faktor lain", "iya, dua langkah", "jawaban post lengkap", "susulan: 760 deket 800"],
 "telat dari arsip. kompensasi 95×8. tuntas", ("800 − 40 = 760", "800-40", "760"))

t(1289, "121 × 119 = 14.399. (120+1)(120−1) = 14.400 − 1. Temen kali lurus lama. Susulan: 131 × 129? 16.899 ya? (130² − 1). Cek dong",
 ["14.400 − 1 pas", "14.399 pas", "susulan 16.899 pas", "PR gue: 120² = 14.400", "iya, identitas", "jawaban post semua kuku", "catet: (a±1) selisih kuadrat", "iya, b42 juga", "jawaban post lengkap", "susulan: 14.399 deket 14.400"],
 "telat dari arsip. 121 × 119. tuntas", ("14.400 − 1 = 14.399", "14400-1", "14399"))

t(1290, "Digit terakhir 2^20: siklus 2-4-8-6, 20 mod 4 = 0 → posisi 4 → akhir 6. Temen hitung 2^20 = 1.048.576 — akhir 6 cek! Susulan: 2^21? akhir 2 ya? Cek dong",
 ["20 mod 4 = 0 pas", "akhir 6 pas", "1.048.576 pas", "susulan akhir 2 pas", "PR gue: 2^20 = 2^10 × 2^10", "iya, 1.024²", "jawaban post semua kuku", "catet: sisa mod 4 posisi", "iya, b46 juga", "jawaban post lengkap", "susulan: 1.048.576 = 1.024²"],
 "telat dari arsip. digit akhir 2^20. tuntas", ("2^20 = 1.048.576 akhir 6", "1048576*1", "1048576"))

t(1291, "Orang-hari: 4 orang × 10 hari = 40 orang-hari. Total tenaga 40. Temen nanya 8 orang? 5 hari ya — tukar posisi. Susulan: 20 orang? 2 hari ya? Cek dong",
 ["40 orang-hari pas", "5 hari pas", "susulan 2 hari pas", "PR gue: 40 ÷ 20 = 2", "iya, invarian", "jawaban post semua kuku", "catet: orang × hari", "iya, b39 juga", "jawaban post lengkap", "susulan: 20 orang ramai"],
 "telat dari arsip. orang-hari 4×10. tuntas", ("4 × 10 = 40 orang-hari", "4*10", "40"))

t(1292, "Tangki: isi 10 jam, bocor 15 jam → net 1/10 − 1/15 = 1/30 per jam → 30 jam penuh. Net tipis banget — bocor rakus. Susulan: isi 10, bocor 30? net 15 jam ya? (2/30 = 1/15). Cek dong",
 ["1/30 pas", "30 jam pas", "bocor rakus pas", "susulan 15 jam pas", "PR gue: 3/30 − 2/30 = 1/30", "iya, KPK 30", "jawaban post semua kuku", "catet: net tipis lama", "iya, b40 juga", "jawaban post lengkap", "susulan: 30 jam lebih sehari"],
 "telat dari arsip. tangki 10-15. tuntas", ("1/10 − 1/15 = 1/30 → 30 jam", "3-2", "1"))

t(1293, "Resep dibelah: 1⅔ ÷ 2 = ⅚. 5/3 × 1/2 = 5/6. Temen bingung hasil aneh — memang begini, setengah dari 1⅔. Susulan: 1⅔ ÷ 5? ⅓ ya? Cek dong",
 ["5/3 pas", "5/6 pas", "kali ½ pas", "susulan ⅓ pas", "PR gue: 5/3 × 1/5 = 1/3", "iya pas", "jawaban post semua kuku", "catet: bagi = kali kebalikan", "iya, b48 juga", "jawaban post lengkap", "susulan: ⅚ cup aneh tapi sah"],
 "telat dari arsip. resep 1⅔ ÷ 2. tuntas", ("5/3 × 1/2 = 5/6", "5*1", "5"))

t(1294, "50°F → °C: (50 − 32) × 5/9 = 18 × 5/9 = 10°C. Temen balik urutan — kurangi 32 dulu. Susulan: 68°F? 20°C ya? (36 × 5/9). Cek dong",
 ["18 × 5/9 pas", "10°C pas", "kurangi 32 dulu pas", "susulan 20°C pas", "PR gue: 18 habis dibagi 9", "iya, rapi", "jawaban post semua kuku", "catet: balik urutan ke F", "iya, b39 juga", "jawaban post lengkap", "susulan: 10°C sejuk"],
 "telat dari arsip. 50°F ke C. tuntas", ("(50 − 32) × 5/9 = 10", "18*5/9", "10"))

t(1295, "Kopi 1:15 — 11 g bubuk → 165 ml air. 11 × 15 = 165. Temen kali 11 × 1,5 — rasio 1:15. Susulan: 15 g? 225 ml ya? Cek dong",
 ["165 ml pas", "rasio 1:15 pas", "susulan 225 ml pas", "PR gue: 11 × 15 = 165", "iya pas", "jawaban post semua kuku", "catet: g × 15 = ml", "iya, b40 juga", "jawaban post lengkap", "susulan: 165 ml cup standar"],
 "telat dari arsip. kopi 11 g. tuntas", ("11 × 15 = 165 ml", "11*15", "165"))

t(1296, "Lima gelas 220 ml = 1,1 L. 220 × 5. Temen tulis 11 L — salah tangga. Cek: 1.100 ml = 1,1 L. Susulan: 10 gelas? 2,2 L ya? Cek dong",
 ["1,1 L pas", "11 salah tangga", "susulan 2,2 L pas", "PR gue: 1.100 ml", "iya pas", "jawaban post semua kuku", "catet: ml ke liter bagi 1.000", "iya, b37 juga", "jawaban post lengkap", "susulan: 1,1 L pas sehari"],
 "telat dari arsip. gelas 220. tuntas", ("220 × 5 = 1.100 ml", "220*5", "1100"))

t(1297, "Penyimpanan 2 file × 5,5 GB = 11 GB. Temen tulis 110 — koma hilang. Cek: 5,5 × 2 = 11. Susulan: 4 file? 22 GB ya? Cek dong",
 ["11 GB pas", "110 koma hilang", "susulan 22 GB pas", "PR gue: 5 + 0,5 per file", "iya, 10 + 1", "jawaban post semua kuku", "catet: desimal × bulat", "iya, b37 juga", "jawaban post lengkap", "susulan: 22 GB makan banyak"],
 "telat dari arsip. file 5,5 GB. tuntas", ("5,5 × 2 = 11 GB", "5.5*2", "11"))

t(1298, "Unggah 900 MB dengan 15 MB/s → 60 detik. Temen bagi 900/15 langsung — 60 pas. Susulan: 18 MB/s? 50 detik ya? Cek dong",
 ["60 detik pas", "1 menit pas", "susulan 50 detik pas", "PR gue: 60 × 15 = 900 cek", "iya, selalu", "jawaban post semua kuku", "catet: ukuran ÷ laju", "iya, b37 juga", "jawaban post lengkap", "susulan: 60 dtk pas satu menit"],
 "telat dari arsip. unggah 15 MB/s. tuntas", ("900/15 = 60 detik", "900/15", "60"))

t(1299, "Mobil 4 kursi, 30 orang → 8 mobil. 30/4 = 7 sisa 2 → 8 (sisa tetap jalan). Temen jawab 7 — 2 orang tertinggal! Susulan: 28 orang? 7 tepat ya? Cek dong",
 ["7 sisa 2 pas", "8 mobil pas", "susulan 7 tepat pas", "PR gue: 7 × 4 = 28", "iya pas", "jawaban post semua kuku", "catet: bulat ke atas ada sisa", "iya, b37 juga", "jawaban post lengkap", "susulan: 8 × 4 = 32 muat"],
 "telat dari arsip. mobil 30 orang. tuntas", ("30/4 = 7 sisa 2 → 8", "8*4", "32"))

t(1300, "Fakta digit akhir kuadrat: hanya 0, 1, 4, 5, 6, 9. 2, 3, 7, 8 TIDAK PERNAH jadi akhir kuadrat! Temen cek: 4, 9, 16, 25, 36, 49, 64, 81, 100 — cocok. Susulan: makanya 2.025 kuadrat? eh 45²! akhir 5 ✓. Cek dong",
 ["enam digit sah pas", "2,3,7,8 mustahil pas", "cek 1-10 pas", "45² akhir 5 pas", "PR gue: 2.025 = 45² bener", "iya, b26 juga", "jawaban post semua kuku", "catet: filter cepat kuadrat", "iya, hemat", "jawaban post lengkap", "susulan: 2.025 tahun kuadrat"],
 "telat dari arsip. akhir kuadrat. tuntas", ("45² = 2.025", "45*45", "2025"))

assert len(T) == 25, len(T)
build2(T, 1276, "threads-52.ts", 52, 48, 776, 48,
       "Topik: separuh 158, kerja simetris 9-9, KPK 22-33, T75, Fibonacci 4.181, 22×5, biner 11111, heksa 100, digital root 65.432, 3.000 mod 7, pembulatan 7.777, estimasi 4×198, kompensasi 95×8, 121×119, digit akhir 2^20, orang-hari 4×10, tangki 10-15, resep 1⅔ ÷ 2, 50°F ke C, kopi 11 g, gelas 220, file 5,5 GB, unggah 15 MB/s, mobil 30 orang, akhir kuadrat 0-1-4-5-6-9.")
print("threads-52 ok")
