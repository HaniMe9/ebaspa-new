import ResourceManagement from '@/components/admin/ResourceManagement'

export const metadata = {
  title: 'Resource Management - Admin Dashboard - EBASPA',
  description: 'Manage EBASPA resources, publications, and toolkits.',
}

export default function AdminResourcesPage() {
  return (
    <div className="pt-20">
      <ResourceManagement />
    </div>
  )
} 