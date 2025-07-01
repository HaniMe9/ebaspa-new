import AboutHero from '@/components/about/AboutHero'
import MissionVision from '@/components/about/MissionVision'
import TeamSection from '@/components/about/TeamSection'
import PartnersSection from '@/components/about/PartnersSection'
import LegalInfo from '@/components/about/LegalInfo'

export const metadata = {
  title: 'About - EBASPA',
  description: 'Learn about the mission, vision, and team behind EBASPA.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutHero />
      <MissionVision />
      <TeamSection />
      <LegalInfo />
      <PartnersSection />
    </div>
  )
} 