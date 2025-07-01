'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  GraduationCap, 
  MessageSquare, 
  TrendingUp, 
  Award, 
  Users,
  ArrowRight 
} from 'lucide-react'

const serviceHighlights = [
  {
    icon: GraduationCap,
    title: 'Capacity Building',
    description: 'Training and skill development programs'
  },
  {
    icon: MessageSquare,
    title: 'Policy Advocacy',
    description: 'Influencing policy and regulations'
  },
  {
    icon: TrendingUp,
    title: 'Market Facilitation',
    description: 'Connecting businesses and opportunities'
  },
  {
    icon: Award,
    title: 'Standards & Accreditation',
    description: 'Quality standards and professional recognition'
  },
  {
    icon: Users,
    title: 'SME Support',
    description: 'Comprehensive support for small businesses'
  }
]

export default function ServicesHero() {
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
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">
            EBASPA provides a comprehensive suite of services designed to strengthen 
            Ethiopia's business development services ecosystem and empower SMEs/SGBs 
            for sustainable growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary group">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link href="/membership/join" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              <Users className="w-5 h-5 mr-2" />
              Become a Member
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {serviceHighlights.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-primary-100 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 