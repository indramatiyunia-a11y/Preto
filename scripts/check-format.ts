// cek distribusi mode format & contoh hasil akhir
import { THREADS } from "../src/lib/threadz/threads"

const stats = { flat: 0, lines: 0, gaptail: 0, keep: 0 }
THREADS.forEach((t) => {
  const g2 = (t.content.match(/\n[ \t]*\n/g) ?? []).length
  const g1 = (t.content.match(/\n/g) ?? []).length
  if (g2 === 0 && g1 === 0) stats.flat++
  else if (g2 === 0 && g1 > 0) stats.lines++
  else if (g2 === 1 && g1 === 1) stats.gaptail++
  else stats.keep++
})
console.log("distribusi akhir (flat/lines/gaptail/keep):", JSON.stringify(stats))

// sampel: tampilkan dengan penanda baris
const sampel = [1, 14, 35, 38, 78, 96, 97]
for (const id of sampel) {
  const t = THREADS.find((x) => x.id === id)
  if (!t) continue
  console.log(`\n=== #${id} ===`)
  console.log(t.content.replace(/\n/g, "⏎"))
}

// tidak ada lagi "3 paragraf rapi"
const rapi3 = THREADS.filter((t) => (t.content.match(/\n[ \t]*\n/g) ?? []).length >= 2)
console.log("\npost dengan 2+ baris kosong (cerita panjang):", rapi3.map((t) => t.id).join(", "))
