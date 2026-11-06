#!/usr/bin/env python3
# Final sweep: kill every remaining audit finding across threads-1/2/6/7/8.
import io

files = {
"/home/z/my-project/src/lib/threadz/data/threads-1.ts": [
 ('content: "kalau belum pernah disimpan kak kemungkinannya tipis, tapi coba cek folder temp atau file sisa .tmp di folder kerja. semoga ada jejaknya 🙃"',
  'content: "kalau belum pernah disimpan kak kemungkinannya tipis, tapi coba cek folder temp atau file sisa .tmp di folder kerja. gue kemarin nemu file .tmp di situ"'),
 ("patokan sederhananya bro: trotoar yang terasa landai itu sekitar 5%. 15% sudah masuk kategori bukit di banyak buku teks",
  "patokan sederhananya bro: yang dirasa landai itu biasanya baru 5%. 15% sudah masuk kategori bukit di banyak buku teks"),
],
"/home/z/my-project/src/lib/threadz/data/threads-2.ts": [
 ('content: "pembeli yang ngerti teh itu berkah, sabar ya, musim gede pasti dateng lagi 🙏"',
  'content: "tetangga sebelah jualan kangkung teh, pas ikatnya kecil dia biasanya kasih bonus cabai biar pembeli gak ngomel. mungkin bisa dicoba wkwk"'),
 ("Mungkin ada pematuh waktu, mungkin hanya kebiasaan mereka yang teratur. Menyenangkan menonton kehidupan orang lain yang punya ritme.",
  "Mungkin ada pematuh waktu, mungkin hanya kebiasaan mereka yang teratur. Yang jelas tagihan listrik rumah itu pasti menarik."),
 ('content: "rumah yang punya ritme itu bikin tetangganya ikut tenang, pak. semoga lampunya panjang umur"',
  'content: "lampu padam sendiri tanpa orang biasanya ada timer murah di toko bangunan pak, bisa sekalian dipasang buat lampu depan rumah"'),
 ('content: "anak yang bertanya kenapa itu calon penyuka aljabar. jawab dengan perkalian bersusun, bukan dengan \'memang begitu\'"',
  'content: "jawab pakai perkalian bersusun aja bre, terus suruh dia bandingin sendiri sama triknya, biar dia yang nemu kenapa tengahnya jadi jumlah dua digit"'),
 ('content: "tunggu di depan yang pagar paling rapi itu keputusan tepat mas, biasanya pemiliknya memang yang teliti"',
  'content: "sebelum gak bisa dihubungi, biasanya kurir boleh foto paket di depan rumah terus lanjut rute mas, jangan nunggu kepanjangan di satu titik"'),
 ("Saya senang membaca niatnya, tetapi kursi plastik tempat dia biasa berdiri itu goyang, dan tangganya belum tentu sampai langit-langit kamar kos. Akhirnya saya setuju dengan satu syarat: pakai kursi yang stabil, dan saya yang memegang kursinya.\\nKadang yang saya jaga bukan lampunya, tetapi cara anak-anak ini merasa bisa mengurus hidupnya sendiri.",
  "Saya setuju dengan satu syarat: pakai kursi yang stabil, dan saya yang memegang kursinya.\\nTernyata tangga kos itu pendek, jadi saya yang naik sambil dia sorotin lampu HP. Lampunya sekarang nyala, kursinya miring sedikit, biar saja. Sistem tangga kos begini udah jalan bertahun-tahun, jangan diganti dulu."),
 ('content: "ibu kos seperti ini langka bu. mengizinkan sambil menjaga itu bentuk sayang yang halus 🙏"',
  'content: "anak kos yang mau pasang lampu sendiri jarang ya bu, biasanya dateng ke kamar saya bawa muka melas sekalian nanya wifi 😄"'),
 ('content: "kalimat terakhir itu ringkasan yang dalam bu. anak-anak hanya butuh ruang, bukan larangan"',
  'content: "tangga kos emang sependek itu ya. kamar saya dulu langit-langitnya tinggi, aturan dilarang naik kursi itu wajar"'),
 ('content: "saya dulu anak kos juga bu. yang disetujui dengan syarat biasanya jadi kenangan lebih lama daripada yang dilarang"',
  'content: "saya dulu anak kos juga, ganti lampu kamar malah nyuruh tetangga yang naik, soalnya takut tinggi. anak ini udah berani banget"'),
 ("Mesin berhenti 20 menit, sabuk penggerak lepas. Semua menunggu teknisi. Saya mencuci botol minum yang tiga hari tersimpan di loker.\\nSaat mesin menyala lagi, botol saya paling bersih di seluruh lini.",
  "jam istirahat lini dua tadi pagi molor 20 menit, sabuk penggerak mesin lepas, semua orang jadi penonton gratis. teknisi datang, pasang, nyala lagi. yang ganggu saya malah botol minum saya yang ketinggalan di loker udah tiga hari, soalnya minum di lini dilarang, tiap istirahat harus jalan ke loker. kemarin sampai lupa minum sama sekali, kepala pusing sorenya. ada trik gak biar gak lupa, selain nulis di tangan"),
 ('content: "botol bersih itu bonus lembur versi orang dewasa mas"',
  'content: "setel alarm HP mas, tiap jam istirahat bunyi, saya dulu begitu pas kerja di gudang, seminggu udah kebiasa"'),
 ("Orang-orang berlalu, kami berdua sejenak. Itu saja, tidak ada yang luar biasa, dan justru itu enaknya.",
  "Orang-orang berlalu, kami berdua sejenak. Tadi ada bapak-bapak lari pagi lewat, nanya kucing orang mana itu. Saya jawab gak tahu. Dia bilang ya udah jangan dikasih ikan terus. Ya kan enak kalau yang kasih saya."),
 ('content: "rutinitas yang damai itu kemewahan yang jarang disebut, pak. kucingnya sudah hafal jamnya"',
  'content: "kucing di tikungan itu suka pindah-pindah tempat duduknya gak pak? langganan jalan pagi saya pindah-pindah, kadang sukar dicari"'),
 ('content: "buku yang ditanggung dua tangan itu tanda anaknya masih punya rasa, pak"',
  'content: "denda tiga hari itu berapa pak? kalau gak sampai seribu ya udah gak usah dipungut, anak SMP dapet uang jajan dikit"'),
 ('content: "pelanggan yang tahu dirinya itu pelanggan yang gampang dilayani bos"',
  'content: "rambut tipis di depan tuh susah bre, potongan poster biasanya butuh produk biar tegak. sekalian kasih tau dia habis ini"'),
 ('content: "semangat chef, sambal yang menemukan lawan sepadan itu jarang sekali"',
  'content: "besok pas dia minta level 8, catat di buku nama dia chef. biar kalau besoknya dia menangis tinggal dilihat lagi wkwk"'),
],
"/home/z/my-project/src/lib/threadz/data/threads-6.ts": [
 ("iuran dari pembeli, semoga bermanfaat", "iuran dari pembeli, dipakai seikhlasnya"),
 ('content: "anak yang menemukan alasan sendiri itu tidak perlu menunggu SMP, bunda 😄"',
  'content: "gak perlu nunggu SMP, mikiran dia udah bener. lanjut ke pembagian lain bunda, suruh dia buktiin sendiri dulu 😄"'),
 ("Sedang menyaksikan awal, saya jawab. Tetangga itu ikut berdiri. Kami berdua menghadap bunga cabai seperti menonton sesuatu yang belum selesai. Semoga menjadi buah, semoga hujan tahu waktunya.",
  "Sedang menyaksikan awal, saya jawab. Dia ikut berdiri, lalu cerita punya dia minggu lalu cuma satu tangkai, sekarang udah enam. Pas kabar bagus datangnya dari kebun orang."),
 ('content: "kulkas dengan nama itu sistem kepemilikan paling adil di dunia bu, lebih adil dari banyak kantor"',
  'content: "kos saya dulu juga pake kulkas bersama bu, tapi gak ada kertas nama, kotak ayam saya pernah ilang dua kali 😄"'),
 ('content: "semoga kuenya tetap ada sampai besok bu, doa dari ibu-ibu grup ini 🙏"',
  'content: "kue di kulkas bersama itu umurnya pendek bu, biasanya malemnya juga udah diambil"'),
 ("gue bilang itu bukan kompor aman, itu kompor yang gak percaya gue",
  "gue bilang mah, yang salah bukan kompornya, yang lupa ini"),
 ('content: "kompor yang mati sendiri itu perlindungan diri dari manusia yang percaya lima menit itu cepat bre wkwkwk"',
  'content: "bre, kompor mati sendiri itu namanya auto off, jangan diandelin buat masak beneran, cuma buat ngeheatin doang"'),
 ('content: "grakan sepuluh menit itu pelatihan wajib bre, nikmati saja. dapur kos itu sekolah gratis"',
  'content: "grakan sepuluh menit itu masih adem bre, gue pernah digrak 30 menit plus wajib nulis komitmen di kertas"'),
 ("Senam itu ternyata bukan soal benar, tetapi soal datang.",
  "Besok minggu gue berniat dateng lagi, tetap versi salah gue, yang penting gak sendirian."),
 ('content: "gerakan yang salah sama persis itu bentuk persahabatan paling jujur, pak"',
  'content: "pak, senam kelurahan itu gerakannya ganti tiap bulan kan? salah bareng minggu depan pasti keulang lagi"'),
 ("Jadwal yang benar tidak menjamin tidak terjadi salah. Papan yang tidak terbalik baru menjamin kita salah di tempat yang tepat.",
  "Besok saya dateng lebih pagi cuma buat mastiin papan ngadep yang bener, sekalian foto, biar jadi bukti kalau ada yang nyasar lagi."),
 ('content: "\'salah di tempat yang tepat\' itu kalimat yang layak masuk buku catatan rapat bu"',
  'content: "papan jadwal ditempel terbalik itu klasik bu, sekalian minta anak yang paling pagi jadi penjaga papan, kasih gelar resmi biar semangat"'),
 ('content: "anak yang bertanya itu anak yang tenang. papan terbalik menghasilkan satu filsuf muda bu 😄"',
  'content: "jawaban gurunya gak keliatan di post bu, anak itu ditanya lagi gak? penasaran saya 😄"'),
 ("GUE MENUNDUK, GUE BERPIKIR: SAMBALKU YANG DI STOPLES PRIVATE ITU PENDCKAR YANG TERSEMBUNYI.",
  "GUE MENUNDUK, GUE BERPIKIR: MULAI HARI INI STOPLES PRIVATE DIHAPUS DARI SISTEM."),
],
"/home/z/my-project/src/lib/threadz/data/threads-7.ts": [
 ("anehnya, mangga yang saya bilang belum tentu manis itu malah habis duluan",
  "anehnya, yang saya bilang belum tentu manis itu malah habis duluan"),
 ('content: "bos, kios pulsa jam 9 malem masih ada yang beli itu biasanya buat besok pagi, tugas atau bayar online, gak heran"',
  'content: "bos, jam 9 malem masih ada yang beli pulsa biasanya buat besok pagi, tugas atau bayar online, gak heran"'),
],
"/home/z/my-project/src/lib/threadz/data/threads-8.ts": [
 ('content: "admin yang membaca catatan lampu kedip itu layak ditemani kopi pak wkwk"',
  'content: "wkwk admin-nya rajin juga pak, catatan kedip doang kok dua hari udah beres"'),
 ('content: "om yang bilang sepuluh tahun itu bercanda bang wkwk, atau dia emang nyekrip 30 tahun"',
  'content: "yang ngomongin sepuluh tahun itu omnya bercanda bang wkwk, atau dia emang nyekrip 30 tahun"'),
],
}

for path, pairs in files.items():
    s = io.open(path, encoding="utf-8").read()
    ok, fail = 0, []
    for old, new in pairs:
        if old in s:
            s = s.replace(old, new, 1); ok += 1
        else:
            fail.append(old[:80])
    io.open(path, "w", encoding="utf-8").write(s)
    print(f"{path.split('/')[-1]}: OK {ok}/{len(pairs)}")
    for f in fail: print("  FAIL:", f)
