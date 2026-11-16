# threads-28.ts — BATCH 24 (id 676-700, authorId 526-550)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(676, "Tripel bisa dilipatgandakan: 3-4-5 dikali 3 jadi 9-12-15. Cek: 81 + 144 = 225 = 15². Jadi segitiga siku 9-12-15 sah tanpa hitung panjang. Cek dong",
 ["225 pas, tripel dilipat", "iya, kali 3 semua sisi", "susulan: kali 2 jadi 6-8-10", "iya pas", "PR gue: 5-12-13 kali 2? 10-24-26", "iya pas", "susulan: cek 100 + 576 = 676", "iya, 26²", "jawaban post semua kuku", "catet: tripel turun-temurun"],
 "telat dari arsip. tripel dilipatgandakan. tuntas", ("tripel 9-12-15: 81+144 = 225 = 15²", "9*9+12*12", "225"))

t(677, "Gaji 5 juta, THR satu bulan gaji = 5 juta. Total diterima 10 juta. THR itu jumlah gaji, bukan tambahan persen. Susulan: THR separuh gaji? 2,5 juta ya? Cek dong",
 ["10 juta pas", "THR = gaji, bukan persen", "susulan 2,5 juta pas", "PR gue: THR 1,5 bulan? 7,5 juta", "iya pas", "susulan: THR sering masuk bulan ke-12", "iya, umumnya", "jawaban post semua kuku", "catet: THR = jumlah gaji bulan", "iya itu definisinya", "jawaban post lengkap", "susulan: pajak THR? terpisah", "iya, lain soal"],
 "telat dari arsip. THR = jumlah gaji. tuntas", ("THR: 5jt + 5jt = 10jt", "5000000+5000000", "10000000"))

t(678, "Tangga koin 25: 25, 50, 75, 100 — empat koin per rupiah seratus. Temen tanya kenapa gak 30: koin 30 gak ada di edaran. Susulan: 2 koin 50 = 100 juga ya? dua jalur. Cek dong",
 ["25-50-75-100 pas", "dua koin 50 juga pas", "PR gue: 75 dari berapa kombinasi? 25+50 atau 50+25, atau 25+25+25 — tiga", "iya pas", "susulan: koin 200? ada juga, lain tangga", "iya, seri 2007", "jawaban post semua kuku", "catet: tangga koin pakai nilai edaran", "iya, itu dasarnya"],
 "telat dari arsip. tangga koin 25. tuntas", ("tangga 25: 25+50+75+100 = 250", "25+50+75+100", "250"))

t(679, "Fotokopi 500 per lembar, 40 lembar = 20rb. Cek: 40 × 5 = 200 × 100. Temen bayar 25rb — kurangi 5rb, itu salah kasir. Cek dong",
 ["20rb pas", "25rb itu kasir salah", "susulan 16rb pas", "PR gue: 60 lembar × 500? 30rb", "iya pas", "susulan: fotokopi bolak-balik beda tarif", "iya, cek rambu", "jawaban post semua kuku", "catet: lembar × tarif", "iya, dua faktor", "jawaban post lengkap", "susulan: jilid 5rb terpisah"],
 "telat dari arsip. lembar × tarif. tuntas", ("fotokopi: 40 × 500 = 20.000", "40*500", "20000"))

t(680, "12² = 144, dan 144 itu SATU GROS (12 × 12 barang). Satuan gros memang dari kuadrat lusin. Temen baru tahu gros = 144 — ya, lusin 12, gros 12 × 12. Susulan: 2 gros = 288 ya? Cek dong",
 ["144 pas, satu gros", "lusin 12, gros 144", "susulan 288 pas", "PR gue: setengah gros? 72", "iya pas", "susulan: gros dipakai pensil & botol", "iya, grosir", "jawaban post semua kuku", "catet: gros = kuadrat lusin", "iya, itu asal-usulnya", "jawaban post lengkap", "susulan: 216 = 1,5 gros"],
 "telat dari arsip. gros = 144. tuntas", ("12² = 144; 2 gros = 288", "12*12", "144"))

t(678 + 3, "Detik ke menit: 90 detik = 1,5 menit; 45 detik = 0,75 menit. Bagi 60. Temen tulis 1,50 menit lalu bingung — desimal menit, bukan menit-detik. Susulan: 120 detik = 2 menit ya? Cek dong",
 ["1,5 menit pas", "0,75 menit pas", "1,50 sama dengan 1,5", "susulan 2 menit pas", "PR gue: 30 detik? 0,5 menit", "iya pas", "susulan: 0,5 menit = 30 detik, balik", "iya, konsisten", "jawaban post semua kuku", "catet: bagi 60", "iya dasar"],
 "telat dari arsip. detik bagi 60. tuntas", ("90 dtk = 1,5 mnt", "90/60", "1.5"))

t(682, "Lima menit itu 300 detik: 5 × 60. Timer set 300 ya? Temen set 50 — salah operand, 50 detik cuma sekedep. Susulan: 3 menit = 180 detik ya? Cek dong",
 ["300 pas", "50 detik kependekan", "susulan 180 pas", "PR gue: 10 menit? 600 dtk", "iya pas", "susulan: timer dapur pakai detik", "iya, cocok", "jawaban post semua kuku", "catet: menit × 60 = detik", "iya, konversinya", "jawaban post lengkap", "susulan: 90 dtk = 1,5 mnt"],
 "telat dari arsip. menit × 60. tuntas", ("5 mnt = 300 dtk", "5*60", "300"))

t(683, "12 × 15 = 180. Pecah 15 = 10 + 5: 12×10 = 120, 12×5 = 60, jumlah 180. Temen langsung 12×15 kaku. Cek dong",
 ["180 pas", "120 + 60 rapi", "susulan 168 pas", "PR gue: 13 × 14? 182 ya?", "iya, 130 + 52", "susulan: distributif lagi", "iya, b11 pernah", "jawaban post semua kuku", "catet: pecah satu faktor", "iya, itu triknya", "jawaban post lengkap", "susulan: 15 × 15 = 225, kuadrat"],
 "telat dari arsip. pecah faktor. tuntas", ("12×15 = 180", "12*15", "180"))

t(684, "Peluang hujan 70% gak berarti 70 dari 100 hari PASTI hujan. Artinya kondisi seperti ini, 70 kali dari 100 kemungkinan serupa hujan — rata-rata jangka panjang. Temen tanya besok pasti hujan? gak ada pasti. Cek dong",
 ["70% itu rata-rata jangka panjang", "bukan janji 70/100 hari", "besok tetap bisa cerah", "susulan: 30% itu peluang cerah", "iya, komplemen", "PR gue: dua hari 70% berurutan? 49% dua-duanya hujan", "iya pas, 0,7 × 0,7", "jawaban post semua kuku", "catet: peluang bukan frekuensi pasti", "iya, itu intinya", "jawaban post lengkap", "susulan: BMKG pakai model", "iya, bukan koin", "susulan: 70% hujan deras? derajatnya lain"],
 "telat dari arsip. peluang 70% dijelaskan. tuntas", ("70% dua hari: 0,7 × 0,7 = 49%", "70*70", "4900"))

t(685, "Tiga nilai 80, 90, 70 → jumlah 240, rata 80. Temen salah jumlah jadi 230 → rata 76,7. Cek jumlah dulu, baru bagi. Susulan: 65, 85, 90? rata 80 ya? (240 lagi). Cek dong",
 ["240 pas", "rata 80 pas", "230 itu salah jumlah", "susulan 80 pas lagi", "PR gue: 70, 75, 85? rata 76,67 an", "iya, 230/3", "susulan: cek balik 3 × 80 = 240", "iya, selalu", "jawaban post semua kuku", "catet: jumlah dulu", "iya, urutan aman", "jawaban post lengkap", "susulan: median 80 juga"],
 "telat dari arsip. jumlah dulu. tuntas", ("rata 240/3 = 80", "240/3", "80"))

t(686, "Laundry 7rb per kg, 3 kg = 21rb. Temen bayar 25rb — tanya rinciannya, biasanya ada bed cover dihitung terpisah. Cek dong",
 ["21rb pas", "25rb ada rincian lain", "susulan 31.500 pas", "PR gue: 2 kg? 14rb", "iya pas", "susulan: minimum 3 kg umum", "iya, ada minimum", "jawaban post semua kuku", "catet: kg × tarif", "iya, dua faktor", "jawaban post lengkap", "susulan: kilatan? kilat lebih mahal"],
 "telat dari arsip. kg × tarif. tuntas", ("laundry: 3 × 7000 = 21.000", "3*7000", "21000"))

t(687, "Lima hari kerja × 7 jam = 35 jam per pekan. Beda dengan standar 40 jam (8 jam/hari). Temen kecampur dua standar — perusahaan beda aturan. Susulan: 6 hari × 6 jam? 36 jam ya? Cek dong",
 ["35 jam pas", "40 itu standar 8 jam", "susulan 36 jam pas", "PR gue: 5 hari × 8? 40 pas", "iya pas", "susulan: lembur dihitung terpisah", "iya, lain slot", "jawaban post semua kuku", "catet: hari × jam harian", "iya, dua faktor", "jawaban post lengkap", "susulan: istirahat gak dihitung kerja"],
 "telat dari arsip. 5 × 7 = 35. tuntas", ("5 hari × 7 jam = 35", "5*7", "35"))

t(688, "Dua barang bayar 45rb. Satu 25rb → lainnya 20rb (45 − 25). Temen bagi 22,5 — itu kalau gak tahu satu harga. Info satu harga = langsung kurang. Susulan: tiga barang 60rb, dua diketahui 22rb dan 18rb → ketiga 20rb ya? Cek dong",
 ["20rb pas, 45 − 25", "22,5 itu versi gak ada info", "susulan 20rb pas lagi", "PR gue: total 90rb, dua diketahui 40rb? sisa 50rb", "iya pas", "susulan: cek struk biar jelas", "iya, wajib", "jawaban post semua kuku", "catet: total − diketahui", "iya, dasar", "jawaban post lengkap", "susulan: diskon masuk sebelum atau sesudah?"],
 "telat dari arsip. total − diketahui. tuntas", ("45 − 25 = 20", "45-25", "20"))

t(689, "Keliling SETENGAH lingkaran: πr + 2r (busur + dua jari-jari). r 7: busur 22, dua jari 14 → 36. Temen cuma 22 — garis lurusnya lupa. Susulan: r 14? busur 44 + 28 = 72 ya? Cek dong",
 ["36 pas, busur + jari", "22 itu busur doang", "susulan 72 pas", "PR gue: r 3,5? busur 11 + 7 = 18", "iya pas", "susulan: bentuk jendela lengkung", "iya, aplikasi", "jawaban post semua kuku", "catet: setengah keliling + diameter", "iya itu rumusnya", "jawaban post lengkap", "susulan: setengah bola? volume, lain"],
 "telat dari arsip. πr + 2r. tuntas", ("setengah lingkaran r7: 22 + 14 = 36", "22+14", "36"))

t(690, "Dua sesi belajar 90 menit = 3 jam total. Istirahat 15 menit di antara? total 3 jam 15 menit. Temen lupa istirahat. Susulan: tiga sesi 40 menit + 2 istirahat 10? 140 menit = 2j20m ya? Cek dong",
 ["3 jam pas", "3j15m pas dengan istirahat", "susulan 2j20m pas", "PR gue: 4 sesi 45 + 3 istirahat 5? 195 = 3j15m", "iya pas", "susulan: pomodoro 25+5, empat putaran = 2 jam", "iya pas", "jawaban post semua kuku", "catet: sesi + istirahat", "iya, dua komponen", "jawaban post lengkap", "susulan: 25 × 4 + 5 × 3 = 115"],
 "telat dari arsip. sesi + istirahat. tuntas", ("2×90 = 180 mnt = 3 jam", "2*90", "180"))

t(691, "Tujuh pekan = 49 hari (7 × 7). Temen tulis 70 — itu 10 pekan. Susulan: 9 pekan? 63 hari ya? Cek dong",
 ["49 pas", "70 itu 10 pekan", "susulan 63 pas", "PR gue: 12 pekan? 84 hari", "iya pas", "susulan: 49 hari ≈ 7 pekan pas", "iya, tautologi", "jawaban post semua kuku", "catet: pekan × 7", "iya, dua kali dihitung", "jawaban post lengkap", "susulan: 49 = 7² juga, cantik"],
 "telat dari arsip. 7 × 7 = 49. tuntas", ("7 pekan = 49 hari", "7*7", "49"))

t(692, "Umur kucing: tabel populer 1 tahun kucing ≈ 15 manusia, tiap tahun berikut +9. Kucing 2 tahun ≈ 24. Beda dengan anjing (×7). Temen campur tabelnya. Susulan: kucing 4 tahun? 42 ya? (15 + 27). Cek dong",
 ["24 pas, tabel kucing", "anjing × 7, beda tabel", "susulan 42 pas", "PR gue: kucing 5 tahun? 51", "iya, 15 + 36", "susulan: tahun pertama paling cepat", "iya, begitu", "jawaban post semua kuku", "catet: 15 lalu +9 per tahun", "iya, dua tahap", "jawaban post lengkap", "susulan: kucing hidup 15-20 tahun"],
 "telat dari arsip. tabel kucing. tuntas", ("kucing 2 thn: 15 + 9 = 24", "15+9", "24"))

t(693, "Kuartal = 3 bulan. Kuartal kedua = April-Juni. Kuartal pertama Jan-Mar. Temen nanya Mei masuk mana: kuartal 2. Cek: Q1 1-3, Q2 4-6, Q3 7-9, Q4 10-12. Susulan: September? Q3 ya? Cek dong",
 ["kuartal 3 bulan pas", "Q2 = April-Juni pas", "Mei Q2 pas", "susulan September Q3 pas", "PR gue: Desember? Q4", "iya pas", "susulan: laporan perusahaan pakai kuartal", "iya, standar", "jawaban post semua kuku", "catet: 12 ÷ 4 = 3", "iya, pembagian", "jawaban post lengkap", "susulan: semester = 6 bulan, dua kuartal"],
 "telat dari arsip. kuartal 3 bulan. tuntas", ("kuartal: 12/4 = 3 bulan", "12/4", "3"))

t(694, "Dek 52 kartu: peluang hati = 13/52 = ¼. Empat suit sama banyak. Temen kira hati lebih sering — gak ada suit spesial di peluang. Susulan: sekop? juga ¼ ya? simetris. Cek dong",
 ["13/52 = ¼ pas", "empat suit simetris", "susulan sekop juga ¼ pas", "PR gue: hati ATAU sekop? 26/52 = ½", "iya pas", "susulan: merah = hati + wajik = ½", "iya pas", "jawaban post semua kuku", "catet: suit seimbang", "iya, itu dasarnya", "jawaban post lengkap", "susulan: joker? gak dihitung suit"],
 "telat dari arsip. suit = ¼. tuntas", ("hati: 13/52 = 1/4", "13/52", "0.25"))

t(695, "Nabung 200rb per bulan × 6 bulan = 1,2 juta. Temen hitung 1,1 — salah kali (200 × 6 = 1.200). Susulan: 9 bulan? 1,8 juta ya? Cek dong",
 ["1,2 juta pas", "1,1 itu salah kali", "susulan 1,8 juta pas", "PR gue: 15 bulan? 3 juta", "iya pas", "susulan: naikin ke 250rb? 6 bulan jadi 1,5 juta", "iya pas", "jawaban post semua kuku", "catet: bulan × nominal", "iya, dua faktor", "jawaban post lengkap", "susulan: target 2 juta? 10 bulan"],
 "telat dari arsip. bulan × nominal. tuntas", ("200rb × 6 = 1,2jt", "200000*6", "1200000"))

t(696, "0,125 liter = 125 ml. Kali 1.000. Ini seperdelapan liter — ukuran cup kecil espresso. Temen tulis 1.250 — koma kelewat satu. Susulan: 0,4 L? 400 ml ya? Cek dong",
 ["125 ml pas", "1.250 itu kelewat koma", "susulan 400 ml pas", "PR gue: 2,5 L? 2.500 ml", "iya pas", "susulan: 0,125 = 1/8, keluarga per-delapan", "iya, nyambung b25", "jawaban post semua kuku", "catet: liter × 1.000 = ml", "iya, tiga tangga", "jawaban post lengkap", "susulan: 1/8 L sering di resep"],
 "telat dari arsip. liter × 1.000. tuntas", ("0,125 L = 125 ml", "125*1", "125"))

t(697, "10⁴ = 10.000 — puluh ribu. Tangganya: 10, 100, 1.000, 10.000 (empat kali kali 10 = empat nol). Temen nulis 1.000 (tiga nol, itu 10³). Susulan: 10⁵? 100.000 ya? Cek dong",
 ["10.000 pas, empat nol", "1.000 itu 10³", "susulan 100.000 pas", "PR gue: 10⁶? sejuta", "iya pas", "susulan: hitung nol = pangkat", "iya, itu caranya", "jawaban post semua kuku", "catet: pangkat = banyak nol", "iya, tangga 10", "jawaban post lengkap", "susulan: 10⁰ = 1, nyambung b26"],
 "telat dari arsip. tangga 10. tuntas", ("10⁴ = 10.000", "10*10*10*10", "10000"))

t(698, "Keliling segitiga 3-4-5 = 12. Tripel paling kecil, kelilingnya bulat cantik. Temen tanya luas: ½ × 3 × 4 = 6 juga bulat. Susulan: tripel 5-12-13? keliling 30, luas 30 — sama! Cek dong",
 ["keliling 12 pas", "luas 6 pas", "susulan 30 & 30 pas, kebetulan seru", "PR gue: 8-15-17? keliling 40, luas 60", "iya pas", "susulan: tripel Heron juga bulat", "iya, nyambung", "jawaban post semua kuku", "catet: tripel rapi di segala arah", "iya, itu keistimewaannya", "jawaban post lengkap", "susulan: 20-21-29 keliling 70"],
 "telat dari arsip. keliling tripel. tuntas", ("keliling 3-4-5 = 12", "3+4+5", "12"))

t(699, "Diagram garis: penjualan 120, 130, 140, 150 empat bulan — naik konsisten 10 per bulan. Temen tanya tren: NAIK stabil, bukan acak. Baca diagram = lihat arah + keteraturan. Susulan: 150, 140, 160, 130? naik-turun acak ya? Cek dong",
 ["naik 10 konsisten", "tren naik stabil", "susulan acak pas", "PR gue: 100, 110, 120? naik 10 juga", "iya pas", "susulan: garis miring naik = tren", "iya, visual", "jawaban post semua kuku", "catet: arah + keteraturan", "iya, dua hal", "jawaban post lengkap", "susulan: datar 120 semua = stagnan"],
 "telat dari arsip. baca tren. tuntas", ("naik 10 × 3 = 30 total", "10*3", "30"))

t(700, "700 = 26² + 24 (karena 26² = 676). Dekat kuadrat tapi bukan. Kuadrat terdekat: 26² = 676, 27² = 729. Temen kira 700 kuadrat — bukan, akar 700 ≈ 26,46. Susulan: 729 kuadrat ya? 27². Cek dong",
 ["676 = 26² pas", "700 = 676 + 24, bukan kuadrat", "729 = 27² pas", "akar 700 ≈ 26,46 pas", "PR gue: 625? 25²", "iya pas", "susulan: 700 di antara dua kuadrat", "iya, selalu ada", "jawaban post semua kuku", "catet: kuadrat renggang", "iya, 2n+1 jaraknya", "jawaban post lengkap", "susulan: 700 habis dibagi 7 juga"],
 "telat dari arsip. 700 antara kuadrat. tuntas", ("26² = 676; 27² = 729", "26*26", "676"))

assert len(T) == 25, len(T)
build2(T, 676, "threads-28.ts", 28, 24, 526, 28,
       "Topik: tripel dilipat, THR, koin 25, fotokopi, gros 144, detik-menit, menit-detik, pecah faktor, peluang hujan, rata tiga nilai, laundry, 35 jam, total-diketahui, setengah lingkaran, sesi+istirahat, 49 hari, umur kucing, kuartal, suit 1/4, nabung 6 bulan, 0,125 L, tangga 10, keliling tripel, tren garis, 700 antara kuadrat.")
print("threads-28 ok")
