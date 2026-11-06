import { describe, expect, it } from 'vitest'
import { resolveReviewsMode } from '../src/lib/reviews-mode'
import { metrikaId } from '../src/lib/consent'
import { siteUrl } from '../src/lib/site'

describe('режим отзывов', () => {
  it('без адреса — curated', () => {
    expect(resolveReviewsMode(undefined)).toBe('curated')
    expect(resolveReviewsMode('')).toBe('curated')
  })
  it('адрес виджета Яндекса — yandex-widget', () => {
    expect(resolveReviewsMode('https://yandex.ru/maps-reviews-widget/91052974636?comments')).toBe('yandex-widget')
  })
  it('чужой или небезопасный адрес — curated', () => {
    expect(resolveReviewsMode('http://yandex.ru/x')).toBe('curated')
    expect(resolveReviewsMode('https://evil.example/widget')).toBe('curated')
    expect(resolveReviewsMode('javascript:alert(1)')).toBe('curated')
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
