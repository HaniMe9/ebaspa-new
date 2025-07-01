import ContactManagement from '@/components/admin/ContactManagement'

export const metadata = {
  title: 'Contact Management - Admin Dashboard - EBASPA',
  description: 'Manage contact inquiries and messages.',
}

export default function AdminContactsPage() {
  return (
    <div className="pt-20">
      <ContactManagement />
    </div>
  )
} 