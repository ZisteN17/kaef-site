'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Award, MapPin, Star } from 'lucide-react'
import Photo from './Photo'
import WaveDivider from './WaveDivider'
import { cafe, photos } from '../data/cafe'
import { cardUrl, routeUrl } from '../lib/links'
import { formatRating, pluralRu } from '../lib/format'
import { btnGhostDark, btnPrimary, container } from './ui'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const reduce = useReducedMotion()
  const word = photos['interior-wide']

  return (
    <section id="top" className="on-dark relative overflow-hidden bg-deep pb-[88px] pt-[calc(var(--header-h)+32px)] text-paper md:pb-[132px] md:pt-[calc(var(--header-h)+56px)]">
      <div className={`${container} grid items-center gap-10 lg:grid-cols-12`}>
        <div className="lg:col-span-7">
          <h1>
            <motion.span
              className="word-photo block pb-[0.08em] font-display leading-[0.95] text-[clamp(6.5rem,36vw,15rem)] lg:text-[clamp(10rem,19vw,17rem)]"
              style={{ ['--word-bg' as string]: `url(${word.src})` }}
              initial={reduce ? false : { opacity: 0, y: 28, scale: 1.04 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease }}
            >
              {cafe.name}
            </motion.span>
            <span className="sr-only"> ({cafe.nameAlt}) — {cafe.descriptor.toLowerCase()} в {cafe.city === 'Казань' ? 'Казани' : cafe.city}</span>
          </h1>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
          >
            <p className="mt-4 font-display text-[clamp(1.75rem,3.2vw,2.75rem)] leading-tight">{cafe.slogan}</p>
            <p className="mt-5 max-w-[34rem] text-mint">
              Завтраки, кофе и тот самый повод не спешить. {cafe.name} — гастрокофейня на Мансура Хасанова, 13. Красивые
              завтраки, знакомые блюда и спокойные встречи рядом с домом.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={routeUrl()} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                <MapPin size={18} aria-hidden="true" /> Построить маршрут
              </a>
              <a href="#menu" className={btnGhostDark}>
                Посмотреть меню
              </a>
            </div>
            <p className="mt-6 text-[15px] text-mint">
              {cafe.address.street}, {cafe.city}
            </p>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none">
          <motion.div
            initial={reduce ? false : { clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.2, ease, delay: 0.25 }}
          >
            <div className="overflow-hidden" style={{ borderRadius: 'var(--radius-arch)' }}>
              <Photo photo={photos['dish-sandwich-egg']} sizes="(min-width:1024px) 40vw, 420px" priority className="aspect-[4/5] h-auto w-full object-cover" />
            </div>
          </motion.div>
          <motion.a
            href={cardUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-5 left-3 flex items-center gap-3 rounded-card bg-paper px-4 py-3 text-ink shadow-[0_8px_24px_rgba(0,0,0,0.18)] sm:left-[-1rem]"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 1.1 }}
          >
            <Award size={22} className="shrink-0 text-rust" aria-hidden="true" />
            <span className="text-[14px] leading-tight">
              <span className="block font-semibold">{cafe.award}</span>
              <span className="mt-0.5 flex items-center gap-1 text-[13px]">
                <Star size={13} className="fill-rust text-rust" aria-hidden="true" />
                {formatRating(cafe.rating.value)} · {cafe.rating.ratings} {pluralRu(cafe.rating.ratings, ['оценка', 'оценки', 'оценок'])} на Яндекс Картах
              </span>
            </span>
          </motion.a>
        </div>
      </div>
      <WaveDivider to="paper" />
    </section>
  )
}
