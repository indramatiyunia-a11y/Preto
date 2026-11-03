"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Dices } from "lucide-react"
import { THREADS } from "@/lib/threadz/threads"
import { getUser } from "@/lib/threadz/data/users"
import { pickRandomReply, pickRandomReplyUser, randomVisitor } from "@/lib/threadz/extras"
import type { ThreadzThread } from "@/lib/threadz/types"
import { ThreadCard } from "@/components/threadz/thread-card"
import { ThreadModal, type LiveComment } from "@/components/threadz/thread-modal"
import { ShareSheet } from "@/components/threadz/share-sheet"
import { Avatar } from "@/components/threadz/avatar"
import { TABS, TAB_LABELS, type Tab } from "@/components/threadz/tabs"
import { toast } from "@/hooks/use-toast"

const PAGE_SIZE = 14
const LS_ME = "threadz:me"
const LS_EXTRA = "threadz:extra"
/** peluang ada yang bales komen lu. sengaja kecil. dunia gak diem nungguin lu. */
const REPLY_CHANCE = 0.01

interface ExtraStore {
  comments: Record<string, LiveComment[]>
  shares: Record<string, number>
}

function loadExtras(): ExtraStore {
  try {
    const raw = localStorage.getItem(LS_EXTRA)
    if (raw) {
      const parsed = JSON.parse(raw) as ExtraStore
      return { comments: parsed.comments ?? {}, shares: parsed.shares ?? {} }
    }
  } catch {
    /* data rusak? buang aja */
  }
  return { comments: {}, shares: {} }
}

export default function Home() {
  const [tab, setTab] = useState<Tab>("terbaru")
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [openThreadId, setOpenThreadId] = useState<number | null>(null)
  const [shareThreadId, setShareThreadId] = useState<number | null>(null)
  const [liveByThread, setLiveByThread] = useState<Record<string, LiveComment[]>>({})
  const [extraShares, setExtraShares] = useState<Record<string, number>>({})
  const [visitor, setVisitor] = useState<{ name: string; color: string } | null>(null)
  const sentinelRef = useRef<HTMLDivElement>(null)

  // identitas & komentar tersimpan dibaca setelah render pertama (localStorage cuma ada di browser)
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
      setExtraShares(extras.shares)
    })
  }, [])

  // infinite scroll
  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible((v) => Math.min(v + 10, THREADS.length))
        }
      },
      { rootMargin: "600px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const commentCountOf = useCallback(
    (t: ThreadzThread) => t.comments.length + (liveByThread[String(t.id)]?.length ?? 0),
    [liveByThread]
  )

  const shareCountOf = useCallback(
    (t: ThreadzThread) => t.shares + (extraShares[String(t.id)] ?? 0),
    [extraShares]
  )

  const feed = useMemo(() => {
    if (tab === "terame") {
      return [...THREADS].sort(
        (a, b) => commentCountOf(b) - commentCountOf(a) || a.minutesAgo - b.minutesAgo
      )
    }
    if (tab === "otak-belok") {
      return THREADS.filter((t) => getUser(t.authorId).persona === "begok").sort(
        (a, b) => a.minutesAgo - b.minutesAgo
      )
    }
    return [...THREADS].sort((a, b) => a.minutesAgo - b.minutesAgo)
  }, [tab, commentCountOf])

  const persistExtras = useCallback((next: ExtraStore) => {
    try {
      localStorage.setItem(LS_EXTRA, JSON.stringify(next))
    } catch {
      /* penuh? yaudah */
    }
  }, [])

  const openThread = openThreadId === null ? null : THREADS.find((t) => t.id === openThreadId) ?? null

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
      persistExtras({ comments: updated, shares: extraShares })

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
            persistExtras({ comments: next, shares: extraShares })
            return next
          })
        }, 6000 + Math.floor(Math.random() * 9000))
      }
    },
    [openThreadId, visitor, liveByThread, extraShares, persistExtras]
  )

  const handleShared = useCallback(() => {
    if (shareThreadId === null) return
    const tid = String(shareThreadId)
    setExtraShares((cur) => {
      const next = { ...cur, [tid]: (cur[tid] ?? 0) + 1 }
      persistExtras({ comments: liveByThread, shares: next })
      return next
    })
  }, [shareThreadId, liveByThread, persistExtras])

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
          {shown.map((t) => (
            <ThreadCard
              key={t.id}
              thread={t}
              commentCount={commentCountOf(t)}
              shareCount={shareCountOf(t)}
              onOpen={() => setOpenThreadId(t.id)}
              onShare={() => setShareThreadId(t.id)}
            />
          ))}

          <div ref={sentinelRef} aria-hidden="true" />

          {visible < feed.length ? (
            <div className="space-y-3 rounded-2xl border border-stone-200/70 bg-white/50 px-5 py-6">
              <div className="h-4 w-2/3 rounded bg-stone-200/80" />
              <div className="h-4 w-1/2 rounded bg-stone-200/80" />
            </div>
          ) : (
            <div className="px-4 py-12 text-center text-sm text-stone-400">
              <p>lu udah nyampe ujung feed.</p>
              <p className="mt-1">100 cuitan. nol tombol suka.</p>
            </div>
          )}
        </main>
      </div>

      <ThreadModal
        thread={openThread}
        liveComments={openThreadId === null ? [] : liveByThread[String(openThreadId)] ?? []}
        visitor={visitor}
        shareCount={openThread ? shareCountOf(openThread) : 0}
        onComment={handleComment}
        onOpenChange={(open) => {
          if (!open) setOpenThreadId(null)
        }}
      />

      <ShareSheet
        threadId={shareThreadId}
        shareCount={shareThreadId === null ? 0 : shareCountOf(THREADS.find((t) => t.id === shareThreadId)!)}
        onOpenChange={(open) => {
          if (!open) setShareThreadId(null)
        }}
        onShared={handleShared}
      />
    </div>
  )
}
