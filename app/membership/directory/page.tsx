import MemberDirectory from '@/components/membership/MemberDirectory'

export const metadata = {
  title: 'Member Directory - EBASPA',
  description: 'Find qualified business advisory service providers in Ethiopia through EBASPA\'s member directory.',
}

export default function MemberDirectoryPage() {
  return (
    <div className="pt-20">
      <MemberDirectory />
    </div>
  )
} 