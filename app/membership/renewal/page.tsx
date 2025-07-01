import MembershipRenewalForm from '@/components/membership/MembershipRenewalForm'

export const metadata = {
  title: 'Membership Renewal - EBASPA',
  description: 'Renew your EBASPA membership to continue accessing exclusive resources, training programs, and networking opportunities.',
}

export default function MembershipRenewalPage() {
  return (
    <div className="pt-20">
      <div className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Renew Your Membership
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Continue your journey with EBASPA and maintain access to our exclusive resources, 
            training programs, and networking opportunities.
          </p>
        </div>
      </div>
      
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <MembershipRenewalForm />
        </div>
      </div>
    </div>
  )
} 