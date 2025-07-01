import PolicyAdvocacyHero from '@/components/services/PolicyAdvocacyHero'
import AdvocacyInitiatives from '@/components/services/AdvocacyInitiatives'
import PolicyResearch from '@/components/services/PolicyResearch'
import GovernmentEngagement from '@/components/services/GovernmentEngagement'
import PolicyAdvocacyCTA from '@/components/services/PolicyAdvocacyCTA'

export const metadata = {
  title: 'Policy Advocacy - EBASPA',
  description: 'EBASPA\'s policy advocacy initiatives, government engagement, and efforts to influence regulatory frameworks for Ethiopia\'s business development services sector.',
}

export default function PolicyAdvocacyPage() {
  return (
    <div className="pt-20">
      <PolicyAdvocacyHero />
      <AdvocacyInitiatives />
      <PolicyResearch />
      <GovernmentEngagement />
      <PolicyAdvocacyCTA />
    </div>
  )
} 