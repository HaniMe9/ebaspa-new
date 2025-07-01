'use client'

import { motion } from 'framer-motion'
import { FileText, TrendingUp, Users, Award } from 'lucide-react'

const researchAreas = [
  {
    icon: FileText,
    title: 'Sector Analysis',
    description: 'Comprehensive analysis of the BDS sector in Ethiopia, including market size, trends, and challenges',
    publications: '5+ reports'
  },
  {
    icon: TrendingUp,
    title: 'Impact Assessment',
    description: 'Research on the impact of business development services on SME growth and economic development',
    publications: '3+ studies'
  },
  {
    icon: Users,
    title: 'Stakeholder Mapping',
    description: 'Mapping of key stakeholders in the BDS ecosystem and their roles in sector development',
    publications: '2+ mappings'
  },
  {
    icon: Award,
    title: 'Best Practices',
    description: 'Documentation and dissemination of best practices in business development services',
    publications: '8+ case studies'
  }
]

export default function PolicyResearch() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Policy Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Evidence-based research to inform policy decisions and support the growth 
            of Ethiopia's business development services sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {researchAreas.map((area, index) => (
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
                {area.publications}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 