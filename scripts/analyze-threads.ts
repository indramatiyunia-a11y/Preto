// Analisis data: distribusi komentar, keberagaman topik, kepatuhan aturan
import { THREADS } from "../src/lib/threadz/threads"
import { USERS, WARGA_LALU_LALANG } from "../src/lib/threadz/data/users"

const total = THREADS.length
const withComments = THREADS.filter((t) => t.comments.length > 0).length
const counts = THREADS.map((t) => t.comments.length)
const max = Math.max(...counts)
const maxThreads = THREADS.filter((t) => t.comments.length === max).length
const zero = counts.filter((c) => c === 0).length
const avg = counts.reduce((a, b) => a + b, 0) / total
const totalComments = counts.reduce((a, b) => a + b, 0)

// penulis komentar unik
const commentAuthors = new Set<number>()
THREADS.forEach((t) => t.comments.forEach((c) => commentAuthors.add(c.authorId)))

// penulis thread unik
const threadAuthors = new Set(THREADS.map((t) => t.authorId))

// topik judi/slot — harus sedikit
const judiWords = /judi|slot|jackpot|bet|togel|koin|jack pot/i
const judiPosts = THREADS.filter((t) => judiWords.test(t.content))

// cek struktur template: 3+ baris yang diawali angka + "X, Y, N" list
const listTemplate = THREADS.filter((t) => {
  const lines = t.content.split("\n").filter((l) => l.trim())
  const numLines = lines.filter((l) => /^\s*\d+\s+\w+/.test(l.trim()))
  return numLines.length >= 3
})

// kata "gue ajarin" / klaim pengajar
const identityClaims = THREADS.filter(
  (t) => /ajarin|murid gue|siswa gue|waktu ngajar|yang gue ajar/i.test(t.content)
)

// panjang konten
const lens = THREADS.map((t) => t.content.length)
const avgLen = Math.round(lens.reduce((a, b) => a + b, 0) / total)
const short = lens.filter((l) => l < 80).length
const long = lens.filter((l) => l > 400).length

console.log("=== RINGKASAN DATA ===")
console.log("total thread:", total, "| dengan komentar:", withComments, "| tanpa komentar:", zero)
console.log("komentar total:", totalComments, "| rata2:", avg.toFixed(1), "| max:", max, `(ada ${maxThreads} thread)`)
console.log("penulis thread unik:", threadAuthors.size, "| penulis komentar unik:", commentAuthors.size)
console.log("warga utama:", USERS.length, "| warga lalu-lalang:", WARGA_LALU_LALANG.length)
console.log("post topik judi/slot:", judiPosts.length, "-> id:", judiPosts.map((t) => t.id).join(", "))
console.log("post terindikasi template angka-list:", listTemplate.map((t) => t.id).join(", ") || "tidak ada")
console.log("post klaim identitas pengajar:", identityClaims.map((t) => t.id).join(", ") || "tidak ada")
console.log("panjang rata2:", avgLen, "| pendek(<80):", short, "| panjang(>400):", long)

// distribusi menit
const mins = THREADS.map((t) => t.minutesAgo)
console.log("rentang minutesAgo:", Math.min(...mins), "-", Math.max(...mins))
const dupMin = mins.filter((m, i) => mins.indexOf(m) !== i)
console.log("minutesAgo duplikat:", dupMin.length)

// cek nama warga unik
const names = new Set([...USERS, ...WARGA_LALU_LALANG].map((u) => u.name))
console.log("nama unik:", names.size, "dari", USERS.length + WARGA_LALU_LALANG.length)
