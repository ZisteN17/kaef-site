export type ReviewsMode = 'curated' | 'yandex-widget'

const allowed = /^https:\/\/yandex\.(ru|com)\//

/** Официальный виджет отзывов организации (публичный адрес Яндекс Карт). */
export const defaultWidgetUrl = (orgId: string) => `https://yandex.ru/maps-reviews-widget/${orgId}?comments`

/**
 * Что показывать в блоке отзывов.
 * — пусто (по умолчанию): две отобранные реальные цитаты;
 * — https-адрес yandex.ru / yandex.com: официальный виджет Яндекса (отзывы с фото);
 * — «default»: виджет организации по умолчанию;
 * — всё остальное (чужой адрес, http, javascript:, «off») игнорируется и даёт цитаты.
 */
export function resolveReviews(env: string | undefined, orgId: string): { mode: ReviewsMode; widgetUrl?: string } {
  const v = env?.trim()
  if (v === 'default') return { mode: 'yandex-widget', widgetUrl: defaultWidgetUrl(orgId) }
  if (v && allowed.test(v)) return { mode: 'yandex-widget', widgetUrl: v }
  return { mode: 'curated' }
}
