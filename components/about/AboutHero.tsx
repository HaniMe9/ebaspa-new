'use client'

import { motion } from 'framer-motion'
import { Target, Users, Globe, Award, Calendar } from 'lucide-react'

const highlights = [
  {
    icon: Target,
    number: '2022',
    label: 'Established',
    description: 'Officially registered under Registry Number 6441'
  },
  {
    icon: Users,
    number: '48',
    label: 'Members',
    description: 'Qualified business advisory service providers'
  },
  {
    icon: Globe,
    number: '500+',
    label: 'SMEs Supported',
    description: 'Businesses empowered through our network'
  },
  {
    icon: Award,
    number: '25+',
    label: 'Partners',
    description: 'Strategic partnerships established'
  },
]

export default function AboutHero() {
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
            About EBASPA
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            The Ethiopian Business Advisory Service Providers Association (EBASPA) is a 
            membership organization dedicated to developing Ethiopia's business development 
            services (BDS) ecosystem and empowering SMEs/SGBs through comprehensive support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-secondary-300 mb-2">
                {highlight.number}
              </div>
              <div className="text-lg font-semibold mb-2">
                {highlight.label}
              </div>
              <div className="text-primary-100 text-sm">
                {highlight.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 