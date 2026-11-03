interface AvatarProps {
  name: string
  color: string
  size?: number
}

/**
 * Foto profil di Akiomida cuma boleh warna solid. Gak ada foto, gak ada huruf.
 * Bentuknya squircle biar gak mirip platform lain.
 */
export function Avatar({ name, color, size = 40 }: AvatarProps) {
  return (
    <span className="inline-block shrink-0" style={{ width: size, height: size }} title={name}>
      <span
        className="block h-full w-full rounded-[36%] transition-transform group-hover/thread:scale-[1.04]"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      <span className="sr-only">{name}</span>
    </span>
  )
}
