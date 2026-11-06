// Cek aturan komentar (hukum baru 7 Nov 2026): tiap post 11-20 komentar,
// waktu komentar logis, tanpa self-reply / komen dobel, urutan array = urutan
// kedatangan (minutesAgo menurun ketat).
// Jalankan: bun scripts/cek-komen-aturan.ts
import { THREADS } from "../src/lib/threadz/threads"

let masalah = 0
const distribusi: Record<number, number> = {}

for (const t of THREADS) {
  const n = t.comments.length
  distribusi[n] = (distribusi[n] ?? 0) + 1
  if (n < 11 || n > 20) {
    console.log(`✗ post ${t.id}: ${n} komentar (harus 11-20)`)
    masalah++
  }
  const seen = new Set<number>()
  for (let i = 0; i < n; i++) {
    const c = t.comments[i]
    if (c.authorId === t.authorId) {
      console.log(`✗ post ${t.id} komen[${i}]: self-reply ${c.authorId}`)
      masalah++
    }
    if (seen.has(c.authorId)) {
      console.log(`✗ post ${t.id} komen[${i}]: dobel ${c.authorId}`)
      masalah++
    }
    seen.add(c.authorId)
    if (c.minutesAgo < 1 || c.minutesAgo >= t.minutesAgo) {
      console.log(`✗ post ${t.id} komen[${i}]: waktu ${c.minutesAgo} di luar (1..${t.minutesAgo - 1})`)
      masalah++
    }
    if (i > 0 && c.minutesAgo >= t.comments[i - 1].minutesAgo) {
      console.log(`✗ post ${t.id} komen[${i}]: urutan gak menurun (${c.minutesAgo} >= ${t.comments[i - 1].minutesAgo})`)
      masalah++
    }
  }
}

// FORMULA HITAM 6 — jumlah komentar jangan seragam: satu angka maks 30% post
for (const [n, k] of Object.entries(distribusi)) {
  if (k > 0.3 * THREADS.length) {
    console.log(`✗ distribusi: ${k} post punya ${n} komentar (>30%)`)
    masalah++
  }
}

console.log(`\nDistribusi jumlah komentar: ${JSON.stringify(distribusi)}`)
console.log(masalah === 0 ? "ATURAN KOMENTAR LOLOS" : `ADA ${masalah} MASALAH`)
if (masalah > 0) process.exitCode = 1
