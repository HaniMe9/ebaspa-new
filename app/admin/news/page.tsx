import NewsManagement from '@/components/admin/NewsManagement'

export const metadata = {
  title: 'News Management - Admin Dashboard - EBASPA',
  description: 'Manage EBASPA news articles and publications.',
}

export default function AdminNewsPage() {
  return (
    <div className="pt-20">
      <NewsManagement />
    </div>
  )
} 