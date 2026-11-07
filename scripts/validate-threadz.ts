// Validasi isi dataset Threadz.
// Jalankan: bun /home/z/my-project/scripts/validate-threadz.ts
import { THREADS } from "../src/lib/threadz/threads"
import { getUser } from "../src/lib/threadz/data/users"

function kampung(id: number): string {
  if (id <= 50) return "UTAMA"
  if (id <= 110) return "ibu"
  if (id <= 170) return "muda"
  if (id <= 205) return "bapak"
  if (id <= 230) return "mhs"
  if (id <= 255) return "kerja"
  if (id <= 300) return "tenang"
  return "campur"
}

// hitung pasangan kutipan '...' atau "..." di satu teks
function pasanganKutipan(t: string): number {
  const m = t.match(/'[^']+'|"[^"]+"/g)
  return m ? m.length : 0
}

let masalah = 0
const semuaKomentar: string[] = []

for (const t of THREADS) {
  const penulis = getUser(t.authorId).name
  const seen = new Set<number>()
  if (!t.content.trim()) {
    console.log(`POST ${t.id}: konten kosong!`)
    masalah++
  }
  // hukum baru 7 Nov 2026: tiap post WAJIB 11-20 komentar, jumlah bervariasi
  if (t.comments.length < 11 || t.comments.length > 20) {
    console.log(`POST ${t.id}: ${t.comments.length} komentar (wajib 11-20)`)
    masalah++
  }
  const nKutip = pasanganKutipan(t.content)
  if (nKutip >= 2) {
    console.log(`POST ${t.id}: ${nKutip} pasangan kutipan (skenario?) -> ${t.content.slice(0, 80)}...`)
    masalah++
  }
  let prevMenit = Number.POSITIVE_INFINITY
  for (const c of t.comments) {
    semuaKomentar.push(c.content)
    if (c.authorId === t.authorId) {
      console.log(`POST ${t.id}: self-reply oleh ${c.authorId}`)
      masalah++
    }
    if (seen.has(c.authorId)) {
      console.log(`POST ${t.id}: komen dobel dari ${c.authorId}`)
      masalah++
    }
    seen.add(c.authorId)
    if (!c.content.trim()) {
      console.log(`POST ${t.id}: komentar kosong dari ${c.authorId}`)
      masalah++
    }
    // waktu komentar: minimal 1, lebih kecil dari post (datang setelah post)
    if (c.minutesAgo < 1 || c.minutesAgo >= t.minutesAgo) {
      console.log(`POST ${t.id} komen ${c.authorId}: waktu ${c.minutesAgo} di luar rentang`)
      masalah++
    }
    // urutan array = urutan kedatangan: minutesAgo menurun ketat
    if (c.minutesAgo >= prevMenit) {
      console.log(`POST ${t.id} komen ${c.authorId}: urutan gak menurun (${c.minutesAgo})`)
      masalah++
    }
    prevMenit = c.minutesAgo
  }
}

// sisa konten lama yang dilarang user
const terlarang = ["roti kismis", "saya yang mengoreksi", "nyicil bayar", "ditulis ya dik", "PIN 0", "DEBU 7"]
for (const s of THREADS) {
  for (const k of terlarang) {
    if (s.content.toLowerCase().includes(k.toLowerCase())) {
      console.log(`POST ${s.id}: masih ada terlarang "${k}"`)
      masalah++
    }
  }
  for (const c of s.comments) {
    for (const k of terlarang) {
      if (c.content.toLowerCase().includes(k.toLowerCase())) {
        console.log(`POST ${s.id} komen ${c.authorId}: masih ada terlarang "${k}"`)
        masalah++
      }
    }
  }
}

// tabel kampung buat dicek mata
console.log("\n=== KAMPUNG KOMENTAR (post: penulis -> komen) ===")
for (const t of THREADS) {
  const koms = t.comments.map((c) => `${c.authorId}(${kampung(c.authorId)})`).join(" ")
  console.log(`${String(t.id).padStart(3)} | ${t.authorId}(${kampung(t.authorId)}) -> ${koms || "-"}`)
}

// distribusi
const jumlah = THREADS.length
let totalKomen = 0
for (const t of THREADS) totalKomen += t.comments.length
console.log(`\nTotal post: ${jumlah}, total komentar: ${totalKomen}`)
console.log(masalah === 0 ? "SEMUA CEK LOLOS" : `ADA ${masalah} MASALAH`)
