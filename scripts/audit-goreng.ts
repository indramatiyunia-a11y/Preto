// Audit cepat "goreng reputasi": cari cuitan yang (a) gak ada angka sama sekali
// (jauh dari aspek matematika) atau (b) ada pola pengulangan segera
// "X, X, X" (2x+ frase sama dipisah koma/dalam satu kalimat) yang kerasa bot.
import { THREADS } from "../src/lib/threadz/threads"

const noDigit: { id: number; author: number; snippet: string }[] = []
const repPat: { id: number; author: number; pat: string; snippet: string }[] = []

for (const t of THREADS) {
  const flat = t.content.replace(/\s+/g, " ").trim()
  if (!/\d/.test(t.content)) {
    noDigit.push({ id: t.id, author: t.authorId, snippet: flat.slice(0, 110) })
  }
  // pola pengulangan segera: kata (2+ char, bukan stopword) muncul >=3 kali
  // berturut-turut dipisah koma/spasi: "rantai kendor, rantai kendor, rantai kendor"
  const m = flat.match(/\b([A-Za-z0-9]+\s+[A-Za-z0-9]+)(,\s*\1){1,}\b/i)
  if (m) {
    repPat.push({ id: t.id, author: t.authorId, pat: m[0].slice(0, 80), snippet: flat.slice(0, 90) })
  }
  // frasa 1 kata diulang 3x berturut2: "kendor, kendor, kendor"
  const m1 = flat.match(/\b([A-Za-z0-9]{4,})(,\s*\1){2,}\b/i)
  if (m1 && !m) {
    repPat.push({ id: t.id, author: t.authorId, pat: m1[0].slice(0, 80), snippet: flat.slice(0, 90) })
  }
}

console.log("== CIUTAN TANPA ANGKA SAMA SEKALI ==")
for (const n of noDigit) console.log(`  id ${n.id} (author ${n.author}): ${n.snippet}`)
console.log(`  total: ${noDigit.length}`)

console.log("\n== POLA PENGULANGAN SEGERA (bot-like) ==")
for (const r of repPat) console.log(`  id ${r.id} (author ${r.author}): [${r.pat}] :: ${r.snippet}`)
console.log(`  total: ${repPat.length}`)

// distribusi rasio: post yang punya >=2 angka = math-core
let mathCore = 0
for (const t of THREADS) {
  const nums = t.content.match(/\d+([.,]\d+)?/g) || []
  if (nums.length >= 2) mathCore++
}
console.log(`\nmath-core (>=2 angka): ${mathCore}/${THREADS.length} = ${((mathCore / THREADS.length) * 100).toFixed(1)}%`)
