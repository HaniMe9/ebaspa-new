import MemberLoginForm from '@/components/membership/MemberLoginForm'
import LoginBenefits from '@/components/membership/LoginBenefits'

export const metadata = {
  title: 'Member Login - EBASPA',
  description: 'Login to your EBASPA member account to access exclusive resources, training programs, and networking opportunities.',
}

export default function MemberLoginPage() {
  return (
    <div className="pt-20">
      <div className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Member Login
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Access your EBASPA member portal to unlock exclusive resources, 
            training programs, and networking opportunities.
          </p>
        </div>
      </div>
      
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <MemberLoginForm />
            </div>
            <div>
              <LoginBenefits />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 