"use client"

import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer"
import { Link2, MessageCircle, Send, Facebook, Users } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface ShareSheetProps {
  threadId: number | null
  shareCount: number
  onOpenChange: (open: boolean) => void
  onShared: () => void
}

function threadUrl(id: number) {
  return `https://threadz.otakz.ai/cuit/${id}`
}

export function ShareSheet({ threadId, shareCount, onOpenChange, onShared }: ShareSheetProps) {
  if (threadId === null) return null

  const copyLink = async () => {
    const url = threadUrl(threadId)
    try {
      await navigator.clipboard.writeText(url)
      toast({ description: "Tautan disalin. Tempel di mana aja, satgas share." })
    } catch {
      toast({ description: `Tautan lu: ${url}` })
    }
    onShared()
  }

  const shareExternal = (appName: string) => {
    onShared()
    toast({ description: `Tautan disalin, tinggal tempel di ${appName}.` })
  }

  const options = [
    { icon: Link2, label: "Salin tautan", action: copyLink },
    { icon: MessageCircle, label: "Bagikan ke WhatsApp", action: () => shareExternal("WhatsApp") },
    { icon: Send, label: "Bagikan ke Telegram", action: () => shareExternal("Telegram") },
    { icon: Facebook, label: "Bagikan ke Facebook", action: () => shareExternal("Facebook") },
  ]

  return (
    <Drawer open onOpenChange={onOpenChange}>
      <DrawerContent className="mx-auto max-w-[600px] rounded-t-2xl border-neutral-800 bg-[#101010] text-neutral-100">
        <div className="mx-auto w-full max-w-md px-4 pb-8 pt-2">
          <DrawerTitle className="mb-1 text-center text-[15px] font-semibold">
            Bagikan cuitan
          </DrawerTitle>
          <p className="mb-4 text-center text-sm text-neutral-500">
            {shareCount} kali dibagikan · gak ada like di dunia ini
          </p>

          <div className="space-y-1">
            {options.map((opt) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => {
                  opt.action()
                  onOpenChange(false)
                }}
                className="flex w-full items-center gap-4 rounded-xl px-3 py-3 text-left text-[15px] transition-colors hover:bg-neutral-900"
              >
                <opt.icon className="h-5 w-5 text-neutral-400" strokeWidth={1.8} />
                {opt.label}
              </button>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-neutral-600">
            <Users className="h-3.5 w-3.5" />
            share juga dihitung. komentar juga. intinya yang penting gosip
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
