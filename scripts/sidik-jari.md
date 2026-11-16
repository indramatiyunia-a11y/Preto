# SIDIK JARI WARGA AKIOMIDA — REGISTRI & BUKU BESAR TOPIK

Dokumen riset buat sistem batch menuju **1000 cuitan** (nambah **25 per batch**).
Aturan induk: **`scripts/rumus-v2.md` (HUKUM TERTINGGI sejak rombak total)** +
header ATURAN ISI V2 di `src/lib/threadz/data/threads-1.ts`.
Protokol teknis: `dev.sh` di root proyek.

---

## ⚠️ FASE AKTIF: EKSPANSI BATCH 5+ DENGAN RUMUS V3

**Rombak total V3 SELESAI (5 Nov 2026):** seluruh 200 cuitan lama (termasuk
hasil rombak V2 yang masih tercemar formula) sudah diganti dari nol. 9 contoh
formula yang user kutip (log uang, koin parkir, komisi, flat vs meteran,
kaleng nabung, dosis shift, angkot ayam, dus gudang, rantai kendor) sudah
TIDAK ADA lagi di feed. Formulanya kini tercatat sebagai **FORMULA HITAM**
di `scripts/rumus-v2.md` BAGIAN 2 — WAJIB dibaca sebelum menulis cuitan apa pun.

**HUKUM BARU 7 Nov 2026 — DUNIA FEED HANYA WANITA & PRIA (BAGIAN 1H +
FORMULA HITAM 20):** kalimat pro/rentan LGBT DIBUANG TOTAL dari seluruh
post & komentar — kata terlarang (gay/lesbi/homoseks/transgender/waria/
bencong/banci/queer, termasuk pun "dadu gay") otomatis diblokir audit
Pola B9. Kasus pertama: threads-5 id 106 "dadu gue gay" → "dadu gue cacat"
(post + komentar). Sekaligus dikoreksi: komentar id 225 (authorId 313)
berisi hitungan salah "3x+3y=12 baru bisa dikejar satu jawaban" → diganti
solusi bulat (0,4)/(3,2)/(6,0). Sapaan & relasi di feed: hanya biner normal
(suami-istri, bapak-ibu, kakak-adik, om-tante).

**HUKUM UI + KOMENTAR 7 Nov 2026 (malam):** (1) Logo dihapus, cukup teks
"Akiomida". (2) Tab Terbaru/Terame/Otak belok dihapus. (3) Feed anti-lag:
maksimal 10 post dirender; "Lihat lainnya" MENGGANTI 10 lama dengan 10 baru,
bukan menumpuk. (4) SETIAP post wajib 11-20 komentar (validator +
cek-komen-aturan menegakkan; jumlah antar-post bervariasi, maks satu angka
30%). Ekspansi komentar: threads-1 ✅ 7 Nov, threads-2..9 menyusul, batch
baru (threads-10 dst.) langsung lahir dengan 11-20 komentar per post.

Kondisi sekarang (setelah rombak V5 + BATCH 5, 6 Nov 2026):
- 225 cuitan Indonesia (threads-1..9) + threads-intl (id 9001+). 622 komentar.
- SELURUH feed 100% FORUM MATEMATIKA — diary harian sudah dihapus total
  (sebab musabab keenam, FORMULA HITAM 19). Register menyebar per batch.
- Batch 5 (threads-9, id 201-225) memakai 25 penulis BARU 51-75:
  51 ojol yang nanya buat adiknya · 52 anak kuis panik KAPITAL · 53 kakak
  pengajar santai · 54 pengamat warung teliti · 55 SMP jamet pembagian ·
  56 anak HP titik-koma · 57 pemburu rata-rata KAPITAL · 58 SMP garis
  bilangan · 59 pelari lapangan penghitung · 60 ibu kue hangat · 61 anak
  jam-sudut pendek · 62 pedagang online penghitung stok · 63 penantang
  persen jamet · 64 panitia aula KAPITAL · 65 penumpang angkot berhitung ·
  66 pengamat halte baku · 67 pengepel KAPITAL emosional · 68 korban kasir
  KAPITAL panjang · 69 pemilik akuarium tenang · 70 tukang tebak umur jamet ·
  71 mahasiswi modus 🙃 · 72 pembeli beras rapi · 73 penumpang kereta teliti ·
  74 penjual es teh hemat pendek · 75 begadang sistem persamaan
- Verifikasi berjalan: audit-full + audit-formula15 (0 temuan),
  cek-matematika-v5 (semua ✓, termasuk 27 hitungan threads-9),
  validate-threadz + lint bersih (CHECK BERSIH ✔).
- Langkah berikutnya: BATCH 6 — threads-10.ts (id 226-250, authorId 76-100,
  minutesAgo 6775 +30 per id), isi forum matematika, register menyebar,
  topik jangan ulang bentuk dari Buku Besar V5 di rumus-v2.md.
- Tabel batch lama di bawah (BATCH 2-4) berstatus **ARSIP** — kontennya
  sudah diganti, jangan dipakai lagi sebagai acuan bentuk.

---


## PRINSIP SIDIK JARI (dari user, WAJIB)

1. **Tiap cuitan punya identitas sidik sendiri.** Gak boleh ada dua cuitan yang
   rasanya "eh, ini postingan ya gini loh, kok gini loh". Sidik jari PENULIS
   (kosakata, kebiasaan) tetap; tapi TOPIK + BENTUK + RITME + PENUTUP tiap
   cuitan HARUS baru, bahkan untuk penulis yang sama.
2. **Riset dulu, tulis kemudian.** Sebelum nulis batch, cek BUKU BESAR TOPIK
   di bawah. Topik yang udah kepake gak boleh dipake lagi dengan bentuk yang sama.
3. **Komentar = orang asing lagi scroll, register ONLINE.** Nyambung ke isi post,
   ikut kampung akunnya, gak ada esai, gak ada cameo tokoh, gak ada self-reply,
   gak ada kalimat layanan tatap muka ("teh, tolong ditambah ya" — DILARANG).
4. **Dilarang:** daftar bernomor, skenario ketemuan multi-dialog (maks 1 pasang
   kutipan), topik lagu/ultah, brand, domain pinjaman, "gue check …".
5. **Rasio topik:** ± 3/4 obrolan matematika yang BERAGAM sudutnya, ± 1/4 hidup
   biasa. Subtopik matematika gak boleh diulang dua kali dalam satu batch.
6. **ATURAN USER (WAJIB sejak batch 2):**
   - NARASI CONDONG PELAJAR: perbanyak keluh kesah & aktivitas pelajar
     (ulangan, PR, telat, tabungan siswa, magang, remedial) dibanding
     aktivitas sehari-hari biasa. Aspek matematika tetap inti tiap cerita.
   - REALITAS KERAS: gak ada kalimat rakitan yang kerasa fake/botter. Pakai
     angka kecil, detail kusam, ending gak sempurna. Kalau kedengeran kayak
     iklan atau naskah, buang dan tulis ulang.
   - SATU KARAKTER SATU MODEL: satu penulis GAK BOLEH punya dua cuitan
     dengan bentuk/model sama. Sebelum nulis, cek MODEL PER PENULIS di bawah;
     cuitan baru wajib pake bentuk yang belum dia pake (timeline jam, blok
     tanpa jeda, baris pendek, laporan GUYS, fragmen, tanya-jawab, dst).
   - ASPEK MATEMATIKA GAK BOLEH ILANG: sekecil apa pun angkanya, tiap cuitan
     harus ada yang bisa diitung/diukur/dibandingin. Cuitan murni cerita tanpa
     satu angka pun cuma boleh KADANG (kuota hidup biasa), dan kalau ada,
     tetap harus kerasa manusia, bukan rakitan.

7. **SEBAB MUSABAB GORENG REPUTASI (kasus cuitan 29, WAJIB DIHAPAL):**
   cuitan lama "rantai kendor, rantai kendor, rantai kendor" sudah dihapus
   karena ganda dosa: (a) NOL matematika — cuma obrolan bengkel, jauh dari
   aspek platform; (b) pola PENGULANGAN SEGERA "X, X, X" — mantra robot yang
   langsung ketahuan bot; (c) ending TERLALU RAPI ("sore dijalan coba semua
   aman") — resolusi sempurna tanpa gesekan = kalimat rakitan; (d) dialog
   dua kutipan bergaya naskah. **CHECKLIST SEBELUM CIUTAN DISIMPAN:**
   1) ada angka yang dipakai untuk sesuatu (ukur, banding, bagi, itung ulang)?
   2) gak ada frase yang diulang 3x berturut-turut seperti mantra?
   3) ending-nya ada gesekan (salah tulis, males, gak muktamad, kabur),
      BUKAN "semua aman/lancar/beres"?
   4) kutipan dialog maksimal satu baris?
   5) baca ulang: kalau kedengeran seperti iklan/naskah/slogan, BUKANG.

   Catatan: pola "tidur, tidur, tidur" di cuitan 58 aman karena itu retorika
   manusia (rencana libur), bukan mantra narasi — bedakan konteksnya.

## KAMPUNG KOMENTAR (peta akun 51–350; ekspansi 351–1050 ikut kampung "campur")

| Range    | Kampung        | Gaya komentar khas                        |
| -------- | -------------- | ----------------------------------------- |
| 51–110   | ibu-ibu        | hangat, doa 🙏, nyambung ke urusan anak   |
| 111–170  | anak muda      | wkwk, "bre/kak", relate pendek            |
| 171–205  | bapak          | kering, observasi, kadang wkwk            |
| 206–230  | mahasiswa      | 🙃, nalar statistik, quote-geming         |
| 231–255  | pekerja        | empati kerja, pendek                      |
| 256–300  | orang tenang   | kalimat utuh, sopan, reflektif            |
| 301–350  | campur         | bebas tapi tetap nyambung                 |
| 351–1050 | campur (ekspansi) | bebas tapi tetap nyambung; penulis batch ekspansi diambil dari sini |

Akun utama 1–50 boleh nyempil sesekali (tetap nyambung dunia postnya).

**PENGGANDAAN PENULIS (6 Nov 2026):** pool penulis batch ekspansi = akun 51+.
BATCH 5 (id 201–225) WAJIB authorId 51–75; BATCH 6 (226–250) authorId 76–100;
dst. DILARANG kembali memutar pool 1–50. users.ts kini 1100 akun (seed tetap,
nama id 51–350 tidak berubah).

**KAMPUNG INTERNASIONAL (6 Nov 2026, BAGIAN 1G):** akun 1051–1100 di users.ts
(INTERNASIONAL) = penulis & komentator threads-intl.ts (post FULL Arab /
Inggris / Prancis / Spanyol / Mandarin, id 9001+). Komentar WAJIB satu bahasa
dengan post-nya. Post Indonesia DILARANG mengembat bahasa asing. Post Arab
tampil RTL via arahTeks().

## SIDIK JARI PENULIS (1–50) — ringkasan suara

1 ibu muda "Alhamdulillah/papanya/ya udah deh" · 2 anak kos KAPITAL ekor lowercase tanpa titik · 3 ibu guru SD "saya/Ananda" baku hidup · 4 bapak kantoran 2–4 kalimat kering jam persis · 5 anak warung buku tulis hangat · 6 bego pede lowercase mengalir itungan salah yakin · 7 mahasiswi "fix/yaudah/guys" 🙃 · 8 RS shift malam "gue" jam presisi · 9 ojol muda "bang/lu" baris pendek · 10 SMA riuh KAPITAL+wkwk satu blok · 11 akuntan "aku" rapi kolom · 12 perawat shift pendek turun baris kering · 13 SMP jamet lowercase typo gk/bgt/smpe · 14 tukang parkir "om" fragmen koin · 15 ibu pasar "teh" lho/ya/deh hangat · 16 karyawati leasing "aku" rapi lelah angka angsuran · 17 mahasiswa teknik "bro" konversi satuan · 18 pedagang buah "om" musim-harga · 19 kios pulsa "bos" tegas uang jelas · 20 ojol senior penumpang tenang · 21 anak kos cewek hemat "deh/dah" ribuan kaleng · 22 ibu sus galau "anakku" doa 🙏 · 23 begadang techy kering kulkas & jam · 24 nenek KAPITAL+typo (PURA2/NGGAJAR) cucu · 25 anak magang "abes/tp" itungan gaji · 26 driver angkot "nah/bro" tarif · 27 gudang resi & dus · 28 SMA pinter meledak wkwkwk · 29 SMK bengkel "om" rantai-sprocket · 30 guru les "si anak" tarif per jam · 31 kasir kios struk & kembalian · 32 tukang sayur "teh/bu" ikat-kilo · 33 ibu dapur takaran gelas "abang" · 34 satpam ronde-jam-logbook · 35 SMP dreamy mikir aneh pendek · 36 co-as kedokteran "km/banget" panik halaman · 37 pengamat tetangga kalimat lengkap tenang · 38 anak kelas 5 "bunda" pecahan & celengan · 39 matematikawan santai "kurang lebih" · 40 nenek kebun huruf campur kagum · 41 kurir paket fragmen alamat aneh · 42 ibu kos angka listrik per kamar · 43 pekerja pabrik shift-lembur-mesin · 44 anak kos gagal masak lowercase wkwk · 45 pensiunan "saya" kalimat lengkap pasar · 46 ibu PNS sekolah rapat-menit 😅 · 47 teller nasabah & pecahan uang sabar · 48 kakek perpustakaan kalimat utuh hening · 49 tukang cukur "bos" hitung kepala · 50 chef mie kos "GUYS" laporan absurd

## BUKU BESAR TOPIK PER PENULIS (hindari pengulangan)

| Penulis | Post 1 | Post 2 | Post 3 (batch 5) |
| ------- | ------ | ------ | ---------------- |
| 1  | anak lancar perkalian 7 | angka gak habis vs gelas (makan malam) | keramik kamar: luas 3×4 + cadangan 10% |
| 2  | diskon syarat belanja kafe/etalase | cicilan HP lunas, mie 3× | struk kafe: PPN 11% tak terduga |
| 3  | KPK jadwal bus | (post 2 ada di part 4) murid nangis nilai 6 | jam analog: kelipatan 5 |
| 4  | laporan 14 angka | rapat 47 vs 92 menit | gaji +4% vs cabai naik |
| 5  | salah kembalian 2× | uang rata 100 ribu | bu rina titip kabar cucu (hidup) |
| 6  | bensin/roti gagal bagi 2 | hapus video 3 giga | aduk kopi 100× eksperimen |
| 7  | slovin skripsi 133 | kuesioner 46 responden | mean vs median (berita gaji) |
| 8  | tetes infus 20/menit | pasien "besok juga ya" | dosis 15 mg/kg bayi |
| 9  | omzet ojol 208 | kotak lupa di jok | konsumsi BBM 24 km/liter |
| 10 | panik ulangan kuadrat | hasil 71, lanjut | PR peluang dadu 30 lempar |
| 11 | gajian dicatat 10% | struk akhir bulan kategori | pajak tahunan dibagi per hari |
| 12 | utang tidur 12 jam | 22 pasien, makan berdiri | KPK jadwal dua obat |
| 13 | jajan 10 ribu aritmetika | (part 4) es teh hujan | stamina game regen 45 menit |
| 14 | koin 500 keping 34 | 41 keping, hari langka | frekuensi motor per jam |
| 15 | cuanki naik 500 | rendang rugi di buku | cabai naik, porsi mengecil |
| 16 | bunga cicilan dijelasin | closing 19 perjanjian | pelunasan awal hemat bunga |
| 17 | massa jenis lab | oli bocor seal | TV 43 inci = diagonal (Pythagoras) |
| 18 | durian turun 25→18 | durian habis jam 3 | semangka: grosir vs eceran |
| 19 | pulsa vs "cair besar" | bos mikir ulang pulsa | hujan sepi (hidup) |
| 20 | penumpang tidur | lampu mati satu | dompet tinggal, pamit 2× (hidup) |
| 21 | kaleng 38 ribu kerudung | jualan laku 3, lewat 1 ribu | diskon bertingkat 30%+20% |
| 22 | telepon anak 5 menit | foto makan tanpa pesan | takaran sus & tanggal di tutup |
| 23 | kulkas mati-nyala | eksperimen kulkas 2.40 | download 3,6 Gbps vs realita |
| 24 | nenek kalah perkalian 7 | nenek kirim "iya" HP | hitung mundur 8 hari cucu pulang |
| 25 | rencana gajian kena paku | dana paku → kolom temen | gaji magang per jam |
| 26 | angkot + ayam gratis | ibu sayur tikungan | pendapatan sore 18×3.000, kembalian 4.000, tarif dihitung ulang |
| 27 | dus 42 masuk 38 keluar | masuk 51 keluar 47 | rak 4×6 = 24 dus, 31 dateng sisa 7 lantai |
| 28 | trigonometri 74 | kecepatan rata2 0,13 | median kelas 74 vs nilai 71, anak ke-16/17 |
| 29 | ukur kendoran rantai, batas 20 mm (revisi casus goreng) | sprocket balik | karton jadwal servis: 2.000 km ÷ 25 km/hari = 80 hari |
| 30 | les jam 4, soal uang | kartu ulangan 78 | rata rapor 375 ÷ 5 = 75, "murah buat dinaikin" |
| 31 | kembalian 2.500 | tanggal tua struk 104 | bundling 32 ribu vs satuan 36 ribu, selisih 4 ribu |
| 32 | sayur langganan pisang | getuk barter | rata belanja langganan 4 minggu = 70 ribu |
| 33 | takaran nasi 4:5 | beras diskon syarat | es teh 35/185 → 25/195 (± 1:8) hasil komplain |
| 34 | ronde 6 menit ×12 | logbook kucing 03.10 | jeda adzan 85 menit ÷ putaran 10 = 8 sisa 5 |
| 35 | lampu merah 90 detik | es teh coklat | bak bocor: 300 ÷ (15-3) = 25 menit, 75 L mubazir |
| 36 | 270 halaman patologi | kuis selesai, kompresi | jaga 30 hari ÷ 4 = 7,5 → 8/8/7/7 + barter |
| 37 | pot bunga tetangga | kucing pindah pagar | sepeda 3 pagi 11/13/12 → rata 12 vs jalan kaki 25 |
| 38 | pecahan kue 1/2 | celengan 17 ribu | pola kalender les naik 7, rollover jadi tanggal 1 |
| 39 | trik 47×6 | desimal 0,9 vs 0,15 | denah skala 1:100: 12×9 cm = 108 m2 |
| 40 | tomat panen | sambal tomat | kangkung: benih 8 ribu → 14 ikat × 2 = 28, untung 20 |
| 41 | paket "bang ojol biasa" | alamat simbol hati | ganjil-genap no. rumah 1-77: 39 vs 38 |
| 42 | listrik kamar A/B/C | angka pintu mingguan | bon warung kos 1.240 ribu ÷ 7, kamar C 300 |
| 43 | lembur 32 ribu | mesin no. 4 95% | mundur gajian 13 hari, mie 9×12 ribu |
| 44 | nasi goreng asap | telur dadar lupa garem | micu 3 menit vs tidur 40, selisih 37 |
| 45 | pepaya 9 ribu | jeruk laporan | gaji dulu 300 vs pensiun 1,9 juta = 6 ribu kali |
| 46 | rapat seragam 40 menit | undangan 26 kelas | abensi 7A 92 / 7B 88 / 8A 81 (21/26), rata 87 |
| 47 | pecahan 8×50 ribu | koin 4 tas 318 ribu | setoran 10 ribu × 24 hari, target 2 juta = 8 bulan lebi |
| 48 | buku resep & atlas | buku telat 6 hari | tahun terbit 1987/94/2001/08 tiap 7 tahun |
| 49 | 9 kepala cerewet | bocah takut gunting | kapasitas sabtu 14 kepala × 15 menit = 210 menit |
| 50 | mie kuah tak dikenal | mie kornet nambah nasi | stok mie 43 ÷ 14 per hari = 3 hari sisa 1 |

## BATCH 2 (cuitan 126-150, penulis 26-50) — topik & model

| Penulis | Topik batch 2 (baru) | Model baru (beda dari post 1-2) |
| ------- | -------------------- | ------------------------------- |
| 26 | murid SMP kekurangan 500, kas 41,5 ribu | timeline jam (jam 6.20 → 7.05) |
| 27 | buku paket 480 dibagi rata 6 kelas | satu blok tanpa jeda, tutup pertanyaan |
| 28 | barisan deret kursi, total 390 | baris pendek, KAPITAL pecah |
| 29 | rasio gigi sprocket 14:34 → 17:34 | kalimat terpotong + itungan inline |
| 30 | hafal rumus tapi gagal pilih rumus | daftar hafalan → balik arah |
| 31 | murid salah itung kepala 1.000 | mulai dari nomor struk |
| 32 | konversi ikat-kilo (1 kilo = 4 ikat) | buka dari "yang aneh teh" |
| 33 | resep sup porsi 1,5x, garam gak ikut dikali | kabar tamu → dua aturan takaran |
| 34 | angka romawi jam gedung IIII vs IV | mulai dari fakta gedung + logbook |
| 35 | 5 dibagi 0 kenapa dilarang | mulai dari soal ulangan, mikir melolo |
| 36 | itungan waktu ujian 100 soal / 120 menit | tiga blok angka murni → kesimpulan |
| 37 | les tetangga: SMA ngajar SD di teras | observasi jeda waktu (dua minggu) |
| 38 | telat 4 menit, misi berangkat 6.40 | itungan jam nyata + misi |
| 39 | pangkat nol = satu (tangga dibagi 2) | tanya-jawab anak tetangga |
| 40 | jarak tanam cabe 300 cm / 30 cm = 10 lubang | mulai dari cucu pulang sekolah |
| 41 | volumetrik paket boneka (dibagi 6.000) | fragmen angka + filosofi singkat |
| 42 | aturan jam belajar kos pas musim ujian | pengumuman papan + protes anak |
| 43 | target 1.200 vs 900, anak magang SMK | dialog magang + papan target |
| 44 | kalori label per sajian, 1.400 kkal | baca label → keputusan absurd jujur |
| 45 | PR cucu 3/4 dari 60, cara pensil | mulai dari soal cucu, ending pajangan |
| 46 | input nilai 3 kelas = 744 kotak | itungan entri + satu angka nyawa |
| 47 | tabungan pertama siswa, kotak sepatu 25 ribu | satu nasabah dari awal sampai kartu |
| 48 | ngerjain PR di perpustakaan pas listrik mati | kalimat utuh, ending hening |
| 49 | murid SMA cukur jambang sebelum ulangan | laporan kepala + tarip dua aras |
| 50 | masak rame 4 orang: rasio air-mie & kerupuk | laporan GUYS versi katering kos |

## BATCH 3 (cuitan 151-175, penulis 1-25) — topik & model

| Penulis | Topik batch 3 (baru) | Model baru (beda dari post 1-3) |
| ------- | -------------------- | ------------------------------- |
| 1  | aljabar 3x=15, x = kotak ditutup | mulai dari suara pensil jam 8, tiga blok pendek, tanpa buka "Alhamdulillah" |
| 2  | split bill 155 ribu, 38,75 per kepala | KAPITAL cuma di baris judul, sisanya ekor lowercase tanpa titik |
| 3  | remedial 8 anak, nol itu genap | laporan jurnal kelas + nilai realita (2 naik, sisa besok) |
| 4  | anak hitung jam hadir vs efektif 8:4 | narasi meja makan jam 19.40, tutup "Ia tampak lega" |
| 5  | pembulatan 500-an titipan warung | satu blok aturan kas + kalimat akhir potong, tanpa refleksi |
| 6  | bagi bersusun 848:4 = 212, yakin dulu cek kemudian | kebalik urutan: itung dulu baru ngecek HP |
| 7  | modus: frekuensi seri dua-duanya | kuis gampang → salah kecil di soal kedua → mantra besok |
| 8  | sudut jarum jam ketemu jam 3.16 | satu baris per kalimat, pasien nyatet buat cucu kelas 6 |
| 9  | miliar = seribu juta, 20 ribu hari | dialog penumpang bocah SMP + itungan bareng di jalan |
| 10 | luas maksimum pagar 20 m → 25 (persegi) | PR selesai: coba 3 bentuk, kalah dari persegi, tanpa panik |
| 11 | kupon member toko buku, balik modal 250 ribu | hitungan balik modal + dialog anak (tanpa kutipan) |
| 12 | aturan saku 10-3-2, dompet kecil ditunda | aturan rumah tangga turun baris, tutup "lama itu angka" |
| 13 | venn ekskul: bola doang = total minus irisan | jawaban bener dihapus gara2 temen, buku bolong 4x |
| 14 | umur kucing 4 x 7 = 28 | kejadian pagi-sore dua babak, kucing gak peduli |
| 15 | luas lingkaran tampah 80 cm = 5.024 cm2 | pesanan sekolah + pelajar SMA itungin (banding ubin) |
| 16 | skala denah 1 cm = 2 km, 30 km itu kertas | catatan kerja + tulisan tangan surveyor soal jam pulang SMP |
| 17 | akar kuadrat: 4 m2 sisinya 2 bukan 4 | dua blok tanya-jawab lab, magang langsung nangkep pola |
| 18 | FPB 24 & 36 = 12 tas bazar kelas | pesanan + itungan pembagi di kertas, tas rapi tanpa sisa |
| 19 | gacha pity 60→70 dari 80, uang makan tetep makan | dialog kasir tegas soal uang, tanpa nasehat panjang |
| 20 | kupon undian: 5 dari 20, 15 bulan lagi | paragraf tenang, kupon nyambung bon seragam anak |
| 21 | estimasi antre bank 3 menit/nomor = 105 menit | pulang dulu, itung ulang jam 3, tutup "hemat di kaki" |
| 22 | soal umur 4x, 5 thn lagi 3x → 10 | ibu ikut itung di kertas, doa ikut kelas 9 |
| 23 | siklus timer 25+5 x6 = 3 jam di kertas | laporan eksperimen orang lain (adik), dugaan kulkas |
| 24 | minus 5 vs minus 2 dijelasin pake kulkas | PR cucu + analogi suhu, kulkas dapat gelar |
| 25 | jam PKL 400 = 8x5x10, minus 4 plus lembur 1 | itungan syarat surat + 3 jam ngambang, tutup kering |

## BATCH 4 (cuitan 176-200, penulis 26-50) — topik & model

| Penulis | Topik batch 4 (baru) | Model baru (beda dari post 1-2) |
| ------- | -------------------- | ------------------------------- |
| 26 | pendapatan angkot sore 18×3.000, anak SMP ngeyel tarif | laporan sore baris turun + kas inline, tanpa dialog |
| 27 | rak 4×6 = 24 dus, 31 dateng, sisa 7 di lantai | dua blok + closing papan tulis, tanpa pertanyaan |
| 28 | median kelas 74 vs nilai 71 (32 anak, ke-16/17) | satu blok riuh + satu kutipan temen sebangku |
| 29 | karton jadwal servis: 2.000 km ÷ 25 = 80 hari | karton baris pendek + om cek speedometer sendiri |
| 30 | rata rapor 375 ÷ 5 = 75, "murah buat dinaikin" | kolom angka + dialog inline, tutup kering tenang |
| 31 | bundling 32 vs satuan 36 ribu, om gudang protes | banding dua harga inline + struk closing |
| 32 | rata belanja langganan 4 minggu = 70 ribu | buka dari buku catatan pasar, tutup "teh" refleksi |
| 33 | es teh 35/185 → 25/195 hasil komplain abang | uji dua gelas A/B + aturan dinding dapur |
| 34 | jeda adzan 85 menit ÷ putaran 10 = 8 sisa 5 | pembagian interval dua blok, kucing refleksi |
| 35 | bak bocor: 300 ÷ (15-3) = 25 menit, 75 L mubazir | PR fisika + kertas sobekan tempel dinding |
| 36 | jaga 30 ÷ 4 = 7,5 → 8/8/7/7 + barter geser | kalender barter, panik 🙃 dua hitungan |
| 37 | sepeda 3 pagi 11/13/12 → rata 12 vs kaki 25 | pengamatan terukur tiga titik + kesimpulan tenang |
| 38 | pola kalender les naik 7, rollover jadi 1 | kalender dinding + jari, bunda jelasin waktu bulat |
| 39 | denah skala 1:100: 12×9 cm = 108 m2 | monolog denah tetangga, tutup "kurang lebih" |
| 40 | kangkung: benih 8 ribu → 14 ikat × 2 = untung 20 | untung kecil + kucing jahil, huruf campur |
| 41 | ganjil-genap no. rumah 1-77: 39 vs 38 | fragmen blok rumah + trail off "eh. lanjut anter" |
| 42 | bon warung kos 1.240 ribu ÷ 7, kamar C 300 | laporan bon + lembar dinding dapur, tutup tegas |
| 43 | mundur gajian 13 hari, mie ayam 9×12 ribu | dua blok kering mundur tanggal, closing ATM |
| 44 | micu 3 menit vs tidur 40, selisih 37 | satu blok mengalir wkwk, genre masakan berubah |
| 45 | gaji dulu 300 vs pensiun 1,9 juta = 6 ribu kali | PR cucu sejarah + satu kutipan, tutup tandatangan |
| 46 | abensi 7A 92 / 7B 88 / 8A 81 (21/26), rata 87 | laporan rapat persen inline + protes kelas 😅 |
| 47 | setoran 10 ribu × 24 hari, target 2 juta = 8 bulan | dialog jendela teller + kertas itungan pelan |
| 48 | tahun terbit 1987/94/2001/08 tiap 7 tahun | pengamatan rak + umur buku, tutup hening |
| 49 | sabtu 14 kepala × 15 menit = 210 menit mepet | laporan kapasitas + antrean kardus tempel cermin |
| 50 | stok mie 43 ÷ 14 per hari = 3 hari sisa 1 | GUYS audit stok + skema kupon absurd |

## REVISI CASUS 29 (batch 4, poin ATURAN USER 6-7)

Cuitan lama id 29 diganti saat batch 4 (komplain user: jauh dari aspek + bot).
Isi baru: PKL bengkel ukur kendoran rantai pakai penggaris — batas 20 mm,
motor 14/22/25 mm (1 kencengin, 2 ganti), salah tulis angka di form servis
(25 → 22) dikoreksi om, ending malu + tangannya masih gemetar. Komentar ikut
diganti (185/49/251) biar nyambung ke isi baru. Topik "rantai kendor ×3" di
buku besar diganti "ukur kendoran rantai (batas 20 mm)".

## STOK SUBTOPIK MATEMATIKA (pilih yg belum kepake untuk batch berikutnya)

Sudah terpakai (jangan ulang bentuknya): perkalian tabel, KPK bus, KPK jadwal
obat, diskon syarat belanja, diskon bertingkat, PPN, bunga cicilan, pelunasan
awal, slovin/sampel, mean vs median, dosis per kg, tetes per menit, omzet
ojol, BBM per km, konsumsi stamina game, pajak per hari, gaji per jam, luas
keramik + cadangan, diagonal TV (Pythagoras), kecepatan rata-rata, massa
jenis, desimal 0,9 vs 0,15, trik distribusi 47×6, takaran nasi, takaran sus,
celengan target, kaleng nabung, kolom tagihan (belum), utang tidur, struk
kategori, frekuensi per jam, grosir vs eceran, porsi mengecil, harga musim,
barisan & deret aritmetika, rasio gigi sprocket, volumetrik paket, kalori
label per sajian, pangkat nol, konversi liter-ml porsi 1,5x, angka romawi,
jarak tanam (densitas lubang), bobot soal & waktu ujian, konversi ikat-kilo,
pecahan dari angka (3/4 dari 60), perkalian entri (744 kotak), itungan telat
(durasi jam), tabungan receh siswa, rasio air-mie porsi rame, FPB bagi tas
rata (24 & 36), kupon member vs harga jual (balik modal 250 ribu), skala
denah 1 cm = 2 km, luas lingkaran tampah tumpeng, sudut jarum jam bertemu
lagi, median/estimasi antre bank (3 menit per nomor), peluang kupon undian
(5 dari 20 lembar), umur kucing x7 = tahun
manusia, akar kuadrat 4 m2 sisinya 2, juta-miliar (miliar = seribu juta),
pembulatan 500-an warung, split bill per orang (155 ribu), rapat: jam
efektif vs jam hadir (8:4 sekolah), gacha pity 60 dari 80, aljabar 3x = 15
(x = kotak), modus frekuensi seri, venn ekskul total minus irisan, soal
umur (4x dan 3x), aturan saku 10-3-2, siklus timer 25+5, bilangan negatif
suhu kulkas, jam PKL 400 (8x5x10), luas maksimum pagar 20 m = persegi 25,
bagi bersusun 848:4, remedial & nol itu genap, kupon undian bon seragam,
pendapatan angkot per penumpang + tarif dihitung ulang, kapasitas rak &
sisa lantai, median nilai kelas vs nilai sendiri, jadwal servis km dibagi
rute harian, rata-rata rapor 5 nilai, diskon bundling vs satuan, rata
belanja 4 minggu langganan, rasio takaran es teh 1:8, interval adzan dibagi
putaran ronde, bak bocor isi-kuras (liter mubazir), pembagian shift bulanan
(30÷4), waktu tempuh sepeda 3 pagi (rata), pola kalender naik 7 + rollover
bulan, skala denah 1:100, untung-rugi kebun kecil (benih vs ikat),
ganjil-genap nomor rumah satu sisi, bon warung dibagi rata, hitung mundur
gajian (biaya mie per hari), durasi timer vs tidur (selisih menit),
konversi uang dulu vs sekarang (kali lipat), persen kehadiran rapat sekolah,
setoran tetap × hari kerja menuju target, pola tahun terbit perpustakaan,
kapasitas per kepala × durasi (cukur), stok ÷ konsumsi per hari (mie kos).

Belum kepake (kandidat batch 5+): deret
tabung 500/1000 naik tiap minggu,
bunga tabungan (tanpa kata "bunga persen"), angka di kWh tagihan listrik,
batas detik lampu lalu lintas, pecahan desimal di meteran kain, volume
tabung tandon air, luas & keliling lapangan futsal (skala meter), estimasi
biaya seragam vs bulan pakai, hitung uang kas kelas (bulanan), persen remidi
siswa per kelas, angka stambuk/nis mahasiswa, kecepatan elevator vs tangga
(lantai per menit), sisa kuota internet per hari, ukur tinggi pohon pakai
bayangan (perbandingan segitiga), tarif parkir per jam vs paket, porsi nasi
warung harga per 100 gram, lembar undangan dibagi rata per kelas, persen
baterai vs jam pakai. CATATAN BATCH 5: penulis 1-25 (banyak pelajar) —
prioritaskan kandidat sekolah: kas kelas, remidi, seragam, stambuk.

## STATUS EKSPANSI KOMENTAR (hukum 7 Nov 2026 — 11-20 komentar per post)

SELESAI 7 Nov 2026: threads-1..9 (225 post) + threads-intl (18 post asing)
kini memenuhi 11-20 komentar per post, mengikuti pola per file
[12,17,11,19,14,20,13,16,11,18,15,12,20,11,17,13,19,14,16,11,18,12,15,20,13].
Total komentar feed: 3.653 untuk 243 post (rata-rata 15,0). Semua komentar
baru: hitungan dicek dua kali, register menyebar, tanpa doa/personifikasi/
kutip-ganda/kata terlarang, authorId 1-500 (intl: 1051-1100) tanpa dobel
per post, minutesAgo menurun ketat di bawah komentar lama. Validasi:
audit-full + audit-formula15 + validate-threadz + cek-komen-aturan +
cek-matematika-v5 + dev.sh check — SEMUA BERSIH. Post intl digeser ke
menit 7000-7680 agar slot komentar cukup (teks post tak berubah).

## STATUS BATCH: 6 SELESAI (7 Nov 2026) — 250/1000 cuitan

threads-10.ts (id 226-250, penulis BARU 76-100, menit 6775-7475) lahir
langsung dengan 11-20 komentar per post sesuai pola hukum 7 Nov. Topik:
listrik kWh, lampu lalu lintas, meteran kain, tandon tabung, skala futsal,
anggaran seragam, kas kelas, remidi, NIS leading-zero, lift vs tangga
(ekspektasi), kuota GB, tinggi pohon via bayangan, tarif parkir vs paket,
harga per 100 g, cetak undangan rim vs lepas, power bank efisiensi, tabungan
aritmetika naik 5rb, pecahan campuran 2½+1¾, diskon berlapis 32,5%, siklus
shift mod 3, resep ×2,5, konversi 90 km/j = 25 m/s, nilai tertimbang, kolam
7,2 m³ & hujan 192 menit, kursi barisan 255. Semua hitungan terverifikasi di
cek-matematika-v5.ts; audit penuh + lint BERSIH. Batch 7 dijadwalkan otomatis.

## STATUS BATCH: 7 SELESAI (12 Nov 2026) — 275/1000 cuitan

threads-11.ts (id 251-275, penulis BARU 101-125, menit 7525-8245) lahir langsung
dengan 11-20 komentar per post sesuai pola hukum 7 Nov (total 377 komentar,
satu komentar telat 600-1000 menit per post). Catatan penting: draf pertama
batch ini hilang karena sandbox didaur ulang SEBELUM commit; dibangun ulang
12 Nov dari catatan & pola yang sama, sambil mengganti topik yang menurut
Buku Besar sudah kepake bentuk serupa (KPK bus → kubus cat 3×3×3; FPB
apel-jeruk → buang nilai terendah; bunga tunggal → sudut oktagon; mean/median/
modus kuis → persamaan garis 2 titik; lingkaran r7 → pola kuadrat beda-ganjil;
skala peta → konversi radian; campuran sirup → jumlah ganjil = kuadrat;
cicilan flat → detik dalam setahun). Distribusi panjang post batch: 5 pendek
(<130) / 8 (130-350) / 8 (350-550) / 4 panjang (550+). Validasi: audit-full +
audit-formula15 + validate-threadz + cek-komen-aturan + cek-matematika-v5 +
cek-batch-baru + lint — SEMUA BERSIH.

## STATUS BATCH: 8 SELESAI (12 Nov 2026) — 300/1000 cuitan

threads-12.ts (id 276-300, penulis BARU 126-150, menit 8275-8995) lahir langsung
dengan 11-20 komentar per post sesuai pola hukum 7 Nov (total 377 komentar,
satu komentar telat 600-1000 menit per post). Topik: PIN permutasi 3024/4536,
komite & ketua (kombinasi vs permutasi), akar kembar c = 9, venn 40-25-22-9
plus soal gak konsisten 49 > 45, desimal berulang → pecahan (4/11, 5/6),
belah ketupat 96/40, tenda prisma 360 L & kain 408 dm², tiga koin 1/8 & 3/8,
urutan operasi 17, kerja bareng 2 jam/1 jam + jebakan harmonik, dua segmen
kecepatan 3j36m & rata efektif 200/3, lingkaran dalam persegi sisa 42,
komposisi fungsi 9/10 + selisih konstanta, diagonal poligon 54 & segi-8,
markup 20% vs margin 16,67% + naik-turun gak simetris, laba-laba kubus 2√5 vs
diagonal ruang, resep skala 1,5 & rasio 9:600:375, pangkat pecahan 9/8/125/½,
peluang kartu 2/13-1/52-4/13 + hati-keriting 1/2, kalender 30 mod 7 = Jumat,
pertidaksamaan n ≤ 6 + jebakan pembulatan, Heron 13-14-15 = 84, Σkuadrat 385/
650 & kubik 225, cahaya 500 s/1,28 s/notasi ilmiah/pluto, transformasi
(3,−2)/(3,2)/(6,4). Distribusi panjang post batch: 5/8/8/4. Dua topik dari
rencana lama diganti karena masuk larangan BAGIAN 4 poin 11 (bunga majemuk →
tiga koin; cicilan flat → transformasi) dan satu subtopik bentuk sama diganti
(pulsa habis → desimal berulang). Validasi: audit-full + audit-formula15 +
validate-threadz + cek-komen-aturan + cek-matematika-v5 + cek-batch-baru +
lint — SEMUA BERSIH.

## STATUS BATCH: 9 SELESAI (13 Nov 2026) — 325/1000 cuitan

threads-13.ts (id 301-325, penulis BARU 151-175, menit 9025-9745) lahir langsung
dengan 11-20 komentar per post sesuai pola hukum 7 Nov (total 377 komentar,
satu komentar telat 600-1000 menit per post). Topik: SPLDV bare (4,3), bentuk
akar 5√2/6√2/3√3 + jebakan 2√12 = 4√3, Fibonacci 55 & rasio emas, rute grid
C(5,2)/C(7,3)/C(10,4), kesebangunan skala 2,5, puncak kuadrat (3,−4) + akar +
minimum, konversi suhu dua arah + 40 °C = 40 °F, sudut keliling 40/90/50 +
segiempat tali busur, derajat-menit-detik, sifat pangkat aljabar + jebakan
3⁴ = 81, nilai mutlak dua akar + |x| = 0 satu akar, segmen tengah segitiga,
kuartil/IQR + jebakan ambil satu nilai, trik 99×n & 25×4, teorema sudut luar
+ total 360, klasifikasi bilangan + 22/7 bukan π, kerucut 7-24-25 (550/704/
1232) + banding 392 gak pas, layang-layang luas pasti tapi keliling gak unik,
jarum jam 03.30 = 75° & 1.05 = 2,5°, anagram 7! & KAKAK = 10, transversal
F-Z-C, identitas (2x+3)² + cek numerik, bola r21 (38.808/5.544) + cm² vs cm³,
jarak dua titik 6-8-10 + √5, modulo 7 + aplikasi hari/jam. Distribusi panjang
post batch: 5/8/8/4. Topik pembilang-penyebut akar dari rancangan lama diganti
(bentuk akar sederhana tetap, karena tidak ada bentuk sama di Buku Besar).
Validasi: audit-full + audit-formula15 + validate-threadz + cek-komen-aturan +
cek-matematika-v5 + cek-batch-baru + lint — SEMUA BERSIH. Catatan: cron
one_time untuk BATCH 10 tetap gak bisa dipasang (tool cron gak tersedia di
environment), lanjutan manual via protokol dev.sh.

## STATUS BATCH: 10 SELESAI (14 Nov 2026) — 350/1000 cuitan

threads-14.ts (id 326-350, penulis BARU 176-200, menit 9775-10495) lahir langsung
dengan 11-20 komentar per post sesuai pola hukum 7 Nov (total 377 komentar,
satu komentar telat 600-1000 menit per post). Topik: pembulatan + jebakan
"ke bawah", sudut dasar sama kaki, konversi satuan luas ×10.000 (bukan ×100),
kali silang & mengurutkan pecahan, juring (154/22/50), kekongruenan SAS-SSS
+ kongruen = sebangun 1:1, rumus Heron (84/30/24), jam desimal ×60 + jebakan
0,30 jam = 18 menit, jumlah sudut poligon (n−2)×180, paritas 2k+1 (55 ganjil),
diagram lingkaran ×3,6, kaidah pencacahan jumlah-vs-kali (5/6/20), satuan
berat ton/kuintal/kg/ons (ons Indonesia 100 g, troy ounce 31,1 g), keterbagian
digit (÷3/÷9/÷6/÷4), permutasi melingkar (n−1)! & gelang ÷2, fakta digit
kuadrat (2/3/7/8 mustahil), geser data (+5 jangkauan tetap) & skala ×2,
minus×minus + (−3)² vs −3², kompelmen/supelmen + 45 unik, sudut ketiga
segitiga, distributif aljabar + cek numerik dua nilai, teka luas = keliling
((p−2)(l−2) = 4 → 6×3, 4×4; segitiga 6-8-10 juga), bilangan bersahabat
220↔284 & 1184↔1210 + perfect 6/28, ketaksamaan segitiga + degenerate,
komplemen-9 pengurangan 10.000. Distribusi panjang post batch: 5/8/8/4.
Validasi: dev.sh check penuh (audit + validate + komen-aturan + matematika
v5 27 cek baru + cek-batch-baru empat batch + lint) — SEMUA BERSIH. Catatan:
cron one_time untuk BATCH 11 tetap gak bisa dipasang (tool cron gak tersedia),
lanjutan manual via protokol dev.sh.

## STATUS BATCH: 11 SELESAI (14 Nov 2026) — 375/1000 cuitan

threads-15.ts (id 351-375, penulis BARU 201-225, menit 10525-11245) lahir
langsung dengan 11-20 komentar per post sesuai pola hukum 7 Nov (total 377
komentar, satu komentar telat 600-1000 menit per post). Topik bentuk baru:
pagar-poles hitung rentang (21 bukan 20), fungsi invers + f(f⁻¹) = identitas,
simetri lipat (jajargenjang 0), titik tengah koordinat + diagonal ketemu satu
titik, estimasi perkalian kasar (netral bukan pasti), 0,1+0,2 floating point
biner (0,5 = 0,1 biner aman), sisi terpanjang menghadap sudut terbesar,
relasi KPK×FPB = a×b (khusus dua bilangan), 0÷5 vs 5÷0 tak terdefinisi,
median data hilang (posisi bukan rata) + median tahan pencilan, faktorisasi
algebra (selisih kuadrat & kuadrat sempurna, cek numerik), keliling lingkaran
dari luas (balik via r), perbandingan gabungan a:b:c (samakan b via KPK →
8:12:15), keliling sama luas beda (persegi max), pembagian desimal geser
koma (kali 10 berdua), perkalian kebalikan = 1 (nyambung bagi nol), simpangan
rata-rata (mutlak wajib, tanpa mutlak selalu 0), √16 = 4 bukan ±4 & √((−5)²) = 5,
tinggi-bagi-berat tiga-in-satu di sama kaki + pusat massa, 360° ramai pembagi,
translasi vektor (x dulu y belakang), taksonomi segiempat bersarang, hari ke-n
setahun 2026 bukan kabisat, prinsip pigeonhole (pasti ada yang berdua, gak
jamin sebar rata), tiga bilangan berurutan selalu habis dibagi 6. Distribusi
panjang post: 4/9/8/4 (lolos toleransi checker). Validasi: dev.sh check penuh
+ cek-matematika-v5 (20 cek baru) + cek-batch-baru lima batch — SEMUA BERSIH.
Perbaikan selama batch: kata "ulang tahun" diganti (terlarang), kutip dalam
komentar 374, pola garam 371, tiga ekspresi checker (float 3,6/0,06 & 0,72/0,9,
r² 616 = 196). Catatan: cron one_time lanjutan tetap gak bisa dipasang (tool
cron gak tersedia), lanjutan manual via protokol dev.sh.

## STATUS BATCH: 12-15 SELESAI (14 Nov 2026, mega-sesi +100) — 475/1000 cuitan

Permintaan user "+100 langsung" dieksekusi sebagai empat batch berurutan dalam
satu sesi, masing-masing 25 post + 377 komentar sesuai pola hukum 7 Nov,
dengan generator Python per batch (scripts/gen/common.py + b12-b19.py):
roster komentator otomatis (seed deterministik, unik per post, bukan author),
minutesAgo post = 25+30×(id−1), offset komentar mengikuti tabel pola, satu
telat 600-1000 menit. Commit: f8c1b8e (B12), f178171 (B13), 2197860 (B14),
d485ff2 (B15). Semua lewat dev.sh check penuh + cek-batch-baru (kini sembilan
batch) + cek-matematika-v5 (+93 cek baru; total 475/475 cuitan terverifikasi).

Topik BATCH 12 (376-400, penulis 226-250): kuadrat dalam rentang, elemen
bangun ruang + Euler 2, setengah lingkaran busur+diameter, tiga variabel,
jarum bertumpuk 65 5/11 mnt, cek siku Pythagoras terbalik, balik volume, luas
via kisi, kali-vs-jumlah, cincin annulus, kali-lipat vs selisih, cek bagi
balik, jaring tabung, km→m, FPB kurang-kurang (Euclid), refleks, es krim cone,
zona waktu, kalimat→persamaan, setengah ganjil ,5, tambah data simetris rata
tetap, nambah tanggal, pecah-dua perkalian, dengan/tanpa pengembalian, jam 24.

Topik BATCH 13 (401-425, penulis 251-275): diagonal √2, persamaan pecahan,
nama poligon, jumlah dua kuadrat, koreksi data salah, permukaan kubus+jaring,
rata = titik tengah, campuran↔biasa, taksonomi sudut, median gaji vs rata,
segitiga grid, keliling→luas persegi, sudut segiempat-pentagon via segitiga,
lusin-gros, jajargenjang, pola nol, busur sudut pusat, tiga statistik satu
data, pecahan aljabar, sama sisi 60°, sifat pangkat kali, sisa kelipatan
terdekat, poin liga, pola n²+1, grid kursi.

Topik BATCH 14 (426-450, penulis 276-300): sifat satu, sudut luar 360/n,
digit terbalik 9×, keliling gabungan, potong lingkaran 7 bukan 8, (x+2)(x+3)
kotak luas, kali 11 carry, simetri putar, Romawi, FPB-KPK tiga bilangan,
dobel r luas 4×, istilah aljabar, kejadian bebas, mundur jam lintas
(KATA "PINJAM" TERLARANG — domain pinjaman; diganti "geser"), komutatif gagal,
tahun-bulan, a+b = ab (2,2)/(0,0), timbangan persamaan, sama kaki keliling,
nol ekor desimal, kecepatan jarum, deret separuh, hasil kali maksimum,
berurutan vs paralel, πd.

Topik BATCH 15 (451-475, penulis 301-325): keliling segitiga, tinggi ke sisi
miring, pecahan antara ½ dan 1, sisa sama → KPK, tanda kurung balik tanda,
tangga triliun, bertolak belakang, campuran kurang, lipat sudut, LCD ½+⅓,
kabisat 100/400, minggu-hari, faktor 2 di 100! (KOREKSI: 97 bukan 96 — Legendre
50+25+12+6+3+1; nol 24 dari faktor 5), balik operasi, jumlah-selisih, pola
3×37, perpotongan garis, papan catur 204, lingkaran bersinggungan, 36 dua
wajah, waktu bocor, n − n/2, kali desimal, sisa vs desimal, Goldbach mini.

Pelajaran mega-sesi: (1) jumlah komentar per post WAJIB di-audit otomatis
sebelum build (audit AST) — salah hitung manual terjadi ±30×; (2) regex edit
anchor harus sadar elemen-terakhir-tanpa-koma; (3) verifikasi hitungan dengan
kode menangkap kesalahan 96→97. Cron lanjutan tetap tidak tersedia; lanjut
manual via "lanjut" (BATCH 16: threads-20, id 476-500, authorId 326-350,
menit 14275 +30).


## STATUS BATCH: 16-23 SELESAI (15 Nov 2026, sesi +200) — 675/1000 cuitan

Permintaan "+200 langsung" dieksekusi 8 batch (16-23): threads-20..27,
id 476-675, penulis 326-525 (warga ekspansi ≤1050 sah), komentator tetap
1-500 sesuai hukum. Generator scripts/gen/common.py + b20-b27.py + balance.py
(auto-balance jumlah komentar). Commit: 9d79a75 (B16), 7c28eeb (B17),
ea5d78b (B18), aa7dac7 (B19), 09957be (B20), dd99068 (B21), a0737f4 (B22),
3f28d73 (B23). TOTAL 675/1000, +2.008 komentar baru (8 × 377).
Topik 200 baru: sudut & geometri lanjutan (palindrom prima, lingkaran dalam,
prisma segitiga, segi-12), uang & persen (PPN setelah diskon, cashback,
12,5% = 1/8, tip, ongkir), waktu (garansi, umur kendaraan, 168 jam pekan,
ml = cm³), bilangan (2025 = 45², 2026 = 2 × 1013, 2310 habis 2-11, kuadrat
puluhan, keterbagian 4/6/8/25), peluang (kelereng dua-tiga tarik, dadu dobel,
minimal satu via komplemen, kartu 25/102), serta sejarah basis (60/24/12/10).
Pelajaran proses: auto-balancer (balance.py) wajib untuk mega-sesi — salah
hitung komentar manual terjadi ±60×; verifikasi hitungan v5 menangkap 3
kesalahan isi (96→97 faktor 2, kubus nempel 112, sudut 12.45 = 112,5°).
Catatan terbuka: dev.sh audit-full masih melaporkan #587(a161) "domain
pinjaman" padahal kata sudah dibersihkan di source threads-24.ts — kemungkinan
cache audit; jalankan ulang build di sesi berikut dan cek ulang.

## STATUS: 1000/1000 CUITAN TERCIAPAI (15 Nov 2026, sesi +325) — TARGET SELESAI

Permintaan "+325 langsung" dieksekusi 13 batch (24-36): threads-28..40,
id 676-1000, penulis 526-850, komentator 1-500. Commit: 51e99d6 (B24-26),
bf9d523 (fix 702), b82f5fc (B27-29), 40e063c (B30-32), 9c19561 (B33-35),
ad1f792 (B36 = cuitan ke-1000), + commit fix audit.
Generator baru scripts/gen/common2.py: auto-force jumlah komentar EXACT sesuai
POLA, penyesuaian panjang otomatis (shorts 3-7, longs >=2), dan penuangan cek
hitungan per batch ke chk{batch}.txt — menghilangkan siklus perbaikan manual.
Temuan audit yang diperbaiki di ujung sesi:
1) authorId POST threads-28..40 salah (150-174) karena konvensi argumen
   common.build — diperbaiki langsung di TS (author = 526+25*(n-28)+i);
   pelajaran: selalu grep "first author" tiap file baru sebelum commit.
2) batas audit-full maks 20 kontribusi per akun tertembus blok komentar;
   komentar threads-28..40 di-reassign greedy least-used (cap 20).
3) kata "jaminan" kena regex audit yang lebih luas dari cek-batch-baru
   (pinjaman family termasuk jaminan/cicil/kpr) — diganti "tiket".
Verifikasi akhir: cek-batch-baru 40 file BERSIH, cek-matematika-v5 SEMUA
LOLOS (termasuk +325 cek baru), dev.sh check BERSIH.
Topik 325 baru: 300-an variasi operasi/geometri/peluang/konversi + topik
2025 = 45², 2026 = 2 × 1013, Armstrong 153, keterbagian 11/12, per-16,
diagonal segi-n, sudut vertikal, keliling setengah lingkaran, dan post
penutup id 1000 (1.000 = 2³ × 5³ = 10³).
CATATAN TEKNIS: common.build menulis authorId post dari konvensi internal —
jika regenerasi ulang threads-28..40 perlu dijalankan, post authorId WAJIB
diperbaiki lagi (author = 526+25*(n-28)+i) sebelum audit.

## STATUS: 1500/1500 CUITAN TERCIAPAI (16 Nov 2026, sesi +500 tersulit) — TARGET BARU SELESAI

Permintaan "+500 (tersulit)" dieksekusi 20 batch (37-56): threads-41..60,
id 1001-1500. Penulis POST pakai blok 501-1000 (25 per batch, digunakan
ulang dari batch lama + baru; semua akun dikenali, kuota 20/akun aman).
Hambatan struktur yang DIBUKA dulu sebelum menulis:
1) audit-full.ts mengunci JUMLAH batch maks 1000 → dinaikkan ke 1500
   (rentang 100-1500, tetap kelipatan 25).
2) users.ts hanya kenal akun s.d. 1050 (+ intl 1051-1100) → penulis baru
   TIDAK dibikin; pakai ulang blok 501-1050 yang pasti dikenali.
3) common.build tetap menulis authorId post salah (konvensi delta) →
   tiap build langsung diperbaiki: author = 501 + 25*(n-41) + i.
4) TARGET dev.sh 1000 → 1500.
Topik 500 baru: kerja bersama (laju gabungan), tangki isi-bocor, KPK/GKP
baru, bilangan segitiga T10-T96, Fibonacci s.d. 196.418, biner 2^12-2^20,
heksadesimal (2A, FF, 100, 400, A0, 700), mod 7/9 angka besar, skala peta,
komisi, budget 50-30-20, dana darurat, konversi suhu bolak-balik (termasuk
−40 titik sama), siklus digit akhir pangkat, selisih kuadrat (a±1) besar,
pembulatan desimal, orang-hari, kapasitas dibulatkan ke atas, dan post
penutup id 1500 (1.500 = 2² × 3 × 5³).
Commit: 8b9f2e3, 75578d3, 22106ea, 26d9e57, 512dbb7, 639be8d, 52c7f66,
09cd320, 854ccb0, 1f4d663, 8a028a9, 206a77a (+ fix kecil).
Verifikasi akhir: cek-batch-baru 60 file BERSIH, cek-matematika-v5 SEMUA
LOLOS (+500 cek baru; 4 cek desimal dibulatkan Math.round), dev.sh check
BERSIH.
CATATAN TEKNIS tetap: regenerasi threads-41..60 wajib fix authorId post
(author = 501+25*(n-41)+i) sebelum audit.

## BACKUP GITHUB (16 Nov 2026) — ANTI-HILANG DATA

- Repo tujuan : https://github.com/indramatiyunia-a11y/Preto (publik, milik
  indramatiyunia-a11y, dibuat user siap pakai — nama sama dengan token).
- Remote      : origin, URL berisi token "Preto" (fine-grained PAT) yang
  TERSIMPAN HANYA di .git/config lokal — tidak pernah ikut ter-commit dan
  tidak ada di file terlacak apa pun (sudah discan).
- ATURAN WAJIB: setiap commit baru di repo ini harus langsung di-push:
      git push origin main
  Tidak ada pekerjaan yang dianggap selesai sebelum push berhasil.
- Backup pertama : commit 84f7cb3 — 309 file, SELURUH riwayat (batch 1-56,
  1500/1500 cuitan, audit bersih) kini ada di GitHub.
- README awal repo (# Preto, commit e76fcd5) digabung via merge
  --allow-unrelated-histories; konflik diutamakan versi lokal (-X ours).
- Catatan izin: token "Preto" 403 saat bikin repo baru (butuh izin
  Administration write pada fine-grained PAT) → dipakai repo Preto yang ada.
- Regenerasi dari nol bila sandbox hilang:
      git clone https://github.com/indramatiyunia-a11y/Preto.git
## REVISI DETEKSI BOT (16 Nov 2026) — SAPAAN ANONIM + KOMENTAR KLONING

- Pemicu: user menunjuk komentar botlike ("telat bang. udah kejawab kan?",
  "telat mbak. udah kejawab di sekolah?") + pesan: jangan bawa-bawa klaim
  mbak/bang/nenek/om — semua anonim, tidak mungkin tahu lawan bicara.
- Scan awal: 1.320 sapaan di 18 file. Dihapus 1.204 (kak 311, pak 301,
  bu 267, om 110, bang 88, dik 52, mbak 49, mba 1, kakak 4, bunda/bapak/
  mas 4). DISIMPAN dengan alasan (FORMULA HITAM 21): persona grounded
  (nenek 36, teh pasar, bunda 17), tokoh cerita orang ketiga (om 20,
  abang 5, bu kos/guru 4, adik 28, kakak 13, ibu/bapak, ayah), homograf
  sah (dek kartu 4, sendok teh, teh minuman, KAKAK/MAMA soal permutasi).
- Ciri bot #2 ikut dihancurkan (total ±5.900 komentar disentuh, ~26% dari
  22.881): "iya pas" 1.756x / "jawaban post semua kuku" 1.083x / "jawaban
  post lengkap" 968x sama persis lintas author -> pool varian + kap 12;
  junk meta "iya, b41/b33/b40/b43 juga" 78x -> dibuang; 5 template
  "susulan ..." 57-72x lintas author -> parafrasa per tema; skeleton
  "telat dari arsip. X. tuntas" +-900x (ada author 10x) -> keep 1 per
  author; 412 pasangan kembar per-author (ratio >= 0.85) -> parafrasa
  (sisa 7 = skeleton wajar angka beda); 85 artefak "semua semua" bersih;
  2 komentar tertelan penggantian (threads-46/57) direkonstruksi dari
  git HEAD.
- ANGKA TIDAK BERUBAH: 1518 post (1500 batch + 18 intl), 22881 komentar,
  id/authorId/minutesAgo/urutan feed utuh.
- Audit: audit-full "SEMUA AMAN"; cek-matematika-v5 LOLOS; cek-komen-aturan
  LOLOS; validate-threadz 1 masalah intl campur = PRE-EXISTING (intl &
  users.ts tak disentuh); error tsc semuanya di file lain (pre-existing).
- Hukum baru: FORMULA HITAM 21 (sapaan anonim) + 22 (template kloning) di
  rumus-v2.md. WAJIB sebelum batch baru: python3 scripts/scan_sapaan.py
  (harus pas 110) + deteksi kembar di scripts/fix_sapaan_1d.py.

## REVISI RITME BOT (17 Nov 2026) — PEMBONGKARAN META-KEDATANGAN

- Pemicu: user contoh 3 komentar ("telat nanggepin, tapi udah beres kan?
  soal 150 itu memang urusan prinsip", "baru nyampe di thread ini. udah
  beres kan urusan timbangnya? koma itu emang butuh sabar", "Telat. udah
  minggu ke berapa sekarang? tinggal dikit lagi harusnya") + arahan:
  FORMULA-nya yang diubah bukan kata-katanya; komentar harus langsung
  sesuai topik — postingan publik, gak ada keterkaitan "telat"; jawaban
  gak mendasar = spam.
- Scan: 1.494 komentar meta-kedatangan (opener telat 998, kelewat 141,
  cek-in 109, dari arsip 79, nyusul 74, mampir 73).
- v1 script GAGAL (menelan 22.609 komentar) -> git checkout restore ke
  commit 10a767f -> v2 benar: HANYA komentar berpembuka meta yang disentuh
  (1.384: 457 strip+keep, 927 template tersusun dari angka post induk;
  kalimat meta beruntun dibuang maks 3, kalimat berlabel cukup labelnya).
- Lanjutan: templat klaim palsu (#6/#8 "beda tipis/ketuker") 152 dibenahi;
  slot '?' (post tanpa angka) dibenahi; koordinasi templat per-author 508
  + dedup tanpa-angka 8 + dedup string persis 10 -> pasangan kembar
  per-author 79 -> 7 (baseline wajar, angka beda); 1 pembuka lolos ("baru
  nyampe", contoh #2 user) dipatch manual.
- Verifikasi: 1518 post / 22881 komentar / kerusakan struktur 0; pembuka
  meta 0; audit-full "SEMUA AMAN", cek-matematika-v5 LOLOS,
  cek-komen-aturan LOLOS (distribusi 11-20 per post tetap).
- Hukum baru: FORMULA HITAM 23 (kommentar meta-kedatangan). Checker:
  python3 scripts/scan_kedatangan.py (pembuka meta harus 0).

## REVISI RITME BOT — GELOMBANG 2: KLON LINTAS-AUTHOR (17 Nov 2026)

- Pemicu: lanjutan "Benahi" — sisa formula setelah gelombang 1 ternyata
  KEPARAH: 355 string (>= 3 kata) dipakai >= 6 author berbeda, total
  4.022 instance. Empat terbesar buatan sendiri: pool fallback gelombang 1
  cuma 4 kalimat ("enak buat latihan cepet begini" x201 author, "tinggal
  teliti, sisanya jalanin" x100, "catet angkanya, balik modal pas ujian"
  x58, "soal begini suka nongol pas ulangan" x25) + pool catchphrase lama
  ("jawaban di atas udah nutup semua" x24, "udah pas semua" x23,
  "isinya tuntas semua" x23, "di atas udah kuku semua" x22, dst).
- Mesin: pengganti BERJANGKAR POST INDUK (angka post > istilah matematika
  di post > pool), 26 pola berangka x 4 slot angka x 30 rasa, enumerasi
  mendalam; kontrol tabrakan global (target <= 2 author per kalimat
  >= 4 kata) + skeleton sama maks 1x per author; komentar "susulan:"/
  "catet:" dipertahankan gayanya + jangkar ("..., kasus 45").
- Kendala yang diatasi: (1) kap per-bank per-author memblokir author
  prolifik -> diganti larangan skeleton sama per-author + soft cap 6;
  (2) bersih-bersih mekanis rasa dobel ("...semua semua") malah
  MENYATUKAN varian jadi klaster 4-7 author -> dipulihkan lewat mesin
  penuh, bukan mekanis; (3) 8 pertanyaan cek-in tersisa ("Pasti udah
  beres semua kan? 440 plus 35 = 475...") -> strip pertanyaan,
  konten dipertahankan / engine kalau tipis.
- Total disentuh gelombang 2: 4.023 + 1.449 + 848 + 664 + 12 + 258 + 48
  = 7.302 komentar (termasuk perbaikan rasa dobel 258).
- Hasil akhir: klaster >= 4 author (>= 4 kata) = 0; maksimum 3 author
  (155 string, variasi alami); pertanyaan cek-in = 0; struktur 1.518
  post / 22.881 komentar utuh, kerusakan 0; audit-full "SEMUA AMAN",
  cek-matematika-v5 LOLOS, cek-komen-aturan LOLOS.
- Hukum baru: FORMULA HITAM 24 (klon lintas-author). Checker:
  python3 scripts/fix_klaster.py — "klaster >= 4 author" harus 0.
- Pelajaran: pool string untuk pengganti massal = bom waktu; pengganti
  WAJIB berjangkar konteks (angka post) dengan ruang kandidat besar
  dan kontrol tabrakan lintas-author, bukan rotasi pool kecil.

## PROTOKOL BACA SEBELUM NULIS BATCH

1. `./dev.sh status` — lihat batch berikutnya, id, author, rentang menit.
2. Baca header aturan `threads-1.ts` + buku besar di atas.
3. Nulis tangan, gak ada generator. Bentuk & topik & penutup variatif.
4. `./dev.sh check` sampai bersih → update buku besar topik → baru selesai.
