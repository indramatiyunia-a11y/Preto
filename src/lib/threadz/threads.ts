import type { ThreadzThread } from "./types"
import { THREADS_PART1 } from "./data/threads-1"
import { THREADS_PART2 } from "./data/threads-2"
import { THREADS_PART3 } from "./data/threads-3"
import { THREADS_PART4 } from "./data/threads-4"

export const THREADS: ThreadzThread[] = [
  ...THREADS_PART1,
  ...THREADS_PART2,
  ...THREADS_PART3,
  ...THREADS_PART4,
]

export function getThread(id: number): ThreadzThread | undefined {
  return THREADS.find((t) => t.id === id)
}
