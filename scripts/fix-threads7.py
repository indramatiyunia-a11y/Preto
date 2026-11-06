#!/usr/bin/env python3
# Fix threads-7.ts: replace old formula texts with new ones (literal replace).
import io, sys

path = "/home/z/my-project/src/lib/threadz/data/threads-7.ts"
s = io.open(path, encoding="utf-8").read()

pairs = [
# post 151
("Ada cara lain yang sekeren itu? Siapa pun yang menemukan trik jari itu, semoga sehat selalu.",
 "Ada cara lain yang sekeren itu? Soalnya kalau adiknya udah ikut bisa, yang jadi penonton cuma saya."),
('content: "dua anak saling mengajar itu tanda rumah yang sehat bu 🙏"',
 'content: "trik jari sembilan itu saya sampai sekarang masih pakai pas lupa tabel, gak malu kok, yang penting cepat"'),
('content: "trik itu warisan lisan berabad-abad bu. semoga si penyihir kecil lanjut ke tabel tujuh"',
 'content: "buat tabel tujuh gak ada trik jari bu, tapi bisa hitung mundur: 70, 63, 56... anak-anak suka karena rasanya kayak turun tangga"'),
# post 155
("buku titipan itu tidak pernah saya anggap utang. itu catatan bahwa orang masih bisa saling percaya",
 "gue catat lagi di buku: bayar sendiri, bawa teman. yang titip roti rasa cokelat itu ternyata satu angkatan sama adik gue, besok gue omelin"),
('content: "warung yang punya buku titipan itu warung yang jadi bagian dari lingkungan, dik"',
 'content: "dik, anak seragam putih titip roti itu biasanya anak yang uang jajannya keburu abis, kasian dikit gak apa-apa, asal dicatet"'),
# post 158
("besok dicoba lagi tanpa tidur siang. doakan. badan ini pelan-pelan belajar jam yang baru",
 "besok dicoba lagi tanpa tidur siang. kalau gagal lagi ya sudah, berarti badan gue masih setia sama jam shift lama"),
('content: "badan itu pegawai setia bang, hanya butuh surat pindah tugas yang ditandatangani berkali-kali"',
 'content: "ganti shift gue dulu butuh 10 hari buat normal lagi bang, jangan diburu-buru, tidur siang 20 menit aja boleh"'),
# post 159
("orang begini gue doakan panjang umur",
 "orang begini bikin gue sampai lupa mau protes soal jalan macet wkwk. besok kalau ketemu penumpang nyebelin, gue tinggal inget percakapan ini"),
('content: "doa panjang umur dari penumpang itu bonus yang tidak masuk aplikasi, bang"',
 'content: "bang, penumpang jam segini biasanya udah diam semua, yang masih ngobrol begini biasanya baru dapet kabar baik dari rumah, tinggal dengerin aja"'),
# post 165
("pasar itu ternyata bukan soal dagangan saja, tetapi soal siapa yang menunggu kita buka.\\nsemoga di pasar sebelah dia laku terus. dan semoga gue tidak terlalu banyak berpikir ketika ada yang menyebut namanya",
 "dia pindahnya gak jauh kok. besok gue nyusul ke sana sekalian beli piring, yang di warung udah retak dua"),
('content: "teman lapangan itu keluarga yang tidak sekampung teh 🙏"',
 'content: "teh, piring retak dua itu ganti aja sekalian, sekalian ngecek harga gelas di pasar sebelah buat stok warung"'),
# post 166
("Besok dicoba lagi. Sistem ini seperti orang yang sedang belajar sopan: sering salah, dimaafkan karena katanya demi kebaikan bersama.",
 "Besok dicoba lagi. Kalau masih gagal, saya bawa pulpen sendiri dan tanya langsung bagian mana yang boleh ditandatangani pakai tinta, biar jelas."),
('content: "tiga penyebab berbeda itu tandanya masalahnya bukan satu orang. semoga besok lancar"',
 'content: "sistem error tiga kali sehari biasanya lagi masa pembaruan non, cek pengumuman internal dulu, biasanya ada suratnya"'),
('content: "dimaafkan demi kebaikan bersama. kalimat itu berlaku juga untuk banyak hal di kantor, non"',
 'content: "tanda tangan digital di kantor saya juga pernah error seminggu non, akhirnya balik ke tinta sampai sistemnya tenang"'),
# post 167
('content: "orang yang memikirkan itu kemungkinan besar pernah kesal berulang karena baut lepas, bro. desain cerdas memang lahir dari kesal berulang"',
 'content: "ulir kiri itu juga dipakai di tutup tabung gas bro, arah bukanya berlawanan biar gak ketuker sama selang air. kejadian di rumah saya"'),
# post 168
("aku berpikir, jualan itu tidak bisa menjamin semuanya. yang bisa dijamin hanya jujur soal mana yang belum tentu",
 "anehnya, mangga yang saya bilang belum tentu manis itu malah habis duluan"),
('content: "penjual yang tidak berjanji itu penjual yang bisa dipercaya om. janji palsu harganya lebih mahal"',
 'content: "om, mangga kebun yang kurang manis biasanya masih bisa dijadiin rujak, yang penting teksturnya, jadi gak rugi dua-duanya"'),
# post 169
("tetapi ada pelanggan yang membuat jamnya menjadi jam kerja.",
 "tetapi ada pelanggan yang bikin jam segini kerasa kayak jam sibuk."),
('content: "pelanggan yang berjanji datang lagi itu bukti kiosnya nyaman duduk bos"',
 'content: "soal kuota besok bang, kasih tau aja paket yang biasa dia beli, daripada dia pilih sendiri terus nyesel"'),
('content: "jam buka yang ditentukan pelanggan ternyata jam buka yang paling setia, bos"',
 'content: "bos, kios pulsa jam 9 malem masih ada yang beli itu biasanya buat besok pagi, tugas atau bayar online, gak heran"'),
# post 170
("Setelahnya saya menerima pesan berisi doa perjalanan.\\nTidak semua pembatalan berakhir canggung. Ada yang berakhir dengan doa.",
 "Setelahnya saya menerima pesan berisi doa perjalanan. Saya balas terima kasih, lalu lanjut cari orderan lagi sampai magrib."),
('content: "pembatalan yang ditutup doa itu tidak mengurangi pahala perjalanan, pak"',
 'content: "batal dua kali telepon itu sopan banget pak, biasanya yang sering cancel cuma sekali chat terus diem"'),
# post 171
("mie tengah malam itu bukan soal kenyang, itu soal ada teman yang ikut lapar pada jam yang sama.\\nkalian makan malam apa tadi? atau seperti aku, makan pada jam yang salah tetapi rasanya pas",
 "mie-nya abis, piringnya kumasak bareng terus dibiarkan di rak, besok pagi dilihat pasti ketawa lagi. kalian makan malam apa tadi?"),
('content: "ada teman yang ikut lapar pada jam yang sama itu berkah kak. lapar sendirian itu latihan mental"',
 'content: "mie jam setengah 12 itu standar kak, tapi telur dua itu mewah, biasanya cuma satu dan dibagi dua wkwk"'),
# post 172
("Gigi pertama itu seperti kunci kecil yang mulai membuka babak baru. Doakan anakku tumbuh dengan gigi yang kuat dan hati yang lembut 🙏",
 "Malam ini mau cari teether yang aman buat digigit. Ada yang punya rekomendasi merek yang bagus buat gusi bayi?"),
# post 173
("entah kenapa mendengar mesin lega itu menenangkan, seperti mendengar tetangga akhirnya berhenti memindahkan meja. besok kuota tinggal 0,3 GB, tetapi malam ini gue menang satu hal: gue tidak membeli kuota darurat",
 "besok kuota tinggal 0,3 GB, tapi gue tidak membeli kuota darurat. tiga hari lagi gajian, anggota rumah disuruh hemat bareng, TV-nya gue cabut dulu"),
('content: "kipas yang turun satu nada itu suara kemenangan paling halus bre"',
 'content: "bre cabut TV segala tuh langkah ekstrem, anak rumah gak rewel?"'),
('content: "menang melawan tombol unduh itu menang tanpa trofi, tetapi terasa sekali"',
 'content: "gue pernah salah teken juga bre, malem minggu pula, besoknya HP gak bisa dipakai seharian"'),
('content: "tetangga yang berhenti memindah meja itu perumpamaan paling tepat bre, ikut lega"',
 'content: "bre, pembaruan enam jam itu biasanya besar, cek sisa penyimpanan, biasanya lega 1-2 GB kalau cache lama kebersih"'),
# post 174
("AKU SUKA DIA MERASA SEDANG MENGAJARI NENEKNYA. DOAKAN DIA TETAP RAJIN SAMPAI BESAR.",
 "AKU SUKA DIA MERASA SEDANG MENGAJARI NENEKNYA. BESOK KERTAS KECILNYA DIA BAWA LAGI, KATANYA ADA PELAJARAN BARU. NENEKNYA NUNGGU."),
('content: "nenek yang pura-pusa sulit itu guru terbaik mbak, cucunya belajar dua hal sekaligus: jadwalnya dan kesabarannya 😄"',
 'content: "pura-pura sulit itu jurus ampuh mbak, saya juga gitu sama keponakan biar dia rajin ngajarin, hasilnya dia makin teliti"'),
('content: "kertas kecil tulisan tangan cucu itu lebih berharga dari jadwal tercetak mbak 🙏"',
 'content: "kertas kecil itu jangan dibuang mbak, ditempel di kulkas aja, nanti kalau dia gede jadi cerita"'),
]

ok, fail = 0, []
for old, new in pairs:
    if old in s:
        s = s.replace(old, new, 1)
        ok += 1
    else:
        fail.append(old[:70])
io.open(path, "w", encoding="utf-8").write(s)
print(f"OK: {ok}/{len(pairs)}")
for f in fail:
    print("FAIL:", f)
