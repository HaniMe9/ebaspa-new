'use client'

import { motion } from 'framer-motion'
import { Users, Building, Award, Globe } from 'lucide-react'

const stats = [
  {
    icon: Users,
    number: '48',
    label: 'Active Members',
    description: 'Qualified business advisory service providers'
  },
  {
    icon: Building,
    number: '50+',
    label: 'SMEs Supported',
    description: 'Businesses empowered through our network'
  },
  {
    icon: Award,
    number: '10+',
    label: 'Strategic Partners',
    description: 'International and local organizations'
  },
  {
    icon: Globe,
    number: '50+',
    label: 'Events Organized',
    description: 'Workshops, conferences, and networking events'
  }
]

export default function StatsSection() {
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
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how EBASPA is making a difference in Ethiopia's business development 
            services sector through our comprehensive programs and initiatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-10 h-10 text-primary-600" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-gray-700 mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Growing Network
            </h3>
            <p className="text-gray-600 mb-6">
              Be part of Ethiopia's most comprehensive business development services 
              network. Together, we can create a stronger, more vibrant business ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/membership/join" className="btn-primary">
                Become a Member
              </a>
              <a href="/about" className="btn-outline">
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 