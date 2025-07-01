'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Users, TrendingUp, Award } from 'lucide-react'

const initiatives = [
  {
    icon: MessageSquare,
    title: 'Policy Dialogue Forums',
    description: 'Regular forums bringing together stakeholders to discuss policy issues affecting the BDS sector',
    impact: '15+ forums conducted'
  },
  {
    icon: Users,
    title: 'Stakeholder Engagement',
    description: 'Active engagement with government agencies, development partners, and industry stakeholders',
    impact: '20+ stakeholder meetings'
  },
  {
    icon: TrendingUp,
    title: 'Sector Representation',
    description: 'Representing BDS providers in national policy discussions and regulatory processes',
    impact: '100% sector coverage'
  },
  {
    icon: Award,
    title: 'Policy Recommendations',
    description: 'Developing evidence-based policy recommendations for sector growth and development',
    impact: '10+ policy papers'
  }
]

export default function AdvocacyInitiatives() {
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
            Advocacy Initiatives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive advocacy initiatives focus on creating an enabling environment 
            for business development services in Ethiopia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <initiative.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {initiative.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {initiative.description}
              </p>
              <div className="text-sm font-semibold text-primary-600">
                {initiative.impact}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 