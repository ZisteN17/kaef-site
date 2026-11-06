import { describe, expect, it } from 'vitest'
import { formatPrice, formatRating, pluralRu } from '../src/lib/format'
import { routeUrl, telUrl, reviewsUrl, menuUrl, cardUrl, mapEmbedUrl } from '../src/lib/links'
import { cafeJsonLd } from '../src/lib/jsonld'

describe('format', () => {
  it('цена с неразрывным пробелом и знаком рубля', () => {
    expect(formatPrice(390)).toBe('390 ₽')
    expect(formatPrice(1250)).toMatch(/^1\s250 ₽$/)
  })
  it('рейтинг с запятой', () => {
    expect(formatRating(4.7)).toBe('4,7')
    expect(formatRating(5)).toBe('5,0')
  })
})

describe('pluralRu', () => {
  const f: [string, string, string] = ['оценка', 'оценки', 'оценок']
  it.each([[1, 'оценка'], [2, 'оценки'], [5, 'оценок'], [11, 'оценок'], [21, 'оценка'], [169, 'оценок'], [261, 'оценка']])('%i → %s', (n, w) => {
    expect(pluralRu(n, f)).toBe(w)
  })
})

describe('links', () => {
  it('маршрут ведёт в Яндекс Карты на координаты карточки', () => {
    expect(routeUrl()).toBe('https://yandex.ru/maps/?rtext=~55.779664,49.183765&rtt=auto')
  })
  it('tel: в международном формате без пробелов', () => {
    expect(telUrl()).toBe('tel:+79050259995')
  })
  it('ссылки на карточку, отзывы и меню', () => {
    expect(cardUrl()).toBe('https://yandex.ru/maps/org/kayef/91052974636/')
    expect(reviewsUrl()).toBe('https://yandex.ru/maps/org/kayef/91052974636/reviews/')
    expect(menuUrl()).toBe('https://yandex.ru/maps/org/kayef/91052974636/menu/')
  })
  it('iframe карты — виджет Яндекса с точкой кафе', () => {
    expect(mapEmbedUrl()).toContain('https://yandex.ru/map-widget/v1/')
    expect(mapEmbedUrl()).toContain('49.183765')
  })
})

describe('jsonld', () => {
  const ld = cafeJsonLd('https://example.test') as Record<string, unknown>
  it('тип и подтверждённые поля', () => {
    expect(ld['@type']).toBe('CafeOrCoffeeShop')
    expect(ld.telephone).toBe('+79050259995')
    expect(ld.geo).toEqual({ '@type': 'GeoCoordinates', latitude: 55.779664, longitude: 49.183765 })
  })
  it('в разметке есть оба написания названия', () => {
    expect(ld.alternateName).toEqual(['Каеф', 'Kaef'])
  })
  it('нет неподтверждённого: часов, цен, aggregateRating', () => {
    for (const k of ['openingHours', 'openingHoursSpecification', 'priceRange', 'aggregateRating']) {
      expect(ld).not.toHaveProperty(k)
    }
  })
})
