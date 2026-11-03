// Verifikasi data threads: total, distribusi komentar, max komentar
const files = ["threads-1", "threads-2", "threads-3", "threads-4"]
let all = []
for (const f of files) {
  const mod = require("/home/z/my-project/src/lib/threadz/data/" + f + ".ts")
  const key = Object.keys(mod)[0]
  all = all.concat(mod[key])
}
console.log("total threads:", all.length)
const ids = new Set(all.map((t) => t.id))
console.log("unique ids:", ids.size)
const dist = {}
let maxC = 0
let totalComments = 0
for (const t of all) {
  dist[t.comments.length] = (dist[t.comments.length] || 0) + 1
  maxC = Math.max(maxC, t.comments.length)
  totalComments += t.comments.length
}
console.log("distribusi jumlah komentar -> jumlah thread:", dist)
console.log("max komentar:", maxC, "| total komentar:", totalComments)
