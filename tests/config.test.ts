import { describe, expect, it } from 'vitest'
import { resolveReviews } from '../src/lib/reviews-mode'
import { metrikaId } from '../src/lib/consent'
import { isDemo, siteUrl } from '../src/lib/site'

describe('режим отзывов', () => {
  const org = '91052974636'
  it('по умолчанию — отобранные цитаты', () => {
    expect(resolveReviews(undefined, org)).toEqual({ mode: 'curated' })
    expect(resolveReviews('  ', org)).toEqual({ mode: 'curated' })
    expect(resolveReviews('off', org)).toEqual({ mode: 'curated' })
  })
  it('значение default включает официальный виджет организации', () => {
    expect(resolveReviews('default', org)).toEqual({ mode: 'yandex-widget', widgetUrl: 'https://yandex.ru/maps-reviews-widget/91052974636?comments' })
  })
  it('свой адрес Яндекса включает виджет', () => {
    expect(resolveReviews('https://yandex.ru/maps-reviews-widget/1?comments', org)).toEqual({ mode: 'yandex-widget', widgetUrl: 'https://yandex.ru/maps-reviews-widget/1?comments' })
  })
  it('чужой или небезопасный адрес игнорируется', () => {
    for (const bad of ['http://yandex.ru/x', 'https://evil.example/widget', 'javascript:alert(1)']) {
      expect(resolveReviews(bad, org)).toEqual({ mode: 'curated' })
    }
  })
})

describe('идентификатор Метрики', () => {
  it('принимает только цифры', () => {
    expect(metrikaId('12345678')).toBe('12345678')
    expect(metrikaId(' 12345678 ')).toBe('12345678')
  })
  it('пусто или не цифры — аналитика выключена', () => {
    expect(metrikaId(undefined)).toBeNull()
    expect(metrikaId('')).toBeNull()
    expect(metrikaId('1234");alert(1);//')).toBeNull()
  })
})

describe('адрес сайта', () => {
  it('по умолчанию локальный, без завершающего слэша', () => {
    expect(siteUrl(undefined)).toBe('http://localhost:3010')
    expect(siteUrl('https://kaef.example/')).toBe('https://kaef.example')
  })
})

describe('демо-режим', () => {
  it('без домена — демо (не индексировать), с доменом — боевой', () => {
    expect(isDemo(undefined)).toBe(true)
    expect(isDemo('  ')).toBe(true)
    expect(isDemo('https://kaef.example')).toBe(false)
  })
})
