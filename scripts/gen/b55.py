# threads-55.ts — BATCH 51 (id 1351-1375, authorId 851-875)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(1351, "½ × 178 = 89. Genap rapi, hasil prima 89. Temen jawab 88 — 88 × 2 = 176, kurang 2. Susulan: ½ × 186? 93 ya? Cek dong",
 ["89 pas", "88 × 2 = 176 kurang", "susulan 93 pas", "PR gue: 89 Fibonacci prima", "iya, b48 juga", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 178 = 2 × 89"],
 "telat dari arsip. separuh 178. tuntas", ("178/2 = 89", "178/2", "89"))

t(1352, "Kerja bersama: A 8 jam, B 24 jam → 1/8 + 1/24 = 4/24 = 1/6 per jam → 6 jam. Penyebut 24 penyatu. Susulan: A 8, B 8? 4 jam ya? simetris. Cek dong",
 ["4/24 pas", "1/6 pas", "6 jam pas", "susulan 4 jam pas", "PR gue: 3/24 + 1/24 = 4/24", "iya, KPK", "jawaban post semua kuku", "catet: jumlah laju", "iya, b41 juga", "jawaban post lengkap", "susulan: 6 jam kerja penuh"],
 "telat dari arsip. kerja bersama 8-24. tuntas", ("1/8 + 1/24 = 1/6 → 6 jam", "3+1", "4"))

t(1353, "KPK 36 dan 48 = 144. Kelipatan 36: 36, 72, 108, 144. Kelipatan 48: 48, 96, 144. Temen jawab 1.728 — 144 cukup. Dan 144 = 12²! Susulan: 144 = 36 × 4 = 48 × 3 ya? cek. Cek dong",
 ["144 pas", "1.728 kelebihan", "12² juga pas", "PR gue: 36 = 2² × 3², 48 = 2⁴ × 3", "iya, pangkat max", "jawaban post semua kuku", "catet: KPK kelipatan pertama", "iya, b41 juga", "jawaban post lengkap", "susulan: 144 tiga wajah konteks"],
 "telat dari arsip. KPK 36-48. tuntas", ("KPK 36, 48 = 144", "36*4", "144"))

t(1354, "T85 = 3.655. Tangga segitiga 85 tingkat: 85 × 86/2. Temen nanya 3.655 habis dibagi 5: ya, akhir 5. Susulan: T86? 3.741 ya? (3.655 + 86). Cek dong",
 ["3.655 pas", "85 × 43 pas", "susulan 3.741 pas", "PR gue: 3.655 + 86 naik", "iya pas", "jawaban post semua kuku", "catet: n(n+1)/2", "iya, rumus", "jawaban post lengkap", "susulan: 3.655 = 5 × 731"],
 "telat dari arsip. T85 = 3.655. tuntas", ("T85 = 85 × 86/2 = 3.655", "85*86/2", "3655"))

t(1355, "Fibonacci: ..., 10.946, 17.711 — 10.946 + 6.765 = 17.711. Lima digit! Temen heran deret melesat. Susulan: setelah 17.711? 28.657 ya? (17.711 + 10.946). Cek dong",
 ["17.711 pas", "lima digit pas", "28.657 pas", "PR gue: 10.946 + 6.765 cek", "iya pas", "susulan: rasio tetap 1,618 an", "iya, b38 juga", "jawaban post semua kuku", "catet: dua sebelumnya dijumlah", "iya, b37 juga", "jawaban post lengkap", "susulan: 28.657 Fibonacci prima"],
 "telat dari arsip. Fibonacci 17.711. tuntas", ("10.946 + 6.765 = 17.711", "10946+6765", "17711"))

t(1356, "29 × 3 = 87. Delapan puluh tujuh. Temen tulis 77 — salah 10. Cek: 29 × 3 = 87 (30×3 − 3). Susulan: 29 × 4? 116 ya? Cek dong",
 ["87 pas", "77 salah 10", "116 pas", "PR gue: 90 − 3 rapi", "iya pas", "susulan: 29 prima", "iya pas", "jawaban post semua kuku", "catet: deket 30 dikurangi", "iya, trik", "jawaban post lengkap", "susulan: 87 habis dibagi 3"],
 "telat dari arsip. 29 × 3. tuntas", ("29 × 3 = 87", "29*3", "87"))

t(1357, "2^14 = 16.384. Tangga pangkat 2 naik terus. Temen nanya 16.384 = 128² ya? pas! (2^7)². Susulan: 2^15? 32.768 ya? Cek dong",
 ["16.384 pas", "128² pas", "32.768 pas", "PR gue: 8.192 × 2 jalur", "iya, b50 juga", "jawaban post semua kuku", "catet: pangkat genap = kuadrat", "iya, b33 juga", "jawaban post lengkap", "susulan: 16.384 dua wajah"],
 "telat dari arsip. 2^14 = 16.384. tuntas", ("2^14 = 16.384 = 128²", "128*128", "16384"))

t(1358, "Heks 120 = 288. 1 × 256 + 2 × 16. Temen baca seratus dua puluh — heksa per posisi 256-16-1. Susulan: 121? 289 ya? = 17²! Cek dong",
 ["1 × 256 pas", "288 pas", "susulan 289 pas", "17² juga pas", "PR gue: 256 + 32 rapi", "iya pas", "jawaban post semua kuku", "catet: digit × pangkat 16", "iya, b44 juga", "jawaban post lengkap", "susulan: 289 deket 288"],
 "telat dari arsip. heksa 120. tuntas", ("256 + 32 = 288", "256+32", "288"))

t(1359, "Digital root 98.765: 9+8+7+6+5 = 35 → 8. Temen berhenti di 35 — satu tahap lagi. Susulan: 98.766? 36 → 9 ya? habis 9! Cek dong",
 ["35 → 8 pas", "dua tahap pas", "susulan 9 pas", "habis 9 pas", "PR gue: 3+6 = 9 lanjut", "iya pas", "jawaban post semua kuku", "catet: jumlah sampai satu digit", "iya, b43 juga", "jawaban post lengkap", "susulan: 98.765 turun berurutan"],
 "telat dari arsip. digital root 98.765. tuntas", ("9+8+7+6+5 = 35 → 8", "9+8+7+6+5", "35"))

t(1360, "6.000 mod 7 = 1. 5.999 = 857 × 7, sisa 1. Temen pecah: 5.600 habis 7 (7 × 800), 6.000 − 5.600 = 400, 400 mod 7 = 1. Susulan: 6.001? sisa 2 ya? Cek dong",
 ["857 × 7 pas", "sisa 1 pas", "susulan 2 pas", "PR gue: 5.600 + 400 pecah", "iya, hemat", "jawaban post semua kuku", "catet: kelipatan besar dulu", "iya, b40 juga", "jawaban post lengkap", "susulan: 6.000 = 5.999 + 1"],
 "telat dari arsip. 6.000 mod 7. tuntas", ("6.000 − 5.999 = 1", "6000-5999", "1"))

t(1361, "Pembulatan 5.555 ke ribuan = 6.000. 555 lewat 500 → naik. Temen tulis 5.000 — 555 jelas besar. Susulan: 5.455? 5.000 ya? (455 turun). Cek dong",
 ["6.000 pas", "555 naik pas", "susulan 5.000 pas", "PR gue: tengah 500 ribuan", "iya, b41 juga", "jawaban post semua kuku", "catet: tiga digit akhir penentu", "iya, b44 juga", "jawaban post lengkap", "susulan: 5.555 seragam, seru"],
 "telat dari arsip. pembulatan 5.555. tuntas", ("5.555 → 6.000", "6000-5555", "445"))

t(1362, "Estimasi 201 × 99 ≈ 20.000 via 200 × 100. Persis 19.899 — selisih 101. Dua pembulatan searah naik. Susulan: 199 × 101? persis 20.099 ya? naik dua arah sebaliknya. Cek dong",
 ["20.000 pas", "19.899 pas", "selisih 101 pas", "susulan 20.099 pas", "PR gue: 200 × 100 tengah", "iya, cepat", "jawaban post semua kuku", "catet: bulatkan dua faktor", "iya, b42 juga", "jawaban post lengkap", "susulan: 201 × 99 = 19.899"],
 "telat dari arsip. estimasi 201×99. tuntas", ("201 × 99 = 19.899", "201*99", "19899"))

t(1363, "98 × 12 = 1.176. Kompensasi: 100 × 12 = 1.200, kurang 2 × 12 = 24 → 1.176. Temen tulis 1.188 — selisihnya 24. Susulan: 97 × 12? 1.164 ya? Cek dong",
 ["1.200 − 24 pas", "1.176 pas", "susulan 1.164 pas", "PR gue: 2 × 12 = 24", "iya, b40 juga", "jawaban post semua kuku", "catet: selisih × faktor lain", "iya, dua langkah", "jawaban post lengkap", "susulan: 1.176 habis dibagi 12"],
 "telat dari arsip. kompensasi 98×12. tuntas", ("1.200 − 24 = 1.176", "1200-24", "1176"))

t(1364, "401 × 399 = 159.999. (400+1)(400−1) = 160.000 − 1. Temen kali lurus lama. Susulan: 501 × 499? 249.999 ya? (500² − 1). Cek dong",
 ["160.000 − 1 pas", "159.999 pas", "susulan 249.999 pas", "PR gue: 400² = 160.000", "iya, identitas", "jawaban post semua kuku", "catet: (a±1) selisih kuadrat", "iya, b42 juga", "jawaban post lengkap", "susulan: 159.999 deket 160.000"],
 "telat dari arsip. 401 × 399. tuntas", ("160.000 − 1 = 159.999", "160000-1", "159999"))

t(1365, "Jumlah ganjil sampai 41: 1+3+...+41 = 441 = 21². Dua puluh satu bilangan ganjil → kuadrat 21. Temen heran 441 juga 21² dari b45! Susulan: sampai 43? 484 ya? = 22². Cek dong",
 ["441 pas", "21² pas", "susulan 484 pas", "PR gue: 21 ganjil → 21²", "iya, b41 juga", "jawaban post semua kuku", "catet: n ganjil pertama = n²", "iya, teorema", "jawaban post lengkap", "susulan: 441 dua wajah konteks"],
 "telat dari arsip. ganjil 21². tuntas", ("21² = 441", "21*21", "441"))

t(1366, "Digit terakhir 9^10: siklus 9-1, 10 genap → akhir 1. Temen cek 9² = 81 akhir 1, 9⁴ = 6.561 akhir 1 — konsisten. Susulan: 9^11? akhir 9 ya? ganjil. Cek dong",
 ["siklus 9-1 pas", "10 genap → 1 pas", "6.561 pas", "susulan akhir 9 pas", "PR gue: 9^n = 3^(2n)", "iya, b43 juga", "jawaban post semua kuku", "catet: siklus terpendek", "iya, b45 juga", "jawaban post lengkap", "susulan: 6.561 = 3^8 juga"],
 "telat dari arsip. digit akhir 9^10. tuntas", ("9^2 = 81 akhir 1", "81*1", "81"))

t(1367, "Kerja bersama: A 15 jam, B 60 jam → 1/15 + 1/60 = 5/60 = 1/12 per jam → 12 jam. Temen heran B sangat lambat tetap mempercepat. Susulan: A 60, B 15? 12 juga ya? komutatif. Cek dong",
 ["5/60 pas", "1/12 pas", "12 jam pas", "susulan 12 juga pas", "PR gue: 4/60 + 1/60 = 5/60", "iya, KPK", "jawaban post semua kuku", "catet: jumlah laju", "iya, b41 juga", "jawaban post lengkap", "susulan: 12 jam setengah hari"],
 "telat dari arsip. kerja bersama 15-60. tuntas", ("1/15 + 1/60 = 1/12 → 12 jam", "4+1", "5"))

t(1368, "Tangki: isi 4 jam, bocor 20 jam → net 1/4 − 1/20 = 4/20 = 1/5 per jam → 5 jam penuh. Temen heran net rapi. Susulan: isi 4, bocor 12? net 6 jam ya? (2/12 = 1/6). Cek dong",
 ["4/20 pas", "1/5 pas", "5 jam pas", "susulan 6 jam pas", "PR gue: 5/20 − 1/20 = 4/20", "iya, KPK", "jawaban post semua kuku", "catet: net lalu kebalikan", "iya, b40 juga", "jawaban post lengkap", "susulan: 5 jam satu shift"],
 "telat dari arsip. tangki 4-20. tuntas", ("1/4 − 1/20 = 1/5 → 5 jam", "5-1", "4"))

t(1369, "Reseh dilimipatkan: 1⅕ × 5 = 6. 6/5 × 5 = 6 utuh — coret 5 dan 5. Temen heran hasil bulat. Susulan: 1⅕ × 10? 12 ya? dua kali lipatnya. Cek dong",
 ["6/5 pas", "6 pas", "coret 5-5 pas", "susulan 12 pas", "PR gue: 1,2 × 5 = 6 desimal", "iya, dua jalur", "jawaban post semua kuku", "catet: coret silang", "iya, b43 juga", "jawaban post lengkap", "susulan: 6 cup banyak"],
 "telat dari arsip. resep 1⅕ × 5. tuntas", ("6/5 × 5 = 6", "6*5/5", "6"))

t(1370, "−40°C → °F: −40 × 9/5 + 32 = −72 + 32 = −40°F. TITIK SAMA! Minus empat puluh Celsius = minus empat puluh Fahrenheit. Temen kaget — memang unik. Susulan: −41°C? −41,8°F ya? mepet. Cek dong",
 ["−72 + 32 pas", "−40°F pas", "titik sama pas", "unik pas", "PR gue: −40 × 9/5 = −72", "iya pas", "jawaban post semua kuku", "catet: satu-satunya titik sama", "iya, ikonik", "jawaban post lengkap", "susulan: −40 dingin ekstrem"],
 "telat dari arsip. −40 titik sama. tuntas", ("32 − 72 = −40", "32-72", "-40"))

t(1371, "Kopi 1:15 — 10 g bubuk → 150 ml air. 10 × 15. Temen nanya 10 g standar? single-double antara. Susulan: 12 g? 180 ml ya? Cek dong",
 ["150 ml pas", "10 g antara pas", "susulan 180 ml pas", "PR gue: 10 × 15 = 150", "iya pas", "jawaban post semua kuku", "catet: g × 15 = ml", "iya, b40 juga", "jawaban post lengkap", "susulan: 150 ml pas cup"],
 "telat dari arsip. kopi 10 g. tuntas", ("10 × 15 = 150 ml", "10*15", "150"))

t(1372, "Delapan botol 1,5 L = 12 L. 1,5 × 8. Temen tulis 120 — salah tangga. Cek: 12.000 ml = 12 L. Susulan: 6 botol? 9 L ya? Cek dong",
 ["12 L pas", "120 salah tangga", "susulan 9 L pas", "PR gue: 1.500 × 8 = 12.000 ml", "iya pas", "jawaban post semua kuku", "catet: desimal × bulat", "iya, b37 juga", "jawaban post lengkap", "susulan: 12 L galon besar"],
 "telat dari arsip. botol 1,5 × 8. tuntas", ("1,5 × 8 = 12 L", "1.5*8", "12"))

t(1373, "Penyimpanan 2 file × 8,1 GB = 16,2 GB. Temen tulis 162 — koma hilang. Cek: 8,1 × 2 = 16,2. Susulan: 3 file? 24,3 GB ya? Cek dong",
 ["16,2 GB pas", "162 koma hilang", "susulan 24,3 GB pas", "PR gue: 8 + 0,1 per file", "iya, 16 + 0,2", "jawaban post semua kuku", "catet: desimal × bulat", "iya, b37 juga", "jawaban post lengkap", "susulan: 16,2 GB makan kuota"],
 "telat dari arsip. file 8,1 GB. tuntas", ("8,1 × 2 = 16,2 GB", "8.1*2", "16.2"))

t(1374, "Unggah 5.600 MB dengan 28 MB/s → 200 detik. Temen bagi 5.600/28 langsung — 200 pas. Susulan: 14 MB/s? 400 detik ya? Cek dong",
 ["200 detik pas", "susulan 400 detik pas", "PR gue: 200 × 28 = 5.600 cek", "iya, selalu", "jawaban post semua kuku", "catet: ukuran ÷ laju", "iya, b37 juga", "jawaban post lengkap", "susulan: 200 dtk = 3m20d"],
 "telat dari arsip. unggah 28 MB/s. tuntas", ("5.600/28 = 200 detik", "5600/28", "200"))

t(1375, "Undangan 250 kartu, butuh 268 → kurang 18. Temen beli tambahan 20 biar aman — sisa 2 cadangan. Susulan: 260 kartu? kurang 8 ya? Cek dong",
 ["kurang 18 pas", "tambah 20 pas", "sisa 2 pas", "susulan 8 pas", "PR gue: 268 − 250 = 18", "iya, dasar", "jawaban post semua kuku", "catet: kebutuhan − stok", "iya, dua langkah", "jawaban post lengkap", "susulan: cadangan bijak"],
 "telat dari arsip. stok undangan. tuntas", ("268 − 250 = 18", "268-250", "18"))

assert len(T) == 25, len(T)
build2(T, 1351, "threads-55.ts", 55, 51, 851, 51,
       "Topik: separuh 178, kerja bersama 8-24, KPK 36-48, T85, Fibonacci 17.711, 29×3, 2^14, heksa 120, digital root 98.765, 6.000 mod 7, pembulatan 5.555, estimasi 201×99, kompensasi 98×12, 401×399, ganjil 21², digit akhir 9^10, kerja bersama 15-60, tangki 4-20, resep 1⅕ × 5, −40 titik sama, kopi 10 g, botol 1,5 × 8, file 8,1 GB, unggah 28 MB/s, stok undangan.")
print("threads-55 ok")
