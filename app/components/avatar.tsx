// app/components/avatar.tsx
import Image from 'next/image'

type AvatarProps = {
  id: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export function Avatar({ id, alt, className, width = 128, height = 128 }: AvatarProps) {
  return (
    <Image
      src={`/${id}.png`}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  )
}

export function AvatarOfMe() {
  return <Avatar id="me" alt="A portrait of me" />
}
