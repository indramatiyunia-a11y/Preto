# threads-29.ts — BATCH 25 (id 701-725, authorId 551-575)
import sys
sys.path.insert(0, "/home/z/my-project/scripts/gen")
from common2 import build2

T = []
def t(pid, c, k, tl, chk=None):
    T.append((pid, c, k, tl) + ((chk,) if chk else ()))

t(701, "8 × 125 = 1.000. Kenapa cantik? 125 itu 1.000/8, kebalikannya pas. Temen nanya gunanya: harga 125rb × 8 unit = 1 juta rapi. Susulan: 4 × 250? 1.000 juga ya? Cek dong",
 ["1.000 pas", "125 = 1.000/8, kebalikan", "susulan 1.000 pas juga", "PR gue: 2 × 500? 1.000", "iya pas", "susulan: semua pasangan ke 1.000", "iya, pasangan seribu", "jawaban post semua kuku", "catet: 8 × 125 = 1.000", "iya, pasangan favorit", "jawaban post lengkap", "susulan: 16 × 62,5 juga"],
 "telat dari arsip. 8 × 125. tuntas", ("8 × 125 = 1.000", "8*125", "1000"))

t(702, "Belanja 87rb + ongkir 13rb = 100rb tepat — pakai voucher gratis kirim min 100rb? pas batasnya. Temen bingung hitungan 87+13 = 100: ya pas. Susulan: belanja 86rb? total 99rb — kurang 1rb, gak dapat voucher ya? Cek dong",
 ["100rb pas batas", "87 + 13 = 100, tepat", "susulan 99rb kurang, gak dapat", "PR gue: tambah 1rb barang? dapat", "iya, strategi", "susulan: cek syarat min belanja", "iya, wajib", "jawaban post semua kuku", "catet: batas voucher", "iya, itu pelajarannya", "jawaban post lengkap", "susulan: ongkir naik jika jauh"],
 "telat dari arsip. batas voucher. tuntas", ("87 + 13 = 100rb", "87000+13000", "100000"))

t(703, "½ dari 18 = 9. Separuh. Temen jawab 8 — salah separuh. Cek: 9 + 9 = 18. Susulan: ½ dari 34? 17 ya? Cek dong",
 ["9 pas", "8 itu salah", "17 + 17 = 18 cek", "susulan 17 pas", "PR gue: ½ dari 51? 25,5 — ganjil", "iya, desimal", "susulan: genap selalu rapi", "iya, ganjil 5 koma", "jawaban post semua kuku", "catet: ganjil berakhir ,5", "iya, b12 pernah", "jawaban post lengkap", "susulan: ½ dari 22 = 11"],
 "telat dari arsip. separuh. tuntas", ("½ × 18 = 9", "18/2", "9"))

t(704, "Kipas 50 W × 8 jam/hari = 400 Wh = 0,4 kWh per hari. Sebulan (30 hari) = 12 kWh. Temen bingung Wh vs kWh — bagi 1.000. Susulan: TV 100 W × 5 jam? 0,5 kWh/hari ya? Cek dong",
 ["0,4 kWh per hari pas", "12 kWh per bulan pas", "Wh bagi 1.000 jadi kWh", "susulan 0,5 pas", "PR gue: 15 hari? 6 kWh", "iya pas", "susulan: tarif per kWh × total", "iya, tagihan", "jawaban post semua kuku", "catet: watt × jam = Wh", "iya, rumusnya", "jawaban post lengkap", "susulan: standby tetap nyedot"],
 "telat dari arsip. watt × jam. tuntas", ("kipas: 50 × 8 × 30 = 12.000 Wh = 12 kWh", "50*8*30", "12000"))

t(705, "15 menit × 4 = 60 menit = 1 jam. Empat kuartal jam. Temen nanya kenapa 15 istimewa: 60 ÷ 4 = 15, bagi rata jam. Susulan: 20 menit × 3 juga 1 jam ya? Cek dong",
 ["60 menit pas", "empat kuartal", "susulan 20 × 3 juga pas", "PR gue: 30 × 2? 1 jam", "iya pas", "susulan: pembagi 60 banyak", "iya, basis 60", "jawaban post semua kuku", "catet: pembagi jam", "iya, 15 & 20 & 30", "jawaban post lengkap", "susulan: 25 × ? gak pas 60"],
 "telat dari arsip. pembagi 60. tuntas", ("15 × 4 = 60", "15*4", "60"))

t(706, "Kupon 10rb syarat min belanja 50rb. Belanja 48rb → gak dapat. Kurang 2rb. Temen nambah permen 3rb → 51rb, dapat, efektif bayar 41rb — makin murah dari sebelum nambah! Paradoks voucher. Susulan: 47rb + 5rb? dapat juga ya? Cek dong",
 ["48rb gak dapat, kurang 2rb", "nambah justru lebih murah", "paradoks voucher pas", "susulan 47 + 5 dapat pas", "PR gue: berapa belanja minimum biar untung? 40rb ke atas", "iya, 50 − 10 = 40", "jawaban post semua kuku", "catet: min belanja − kupon", "iya, ambang efektif", "jawaban post lengkap", "susulan: jangan nambah sembarangan"],
 "telat dari arsip. ambang voucher. tuntas", ("ambang efektif: 50rb − 10rb = 40rb", "50000-10000", "40000"))

t(707, "Tabel 6: 6 × 7 = 42, 6 × 8 = 48. Selisih 6 — naik satu berarti tambah 6. Temen tanya 6 × 9? 54, tambah 6 lagi. Cek dong",
 ["42 pas", "48 pas", "selisih 6, naik satu", "54 pas, tambah 6", "PR gue: 6 × 11? 66", "iya pas", "susulan: trik 6 = 5 × n + n", "iya, 35 + 7 = 42", "jawaban post semua kuku", "catet: tabel 6 = 5n + n", "iya, itu triknya", "jawaban post lengkap", "susulan: 6 × 12 = 72"],
 "telat dari arsip. tabel 6. tuntas", ("6 × 7 = 42; 6 × 8 = 48", "6*7", "42"))

t(708, "20 menit × 3 = 60 menit = 1 jam. Tiga sesi 20 menit. Temen hitung 60 menit lalu bingung konversi — 60 menit = 1 jam ya. Susulan: empat sesi 15 menit? juga 1 jam ya? Cek dong",
 ["60 menit pas", "1 jam pas", "empat 15 juga pas", "PR gue: 12 × 5? 1 jam", "iya pas", "susulan: pasangan pembagi 60", "iya, b24 pernah", "jawaban post semua kuku", "catet: sesi × durasi", "iya, dua faktor", "jawaban post lengkap", "susulan: pomodoro 25 × 2 = 50 mnt"],
 "telat dari arsip. sesi 20 menit. tuntas", ("20 × 3 = 60 mnt", "20*3", "60"))

t(709, "Keliling trapesium: jumlah empat sisi. 8 + 6 + 5 + 7 = 26. Luas butuh tinggi, keliling cuma jumlah sisi — beda soal. Temen tukar rumus. Susulan: sisi 9, 9, 4, 6? 28 ya? Cek dong",
 ["26 pas", "keliling = jumlah sisi", "luas butuh tinggi, beda", "susulan 28 pas", "PR gue: persegi? 4s langsung", "iya pas", "susulan: trapesium simetris sisi sama", "iya, dua sisi sama", "jawaban post semua kuku", "catet: jangan tukar rumus", "iya, itu pesannya", "jawaban post lengkap", "susulan: gambar dulu bantu"],
 "telat dari arsip. keliling trapesium. tuntas", ("keliling 8+6+5+7 = 26", "8+6+5+7", "26"))

t(710, "¼ dari 200 = 50. Bagi 4. Temen jawab 40 — itu 20%. Persen dan pecahan beda kostum. Susulan: ¾ dari 200? 150 ya? Cek dong",
 ["50 pas, bagi 4", "40 itu 20%", "susulan 150 pas", "PR gue: ½ dari 200? 100", "iya pas", "susulan: 200 enak dibagi 4", "iya, habis", "jawaban post semua kuku", "catet: ¼ = bagi 4", "iya, itu intinya", "jawaban post lengkap", "susulan: ⅛ dari 200 = 25"],
 "telat dari arsip. seperempat. tuntas", ("¼ × 200 = 50", "200/4", "50"))

t(711, "Sepatu lari patokan umum ganti di 600-800 km. Sudah 500 km — masih aman tapi siapkan pasangan. Temen nanya kenapa range: berat badan, gaya langkah, permukaan mempengaruhi. Susulan: 700 km? sudah masuk zona ganti ya? Cek dong",
 ["500 masih aman", "600-800 patokan umum", "range karena banyak faktor", "susulan 700 masuk zona pas", "PR gue: 800? wajib ganti", "iya pas", "susulan: sol aus bikin lutut", "iya, serius", "jawaban post semua kuku", "catet: km pakai, bukan umur", "iya, dua ukuran", "jawaban post lengkap", "susulan: catat km dari awal"],
 "telat dari arsip. km sepatu. tuntas", ("zona ganti: 600-800 km", "600+200", "800"))

t(712, "Panen 60 kg dibagi rata 3 petani → 20 kg per orang. Temen bagi 60/4 — kepala ada 3, bukan 4. Susulan: 4 petani? 15 kg ya? Cek dong",
 ["20 kg pas", "60/4 itu salah kepala", "susulan 15 kg pas", "PR gue: 5 petani? 12 kg", "iya pas", "susulan: 60 fleksibel dibagi", "iya, banyak pembagi", "jawaban post semua kuku", "catet: total ÷ kepala", "iya, dasar", "jawaban post lengkap", "susulan: bagi rasio? lain soal"],
 "telat dari arsip. bagi panen. tuntas", ("60 ÷ 3 = 20 kg", "60/3", "20"))

t(713, "Segi-5 beraturan: keliling 5 × sisi. Sisi 6 → 30. Temen pakai rumus luas — keliling lebih dulu, gampang. Susulan: sisi 9? 45 ya? Cek dong",
 ["30 pas", "5 × sisi", "susulan 45 pas", "PR gue: sisi 12? 60", "iya pas", "susulan: segi-n keliling n × s", "iya, umum", "jawaban post semua kuku", "catet: banyak sisi × sisi", "iya, dua faktor", "jawaban post lengkap", "susulan: segi-6 s 5? 30 juga"],
 "telat dari arsip. keliling segi-5. tuntas", ("keliling 5 × 6 = 30", "5*6", "30"))

t(714, "Dua dadu jumlah ≤ 4: (1,1), (1,2), (2,1), (1,3), (3,1), (2,2) — enam dari 36 = 1/6. Temen kelewat (2,2). Susulan: jumlah ≥ 5? 30/36 = 5/6 ya? komplemen. Cek dong",
 ["enam kasus pas", "(2,2) sering kelewat", "1/6 pas", "susulan 30/36 = 5/6 pas", "PR gue: jumlah ≤ 2? cuma (1,1), 1/36", "iya pas", "susulan: tabel 6 × 6 paling aman", "iya, b24 juga", "jawaban post semua kuku", "catet: daftar sistematis", "iya, itu metodenya", "jawaban post lengkap", "susulan: jumlah 3? 2/36"],
 "telat dari arsip. jumlah kecil dadu. tuntas", ("jumlah ≤ 4: 6/36", "6*1", "6"))

t(715, "Tiga film × 105 menit = 315 menit = 5 jam 15 menit. Temen bagi 315/60 lalu bingung desimal 5,25 jam = 5j15m. Susulan: dua film? 210 = 3j30m ya? Cek dong",
 ["315 pas", "5,25 jam = 5j15m pas", "susulan 3j30m pas", "PR gue: empat film? 420 = 7 jam", "iya pas", "susulan: 0,25 jam = 15 mnt", "iya, seperempat", "jawaban post semua kuku", "catet: desimal × 60", "iya, konversi b20", "jawaban post lengkap", "susulan: nonton marathon? istirahat juga"],
 "telat dari arsip. 105 × 3. tuntas", ("3 × 105 = 315 mnt", "3*105", "315"))

t(716, "3/4 − 1/3 = 9/12 − 4/12 = 5/12. Penyebut 12 (KPK 4 dan 3). Temen jumlah penyebut jadi 7 — salah lama. Susulan: 5/6 − 1/2? 5/6 − 3/6 = 2/6 = 1/3 ya? Cek dong",
 ["9/12 − 4/12 pas", "penyebut 12 = KPK", "5/12 pas", "susulan 1/3 pas", "PR gue: 2/3 − 1/4? 8/12 − 3/12 = 5/12 juga", "iya, kebetulan sama", "jawaban post semua kuku", "catet: KPK penyebut", "iya, itu kuncinya", "jawaban post lengkap", "susulan: cek desimal 0,4167 an"],
 "telat dari arsip. penyebut 12. tuntas", ("3/4 − 1/3 = 5/12: 9 − 4 = 5", "9-4", "5"))

t(717, "100 ÷ 25 = 4. Empat koin 25. Temen nanya kenapa gak 25 — 25 × 4 = 100, bukan 25 × 1. Cek balik selalu kali. Susulan: 200 ÷ 25? 8 ya? Cek dong",
 ["4 pas", "25 × 4 = 100 cek", "susulan 8 pas", "PR gue: 75 ÷ 25? 3", "iya pas", "susulan: 25 pembagi rapi", "iya, perempatan", "jawaban post semua kuku", "catet: cek balik dengan kali", "iya, selalu", "jawaban post lengkap", "susulan: 1.000 ÷ 25 = 40"],
 "telat dari arsip. bagi 25. tuntas", ("100 ÷ 25 = 4", "100/25", "4"))

t(718, "Paket dua barang 100rb vs satuan 55rb × 2 = 110rb → paket hemat 10rb. Per unit paket 50rb vs 55rb — hemat 5rb per unit. Temen beli satuan karena gak hitung. Susulan: 3-for-150rb vs 52rb satuan? hemat 6rb ya? Cek dong",
 ["hemat 10rb total pas", "per unit 50 vs 55 pas", "susulan hemat 6rb pas", "PR gue: kapan satuan lebih murah? kalau paket di atas 2 × satuan", "iya, cek dulu", "susulan: paket gak selalu untung", "iya, jangan asal", "jawaban post semua kuku", "catet: banding per unit", "iya, itu kuncinya", "jawaban post lengkap", "susulan: stok paket lebih banyak"],
 "telat dari arsip. paket vs satuan. tuntas", ("110 − 100 = 10rb hemat", "110-100", "10"))

t(719, "Enam tas × 4 kg = 24 kg total. Cek kapasitas: rak 30 kg — muat, sisa 6 kg. Temen heran kok muat semua: 24 < 30. Susulan: tujuh tas? 28 kg — masih muat ya? Cek dong",
 ["24 kg pas", "muat, sisa 6 kg", "susulan 28 muat pas", "PR gue: delapan tas? 32 — kelebihan 2", "iya pas", "susulan: sebar rak dua? 16 & 16", "iya pas", "jawaban post semua kuku", "catet: total vs kapasitas", "iya, banding", "jawaban post lengkap", "susulan: timbang dulu, perkiraan meleset"],
 "telat dari arsip. total vs kapasitas. tuntas", ("6 × 4 = 24 kg", "6*4", "24"))

t(720, "5³ = 5 × 5 × 5 = 125. Tiga kali, bukan 15 (5 × 3). Pangkat = berlipat berulang. Temen kecampur kali. Susulan: 4³? 64 ya? Cek dong",
 ["125 pas", "15 itu 5 × 3, salah", "susulan 64 pas", "PR gue: 6³? 216", "iya pas", "susulan: 10³ = 1.000", "iya, tangga", "jawaban post semua kuku", "catet: pangkat = ulang kali", "iya, itu bedanya", "jawaban post lengkap", "susulan: 2³ = 8 juga"],
 "telat dari arsip. 5³ = 125. tuntas", ("5³ = 125", "5*5*5", "125"))

t(721, "Tiga dekade = 30 tahun. Lahir 1996 → 2026 umur 30, tepat tiga dekade. Temen tanya dekade ke-empat mulai kapan: 2026-2035. Cek dong",
 ["30 tahun pas", "1996 → 30 pas", "dekade ke-4 mulai 2026 pas", "PR gue: lahir 1994? 32 — dua dekade + 2", "iya pas", "susulan: umur dekade = sisa mod 10", "iya, modulo", "jawaban post semua kuku", "catet: dekade = 10 tahun", "iya, dasar", "jawaban post lengkap", "susulan: 40 tahun = 4 dekade"],
 "telat dari arsip. tiga dekade. tuntas", ("2026 − 1996 = 30", "2026-1996", "30"))

t(722, "Prima kembar: pasangan prima selisih 2. 11-13, 17-19, 29-31. Temen nanya 3-5? juga kembar ya. Kembar terbesar yang diketahui gede banget — bukti ada tak terhingga masih terbuka. Cek dong",
 ["11-13 kembar pas", "17-19 pas", "29-31 pas", "3-5 juga kembar pas", "PR gue: 41-43? kembar", "iya pas", "susulan: 5-7 juga", "iya pas", "jawaban post semua kuku", "catet: selisih 2", "iya, definisi", "jawaban post lengkap", "susulan: konjektur kembar tak terbukti"],
 "telat dari arsip. prima kembar. tuntas", ("kembar: 13 − 11 = 2", "13-11", "2"))

t(723, "Tangga rumah: 16 anak × 18 cm = 288 cm = 2,88 m naik. Temen kira 2,88 km — jelas salah satuan, itu meter. Susulan: 20 anak × 18? 360 cm = 3,6 m ya? Cek dong",
 ["288 cm pas", "2,88 m pas", "km itu salah satuan", "susulan 3,6 m pas", "PR gue: 10 anak? 1,8 m", "iya pas", "susulan: lantai 2 tingginya ±3 m", "iya, wajar", "jawaban post semua kuku", "catet: anak × tinggi anak tangga", "iya, dua faktor", "jawaban post lengkap", "susulan: anak tangga 17-18 cm standar"],
 "telat dari arsip. tinggi tangga. tuntas", ("16 × 18 = 288 cm", "16*18", "288"))

t(724, "Alarm 05.30, snooze 9 menit dua kali → 05.48. Setelah dua snooze tinggal 12 menit sebelum 06.00. Temen nanya total telat bangun: 18 menit dari alarm awal. Cek dong",
 ["05.48 pas", "9 × 2 = 18 mnt pas", "sisa 12 mnt ke 06.00", "PR gue: snooze tiga kali? 05.57 — mepet", "iya pas", "susulan: snooze bikin makin ngantuk", "iya, fakta", "jawaban post semua kuku", "catet: alarm + snooze × banyak", "iya, dua langkah", "jawaban post lengkap", "susulan: taruh HP jauh biar gak snooze"],
 "telat dari arsip. snooze 9 menit. tuntas", ("05.30 + 18 mnt = 05.48", "30+18", "48"))

t(725, "½ × 26 = 13. Separuh dua puluh enam. Temen jawab 12 — cek: 12 × 2 = 24, kurang 2. Susulan: ½ × 42? 21 ya? Cek dong",
 ["13 pas", "12 × 2 = 24, kurang", "susulan 21 pas", "PR gue: ½ × 19? 9,5 — ganjil", "iya pas", "susulan: genap rapi, ganjil koma", "iya, b24 juga", "jawaban post semua kuku", "catet: separuh = bagi 2", "iya, dasar", "jawaban post lengkap", "susulan: 26 = 2 × 13, prima 13"],
 "telat dari arsip. separuh 26. tuntas", ("½ × 26 = 13", "26/2", "13"))

assert len(T) == 25, len(T)
build2(T, 701, "threads-29.ts", 29, 25, 551, 29,
       "Topik: 8×125, batas voucher, separuh 18, kipas watt, pembagi 60, ambang voucher, tabel 6, sesi 20 menit, keliling trapesium, seperempat 200, km sepatu, bagi panen, keliling segi-5, dadu jumlah kecil, 3 film 105, penyebut 12, bagi 25, paket vs satuan, tas kapasitas, 5³, tiga dekade, prima kembar, tangga 18 cm, snooze, separuh 26.")
print("threads-29 ok")
