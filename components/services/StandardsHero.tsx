'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Users, CheckCircle } from 'lucide-react'

const stats = [
  {
    icon: Award,
    number: '10+',
    label: 'Quality Standards',
    description: 'Industry benchmarks'
  },
  {
    icon: Shield,
    number: '50+',
    label: 'Accredited Providers',
    description: 'Quality certified'
  },
  {
    icon: Users,
    number: '200+',
    label: 'Practices Shared',
    description: 'Best practices'
  },
  {
    icon: CheckCircle,
    number: '95%',
    label: 'Compliance Rate',
    description: 'Standards adherence'
  }
]

export default function StandardsHero() {
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
            Standards & Accreditation
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Establishing and maintaining quality standards for business development services 
            in Ethiopia through accreditation programs and best practice sharing.
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