import Image from 'next/image'
import type { Photo as PhotoData } from '../data/cafe'

type Props = {
  photo: PhotoData
  sizes: string
  priority?: boolean
  className?: string
}

/** Единственное место, где рисуются фото: размеры и alt берутся из data/cafe.ts. */
export default function Photo({ photo, sizes, priority = false, className }: Props) {
  return (
    <Image
      src={photo.src}
      width={photo.width}
      height={photo.height}
      alt={photo.alt}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  )
}
