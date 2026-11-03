// Identitas pengunjung. Habis.
//
// Gak ada balasan otomatis, gak ada aktivitas simulasi, gak ada yang nungguin
// lu nulis. Cuitan dan komentar buatan lu hidup selama tab-nya kebuka aja —
// refresh, hilang. Bersih, hemat, gak ada yang disimpen di mana-mana.

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
