"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { Dices } from "lucide-react"
import { THREADS } from "@/lib/threadz/threads"
import { getUser } from "@/lib/threadz/data/users"
import { pickRandomReply, pickRandomReplyUser, randomVisitor } from "@/lib/threadz/extras"
import type { ThreadzThread } from "@/lib/threadz/types"
import { ThreadCard } from "@/components/threadz/thread-card"
import { ThreadModal, type LiveComment } from "@/components/threadz/thread-modal"
import { ShareSheet } from "@/components/threadz/share-sheet"
import { PostComposer } from "@/components/threadz/post-composer"
import { Avatar } from "@/components/threadz/avatar"
import { TABS, TAB_LABELS, type Tab } from "@/components/threadz/tabs"
import { toast } from "@/hooks/use-toast"

// feed tampil 10 post dulu, sisanya dibuka manual — biar ringan gak lagging
const PAGE_SIZE = 10
const LS_ME = "threadz:me"
const LS_EXTRA = "threadz:extra"
/** peluang ada yang bales komen lu. sengaja kecil. dunia gak diem nungguin lu. */
const REPLY_CHANCE = 0.01

interface ExtraStore {
  comments: Record<string, LiveComment[]>
  /** cuitan buatan pengunjung, id-nya negatif biar gak nabrak data seeded */
  posts: ThreadzThread[]
}

function loadExtras(): ExtraStore {
  try {
    const raw = localStorage.getItem(LS_EXTRA)
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<ExtraStore>
      return { comments: parsed.comments ?? {}, posts: parsed.posts ?? [] }
    }
  } catch {
    /* data rusak? buang aja */
  }
  return { comments: {}, posts: [] }
}

export default function Home() {
  const [tab, setTab] = useState<Tab>("terbaru")
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [openThreadId, setOpenThreadId] = useState<number | null>(null)
  const [shareThreadId, setShareThreadId] = useState<number | null>(null)
  const [liveByThread, setLiveByThread] = useState<Record<string, LiveComment[]>>({})
  const [myPosts, setMyPosts] = useState<ThreadzThread[]>([])
  const [visitor, setVisitor] = useState<{ name: string; color: string } | null>(null)

  // identitas, komentar & cuitan tersimpan dibaca setelah render pertama (localStorage cuma ada di browser)
  useEffect(() => {
    queueMicrotask(() => {
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
      const extras = loadExtras()
      setLiveByThread(extras.comments)
      setMyPosts(extras.posts)
    })
  }, [])

  const commentCountOf = useCallback(
    (t: ThreadzThread) => t.comments.length + (liveByThread[String(t.id)]?.length ?? 0),
    [liveByThread]
  )

  // cuitan buatan lu nempel paling atas, sisanya urutan data
  const allThreads = useMemo(() => [...myPosts, ...THREADS], [myPosts])

  const feed = useMemo(() => {
    if (tab === "terame") {
      return [...allThreads].sort(
        (a, b) => commentCountOf(b) - commentCountOf(a) || a.minutesAgo - b.minutesAgo
      )
    }
    if (tab === "otak-belok") {
      return allThreads
        .filter((t) => getUser(t.authorId)?.persona === "begok")
        .sort((a, b) => a.minutesAgo - b.minutesAgo)
    }
    return [...allThreads].sort((a, b) => a.minutesAgo - b.minutesAgo)
  }, [tab, commentCountOf, allThreads])

  const persistExtras = useCallback((next: ExtraStore) => {
    try {
      localStorage.setItem(LS_EXTRA, JSON.stringify(next))
    } catch {
      /* penuh? yaudah */
    }
  }, [])

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
      const updated = { ...liveByThread, [tid]: [...(liveByThread[tid] ?? []), mine] }
      setLiveByThread(updated)
      persistExtras({ comments: updated, posts: myPosts })

      // 1% doang ada yang bales, tanpa indikator apa2. kebanyakan komen lu ya udah gitu aja.
      if (Math.random() < REPLY_CHANCE) {
        const responder = pickRandomReplyUser()
        window.setTimeout(() => {
          const reply: LiveComment = {
            key: `${Date.now()}-${Math.floor(Math.random() * 1e6)}`,
            name: responder.name,
            color: responder.color,
            minutesAgo: 0,
            content: pickRandomReply(),
          }
          setLiveByThread((cur) => {
            const next = { ...cur, [tid]: [...(cur[tid] ?? []), reply] }
            persistExtras({ comments: next, posts: myPosts })
            return next
          })
        }, 6000 + Math.floor(Math.random() * 9000))
      }
    },
    [openThreadId, visitor, liveByThread, myPosts, persistExtras]
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
      const nextPosts = [post, ...myPosts]
      setMyPosts(nextPosts)
      persistExtras({ comments: liveByThread, posts: nextPosts })
      setTab("terbaru")
      setVisible(PAGE_SIZE)
      toast({ description: "udah keposting. nongol paling atas." })
    },
    [visitor, myPosts, liveByThread, persistExtras]
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

  const shown = feed.slice(0, visible)
  const hasMore = visible < feed.length

  return (
    <div className="min-h-screen bg-[#f4f0e8] text-stone-900">
      <div className="mx-auto max-w-[660px] px-3 pb-16 sm:px-4">
        {/* header */}
        <header className="sticky top-0 z-30 -mx-3 border-b border-stone-200/70 bg-[#f4f0e8]/90 backdrop-blur sm:-mx-4 sm:px-4">
          <div className="flex h-14 items-center justify-between px-3 sm:px-0">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-stone-900 font-serif text-lg text-amber-300">
                &Sigma;
              </span>
              <h1 className="font-serif text-[22px] font-bold tracking-tight text-stone-900">
                Akiomida
              </h1>
            </div>
            <button
              type="button"
              onClick={rerollIdentity}
              className="flex items-center gap-2 rounded-full border border-stone-300 bg-white/70 py-1 pl-1 pr-3 text-[13px] text-stone-600 transition-colors hover:border-stone-400 hover:bg-white"
              aria-label="Undi ulang identitas"
            >
              <Avatar name={visitor?.name ?? "lu"} color={visitor?.color ?? "#a8a29e"} size={26} />
              <span className="hidden max-w-[140px] truncate sm:inline">{visitor?.name ?? "akiomida..."}</span>
              <Dices className="h-4 w-4 text-stone-500" />
            </button>
          </div>
          <nav className="flex gap-6 px-1" aria-label="Tab feed">
            {TABS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setTab(t)
                  setVisible(PAGE_SIZE)
                }}
                className={`-mb-px border-b-2 pb-2.5 pt-1 text-[14px] transition-colors ${
                  tab === t
                    ? "border-orange-700 font-semibold text-stone-900"
                    : "border-transparent text-stone-500 hover:text-stone-800"
                }`}
                aria-pressed={tab === t}
              >
                {TAB_LABELS[t]}
              </button>
            ))}
          </nav>
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
            /* penahan manual ala aplikasi ringan: scroll mentok, klik dulu baru lanjut */
            <div className="flex flex-col items-center gap-2 py-6">
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="rounded-full border border-stone-300 bg-white px-6 py-2.5 text-[14px] font-semibold text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-50 active:scale-[0.98]"
              >
                Lihat lainnya
              </button>
              <span className="text-[12px] text-stone-400">biar gak berat, dibuka pelan-pelan</span>
            </div>
          ) : (
            <div className="px-4 py-12 text-center text-sm text-stone-400">
              <p>lu udah nyampe ujung feed.</p>
              <p className="mt-1">nol tombol suka. tetep rame.</p>
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
