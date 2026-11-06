import Header from '../components/Header'
import Hero from '../components/Hero'
import MenuHighlights from '../components/MenuHighlights'
import Atmosphere from '../components/Atmosphere'
import Suits from '../components/Suits'
import ReviewsSection from '../components/ReviewsSection'
import { cafe } from '../data/cafe'
import { resolveReviews } from '../lib/reviews-mode'
import Location from '../components/Location'
import Footer from '../components/Footer'
import MobileBar from '../components/MobileBar'

export default function Page() {
  const { mode, widgetUrl } = resolveReviews(process.env.NEXT_PUBLIC_YANDEX_REVIEWS_WIDGET_URL, cafe.orgId)
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <MenuHighlights />
        <Atmosphere />
        <Suits />
        <ReviewsSection mode={mode} widgetUrl={widgetUrl} />
        <Location />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
