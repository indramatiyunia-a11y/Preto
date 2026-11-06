#!/usr/bin/env bash
# ============================================================================
# dev.sh — ORKESTRATOR SISTEM BATCH AKIOMIDA
#
# Target   : 1000 cuitan (thread) di feed Akiomida.
# Ritme    : nambah 25 cuitan per batch, SATU batch per sesi kerja — biar
#            nyaman, gak overload, dan kualitas tiap cuitan tetap ditanganin.
#
# SISTEM LANJUT OTOMATIS:
#   Tiap kali satu batch (25 cuitan) selesai dan lolos ./dev.sh check,
#   asisten menjadwalkan cron one_time (± 5 menit kemudian) yang membuat
#   sesi berikutnya memulai batch berikutnya secara mandiri. Chat yang
#   aktif minta lanjut — user gak perlu mengejar. Untuk berhenti: bilang "stop".
#
# PROTOKOL SATU BATCH (WAJIB, urut):
#   0. ./dev.sh status            -> lihat posisi & data batch berikutnya
#   1. Baca scripts/rumus-v2.md   -> HUKUM TERTINGGI (rombak total + aturan
#                                    ruh V2 dari Math.SE/Brainly/Gutefrage)
#   2. Baca scripts/sidik-jari.md -> riset sidik jari + buku besar topik
#                                    (topik yang sudah kepake DILARANG diulang
#                                    dengan bentuk sama; tiap cuitan wajib
#                                    identitas sidik sendiri)
#   3. Baca header ATURAN ISI V2 di src/lib/threadz/data/threads-1.ts
#   4. Tulis tangan 25 cuitan baru ke:
#        src/lib/threadz/data/threads-<PART>.ts   (export THREADS_PART<PART>)
#      - ids   : 100+(batch-1)*25+1 .. 100+batch*25
#      - author: batch 1-4 (historis) 1-25/26-50. Batch ekspansi (>=5) WAJIB
#                pakai 25 authorId BARU: batch 5 = 51-75, batch 6 = 76-100,
#                dst (rumus-v2.md PENGGANDAAN PENULIS — dilarang balik ke
#                pool 1-50; kalau pool users.ts habis, tambah user baru).
#      - menit : minutesAgo(id) = 25 + 30*(id-1)  (makin besar = makin lama)
#      - komentar: kampung akun harus nyambung (peta di sidik-jari.md),
#        register online, turun minutesAgo-nya, gak ada dobel/self-reply
#      - SEMUA post WAJIB nyambung matematika (forum matematika, bukan diary);
#        register tiap post HARUS beda suara (FORMULA HITAM 18)
#      - post bahasa asing (full Arab/EN/FR/ES/ZH) TIDAK masuk file batch:
#        taruh di threads-intl.ts, komentar dijawab dalam bahasa yang sama,
#        id 9001+ (rumus-v2.md BAGIAN 1G — dilarang bahasa campur di post
#        Indonesia, dilarang post asing di file batch)
#   5. Daftarkan part baru di src/lib/threadz/threads.ts (import + spread)
#   6. ./dev.sh check sampai BERSIH (audit + validasi + lint)
#   7. Update BUKU BESAR TOPIK di scripts/rumus-v2.md + sidik-jari.md (tabel per penulis)
#   8. Cek dev.log + halaman render -> jadwalkan cron one_time batch berikutnya
#      (payload menyebut dev.sh + protokol ini + rumus-v2.md BAGIAN 1F/2),
#      lalu laporkan ke user.
#
# PERINTAH:
#   ./dev.sh status    posisi campaign + detail batch berikutnya
#   ./dev.sh check     audit isi + validasi + lint (harus bersih sebelum lanjut)
#   ./dev.sh next      cetak spesifikasi teknis batch berikutnya saja
#   ./dev.sh help      bantuan
# ============================================================================
set -euo pipefail
cd "$(dirname "$0")"

BASE=100
TARGET=1000
BSIZE=25

hitung_post() {
  # hitung post batch Indonesia saja (threads-<angka>.ts) — threads-intl.ts
  # (post bahasa asing, id 9001+) dihitung terpisah, bukan bagian batch.
  grep -hE '^[[:space:]]+id:[[:space:]]*[0-9]+' src/lib/threadz/data/threads-[0-9]*.ts | wc -l | tr -d ' '
}

spesifikasi_batch() {
  local n=$1
  local first=$(( BASE + (n - 1) * BSIZE + 1 ))
  local last=$(( BASE + n * BSIZE ))
  local part=$(( n + 4 ))
  if (( n >= 5 )); then
    # penggandaan penulis: tiap batch pakai 25 authorId yang belum pernah nulis.
    # pool 1-50 udah kepake batch 1-4, jadi batch 5 = 51-75, batch 6 = 76-100, dst.
    local a_first=$(( 51 + (n - 5) * BSIZE ))
    local a_last=$(( a_first + BSIZE - 1 ))
    local authors="${a_first}-${a_last} (BARU, belum pernah nulis — dilarang pakai pool 1-50)"
  elif (( n % 2 == 1 )); then
    local authors="1-25 (historis)"
  else
    local authors="26-50 (historis)"
  fi
  local menit_awal=$(( 25 + 30 * (first - 1) ))
  echo "  batch        : $n"
  echo "  id cuitan    : $first .. $last"
  echo "  authorId     : $authors (urut mengikuti id)"
  echo "  minutesAgo   : $menit_awal, naik +30 tiap id"
  echo "  file baru    : src/lib/threadz/data/threads-$part.ts (THREADS_PART$part)"
  echo "  pendaftaran  : src/lib/threadz/threads.ts"
  echo "  riset wajib  : scripts/sidik-jari.md + header threads-1.ts"
}

cmd_status() {
  local posts; posts=$(hitung_post)
  local batches_done=$(( (posts - BASE) / BSIZE ))
  local next_batch=$(( batches_done + 1 ))
  local sisa=$(( TARGET - posts ))
  echo "=================================================================="
  echo " AKIOMIDA — status campaign"
  echo "=================================================================="
  echo " cuitan       : $posts / $TARGET"
  echo " sisa         : $sisa cuitan ( $(( (sisa + BSIZE - 1) / BSIZE )) batch lagi )"
  echo " batch selesai: $batches_done"
  echo " [$(printf '#%.0s' $(seq 1 $(( posts / 25 ))))$(printf -- '-%.0s' $(seq 1 $(( (TARGET - posts) / 25 ))))] (1 char = 25 cuitan)"
  echo "------------------------------------------------------------------"
  if (( posts >= TARGET )); then
    echo " TARGET 1000 TERCAPAI. Sistem lanjut otomatis berhenti."
    return 0
  fi
  echo " batch berikutnya:"
  spesifikasi_batch "$next_batch"
}

cmd_next() {
  local posts; posts=$(hitung_post)
  local batches_done=$(( (posts - BASE) / BSIZE ))
  spesifikasi_batch $(( batches_done + 1 ))
}

cmd_check() {
  echo "== [1/4] audit isi (audit-full.ts) =="
  bun scripts/audit-full.ts
  echo
  echo "== [2/4] audit formula15 (mikro-drama/personifikasi/sisa lama) =="
  bun scripts/audit-formula15.ts | tail -8
  echo
  echo "== [3/4] validasi dataset (validate-threadz.ts) =="
  bun scripts/validate-threadz.ts | tail -5
  echo
  echo "== [4/4] lint =="
  bun run lint >/dev/null 2>&1 && echo " lint: bersih" || { echo " lint: ADA MASALAH"; bun run lint; exit 1; }
  echo
  echo "CHECK BERSIH ✔ — jangan lupa: update buku besar topik di"
  echo "scripts/sidik-jari.md, cek dev.log, verifikasi halaman, lalu"
  echo "jadwalkan cron one_time untuk batch berikutnya."
}

case "${1:-help}" in
  status) cmd_status ;;
  check)  cmd_check ;;
  next)   cmd_next ;;
  help|*) sed -n '2,45p' "$0" | sed 's/^# \{0,1\}//' ;;
esac
