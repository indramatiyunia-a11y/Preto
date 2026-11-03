// Semua yang bikin Akiomida kerasa hidup, tanpa pura2 ada yang online.
// Balasan ke komen lu itu GAK dijamin — 1% doang. Dunia gak diem nungguin lu.

import type { ThreadzUser } from "./types"
import { USERS } from "./data/users"

/** Balasan yang SANGAT jarang muncul (1%) beberapa detik setelah lu berkomentar.
 *  Suaranya campur aduk: ada yang sopan, ada yang CAPS, ada yang males ngetik,
 *  ada yang campur bahasa daerah. Tiap akun beda gaya, jangan diseragamin. */
export const RARE_REPLIES: string[] = [
  "wkwkwk",
  "sabar ya",
  "bener itu",
  "astaga",
  "sama, di rumah gue juga gitu",
  "beneran?? 😅",
  "semangat ya 🙏",
  "eh iya ya, gak kepikiran",
  "ikut baca aja gue",
  "JAWAB DONG KALO BEGITU",
  "wes, santai aja",
  "aneh tapi masuk akal",
  "gue baca ulang dua kali, tetep nanggung",
  "lanjut ceritanya dong",
  "hmm",
  "oalah gitu",
  "berarti gue selama ini salah ya",
  "isi hati banget",
  "makasih udah nulis",
  "iya 😭",
  "satu set sama kejadian di rumah gue",
  "kayaknya gue pernah kejadian ginian",
  "ya ampun",
  "semoga cepat membaik",
  "baca sambil senyum sendiri",
  "wih",
  "bener banget itu",
  "logika, logika",
  "alhamdulillah deh",
  "keun, santuy",
  "gpp, besok laju",
  "ini yang gue butuhin hari ini",
  "setujuh banget",
  "wkwkwk gila sih",
  "kok bisa ya, tanya serius",
  "oke dicatet",
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
