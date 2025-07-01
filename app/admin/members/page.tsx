import MemberManagement from '@/components/admin/MemberManagement'

export const metadata = {
  title: 'Member Management - Admin Dashboard - EBASPA',
  description: 'Manage EBASPA member accounts, profiles, and memberships.',
}

export default function AdminMembersPage() {
  return (
    <div className="pt-20">
      <MemberManagement />
    </div>
  )
} 