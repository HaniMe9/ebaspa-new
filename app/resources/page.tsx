import ResourcesHero from '@/components/resources/ResourcesHero'
import PublicationsSection from '@/components/resources/PublicationsSection'
import ToolkitsSection from '@/components/resources/ToolkitsSection'
import FAQSection from '@/components/resources/FAQSection'
import ResourceCTA from '@/components/resources/ResourceCTA'

export const metadata = {
  title: 'Resources - EBASPA',
  description: 'Access EBASPA\'s comprehensive library of publications, toolkits, research reports, and resources for business development services.',
}

export default function ResourcesPage() {
  return (
    <div className="pt-20">
      <ResourcesHero />
      <PublicationsSection />
      <ToolkitsSection />
      <FAQSection />
      <ResourceCTA />
    </div>
  )
} 