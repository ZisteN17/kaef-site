'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Photo from './Photo'
import { menu, photos } from '../data/cafe'
import { formatPrice } from '../lib/format'

/** Горизонтальная лента блюд: свайп, колесо, перетаскивание мышью, стрелки и клавиатура. */
export default function MenuCarousel() {
  const rail = useRef<HTMLUListElement>(null)
  const drag = useRef<{ x: number; left: number } | null>(null)
  const [dragging, setDragging] = useState(false)
  const [edge, setEdge] = useState({ start: true, end: false })

  const update = useCallback(() => {
    const el = rail.current
    if (!el) return
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 })
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  function step(dir: 1 | -1) {
    const el = rail.current
    if (!el) return
    const card = el.querySelector('li')
    const w = card ? card.getBoundingClientRect().width + 20 : 320
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * w, behavior: reduce ? 'auto' : 'smooth' })
  }

  function onPointerDown(e: React.PointerEvent<HTMLUListElement>) {
    if (e.pointerType !== 'mouse' || !rail.current) return
    drag.current = { x: e.clientX, left: rail.current.scrollLeft }
    setDragging(true)
  }
  function onPointerMove(e: React.PointerEvent<HTMLUListElement>) {
    if (!drag.current || !rail.current) return
    rail.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x)
  }
  function endDrag() {
    drag.current = null
    setDragging(false)
  }

  const btn =
    'inline-flex h-12 w-12 items-center justify-center rounded-btn border border-green text-green transition-colors duration-fast hover:bg-green hover:text-paper disabled:cursor-default disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-green'

  return (
    <div>
      <div className="mx-auto flex w-full max-w-container items-center justify-between gap-4 px-[var(--gutter)]">
        <p className="text-[15px] text-ink/70">Листайте — {menu.length} блюд</p>
        <div className="flex gap-2">
          <button type="button" className={btn} onClick={() => step(-1)} disabled={edge.start} aria-label="Предыдущие блюда">
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <button type="button" className={btn} onClick={() => step(1)} disabled={edge.end} aria-label="Следующие блюда">
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul
        ref={rail}
        tabIndex={0}
        aria-label="Блюда меню"
        onScroll={update}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        className={`rail no-scrollbar mt-6 flex select-none gap-5 overflow-x-auto pb-2 ${
          dragging ? 'cursor-grabbing' : 'cursor-grab snap-x snap-mandatory'
        }`}
      >
        {menu.map((item) => (
          <li key={item.id} className="w-[74vw] max-w-[360px] shrink-0 snap-start sm:w-[320px] lg:w-[340px]">
            <Photo
              photo={photos[item.photo]}
              sizes="(min-width:1024px) 340px, (min-width:640px) 320px, 74vw"
              className="pointer-events-none aspect-[4/5] h-auto w-full rounded-card object-cover"
            />
            <div className="mt-4 border-t border-green/25 pt-3">
              <h3 className="text-[19px] leading-snug [hyphens:auto] md:text-[21px]">{item.name}</h3>
              <p className="mt-1 text-[18px] font-semibold text-green">{formatPrice(item.price)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
