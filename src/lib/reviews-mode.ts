export type ReviewsMode = 'curated' | 'yandex-widget'

const allowed = /^https:\/\/yandex\.(ru|com)\//

/** Официальный виджет отзывов организации (публичный адрес Яндекс Карт). */
export const defaultWidgetUrl = (orgId: string) => `https://yandex.ru/maps-reviews-widget/${orgId}?comments`

/**
 * Что показывать в блоке отзывов.
 * — пусто: официальный виджет по умолчанию (отзывы с фото, всегда свежие);
 * — https-адрес yandex.ru / yandex.com: свой виджет;
 * — «off»: виджет выключен, показываются отобранные цитаты;
 * — всё остальное (чужой адрес, http, javascript:) игнорируется и даёт виджет по умолчанию.
 */
export function resolveReviews(env: string | undefined, orgId: string): { mode: ReviewsMode; widgetUrl?: string } {
  const v = env?.trim()
  if (v === 'off') return { mode: 'curated' }
  if (v && allowed.test(v)) return { mode: 'yandex-widget', widgetUrl: v }
  return { mode: 'yandex-widget', widgetUrl: defaultWidgetUrl(orgId) }
}
