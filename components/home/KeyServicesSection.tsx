'use client'

import { motion } from 'framer-motion'
import { Users, Target, Building2, Shield, TrendingUp, Globe } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Capacity Building',
    description: 'Training and development programs for business advisory service providers to enhance their skills and capabilities.',
    href: '/services/capacity-building'
  },
  {
    icon: Target,
    title: 'Policy Advocacy',
    description: 'Advocating for supportive policies and regulations that strengthen the BDS ecosystem in Ethiopia.',
    href: '/services/policy-advocacy'
  },
  {
    icon: Building2,
    title: 'Market Facilitation',
    description: 'Connecting SMEs with business advisory services and creating market opportunities for sustainable growth.',
    href: '/services/market-facilitation'
  },
  {
    icon: Shield,
    title: 'Standards & Accreditation',
    description: 'Establishing industry standards and accreditation programs to ensure quality service delivery.',
    href: '/services/standards'
  },
  {
    icon: TrendingUp,
    title: 'SME Support',
    description: 'Comprehensive support services for small and medium enterprises to overcome growth challenges.',
    href: '/services/sme-support'
  },
  {
    icon: Globe,
    title: 'Networking & Partnerships',
    description: 'Facilitating connections between BDS providers, SMEs, and international development partners.',
    href: '/services'
  }
]

export default function KeyServicesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Key Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            EBASPA provides comprehensive services to strengthen Ethiopia's business 
            development services ecosystem and support the growth of SMEs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-200">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <a
                href={service.href}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
              >
                Learn More
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="/services" className="btn-primary">
            View All Services
          </a>
        </motion.div>
      </div>
    </section>
  )
} 