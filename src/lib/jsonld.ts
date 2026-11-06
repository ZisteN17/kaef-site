import { cafe } from '../data/cafe'
import { cardUrl } from './links'

/** Только подтверждённые данные: без часов, цен и aggregateRating. */
export function cafeJsonLd(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: cafe.name,
    alternateName: cafe.nameLatin,
    description: `${cafe.descriptor} в Казани: завтраки, кофе и спокойные встречи.`,
    url: siteUrl,
    telephone: cafe.phone.e164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: cafe.address.street,
      addressLocality: cafe.city,
      addressRegion: cafe.address.region,
      postalCode: cafe.address.postalCode,
      addressCountry: 'RU',
    },
    geo: { '@type': 'GeoCoordinates', latitude: cafe.coordinates.lat, longitude: cafe.coordinates.lon },
    sameAs: [cafe.telegram.url, cardUrl()],
  }
}
