import HeroSection from '@/components/home/HeroSection'
import IntroductionSection from '@/components/home/IntroductionSection'
import KeyServicesSection from '@/components/home/KeyServicesSection'
import LatestNewsSection from '@/components/home/LatestNewsSection'
import FeaturedMembersSection from '@/components/home/FeaturedMembersSection'
import CallToActionSection from '@/components/home/CallToActionSection'
import StatsSection from '@/components/home/StatsSection'

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <IntroductionSection />
      <KeyServicesSection />
      <LatestNewsSection />
      <FeaturedMembersSection />
      <CallToActionSection />
      <StatsSection />
    </div>
  )
} 