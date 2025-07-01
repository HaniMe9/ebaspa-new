import MembershipApplicationForm from '@/components/membership/MembershipApplicationForm'
import MembershipRequirements from '@/components/membership/MembershipRequirements'

export const metadata = {
  title: 'Apply for Membership - EBASPA',
  description: 'Apply to become a member of EBASPA. Join Ethiopia\'s premier business development services network.',
}

export default function JoinMembershipPage() {
  return (
    <div className="pt-20">
      <div className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Apply for Membership
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Join EBASPA and become part of Ethiopia's premier business development services network. 
            Complete the application form below to get started.
          </p>
        </div>
      </div>
      
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <MembershipApplicationForm />
            </div>
            <div>
              <MembershipRequirements />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 