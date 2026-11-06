/** format "berapa lalu" dari selisih menit */
export function formatMinutesAgo(minutes: number): string {
  if (minutes < 1) return "baru aja"
  if (minutes < 60) return `${minutes} mnt`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours} jam`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days} hr`
  const weeks = Math.floor(days / 7)
  return `${weeks} mgg`
}

/**
 * Arah tulis teks: Arab (aksara U+0600-U+06FF) tampil RTL biar kebaca bener,
 * sisanya LTR. Dipakai post & komentar — feed internasional, bahasa asing
 * FULL bahasanya (threads-intl.ts).
 */
export function arahTeks(text: string): "rtl" | "ltr" {
  return /[\u0600-\u06FF]/.test(text) ? "rtl" : "ltr"
}

/** 12345 -> "12,3 rb" */
export function formatCount(n: number): string {
  if (n >= 1000) {
    const k = n / 1000
    const s = k >= 10 ? Math.round(k).toString() : k.toFixed(1).replace(".", ",")
    return `${s} rb`
  }
  return n.toString()
}
