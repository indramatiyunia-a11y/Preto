// Semua yang bikin Threadz kerasa "online":
// pool balasan otomatis, topik lagi rame, dan warna acak buat lu sendiri

import type { ThreadzUser } from "./types"
import { USERS } from "./data/users"

/** Balasan yang muncul beberapa detik setelah lu berkomentar. Digabung jadi satu pool biar gak ketebak polanya. */
export const AUTO_REPLIES: string[] = [
  "wkwkwk bener juga ya",
  "anjir ini relate banget",
  "sumpah kepikiran juga, cuma gak sempet nulis",
  "baru nyadar gara2 komen lu, thanks",
  "gils. benar.",
  "ini yang gue pikirin dari tadi tapi gue gak sanggup ngetik",
  "deng, logika",
  "komen lu bikin gue mikir semaleman, ngeri",
  "setuju sih... tapi kok gak nyambung ya, gue baca ulang dulu",
  "ini alasan thread gak boleh ditinggal",
  "wkwkwk gue baca sambil lirak-lirik kalkulator",
  "ini bakal jadi perang di komen, tunggu aja",
  "tag yang punya janji 'nanti gue jelasin'",
  "gue gak ngerti tapi gue ikut seneng",
  "bukti cinta itu dihitung juga ternyata",
  "yang nulis komen ini harus bayar pajak otak",
  "tapi kok bisa sih? gak nyambung (gue serius nanya)",
  "bohong. buktiin dulu. gue nggak ngapa-ngapain sambil nunggu",
  "kalo gitu 1+1 kenapa bukan 11? JAWAB",
  "terus terus, habis itu gimana? gue penasaran",
  "soalnya mana? penasaran",
  "fakta. otak kita emang dibikin gak suka angka",
  "secara statistik lu gak sendirian mikir ginian",
  "iyaa, dan lucunya ini gak pernah diajarin di sekolah",
  "ini paradoks klasik, ada banyak versinya di buku. gak bosen2",
  "ini namanya bias kognitif. otak hemat energi, soalnya nyari jalan pintas",
  "gue dulu pernah begitu. sampai disuruh simulasi 100 kali. hancur",
  "sini gue jelasin pake contoh warung. jauh lebih gampang",
  "dijelasin pake uang memang langsung nyantol",
  "orang matematika jagain konsistensi lebih dari jagain harga diri",
  "angka gak bohong, yang bohong orang yang motong angka",
  "gue bookmark dulu, biar keliatan ilmiah di HP gue",
  "mantap. sekarang gue harus mikir lagi padahal lagi rebahan",
  "komen lu nempel di kepala gue sampe besok, thanks banget",
  "wah ini harus dibaca ibu2 arisan",
  "save. buat dihafal buat pertengkaran berikutnya",
]

/** Pilih user acak buat balas komen lu */
export function pickRandomReplyUser(): ThreadzUser {
  return USERS[Math.floor(Math.random() * USERS.length)]
}

/** Pool kalimat yang muncul di indikator "sedang menulis" */
export function pickRandomReply(): string {
  return AUTO_REPLIES[Math.floor(Math.random() * AUTO_REPLIES.length)]
}

/** Topik lagi rame di sisi kanan */
export const TRENDING: { tag: string; count: string }[] = [
  { tag: "0,999... sama dengan 1", count: "12,4 rb cuitan" },
  { tag: "6÷2(1+2) perang akbar", count: "8,1 rb cuitan" },
  { tag: "gacha gak pernah gacor", count: "21,7 rb cuitan" },
  { tag: "bunga flat itu mahal", count: "3,9 rb cuitan" },
  { tag: "rata2 gaji itu bohong", count: "5,2 rb cuitan" },
  { tag: "pi itu 3,14 kok", count: "2,8 rb cuitan" },
]

/** Warna pilihan buat avatar lu (foto profil di dunia ini cuma boleh warna) */
const MY_COLORS = [
  "#f43f5e", "#fb923c", "#facc15", "#a3e635", "#34d399",
  "#2dd4bf", "#22d3ee", "#a78bfa", "#e879f9", "#fb7185",
  "#f59e0b", "#4ade80", "#a855f7", "#f97316", "#10b981",
]

export function randomVisitor(): { name: string; color: string } {
  const digits = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join("")
  return {
    name: `akiomida${digits}`,
    color: MY_COLORS[Math.floor(Math.random() * MY_COLORS.length)],
  }
}
