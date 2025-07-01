import PrivacyPolicyContent from '@/components/legal/PrivacyPolicyContent'

export const metadata = {
  title: 'Privacy Policy - EBASPA',
  description: 'EBASPA privacy policy explaining how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <div className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Learn how EBASPA collects, uses, and protects your personal information.
          </p>
        </div>
      </div>
      
      <div className="section-padding bg-white">
        <div className="container-custom">
          <PrivacyPolicyContent />
        </div>
      </div>
    </div>
  )
} 