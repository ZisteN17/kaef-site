import { Award, ArrowUpRight, Star } from 'lucide-react'
import Reveal from './Reveal'
import WaveDivider from './WaveDivider'
import { cafe, reviews } from '../data/cafe'
import { formatRating, pluralRu } from '../lib/format'
import { reviewsUrl } from '../lib/links'
import { resolveReviewsMode, type ReviewsMode } from '../lib/reviews-mode'

export { resolveReviewsMode }
import { btnGhostDark, container } from './ui'

export type { ReviewsMode }

export default function ReviewsSection({ mode, widgetUrl }: { mode: ReviewsMode; widgetUrl?: string }) {
  return (
    <section id="reviews" className="on-dark relative bg-deep pb-[130px] pt-[var(--space-section)] text-paper md:pb-[190px]">
      <div className={`${container} grid gap-14 lg:grid-cols-12`}>
        <Reveal className="lg:col-span-5">
          <p className="section-label text-mint">Отзывы</p>
          <p className="mt-4 font-display text-[clamp(6rem,14vw,11rem)] leading-[0.9] text-mint">{formatRating(cafe.rating.value)}</p>
          <p className="mt-4 flex items-center gap-2 text-[17px]">
            <Star size={18} className="fill-mint text-mint" aria-hidden="true" />
            {cafe.rating.ratings} {pluralRu(cafe.rating.ratings, ['оценка', 'оценки', 'оценок'])} ·{' '}
            {cafe.rating.reviews} {pluralRu(cafe.rating.reviews, ['отзыв', 'отзыва', 'отзывов'])} на Яндекс Картах
          </p>
          <p className="mt-3 flex items-center gap-2 text-[17px] text-mint">
            <Award size={18} aria-hidden="true" /> {cafe.award}
          </p>
          <a href={reviewsUrl()} target="_blank" rel="noopener noreferrer" className={`${btnGhostDark} mt-8`}>
            Читать все отзывы <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>

        <div className="lg:col-span-7">
          {mode === 'yandex-widget' && widgetUrl ? (
            <div className="mx-auto w-full min-w-[300px] max-w-[760px]">
              <iframe
                src={widgetUrl}
                title="Отзывы о Каеф на Яндекс Картах"
                loading="lazy"
                className="h-[600px] w-full rounded-card bg-paper"
              />
              <p className="mt-3 text-[14px] text-mint">
                Отзывы показывает Яндекс Карты.{' '}
                <a href={reviewsUrl()} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  Все отзывы на Яндекс Картах
                </a>
              </p>
            </div>
          ) : (
            <ul className="space-y-10">
              {reviews.map((r, i) => (
                <li key={r.id} className={i % 2 === 1 ? 'lg:ml-16' : ''}>
                  <Reveal>
                    <figure className="border-l-2 border-mint/60 pl-6 md:pl-8">
                      <blockquote className="font-display text-[clamp(1.5rem,2.6vw,2.125rem)] leading-[1.25]">«{r.text}»</blockquote>
                      <figcaption className="mt-4 text-[15px] text-mint">
                        {r.author} ·{' '}
                        <a href={r.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                          {r.source}
                        </a>
                      </figcaption>
                    </figure>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <WaveDivider to="paper" flip />
    </section>
  )
}
