// Semua yang bikin Akiomida kerasa hidup, tanpa pura2 ada yang online.
// Balasan ke komen lu itu GAK dijamin — 1% doang. Dunia gak diem nungguin lu.

import type { ThreadzUser } from "./types"
import { USERS } from "./data/users"

/** Balasan yang SANGAT jarang muncul (1%) beberapa detik setelah lu berkomentar.
 *  Suaranya campur: ada yang sopan, ada yang singkat, ada yang CAPS, ada yang males ngetik. */
export const RARE_REPLIES: string[] = [
  "wkwkkw",
  "bener juga. gue mikir ulang",
  "eh iya ya. lupa itung",
  "komen lu nempel lama di kepala. thanks",
  "gue gak ngerti tapi gue baca dua kali",
  "lanjut, abis itu gimana? gue penasaran",
  "semoga lancar ya. serius",
  "wah. baru sadar gue",
  "btw itu beneran?? gue cek dulu deh",
  "sedih ya. semangat",
  "deng, logika",
  "gue ikut ya. semoga kebaca",
  "PAK JAWAB DONG KALO BEGITU",
  "makasih, gue butuh baca ini hari ini",
  "sama kaya kejadian di rumah gue. persis",
  "iya. iya banget",
]

/** Pilih user acak buat balas komen lu (kalo hoki 1%) */
export function pickRandomReplyUser(): ThreadzUser {
  return USERS[Math.floor(Math.random() * USERS.length)]
}

/** Pool kalimat balasan yang jarang banget */
export function pickRandomReply(): string {
  return RARE_REPLIES[Math.floor(Math.random() * RARE_REPLIES.length)]
}

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
