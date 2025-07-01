import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactMap from '@/components/contact/ContactMap'

export const metadata = {
  title: 'Contact Us - EBASPA',
  description: 'Get in touch with EBASPA. Contact us for membership inquiries, partnership opportunities, or general questions about our services.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactHero />
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <ContactMap />
    </div>
  )
} 