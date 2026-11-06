/**
 * AUDIT FORMULA #15 — SKRIP MIKRO-DRAMA & KERABATNYA (6 Nov 2026)
 * Trigger: user menangkap post loker (threads-1 id 8) yang bunyinya
 * seperti skrip film pendek 3 babak: kejadian -> lawakan personifikasi ->
 * ritual penyesalan. User: "Periksa seluruhnya jangan hanya satu. Cek semua."
 * Scan SEMUA post + komentar di threads-1..8, laporkan semua kecocokan.
 */
import { THREADS_PART1 as t1 } from "../src/lib/threadz/data/threads-1";
import { THREADS_PART2 as t2 } from "../src/lib/threadz/data/threads-2";
import { THREADS_PART3 as t3 } from "../src/lib/threadz/data/threads-3";
import { THREADS_PART4 as t4 } from "../src/lib/threadz/data/threads-4";
import { THREADS_PART5 as t5 } from "../src/lib/threadz/data/threads-5";
import { THREADS_PART6 as t6 } from "../src/lib/threadz/data/threads-6";
import { THREADS_PART7 as t7 } from "../src/lib/threadz/data/threads-7";
import { THREADS_PART8 as t8 } from "../src/lib/threadz/data/threads-8";

const files: [string, any[]][] = [
  ["threads-1", t1 as any], ["threads-2", t2 as any], ["threads-3", t3 as any],
  ["threads-4", t4 as any], ["threads-5", t5 as any], ["threads-6", t6 as any],
  ["threads-7", t7 as any], ["threads-8", t8 as any],
];

// ---------- POLA A: SKRIP MIKRO-DRAMA (formula baru, di-blacklist hari ini) ----------
const POLA_A: [string, RegExp, string][] = [
  ["A1 jeda dramatis 'gue sama X. N menit'",
    /\b(gue|aku|saya)\s+sama\s+\w+[\.,]?\s+\d+\s*(menit|jam|hari|detik)/i,
    "kalimat teater minus: subjek + lawan benda + durasi, dibikin kayak panggung sunyi"],
  ["A2 jeda dramatis 'X. N menit.' (benda. durasi)",
    /\b(loker|mesin|motor|angkot|kunci|laptop|kipas|printer|lift|kompor|kulkas|lampu|hape|hp)\s*\.\s*\d+\s*(menit|jam|hari)/i,
    "benda disolo-kan lalu diberi durasi — koreografi, bukan omongan"],
  ["A3 personifikasi benda 'pengen/mau/mood/ngambek'",
    /\b(loker|mesin|motor|angkot|kunci|laptop|kipas|printer|lift|kompor|kulkas|lampu|hape|hp|sepeda|payung|sendal|botol|gelas|tas|microwave|ac|kendaraan)\b[^.!?]{0,40}\b(pengen|pingin|maunya|lagi mood|punya mood|ngambek|baper|nyuruh|ngajak|ngajakin|pengin)\b/i,
    "benda mati dikasih niat/emosi = skrip kartun"],
  ["A4 ritual penangkalan penutup 'sekarang ... pegang/bawa/simpan'",
    /(sekarang|dari sekarang|mulai sekarang)[^.!?]{0,60}\b(pegang|genggam|bawa|simpan|slalu|selalu|jadikan)\b/i,
    "coda ritual: tindakan pengkhianatan pada benda sebagai 'hikmah' terselubung"],
  ["A5 penutup 'gak percaya X lagi'",
    /\b(gak|ga|nggak|gak\s+mau|tidak)\s+percaya\s+\w+\s+lagi/i,
    "moral film pendek: 'saya tidak lagi mempercayai X'"],
  ["A6 penutup prestasi sunyi tingkat paling X di seluruh Y",
    /\b(paling|termasih|terbersih|ter^)\w*\s+\w+\s+(di|di\s+seluruh)\s+seluruh/i,
    "punchline diam bergaya sastra: 'paling bersih di seluruh lini'"],
  ["A7 'akhirnya ... juga pas (udah|sudah) pasrah'",
    /akhirnya\b[^.!?]{0,80}\bpasrah/i,
    "lengkung resolusi drama: menyerah lalu terpecahkan — kurva 3 babak"],
  ["A8 pasrah sebagai momen panggung",
    /\bpasrah\b/i,
    "kata 'pasrah' muncul — hampir selalu bendera babak ketiga"],
];

// ---------- POLA B: SISA-SISA FORMULA LAMA (harusnya sudah mati, dicek ulang) ----------
const POLA_B: [string, RegExp, string][] = [
  ["B1 doa penutup 'semoga ...' di post",
    /\b(semoga|doain|doakan|amin\b|aminn)/i,
    "ekor doa — FORMULA HITAM 15"],
  ["B2 kalimat-garam 'X yang Y itu Z'",
    /\b\w+\s+yang\s+[\w\s-]{3,30}\s+itu\s+(\w+\s+)?(yang\s+)?\w+/i,
    "gramatika mutiara — FORMULA HITAM 16"],
  ["B3 memuji kedalaman 'kalimat terakhir itu ... dalam'",
    /(kalimat (terakhir|penutup)|penutupnya)\s+(itu\s+)?(ringkasan|dalam|bermanfaat|bijak|sarat makna)/i,
    "komentar taksi memuji kesastraan post"],
  ["B4 'bentuk/versi ... dari ...' pamungkas sastra",
    /\b(bentuk|versi|wujud)\s+\w+\s+(dari|dalam)\s+(sayang|cinta|kepedulian|dewasa|orang dewasa|kesabaran)/i,
    "definisi puitis penutup — karya kecil sastra"],
  ["B5 sapaan Bu/guru berlebihan",
    /\bBu\b(?!ku|dell|ngkit)/,
    "sebutan 'Bu' — dipantau frekuensi (pidato user: jangan 'Bu' mulu)"],
  ["B6 emoji tangan bertahan 🙏",
    /🙏/,
    "tanda tangan korps doa"],
  ["B7 'hikmah/hikmatnya/pelajarannya' eksplisit",
    /\b(hikmahnya|hikmatnya|pelajarannya|moralnya|kesimpulannya)\b/i,
    "moral dinyatakan terang-terangan — FORMULA HITAM 4/8"],
  ["B8 tanda kutip ganda di dalam cuitan (kutipan dramatis)",
    /[""]/,
    "kutipan dramatis orang lain sebagai aksesori sastra"],
];

interface Hit { file: string; kind: string; id: number; authorId: number; pola: string; frag: string; catatan: string; }
const hits: Hit[] = [];
let totalPost = 0, totalKomen = 0;
const buCount: Record<string, number> = {};

for (const [fname, posts] of files) {
  for (const p of posts as any[]) {
    totalPost++;
    const unikPost = new Set<string>();
    const cek = (kind: string, id: number, authorId: number, content: string) => {
      for (const [nama, re, catatan] of [...POLA_A, ...POLA_B]) {
        const m = content.match(re);
        if (m) {
          if (nama.startsWith("B5")) {
            buCount[fname] = (buCount[fname] ?? 0) + (content.match(/\bBu\b(?!ku|dell|ngkit)/g)?.length ?? 0);
            continue; // B5 cuma dihitung, bukan dilaporkan per kasus
          }
          if (nama.startsWith("B6")) continue; // 🙏 juga frekuensi doang
          const key = fname + "/" + id + "/" + nama + (kind === "komen" ? "/k" : "");
          if (unikPost.has(key)) continue;
          unikPost.add(key);
          hits.push({ file: fname, kind, id, authorId, pola: nama, frag: m[0].slice(0, 90), catatan });
        }
      }
    };
    cek("post", p.id, p.authorId, p.content ?? "");
    totalKomen += (p.comments ?? []).length;
    for (const c of p.comments ?? []) cek("komen", p.id, c.authorId, c.content ?? "");
  }
}

console.log(`TOTAL dipindai: ${totalPost} post, ${totalKomen} komentar\n`);
const grupA = hits.filter(h => h.pola.startsWith("A"));
const grupB = hits.filter(h => h.pola.startsWith("B"));
console.log(`=== POLA A (skrip mikro-drama — formula baru) : ${grupA.length} temuan ===`);
for (const h of grupA) console.log(`[${h.file} post ${h.id} ${h.kind} authorId=${h.authorId}] ${h.pola}\n   "${h.frag}"\n   -> ${h.catatan}`);
console.log(`\n=== POLA B (sisa formula lama) : ${grupB.length} temuan ===`);
for (const h of grupB) console.log(`[${h.file} post ${h.id} ${h.kind} authorId=${h.authorId}] ${h.pola}\n   "${h.frag}"\n   -> ${h.catatan}`);
console.log(`\n=== FREKUENSI 'Bu' per file ===`);
for (const [f, n] of Object.entries(buCount)) console.log(`${f}: ${n}`);
const totalBu = Object.values(buCount).reduce((a, b) => a + b, 0);
console.log(`TOTAL 'Bu': ${totalBu} dari ${totalPost + totalKomen} teks`);
