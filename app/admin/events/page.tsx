import EventManagement from '@/components/admin/EventManagement'

export const metadata = {
  title: 'Event Management - Admin Dashboard - EBASPA',
  description: 'Manage EBASPA events, workshops, and training programs.',
}

export default function AdminEventsPage() {
  return (
    <div className="pt-20">
      <EventManagement />
    </div>
  )
} 