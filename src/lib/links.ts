import { cafe } from '../data/cafe'

const card = `https://yandex.ru/maps/org/kayef/${cafe.orgId}/`

export const cardUrl = () => card
export const reviewsUrl = () => `${card}reviews/`
export const menuUrl = () => `${card}menu/`
export const telUrl = () => `tel:${cafe.phone.e164}`
export const telegramUrl = () => cafe.telegram.url

/** Маршрут до кафе: Яндекс Карты, точка назначения — координаты карточки */
export const routeUrl = () =>
  `https://yandex.ru/maps/?rtext=~${cafe.coordinates.lat},${cafe.coordinates.lon}&rtt=auto`

/** URL iframe-карты (ленивая загрузка в компоненте) */
export const mapEmbedUrl = () =>
  `https://yandex.ru/map-widget/v1/?ll=${cafe.coordinates.lon}%2C${cafe.coordinates.lat}&z=16&pt=${cafe.coordinates.lon},${cafe.coordinates.lat},pm2gnm`
