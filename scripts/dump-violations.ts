/** Dump lengkap semua post yang kena audit-formula15 (post + semua komentar). */
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
const targetIds: Record<string, Set<number>> = {
  "threads-1": new Set([6, 8]),
  "threads-2": new Set([29, 32, 37, 39, 41, 42, 43, 45, 48, 49, 50]),
  "threads-3": new Set([52, 54, 56, 63]),
  "threads-4": new Set([79, 88, 98, 99]),
  "threads-5": new Set([103, 114, 115, 117, 118, 120, 124]),
  "threads-6": new Set([126, 127, 129, 131, 134, 136, 137, 138]),
  "threads-7": new Set([151, 155, 158, 159, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174]),
  "threads-8": new Set([176, 180, 181, 184, 187, 188, 190, 191, 192, 193, 198, 199]),
};
for (const [fname, posts] of files) {
  for (const p of posts as any[]) {
    if (!targetIds[fname]?.has(p.id)) continue;
    console.log(`\n##### ${fname} post ${p.id} authorId=${p.authorId}`);
    console.log(`POST: ${p.content}`);
    for (const c of p.comments ?? []) console.log(`  KOMEN ${c.authorId}: ${c.content}`);
  }
}
