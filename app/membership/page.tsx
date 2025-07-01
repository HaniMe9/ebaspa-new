import MembershipHero from '@/components/membership/MembershipHero'
import MembershipBenefits from '@/components/membership/MembershipBenefits'
import MembershipCategories from '@/components/membership/MembershipCategories'
import HowToJoin from '@/components/membership/HowToJoin'
import MemberDirectory from '@/components/membership/MemberDirectory'

export const metadata = {
  title: 'Membership - EBASPA',
  description: 'Join EBASPA and become part of Ethiopia\'s premier business development services network. Access exclusive benefits, training, and networking opportunities.',
}

export default function MembershipPage() {
  return (
    <div className="pt-20">
      <MembershipHero />
      <MembershipBenefits />
      <MembershipCategories />
      <HowToJoin />
      <MemberDirectory />
    </div>
  )
} 