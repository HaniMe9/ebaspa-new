'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@ebaspa.org',
    description: 'Send us an email anytime',
    href: 'mailto:info@ebaspa.org',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+251 911 123 456',
    description: 'Mon-Fri from 8am to 6pm',
    href: 'tel:+251911123456',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Addis Ababa, Ethiopia',
    description: 'Come say hello at our office',
    href: '#map',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Fri: 8:00 AM - 6:00 PM',
    description: 'Saturday: 9:00 AM - 1:00 PM',
    href: null,
  },
]

export default function ContactHero() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Have questions about our services, membership, or partnership opportunities? 
            We're here to help you navigate your options and connect with the right resources.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {method.title}
              </h3>
              {method.href ? (
                <a
                  href={method.href}
                  className="text-xl font-bold text-secondary-300 hover:text-secondary-200 transition-colors duration-200 block mb-2"
                >
                  {method.value}
                </a>
              ) : (
                <div className="text-xl font-bold text-secondary-300 mb-2">
                  {method.value}
                </div>
              )}
              <p className="text-primary-100 text-sm">
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 