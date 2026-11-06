"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { ArrowDown, Dices } from "lucide-react"
import { THREADS } from "@/lib/threadz/threads"
import { randomVisitor } from "@/lib/threadz/extras"
import type { ThreadzThread } from "@/lib/threadz/types"
import { ThreadCard } from "@/components/threadz/thread-card"
import { ThreadModal, type LiveComment } from "@/components/threadz/thread-modal"
import { ShareSheet } from "@/components/threadz/share-sheet"
import { PostComposer } from "@/components/threadz/post-composer"
import { Avatar } from "@/components/threadz/avatar"
import { toast } from "@/hooks/use-toast"

// feed tampil 10 post per halaman — buka berikutnya MENGGANTI isi layar,
// bukan menumpuk: maksimal 10 post dirender kapan pun. anti-lag.
const PAGE_SIZE = 10
const LS_ME = "threadz:me"

export default function Home() {
  const [page, setPage] = useState(0)
  const [openThreadId, setOpenThreadId] = useState<number | null>(null)
  const [shareThreadId, setShareThreadId] = useState<number | null>(null)
  const [liveByThread, setLiveByThread] = useState<Record<string, LiveComment[]>>({})
  const [myPosts, setMyPosts] = useState<ThreadzThread[]>([])
  const [visitor, setVisitor] = useState<{ name: string; color: string } | null>(null)

  // identitas doang yang diinget. cuitan & komentar buatan lu gak disimpen
  // di mana pun — refresh, hilang. bersih, hemat, gak ada yang numpuk.
  useEffect(() => {
    queueMicrotask(() => {
      // sisa data lama yang dulu sempat disimpen? buang. hemat itu juga.
      try {
        localStorage.removeItem("threadz:extra")
      } catch {
        /* biarin */
      }
      try {
        const raw = localStorage.getItem(LS_ME)
        if (raw) {
          setVisitor(JSON.parse(raw))
        } else {
          const v = randomVisitor()
          localStorage.setItem(LS_ME, JSON.stringify(v))
          setVisitor(v)
        }
      } catch {
        setVisitor(randomVisitor())
      }
    })
  }, [])

  // cuitan buatan lu nempel paling atas, sisanya urutan data
  const allThreads = useMemo(() => [...myPosts, ...THREADS], [myPosts])

  const feed = useMemo(
    () => [...allThreads].sort((a, b) => a.minutesAgo - b.minutesAgo),
    [allThreads]
  )

  const openThread =
    openThreadId === null ? null : allThreads.find((t) => t.id === openThreadId) ?? null

  const handleComment = useCallback(
    (text: string) => {
      if (openThreadId === null || !visitor) return
      const mine: LiveComment = {
        key: `${Date.now()}-${Math.floor(Math.random() * 1e6)}`,
        name: visitor.name,
        color: visitor.color,
        minutesAgo: 0,
        content: text,
      }
      const tid = String(openThreadId)
      setLiveByThread((cur) => ({ ...cur, [tid]: [...(cur[tid] ?? []), mine] }))
    },
    [openThreadId, visitor]
  )

  const handlePost = useCallback(
    (text: string) => {
      if (!visitor) return
      const post: ThreadzThread = {
        id: -Date.now(),
        authorId: -1,
        minutesAgo: 0,
        content: text,
        shares: 0,
        comments: [],
      }
      setMyPosts((cur) => [post, ...cur])
      setPage(0)
      toast({ description: "Cuitan berhasil dikirim." })
    },
    [visitor]
  )

  const rerollIdentity = useCallback(() => {
    const v = randomVisitor()
    try {
      localStorage.setItem(LS_ME, JSON.stringify(v))
    } catch {
      /* biarin */
    }
    setVisitor(v)
    toast({ description: `Identitas baru: ${v.name}` })
  }, [])

  const shown = feed.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
  const hasMore = (page + 1) * PAGE_SIZE < feed.length

  return (
    <div className="min-h-screen bg-[#f4f0e8] text-stone-900">
      <div className="mx-auto max-w-[660px] px-3 pb-16 sm:px-4">
        {/* header */}
        <header className="sticky top-0 z-30 -mx-3 border-b border-stone-200/80 bg-[#f4f0e8]/92 shadow-[0_1px_10px_rgba(28,25,23,0.04)] backdrop-blur-md sm:-mx-4 sm:px-4">
          <div className="flex h-14 items-center justify-between px-3 sm:px-0">
            <h1 className="font-serif text-[22px] font-bold tracking-tight text-stone-900">
              Akiomida
            </h1>
            <button
              type="button"
              onClick={rerollIdentity}
              className="flex items-center gap-2 rounded-full border border-stone-200 bg-white py-1 pl-1 pr-3 text-[13px] text-stone-600 shadow-[0_1px_2px_rgba(28,25,23,0.05)] transition-colors hover:border-stone-300 hover:bg-stone-50"
              aria-label="Undi ulang identitas"
            >
              <Avatar name={visitor?.name ?? "lu"} color={visitor?.color ?? "#a8a29e"} size={26} />
              <span className="hidden max-w-[140px] truncate sm:inline">{visitor?.name ?? "akiomida..."}</span>
              <Dices className="h-4 w-4 text-stone-500" />
            </button>
          </div>
        </header>

        {/* feed */}
        <main className="flex flex-col gap-3 pt-4">
          {/* kotak nulis ala aplikasi ringan: nulis dulu, mikir belakangan */}
          <PostComposer visitor={visitor} onPost={handlePost} />

          {shown.map((t) => (
            <ThreadCard
              key={t.id}
              thread={t}
              visitor={visitor}
              onOpen={() => setOpenThreadId(t.id)}
              onShare={() => setShareThreadId(t.id)}
            />
          ))}

          {hasMore ? (
            /* penahan manual anti-lag: klik = GANTI isi layar dengan 10 berikutnya,
               bukan nambah — jadi render selalu maksimal 10 post */
            <div className="flex justify-center py-8">
              <button
                type="button"
                onClick={() => {
                  setPage((p) => p + 1)
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                className="group flex items-center gap-2 rounded-full border border-stone-300 bg-white px-8 py-2.5 text-[14px] font-semibold text-stone-700 shadow-[0_1px_2px_rgba(28,25,23,0.05)] transition-all hover:border-stone-400 hover:bg-stone-50 hover:shadow-[0_2px_8px_rgba(28,25,23,0.08)] active:scale-[0.98]"
              >
                Lihat lainnya
                <ArrowDown className="h-4 w-4 text-stone-400 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          ) : (
            <div className="px-4 py-14 text-center">
              <p className="text-sm text-stone-400">Kamu sudah sampai ujung feed.</p>
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                  setPage(0)
                }}
                className="mt-2 text-[13px] font-medium text-orange-800/70 underline-offset-2 transition-colors hover:text-orange-800 hover:underline"
              >
                Kembali ke awal
              </button>
            </div>
          )}
        </main>
      </div>

      <ThreadModal
        thread={openThread}
        liveComments={openThreadId === null ? [] : liveByThread[String(openThreadId)] ?? []}
        visitor={visitor}
        onComment={handleComment}
        onOpenChange={(open) => {
          if (!open) setOpenThreadId(null)
        }}
      />

      <ShareSheet
        threadId={shareThreadId}
        onOpenChange={(open) => {
          if (!open) setShareThreadId(null)
        }}
      />
    </div>
  )
}
