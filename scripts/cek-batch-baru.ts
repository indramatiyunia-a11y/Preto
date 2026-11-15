// Verifikasi tambahan untuk batch baru (BATCH 7/8 dst): pola jumlah komentar,
// rentang & urutan menit, jarak komentar telat, duplikasi penulis, distribusi
// panjang post (hukum BAGIAN 4 poin 2), dan kata/ frasa terlarang.
// Jalankan: bun scripts/cek-batch-baru.ts
import { THREADS_PART11 } from "../src/lib/threadz/data/threads-11"
import { THREADS_PART12 } from "../src/lib/threadz/data/threads-12"
import { THREADS_PART13 } from "../src/lib/threadz/data/threads-13"
import { THREADS_PART14 } from "../src/lib/threadz/data/threads-14"
import { THREADS_PART15 } from "../src/lib/threadz/data/threads-15"
import { THREADS_PART16 } from "../src/lib/threadz/data/threads-16"
import { THREADS_PART17 } from "../src/lib/threadz/data/threads-17"
import { THREADS_PART18 } from "../src/lib/threadz/data/threads-18"
import { THREADS_PART19 } from "../src/lib/threadz/data/threads-19"
import { THREADS_PART20 } from "../src/lib/threadz/data/threads-20"
import { THREADS_PART21 } from "../src/lib/threadz/data/threads-21"
import { THREADS_PART22 } from "../src/lib/threadz/data/threads-22"
import { THREADS_PART23 } from "../src/lib/threadz/data/threads-23"
import { THREADS_PART24 } from "../src/lib/threadz/data/threads-24"
import { THREADS_PART25 } from "../src/lib/threadz/data/threads-25"
import { THREADS_PART26 } from "../src/lib/threadz/data/threads-26"
import { THREADS_PART27 } from "../src/lib/threadz/data/threads-27"
import { THREADS_PART28 } from "../src/lib/threadz/data/threads-28"
import { THREADS_PART29 } from "../src/lib/threadz/data/threads-29"
import { THREADS_PART30 } from "../src/lib/threadz/data/threads-30"

const POLA = [12, 17, 11, 19, 14, 20, 13, 16, 11, 18, 15, 12, 20, 11, 17, 13, 19, 14, 16, 11, 18, 12, 15, 20, 13]

let masalah = 0
const fail = (s: string) => { console.log("✗ " + s); masalah++ }

function cekFile(nama: string, posts: { id: number; authorId: number; minutesAgo: number; shares: number; content: string; comments: { authorId: number; minutesAgo: number; content: string }[] }[]) {
  console.log("=== " + nama + " ===")
  if (posts.length !== 25) fail(`${nama}: ${posts.length} post (harus 25)`)
  // id & author berurutan, menit = 25 + 30*(id-1)
  for (let i = 0; i < posts.length; i++) {
    const p = posts[i]
    if (p.id !== posts[0].id + i) fail(`${nama} idx ${i}: id ${p.id} gak berurutan`)
    if (p.authorId !== posts[0].authorId + i) fail(`${nama} id ${p.id}: authorId ${p.authorId} gak urut`)
    if (p.minutesAgo !== 25 + 30 * (p.id - 1)) fail(`${nama} id ${p.id}: menit ${p.minutesAgo} ≠ 25+30*(id-1)`)
    const n = POLA[i]
    if (p.comments.length !== n) fail(`${nama} id ${p.id}: ${p.comments.length} komentar, pola minta ${n}`)
    const seen = new Set<number>()
    let prev = p.minutesAgo
    for (const c of p.comments) {
      if (c.authorId === p.authorId) fail(`${nama} id ${p.id}: self-reply ${c.authorId}`)
      if (seen.has(c.authorId)) fail(`${nama} id ${p.id}: dobel ${c.authorId}`)
      seen.add(c.authorId)
      if (c.authorId < 1 || c.authorId > 500) fail(`${nama} id ${p.id}: authorId ${c.authorId} di luar 1-500`)
      if (c.minutesAgo >= prev) fail(`${nama} id ${p.id}: menit gak menurun ketat di ${c.authorId}`)
      prev = c.minutesAgo
      if (c.content.includes('"') || c.content.includes("'")) fail(`${nama} id ${p.id} komen ${c.authorId}: ada tanda kutip`)
    }
    // jarak: semua kecuali satu ≤ 300 di bawah post; satu telat 600-4000
    const jarak = p.comments.map((c) => p.minutesAgo - c.minutesAgo)
    const telat = jarak.filter((d) => d > 300)
    if (telat.length !== 1) fail(`${nama} id ${p.id}: ${telat.length} komentar di luar 300 mnt (harus 1 telat)`)
    if (telat.length === 1 && (telat[0] < 600 || telat[0] > 4000)) fail(`${nama} id ${p.id}: telat ${telat[0]} mnt di luar 600-4000`)
    if (jarak.some((d) => d <= 0)) fail(`${nama} id ${p.id}: ada komen sebelum post`)
  }
  // distribusi panjang post: ~5 <130, ~8 150-350, ~8 350-550, ~4 550-800
  const panjang = posts.map((p) => p.content.length)
  const k1 = panjang.filter((x) => x < 130).length
  const k2 = panjang.filter((x) => x >= 130 && x < 350).length
  const k3 = panjang.filter((x) => x >= 350 && x < 550).length
  const k4 = panjang.filter((x) => x >= 550).length
  console.log(`panjang post: <130:${k1} 130-350:${k2} 350-550:${k3} 550+:${k4} | total komentar: ${posts.reduce((a, p) => a + p.comments.length, 0)}`)
  if (k1 < 3 || k1 > 7) fail(`${nama}: post pendek ${k1} (target ±5)`)
  if (k4 < 2 || k4 > 6) fail(`${nama}: post panjang ${k4} (target ±4)`)
}

cekFile("threads-11", THREADS_PART11 as any)
cekFile("threads-12", THREADS_PART12 as any)
cekFile("threads-13", THREADS_PART13 as any)
cekFile("threads-14", THREADS_PART14 as any)
cekFile("threads-15", THREADS_PART15 as any)
cekFile("threads-16", THREADS_PART16 as any)
cekFile("threads-17", THREADS_PART17 as any)
cekFile("threads-18", THREADS_PART18 as any)
cekFile("threads-19", THREADS_PART19 as any)
cekFile("threads-20", THREADS_PART20 as any)
cekFile("threads-21", THREADS_PART21 as any)
cekFile("threads-22", THREADS_PART22 as any)
cekFile("threads-23", THREADS_PART23 as any)
cekFile("threads-24", THREADS_PART24 as any)
cekFile("threads-25", THREADS_PART25 as any)
cekFile("threads-26", THREADS_PART26 as any)
cekFile("threads-27", THREADS_PART27 as any)
cekFile("threads-28", THREADS_PART28 as any)
cekFile("threads-29", THREADS_PART29 as any)
cekFile("threads-30", THREADS_PART30 as any)

// kata/frasa terlarang (FORMULA HITAM + pola audit)
const TERLARANG: [string, RegExp][] = [
  ["doa/amin", /\b(semoga|doakan|doain|amin|pasrah|hikmah|hikmatnya|pelajarannya|moralnya|kesimpulannya)\b/i],
  ["emoji tangan/doa", /🙏/],
  ["LGBT", /\b(gay|lesbi|lesbian|homoseks|homoseksual|transgender|waria|bencong|banci|lgbt|queer)\b/i],
  ["sapaan Bu", /\bBu\b(?!ku|dell|ngkit)/],
  ["gak percaya X lagi", /gak percaya \w+ lagi/i],
  ["paling X di seluruh Y", /paling \w+ di seluruh \w+/i],
  ["jeda dramatis benda.N menit", /\b(loker|mesin|motor|angkot|kunci|laptop|kipas|printer|lift|kompor|kulkas|lampu|hape|hp|jam dapur)\s*\.\s*\d+\s*(menit|jam|hari)/i],
  ["GUYS", /\bGUYS\b/],
  ["bahasa manusia", /bahasa (manusia|manusiawi|kotak|mesin)/i],
  ["kutip ganda", /[""]/],
  ["domain pinjam", /\b(pinjam(an)?|pinjol|kpr)\b/i],
  ["cicilan/bunga", /\b(cicilan|cicil|bunga)\b/i],
  ["brand", /\b(indomaret|alfamart|gojek|gopay|grab|tokopedia|shopee|ovo|linkaja|telkomsel|indosat|bri|bca|bni|mandiri|indomie|aqua|vespa|honda|yamaha|toyota)\b/i],
  ["lagu/ultah", /\b(lagu|dangdut|konser|musik|spotify|ultah|ulang ?tahun|kue ?ulang|tiup ?lilin|kado|karaoke)\b/i],
  ["daftar bernomor", /(^|\n)\s*\d+[\.\)]\s+/],
  ["kalimat-garam X yang Y itu Z", /\w+\s+yang\s+[\w\s-]{3,30}\s+itu\s+\w+/i],
  ["personifikasi benda niat", /\b(loker|mesin|motor|angkot|kunci|laptop|kipas|printer|lift|kompor|kulkas|lampu|hape|hp|jam)\s+(pengen|mau|ngambek|mood|lega|kapok)\b/i],
]
for (const p of [...THREADS_PART11, ...THREADS_PART12, ...THREADS_PART13, ...THREADS_PART14, ...THREADS_PART15, ...THREADS_PART16, ...THREADS_PART17, ...THREADS_PART18, ...THREADS_PART19, ...THREADS_PART20, ...THREADS_PART21, ...THREADS_PART22, ...THREADS_PART23, ...THREADS_PART24, ...THREADS_PART25, ...THREADS_PART26, ...THREADS_PART27, ...THREADS_PART28, ...THREADS_PART29, ...THREADS_PART30] as any) {
  const teks: [string, string][] = [["post", p.content], ...p.comments.map((c: any) => [`komen ${c.authorId}`, c.content])]
  for (const [lok, t] of teks) {
    for (const [nama, re] of TERLARANG) {
      if (nama === "daftar bernomor" && lok !== "post") continue
      const m = t.match(re)
      if (m) fail(`${p.id} ${lok}: ${nama} → "${m[0]}"`)
    }
  }
}

console.log(masalah === 0 ? "CEK BATCH BARU BERSIH ✓" : `ADA ${masalah} MASALAH`)
if (masalah > 0) process.exitCode = 1
