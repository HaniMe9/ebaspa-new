'use client'

import { motion } from 'framer-motion'
import { Building2, Users, TrendingUp } from 'lucide-react'

const engagementAreas = [
  {
    icon: Building2,
    title: 'Ministry Collaboration',
    description: 'Active collaboration with relevant ministries to influence policy development and implementation',
    status: 'Ongoing partnerships'
  },
  {
    icon: Users,
    title: 'Regulatory Bodies',
    description: 'Engagement with regulatory bodies to ensure BDS-friendly policies and regulations',
    status: 'Regular consultations'
  },
  {
    icon: Building2,
    title: 'Public-Private Dialogue',
    description: 'Facilitating dialogue between government and private sector stakeholders',
    status: 'Quarterly meetings'
  },
  {
    icon: TrendingUp,
    title: 'Policy Implementation',
    description: 'Supporting the implementation of policies that benefit the BDS sector',
    status: 'Active participation'
  }
]

export default function GovernmentEngagement() {
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
            Government Engagement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strategic engagement with government institutions to create an enabling environment 
            for business development services in Ethiopia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {engagementAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <area.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {area.description}
              </p>
              <div className="text-sm font-semibold text-primary-600">
                {area.status}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 