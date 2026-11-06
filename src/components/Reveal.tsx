'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/**
 * Единственный вариант появления: мягкий подъём 12px.
 * Скрытое состояние включается только когда `html.js` выставлен скриптом — без JS контент виден.
 * При reduced motion скрытия нет (см. globals.css).
 */
export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add('is-in')
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -60px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}
