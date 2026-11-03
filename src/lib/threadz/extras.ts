// Semua yang bikin Akiomida kerasa hidup, tanpa pura2 ada yang online.
// Balasan ke komen lu itu GAK dijamin — 1% doang. Dunia gak diem nungguin lu.

import type { ThreadzUser } from "./types"
import { USERS } from "./data/users"

/** Balasan yang SANGAT jarang muncul (1%) beberapa detik setelah lu berkomentar */
export const RARE_REPLIES: string[] = [
  "wkwkwk bener juga ya",
  "eh iya, gue kepikiran juga tadi. cuma gak sempet nulis",
  "deng, logika",
  "komen lu nempel di kepala gue sampe besok, thanks banget",
  "gue gak ngerti tapi gue ikut seneng",
  "kalo gitu 1+1 kenapa bukan 11? JAWAB",
  "terus terus, habis itu gimana? gue penasaran",
  "gue simpen ya kalimatnya. buat ngingetin diri sendiri",
  "mantap. sekarang gue harus mikir lagi padahal lagi rebahan",
  "semoga lu sehat-sehat aja deh, yang nulis kayak gini",
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
