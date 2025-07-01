'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Users, Award, Clock } from 'lucide-react'

const stats = [
  {
    icon: GraduationCap,
    number: '50+',
    label: 'Training Programs',
    description: 'Professional development courses'
  },
  {
    icon: Users,
    number: '500+',
    label: 'Participants',
    description: 'Professionals trained'
  },
  {
    icon: Award,
    number: '25+',
    label: 'Certifications',
    description: 'Industry-recognized credentials'
  },
  {
    icon: Clock,
    number: '2000+',
    label: 'Training Hours',
    description: 'Comprehensive learning'
  }
]

export default function CapacityBuildingHero() {
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
            Capacity Building
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive training programs and skill development initiatives designed to enhance 
            the capabilities of business development service providers and SMEs across Ethiopia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-secondary-300 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-primary-100 text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 