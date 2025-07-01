import MarketFacilitationHero from '@/components/services/MarketFacilitationHero'
import ClientReferralNetwork from '@/components/services/ClientReferralNetwork'
import MarketAccessPrograms from '@/components/services/MarketAccessPrograms'
import PartnershipFacilitation from '@/components/services/PartnershipFacilitation'
import MarketFacilitationCTA from '@/components/services/MarketFacilitationCTA'

export const metadata = {
  title: 'Market Facilitation - EBASPA',
  description: 'EBASPA\'s market facilitation services including client referral networks, market access programs, and business partnership facilitation.',
}

export default function MarketFacilitationPage() {
  return (
    <div className="pt-20">
      <MarketFacilitationHero />
      <ClientReferralNetwork />
      <MarketAccessPrograms />
      <PartnershipFacilitation />
      <MarketFacilitationCTA />
    </div>
  )
} 