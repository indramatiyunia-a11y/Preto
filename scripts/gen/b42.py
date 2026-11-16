# threads-42.ts — BATCH 38 (id 1026-1050, authorId 526-550)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1026, "½ × 106 = 53. Genap rapi, hasil prima 53. Temen jawab 52 — 52 × 2 = 104, kurang 2. Susulan: ½ × 114? 57 ya? Cek dong",
 ["53 pas", "52 × 2 = 104 kurang", "susulan 57 pas", "PR gue: 53 prima pas", "iya pas", "susulan: 114 = 2 × 57 = 2 × 3 × 19", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 57 = 3 × 19"],
 "telat dari arsip. separuh 106. tuntas", ("106/2 = 53", "106/2", "53"))

t(1027, "Kerja bersama: A 3 jam, B 6 jam → 1/3 + 1/6 = 1/2 per jam → 2 jam. Ini kasus cantik: laju B setengah laju A, gabung tepat 2. Susulan: A 2, B 6? 1,5 jam ya? Cek dong",
 ["1/2 per jam pas", "2 jam pas", "kasus cantik pas", "susulan 1,5 jam pas", "PR gue: A 6, B 6? 3 jam", "iya, simetris", "jawaban post semua kuku", "catet: jumlah laju", "iya, b41 juga", "jawaban post lengkap", "susulan: 2 = 6/3"],
 "telat dari arsip. kerja bersama 3-6. tuntas", ("1/3 + 1/6 = 1/2 → 2 jam", "3+3", "6"))

t(1028, "KPK 8 dan 12 = 24. Kelipatan 8: 8, 16, 24. Kelipatan 12: 12, 24. Temen jawab 48 — 24 lebih kecil. Susulan: dua lonceng bunyi tiap 8 dan 12 menit → bersama tiap 24 menit ya? aplikasi. Cek dong",
 ["24 pas", "48 kelebihan", "lonceng tiap 24 mnt pas", "PR gue: KPK 6 dan 8? 24 juga", "iya pas", "susulan: 8 = 2³, 12 = 2² × 3", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK kelipatan pertama sama", "iya, definisi", "jawaban post lengkap", "susulan: 24 = 8 × 3 = 12 × 2"],
 "telat dari arsip. KPK 8-12. tuntas", ("KPK 8, 12 = 24", "8*3", "24"))

t(1029, "T12 = 78. Tangga segitiga 12 tingkat: 12 × 13/2. Temen hitung manual 1+2+...+12 = 78 pas — dua jalur. Susulan: T13? 91 ya? (78 + 13). Cek dong",
 ["78 pas", "dua jalur pas", "susulan 91 pas", "PR gue: 78 + 13 naik satu tingkat", "iya pas", "susulan: T13 = 7 × 13 juga", "iya pas", "jawaban post semua kuku", "catet: n(n+1)/2", "iya, rumus", "jawaban post lengkap", "susulan: 78 deket 80"],
 "telat dari arsip. T12 = 78. tuntas", ("T12 = 12 × 13/2 = 78", "12*13/2", "78"))

t(1030, "Fibonacci lanjut: ..., 13, 21, 34 — 21 + 13 = 34. Temen nanya kenapa 34 sering muncul di alam spiral: rasio antar suku mendekati 1,618. Susulan: setelah 34? 55 ya? (34 + 21). Cek dong",
 ["34 pas", "21 + 13 cek", "55 pas", "PR gue: 55 + 34 = 89", "iya pas", "susulan: rasio ≈ 1,618 konstanta", "iya, menyenangkan", "jawaban post semua kuku", "catet: dua suku terakhir dijumlah", "iya, aturan", "jawaban post lengkap", "susulan: 34 = 21 + 13"],
 "telat dari arsip. Fibonacci 34. tuntas", ("21 + 13 = 34", "21+13", "34"))

t(1031, "8 × 13 = 104. Seratus empat. Temen tulis 94 — salah 10. Cek: 8 × 13 = 8 × 10 + 8 × 3 = 104. Susulan: 13 × 9? 117 ya? Cek dong",
 ["104 pas", "94 salah 10", "117 pas", "PR gue: 80 + 24 rapi", "iya pas", "susulan: 104 = 8 × 13", "iya pas", "jawaban post semua kuku", "catet: pecah 10 + 3", "iya, standar", "jawaban post lengkap", "susulan: 104 habis dibagi 8"],
 "telat dari arsip. 8 × 13. tuntas", ("8 × 13 = 104", "8*13", "104"))

t(1032, "Biner 1010 = 10 desimal. 1×8 + 0×4 + 1×2 + 0×1. Temen baca sepuluh ribu sepuluh — itu desimal, biner dibaca per posisi. Susulan: 1011? 11 ya? (+1). Cek dong",
 ["8 + 2 pas", "10 pas", "susulan 11 pas", "PR gue: 1000? 8", "iya pas", "susulan: posisi 8,4,2,1", "iya, pangkat 2", "jawaban post semua kuku", "catet: biner dibaca per posisi", "iya, basis 2", "jawaban post lengkap", "susulan: 1010₂ dekat penulisan 1010"],
 "telat dari arsip. biner 1010. tuntas", ("8 + 2 = 10", "8+2", "10"))

t(1033, "Heks 2A = 42. 2 × 16 + 10 = 42. A tetap 10 di posisi mana pun. Temen kali 2 × 10 — posisi puluhan heksa bernilai 16. Susulan: 1F? 31 ya? (16 + 15). Cek dong",
 ["2 × 16 pas", "42 pas", "susulan 31 pas", "PR gue: 20 heksa? 32", "iya pas", "susulan: posisi kedua = 16", "iya, basis 16", "jawaban post semua kuku", "catet: digit × pangkat basis", "iya, umum semua basis", "jawaban post lengkap", "susulan: 42 = 2A heksa"],
 "telat dari arsip. heksa 2A. tuntas", ("2 × 16 + 10 = 42", "32+10", "42"))

t(1034, "Skala 1:50.000. 4 cm di peta = 2 km nyata (4 × 50.000 cm = 200.000 cm). Temen tulis 20 km — satu tangga kelebihan. Susulan: 10 cm? 5 km ya? Cek dong",
 ["2 km pas", "20 km kelebihan tangga", "susulan 5 km pas", "PR gue: 1 cm? 500 m", "iya pas", "susulan: 50.000 cm = 500 m per cm", "iya, enak", "jawaban post semua kuku", "catet: cm × skala lalu konversi", "iya, dua langkah", "jawaban post lengkap", "susulan: skala kecil = peta detail"],
 "telat dari arsip. skala 1:50.000. tuntas", ("4 × 50.000 = 200.000 cm", "4*50000", "200000"))

t(1035, "Pembulatan 1.274 ke ratusan = 1.300. 74 di atas 50 → naik. Temen tulis 1.200 — 74 itu lebih dari 50. Susulan: 1.249? 1.200 ya? (49 kurang 50). Cek dong",
 ["1.300 pas", "74 naik pas", "susulan 1.200 pas", "PR gue: 1.250? pas tengah, kesepakatan naik", "iya, bila aturan naik", "jawaban post semua kuku", "catet: tengah 50 penentu", "iya, aturan", "jawaban post lengkap", "susulan: sebut aturan pembulatannya"],
 "telat dari arsip. pembulatan ratusan. tuntas", ("1274 → 1300", "1300-1274", "26"))

t(1036, "Estimasi 19 × 21 ≈ 400 via 20 × 20. Hasil persis 399 — selisih 1. Estimasi kasar cukup untuk cek kewajaran. Susulan: 29 × 31 ≈ 900 ya? (30 × 30). Cek dong",
 ["20 × 20 pas", "399 pas", "selisih 1 pas", "susulan 900 pas", "PR gue: 49 × 51? ≈ 2500, persis 2499", "iya, pola sama", "jawaban post semua kuku", "catet: bulatkan dua faktor", "iya, cepat", "jawaban post lengkap", "susulan: estimasi dulu, hitung belakangan"],
 "telat dari arsip. estimasi 19×21. tuntas", ("19 × 21 = 399", "19*21", "399"))

t(1037, "29 × 4 = 116. Kompensasi: 30 × 4 = 120, kurang 1 × 4 → 116. Temen langsung kaku — deket 30 lebih enak. Susulan: 49 × 3? 147 ya? (150 − 3). Cek dong",
 ["120 − 4 pas", "116 pas", "susulan 147 pas", "PR gue: 19 × 5? 100 − 5 = 95", "iya pas", "susulan: deket bulat dikurangi", "iya, trik", "jawaban post semua kuku", "catet: kompensasi selisihnya", "iya, itu intinya", "jawaban post lengkap", "susulan: 116 = 29 × 4"],
 "telat dari arsip. kompensasi 29×4. tuntas", ("30 × 4 − 4 = 116", "120-4", "116"))

t(1038, "51 × 49 = 2499. Selisih kuadrat: (50+1)(50−1) = 50² − 1 = 2499. Temen kali lurus lama — bentuk selisih lebih cepet. Susulan: 61 × 59? 3599 ya? (60² − 1). Cek dong",
 ["50² − 1 pas", "2499 pas", "susulan 3599 pas", "PR gue: 101 × 99? 9999", "iya pas", "susulan: (a+1)(a−1) = a² − 1", "iya, identitas", "jawaban post semua kuku", "catet: selisih kuadrat bentuk (a±1)", "iya, sering kepakai", "jawaban post lengkap", "susulan: 2499 deket 2500"],
 "telat dari arsip. 51 × 49. tuntas", ("2500 − 1 = 2499", "2500-1", "2499"))

t(1039, "Jumlah genap 2+4+6+8+10 = 30. Lima genap pertama. Temen nanya rumus: 2(1+2+3+4+5) = 2 × 15 = 30. Susulan: sampai 12? 42 ya? (2+4+...+12 = 2 × 21). Cek dong",
 ["30 pas", "2 × 15 pas", "susulan 42 pas", "PR gue: 2+4+...+20? 110", "iya pas", "susulan: genap = 2 × segitiga", "iya, hubungan cantik", "jawaban post semua kuku", "catet: faktor 2 keluar", "iya, distributif", "jawaban post lengkap", "susulan: 30 = 6 × 5"],
 "telat dari arsip. jumlah genap. tuntas", ("2+4+6+8+10 = 30", "2+4+6+8+10", "30"))

t(1040, "Digit terakhir 2^n berulang: 2, 4, 8, 6, 2, 4... siklus 4. 2^7 = 128 → akhir 8 (posisi 3 siklus). Temen nanya 2^8? akhir 6. Cek dong",
 ["siklus 2-4-8-6 pas", "128 akhir 8 pas", "2^8 akhir 6 pas", "PR gue: 2^9? akhir 2 lagi", "iya, mulai ulang", "susulan: panjang siklus 4", "iya, tetap", "jawaban post semua kuku", "catet: siklus digit akhir", "iya, pola kuat", "jawaban post lengkap", "susulan: 128 = 2^7 bener"],
 "telat dari arsip. siklus 2^n. tuntas", ("2^7 = 128", "128*1", "128"))

t(1041, "Orang-hari: 3 orang × 5 hari = 15 orang-hari. Satuan campuran buat ukur total tenaga. Temen nanya 5 orang 3 hari? juga 15 — tuker posisi hasil sama. Susulan: 15 orang-hari, 5 orang? 3 hari ya? Cek dong",
 ["15 orang-hari pas", "5 × 3 juga 15 pas", "susulan 3 hari pas", "PR gue: 1 orang? 15 hari", "iya pas", "susulan: total tenaga tetap", "iya, invarian", "jawaban post semua kuku", "catet: orang × hari", "iya, dua faktor", "jawaban post lengkap", "susulan: bagi total ÷ orang = hari"],
 "telat dari arsip. orang-hari. tuntas", ("3 × 5 = 15 orang-hari", "3*5", "15"))

t(1042, "Tangki: kran isi 3 jam penuh, bocor kosong 6 jam. Net: 1/3 − 1/6 = 1/6 per jam → 6 jam penuh. Temen bingung bocor mengurangi laju. Susulan: isi 2, bocor 4? net 4 jam ya? (1/2 − 1/4 = 1/4). Cek dong",
 ["1/6 per jam pas", "6 jam pas", "bocor mengurangi laju pas", "susulan 4 jam pas", "PR gue: isi 4, bocor 12? net 6 jam", "iya pas", "jawaban post semua kuku", "catet: laju isi minus laju bocor", "iya, net", "jawaban post lengkap", "susulan: 6 jam = kebalikan 1/6"],
 "telat dari arsip. tangki net. tuntas", ("1/3 − 1/6 = 1/6 → 6 jam", "2-1", "1"))

t(1043, "Resep disetengah: ¾ cup ÷ 2 = ⅜ cup. Temen bingung ukurannya — ⅜ cup = 3 sendok makan penuh + 1,5 sdm? eh cukup ⅜ saja di gelas ukur. Susulan: ½ cup ÷ 2? ¼ ya? Cek dong",
 ["¾ ÷ 2 pas", "⅜ pas", "susulan ¼ pas", "PR gue: ⅔ ÷ 2? ⅓", "iya pas", "susulan: bagi 2 = kali ½", "iya, dua jalur", "jawaban post semua kuku", "catet: bagi pembilang atau kali ½", "iya, pilih enak", "jawaban post lengkap", "susulan: ⅜ = 0,375"],
 "telat dari arsip. resep setengah. tuntas", ("¾ ÷ 2 = ⅜", "3/8", "0.375"))

t(1044, "Konversi 25°C → °F: 25 × 9/5 + 32 = 45 + 32 = 77°F. Temen lupa +32 — 45°F itu dingin! Susulan: 30°C? 86°F ya? Cek dong",
 ["45 + 32 pas", "77°F pas", "lupa +32 salah", "susulan 86°F pas", "PR gue: 20°C? 68°F", "iya pas", "jawaban post semua kuku", "catet: kali 9/5 lalu +32", "iya, dua langkah", "jawaban post lengkap", "susulan: 25 × 9 = 225, /5 = 45"],
 "telat dari arsip. Celsius ke F. tuntas", ("25 × 9/5 = 45", "225/5", "45"))

t(1045, "Kompresi 80 MB jadi 20 MB — rasio 4:1, hemat 60 MB (75%). Temen nanya bisa lagi gak: zip dua kali jarang berguna, rasio makin kecil. Susulan: 100 MB → 25 MB? rasio 4:1 juga ya? Cek dong",
 ["rasio 4:1 pas", "hemat 60 MB pas", "susulan 4:1 juga pas", "PR gue: 60 MB → 15? 4:1 lagi", "iya pas", "susulan: 75% menyusut", "iya, sama artinya", "jawaban post semua kuku", "catet: ukuran awal ÷ akhir", "iya, rasio", "jawaban post lengkap", "susulan: 80/20 = 4"],
 "telat dari arsip. rasio kompresi. tuntas", ("80/20 = 4", "80/20", "4"))

t(1046, "Tidur 8 jam × 7 hari = 56 jam. Dari 168 jam seminggu → tepat sepertiga (56/168 = 1/3). Temen heran sepertiga hidup tidur — hitungannya persis begini. Susulan: 6 jam per hari? 42 jam → ¼ ya? Cek dong",
 ["56 jam pas", "168 total pas", "sepertiga pas", "susulan 42 jam pas", "PR gue: 42/168 = ¼ pas", "iya pas", "jawaban post semua kuku", "catet: minggu = 168 jam", "iya, 24 × 7", "jawaban post lengkap", "susulan: sisa 112 jam bangun"],
 "telat dari arsip. tidur seminggu. tuntas", ("56/168 = 1/3", "56*3", "168"))

t(1047, "Air harian: 8 gelas × 250 ml = 2 L. Temen nanya 1,5 L botol? 6 gelas ya. Susulan: 2,5 L? 10 gelas ya? Cek dong",
 ["2 L pas", "6 gelas pas", "susulan 10 gelas pas", "PR gue: 4 gelas? 1 L", "iya pas", "susulan: 250 × 8 = 2.000 ml", "iya, konversi", "jawaban post semua kuku", "catet: gelas × isi gelas", "iya, dua faktor", "jawaban post lengkap", "susulan: 1 L = 4 gelas 250"],
 "telat dari arsip. gelas air. tuntas", ("8 × 250 = 2.000 ml", "8*250", "2000"))

t(1048, "Poin loyalitas 35 dari syarat 100 → kurang 65. Tiap 10rb belanja = 1 poin → butuh 650rb lagi. Temen salah bagi — 65 poin × 10rb. Susulan: sudah 70? kurang 30 → 300rb ya? Cek dong",
 ["kurang 65 pas", "650rb pas", "susulan 300rb pas", "PR gue: 99? kurang 1 → 10rb", "iya pas", "susulan: poin × nilai per poin", "iya, dua langkah", "jawaban post semua kuku", "catet: selisih dulu, konversi belakangan", "iya, urutan", "jawaban post lengkap", "susulan: 100 − 35 = 65"],
 "telat dari arsip. poin loyalitas. tuntas", ("100 − 35 = 65", "100-35", "65"))

t(1049, "Penyimpanan 64 GB, 25 file × 2 GB = 50 GB → sisa 14 GB. Temen tulis 24 — 25 × 2 itu 50, bukan 40. Susulan: 20 file? sisa 24 GB ya? Cek dong",
 ["50 GB pas", "sisa 14 GB pas", "susulan 24 GB pas", "PR gue: 30 file? 60 — kelebihan 4", "iya, penuh", "susulan: cek kapasitas dulu", "iya, penting", "jawaban post semua kuku", "catet: total − terpakai", "iya, dasar", "jawaban post lengkap", "susulan: 25 × 2 = 50"],
 "telat dari arsip. sisa penyimpanan. tuntas", ("64 − 50 = 14 GB", "64-50", "14"))

t(1050, "1050 = 2 × 3 × 5² × 7. Faktorisasi: 1050 ÷ 2 = 525, ÷ 3 = 175, ÷ 5 = 35, ÷ 5 = 7 (prima). Empat prima beda. Susulan: 1050 = 21 × 50 juga ya? (3 × 7 × 2 × 5²). Cek dong",
 ["2 × 3 × 5² × 7 pas", "175 = 5² × 7 pas", "21 × 50 pas", "PR gue: 1050 habis dibagi 25", "iya, ekor 50", "jawaban post semua kuku", "catet: pecah sampai prima", "iya, b24 juga", "jawaban post lengkap", "susulan: empat prima berbeda, ramai"],
 "telat dari arsip. faktorisasi 1050. tuntas", ("1050 = 21 × 50", "21*50", "1050"))

assert len(T) == 25, len(T)
build2(T, 1026, "threads-42.ts", 42, 38, 526, 38,
       "Topik: separuh 106, kerja bersama 3-6, KPK 8-12, T12, Fibonacci 34, 8×13, biner 1010, heksa 2A, skala 1:50.000, pembulatan ratusan, estimasi 19×21, kompensasi 29×4, selisih kuadrat 51×49, jumlah genap, siklus 2^n, orang-hari, tangki net, resep setengah, C→F 25, kompresi 4:1, tidur sepertiga, gelas air, poin loyalitas, sisa penyimpanan, faktorisasi 1050.")
print("threads-42 ok")
