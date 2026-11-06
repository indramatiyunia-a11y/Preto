// Deteksi pola "karya kecil sastra" — sebab musabab keempat (Nov 2026)
// Skor per post + per komentar. Skor tinggi = kandidat rombak.
import { THREADS } from "../src/lib/threadz/threads"

type Item = { file: string; id: number; jenis: "post" | "komen"; authorId: number; text: string; extra?: string }

const items: Item[] = []
THREADS.forEach((t) => {
  items.push({ file: "feed", id: t.id, jenis: "post", authorId: t.authorId, text: t.content })
  t.comments?.forEach((c) => {
    items.push({ file: "feed", id: t.id, jenis: "komen", authorId: c.authorId, text: c.content })
  })
})

// sapaan-bukti (称呼开关): post berbuka dengan/lalu memasang kata sapaan generik
const SAPAAN = /\b(bu|bang|om|teh|kak|pak|bre|mas|mbak)\b/gi
// ekor lembut (klimaks tertahan yang manis)
const EKOR = /(semoga\s+\w+|doain\s+|besok\s+(coba|lagi)|semangat\s+(kak|bu|ya)|hati-hati|tidak ada yang (berlebihan|terjadi)|kayak (gak )?ada apa-apa|tanpa pamit|cuma (pengen|inget)|terima kasih (dua|banyak) kali|masih bagus|jalan lagi|buka lagi)/gi
// narasi pengamat lembut: pola "ada X yang Y" / "satu orang bilang"
const PENGAMAT = /(ada (bocah|om|bu|pasien|pelanggan|penumpang|orang|ibu|tetangga)|satu (orang|pelanggan|penumpang)|yang mampir|yang kemarin|tadi pagi|tadi siang|kemarin)/gi
// pekerjaan sebagai panggung: istilah profesi di 40% teks awal
const PROFESI = /(pasien|pelanggan|penumpang|murid|siswa|nasabah|pembeli|ruangan|koridor|kamar \d|pos|warung|kios|lapak|shift|rapat|kantor)/gi
// puitis penutup
const PUISI = /(tanpa pamit| kayak gak ada apa-apa| yang bisa melanjutkan hari| hanya karena| hanya ponsel| masih sedang| masih gelap| lelah)/gi

function skor(text: string): { n: number; kenapa: string[] } {
  const kenapa: string[] = []
  let n = 0
  const sapa = text.match(SAPAAN)
  if (sapa && sapa.length >= 2) { n += 2; kenapa.push(`sapaan x${sapa.length}`) }
  else if (sapa && sapa.length === 1) { n += 1; kenapa.push("sapaan x1") }
  if (EKOR.test(text)) { n += 3; kenapa.push("ekor lembut") }
  if (PENGAMAT.test(text)) { n += 2; kenapa.push("pengamat manis") }
  const prof = text.match(PROFESI)
  if (prof && prof.length >= 2) { n += 2; kenapa.push(`panggung kerja x${prof.length}`) }
  if (PUISI.test(text)) { n += 2; kenapa.push("puisi penutup") }
  // baris pendek beruntun = fragmen sastra
  const lines = text.split("\n").filter(Boolean)
  const pendek = lines.filter((l) => l.length < 40).length
  if (lines.length >= 3 && pendek >= 3) { n += 2; kenapa.push("fragmen sastra") }
  return { n, kenapa }
}

const hasil = items.map((it) => ({ ...it, ...skor(it.text) }))
const post = hasil.filter((h) => h.jenis === "post" && h.n >= 5).sort((a, b) => b.n - a.n)
const komen = hasil.filter((h) => h.jenis === "komen" && h.n >= 4).sort((a, b) => b.n - a.n)

console.log("=== POST SKOR >= 5 (kandidat rombak) ===")
post.forEach((p) => console.log(`${p.file} id${p.id} (a${p.authorId}) skor=${p.n} [${p.kenapa.join(", ")}] :: ${p.text.slice(0, 60).replace(/\n/g, " ")}`))
console.log(`total: ${post.length}`)
console.log("\n=== KOMEN SKOR >= 4 ===")
komen.slice(0, 25).forEach((k) => console.log(`${k.file} id${k.id} c(a${k.authorId}) skor=${k.n} [${k.kenapa.join(", ")}] :: ${k.text.slice(0, 55)}`))
console.log(`total: ${komen.length}`)
