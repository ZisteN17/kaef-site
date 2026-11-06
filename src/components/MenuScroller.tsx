'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Photo from './Photo'
import WaveDivider from './WaveDivider'
import { cafe, menu, menuNote, photos } from '../data/cafe'
import { formatPrice } from '../lib/format'
import { menuUrl } from '../lib/links'
import { btnGhostLight } from './ui'

const pad = (n: number) => String(n).padStart(2, '0')

function Intro() {
  return (
    <div className="w-[min(82vw,520px)] shrink-0">
      <p className="section-label text-green">Меню</p>
      <h2 className="mt-3 text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">За чем приходят в {cafe.name}</h2>
      <p className="mt-4 max-w-[30rem] text-ink/80">Завтраки, супы и паста — шесть блюд из меню, с которых удобно начать.</p>
    </div>
  )
}

function Outro() {
  return (
    <div className="w-[min(82vw,420px)] shrink-0">
      <p className="text-[15px] text-ink/70">{menuNote}</p>
      <a href={menuUrl()} target="_blank" rel="noopener noreferrer" className={`${btnGhostLight} mt-5`}>
        Актуальное меню в Яндекс Картах <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </div>
  )
}

function Dish({ index }: { index: number }) {
  const item = menu[index]
  return (
    <li className="shrink-0">
      <div className="aspect-[4/5] h-[min(52svh,420px)] overflow-hidden rounded-card md:h-[min(58svh,540px)]">
        <Photo photo={photos[item.photo]} sizes="(min-width:768px) 440px, 72vw" className="h-full w-full object-cover" />
      </div>
      <div className="mt-4 max-w-[calc(min(52svh,420px)*0.8)] border-t border-green/25 pt-3 md:max-w-[calc(min(58svh,540px)*0.8)]">
        <h3 className="text-[19px] leading-snug [hyphens:auto] md:text-[22px]">{item.name}</h3>
        <p className="mt-1 text-[18px] font-semibold text-green">{formatPrice(item.price)}</p>
      </div>
    </li>
  )
}

/** Запасной вариант без движения: обычная сетка. */
function StaticMenu() {
  return (
    <section id="menu" className="relative bg-paper pb-[var(--space-after-wave)] pt-[var(--space-section)]">
      <div className="mx-auto w-full max-w-container px-[var(--gutter)]">
        <Intro />
        <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
          {menu.map((item) => (
            <li key={item.id}>
              <div className="aspect-[4/5] overflow-hidden rounded-card">
                <Photo photo={photos[item.photo]} sizes="(min-width:768px) 33vw, 50vw" className="h-full w-full object-cover" />
              </div>
              <div className="mt-3 border-t border-green/25 pt-3">
                <h3 className="text-[18px] leading-snug [hyphens:auto]">{item.name}</h3>
                <p className="mt-1 font-semibold text-green">{formatPrice(item.price)}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Outro />
        </div>
      </div>
      <WaveDivider to="ceramic" flip />
    </section>
  )
}

/**
 * Секция «прилипает» к экрану, пока пользователь листает вниз:
 * вертикальный скролл двигает ленту блюд вбок. Высота внешнего блока = путь ленты + высота экрана.
 */
export default function MenuScroller() {
  const reduce = useReducedMotion()
  const outer = useRef<HTMLElement>(null)
  const viewport = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const travel = useMotionValue(0)
  const [height, setHeight] = useState<number | null>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({ target: outer, offset: ['start start', 'end end'] })
  const x = useTransform([scrollYProgress, travel], ([p, t]: number[]) => -p * t)
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1])

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    setActive(Math.min(menu.length - 1, Math.max(0, Math.floor(p * menu.length * 0.999))))
  })

  useEffect(() => {
    if (reduce) return
    const measure = () => {
      if (!viewport.current || !track.current) return
      const t = Math.max(0, track.current.scrollWidth - viewport.current.clientWidth)
      travel.set(t)
      setHeight(t + window.innerHeight)
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (track.current) ro.observe(track.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [reduce, travel])

  if (reduce) return <StaticMenu />

  return (
    <section id="menu" ref={outer} className="relative bg-paper" style={{ height: height ?? '320vh' }}>
      <div
        ref={viewport}
        className="sticky top-[var(--header-h)] flex h-[calc(100svh-var(--header-h)-var(--mobilebar-h))] flex-col justify-center overflow-hidden pb-[var(--wave-h)] md:h-[calc(100svh-var(--header-h))]"
      >
        <motion.div
          ref={track}
          style={{ x }}
          className="flex w-max items-center gap-8 px-[max(var(--gutter),calc((100vw-var(--container))/2+var(--gutter)))] md:gap-14"
        >
          <Intro />
          <ul className="flex items-start gap-6 md:gap-10">
            {menu.map((_, i) => (
              <Dish key={menu[i].id} index={i} />
            ))}
          </ul>
          <Outro />
        </motion.div>

        <div className="mx-auto mt-8 flex w-full max-w-container items-center gap-4 px-[var(--gutter)]" aria-hidden="true">
          <span className="font-display text-[22px] tabular-nums text-green">
            {pad(active + 1)} <span className="text-ink/40">/ {pad(menu.length)}</span>
          </span>
          <span className="relative h-px flex-1 bg-green/25">
            <motion.span style={{ scaleX: bar }} className="absolute inset-0 origin-left bg-green" />
          </span>
          <span className="flex items-center gap-1 text-[13px] text-ink/60">
            <ArrowDown size={14} /> листайте вниз
          </span>
        </div>
      </div>
      <WaveDivider to="ceramic" flip />
    </section>
  )
}
