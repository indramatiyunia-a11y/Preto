# Generator threads-16.ts — BATCH 12 (id 376-400, authorId 226-250)
import random

POST_MIN = lambda i: 25 + 30 * (i - 1)  # i = id cuitan
OFF = {
 12: ([15,33,54,71,95,114,140,165,194,227,259], 775),
 17: ([13,27,41,56,72,87,102,118,134,152,170,188,206,224,243,262], 705),
 11: ([17,34,49,66,84,103,125,147,166,186], 855),
 19: ([14,29,43,58,73,89,104,120,136,152,168,185,202,219,236,254,272,290], 1025),
 14: ([15,33,50,68,86,105,124,143,162,181,200,218,237], 855),
 20: ([15,31,47,64,80,96,113,129,145,162,178,194,211,227,243,258,273,287,300], 995),
 13: ([16,32,49,67,84,101,118,135,152,169,186,203], 845),
 16: ([17,34,51,69,86,104,121,138,155,172,189,206,223,240,257], 735),
 18: ([15,31,48,64,80,97,114,131,148,165,182,199,216,233,251,268,285], 715),
 15: ([14,29,44,58,73,87,102,117,132,147,162,177,192,207], 835),
}
PAT = [12,17,11,19,14,20,13,16,11,18,15,12,20,11,17,13,19,14,16,11,18,12,15,20,13]

def roster(pid, n, seed):
    rng = random.Random(seed * 10007 + pid)
    pool = [a for a in range(1, 501) if a != pid]
    rng.shuffle(pool)
    return pool[:n]

# (id, konten, [teks komentar tanpa telat], teks telat)
T = []

T.append((376,
 "Kuadrat di antara 1 sampai 50: aku hitung 1, 4, 9, 16, 25, 36, 49 — ada 7. Temen jawab 8 karena ikut masukin 0. Cek dong",
 ["7 pas, 7² = 49 masih kebagian",
  "0 kuadrat juga sih, tapi rentangnya biasanya mulai dari 1",
  "susulan: di 1 sampai 100 ada 10 ya? 10² = 100 pas ujung",
  "iya 10, 1 sampai 10 dikuadratin",
  "50 sampai 100 cuma 3: 64, 81, 100",
  "iya, 8² = 64 mulai dari situ",
  "PR gue: kuadrat di 50-150 ada berapa? 64, 81, 100, 121, 144 → 5",
  "iya 5",
  "jawaban post 7 dan 10. kuku",
  "jebakannya lupa 49, padahal 7² pas",
  "iya, 49 sering kelupaan"],
 "telat dari arsip. 1-50 ada 7, 1-100 ada 10. tuntas"))

T.append((377,
 "Elemen bangun ruang: kubus punya 8 titik sudut, 12 rusuk, 6 sisi. Temen cuma hafal 6 sisinya. Coba cek: limas segiempat 5 titik, 8 rusuk, 5 sisi; prisma segitiga 6 titik, 9 rusuk, 5 sisi. Aku dengar titik − rusuk + sisi selalu 2. Cek: 8−12+6 = 2, 5−8+5 = 2, 6−9+5 = 2. pas semua. Cek dong",
 ["kubus 8-12-6 pas",
  "Euler 2 bener, coba balok: 8−12+6 = 2 juga",
  "iya, balok sama kubus",
  "limas 5-8-5 pas, puncak + 4 dasar",
  "prisma segitiga 6-9-5 pas, dua segitiga alas-atap",
  "susulan: tabung? 0 titik 0 rusuk 3 sisi — 0−0+3 = 3, gak masuk rumus ya?",
  "iya, rumusnya buat yang muka-mukanya datar, tabung ada lengkung",
  "PR gue: limas segitiga? 4 titik 6 rusuk 4 sisi → 4−6+4 = 2",
  "iya, itu tetrahedron",
  "susulan: prisma segiempat = balok, 8-12-6",
  "iya sama",
  "jawaban post semua pas",
  "gunanya: satu elemen lupa bisa dibalik dari dua lainnya",
  "iya, rusuk = titik + sisi − 2",
  "catet itu, sering kepake",
  "titik − rusuk + sisi = 2, namanya rumus Euler"],
 "telat dari arsip. kubus 8-12-6, Euler 2. tuntas"))

T.append((378,
 "Keliling setengah lingkaran = busur + diameter! r 7: 22 + 14 = 36. Temen jawab 22, lupa garis datar. Cek dong",
 ["36 pas, busur 22 + diameter 14",
  "jebakan klasik, garis datarnya kelupaan",
  "susulan: r = 10, pakai 3,14? busur 31,4 + 20 = 51,4",
  "iya 51,4",
  "PR gue: r = 14? 44 + 28 = 72",
  "iya 72",
  "jawaban post 36 pas",
  "setengah lingkaran punya dua bagian: busur dan garis datar",
  "iya, dua bagian",
  "susulan: r = 3,5? 11 + 7 = 18"],
 "telat dari arsip. busur + diameter. 36. tuntas"))

T.append((379,
 "Sistem tiga variabel: x + y + z = 10, x + y = 6, y + z = 7. Temen bingung, katanya tiga variabel butuh tiga persamaan. Caraku: z = 10 − (x+y) = 10 − 6 = 4. Lalu x = 10 − (y+z) = 10 − 7 = 3. Terus y = 6 − x = 3. Cek: 3+3+4 = 10 pas, 3+3 = 6 pas, 3+4 = 7 pas. Kasus kedua: x+y = 6, y+z = 7, x+z = 5? Jumlahkan tiga persamaan: tiap variabel kehitung dua kali → 2(x+y+z) = 18 → total 9 → z = 9−6 = 3, y = 9−5 = 4, x = 9−7 = 2. Cek: 2+4 = 6, 4+3 = 7, 2+3 = 5. pas. Kasus ketiga: x+y = 6, y+z = 7, x+z = 6? jumlah 19 → total 9,5 → x = 2,5, y = 3,5, z = 3,5. Cek: 2,5+3,5 = 6 ✓, 3,5+3,5 = 7 ✓, 2,5+3,5 = 6 ✓. pas, hasilnya pecahan dan sah. Cek semuanya dong",
 ["3, 3, 4 pas semua",
  "trik kurang-totalnya rapi",
  "kasus kedua 2, 4, 3 pas",
  "kenapa 2(x+y+z)? tiap variabel muncul di dua persamaan",
  "iya, jumlah tiga persamaan = tiap variabel kehitung dua kali",
  "kasus ketiga 2,5 / 3,5 / 3,5 pas, pecahan sah",
  "susulan: x+y = 8, y+z = 9, x+z = 5? total 22 → 11 → x = 2, y = 6, z = 5",
  "iya pas semua",
  "susulan: x+y+z = 12, x+y = 7, y+z = 8? z = 5, x = 4, y = 3",
  "iya pas",
  "PR gue: x+y = 9, y+z = 10, x+z = 11? total 30 → 15 → x = 5, y = 4, z = 6",
  "iya 5, 4, 6 pas",
  "jawaban post semua bener",
  "susulan: total 20, x+y = 11, y+z = 12? z = 9, x = 8, y = 3",
  "iya pas",
  "temenmu tinggal dibiasain kurang-total",
  "iya itu kuncinya",
  "soal tiga variabel begini enak buat latihan sistem"],
 "telat dari arsip. 3,3,4 / 2,4,3 / 2,5-3,5-3,5. tuntas"))

T.append((380,
 "Jarum jam bertumpuk: pas 12.00 dua-duanya nempel. Kapan bertumpuk lagi? Aku dengar sekitar 65 menit sedikit lebih. Temen heran kok bukan tepat 01.05. Aku jelasin: jarum menit kencang 12× daripada jarum jam. Dalam satu jam jarum jam jalan 30°, jarum menit 360° — dia ngalahin jarum jam 330° per jam. Untuk nyusul penuh satu putaran (360°) butuh 360/330 jam = 12/11 jam ≈ 65 5/11 menit ≈ 01.05:27. Jadi bukan 01.05 tepat. Sekali dalam 12 jam ada 11 kali bertumpuk (bukan 12 — interval 12/11 jam dikali 11 = 12 jam pas, kembali ke 12.00). Cek dong",
 ["12/11 jam itu 65 5/11 menit pas",
  "11 kali dalam 12 jam, aneh tapi bener",
  "susulan: bertumpuk kedua sekitar 02.10 ya?",
  "iya, sekitar 02.10:54",
  "PR gue: kenapa bukan 12 kali? karena pertamanya di 12.00 tepat",
  "iya, dari 12.00 ke 12.00 cuma 11 interval",
  "susulan: yang ketiga sekitar 03.16 ya?",
  "iya, 3 × 65 5/11 ≈ 03.16:21",
  "jawaban post semua pas",
  "susulan: 330°/jam itu kuncinya",
  "iya, 360 − 30",
  "susulan: yang keempat sekitar 04.21 ya? 4 kali 65 5/11 sekitar 04.21:49",
  "iya sekitar jam segitu, bukan bulat"],
 "telat dari arsip. tiap 65 5/11 menit, 11 kali per 12 jam. tuntas"))

T.append((381,
 "Cek siku pakai angka: tukang bilang lantainya siku. Aku cek teori Pythagoras kebalik: kalau sisi-sisinya 3-4-5 atau kelipatannya, sudut di antara dua sisi pendek pasti siku. Lantai tukang: 6 m × 8 m, diagonal dia ukur 10 m — 6² + 8² = 36+64 = 100 = 10². pas, siku bener. Kasus kedua: 5-12-13? 25+144 = 169 = 13². pas. Kasus gagal: 4-5-7? 16+25 = 41, 7² = 49 — gak sama, berarti gak siku (sudutnya tumpul). Temen nanya kenapa kelipatan juga sah: 6-8-10 = 2×(3-4-5), semua dikuadratkan kelipatannya ikut. Tukang bangunan emang pakai tali 3-4-5 buat patokan siku. Susulan: 8-15-17? 64+225 = 289 = 17². pas. Dan 7-9-12? 49+81 = 130 vs 144 — gak siku. Cek dong",
 ["6-8-10 cek pas",
  "5-12-13 juga 169",
  "4-5-7 gak siku, tumpul, analisisnya bener",
  "susulan 8-15-17 = 289 pas",
  "7-9-12 gak siku, 130 ≠ 144",
  "PR gue: 9-12-15? = 3×(3-4-5), pas siku",
  "iya, 81+144 = 225",
  "susulan: tali 3-4-5 emang standar tukang",
  "iya, tripel paling murah",
  "susulan: 5-12-13 tripel asli, bukan kelipatan",
  "iya, banyak tripel asli",
  "jawaban post semua pas",
  "susulan: 20-21-29? 400+441 = 841 = 29², pas",
  "iya, tripel raksasa",
  "cek mundurnya: kuadratin sisi terbesar dulu",
  "iya, bandingin dengan jumlah dua kuadrat sisanya",
  "temenmu tinggal lihat 41 vs 49",
  "iya, makin gede berarti tumpul",
  "jawaban post lengkap"],
 "telat dari arsip. 3-4-5 dan kelipatannya = siku. tuntas"))

T.append((382,
 "Balik volume: penampung balok 120.000 liter? Pakai meter: 120 m³. Panjang 6, lebar 4 — tingginya berapa? Aku balik: tinggi = volume ÷ (p × l) = 120 ÷ 24 = 5 m. Temen langsung tebak 20 karena bagi panjang doang. Cek: 6 × 4 × 5 = 120 pas. Susulan: volume 90 m³, p 5, l 3 → t = 6 ya? 5×3×6 = 90 pas. Dan volume 72, p 6, t 4 → l = 3 ya? 6×3×4 = 72 pas. Cek dong",
 ["t = 5 pas, bagi luas alas",
  "90 → 6 pas",
  "72 → 3 pas",
  "kuncinya volume = luas alas × tinggi",
  "susulan: 100 m³, p 5, l 5 → t 4 ya?",
  "iya 4",
  "PR gue: 144, p 8, l 3? t 6",  "susulan: 60, l 2, t 5? p 6",
  "iya 6",
  "jawaban post semua kuku",
  "temenmu bagi panjang doang, kurang satu faktor",
  "iya, ada tiga faktor"],
 "telat dari arsip. volume ÷ luas alas = tinggi. tuntas"))

T.append((383,
 "Luas tanpa rumus: bentuk L di kertas kotak-kotak. Kotak penuh: 12. Kotak yang kepotong garis: 4 buah, masing-masing setengah → nambah 2. Total 14 kotak satuan. Temen langsung bilang 16 karena semua kotak dihitung utuh. Aku jelasin: yang kepotong setengah ya setengah. Susulan: bentuk lain, penuh 9, kepotong 6 (semuanya setengah) → 12 ya? 9+3 = 12 pas. Kasus sepertiga: 2 kotak, satu kepotong ⅓ satu ⅔ → ⅓+⅔ = 1 utuh. Penuh 5 + itu 1 + 4 setengah (2) = 8. Cek dong",
 ["14 pas, 12 + 2",
  "16 itu kelebihan, yang setengah dihitung utuh",
  "susulan 12 pas, 9+3",
  "kasus sepertiga: ⅓ + ⅔ = 1 pas",
  "total 8 pas, 5+1+2",
  "PR gue: penuh 7, kepotong 4 setengah → 9 ya?",
  "iya 9",
  "susulan: penuh 0, kepotong 8 setengah → 4",
  "iya, setengah dari delapan",
  "jawaban post semua pas",
  "cara ini bagus buat paham luas sebelum kenal rumus",
  "iya, ½ alas × tinggi juga dari sini",
  "susulan: penuh 10, kepotong 2 setengah → 11",
  "iya 11",
  "jawaban post lengkap"],
 "telat dari arsip. penuh + setengah-setengah. tuntas"))

T.append((384,
 "Kali atau jumlah: 2×3 = 6 > 2+3 = 5. Tapi 1×4 = 4 < 1+4 = 5! Dan 2×2 = 4 = 2+2, seri. Kesimpulan: kalau dua-duanya di atas 1, kali menang; kalau ada angka 1, jumlah menang; 2 dan 2 seri. Temen kira kali selalu lebih gede. Cek dong",
 ["1×n selalu kalah dari 1+n",  "2×2 seri, satu-satunya yang lain 0 dan 0: 0×0 = 0 = 0+0",
  "iya 0-0 seri juga",
  "susulan: 3×3 = 9 > 6, makin jauh",  "PR gue: 1×1? seri lagi, 1 = 1",
  "iya seri",
  "jawaban post pas",
  "rumus selisihnya (a−1)(b−1) − 1",
  "iya 2 dan 3: 1×2−1 = 1 > 0, cocok kali menang",
  "susulan: 0 dan 5? 0 < 5, jumlah menang"],
 "telat dari arsip. 2×3 menang, 1×4 kalah, 2×2 seri. tuntas"))

T.append((385,
 "Cincin: lingkaran luar R = 6, dalam r = 4. Luas cincin = luas luar − dalam = π×36 − π×16 = π×20. Pakai 22/7: 440/7 = 62 6/7 ≈ 62,86. Temen nyoba π×(6−4)² = 4π — salah, garis pusatnya gak boleh dikurangin dulu. Luas pakai kuadrat jari-jari, jadi R² − r² dulu baru kali π. Susulan: R 10, r 7? 100−49 = 51 → 22/7×51 = 1122/7 = 160 2/7 ≈ 160,29. Dan R 5, r 3? 25−9 = 16 → 352/7 = 50 2/7 ≈ 50,29. Cek dong",
 ["62 6/7 pas, 440/7",
  "4π itu jebakan klasik, kuadrat dulu baru kurang",
  "susulan 160 2/7 pas",
  "R 5 r 3 → 352/7 = 50 2/7 pas",
  "PR gue: R 7, r 5? 49−25 = 24 → 528/7 = 75 3/7",
  "iya 75 3/7",
  "susulan: R 8, r 2? 64−4 = 60 → 1320/7 = 188 4/7",
  "iya pas",
  "jawaban post lengkap",
  "catet: R² − r² = (R−r)(R+r), di contoh awal 2×10 = 20 pas",
  "iya, jalan pintas faktornya",
  "susulan: R 6, r 0? jadi lingkaran biasa 36π",
  "iya, cincin tanpa lubang",
  "jawaban post semua bener",
  "temenmu tinggal urutan: kurang dulu baru kali",
  "iya, π(R² − r²)",
  "susulan: R 9, r 4? 81−16 = 65 → 1430/7 = 204 2/7"],
 "telat dari arsip. π(R² − r²), 62 6/7. tuntas"))

T.append((386,
 "Berapa kali lipat: gaji temen 80, aku 20 — dia 4× aku (bukan lebihnya 60). Cara: bagi 80 ÷ 20 = 4. Beda dengan selisih: 60. Dua pertanyaan beda: berapa kali lipat pakai bagi, lebih berapa pakai kurang. Contoh lain: omzet 150 vs 50 = 3×; tapi 150 vs 100 cuma 1,5× — padahal selisihnya sama-sama 50! Susulan: 12 vs 3 = 4×; 18 vs 6 = 3×; 2 vs 8 = 0,25× (aku seperempat dia). Cek dong",
 ["4× pas, selisih dan kali lipat itu beda soal",
  "150 vs 100 = 1,5× itu contoh terbaik",
  "susulan 12 vs 3 = 4× pas",
  "18 vs 6 = 3× pas",
  "2 vs 8 = 0,25× pas, kebalikan",
  "PR gue: 45 vs 15? 3×",
  "iya 3×",
  "susulan: 100 vs 40? 2,5×",
  "iya 2,5×",
  "jawaban post semua pas",
  "catet: kali lipat gak simetris, 4× kebalikannya 0,25×",
  "iya, kebalikan 4 adalah seperempat",
  "temenmu tinggal dibedain bagi vs kurang",
  "iya itu akar masalahnya"],
 "telat dari arsip. kali lipat = bagi, selisih = kurang. tuntas"))

T.append((387,
 "Cek pembagian balik: 623 ÷ 7 = 89? Aku gak yakin. Aku kalikan balik: 7 × 89 = 623. pas. Temen gak ngerti kenapa perlu cek, katanya ada kalkulator. Aku: kalkulator ngasih jawaban, perkalian balik ngasih keyakinan. Contoh lagi: 1.024 ÷ 8 = 128? 8 × 128 = 1.024 pas. Dan 455 ÷ 5 = 91? 5 × 91 = 455 pas. Cek dong",
 ["7×89 = 623 pas, 630 dikurang 7",
  "1.024 itu 2 pangkat 10, dibagi 8 = 2 pangkat 7 = 128, pas",
  "5×91 = 455 pas",
  "susulan: 672 ÷ 6 = 112 ya? 6×112 = 672 pas",  "PR gue: 819 ÷ 9 = 91 ya? 9×91 = 819 pas",
  "iya pas",
  "jawaban post semua kuku",
  "susulan: 513 ÷ 9 = 57 ya? 9×57 = 513 pas",
  "iya pas",
  "kalkulator boleh, cek balik tetap disiplin",
  "susulan: 306 ÷ 6 = 51 ya? 6×51 = 306 pas"],
 "telat dari arsip. kali balik = bukti. tuntas"))

T.append((388,
 "Jaring tabung: buka kaleng, dapat dua lingkaran (tutup) + satu persegi panjang (selimut). Lebar persegi panjang = keliling alas, tingginya = tinggi kaleng. r = 7, t = 10: keliling alas 2 × 22/7 × 7 = 44 → selimut 44 × 10 = 440. Tutup: 22/7 × 49 = 154, dua-duanya 308. Luas seluruhnya 440 + 308 = 748 cm². Temen protes kok selimutnya persegi panjang bukan persegi: karena 44 ≠ 10. Kalau tingginya kebetulan 44, barulah jadi persegi. Sekalian volume: luas alas × tinggi = 154 × 10 = 1.540 cm³ = 1,54 liter. Susulan: r 7, t 5? selimut 220, dua tutup 308, total 528; volume 770 cm³. Cek dong",
 ["748 pas, 440+308",
  "volume 1.540 pas",
  "susulan 528 & 770 pas",
  "PR gue: r 7, t 20? selimut 880, total 1.188, volume 3.080",
  "iya pas semua",
  "susulan: r 14, t 10? keliling 88, selimut 880, dua tutup 616, total 1.496",
  "iya pas",
  "jawaban post lengkap",
  "temenmu tinggal lihat 44 × 10, jelas bukan persegi",
  "iya, 44 vs 10",
  "susulan: r 7, t 44? selimut 44×44 = 1.936, barulah persegi bener",
  "iya, 44 = 44",
  "susulan: volume r 14 t 10? 616 × 10 = 6.160 cm³",
  "iya pas, 6,16 liter",
  "catet: selimut = keliling × tinggi selalu",  "jawaban post semua kuku",
  "susulan: r 3,5, t 10? keliling 22, selimut 220, dua tutup 77, total 374",
  "iya pas",
  "susulan: r 7, t 100? selimut 4.400, volume 15.400 cm³ = 15,4 liter"],
 "telat dari arsip. selimut 440, total 748, volume 1.540. tuntas"))

T.append((389,
 "1 km = 1.000 m. Rute 3,75 km = 3.750 m ya? Temen tulis 375 m, koma gak digeser. Susulan: 0,8 km = 800 m. Cek dong",
 ["3.750 pas, koma geser tiga tempat",
  "375 itu 0,375 km",
  "susulan 800 pas",
  "12.500 pas",
  "PR gue: 0,05 km = 50 m ya?",
  "iya 50",
  "susulan: 7,2 km = 7.200 m",
  "iya pas",
  "jawaban post semua kuku",  "susulan: 2,04 km = 2.040 m"],
 "telat dari arsip. 3,75 km = 3.750 m. tuntas"))

T.append((390,
 "FPB tanpa faktorisasi: cara kurang-kurang. FPB 48 dan 18: 48−18 = 30; 30−18 = 12; 18−12 = 6; 12−6 = 6; 6−6 = 0 → FPB 6. Temen curiga kok boleh. Jelasin: pembagi bersama 48 dan 18 pasti membagi selisihnya, jadi FPB(48,18) = FPB(30,18) = FPB(12,18) = dst sampai 6. Cek faktorisasi: 48 = 2⁴×3, 18 = 2×3² → sama-sama punya 2×3 = 6. pas. Contoh lagi: 60 dan 24: 60−24 = 36; 36−24 = 12; 24−12 = 12; 12−12 = 0 → 12. Cek: 60 = 2²×3×5, 24 = 2³×3 → 2²×3 = 12 pas. Susulan: 36 dan 15? 36−15 = 21; 21−15 = 6; 15−6 = 9; 9−6 = 3; 6−3 = 3; 3−3 = 0 → FPB 3. Cek dong",
 ["48-18 → 6 pas, faktorisasi cocok",
  "60-24 → 12 pas",
  "36-15 → 3 pas, jalurnya panjang tapi benar",
  "susulan: 24 dan 16? 24−16 = 8; 16−8 = 8; 8−8 = 0 → 8",
  "iya 8",
  "PR gue: 100 dan 75? 100−75 = 25; 75−25 = 50; 50−25 = 25; 25−25 = 0 → 25",
  "iya 25",
  "susulan: 30 dan 18? 12; 6; 0 → 6",
  "iya 6",
  "jawaban post semua kuku",
  "kenapa sah: pembagi 48 dan 18 pasti membagi selisihnya",
  "iya, itu alasan intinya",
  "susulan: 51 dan 34? 17; 17−17 = 0 → 17, dua-duanya kelipatan 17",
  "iya pas",
  "cara ini enak kalau angkanya gak kegedean",
  "susulan: 80 dan 28? 52; 24; 4; 0 → 4"],
 "telat dari arsip. kurang-kurang sampai nol. tuntas"))

T.append((391,
 "Sudut refleks: jarum menit di angka 10, jarum jam di 12 → sudut kecilnya 60°, tapi sudut refleksnya 300° (satu putaran dikurang 60°). Temen kira jawabannya 60 doang. Aku jelasin: refleks itu sudut yang lebih dari 180°, dihitung lewat sisi panjang. Rumus: refleks = 360 − sudut kecil. Contoh: kecil 90 → refleks 270; kecil 110 → refleks 250. Cek dong",
 ["300 pas, 360 − 60",
  "90 → 270 pas",
  "110 → 250 pas",
  "susulan: kecil 45? refleks 315",
  "iya 315",
  "PR gue: kecil 179? refleks 181, masih masuk refleks",
  "iya, 181 lebih dari 180",
  "susulan: kecil 180? ya garis lurus, bukan refleks",
  "iya, 180 bukan refleks",
  "jawaban post semua pas",
  "pintu dibuka lebar keliatan refleksnya",
  "susulan: kecil 60, refleks 300 — dua-duanya sah, tinggal tanya yang mana"],
 "telat dari arsip. refleks = 360 − kecil. tuntas"))

T.append((392,
 "Es krim cone: tabung bawah r = 7, tinggi 10; kerucut atas r = 7, tinggi 9 (π = 22/7). Luas alas 22/7 × 49 = 154. Volume tabung 154 × 10 = 1.540. Volume kerucut 1/3 × 154 × 9 = 462. Total 2.002 cm³. Kerucut kecil karena faktor 1/3 — tiga kerucut setinggi itu pas jadi satu tabung. Susulan: r 7, tabung 6, kerucut 6? tabung 924, kerucut 308, total 1.232. Cek dong",
 ["2.002 pas, 1.540+462",
  "susulan 1.232 pas, 924+308",
  "PR gue: r 7, tabung 12, kerucut 9? 1.848 + 462 = 2.310",
  "iya pas",
  "susulan: dua kerucut r 7 t 9? 924",
  "iya, 2 × 462",
  "jawaban post semua pas",
  "faktor 1/3 itu kunci kenapa kerucut kecil",  "susulan: r 14, tabung 5, kerucut 6? alas 616 → 3.080 + 1.232 = 4.312",
  "iya pas",
  "jawaban post lengkap",
  "temenmu tinggal diingetin sepertiganya",
  "iya, itu intinya",
  "susulan: dua tabung r 7 t 10? 3.080",
  "iya, 2 × 1.540",
  "jawaban post semua kuku",
  "cone emang gabungan favorit soal",  "susulan: r 7, tabung 10, kerucut 3? 1.540 + 154 = 1.694"],
 "telat dari arsip. 1.540+462 = 2.002. tuntas"))

T.append((393,
 "Zona waktu: 07.00 WIB = 08.00 WITA = 09.00 WIT. Temen di Makassar call jam 9 pagi, aku di Jakarta baru jam 8. Aku jelasin: WITA = WIB + 1 jam, WIT = WIB + 2 jam. Susulan: penerbangan berangkat 06.30 WIB, tiba 10.30 WIT → lama perjalanan? 10.30 WIT = 08.30 WIB → 2 jam. Temen salah hitung 4 jam karena campur zona. Cek dong",
 ["2 jam pas, tiba ditarik balik ke WIB dulu",
  "PR gue: 05.00 WIB di Jayapura jam berapa? 07.00 WIT",
  "iya 07.00",
  "susulan: rapat 13.00 WITA, di Jakarta jam 12.00",  "jawaban post semua pas",
  "susulan: 11.30 WIB = 13.30 WIT",  "temenmu campur zona, makanya 4 jam",
  "iya, samakan dulu ke satu zona",
  "PR gue: lepas landas 21.00 WITA, tiba 23.30 WIB? 21.00 WITA = 20.00 WIB → 3,5 jam",
  "iya 3,5 jam",
  "jawaban post semua bener",
  "susulan: 06.15 WIT = 04.15 WIB",
  "iya, kurang dua"],
 "telat dari arsip. WITA +1, WIT +2. tuntas"))

T.append((394,
 "Dari kalimat ke persamaan: dua kali bilangan ditambah lima sama dengan tujuh belas. Aku tulis 2x + 5 = 17 → x = 6 (cek: 12+5 = 17 pas). Temen nulis 2x = 17+5 — pindah ruas tandanya kebalik harusnya. Kalimat lain: selisih bilangan dan tiga sama dengan delapan → x − 3 = 8 → x = 11. Dan: setengah bilangan sama dengan enam → x/2 = 6 → x = 12. Cek dong",
 ["x = 6 pas",
  "17−5 = 12, dibagi 2 = 6, urutannya bener",
  "x − 3 = 8 → 11 pas",
  "x/2 = 6 → 12 pas",
  "susulan: tiga kali x dikurangi dua sama dengan sepuluh? 3x − 2 = 10 → x = 4",
  "iya pas",
  "PR gue: setengah x ditambah satu sama dengan lima? x/2 + 1 = 5 → x = 8",
  "iya 8",
  "jawaban post semua bener",
  "susulan: x dibagi tiga sama dengan empat? x = 12",
  "iya, ×3",
  "temenmu pindah ruasnya kebalik tanda",
  "iya, +5 harus jadi −5",
  "susulan: dua kali x sama dengan dua puluh dua? x = 11",
  "susulan: x dibagi tiga sama dengan empat? x = 12"],
 "telat dari arsip. 2x + 5 = 17 → 6. tuntas"))

T.append((395,
 "Setengah bilangan ganjil selalu berakhir ,5: 7 → 3,5; 9 → 4,5; 99 → 49,5 (bukan 45!) karena 50 − 0,5. Cek dong",
 ["49,5 pas, 50 − 0,5",
  "susulan: 15? 7,5",
  "iya 7,5",
  "PR gue: 21? 10,5",  "susulan: 1? 0,5",  "jawaban post semua pas",
  "setengah genap selalu utuh, setengah ganjil selalu ,5",  "susulan: 75? 37,5",  "PR: 999? 499,5",
  "iya, 500 − 0,5"],
 "telat dari arsip. ganjil dibagi 2 berakhir ,5. tuntas"))

T.append((396,
 "Tambah data simetris: lima ulangan rata-ratanya 80 (total 400). Tambah dua nilai: 90 dan 70 — rata-ratanya tetap 80! Karena 90+70 = 160 = 2×80, dua data baru itu pas membawa rata masing-masing. Temen kira nambah data pasti mengubah rata. Contoh: 91 dan 69 (jumlah 160) → tetap 80. 95 dan 65? tetap. 100 dan 60? tetap juga. Yang mengubah cuma kalau jumlahnya ≠ 160: misal 100 dan 80 (180) → total 580 dibagi 7 ≈ 82,86, naik. Dan tambah satu data 0? 400/6 ≈ 66,67, jatuh drastis. Cek dong",
 ["90+70 = 160 = 2×80, rata tetap, logikanya rapi",
  "susulan 91+69 tetap, pas",
  "100+60 juga 160, tetap",
  "PR gue: rata 70 dari enam data; tambah 80 dan 60? 140 = 2×70 → tetap 70",
  "iya tetap",
  "susulan: 100+80 = 180 → 580/7 ≈ 82,86 naik, pas",
  "580/7 = 82,857, dibulatkan 82,86 bener",
  "jawaban post semua pas",
  "susulan: rata 75 dari empat data; tambah 65 dan 85? 150 = 2×75 → tetap",
  "iya tetap",
  "PR: tambah satu data aja 80? (400+80)/6 = 80 pas juga",
  "iya, satu data tepat di rata juga gak mengubah",
  "susulan: tambah 0? 400/6 ≈ 66,67 turun drastis",
  "iya, nol bawa rata jatuh",
  "jawaban post lengkap",
  "temenmu tinggal hitung totalnya dulu",  "susulan: tambah 160 dan 0? total 560/7 = 80 tetap, lucu tapi sah"],
 "telat dari arsip. jumlah baru = 2×rata → rata tetap. tuntas"))

T.append((397,
 "Nambah tanggal: hari ini 3 Maret, janji 14 hari lagi. 3 + 14 = 17 Maret ya? Maret punya 31 hari, aman. Tapi 20 Maret + 14? 34 Maret gak ada — 34 − 31 = 3 → 3 April. Temen nulis 34 Maret. Contoh lagi: 25 Februari + 5 (2026 bukan kabisat) = 30 Feb? tidak ada → 30 − 28 = 2 → 2 Maret. Dan 3 Maret + 30 = 33 → 2 April. Cek dong",
 ["17 Maret pas",
  "3 April pas, 34 − 31",
  "2 Maret pas, Februari 28",
  "PR gue: 28 Januari + 10? 38 → 7 Februari",
  "iya 7 Feb, Januari 31",
  "susulan: 30 April + 6? 36 → 6 Mei",
  "iya 6 Mei, April 30",
  "jawaban post semua pas",
  "susulan: 31 Desember + 1? 1 Januari tahun depan!",  "temenmu lupa panjang bulannya",  "susulan: 27 Juli + 8? 35 → 4 Agustus"],
 "telat dari arsip. sisa melewati akhir bulan. tuntas"))

T.append((398,
 "Perkalian pecah-dua: 23 × 47. Aku pecah 47 = 40+7: 23×40 = 920; 23×7 = 161; jumlah 1.081. Temen pakai 47×23 — hasil sama 1.081 (perkalian komutatif), tapi langkahnya beda: 47×20 = 940, 47×3 = 141, total 1.081. Dua jalur satu tujuan. Contoh lagi: 34 × 26: 34×20 = 680, 34×6 = 204 → 884; jalur temen: 26×30 = 780, 26×4 = 104 → 884. pas. Susulan: 15 × 12? 150+30 = 180. Cek dong",
 ["1.081 dua jalur pas",
  "884 dua jalur pas juga",
  "susulan 180 pas",  "iya, 25×10 + 25×6 = 400",
  "susulan: 42 × 13? 420+126 = 546",  "jawaban post semua kuku",
  "catet: komutatif bikin kita bebas pilih jalur yang gampang",
  "iya, 12×15 juga 180",
  "susulan: 51 × 9? 450+9 = 459",  "PR: 63 × 11? 630+63 = 693",  "susulan: 88 × 5? 400+40 = 440",  "jawaban post semua bener",
  "temenmu jalurnya sah, cuma urutan beda",  "susulan: 27 × 14? 270+108 = 378"],
 "telat dari arsip. pecah ke puluhan + satuan. tuntas"))

T.append((399,
 "Tarik dua bola merah dari kantong 3 merah + 2 biru. Dengan pengembalian: 3/5 × 3/5 = 9/25 = 0,36. Tanpa pengembalian: 3/5 × 2/4 = 6/20 = 3/10 = 0,3. Temen protes kok pembandingnya berubah dari 5 ke 4: karena bolanya gak dikembalikan, sisa 4. Kalau yang ditanya beda warna? Dengan pengembalian: 2 × (3/5 × 2/5) = 12/25 (dua urutan: merah-biru dan biru-merah). Tanpa: 2 × (3/5 × 2/4) = 12/20 = 3/5. Cek total: dengan, 9/25 + 12/25 + 4/25 (biru-biru) = 25/25 pas. Tanpa: 6/20 + 12/20 + 2/20 = 20/20 pas. Lengkap. Cek dong",
 ["9/25 vs 3/10 pas",
  "pembanding 5 → 4 karena gak dikembalikan, bener",
  "beda warna 12/25 dan 3/5 pas",
  "jumlah ketiga cabang 25/25 dan 20/20, rapi",
  "susulan: biru-biru? dengan 4/25, tanpa 2/20 = 1/10",
  "iya pas",
  "PR gue: tiga tarik tanpa pengembalian semua merah? 3/5 × 2/4 × 1/3 = 6/60 = 1/10",
  "iya 1/10",
  "susulan: dengan pengembalian tiga kali merah? 27/125",
  "iya, 3 pangkat 3 per 5 pangkat 3",
  "jawaban post semua bener",
  "susulan: kenapa beda warna dikali 2? urutan M-B dan B-M",
  "iya, dua jalur",
  "PR: empat tarik tanpa semua merah? 3/5 × 2/4 × 1/3 × 0/2 = 0, mustahil",
  "iya, merahnya cuma tiga",
  "jawaban post lengkap",
  "temenmu tinggal lihat sisa bolanya",  "susulan: dengan pengembalian, sisa selalu 5",
  "iya, makanya pembandingnya tetap"],
 "telat dari arsip. 9/25 vs 3/10. tuntas"))

T.append((400,
 "Jam 24 ke 12: 19.00 = 7 malam; 00.30 = 12.30 malam. Temen tulis 24.30 — gak ada, itu 00.30. Lebih dari 12 kurangi 12. Cek dong",
 ["19 − 12 = 7 malam pas",
  "00.30 = 12.30 malam pas",
  "susulan: 21.45 = 9.45 malam",
  "iya 9.45",
  "PR gue: 16.00 = 4 sore",
  "iya 4 sore",
  "jawaban post semua pas",
  "susulan: 09.15 tetap 9.15 pagi",
  "iya, di bawah 12 gak digeser",
  "susulan: 13.00 = 1 siang",  "24.30 gak ada, yang bener 00.30",
  "iya, itu kesalahannya"],
 "telat dari arsip. lebih dari 12 kurangi 12. tuntas"))

assert len(T) == 25, len(T)

HEADER = """import type { ThreadzThread } from "../types"

// PART 16: BATCH 12 (14 Nov 2026) — cuitan 376-400, PENGGANDAAN PENULIS:
// 25 penulis BARU (authorId 226-250). minutesAgo = 25 + 30*(id-1)
// (id 376 = 11275, id 400 = 11995). Pola komentar hukum 7 Nov:
// [12,17,11,19,14,20,13,16,11,18,15,12,20,11,17,13,19,14,16,11,18,12,15,20,13]
// (post pertama file → angka pertama), satu komentar telat 600-1000 menit,
// hitungan dicek dua kali, tanpa self-reply/dobel, authorId 1-500.
// ISI: 100% forum matematika; topik bentuk baru tanpa mengulang batch 1-11.
export const THREADS_PART16: ThreadzThread[] = [
"""

def esc(s):
    return s.replace("\\", "\\\\").replace('"', '\\"')

out = [HEADER]
for (pid, content, kom, telat) in T:
    n = PAT[(pid - 376) % 25]
    assert len(kom) == n - 1, (pid, len(kom), n)
    offs, late = OFF[n]
    mins = POST_MIN(pid)
    times = [mins - o for o in offs] + [mins - late]
    ids = roster(pid - 150, n, 16)
    out.append("  {\n    id: %d,\n    authorId: %d,\n    minutesAgo: %d,\n    shares: %d,\n    content:\n      \"%s\",\n" % (pid, pid - 150, mins, 5 + pid % 15, esc(content)))
    out.append("    comments: [\n")
    for i, (txt, t) in enumerate(zip(kom + [telat], times)):
        out.append('      { authorId: %d, minutesAgo: %d, content: "%s" },\n' % (ids[i], t, esc(txt)))
    out.append("    ],\n  },\n")
out.append("]\n")

p = "/home/z/my-project/src/lib/threadz/data/threads-16.ts"
open(p, "w").write("".join(out))
print("threads-16.ts ditulis:", len(T), "post,", sum(PAT), "komentar")
for (pid, c, _, _) in T:
    print(pid, len(c))

