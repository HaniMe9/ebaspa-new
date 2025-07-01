import CapacityBuildingHero from '@/components/services/CapacityBuildingHero'
import TrainingPrograms from '@/components/services/TrainingPrograms'
import CertificationCourses from '@/components/services/CertificationCourses'
import WorkshopSchedule from '@/components/services/WorkshopSchedule'
import CapacityBuildingCTA from '@/components/services/CapacityBuildingCTA'

export const metadata = {
  title: 'Capacity Building - EBASPA',
  description: 'Comprehensive capacity building programs, training courses, and skill development initiatives for business development service providers and SMEs in Ethiopia.',
}

export default function CapacityBuildingPage() {
  return (
    <div className="pt-20">
      <CapacityBuildingHero />
      <TrainingPrograms />
      <CertificationCourses />
      <WorkshopSchedule />
      <CapacityBuildingCTA />
    </div>
  )
} 