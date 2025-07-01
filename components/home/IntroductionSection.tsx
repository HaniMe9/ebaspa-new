'use client'

import { motion } from 'framer-motion'
import { Target, Users, Globe, Award } from 'lucide-react'

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
    number: '200+',
    label: 'SMEs Supported',
    description: 'Businesses empowered through our network'
  },
  {
    icon: Award,
    number: '10+',
    label: 'Partners',
    description: 'Strategic partnerships established'
  },
]

export default function IntroductionSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About EBASPA
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              The Ethiopian Business Advisory Service Providers Association (EBASPA) 
              is a membership organization dedicated to developing Ethiopia's business 
              development services (BDS) ecosystem and empowering SMEs/SGBs through 
              comprehensive support and capacity building.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We work with organizations like ANDE, GIZ, USAID/MS4G, AMEA, ATI, ECC, 
              EDI, Mastercard Foundation, UNIDO, JICA and many others to strengthen 
              Ethiopia's business development services sector.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/membership/join"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Member
              </motion.a>
              <motion.a
                href="/about"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {highlight.number}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  {highlight.label}
                </div>
                <div className="text-gray-600 text-sm">
                  {highlight.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 