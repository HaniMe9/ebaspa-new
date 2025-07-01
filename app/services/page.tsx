import ServicesHero from '@/components/services/ServicesHero'
import ServicesOverview from '@/components/services/ServicesOverview'
import ServiceCategories from '@/components/services/ServiceCategories'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceCTA from '@/components/services/ServiceCTA'

export const metadata = {
  title: 'Our Services - EBASPA',
  description: 'Discover EBASPA\'s comprehensive range of services including capacity building, policy advocacy, market facilitation, standards & accreditation, and SME support.',
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesHero />
      <ServicesOverview />
      <ServiceCategories />
      <ServiceProcess />
      <ServiceCTA />
    </div>
  )
} 