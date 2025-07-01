'use client'

import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  MessageSquare, 
  TrendingUp, 
  Award, 
  Users,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: GraduationCap,
    title: 'Capacity Building',
    description: 'Comprehensive training programs and skill development initiatives for BDS providers and SMEs.',
    features: [
      'Professional certification courses',
      'Workshop and seminar programs',
      'Skill development training',
      'Leadership development',
      'Industry-specific training'
    ]
  },
  {
    icon: MessageSquare,
    title: 'Policy Advocacy',
    description: 'Representing the BDS sector in policy discussions and influencing regulatory frameworks.',
    features: [
      'Policy research and analysis',
      'Government engagement',
      'Advocacy campaigns',
      'Stakeholder consultations',
      'Policy recommendations'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Market Facilitation',
    description: 'Connecting BDS providers with market opportunities and facilitating business partnerships.',
    features: [
      'Client referral network',
      'Market access programs',
      'Partnership facilitation',
      'Business development support',
      'Market intelligence'
    ]
  },
  {
    icon: Award,
    title: 'Standards & Accreditation',
    description: 'Establishing and maintaining quality standards for the BDS sector in Ethiopia.',
    features: [
      'Quality standards development',
      'Accreditation programs',
      'Best practice sharing',
      'Professional recognition',
      'Quality assurance'
    ]
  },
  {
    icon: Users,
    title: 'SME Support',
    description: 'Comprehensive support services for small and medium enterprises across Ethiopia.',
    features: [
      'Business advisory services',
      'Growth strategy development',
      'Financial management support',
      'Technology adoption',
      'Market expansion assistance'
    ]
  }
]

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            EBASPA offers a wide range of services designed to strengthen Ethiopia's 
            business development services ecosystem and empower SMEs for sustainable growth.
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
              className="card p-6 h-full"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 