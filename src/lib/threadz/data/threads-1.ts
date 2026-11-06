import type { ThreadzThread } from "../types"

// PART 1: cuitan 1-25 (paling baru di feed) — ROMBAK V5 (6 Nov 2026).
// V5 = fokus penuh FORUM MATEMATIKA: post non-matematika (diary harian)
// dihapus, diganti pertanyaan matematika sungguhan dengan REGISTER BAHASA
// yang menyebar (baku, gaul, jamet, KAPITAL, daerah) — biar gak terasa satu
// orang hantu. Post bahasa asing ADA DI FILE TERPISAH: threads-intl.ts
// (full Arab/Inggris/Prancis/Spanyol/Mandarin, komentar satu bahasa).
// Rujukan lengkap: scripts/rumus-v2.md (BAGIAN 1G + FORMULA HITAM 19).
//
// ATURAN ISI V5 (ringkas — hukum lengkap di scripts/rumus-v2.md):
//  1. SEMUA post nyambung matematika. ≥60% pertanyaan sungguhan.
//  2. Panjang menyebar (<130, 150-350, 350-550, 550-800). PUNCHLINE DILARANG.
//  3. Matematika HARUS benar; miskonsepsi boleh asal ada komentar koreksi.
//  4. Register tiap post beda suaranya (FORMULA HITAM 18: satu-suara = gagal).
//  5. Komentar ±40% benar menjawab; sisanya reaksi spesifik; menyebar 0-6.
//  6. DILARANG (FORMULA HITAM): punchline, mikro-drama 3 babak, personifikasi
//     benda, ekor doa, paparan meta, frasa unik diulang, post non-matematika.
export const THREADS_PART1: ThreadzThread[] = [
  {
    id: 1,
    authorId: 1,
    minutesAgo: 25,
    shares: 12,
    content:
      "Anak PR matematika: 10 dikurang 0,5. Dia jawab 9,05, alasannya karena koma itu turun satu tempat. Aku bilang 9,5, dia ngeyel, dan jujur aku gak bisa jelasin bedanya 9,5 sama 9,05 pakai kata-kata yang masuk di kepala anak SD. Besok dia mungkin nanya lagi ke gurunya, tapi malam ini dia minta dijelasin dari aku duluan. Ada yang bisa bantu, pakai contoh yang kelihatan mata kayak uang atau ukuran air, pelan-pelan?",
    comments: [
      { authorId: 74, minutesAgo: 21, content: "pakai uang langsung kak. 10.000 dikurang 500 itu 9.500, bukan 9.050. uang paling gampang karena dia tiap hari pegang" },
      { authorId: 268, minutesAgo: 18, content: "9,05 itu 9 koma nol koma lima, dua lompatan dari 9. 9,5 itu satu lompatan. kalau digambar di garis bilangan langsung kelihatan 9,5 lebih deket ke 10" },
      { authorId: 59, minutesAgo: 14, content: "anakku juga sempat gitu, pahamnya pas diajak ukur air. setengah gelas dituang, kelihatan sendiri hampir penuh bukan hampir kosong 🙏" },
    ],
  },
  {
    id: 2,
    authorId: 2,
    minutesAgo: 55,
    shares: 30,
    content:
      "LIM X MENUJU 2 DARI (X²-4)/(X-2). GUE MASUKIN X=2 HASILNYA 0/0. JAWABAN GUE: GAK BISA DIHITUNG. TEMEN GUE YAKIN JAWABANNYA 4, KATANYA PAKAI FAKTOR: X²-4 ITU (X-2)(X+2), TERUS (X-2)-NYA DICORET. GUE BINGUNGNYA BUKAN CARANYA, TAPI BOLEHKAH MENCORET SESUATU YANG NILAINYA NOL. SOALNYA X=2 JELAS-JELAS BIKIN BAWAHNYA NOL, TERUS KOK BISA ADA JAWABAN.\ndosen cuma bilang ini urusan limit bukan urusan substitusi. gue butuh penjelasan dari nol soal bedanya, makasih yang mau baca karangan panjang",
    comments: [
      { authorId: 212, minutesAgo: 51, content: "substitusi sah kalau hasilnya terdefinisi. kalau 0/0, fungsi asli dan fungsi yang disederhanakan cuma beda di satu titik, sisanya identik 🙃" },
      { authorId: 227, minutesAgo: 47, content: "anggep aja (x-2) yang dicoret itu tanda kita melihat SEKITAR x=2, bukan tepat di x=2. di sekitarnya penyebut gak nol, jadi aman" },
    ],
  },
  {
    id: 3,
    authorId: 3,
    minutesAgo: 85,
    shares: 21,
    content:
      "Murid kelas 4 saya menanyakan hal yang bagus hari ini: kenapa 3 + 5 sama dengan 5 + 3, tetapi 10 − 4 tidak sama dengan 4 − 10? Saya jelaskan dengan benda, dia mengerti sebentar, lalu bertanya lagi: kalau penjumlahan boleh dibolak-balik, kenapa pengurangan tidak? Saya senang sekali dengan pertanyaan Ananda itu, hanya saja saya ingin memberi penjelasan yang lebih utuh daripada sekadar karena memang begitu. Ada usulan kegiatan sederhana di kelas untuk memperlihatkan beda sifat kedua operasi itu?",
    comments: [
      { authorId: 277, minutesAgo: 79, content: "pakai peran bu. tiga anak masing-masing dapat lima permen, lima anak masing-masing tiga permen, jumlahnya sama. tapi sepuluh permen untuk empat anak beda cerita dengan empat permen untuk sepuluh anak" },
      { authorId: 90, minutesAgo: 73, content: "sifat bolak-balik itu namanya komutatif bu, dan cuma penjumlahan plus perkalian yang punya. pengurangan emang tidak termasuk, dan itu jawaban yang sah untuk anak" },
      { authorId: 66, minutesAgo: 68, content: "garis bilangan juga bisa bu. lompat ke kanan bisa ditukar urutannya, lompat ke kiri tidak bisa" },
    ],
  },
  {
    id: 4,
    authorId: 4,
    minutesAgo: 115,
    shares: 3,
    content:
      "Rekan kantor menghitung 15% dari 240.000 dengan cara 10% dulu, setengahnya lagi, lalu digabung. Saya pakai 240.000 × 15 ÷ 100. Hasilnya sama, 36.000. Ia menyebut caranya cara cepat, saya menyebut caranya cara biasa. Pertanyaan saya: adakah cara yang keliru walau hasilnya sama? Dari yang saya amati, cara cepat sering berhenti di kasus tertentu.",
    comments: [
      { authorId: 192, minutesAgo: 104, content: "cara 10% + setengahnya aman untuk 15%. yang rawan itu 17,5% dan angka tidak bulat, yang ngebut biasanya lupa setengah dari setengahnya" },
      { authorId: 37, minutesAgo: 96, content: "selama persennya kelipatan 5, cara itu tidak pernah salah. hasil sama berarti konsepnya benar, jalurnya saja yang beda" },
    ],
  },
  {
    id: 5,
    authorId: 5,
    minutesAgo: 145,
    shares: 45,
    content:
      "tadi pelanggan bayar 50 ribu, belanjaannya 27.500. gue balikin 22.500, diitung balik sama beliau dua kali, katanya kok gak genap. genap yang gimana ini bingung gue. 50.000 − 27.500 kan 22.500, di kertas begitu, di kalkulator begitu. terus sekarang gue mikir, sering gue kasih kembalian pakai feeling doang soalnya lagi rame antrian. kan bahaya. ada trik hitung kembalian cepet yang beneran bisa dipakai pas antrian panjang, kayak hitung mundur dari totalan ke uang yang dibayar gitu?",
    comments: [],
  },
  {
    id: 6,
    authorId: 6,
    minutesAgo: 175,
    shares: 3,
    content:
      "gue tadi bilang di kelas minus 5 itu lebih besar dari minus 2 soalnya 5 lebih gede dari 2. semua ketawa. gue masih belum nerima sih, emangnya gak? angka 5 kan di atas angka 2. tolong yang sabar jelasin ke gue, jangan ketawa dulu",
    comments: [
      { authorId: 219, minutesAgo: 170, content: "suhu bre. −5 derajat lebih dingin dari −2 derajat. angka minus dihitung dari nol ke kiri, makin jauh ke kiri makin kecil" },
      { authorId: 138, minutesAgo: 164, content: "garis bilangan bre: nol di kanan, minus di kiri. −5 lebih jauh ke kiri berarti lebih kecil. lu bandingin JARAKNYA ke nol, bukan besarnya angkanya" },
      { authorId: 149, minutesAgo: 152, content: "coba bre, utang 5 lebih berat dari utang 2. posisi dompet lu yang utang 5 lebih jelek dari yang utang 2" },
    ],
  },
  {
    id: 7,
    authorId: 7,
    minutesAgo: 205,
    shares: 41,
    content:
      "kuesioner skripsi gue pakai skala 1 sampai 5, responden 30 orang. masalahnya ada dua orang yang jawabannya angka 5 semua, entah benar-benar setuju semua atau males mikir 🙃 rata-rata tiap pertanyaan jadi melar ke atas, dan pembimbing nyuruh gue jelaskan kenapa mean gak cukup. gue baca-baca katanya pakai median, ada juga yang bilang lihat modus sama sebarannya.\nke yang pernah ngolah data begini: kalian pakai yang mana buat data skala 1-5, dan alasannya apa? gue mau nulis alasan di bab empat, bukan cuma ngikutin kata pembimbing",
    comments: [
      { authorId: 217, minutesAgo: 197, content: "median kak. jawaban 5 semua itu pencilan, mean-nya gak mewakili mayoritas responden lagi" },
      { authorId: 60, minutesAgo: 188, content: "modus juga penting kak, buat skala 1-5 perlu tahu jawaban mana yang paling sering muncul, gak cukup mean doang" },
      { authorId: 322, minutesAgo: 181, content: "bisa dua-duanya kak, mean buat laporan, median buat pembelaan pas sidang 🙃" },
      { authorId: 143, minutesAgo: 174, content: "tambahin standar deviasi kak, pembimbing biasanya nanya kenapa sebarannya lebar" },
    ],
  },
  {
    id: 8,
    authorId: 8,
    minutesAgo: 235,
    shares: 23,
    content:
      "order dokter: 300 mg. stok kami cairan 120 mg tiap 5 ml. gue hitung 300 dibagi 120 = 2,5, terus 2,5 kali 5 ml = 12,5 ml. yang bikin gue nunggu: 12,5 ml itu kira-kira segelaspak kecil gak ya? mata gue gak yakin sama hitungan sendiri kalau urusannya obat. ada yang bisa mastiin itungan ini plus cara cepatnya, soalnya shift besok biasanya ada orderan model yang sama",
    comments: [
      { authorId: 240, minutesAgo: 229, content: "bener, 12,5 ml. caranya (300 ÷ 120) × 5. cek balik: 12,5 ÷ 5 × 120 = 300 mg. aman" },
      { authorId: 139, minutesAgo: 221, content: "kaya gitu paling aman ditulis dua langkah, jangan sekali jalan. shift malam mata udah gak setia sama angka" },
    ],
  },
  {
    id: 9,
    authorId: 9,
    minutesAgo: 265,
    shares: 15,
    content:
      "lu paham gak tarif ojol ini bang. 2 km pertama 5 rebu, sisanya 1.500 per km. order tadi jaraknya 12 km. gue hitung: 10 km sisa kali 1.500 = 15 rebu, plus 5 rebu jadi 20 rebu. pas di apps tagihannya 21.500. gue panik mikir kelebihan bayar 1.500, langsung gue tawarin balik 1.500-nya, dia bilang jangan, itu memang biaya layanan. jadi 21.500 itu bener kan, atau gue doang yang gak ngikutin perubahan tarif",
    comments: [
      { authorId: 137, minutesAgo: 258, content: "bener bang. 20 rebu itu ongkos murni, plus 1.500 layanan = 21.500. hitungan lu gak ada yang salah" },
      { authorId: 186, minutesAgo: 251, content: "lu doang yang belom update bang wkwk, biaya layanan udah lama. yang penting jaraknya gak salah itung" },
      { authorId: 154, minutesAgo: 244, content: "saran bang, tiap tagihan gak cocok sama hitungan, screenshot. kadang tarif beda jam juga" },
    ],
  },
  {
    id: 10,
    authorId: 10,
    minutesAgo: 295,
    shares: 26,
    content:
      "ULANGAN BARISAN BESOK DAN GUE MASIH NGULIK SATU SOAL. barisannya 3, 7, 11, 15. gue yakin ini aritmetika soalnya bedanya nambah 4 terus. rumus gue: Un = 4n − 1. cek: n=1 jadi 3 ✓, n=2 jadi 7 ✓, n=4 jadi 15 ✓. pertanyaan gue: (1) ada gak barisan yang terus nambah tapi bukan aritmetika? soalnya gue cuma hafal “bedanya konstan” tanpa ngerti kalau gak konstan jadi apa. (2) kalau yang ditanya U ke-10, jawaban gue 39. tolong konfirmasi sebelum gue tidur. WADUH lupa besok juga ada kuis turunan, YA AMPUN",
    comments: [
      { authorId: 131, minutesAgo: 288, content: "(1) ada: 3, 6, 11, 20 nambah terus tapi bedanya bukan konstan, jadi bukan aritmetika. (2) 4 × 10 − 1 = 39, aman" },
      { authorId: 118, minutesAgo: 283, content: "U10 lu bener. tambah aman kalau tulis Un = a + (n−1)b dulu, guru seneng lihat langkahnya" },
      { authorId: 223, minutesAgo: 277, content: "wkwk turunan mah polanya sama semua: ambil pangkat, turunin satu, bawa pangkatnya ke depan" },
      { authorId: 313, minutesAgo: 264, content: "saran gue tidur sekarang, bangun subuh review 15 menit. lebih kejam begadang terus bego di ulangan" },
    ],
  },
  {
    id: 11,
    authorId: 11,
    minutesAgo: 325,
    shares: 41,
    content:
      "Aku menemukan hal kecil yang membuatku ragu dengan laporan bulanan: total kolom di layar 1.243.500, sedangkan hasil penjumlahan manual di kertas 1.243.000, beda 500. Aku cek per sel, ada beberapa sel yang tampilannya bulat, misalnya di layar tampil 1.000 padahal isinya 1.167. Kertasku memakai angka tampilan, bukan angka asli sel. Pertanyaanku: yang benar untuk laporan itu penjumlahan dari angka asli sel, bukan? Dan bagaimana menjelaskan ke atasan bahwa selisih 500 itu urusan tampilan, bukan salah ketik? Aku tidak ingin disangka mencari alasan",
    comments: [
      { authorId: 262, minutesAgo: 317, content: "yang benar jumlah dari angka asli sel. tampilan boleh dibulatkan, isinya tidak. contoh kecilnya 1,4 + 1,4 + 1,4 di layar terbaca 1+1+1 = 3, aslinya 4,2. selisih seperti itu normal" },
      { authorId: 205, minutesAgo: 310, content: "tunjukkan langsung satu sel yang tampilannya beda dengan isinya, klik selnya dan lihat bar rumusnya. atasan biasanya paham begitu melihat langsung" },
    ],
  },
  {
    id: 12,
    authorId: 12,
    minutesAgo: 355,
    shares: 5,
    content:
      "infus 1.000 ml\nharus habis 8 jam\ngue setel 125 ml per jam\nada yang mastiin? mata gue udah 0,1",
    comments: [],
  },
  {
    id: 13,
    authorId: 13,
    minutesAgo: 385,
    shares: 19,
    content:
      "guys pliss bantu cek. soal: 3x + 7 = 22, brp nilai x. gue kerjain: 3x = 22 − 7 = 15, terus x = 15 ÷ 3 = 5. temen gue bilang 4, katanya 3×4=12 dan 12+7=19. padahal yang bener harusnya pas di cek balik: 3×5=15, 15+7=22. cocok. ITU BENER KAN. tolong jgn asal bilang gue salah, nilai mat gue udah hancur minggu ini wkwk, di buku gk ada pembahasannya smpe skrg",
    comments: [
      { authorId: 127, minutesAgo: 378, content: "lu bener bre. temen lu nyantol di 3×4 doang gak lanjut nambah 7. kalau lolos cek balik berarti bener" },
      { authorId: 160, minutesAgo: 371, content: "jurusnya cek balik bre: masukin jawaban ke soal asli. 15 + 7 = 22 cocok, beres" },
      { authorId: 331, minutesAgo: 357, content: "5 bre, gak usah ragu. urutannya 22−7 dulu baru dibagi 3, gak boleh ketuker" },
    ],
  },
  {
    id: 14,
    authorId: 14,
    minutesAgo: 415,
    shares: 7,
    content:
      "motor 5 jam. tarif 2 rb jam pertama, 1 rb jam berikutnya. gue tagih 6 rb.\nom-om nggak terima. katanya 5 jam kali 1 rb = 5 rb.\ngue bingung cara njelasinnya. tolong",
    comments: [
      { authorId: 199, minutesAgo: 406, content: "jam pertama beda tarif om. 2 + 4×1 = 6 rb. bilang aja 5 jam itu terdiri dari 1 jam pertama plus 4 jam berikutnya" },
    ],
  },
  {
    id: 15,
    authorId: 15,
    minutesAgo: 445,
    shares: 17,
    content:
      "misi, ada yang bisa bantu itungin dagangan teh. bayam gue: 1 kilo biasanya jadi 4 ikat. ikat jual 2.500, kiloan 12.000. tadi ada pembeli itungin pakai ponsel terus bilang: teh, 4 ikat itu 10.000, kok kiloannya 12.000, saya kena mahal 2.000. gue jawab macem-macem tapi gak rapih, jujur gue sendiri gak pernah duduk itung begini. sekarang gue mikir: (1) itungan pembeli bener kan, 4 × 2.500 = 10.000? (2) kalau bener, gue harus pasang kiloan 10.000, atau memang boleh beda karena dagangan kiloan biasanya lebih rapi dipilih? bantu jawab ya, nanti gue keliatan gak jujur di depan pembeli",
    comments: [
      { authorId: 102, minutesAgo: 437, content: "itungan pembeli bener teh. sisanya keputusan harga: mau setara ya kilo 10.000, kalau 12.000 berarti ada selisih buat pilihan bagus. yang penting bisa dijelasin" },
      { authorId: 32, minutesAgo: 430, content: "di pasar kami teh, ikatan memang lebih mahal per kilonya karena kita yang ngerapiin dan nimbang pas. pembeli paham kok kalau dijelasin sambil nyenggol" },
    ],
  },
  {
    id: 16,
    authorId: 16,
    minutesAgo: 475,
    shares: 26,
    content:
      "Aku nanya soal hitungan jam kerja, soalnya absen kantor dan hitunganku beda. Masuk 08.15, pulang 17.30, istirahat makan siang 1 jam tidak dihitung. Hitunganku: dari 08.15 ke 17.30 itu 9 jam 15 menit, dikurangi istirahat jadi 8 jam 15 menit. Rekap HRD bilang 8 jam, katanya pembulatan. Aku penasaran: hitungan 8 jam 15 menit itu benar nggak, dan pembulatan macam apa yang bisa menghilangkan 15 menit? Biar besok aku bisa bertanya dengan tenang tanpa keliatan mencari-cari masalah",
    comments: [
      { authorId: 243, minutesAgo: 466, content: "hitungan 8 jam 15 menit itu benar kak. pembulatan biasanya ke 15 menit terdekat atau per 30 menit, tapi dasarnya harus tertulis di aturan. minta HRD tunjukkan dasar pembulatannya" },
    ],
  },
  {
    id: 17,
    authorId: 17,
    minutesAgo: 505,
    shares: 30,
    content:
      "bro, konversi ini gak masuk akal buat gue: tugas bilang gaya 2,5 kN, gue butuh bentuk kilo biar kebayang beratnya. hitung gue: 2.500 ÷ 9,81 = sekitar 255 kg. bener gak pake 9,81? temen gue langsung bagi 10 doang jadi 250 kg, katanya cukup. beda 5 kg, tapi mana yang dianggap bener di laporan? terus 255 kg itu berat segimana sih, segaya dua orang gendut?",
    comments: [
      { authorId: 213, minutesAgo: 496, content: "bener bro, 2.500 ÷ 9,81 ≈ 254,8 ≈ 255 kgf. bagi 10 itu perkiraan kasar, laporan harus pakai 9,81" },
      { authorId: 336, minutesAgo: 488, content: "255 kg bro itu dua orang gendut plus satu anak kecil. kebayang kalau tangan lu yang nahan" },
    ],
  },
  {
    id: 18,
    authorId: 18,
    minutesAgo: 535,
    shares: 14,
    content:
      "om-om, bantu itung. satu peti mangga isi 24, tadi gue buka ada 3 yang rusak. gue bilang ke bini gue 3 persen rusak, dia bilang bukan, katanya harus dibagi total dulu. terus tetangga bilang 12 setengah persen. mana yang bener? terus kalau 3 dari 24 itu 12,5, artinya tiap 8 buah ada 1 yang rusak ya? tolong dijelasin pelan, nanti gue itung lagi peti yang lain",
    comments: [
      { authorId: 178, minutesAgo: 527, content: "bener om, 3 dari 24 = 1 dari 8 = 12,5 persen. 3 persen itu beda cerita, itu kalau rusaknya 3 dari 100" },
      { authorId: 63, minutesAgo: 519, content: "gampangnya om: 24 ÷ 3 = 8, berarti satu rusak di tiap delapan. 1 dari 8 itu persis 12,5 persen" },
    ],
  },
  {
    id: 19,
    authorId: 19,
    minutesAgo: 565,
    shares: 21,
    content:
      "bos, ada yang ribut di kios gue pagi tadi. pelanggan cek kuota: 3,5 GB plus 750 MB. dia ngotot totalnya 4,25 GB, gue sepakat, hitungannya 3.500 MB plus 750 MB = 4.250 MB. terus temennya bilang di ponselnya keliatan 4,15 GB padahal paketnya sama. yang nanya ke gue: mana yang bener, kenapa tampilannya bisa beda? gue denger-denger ada operator yang itung 1 GB = 1.000 MB dan ada yang 1.024 MB, betul gak? bos-bos yang paham tolong jelaskan, biar gak kalah debat lagi besok",
    comments: [
      { authorId: 145, minutesAgo: 557, content: "betul bos, operator pakai 1 GB = 1.000 MB, jadi 4.250 MB = 4,25 GB. ponsel kadang pakai basis 1.024, dari situ keluar angka lebih kecil" },
      { authorId: 220, minutesAgo: 549, content: "tambahin bos, yang 4,15 itu kemungkinan tampilan sistem basis 1.024. dua-duanya benar, cuma patokannya beda" },
      { authorId: 90, minutesAgo: 541, content: "buat dijelasin ke pelanggan, tulis aja di kertas 4.250 MB dibagi 1.000 = 4,25. langsung kelar ributnya" },
    ],
  },
  {
    id: 20,
    authorId: 20,
    minutesAgo: 595,
    shares: 14,
    content:
      "pertanyaan sederhana. motor saya 20 km per liter. ke bandara 85 km. tangki tinggal 5 liter. saya hitung butuh 4,25 liter, jadi cukup tanpa isi dulu. benar tidak hitungan saya? saya tidak ingin berhenti di jalan bersama penumpang",
    comments: [
      { authorId: 283, minutesAgo: 586, content: "benar, 85 ÷ 20 = 4,25 liter, sisa 0,75 liter cadangan. tapi kalau macet berat atau jalan memutar, lebih aman isi sedikit dulu" },
    ],
  },
  {
    id: 21,
    authorId: 21,
    minutesAgo: 625,
    shares: 21,
    content:
      "tanya dong. rice cooker aku 1,5 liter. aku masak 3 gelas beras, gelasnya 250 ml, berarti beras 750 ml. temen kos bilang airnya dua kali beras, berarti air 1.500 ml = 1,5 liter. PAS BANGET sama isi rice cooker, gak ada ruang sisa. aku takut meluap deh. jadi takaran 1 beras : 2 air itu bener gak sih, terus kalau pas-pasan gini diapain, dikurangi airnya atau biarin?",
    comments: [
      { authorId: 33, minutesAgo: 617, content: "takarannya bener dah, tapi selalu sisain ruang. 3 gelas itu di batas, mending airnya jadi 1,8 kali beras" },
      { authorId: 106, minutesAgo: 610, content: "kurangi dikit berasnya kak atau masak 2 gelas aja, biar gak panic lihat uap keluar 🙏" },
    ],
  },
  {
    id: 22,
    authorId: 22,
    minutesAgo: 655,
    shares: 19,
    content:
      "Anakku umur 2 tahun 10 bulan mulai suka hitung jari. 2 + 3 dia jawab 5 sambil tunjuk jari, aku senang sekali. Tapi pas aku tanya balik 3 + 2, dia diam, nunggu, terus minta diulang. Aku bingung ini harus dikoreksi atau dibiarkan, soalnya jawabannya sama saja kan, 5. Ada yang bisa jelaskan kenapa anak bisa bisa satu arah tapi belum yang dibalik, dan normal tidaknya di umur segini? Alhamdulillah dia semangat terus meski kadang jawabannya kucing",
    comments: [
      { authorId: 77, minutesAgo: 647, content: "normal bu, fase itu panjang. yang penting dia berani hitung, arahnya nanti nyusun sendiri" },
      { authorId: 103, minutesAgo: 640, content: "pakai benda yang dia suka bu. dua kucing tiga ekor, tiga kucing dua ekor, biar dia lihat sendiri jumlahnya tidak pindah" },
      { authorId: 309, minutesAgo: 633, content: "bolak-balik itu tidak otomatis diketahui anak bu, dia harus menemukannya lewat banyak contoh" },
      { authorId: 24, minutesAgo: 616, content: "ANAK PINTAR. KUCING JUGA BISA GURU MATEMATIKA. NENEK SETUJU." },
    ],
  },
  {
    id: 23,
    authorId: 23,
    minutesAgo: 685,
    shares: 2,
    content:
      "paket 10 Mbps. file 750 MB. hitungan kasar: 750 × 8 = 6.000 Mb, dibagi 10 = 600 detik = 10 menit teoritis. kenyataannya 14 menit lebih. pertanyaan: overhead sebesar itu normal atau koneksi gue yang bocor? gue dengar efisiensi real itu 60-80% dari teori. 10 dibanding 14 itu sekitar 71%. masuk range gak menurut kalian",
    comments: [
      { authorId: 318, minutesAgo: 677, content: "masuk. ada overhead protokol, sinyal, plus server yang gak selalu kencang. 71% itu sehat" },
      { authorId: 152, minutesAgo: 669, content: "coba tes lagi jam sepi bre. kalau jam sibuk mah itu bukan angka ponsel, itu angka jalanan" },
    ],
  },
  {
    id: 24,
    authorId: 24,
    minutesAgo: 715,
    shares: 12,
    content:
      "CUCU AKU DAPAT SOAL: SEPARUH DARI 11 ITU BERAPA. AKU JAWAB 5,5. CUCU AKU BILANG BENAR TAPI GURUNYA MINTA CARANYA. TERUS CUCU BERTANYA: NENEK, KALAU SATU KUE DIBAGI SEPARUH DUA ORANG, KALAU SEBELAS KUE DIBAGI SEPARUH ITU KUENYA PUTUS GIMANA. AKU DIAM. DULU SEKOLAH AKU GAK DAPAT PENJELASAN SEBAGUS INI.\nPERTANYAANKU: 5,5 ITU BENAR KAN SECARA ANGKA, DAN KALAU SOALNYA TENTANG KUE, APA BOLEH JAWAB 5,5 ATAU HARUS DITULIS BEDA? CUCU AKU PURA2 TAU, AKU PURA2 TAU JUGA. KITA BERDUA SAMA-SAMA GAK TAU. MAAF PANJANG, BESOK HARUS DIKUMPUL.",
    comments: [
      { authorId: 81, minutesAgo: 707, content: "5,5 benar mbak. soal kue biasanya boleh dijawab 5 kue utuh dan setengah kue untuk satu orang, tapi angkanya tetap 5,5" },
      { authorId: 187, minutesAgo: 700, content: "tergantung soalnya mbak. kalau cuma separuh dari angka 11, jawabannya 5,5. kalau ceritanya harus dibagi utuh, biasanya soalnya diganti 12 atau 10" },
      { authorId: 63, minutesAgo: 693, content: "cucu pintar mba, pertanyaan putus gimana itu tanda anak mikir beneran" },
    ],
  },
  {
    id: 25,
    authorId: 25,
    minutesAgo: 745,
    shares: 30,
    content:
      "besok presentasi pertama, deck gue 18 slide, waktunya 10 menit. gue itung 600 detik dibagi 18 slide = 33 detik per slide, tp pas dipraktekin di kamar slide rumit doang yang kelamaan, yang simpel kecepetan. masuk akal gak sih bagi rata kayak gini, atau emang harus nandain slide yang bakal lama terus dibagiin waktunya lebih? abes ini gue gak mau disuruh singkat-menyingkat nanti panik",
    comments: [
      { authorId: 144, minutesAgo: 737, content: "bagi rata itu patokan doang kak. biasain tandain 5 slide terpenting, sisanya boleh cepet" },
      { authorId: 236, minutesAgo: 730, content: "33 detik per slide itu kerasa ngebut pas beneran maju. latihan pakai timer beneran, jangan hitung doang" },
    ],
  },
]
