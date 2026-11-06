import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { cafe, menu, photos, reviews, features, atmosphere } from '../src/data/cafe'

const root = join(__dirname, '..', 'public')

describe('данные кафе', () => {
  it('название как в Яндекс Картах', () => {
    expect(cafe.name).toBe('Каеф')
  })
  it('в меню 6 позиций, у каждой положительная цена и существующее фото', () => {
    expect(menu).toHaveLength(6)
    for (const m of menu) {
      expect(m.price).toBeGreaterThan(0)
      expect(photos[m.photo]).toBeDefined()
    }
  })
  it('цены совпадают с карточкой (бутерброд 420, сырники 390, овсянка 290)', () => {
    const price = (id: string) => menu.find((m) => m.id === id)?.price
    expect(price('sandwich-egg')).toBe(420)
    expect(price('syrniki')).toBe(390)
    expect(price('oatmeal')).toBe(290)
  })
  it('все фото — локальные файлы, существуют, с alt и размерами', () => {
    for (const p of Object.values(photos)) {
      expect(p.src.startsWith('/images/kaef/')).toBe(true)
      expect(existsSync(join(root, p.src))).toBe(true)
      expect(p.alt.length).toBeGreaterThan(5)
      expect(p.width).toBeGreaterThan(0)
      expect(p.height).toBeGreaterThan(0)
    }
  })
  it('фото людей не заведены в реестр', () => {
    for (const k of ['team', 'dog-guest', 'guests-window']) expect(photos).not.toHaveProperty(k)
  })
  it('отзывы: автор, источник «Яндекс Карты», ссылка на Яндекс', () => {
    expect(reviews.length).toBeGreaterThanOrEqual(2)
    for (const r of reviews) {
      expect(r.author).toBeTruthy()
      expect(r.source).toBe('Яндекс Карты')
      expect(r.url.startsWith('https://yandex.ru/maps/org/kayef/')).toBe(true)
    }
  })
  it('последовательность атмосферы: вход, зал, стойка, посуда', () => {
    expect(atmosphere.map((a) => a.id)).toEqual(['entrance', 'hall', 'counter', 'ceramics'])
    for (const a of atmosphere) expect(photos[a.photo]).toBeDefined()
  })
  it('удобства из карточки', () => {
    expect(features.map((f) => f.id)).toEqual(
      expect.arrayContaining(['wifi', 'parking', 'terrace', 'dogs', 'card']),
    )
  })
})
