export type ReviewsMode = 'curated' | 'yandex-widget'

/** Виджет включается только при корректном https-адресе Яндекса; иначе — curated-отзывы. */
export function resolveReviewsMode(widgetUrl: string | undefined): ReviewsMode {
  return widgetUrl && /^https:\/\/yandex\.(ru|com)\//.test(widgetUrl.trim()) ? 'yandex-widget' : 'curated'
}
