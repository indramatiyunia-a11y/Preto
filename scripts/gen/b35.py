# threads-35.ts — BATCH 31 (id 851-875, authorId 701-725)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(851, "½ × 62 = 31. Genap rapi, hasil prima 31! Temen jawab 30 — 30 × 2 = 60, kurang 2. Susulan: ½ × 74? 37 ya? Cek dong",
 ["31 pas", "30 × 2 = 60 kurang", "susulan 37 pas", "PR gue: 31 prima pas", "iya pas", "susulan: 62 = 2 × 31", "iya pas", "jawaban post semua kuku", "catet: cek balik kali 2", "iya, selalu", "jawaban post lengkap", "susulan: 31 dua digit prima"],
 "telat dari arsip. separuh 62. tuntas", ("62/2 = 31", "62/2", "31"))

t(852, "Saldo akhir = awal + masuk − keluar: 100 + 50 − 70 = 80rb. Tiga komponen, urutan bebas asal tanda benar. Temen lupa masuk → 30rb salah. Susulan: awal 200, masuk 30, keluar 90? 140rb ya? Cek dong",
 ["80rb pas", "lupa masuk salah", "susulan 140rb pas", "PR gue: minus keluar", "iya, tanda", "susulan: catet dua arah", "iya, buku kas", "jawaban post semua kuku", "catet: tiga komponen", "iya, sistematis", "jawaban post lengkap", "susulan: minus hasil = kurang"],
 "telat dari arsip. saldo tiga komponen. tuntas", ("100 + 50 − 70 = 80rb", "100+50-70", "80"))

t(853, "9 × 13 = 117. Seratus tujuh belas. Temen tulis 107 — salah 10. Cek: 9 × 13 = 9 × 13 = 90 + 27. Susulan: 13 × 9 sama 117 ya? komutatif. Cek dong",
 ["117 pas", "107 salah 10", "90 + 27 rapi", "PR gue: 13 × 9 sama", "iya, komutatif", "susulan: 117 = 9 × 13", "iya pas", "jawaban post semua kuku", "catet: pecah 10 + 3", "iya, standar", "jawaban post lengkap", "susulan: digit sum 117 = 9"],
 "telat dari arsip. 9 × 13. tuntas", ("9 × 13 = 117", "9*13", "117"))

t(854, "Banyak diagonal segi-n = n(n−3)/2. Segi-5: 5 × 2/2 = 5 diagonal. Temen nanya segi-4? 4 × 1/2 = 2 — diagonal persegi dua. Cek dong",
 ["5 diagonal segi-5 pas", "2 diagonal persegi pas", "rumus n(n−3)/2 pas", "PR gue: segi-6? 6 × 3/2 = 9", "iya pas", "susulan: segi-3? nol — segitiga gak punya diagonal", "iya, lucu", "jawaban post semua kuku", "catet: diagonal = sambung non-tetangga", "iya, definisi", "jawaban post lengkap", "susulan: segi-8 = 20 diagonal"],
 "telat dari arsip. diagonal segi-n. tuntas", ("segi-5: 5 × 2/2 = 5", "5*2/2", "5"))

t(855, "6 × 18 = 108. Seratus delapan. Temen tulis 98 — salah 10. Cek: 6 × 18 = 6 × 20 − 6 × 2 = 120 − 12. Susulan: 18 × 7? 126 ya? Cek dong",
 ["108 pas", "98 salah 10", "126 pas", "PR gue: 120 − 12 rapi", "iya pas", "susulan: deket 20", "iya, trik", "jawaban post semua kuku", "catet: pecah 20 − 2", "iya, dua jalur", "jawaban post lengkap", "susulan: 108 = 4 × 27 juga"],
 "telat dari arsip. 6 × 18. tuntas", ("6 × 18 = 108", "6*18", "108"))

t(856, "Dadu: peluang mata ≤ 2 = 2/6 = 1/3 (hanya 1 dan 2). Temen masukkan 3 — 3 > 2. Susulan: ≥ 5? 3 dan 6... eh 5 dan 6 = 2/6 = 1/3 juga ya? Cek dong",
 ["1/3 pas", "3 gak masuk ≤ 2", "susulan 1/3 juga pas", "PR gue: 2 sisi dari 6", "iya, hitung sisi", "jawaban post semua kuku", "catet: daftar mata yang kena", "iya, sistematis", "jawaban post lengkap", "susulan: ≤ 3? 3/6 = ½"],
 "telat dari arsip. dadu ≤ 2. tuntas", ("2/6 = 1/3", "2/6", "0.3333333333333333"))

t(857, "Rata nol: data −80 dan +80 saling hapus → rata 0. Temen tanya gak mungkin — mungkin, keseimbangan sempurna. Susulan: −5, 0, 5? rata 0 juga ya? Cek dong",
 ["rata 0 pas", "saling hapus pas", "susulan 0 pas lagi", "PR gue: 0 bukan berarti gak ada data", "iya, penting", "susulan: minus & plus seimbang", "iya, simetris", "jawaban post semua kuku", "catet: rata = pusat keseimbangan", "iya, itu intinya", "jawaban post lengkap", "susulan: utang plus kredit sama besar"],
 "telat dari arsip. rata nol. tuntas", ("−80 + 80 = 0 → rata 0", "-80+80", "0"))

t(858, "8 × 14 = 112. Seratus dua belas. Temen tulis 102 — salah 10. Cek: 8 × 14 = 8 × 10 + 8 × 4 = 112. Susulan: 14 × 9? 126 ya? Cek dong",
 ["112 pas", "102 salah 10", "126 pas", "PR gue: 80 + 32 rapi", "iya pas", "susulan: 112 = 16 × 7 juga", "iya pas", "jawaban post semua kuku", "catet: pecah 10 + 4", "iya, standar", "jawaban post lengkap", "susulan: 112 = 2⁴ × 7"],
 "telat dari arsip. 8 × 14. tuntas", ("8 × 14 = 112", "8*14", "112"))

t(859, "6 pekan 4 hari = 46 hari (42 + 4). Temen tulis 64 — kebalik. Cek: 6 × 7 = 42, plus 4. Susulan: 5 pekan 3 hari? 38 ya? Cek dong",
 ["46 pas", "64 kebalik", "38 pas", "PR gue: pekan × 7 dulu", "iya, dua langkah", "susulan: tulis pelan", "iya, disiplin", "jawaban post semua kuku", "catet: campuran pekan-hari", "iya, b31 juga", "jawaban post lengkap", "susulan: 46 hari ≈ 6,6 pekan"],
 "telat dari arsip. 6 pekan 4 hari. tuntas", ("6 × 7 + 4 = 46", "6*7+4", "46"))

t(860, "3 × 45 = 135. Seratus tiga puluh lima. Temen tulis 125 — salah 10. Cek: 45 × 3 = 135 (45 × 3 = 90 + 45). Susulan: 45 × 4? 180 ya? Cek dong",
 ["135 pas", "125 salah 10", "180 pas", "PR gue: 90 + 45 naik", "iya pas", "susulan: 135 = 27 × 5 juga", "iya pas", "jawaban post semua kuku", "catet: tabel 45", "iya, konsisten", "jawaban post lengkap", "susulan: 135 = 3 × 45"],
 "telat dari arsip. 3 × 45. tuntas", ("3 × 45 = 135", "3*45", "135"))

t(861, "0,25 hari = 6 jam (0,25 × 24). Perempat hari. Temen tulis 25 jam — koma hilang. Susulan: 0,5 hari? 12 jam ya? Cek dong",
 ["6 jam pas", "25 jam koma hilang", "12 jam pas", "PR gue: hari × 24", "iya, rumus", "susulan: 0,75 hari = 18 jam", "iya, tiga perempat", "jawaban post semua kuku", "catet: pecahan hari × 24", "iya, itu rumusnya", "jawaban post lengkap", "susulan: 0,1 hari = 2,4 jam"],
 "telat dari arsip. 0,25 hari. tuntas", ("0,25 × 24 = 6 jam", "0.25*24", "6"))

t(862, "5 × 23 = 115. Seratus lima belas. Temen tulis 105 — salah 10. Cek: 5 × 23 = 5 × 20 + 5 × 3 = 115. Susulan: 23 × 6? 138 ya? Cek dong",
 ["115 pas", "105 salah 10", "138 pas", "PR gue: 100 + 15 rapi", "iya pas", "susulan: deket 20 ditambah", "iya, trik", "jawaban post semua kuku", "catet: pecah 20 + 3", "iya, standar", "jawaban post lengkap", "susulan: 115 = 5 × 23"],
 "telat dari arsip. 5 × 23. tuntas", ("5 × 23 = 115", "5*23", "115"))

t(863, "Harga rata 5 barang: total 375rb → 75rb per barang. Temen bagi 375/5 kaku — 75 × 5 = 375 cek balik. Susulan: total 300rb? 60rb per barang ya? Cek dong",
 ["375rb pas", "75rb per barang pas", "cek balik 75 × 5 pas", "susulan 60rb pas", "PR gue: rata = total ÷ banyak", "iya, rumus", "jawaban post semua kuku", "catet: cek balik dengan kali", "iya, selalu", "jawaban post lengkap", "susulan: 375 = 3 × 125 juga"],
 "telat dari arsip. rata 5 barang. tuntas", ("375/5 = 75rb", "375/5", "75"))

t(864, "7 × 19 = 133. Seratus tiga puluh tiga. Temen tulis 123 — salah 10. Cek: 7 × 19 = 7 × 20 − 7 = 140 − 7. Susulan: 19 × 8? 152 ya? Cek dong",
 ["133 pas", "123 salah 10", "152 pas", "PR gue: 140 − 7 rapi", "iya pas", "susulan: deket 20 dikurangi", "iya, trik", "jawaban post semua kuku", "catet: × 20 minus 7", "iya, dua langkah", "jawaban post lengkap", "susulan: 133 = 7 × 19"],
 "telat dari arsip. 7 × 19. tuntas", ("7 × 19 = 133", "7*19", "133"))

t(865, "Keterbagian 12 = habis dibagi 3 DAN 4. 1.512: digit sum 9 (habis 3), dua digit akhir 12 (habis 4) → habis 12. Temen cek satu syarat doang — dua-duanya wajib. Susulan: 2.688? digit sum 24, ekor 88 → ya ya? Cek dong",
 ["dua syarat pas", "1.512 ya pas", "2.688 ya pas", "PR gue: 1.514? habis 4? 14 gak habis 4 → bukan", "iya pas", "susulan: 12 = 3 × 4, saling prima", "iya, syarat gabung", "jawaban post semua kuku", "catet: dua cek independen", "iya, b30 juga", "jawaban post lengkap", "susulan: 24 = 3 × 8, sama logika"],
 "telat dari arsip. keterbagian 12. tuntas", ("digit sum 1512 = 9", "1+5+1+2", "9"))

t(866, "9 × 15 = 135. Seratus tiga puluh lima. Temen tulis 125 — salah 10. Cek: 9 × 15 = 9 × 15 = 10 × 15 − 15 = 135. Susulan: 15 × 10? 150 ya? Cek dong",
 ["135 pas", "125 salah 10", "150 pas", "PR gue: 150 − 15 rapi", "iya pas", "susulan: × 9 = × 10 − n", "iya, trik 9", "jawaban post semua kuku", "catet: 135 = 27 × 5 juga", "iya pas", "jawaban post lengkap", "susulan: 135 mnt = 2j15m"],
 "telat dari arsip. 9 × 15. tuntas", ("9 × 15 = 135", "9*15", "135"))

t(867, "Sudut vertikal: dua garis berpotongan, sudut bertolak belakang SAMA besar. Satu 35° → di seberangnya juga 35°. Temen kira beda — vertikal selalu sama. Susulan: satu 70°? bertolak belakang 70° juga ya? Cek dong",
 ["35° sama 35° pas", "vertikal selalu sama", "susulan 70° pas", "PR gue: bersebelahan? suplemen 145", "iya, 180 − 35", "susulan: dua garis = 4 sudut", "iya, pasangan", "jawaban post semua kuku", "catet: bertolak belakang sama", "iya, itu teorema", "jawaban post lengkap", "susulan: 2 × 35 + 2 × 145 = 360"],
 "telat dari arsip. sudut vertikal. tuntas", ("35 + 145 = 180 suplemen", "35+145", "180"))

t(868, "4 × 33 = 132. Seratus tiga puluh dua. Temen tulis 122 — salah 10. Cek: 4 × 33 = 4 × 30 + 4 × 3 = 132. Susulan: 33 × 5? 165 ya? Cek dong",
 ["132 pas", "122 salah 10", "165 pas", "PR gue: 120 + 12 rapi", "iya pas", "susulan: 132 = 12 × 11 juga", "iya pas", "jawaban post semua kuku", "catet: pecah 30 + 3", "iya, standar", "jawaban post lengkap", "susulan: 132 habis dibagi 11"],
 "telat dari arsip. 4 × 33. tuntas", ("4 × 33 = 132", "4*33", "132"))

t(869, "Estimasi tiba: 150 km dengan 75 km/j → 2 jam. Berangkat 09.00 → tiba 11.00. Temen nanya 150 km 60 km/j? 2,5 jam → 11.30. Cek dong",
 ["2 jam pas", "11.00 pas", "2,5 jam pas", "PR gue: jarak ÷ laju", "iya, rumus", "susulan: berangkat + durasi", "iya, dua langkah", "jawaban post semua kuku", "catet: hitung durasi dulu", "iya, urutan", "jawaban post lengkap", "susulan: macet? tambah buffer"],
 "telat dari arsip. estimasi tiba. tuntas", ("150/75 = 2 jam", "150/75", "2"))

t(870, "10 × 47 = 470. Empat ratus tujuh puluh. Temen tulis 47 — kurang nol. Susulan: 47 × 100? 4.700 ya? Cek dong",
 ["470 pas", "47 kurang nol", "4.700 pas", "PR gue: × 10, × 100 tangga nol", "iya, geser", "susulan: 470 = 47 × 10", "iya pas", "jawaban post semua kuku", "catet: geser koma/nol", "iya, b26 juga", "jawaban post lengkap", "susulan: × 1.000 = tiga nol"],
 "telat dari arsip. 10 × 47. tuntas", ("10 × 47 = 470", "10*47", "470"))

t(871, "Koin tiga kali SEMUA SAMA (semua gambar ATAU semua angka): 2/8 = ¼. Dua kasus, masing 1/8. Temen hitung satu kasus aja. Susulan: empat kali semua sama? 2/16 = 1/8 ya? Cek dong",
 ["2/8 = ¼ pas", "dua kasus pas", "susulan 1/8 pas", "PR gue: semua gambar 1/8, semua angka 1/8", "iya, dua jalur", "susulan: jumlah kasus disamakan", "iya, sistematis", "jawaban post semua kuku", "catet: ATAU = jumlah", "iya, b25 juga", "jawaban post lengkap", "susulan: makin banyak koin makin kecil"],
 "telat dari arsip. koin semua sama. tuntas", ("2/8 = 1/4", "2/8", "0.25"))

t(872, "14 × 3 = 42. Empat puluh dua. Temen tulis 32 — salah 10. Cek: 14 × 3 = 14 × 3 = 10×3 + 4×3 = 42. Susulan: 14 × 4? 56 ya? Cek dong",
 ["42 pas", "32 salah 10", "56 pas", "PR gue: 30 + 12 rapi", "iya pas", "susulan: 42 = 6 × 7 juga", "iya pas", "jawaban post semua kuku", "catet: pecah 10 + 4", "iya, standar", "jawaban post lengkap", "susulan: 42 = 6 × 7, jawaban hidup"],
 "telat dari arsip. 14 × 3. tuntas", ("14 × 3 = 42", "14*3", "42"))

t(873, "3/16 = 0,1875. Penyebut 16 = 2⁴, desimal berhenti (bagi 2 empat kali: 0,5 → 0,25 → 0,125 → 0,0625; 3 × 0,0625). Temen nanya kenapa berhenti — pangkat dua selalu berhenti. Cek dong",
 ["0,1875 pas", "16 = 2⁴ pas", "pangkat dua berhenti pas", "PR gue: 1/16 = 0,0625 dasar", "iya pas", "susulan: 3/16 = 3 × 0,0625", "iya, dua jalur", "jawaban post semua kuku", "catet: penyebut pangkat dua", "iya, keluarga 8,16,32", "jawaban post lengkap", "susulan: 5/16 = 0,3125"],
 "telat dari arsip. per-16. tuntas", ("3/16 = 0,1875", "3/16", "0.1875"))

t(874, "11 × 15 = 165. Seratus enam puluh lima. Temen tulis 155 — salah 10. Cek: 11 × 15 = 10 × 15 + 15 = 165. Susulan: 15 × 12? 180 ya? Cek dong",
 ["165 pas", "155 salah 10", "180 pas", "PR gue: 150 + 15 rapi", "iya pas", "susulan: × 11 = × 10 + n", "iya, trik 11", "jawaban post semua kuku", "catet: pecah 10 + 1", "iya, standar", "jawaban post lengkap", "susulan: 165 = 11 × 15"],
 "telat dari arsip. 11 × 15. tuntas", ("11 × 15 = 165", "11*15", "165"))

t(875, "Sisa hari sampai akhir tahun dari 1 November: 60 hari (Nov 30 + Des 31 − 1, karena 1 Nov dihitung sudah lewat... eh dihitung dari besok: 29 + 31 = 60). Temen hitung 61 — hitung dirinya juga. Kesepakatan: dari besok. Cek dong",
 ["Nov sisa 29 pas", "Des 31 pas", "60 hari pas", "PR gue: tanggal mulai dihitung atau tidak? sepakati", "iya, itu intinya", "susulan: dari 1 Des? 31 hari", "iya pas", "jawaban post semua kuku", "catet: tepi rentang rawan", "iya, b18 juga", "jawaban post lengkap", "susulan: hitung mundur cek dua kali"],
 "telat dari arsip. sisa hari tahun. tuntas", ("29 + 31 = 60 hari", "29+31", "60"))

assert len(T) == 25, len(T)
build2(T, 851, "threads-35.ts", 35, 31, 701, 35,
       "Topik: separuh 62, saldo tiga komponen, 9×13, diagonal segi-n, 6×18, dadu ≤ 2, rata nol, 8×14, 6 pekan 4 hari, 3×45, 0,25 hari, 5×23, rata 5 barang, 7×19, keterbagian 12, 9×15, sudut vertikal, 4×33, estimasi tiba, 10×47, koin semua sama, 14×3, per-16, 11×15, sisa hari tahun.")
print("threads-35 ok")
