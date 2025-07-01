import StandardsHero from '@/components/services/StandardsHero'
import QualityStandards from '@/components/services/QualityStandards'
import AccreditationPrograms from '@/components/services/AccreditationPrograms'
import BestPractices from '@/components/services/BestPractices'
import StandardsCTA from '@/components/services/StandardsCTA'

export const metadata = {
  title: 'Standards & Accreditation - EBASPA',
  description: 'EBASPA\'s quality standards development, accreditation programs, and best practice sharing for Ethiopia\'s business development services sector.',
}

export default function StandardsPage() {
  return (
    <div className="pt-20">
      <StandardsHero />
      <QualityStandards />
      <AccreditationPrograms />
      <BestPractices />
      <StandardsCTA />
    </div>
  )
} 