import EventsHero from '@/components/events/EventsHero'
import UpcomingEvents from '@/components/events/UpcomingEvents'
import PastEvents from '@/components/events/PastEvents'
import EventCategories from '@/components/events/EventCategories'
import EventRegistration from '@/components/events/EventRegistration'

export const metadata = {
  title: 'Events - EBASPA',
  description: 'Discover upcoming events, conferences, workshops, and training programs organized by EBASPA and our partners.',
}

export default function EventsPage() {
  return (
    <div className="pt-20">
      <EventsHero />
      <EventCategories />
      <UpcomingEvents />
      <EventRegistration />
      <PastEvents />
    </div>
  )
} 