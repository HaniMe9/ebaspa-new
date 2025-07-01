'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Shield, Users, TrendingUp } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We operate with the highest ethical standards and transparency in all our activities.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of partnerships and collective action to achieve greater impact.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'We embrace new approaches and technologies to deliver better services and outcomes.'
  },
  {
    icon: Shield,
    title: 'Quality',
    description: 'We maintain high standards in all our services and member qualifications.'
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'We measure our success by the positive change we create in Ethiopia\'s business ecosystem.'
  },
]

export default function MissionVision() {
  return (
    <section id="mission-vision" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To build a vibrant and professional business development services (BDS) ecosystem 
              in Ethiopia that fosters the growth and competitiveness of micro, small, and 
              medium enterprises (MSMEs).
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-secondary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To be the leading and most trusted business development service providers 
              association in Ethiopia, recognized for our excellence, innovation, and impact 
              on the national economy.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These values guide everything we do and shape our relationships with members, 
            partners, and the broader business community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.slice(0, 5).map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 