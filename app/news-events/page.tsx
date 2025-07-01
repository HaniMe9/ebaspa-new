import NewsHero from '@/components/news/NewsHero'
import NewsGrid from '@/components/news/NewsGrid'
import NewsCategories from '@/components/news/NewsCategories'
import NewsletterSignup from '@/components/news/NewsletterSignup'
import EventsHero from '@/components/events/EventsHero'
import UpcomingEvents from '@/components/events/UpcomingEvents'
import PastEvents from '@/components/events/PastEvents'
import EventCategories from '@/components/events/EventCategories'
import EventRegistration from '@/components/events/EventRegistration'

export const metadata = {
  title: 'News & Events - EBASPA',
  description: 'Stay updated with the latest news, announcements, and events from EBASPA and the Ethiopian business development services sector.',
}

export default function NewsEventsPage() {
  return (
    <div className="pt-20">
      <NewsHero />
      <NewsGrid />
      <NewsCategories />
      <NewsletterSignup />
      <EventsHero />
      <UpcomingEvents />
      <PastEvents />
      <EventCategories />
      <EventRegistration />
    </div>
  )
} 