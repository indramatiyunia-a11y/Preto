# threads-50.ts — BATCH 46 (id 1226-1250, authorId 726-750)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1226, "½ × 150 = 75. Genap rapi — 75 = ¾ × 100. Temen jawab 74 — 74 × 2 = 148, kurang 2. Susulan: ½ × 158? 79 ya? Cek dong",
 ["75 pas", "74 × 2 = 148 kurang", "¾ × 100 pas", "susulan 79 pas", "PR gue: 75 habis dibagi 5", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 150 = 2 × 75"],
 "telat dari arsip. separuh 150. tuntas", ("150/2 = 75", "150/2", "75"))

t(1227, "Kerja bersama: A 10 jam, B 15 jam → 1/10 + 1/15 = 5/30 = 1/6 per jam → 6 jam. Penyebut 30. Temen nanya kenapa bukan 12,5 (rata) — jumlah laju, bukan rata waktu. Susulan: A 5, B 10? 3,33 an ya? Cek dong",
 ["5/30 pas", "1/6 pas", "6 jam pas", "12,5 itu salah konsep", "susulan 3,33 an pas", "PR gue: 1/5 + 1/10 = 3/10", "iya pas", "jawaban post semua kuku", "catet: jumlah laju", "iya, b41 juga", "jawaban post lengkap", "susulan: rata waktu = jebakan"],
 "telat dari arsip. kerja bersama 10-15. tuntas", ("1/10 + 1/15 = 1/6 → 6 jam", "3+2", "5"))

t(1228, "KPK 20 dan 30 = 60. Kelipatan 20: 20, 40, 60. Kelipatan 30: 30, 60. Temen jawab 600 — 60 cukup. Susulan: 60 = 20 × 3 = 30 × 2 ya? cek. Cek dong",
 ["60 pas", "600 kelebihan", "20 × 3 pas", "PR gue: 20 = 2² × 5, 30 = 2 × 3 × 5", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK kelipatan pertama", "iya, b41 juga", "jawaban post lengkap", "susulan: 60 = kuartal menit juga"],
 "telat dari arsip. KPK 20-30. tuntas", ("KPK 20, 30 = 60", "20*3", "60"))

t(1229, "T53 = 1.431. Tangga segitiga 53 tingkat: 53 × 54/2. Temen nanya hubungannya 39² = 1.521 — deket tapi bukan. Susulan: T54? 1.485 ya? (1.431 + 54). Cek dong",
 ["1.431 pas", "53 × 27 pas", "susulan 1.485 pas", "PR gue: 1.431 + 54 naik", "iya pas", "jawaban post semua kuku", "catet: n(n+1)/2", "iya, rumus", "jawaban post lengkap", "susulan: 1.431 habis dibagi 27"],
 "telat dari arsip. T53 = 1.431. tuntas", ("T53 = 53 × 54/2 = 1.431", "53*54/2", "1431"))

t(1230, "Fibonacci: ..., 987, 1.597 — 987 + 610 = 1.597. Temen nanya 1.597 prima? ya! Fibonacci prima besar. Susulan: setelah 1.597? 2.584 ya? (1.597 + 987). Cek dong",
 ["1.597 pas", "prima pas", "2.584 pas", "PR gue: 987 + 610 cek", "iya pas", "susulan: 2.584 habis dibagi 2", "iya pas", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, b37 juga", "jawaban post lengkap", "susulan: 1.597 Fibonacci prima"],
 "telat dari arsip. Fibonacci 1.597. tuntas", ("987 + 610 = 1.597", "987+610", "1597"))

t(1231, "13 × 4 = 52. Lima puluh dua. Temen tulis 42 — salah 10. Cek: 13 × 4 = 52 (10×4 + 3×4). Susulan: 13 × 5? 65 ya? Cek dong",
 ["52 pas", "42 salah 10", "65 pas", "PR gue: 40 + 12 rapi", "iya pas", "susulan: 52 = 4 × 13", "iya pas", "jawaban post semua kuku", "catet: pecah 10 + 3", "iya, standar", "jawaban post lengkap", "susulan: 52 kartu dek juga"],
 "telat dari arsip. 13 × 4. tuntas", ("13 × 4 = 52", "13*4", "52"))

t(1232, "Biner 101010 = 42. 32 + 8 + 2. Temen baru sadar — 42 jawaban hidup! Pola bolak-balik 1-0. Susulan: 10101010? 170 ya? (128+32+8+2). Cek dong",
 ["32 + 8 + 2 pas", "42 pas", "susulan 170 pas", "PR gue: pola berselang", "iya pas", "jawaban post semua kuku", "catet: per posisi 32-16-8-4-2-1", "iya, b41 juga", "jawaban post lengkap", "susulan: 42 ikonik"],
 "telat dari arsip. biner 101010. tuntas", ("32 + 8 + 2 = 42", "32+8+2", "42"))

t(1233, "Heks 90 = 144. 9 × 16 — dan 144 = 12²! Temen heran heksa bisa kuadrat: kebetulan 144 = 9 × 16. Susulan: 40 heksa? 64 ya? — 8² juga! Cek dong",
 ["9 × 16 pas", "144 pas", "12² juga pas", "susulan 64 pas", "PR gue: 4 × 16 = 64", "iya, pola", "jawaban post semua kuku", "catet: digit × 16", "iya, b44 juga", "jawaban post lengkap", "susulan: 144 tiga wajah konteks"],
 "telat dari arsip. heksa 90. tuntas", ("9 × 16 = 144", "9*16", "144"))

t(1234, "Digital root 777: 21 → 3. Tiga tujuh → tiga! Temen nanya 777 habis dibagi 3: ya, 259. Susulan: 888? 24 → 6 ya? Cek dong",
 ["21 → 3 pas", "259 pas", "susulan 6 pas", "PR gue: 777 = 3 × 259", "iya pas", "jawaban post semua kuku", "catet: jumlah sampai satu digit", "iya, b43 juga", "jawaban post lengkap", "susulan: 777 deket 780"],
 "telat dari arsip. digital root 777. tuntas", ("7+7+7 = 21 → 3", "7+7+7", "21"))

t(1235, "700 mod 7 = 0. 700 = 7 × 100 — kelipatan penuh. Temen nanya 703? sisa 3 ya. Susulan: 707? sisa 0 lagi ya? (7 × 101). Cek dong",
 ["0 pas", "7 × 100 pas", "703 sisa 3 pas", "susulan 0 lagi pas", "PR gue: 707 = 7 × 101", "iya pas", "jawaban post semua kuku", "catet: ratusan kelipatan 7", "iya, hemat", "jawaban post lengkap", "susulan: 700 habis 7"],
 "telat dari arsip. 700 mod 7. tuntas", ("700 = 7 × 100 → 0", "700", "700"))

t(1236, "Pembulatan 6.543 ke ribuan = 7.000. 543 lewat 500 → naik. Temen tulis 6.000 — 543 jelas lewat tengah. Susulan: 6.443? 6.000 ya? (443 turun). Cek dong",
 ["7.000 pas", "543 naik pas", "susulan 6.000 pas", "PR gue: tengah 500 ribuan", "iya, b41 juga", "jawaban post semua kuku", "catet: tiga digit akhir penentu", "iya, b44 juga", "jawaban post lengkap", "susulan: 6.543 deket 6.550"],
 "telat dari arsip. pembulatan 6.543. tuntas", ("6.543 → 7.000", "7000-6543", "457"))

t(1237, "Estimasi 799 + 202 ≈ 1.000 via 800 + 200. Persis 1.001 — selisih 1. Susulan: 796 + 204 ≈ 1.000 ya? persis 1.000! kompensasi sempurna. Cek dong",
 ["1.000 pas", "1.001 pas", "selisih 1 pas", "susulan 1.000 persis pas", "PR gue: kompensasi −4 +4", "iya, rapi", "jawaban post semua kuku", "catet: bulatkan dua suku", "iya, b42 juga", "jawaban post lengkap", "susulan: estimasi tepat sasaran"],
 "telat dari arsip. estimasi 799+202. tuntas", ("799 + 202 = 1.001", "799+202", "1001"))

t(1238, "97 × 9 = 873. Kompensasi: 100 × 9 = 900, kurang 3 × 9 = 27 → 873. Temen tulis 873 pas? bagus. Yang sering salah 883. Susulan: 97 × 5? 485 ya? Cek dong",
 ["900 − 27 pas", "873 pas", "susulan 485 pas", "PR gue: 3 × 9 = 27", "iya, b40 juga", "jawaban post semua kuku", "catet: selisih × faktor lain", "iya, dua langkah", "jawaban post lengkap", "susulan: 873 habis dibagi 9"],
 "telat dari arsip. kompensasi 97×9. tuntas", ("900 − 27 = 873", "900-27", "873"))

t(1239, "201 × 199 = 39.999. (200+1)(200−1) = 40.000 − 1. Temen kali lurus lama. Susulan: 301 × 299? 89.999 ya? (300² − 1). Cek dong",
 ["40.000 − 1 pas", "39.999 pas", "susulan 89.999 pas", "PR gue: 200² = 40.000", "iya, identitas", "jawaban post semua kuku", "catet: (a±1) selisih kuadrat", "iya, b42 juga", "jawaban post lengkap", "susulan: 39.999 deket 40.000"],
 "telat dari arsip. 201 × 199. tuntas", ("40.000 − 1 = 39.999", "40000-1", "39999"))

t(1240, "Digit terakhir 3^10: siklus 3-9-7-1, 10 mod 4 = 2 → posisi 2 → akhir 9. Temen hitung 3^10 = 59.049 — cek nyata akhir 9! Susulan: 3^11? akhir 7 ya? Cek dong",
 ["10 mod 4 = 2 pas", "akhir 9 pas", "59.049 pas", "susulan akhir 7 pas", "PR gue: siklus 3-9-7-1", "iya, b39 juga", "jawaban post semua kuku", "catet: sisa mod 4 posisi siklus", "iya, metode", "jawaban post lengkap", "susulan: 59.049 = 3^10"],
 "telat dari arsip. digit akhir 3^10. tuntas", ("3^10 = 59.049 akhir 9", "59049*1", "59049"))

t(1241, "Orang-hari: 36 orang-hari ÷ 6 orang = 6 hari. Temen kali — kebalik. Bagi total ÷ orang. Susulan: 9 orang? 4 hari ya? Cek dong",
 ["36 ÷ 6 pas", "6 hari pas", "susulan 4 hari pas", "PR gue: 6 × 6 = 36 cek", "iya, selalu", "jawaban post semua kuku", "catet: total ÷ orang", "iya, b40 juga", "jawaban post lengkap", "susulan: 36 = 6² juga"],
 "telat dari arsip. orang-hari 36. tuntas", ("36/6 = 6 hari", "36/6", "6"))

t(1242, "Tangki: isi 8 jam, bocor 24 jam → net 1/8 − 1/24 = 2/24 = 1/12 per jam → 12 jam penuh. Temen heran net tipis lagi. Susulan: isi 8, bocor 40? net 10 jam ya? (4/40 = 1/10). Cek dong",
 ["2/24 pas", "1/12 pas", "12 jam pas", "susulan 10 jam pas", "PR gue: 5/40 − 1/40 = 4/40", "iya pas", "jawaban post semua kuku", "catet: KPK 24 penyatu", "iya, b40 juga", "jawaban post lengkap", "susulan: 12 jam setengah hari"],
 "telat dari arsip. tangki 8-24. tuntas", ("1/8 − 1/24 = 1/12 → 12 jam", "3-1", "2"))

t(1243, "Resep digandakan: 2¼ × 2 = 4½. 9/4 × 2 = 9/2. Temen kali penyebut — pembilang saja. Susulan: 2¼ × 4? 9 ya? Cek dong",
 ["9/4 pas", "4½ pas", "susulan 9 pas", "PR gue: 2,25 × 4 = 9 desimal", "iya, dua jalur", "jawaban post semua kuku", "catet: campuran → pecahan", "iya, b26 juga", "jawaban post lengkap", "susulan: 9 cup banyak!"],
 "telat dari arsip. resep 2¼ × 2. tuntas", ("2¼ × 2 = 4½", "2.25*2", "4.5"))

t(1244, "100°C → °F: 100 × 9/5 + 32 = 180 + 32 = 212°F. Titik didih air! Temen baru sadar angkanya 212. Susulan: 0°C? 32°F ya? titik beku. Cek dong",
 ["180 + 32 pas", "212°F pas", "titik didih pas", "susulan 32°F pas", "PR gue: 100 × 9 = 900, /5 = 180", "iya pas", "jawaban post semua kuku", "catet: bagi 5 dulu lalu × 9", "iya, b40 juga", "jawaban post lengkap", "susulan: 212 ikonik F"],
 "telat dari arsip. 100°C ke F. tuntas", ("100 × 9/5 = 180", "900/5", "180"))

t(1245, "Kopi 1:15 — 14 g bubuk → 210 ml air. 14 × 15 = 210. Temen kali 14 × 1,5 — rasio 1:15. Susulan: 13 g? 195 ml ya? Cek dong",
 ["210 ml pas", "rasio 1:15 pas", "susulan 195 ml pas", "PR gue: 14 × 15 = 210", "iya pas", "jawaban post semua kuku", "catet: g × 15 = ml", "iya, b40 juga", "jawaban post lengkap", "susulan: 210 ml mug sedang"],
 "telat dari arsip. kopi 14 g. tuntas", ("14 × 15 = 210 ml", "14*15", "210"))

t(1246, "Empat kaleng 500 ml = 2 L. 500 × 4. Temen tulis 20 L — salah tangga. Cek: 2.000 ml = 2 L. Susulan: 6 kaleng? 3 L ya? Cek dong",
 ["2 L pas", "20 salah tangga", "susulan 3 L pas", "PR gue: 2.000 ml", "iya pas", "jawaban post semua kuku", "catet: ml ke liter bagi 1.000", "iya, b37 juga", "jawaban post lengkap", "susulan: 2 L botol besar"],
 "telat dari arsip. kaleng 500. tuntas", ("500 × 4 = 2.000 ml", "500*4", "2000"))

t(1247, "Penyimpanan 4 file × 4,5 GB = 18 GB. Temen tulis 180 — koma hilang. Cek: 4,5 × 4 = 18. Susulan: 6 file? 27 GB ya? Cek dong",
 ["18 GB pas", "180 koma hilang", "susulan 27 GB pas", "PR gue: 4 + 0,5 per file", "iya, 16 + 2", "jawaban post semua kuku", "catet: desimal × bulat", "iya, b37 juga", "jawaban post lengkap", "susulan: 27 GB boros"],
 "telat dari arsip. file 4,5 GB. tuntas", ("4,5 × 4 = 18 GB", "4.5*4", "18"))

t(1248, "Unggah 2.400 MB dengan 12 MB/s → 200 detik = 3 menit 20 detik. Temen bagi 2.400/12 langsung — 200 pas. Susulan: 8 MB/s? 300 detik ya? Cek dong",
 ["200 detik pas", "3m20d pas", "susulan 300 detik pas", "PR gue: 200 × 12 = 2.400 cek", "iya, selalu", "jawaban post semua kuku", "catet: ukuran ÷ laju", "iya, b37 juga", "jawaban post lengkap", "susulan: 200 dtk tiga menitan"],
 "telat dari arsip. unggah 12 MB/s. tuntas", ("2.400/12 = 200 detik", "2400/12", "200"))

t(1249, "Telur 90 butir, kotak 12: 90/12 = 7 sisa 6 → 7 kotak penuh, 6 telur lepas. Temen paksa 8 kotak — 6 telur masih sanggup sendiri. Susulan: 84 butir? 7 tepat ya? Cek dong",
 ["7 sisa 6 pas", "6 lepas pas", "susulan 7 tepat pas", "PR gue: 7 × 12 = 84", "iya pas", "jawaban post semua kuku", "catet: sisa bukan otomatis kotak", "iya, bala bantu", "jawaban post lengkap", "susulan: 84 = 7 × 12"],
 "telat dari arsip. telur 90. tuntas", ("90 − 84 = 6 sisa", "90-84", "6"))

t(1250, "1+2+...+49 = 1.225 = 35². Deret dan kuadrat bertemu! Pasangan 24,5 an? eh rumus 49 × 50/2. Temen kaget 1.225 kuadrat: 35 × 35. Susulan: 1..48? 1.176 ya? (1.225 − 49). Cek dong",
 ["1.225 pas", "35² pas", "susulan 1.176 pas", "PR gue: 49 × 25 = 1.225", "iya pas", "jawaban post semua kuku", "catet: deret n = T49", "iya, b37 juga", "jawaban post lengkap", "susulan: 1.225 = 35² cantik"],
 "telat dari arsip. deret 1..49. tuntas", ("49 × 50/2 = 1.225", "49*50/2", "1225"))

assert len(T) == 25, len(T)
build2(T, 1226, "threads-50.ts", 50, 46, 726, 46,
       "Topik: separuh 150, kerja bersama 10-15, KPK 20-30, T53, Fibonacci 1.597, 13×4, biner 101010, heksa 90, digital root 777, 700 mod 7, pembulatan 6.543, estimasi 799+202, kompensasi 97×9, 201×199, digit akhir 3^10, orang-hari 36, tangki 8-24, resep 2¼ × 2, 100°C ke F, kopi 14 g, kaleng 500, file 4,5 GB, unggah 12 MB/s, telur 90, deret 1..49 = 35².")
print("threads-50 ok")
