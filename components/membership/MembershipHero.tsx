'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, Award, TrendingUp, ArrowRight } from 'lucide-react'

const stats = [
  {
    icon: Users,
    number: '48',
    label: 'Active Members',
    description: 'Qualified business advisory service providers'
  },
  {
    icon: Award,
    number: '50+',
    label: 'Training Programs',
    description: 'Capacity building initiatives delivered'
  },
  {
    icon: TrendingUp,
    number: '500+',
    label: 'SMEs Supported',
    description: 'Businesses empowered through our network'
  },
]

export default function MembershipHero() {
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
            Join EBASPA
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Become part of Ethiopia's premier business development services network. 
            Access exclusive benefits, training programs, and networking opportunities 
            that will accelerate your business growth and professional development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership/join" className="btn-secondary group">
              Apply for Membership
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link href="/membership/directory" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              <Users className="w-5 h-5 mr-2" />
              View Member Directory
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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