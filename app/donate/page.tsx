import DonationForm from '@/components/payment/DonationForm'

export const metadata = {
  title: 'Donate - EBASPA',
  description: 'Support EBASPA\'s mission to develop Ethiopia\'s business development services ecosystem through your generous donation.',
}

export default function DonatePage() {
  return (
    <div className="pt-20">
      <div className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Your donation helps us develop Ethiopia's business development services ecosystem 
            and empower SMEs through capacity building, policy advocacy, and market facilitation.
          </p>
        </div>
      </div>
      
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <DonationForm />
        </div>
      </div>
    </div>
  )
} 