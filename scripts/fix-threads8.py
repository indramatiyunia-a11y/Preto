#!/usr/bin/env python3
# Fix threads-8.ts: replace old formula texts with new ones (literal replace).
import io

path = "/home/z/my-project/src/lib/threadz/data/threads-8.ts"
s = io.open(path, encoding="utf-8").read()

pairs = [
# post 176
("satu ibu malah memegangi ikat paling atas.\\nangkot pagi itu berbau daun dan tidak ada yang protes. hari yang lumayan",
 "satu ibu malah memegangi ikat paling atas. tukang sayurnya turun di pasar, sayurnya tetap rapi gak kusut"),
('content: "angkot yang berbau daun itu angkot yang sehat 😄"',
 'content: "naik angkot bareng tukang sayur itu untung, saya pernah dapat satu ikat kangkung gratis gara-gara bantu angkat"'),
('content: "sayur yang dipangku itu bukti pedagang peduli dagangannya, yang menggeser itu bukti manusia masih baik"',
 'content: "tukang sayur naik angkot pagi itu biasanya dari kebun jam 5, sayurnya masih ada embun, wanginya beda sama yang di pasar"'),
# post 180
("Malam ini saya menyiapkan contoh baru: kecepatan mengetik, kecepatan menghafal, kecepatan menuruni tangga. Besok saya bawa. Mengajar itu ternyata pekerjaan mengganti contoh terus-menerus, supaya anak tidak tertidur di contoh yang sama.",
 "Malam ini saya menyiapkan contoh baru: kecepatan mengetik, kecepatan menghafal, kecepatan menuruni tangga. Besok saya bawa. Kalau besok dia masih nanya kenapa, berarti pekerjaan rumah saya yang belum selesai."),
('content: "anak yang bosan pada contoh itu anak yang sudah membaca contohnya sampai habis bu 😄"',
 'content: "contoh menuruni tangga itu asyik, sekalian hitung anak tangganya, anak-anak suka yang bisa mereka cek sendiri"'),
# post 181
('content: "kios yang punya buku nama tanpa tanda tangan itu kios yang sudah jadi bagian kampung kak"',
 'content: "catatan tanpa tanda tangan gitu jangan ditiru sama pembeli baru kak, om saya dulu ada yang numpang berulang terus gak bayar sampai pindah kampung"'),
('content: "toleransi yang dicatat dengan nama saja itu kepercayaan versi lama kak. jarang, tetapi masih hidup"',
 'content: "pura-pura lupa itu jurus bagus kak, tapi jangan sering, sekali-sekali aja biar gak jadi kebiasaan dia juga"'),
# post 184
("Tidak ada yang mengucapkan terima kasih kepada siapa pun, hanya ada lorong yang terlihat lebih dalam karena terang.\\nCatatan kecil yang dikirim ternyata punya jalan pulang yang panjang, dan berakhir di sebuah lampu.",
 "Saya kirim balasan ke admin: terima kasih, lampunya sudah baik. Admin balas satu kata: sip. urusan selesai dalam dua baris."),
('content: "catatan yang jalan pulangnya panjang itu catatan yang berarti, pak"',
 'content: "pak, lampu jalan itu ada nomor tiangnya, lain kali sekalian foto tiangnya, perbaikan bisa lebih cepat"'),
('content: "lorong yang terlihat lebih dalam karena terang. kalimat itu bagus untuk malam, pak"',
 'content: "admin balas sip doang ya pak wkwk, admin kantor saya juga gitu, itu tandanya pekerjaannya udah kelar semua"'),
# post 187
("Kami yang menonton dari teras sama-sama tersenyum. Sore keempat itu tidak pernah diumumkan di mana pun; ia datang sendiri.",
 "ibunya udah nyiapin kunci pas dari tadi sore, katanya habis dia bisa, roda bantunya dibuka hari itu juga. bocahnya gak tau"),
('content: "anak yang berteriak sambil melihat ke belakang sedang mencari saksi keberhasilan, pak. semua orang butuh saksi"',
 'content: "sepeda anak sekarang rodanya gampang dilepas ya pak, jaman saya dulu roda bantunya dibuka pakai gergaji wkwk"'),
('content: "keberhasilan yang datang sendiri itu yang paling tulus, pak"',
 'content: "hati-hati pak, anak yang melihat ke belakang sambil berteriak itu biasanya nabrak, kasih teriakan pelan-pelan aja"'),
# post 188
('content: "anak yang membuat ibunya ikut berpikir itu anak yang belajarnya nyata bunda 😄"',
 'content: "coba eksperimen kecil: satu kotak kosong, satu kotak isi 1 kelereng, suruh dia hitung dua-duanya, nanti dia sendiri nemu beda ada dan tidak ada"'),
# post 190
("Tetangga yang menerima berkata panen berikutnya harus lebih banyak, dan saya menjawab amin.\\nKebun ini mengajarkan menghitung dengan cara yang berbeda: enam itu bukan angka kecil jika setiap buahnya menunggu lebih dari dua bulan.",
 "Tetangga yang menerima berkata panen berikutnya harus lebih banyak, saya cuma senyum, benihnya masih ada setengah bungkus.\\nSambalnya besok saya bikin. Kalau tiga tomat gak cukup, ya campur cabai rawit, namanya juga panen darurat."),
# post 191
("Kadang pekerjaan ini menyeberangkan orang ke tempat yang tidak ada di peta.",
 "pas pulang aplikasi nge-rute gue muter jauh, padahal jalan kebun itu deket. akhirnya gue selesaikan dulu satu paket lagi di gang sebelah baru balik"),
('content: "dua gelas teh di tepi kebun itu upah yang tidak masuk kuitansi, mas"',
 'content: "teh di tepi kebun itu gak bisa ditolak mas, sekali ditawarin dua gelas, cerita panen tahun lalu ikut kebawa semua"'),
('content: "kurir yang minum teh bersama penerima itu bukan lagi kurir, itu tamu, mas"',
 'content: "jalan kebun emang gitu mas, sepatu saya dua kali sebulan harus dicuci, lumpurnya lengket"'),
('content: "menyeberangkan orang ke tempat yang tidak ada di peta. itu kalimat yang layak dipakai sebagai motto mas"',
 'content: "mas, alat pertanian berat itu biasanya dibantu angkut sampai gudang kan? jangan cuma ditaruh depan pagar, besok dia repot sendiri"'),
# post 192
("Jam yang jelas ternyata lebih berpengaruh daripada pengumuman yang panjang.",
 "Besok saya beli satu jam lagi buat ruang tengah, buat yang lalu-lalu ngebut dari dapur padahal waktunya masih jam 7."),
('content: "jam dinding besar itu pengumuman yang tidak pernah bicara bu 😄"',
 'content: "yang ngebut dari dapur itu biasanya yang baru dilarang goreng di kamar ya wkwk"'),
('content: "anak yang menulis jam mandinya sendiri itu anak yang mulai mengatur hidupnya bu. selamat"',
 'content: "kertas kecil tempel pintu itu gampang rontok, suruh aja pakai lakban bening, punya saya dulu tiap pagi gak keliatan karena keburu gelap"'),
# post 193
("Sore ini kedua kelompok duduk bersama menyalin catatan yang sama. Mesin belum berjalan; kerja sama sudah.",
 "Sore ini kedua kelompok duduk bersama menyalin catatan yang sama. Ada yang janji bawa kopi buat sesi besok pagi. Mesinnya sendiri baru mau dicoba start Kamis."),
('content: "operator lama yang bertanya banyak itu tanda pengalaman mas, bukan tanda lemah"',
 'content: "mas, operator lama nanya banyak itu wajar, mereka takut ada prosedur baru yang beda sama kebiasaan mereka"'),
('content: "mesin belum jalan, kerja sama sudah. kalimat itu layak ditempel di papan target mas"',
 'content: "pelatihan dua hari cukup ya mas? mesin baru di tempat saya dulu tiga hari, hari ketiganya cuma buat tanya-tanya bebas"'),
('content: "yang bertanya banyak itu yang paling serius menjaga hasil kerja, mas"',
 'content: "kopinya jangan lupa ditagih mas wkwk, janji begini biasanya yang paling sering ilang"'),
# post 198
("Mungkin kursi bukan yang ia butuhkan; yang ia butuhkan adalah waktu yang tidak dipercepat oleh siapa pun.\\nPerpustakaan menyimpan buku, tetapi yang lebih jarang disimpan adalah kebiasaan membaca tanpa tergesa. Hari ini satu kebiasaan itu terlindungi.",
 "Besok saya taruh bangku tinggi dekat rak itu, sekalian tanya dia kuliah apa, soalnya selama dua jam itu bukunya gak ia pindah-pindah."),
('content: "waktu yang tidak dipercepat siapa pun itu kemewahan yang sesungguhnya, pak"',
 'content: "rak filsafat itu memang bikin lupa waktu pak, saya pernah nyari satu buku di situ, keluar jam tutup, bukunya belum ketemu juga"'),
('content: "membaca sambil berdiri dua jam itu bentuk cinta yang tidak membutuhkan kursi, pak"',
 'content: "berdiri dua jam itu kaki saya udah pindah-pindah tiga kali pak, anak ini kuat juga"'),
('content: "kursi yang ditawarkan tanpa bertanya itu pelayanan yang halus, pak"',
 'content: "kasih tau jam istirahat perpustakaannya juga pak, kadang pengunjung berdiri gara-gara gak tau bisa pindah ke ruang baca"'),
# post 199
("sore ini gue menutup toko. gue hafal letak semua alatnya, tetapi gue baru hafal satu hal: yang membuat toko hidup adalah pelanggannya",
 "sore ini gue menutup toko, ngitung kembalian tiga kali soalnya masih deg-degan. besok bos balik, laporan gue satu kalimat: toko aman, potongan rapi belum jadi bagian dari diri gue"),
('content: "pelanggan yang sabar itu pelatih gratis bos. bos cuti bukan berarti toko kehilangan pengajaran"',
 'content: "pertama kali jaga sendirian itu gini bang, gue dulu salah kasih kembalian 50 ribu, besoknya nyeret laci dihitung mundur tiga kali"'),
("content: \"'yang penting jujur' itu kalimat yang menutup semua kalkulator bos\"",
 "content: \"om yang bilang sepuluh tahun itu bercanda bang wkwk, atau dia emang nyekrip 30 tahun\""),
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
