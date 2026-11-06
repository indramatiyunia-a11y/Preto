import { THREADS } from "../src/lib/threadz/data/threads-1"
export {}

const all = [
  ...require("../src/lib/threadz/threads").THREADS,
] as Array<{ id: number; authorId: number; minutesAgo: number; content: string; comments: Array<{ authorId: number; minutesAgo: number; content: string }> }>

const ids = all.map((t) => t.id)
console.log("threads:", all.length, "| unique ids:", new Set(ids).size, "| min-max id:", Math.min(...ids), "-", Math.max(...ids))

const counts = all.map((t) => t.comments.length)
console.log("total comments:", counts.reduce((a, b) => a + b, 0))
console.log("min:", Math.min(...counts), "max:", Math.max(...counts))
console.log("threads with exactly 10:", counts.filter((c) => c === 10).length)
console.log("threads with 0:", counts.filter((c) => c === 0).length)
console.log("distribution:", JSON.stringify(counts))

const invalid = all.filter((t) => t.comments.some((c) => c.authorId < 1 || c.authorId > 1050))
console.log("komentar dengan authorId invalid:", invalid.length)

const emptyContent = all.filter((t) => !t.content || t.content.length < 15)
console.log("post terlalu pendek/kosong:", emptyContent.length)

// variasi pembuka: hitung kata pertama yang berulang
const firstWords = all.map((t) => t.content.trim().split(/\s+/)[0].toLowerCase())
const freq: Record<string, number> = {}
for (const w of firstWords) freq[w] = (freq[w] ?? 0) + 1
const repeated = Object.entries(freq).filter(([, n]) => n >= 3).sort((a, b) => b[1] - a[1])
console.log("kata pembuka dipakai >=3x:", JSON.stringify(repeated))

// panjang post: min/max/rata2
const lens = all.map((t) => t.content.length)
console.log("panjang post: min", Math.min(...lens), "| max", Math.max(...lens), "| rata2", Math.round(lens.reduce((a, b) => a + b, 0) / lens.length))
