'use client'

import { useState } from 'react'
import { Menu, X, MapPin } from 'lucide-react'
import Mark from './Mark'
import { cafe } from '../data/cafe'
import { routeUrl } from '../lib/links'
import { btnPrimary, container } from './ui'

const nav = [
  { href: '#menu', label: 'Меню' },
  { href: '#atmosphere', label: 'Атмосфера' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contacts', label: 'Как добраться' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="on-dark fixed inset-x-0 top-0 z-50 bg-deep text-paper" style={{ height: 'var(--header-h)' }}>
      <div className={`${container} flex h-full items-center justify-between gap-6`}>
        <a href="#top" className="flex items-center gap-3" aria-label={`${cafe.name} — наверх`}>
          <Mark className="h-9 w-9" />
          <span className="font-display text-[26px] leading-none">{cafe.name}</span>
        </a>

        <nav aria-label="Основная навигация" className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-[15px] text-mint transition-colors duration-fast hover:text-paper">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={routeUrl()} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} hidden !min-h-[40px] md:inline-flex`}>
            <MapPin size={16} aria-hidden="true" /> Построить маршрут
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Мобильная навигация" className="border-t border-mint/20 bg-deep md:hidden">
          <ul className={`${container} flex flex-col py-4`}>
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block py-3 font-display text-[28px]">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
