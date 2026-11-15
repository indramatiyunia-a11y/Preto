# threads-32.ts — BATCH 28 (id 776-800, authorId 626-650)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(776, "16 × 5 = 80. Delapan puluh. Temen tulis 86 — salah 6. Cek: 16 × 5 = 80 via 10 × 5 + 6 × 5 = 50 + 30. Susulan: 16 × 6? 96 ya? (+16). Cek dong",
 ["80 pas", "86 salah 6", "96 pas, +16", "PR gue: 16 × 10? 160", "iya pas", "susulan: 16 = 2⁴, kelipatan dua", "iya, b25 tangga", "jawaban post semua kuku", "catet: pecah 10 + 6", "iya, rapi", "jawaban post lengkap", "susulan: 80 = 8 × 10"],
 "telat dari arsip. 16 × 5. tuntas", ("16 × 5 = 80", "16*5", "80"))

t(777, "Belanja mingguan 4 pekan: 85rb × 4 = 340rb. Temen hitung 320 — salah 20. Cek: 85 × 4 = 340. Susulan: naik jadi 90rb? 360rb ya? Cek dong",
 ["340rb pas", "320 salah 20", "360rb pas", "PR gue: rata tetap 85rb", "iya pas", "susulan: 4 pekan bukan 1 bulan", "iya, beda satuan", "jawaban post semua kuku", "catet: pekan × nominal", "iya, dua faktor", "jawaban post lengkap", "susulan: 340rb per bulan-ish"],
 "telat dari arsip. belanja 4 pekan. tuntas", ("85 × 4 = 340rb", "85*4", "340"))

t(778, "½ dari 38 = 19. Genap, rapi. Temen jawab 18 — 18 × 2 = 36, kurang 2. Susulan: ½ × 76? 38 ya? Cek dong",
 ["19 pas", "18 × 2 = 36 kurang", "susulan 38 pas", "PR gue: ½ × 39? 19,5 — ganjil", "iya pas", "susulan: 38 = 2 × 19 prima 19", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 19 prima juga"],
 "telat dari arsip. separuh 38. tuntas", ("38/2 = 19", "38/2", "19"))

t(779, "Segitiga siku sisi miring 25, satu kaki 24 → kaki lain √(625 − 576) = √49 = 7. Tripel 7-24-25. Temen heran kaki kecil banget — ya, tripel memang begini. Susulan: sisi miring 13, kaki 5? kaki lain 12 ya? Cek dong",
 ["7 pas, √49", "tripel 7-24-25 pas", "susulan 12 pas, tripel 5-12-13", "PR gue: cek balik 49 + 576 = 625", "iya pas", "susulan: 25 = 5², lucu", "iya, kebetulan", "jawaban post semua kuku", "catet: Pythagoras balik", "iya, kurangi", "jawaban post lengkap", "susulan: 7-24-25 keluarga besar"],
 "telat dari arsip. tripel 7-24-25. tuntas", ("25² − 24² = 625 − 576 = 49", "625-576", "49"))

t(780, "Dua hari kerja: 12 jam + 8 jam = 20 jam. Istirahat antara 8 jam dihitung terpisah — tidak masuk total kerja. Temen gabung semua — beda kategori. Susulan: tiga hari 8, 9, 7? 24 jam ya? Cek dong",
 ["20 jam pas", "istirahat terpisah", "susulan 24 jam pas", "PR gue: rata harian? 10 jam", "iya pas", "susulan: batas kerja harian ada", "iya, aturan", "jawaban post semua kuku", "catet: kategori kerja vs istirahat", "iya, itu poinnya", "jawaban post lengkap", "susulan: kelelahan real"],
 "telat dari arsip. dua hari kerja. tuntas", ("12 + 8 = 20 jam", "12+8", "20"))

t(781, "6 × 6 = 36 — kuadrat 6. Tiga puluh enam banyak wajah: 6², dan 36 = 6 × 6 kotak. Temen nanya 7 × 7? 49. Cek dong",
 ["36 pas", "49 pas, +13? eh 7²", "PR gue: 5²? 25", "iya pas", "susulan: kuadrat 1-10: 1,4,9,16,25,36,49,64,81,100", "iya, daftar lengkap", "jawaban post semua kuku", "catet: kuadrat = sisi × sisi", "iya, dasar", "jawaban post lengkap", "susulan: 36 = 6² banyak pembagi"],
 "telat dari arsip. 6² = 36. tuntas", ("6 × 6 = 36", "6*6", "36"))

t(782, "15 dari 60 = 25%. 60/4 = 15, jadi perempat. Temen hitung panjang — kenali 25% = ¼ dulu. Susulan: 15 dari 45? 33,3% ya? (⅓). Cek dong",
 ["25% pas, ¼", "kenali pecahan dulu", "susulan 33,3% pas", "PR gue: 20 dari 80? 25% juga", "iya pas", "susulan: 60 enak dibagi", "iya, banyak pembagi", "jawaban post semua kuku", "catet: pecahan dulu, persen belakangan", "iya, cepat", "jawaban post lengkap", "susulan: 75% = 45 dari 60"],
 "telat dari arsip. 15 dari 60. tuntas", ("15/60 = 25%", "15/60", "0.25"))

t(783, "7 × 13 = 91. Delapan puluh sembilan... eh sembilan puluh satu. Temen tulis 81 — salah 10. Cek: 7 × 13 = 7 × 10 + 7 × 3 = 70 + 21. Susulan: 13 × 8? 104 ya? Cek dong",
 ["91 pas", "81 salah 10", "104 pas", "PR gue: 91 = 7 × 13, bukan prima", "iya pas", "susulan: cek dua kali", "iya, disiplin", "jawaban post semua kuku", "catet: pecah 10 + 3", "iya, rapi", "jawaban post lengkap", "susulan: 91 deket 100"],
 "telat dari arsip. 7 × 13. tuntas", ("7 × 13 = 91", "7*13", "91"))

t(784, "Puzzle luas: satu persegi 9×9 (81) + dua persegi 3×3 (18) + tiga persegi 1×1 (3) = 102. Temen jumlah 99 — lupa tiga kecil. Cek dong",
 ["81 pas", "18 pas", "3 pas", "102 pas", "susulan 99 kurang 3 pas", "PR gue: tambah satu 2×2? +4 = 106", "iya pas", "susulan: susun dulu di kertas", "iya, visual", "jawaban post semua kuku", "catet: jumlah semua bagian", "iya, sistematis", "jawaban post lengkap", "susulan: sisa bahan? 121 − 102 = 19"],
 "telat dari arsip. puzzle persegi. tuntas", ("81 + 18 + 3 = 102", "81+18+3", "102"))

t(785, "5 ton = 5.000 kg = 50 kuintal. Tangga berat besar: ton-kuintal-kg (×10, ×100). Temen tukar tangga — kuintal 100 kg, bukan 1.000. Susulan: 2,5 ton? 2.500 kg ya? Cek dong",
 ["5.000 kg pas", "50 kuintal pas", "kuintal = 100 kg", "susulan 2.500 kg pas", "PR gue: 3 kuintal? 300 kg", "iya pas", "susulan: truk muat 5 ton umum", "iya, wajar", "jawaban post semua kuku", "catet: tangga ×10 ×100", "iya, dua tangga", "jawaban post lengkap", "susulan: 1 ton = 10 kuintal"],
 "telat dari arsip. ton-kuintal. tuntas", ("5 ton = 50 kuintal", "5*10", "50"))

t(786, "3 × 27 = 81. Delapan puluh satu — juga 3⁴! (3 × 3 × 3 × 3). Temen baru sadar 81 punya dua wajah. Susulan: 27 = 3³ ya? tiga wajah keluarga 3. Cek dong",
 ["81 pas", "3⁴ = 81 pas", "27 = 3³ pas", "PR gue: 243 = 3⁵", "iya pas", "susulan: keluarga 3 ramai", "iya, 3,9,27,81,243", "jawaban post semua kuku", "catet: pangkat vs kali biasa", "iya, dua wajah", "jawaban post lengkap", "susulan: 1 juga 3⁰"],
 "telat dari arsip. 81 dua wajah. tuntas", ("3 × 27 = 81 = 3⁴", "3*27", "81"))

t(787, "Dua dadu jumlah 8: (2,6), (3,5), (4,4), (5,3), (6,2) — lima cara, 5/36. Temen kelewat (4,4) dobel tengah. Susulan: jumlah 9? empat cara ya? (3,6)(4,5)(5,4)(6,3). Cek dong",
 ["lima cara pas", "(4,4) sering kelewat", "5/36 pas", "susulan 4 cara pas", "PR gue: jumlah 7? enam cara, paling ramai", "iya pas", "susulan: simetris kiri-kanan", "iya, cermin", "jawaban post semua kuku", "catet: daftar lengkap", "iya, sistematis", "jawaban post lengkap", "susulan: 5/36 ≈ 0,139"],
 "telat dari arsip. dadu jumlah 8. tuntas", ("jumlah 8: 5/36", "5*1", "5"))

t(788, "Cash 200rb, bayar 135rb dan 40rb → sisa 25rb. Temen langsung 200 − 135 = 65 lalu lupa bayar kedua. Susulan: bayar lagi 30rb? sisa −5rb = kurang 5rb ya? Cek dong",
 ["sisa 25rb pas", "lupa bayar kedua", "kurang 5rb pas", "PR gue: 25rb cukup buat kopdar? mepet", "iya, saran", "susulan: minus = hutang ke dompet lain", "iya, b12 juga", "jawaban post semua kuku", "catet: kurangi semua pembayaran", "iya, sistematis", "jawaban post lengkap", "susulan: catet struk"],
 "telat dari arsip. sisa cash 200. tuntas", ("200 − 135 − 40 = 25rb", "200-135-40", "25"))

t(789, "8 × 12 = 96. Sembilan puluh enam. Temen tulis 86 — kebalik lagi. Cek: 8 × 12 = 8 × 10 + 8 × 2 = 80 + 16. Susulan: 12 × 9? 108 ya? Cek dong",
 ["96 pas", "86 kebalik", "108 pas", "PR gue: 96 = 8 × 12 = 12 × 8", "iya, komutatif", "susulan: 96 deket 100", "iya, 4 kurang", "jawaban post semua kuku", "catet: pecah 10 + 2", "iya, rapi", "jawaban post lengkap", "susulan: 96 = 2⁵ × 3"],
 "telat dari arsip. 8 × 12. tuntas", ("8 × 12 = 96", "8*12", "96"))

t(790, "Data 10, 12, 14, 16, 18 (naik 2): rata = 14 = nilai tengah. Barisan simetris punya rata di tengah. Temen jumlah manual: 70 ÷ 5 = 14 pas — dua jalur. Susulan: 5, 10, 15, 20, 25? rata 15 ya? Cek dong",
 ["rata 14 = tengah pas", "70 ÷ 5 pas, dua jalur", "susulan 15 pas", "PR gue: 2, 4, 6, 8? rata 5 = tengah dua", "iya, genap data", "jawaban post semua kuku", "catet: simetris → tengah", "iya, itu keindahannya", "jawaban post lengkap", "susulan: median 14 juga"],
 "telat dari arsip. barisan simetris. tuntas", ("rata (10+12+14+16+18)/5 = 14", "70/5", "14"))

t(791, "Bilangan Armstrong 3 digit: jumlah pangkat tiga digitnya = bilangan itu sendiri. 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153. Temen baru tahu — memang langka. Lainnya: 370, 371, 407. Cek dong",
 ["153 = 153 pas", "1 + 125 + 27 pas", "370, 371, 407 pas", "PR gue: cek 370? 27 + 343 + 0 = 370", "iya pas", "susulan: langka tapi lengkap daftarnya", "iya, empat aja", "jawaban post semua kuku", "catet: pangkat = banyak digit", "iya, definisi", "jawaban post lengkap", "susulan: 2 digit? 4 aja? eh gak ada"],
 "telat dari arsip. Armstrong 153. tuntas", ("153: 1 + 125 + 27 = 153", "1+125+27", "153"))

t(792, "9 × 7 = 63. Enam puluh tiga. Temen tulis 66 — salah 3. Cek: 9 × 7 = 10 × 7 − 7 = 70 − 7. Susulan: 9 × 8? 72 ya? Cek dong",
 ["63 pas", "66 salah 3", "72 pas", "PR gue: 9 × 9? 81", "iya pas", "susulan: × 9 = − n dari × 10", "iya, trik 9", "jawaban post semua kuku", "catet: kurang 7 dari 70", "iya, rapi", "jawaban post lengkap", "susulan: digit sum 63 = 9"],
 "telat dari arsip. 9 × 7. tuntas", ("9 × 7 = 63", "9*7", "63"))

t(793, "Luas SETENGAH lingkaran r 14: ½ × 22/7 × 196 = 308. Temen hitung lingkaran penuh 616 lalu bagi dua — sama hasil. Dua jalur. Susulan: r 7? 77 ya? (½ × 154). Cek dong",
 ["616 penuh pas", "308 setengah pas", "dua jalur pas", "susulan 77 pas", "PR gue: setengah ≠ juring 180? sama aja, juring 180° = setengah", "iya, konsisten", "jawaban post semua kuku", "catet: ½ πr²", "iya, rumusnya", "jawaban post lengkap", "susulan: keliling setengah? beda, + diameter"],
 "telat dari arsip. luas setengah lingkaran. tuntas", ("½ × 154 = 77 (r7)", "154/2", "77"))

t(794, "Perjalanan 2j45m + 1j15m = 4 jam. Tambah menit: 45 + 15 = 60 = 1 jam → geser. Temen tulis 3j60m — tulis ulang 4j00m. Susulan: 1j50m + 2j20m? 4j10m ya? Cek dong",
 ["4 jam pas", "3j60m gak sah", "susulan 4j10m pas", "PR gue: 45 + 15 = 60 geser", "iya, geser menit", "susulan: menit maksimal 59", "iya, format", "jawaban post semua kuku", "catet: jumlah menit lalu geser", "iya, b24 juga", "jawaban post lengkap", "susulan: 60 menit = 1 jam"],
 "telat dari arsip. jumlah durasi. tuntas", ("45 + 15 = 60 mnt geser 1 jam", "45+15", "60"))

t(795, "4 × 18 = 72. Tujuh puluh dua. Temen tulis 62 — salah 10. Cek: 4 × 18 = 4 × 20 − 4 × 2 = 80 − 8. Susulan: 18 × 5? 90 ya? Cek dong",
 ["72 pas", "62 salah 10", "90 pas", "PR gue: 80 − 8 rapi", "iya pas", "susulan: 20 minus 2 trik", "iya, deket 20", "jawaban post semua kuku", "catet: dekat bulat dikurangi", "iya, itu triknya", "jawaban post lengkap", "susulan: 72 = 8 × 9 juga"],
 "telat dari arsip. 4 × 18. tuntas", ("4 × 18 = 72", "4*18", "72"))

t(796, "7/10 − 2/5 = 7/10 − 4/10 = 3/10. Penyebut 10 (2/5 dilipat 2). Temen kurangi penyebut juga — salah. Susulan: 9/10 − 3/5? 9/10 − 6/10 = 3/10 juga ya? kebetulan. Cek dong",
 ["4/10 pas", "3/10 pas", "penyebut tetap 10", "susulan 3/10 pas lagi", "PR gue: 2/5 = 4/10 dulu", "iya, samakan", "jawaban post semua kuku", "catet: samakan penyebut dulu", "iya, mantra", "jawaban post lengkap", "susulan: cek desimal 0,3"],
 "telat dari arsip. kurang persepuluh. tuntas", ("7/10 − 4/10 = 3/10", "7-4", "3"))

t(797, "Voucher 15rb syarat 75rb: belanja 68rb gak dapat, tambah 7rb → 75rb dapat, efektif 60rb. Dari 68 langsung lebih mahal (68 > 60) — nambah untung. Susulan: 66rb + 9rb? dapat juga ya? efektif 60rb sama. Cek dong",
 ["68rb gak dapat pas", "efektif 60rb pas", "nambah untung pas", "susulan efektif 60rb sama pas", "PR gue: ambang efektif = 75 − 15 = 60rb", "iya, b25 juga", "jawaban post semua kuku", "catet: ambang − voucher", "iya, itu kuncinya", "jawaban post lengkap", "susulan: jangan nambah asal"],
 "telat dari arsip. ambang 75rb. tuntas", ("75 − 15 = 60rb ambang", "75-15", "60"))

t(798, "12 × 4 = 48. Empat puluh delapan. Temen tulis 44 — salah 4. Cek: 12 × 4 = 48 (12 + 12 + 12 + 12). Susulan: 12 × 5? 60 ya? Cek dong",
 ["48 pas", "44 salah 4", "60 pas", "PR gue: 12 + 12 + 12 + 12 cepet", "iya pas", "susulan: tabel 12 naik 12", "iya, konsisten", "jawaban post semua kuku", "catet: jumlah berulang", "iya, alternatif", "jawaban post lengkap", "susulan: 48 = 4 dozen"],
 "telat dari arsip. 12 × 4. tuntas", ("12 × 4 = 48", "12*4", "48"))

t(799, "13² = 169 dan 14² = 196. Selisih 27 (2 × 13 + 1). Temen kira selisih 25 — itu 12² ke 13². Jarak antar kuadrat naik terus. Susulan: 15²? 225 ya? (196 + 29). Cek dong",
 ["169 pas", "196 pas", "selisih 27 pas", "susulan 225 pas", "PR gue: 2n + 1 rumus jarak", "iya, ganjil", "jawaban post semua kuku", "catet: kuadrat renggang", "iya, b27 juga", "jawaban post lengkap", "susulan: 196 − 169 cek manual"],
 "telat dari arsip. 13²-14². tuntas", ("196 − 169 = 27", "196-169", "27"))

t(800, "800 = 28² + 16 (28² = 784). Bukan kuadrat; kuadrat terdekat 784 dan 841 (29²). Temen kira 800 kuadrat — bukan. Cek dong",
 ["784 = 28² pas", "841 = 29² pas", "800 di antara pas", "PR gue: 800 = 8 × 100, rapi kali", "iya pas", "susulan: akar 800 ≈ 28,28", "iya pas", "jawaban post semua kuku", "catet: antara 28² dan 29²", "iya, selalu ada", "jawaban post lengkap", "susulan: 800 habis dibagi 8"],
 "telat dari arsip. 800 antara kuadrat. tuntas", ("28² = 784; 29² = 841", "28*28", "784"))

assert len(T) == 25, len(T)
build2(T, 776, "threads-32.ts", 32, 28, 626, 32,
       "Topik: 16×5, belanja 4 pekan, separuh 38, tripel 7-24-25, dua hari kerja, 6², 15 dari 60, 7×13, puzzle persegi, ton-kuintal, 81 dua wajah, dadu jumlah 8, sisa cash 200, 8×12, barisan simetris, Armstrong 153, 9×7, luas setengah lingkaran, jumlah durasi, 4×18, kurang persepuluh, ambang 75rb, 12×4, 13²-14², 800 antara kuadrat.")
print("threads-32 ok")
