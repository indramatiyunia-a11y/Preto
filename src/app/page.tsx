"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Infinity as InfinityIcon, Flame, CircleHelp, Home as HomeIcon } from "lucide-react"
import { THREADS } from "@/lib/threadz/threads"
import { getUser } from "@/lib/threadz/data/users"
import {
  pickRandomReply,
  pickRandomReplyUser,
  randomVisitor,
} from "@/lib/threadz/extras"
import type { ThreadzThread } from "@/lib/threadz/types"
import { ThreadCard } from "@/components/threadz/thread-card"
import { ThreadModal, type LiveComment } from "@/components/threadz/thread-modal"
import { ShareSheet } from "@/components/threadz/share-sheet"
import { Avatar } from "@/components/threadz/avatar"
import { LeftNav } from "@/components/threadz/left-nav"
import { RightSidebar } from "@/components/threadz/right-sidebar"
import { TABS, TAB_LABELS, type Tab } from "@/components/threadz/tabs"
import { toast } from "@/hooks/use-toast"

const PAGE_SIZE = 14
const LS_ME = "threadz:me"
const LS_EXTRA = "threadz:extra"

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
    /* abaikan, data rusak ya buang aja */
  }
  return { comments: {}, shares: {} }
}

export default function Home() {
  const [tab, setTab] = useState<Tab>("untuk-lu")
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [openThreadId, setOpenThreadId] = useState<number | null>(null)
  const [shareThreadId, setShareThreadId] = useState<number | null>(null)
  const [liveByThread, setLiveByThread] = useState<Record<string, LiveComment[]>>({})
  const [extraShares, setExtraShares] = useState<Record<string, number>>({})
  const [typingIn, setTypingIn] = useState<Record<string, string | null>>({})
  const [visitor, setVisitor] = useState<{ name: string; color: string } | null>(null)
  const [onlineCount, setOnlineCount] = useState<number | null>(null)
  const sentinelRef = useRef<HTMLDivElement>(null)

  // muat identitas & komentar tersimpan (kayak lagi login, padahal cuma localStorage)
  // dibungkus queueMicrotask biar gak kena set-state sinkron di body effect
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
      setOnlineCount(1180 + Math.floor(Math.random() * 260))
    })
  }, [])

  // counter online naik-turun dikit biar hidup
  useEffect(() => {
    const t = setInterval(() => {
      setOnlineCount((c) =>
        c === null ? null : Math.min(1600, Math.max(980, c + Math.floor(Math.random() * 31) - 15))
      )
    }, 7000)
    return () => clearInterval(t)
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
    const sorted = [...THREADS]
    if (tab === "paling-rame") {
      sorted.sort((a, b) => commentCountOf(b) - commentCountOf(a) || a.minutesAgo - b.minutesAgo)
    } else if (tab === "gak-gamblang") {
      return sorted
        .filter((t) => getUser(t.authorId).persona === "begok")
        .sort((a, b) => a.minutesAgo - b.minutesAgo)
    } else {
      sorted.sort((a, b) => a.minutesAgo - b.minutesAgo)
    }
    return sorted
  }, [tab, commentCountOf])

  const persistExtras = useCallback((next: ExtraStore) => {
    try {
      localStorage.setItem(LS_EXTRA, JSON.stringify(next))
    } catch {
      /* full storage? yaudah, jangan bikin page crash */
    }
  }, [])

  const openThread = openThreadId === null ? null : THREADS.find((t) => t.id === openThreadId) ?? null

  const handleComment = useCallback(
    (text: string) => {
      if (openThreadId === null || !visitor) return
      const key = `${Date.now()}-${Math.floor(Math.random() * 1e6)}`
      const mine: LiveComment = {
        key,
        name: visitor.name,
        color: visitor.color,
        minutesAgo: 0,
        content: text,
        isYou: true,
      }
      const tid = String(openThreadId)
      const updated = { ...liveByThread, [tid]: [...(liveByThread[tid] ?? []), mine] }
      setLiveByThread(updated)
      persistExtras({ comments: updated, shares: extraShares })

      // simulasi biar kerasa online: ada yang "nulis" lalu bales
      const responder = pickRandomReplyUser()
      const delay = 1800 + Math.floor(Math.random() * 2200)
      window.setTimeout(() => {
        setTypingIn((m) => ({ ...m, [tid]: responder.name }))
        window.setTimeout(() => {
          const reply: LiveComment = {
            key: `${Date.now()}-${Math.floor(Math.random() * 1e6)}`,
            name: responder.name,
            color: responder.color,
            minutesAgo: 0,
            content: pickRandomReply(),
          }
          setTypingIn((m) => ({ ...m, [tid]: null }))
          setLiveByThread((cur) => {
            const nextList = [...(cur[tid] ?? []), reply]
            const next = { ...cur, [tid]: nextList }
            persistExtras({ comments: next, shares: extraShares })
            return next
          })
          // kadang ada yang ikutan nimbrung
          if (Math.random() < 0.45) {
            const second = pickRandomReplyUser()
            window.setTimeout(() => {
              setTypingIn((m) => ({ ...m, [tid]: second.name }))
              window.setTimeout(() => {
                const reply2: LiveComment = {
                  key: `${Date.now()}-${Math.floor(Math.random() * 1e6)}`,
                  name: second.name,
                  color: second.color,
                  minutesAgo: 0,
                  content: pickRandomReply(),
                }
                setTypingIn((m) => ({ ...m, [tid]: null }))
                setLiveByThread((cur) => {
                  const nextList = [...(cur[tid] ?? []), reply2]
                  const next = { ...cur, [tid]: nextList }
                  persistExtras({ comments: next, shares: extraShares })
                  return next
                })
              }, 2200 + Math.floor(Math.random() * 2500))
            }, 1200 + Math.floor(Math.random() * 1500))
          }
        }, 1600 + Math.floor(Math.random() * 2400))
      }, delay)
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
    toast({ description: `Identitas baru: ${v.name}. Warna juga baru. Hidup.` })
  }, [])

  const shown = feed.slice(0, visible)

  return (
    <div className="min-h-screen bg-black text-neutral-100">
      <LeftNav tab={tab} onTab={setTab} visitor={visitor} onReroll={rerollIdentity} />
      <RightSidebar onlineCount={onlineCount} />

      <div className="md:ml-[275px] lg:mr-[336px]">
        <div className="mx-auto min-h-screen max-w-[640px] border-neutral-800 md:border-x">
          {/* header */}
          <header className="sticky top-0 z-30 border-b border-neutral-800 bg-black/85 backdrop-blur">
            <div className="flex h-14 items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-black md:hidden">
                  <InfinityIcon className="h-4 w-4" strokeWidth={2.4} />
                </span>
                <span className="text-lg font-bold tracking-tight">threadz</span>
              </div>
              <span className="flex items-center gap-1.5 rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-400">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {onlineCount === null ? "..." : `${onlineCount.toLocaleString("id-ID")} lagi online`}
              </span>
            </div>
            <nav className="flex gap-2 overflow-x-auto px-4 pb-3" aria-label="Tab feed">
              {TABS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setTab(t)
                    setVisible(PAGE_SIZE)
                  }}
                  className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition-colors ${
                    tab === t
                      ? "border-neutral-100 bg-neutral-100 font-semibold text-black"
                      : "border-neutral-700 text-neutral-300 hover:bg-neutral-900"
                  }`}
                  aria-pressed={tab === t}
                >
                  {TAB_LABELS[t]}
                </button>
              ))}
            </nav>
          </header>

          {/* feed */}
          <main>
            {tab === "untuk-lu" && (
              <p className="px-4 pb-1 pt-4 text-[13px] text-neutral-500">
                100 cuitan dari orang awam, orang bego, dan ahli matematika. Semuanya otaknya nyasar ke angka. Gak ada like di sini — cuma komen &amp; share.
              </p>
            )}
            {tab === "paling-rame" && (
              <p className="px-4 pb-1 pt-4 text-[13px] text-neutral-500">
                Yang komentarnya paling heboh, diurutin dari yang paling gaduh.
              </p>
            )}
            {tab === "gak-gamblang" && (
              <p className="px-4 pb-1 pt-4 text-[13px] text-neutral-500">
                Kumpulan cuitan dari akun2 yang nalar matematikanya... kreatif. Baca pake hati, jangan pake rumus.
              </p>
            )}

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
              <div className="space-y-3 px-4 py-6">
                <div className="h-4 w-2/3 rounded bg-neutral-900" />
                <div className="h-4 w-1/2 rounded bg-neutral-900" />
              </div>
            ) : (
              <div className="px-4 py-10 text-center text-sm text-neutral-500">
                <p>lu udah sampe ujung feed. 100 cuitan, 0 like, gosip lengkap.</p>
                <p className="mt-1 text-neutral-600">jalan di server otak z.ai</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* bottom nav mobile */}
      <nav
        className="fixed inset-x-0 bottom-0 z-40 flex h-14 items-center justify-around border-t border-neutral-800 bg-black/90 backdrop-blur md:hidden"
        aria-label="Navigasi bawah"
      >
        <button
          type="button"
          onClick={() => setTab("untuk-lu")}
          className={`rounded-full p-3 ${tab === "untuk-lu" ? "text-neutral-100" : "text-neutral-500"}`}
          aria-label="Beranda"
        >
          <HomeIcon className="h-6 w-6" strokeWidth={1.9} />
        </button>
        <button
          type="button"
          onClick={() => setTab("paling-rame")}
          className={`rounded-full p-3 ${tab === "paling-rame" ? "text-neutral-100" : "text-neutral-500"}`}
          aria-label="Paling rame"
        >
          <Flame className="h-6 w-6" strokeWidth={1.9} />
        </button>
        <button
          type="button"
          onClick={() => setTab("gak-gamblang")}
          className={`rounded-full p-3 ${tab === "gak-gamblang" ? "text-neutral-100" : "text-neutral-500"}`}
          aria-label="Gak gamblang"
        >
          <CircleHelp className="h-6 w-6" strokeWidth={1.9} />
        </button>
        <button
          type="button"
          onClick={rerollIdentity}
          className="rounded-full p-3 text-neutral-500"
          aria-label="Undi ulang identitas"
        >
          <Avatar
            name={visitor?.name ?? "lu"}
            color={visitor?.color ?? "#404040"}
            size={26}
            online
          />
        </button>
      </nav>

      <ThreadModal
        thread={openThread}
        liveComments={openThreadId === null ? [] : liveByThread[String(openThreadId)] ?? []}
        typingName={openThreadId === null ? null : typingIn[String(openThreadId)] ?? null}
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
