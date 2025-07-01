import MembershipBenefits from '@/components/membership/MembershipBenefits'

export const metadata = {
  title: 'Membership Benefits - EBASPA',
  description: 'Discover the exclusive benefits of joining EBASPA. Access training programs, networking opportunities, and resources to accelerate your business growth.',
}

export default function MembershipBenefitsPage() {
  return (
    <div className="pt-20">
      <div className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Membership Benefits
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Unlock a comprehensive suite of benefits designed to accelerate your 
            professional growth and business success.
          </p>
        </div>
      </div>
      <MembershipBenefits />
    </div>
  )
} 