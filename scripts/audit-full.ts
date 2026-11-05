// Audit menyeluruh setelah rewrite: topik terlarang, struktur template,
// konsistensi data, dan relevansi kampung komentar.
import { THREADS } from "../src/lib/threadz/threads"
import { USERS, WARGA_LALU_LALANG, getUser } from "../src/lib/threadz/data/users"
import type { ThreadzThread } from "../src/lib/threadz/types"

const gagal: string[] = []
const tambah = (s: string) => gagal.push(s)

// 1. jumlah & keunikan — campaign-aware: basis 100, nambah per 25, maks 1000
const JUMLAH = THREADS.length
if (JUMLAH < 100 || JUMLAH % 25 !== 0 || JUMLAH > 1000)
  tambah(`jumlah post: ${JUMLAH}, harus kelipatan 25 di rentang 100-1000`)
const ids = new Set(THREADS.map((t) => t.id))
if (ids.size !== JUMLAH) tambah("ada post id kembar")
const minId = Math.min(...ids)
const maxId = Math.max(...ids)
if (minId !== 1 || maxId !== JUMLAH) tambah(`rentang id bocor: min ${minId}, max ${maxId}, harus 1-${JUMLAH}`)

// 2. topik terlarang (lagu & ultah — dilarang keras)
const laguUltah =
  /\b(lagu|lagunya|dangdut|pop ?(punk|indonesia)?|konser|musik|playlist|spotify|ultah|ulang ?tahun|kue ?ulang|tiup ?lilin|kado|birthday|karaoke|vocalis|band ?(favorit|indo)?)\b/i
const larangLaguUltah = /\b(lagu|dangdut|konser|musik|spotify|ultah|ulang ?tahun|kue ?ulang|tiup ?lilin|kado|birthday|karaoke)\b/i

// 3. domain pinjaman & brand
const pinjaman = /\b(pinjam(an)?|pinjol|jaminan|bunga ?(?:persen|%)|cicil(?:an)? ?(?:poin|asap)|kpr)\b/i
const brand =
  /\b(indomaret|alfamart|gojek|gopay|grab|tokopedia|tokped|shopee|ovo|dana ?app|linkaja|mobile ?legends|ml ?bb|pubg|free ?fire|facebook|instagram|tiktok|whatsapp|telegram|spotify|netflix|youtube|telkomsel|indosat|smartfren|xl ?axiata|bri|bca|bni|mandiri|indomie|aqua|sampoerna|marlboro|sampoerna|vespa|honda|yamaha|suzuki|toyota|avanza|innova|kopiko|torabika|luwak ?white|electrolux|panasonic|sharp ?(tv|kulkas))\b/i

// 4. struktur template yang dilarang
const daftarAngka = /(^|\n)\s*\d+[\.\)]\s+/gm
const gueCheck = /gue check|gue cek \d|hasil:\s*deb/i

let totalKomen = 0
let maxKomen = 0
const dist = new Map<number, number>()

for (const t of THREADS as ThreadzThread[]) {
  const tag = `#${t.id}(a${t.authorId})`
  // isi
  if (t.content.length > 1000) tambah(`${tag} konten ${t.content.length} > 1000 char`)
  if (t.minutesAgo <= 0) tambah(`${tag} minutesAgo ${t.minutesAgo}`)
  if (t.shares < 0) tambah(`${tag} shares negatif`)
  if (larangLaguUltah.test(t.content)) tambah(`${tag} topik lagu/ultah: "${t.content.match(larangLaguUltah)?.[0]}"`)
  if (pinjaman.test(t.content)) tambah(`${tag} domain pinjaman: "${t.content.match(pinjaman)?.[0]}"`)
  if (brand.test(t.content)) tambah(`${tag} brand: "${t.content.match(brand)?.[0]}"`)
  if (gueCheck.test(t.content)) tambah(`${tag} pola cek-angka-template`)
  if (daftarAngka.test(t.content)) tambah(`${tag} ada daftar bernomor`)
  // komentar
  totalKomen += t.comments.length
  maxKomen = Math.max(maxKomen, t.comments.length)
  dist.set(t.comments.length, (dist.get(t.comments.length) ?? 0) + 1)
  if (t.comments.length > 10) tambah(`${tag} komentar ${t.comments.length} > 10`)
  const dipakai = new Set<number>()
  let sebelumnya = t.minutesAgo
  for (const c of t.comments) {
    if (c.authorId < 1 || c.authorId > 350) tambah(`${tag} komentar authorId ${c.authorId} di luar 1-350`)
    if (dipakai.has(c.authorId)) tambah(`${tag} akun ${c.authorId} komen 2x di post yang sama`)
    dipakai.add(c.authorId)
    if (c.minutesAgo >= sebelumnya) tambah(`${tag} urutan komentar gak turun (${c.minutesAgo} >= ${sebelumnya})`)
    sebelumnya = c.minutesAgo
    if (c.minutesAgo >= t.minutesAgo) tambah(`${tag} komentar lebih baru dari post`)
    if (larangLaguUltah.test(c.content)) tambah(`${tag} komentar topik lagu/ultah`)
    if (pinjaman.test(c.content)) tambah(`${tag} komentar domain pinjaman`)
    if (brand.test(c.content)) tambah(`${tag} komentar brand: "${c.content.match(brand)?.[0]}"`)
  }
}

// 5. author: penulis 1-50, tiap penulis 2-20 post (1000/50 = 20 saat penuh)
const perAuthor = new Map<number, number>()
for (const t of THREADS) perAuthor.set(t.authorId, (perAuthor.get(t.authorId) ?? 0) + 1)
for (const [a, n] of perAuthor) {
  if (a >= 1 && a <= 50 && (n < 2 || n > 20)) tambah(`author ${a} nulis ${n} post, harus 2-20`)
  if (a > 50) tambah(`post ditulis warga ${a}`)
}
if (perAuthor.size !== 50) tambah(`penulis aktif ${perAuthor.size}, harus 50`)
// selisih post antar penulis maksimal 1 biar rotasi batch tetap adil
const maksPost = Math.max(...perAuthor.values())
const minPost = Math.min(...perAuthor.values())
if (maksPost - minPost > 1) tambah(`rotasi timpang: penulis terbanyak ${maksPost}, tersedikit ${minPost}`)

// 6. urutan waktu feed menaik
for (let i = 1; i < THREADS.length; i++) {
  if (THREADS[i].minutesAgo <= THREADS[i - 1].minutesAgo)
    tambah(`urutan waktu bengkok di #${THREADS[i].id}`)
}

// 7. semua authorId & komen authorId dikenali
for (const t of THREADS) {
  if (!getUser(t.authorId) || getUser(t.authorId).name === "akiomida00000000")
    tambah(`#${t.id} author ${t.authorId} gak dikenal`)
}

// 8. laporan sehat
console.log("post:", THREADS.length, "| komentar:", totalKomen, "| rata2:", (totalKomen / THREADS.length).toFixed(1), "| max:", maxKomen)
console.log("distribusi komentar:", [...dist.entries()].sort((a, b) => a[0] - b[0]).map(([k, v]) => `${k}:${v}`).join(" "))
console.log("USERS:", USERS.length, "| warga:", WARGA_LALU_LALANG.length, "| total akun:", USERS.length + WARGA_LALU_LALANG.length)

// 9. tab otak-belok harus isi
const belok = THREADS.filter((t) => getUser(t.authorId).persona === "begok")
console.log("otak-belok:", belok.length, "post dari akun", [...new Set(belok.map((t) => t.authorId))].join(","))

// 10. sampel dunia ibu-ibu & jamet — komennya harus nyambung kampungnya
for (const id of [1, 13, 24, 50]) {
  const t = THREADS.find((x) => x.id === id)!
  console.log(`\n--- #${id} (author ${t.authorId}, ${t.comments.length} komen) ---`)
  console.log(t.content.slice(0, 200))
  for (const c of t.comments.slice(0, 3)) console.log(`   [${c.authorId}] ${c.content.slice(0, 90)}`)
}

if (gagal.length) {
  console.log(`\nGAGAL ${gagal.length}:`)
  for (const g of gagal.slice(0, 40)) console.log(" -", g)
  process.exit(1)
}
console.log("\nSEMUA AMAN ✔")
