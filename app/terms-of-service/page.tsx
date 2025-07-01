import TermsOfServiceContent from '@/components/legal/TermsOfServiceContent'

export const metadata = {
  title: 'Terms of Service - EBASPA',
  description: 'EBASPA terms of service and conditions for using our website and services.',
}

export default function TermsOfServicePage() {
  return (
    <div className="pt-20">
      <div className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Terms and conditions for using EBASPA's website and services.
          </p>
        </div>
      </div>
      
      <div className="section-padding bg-white">
        <div className="container-custom">
          <TermsOfServiceContent />
        </div>
      </div>
    </div>
  )
} 