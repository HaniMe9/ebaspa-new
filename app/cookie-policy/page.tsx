import CookiePolicyContent from '@/components/legal/CookiePolicyContent'

export const metadata = {
  title: 'Cookie Policy - EBASPA',
  description: 'EBASPA cookie policy explaining how we use cookies and similar technologies on our website.',
}

export default function CookiePolicyPage() {
  return (
    <div className="pt-20">
      <div className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Learn how EBASPA uses cookies and similar technologies to enhance your browsing experience.
          </p>
        </div>
      </div>
      
      <div className="section-padding bg-white">
        <div className="container-custom">
          <CookiePolicyContent />
        </div>
      </div>
    </div>
  )
} 