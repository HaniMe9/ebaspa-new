import SMESupportHero from '@/components/services/SMESupportHero'
import BusinessAdvisory from '@/components/services/BusinessAdvisory'
import GrowthStrategy from '@/components/services/GrowthStrategy'
import FinancialManagement from '@/components/services/FinancialManagement'
import SMESupportCTA from '@/components/services/SMESupportCTA'

export const metadata = {
  title: 'SME Support - EBASPA',
  description: 'Comprehensive support services for small and medium enterprises in Ethiopia including business advisory, growth strategy, and financial management.',
}

export default function SMESupportPage() {
  return (
    <div className="pt-20">
      <SMESupportHero />
      <BusinessAdvisory />
      <GrowthStrategy />
      <FinancialManagement />
      <SMESupportCTA />
    </div>
  )
} 