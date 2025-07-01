'use client'

import { motion } from 'framer-motion'
import { FileText, Award, Building, Calendar } from 'lucide-react'

const legalInfo = [
  {
    icon: Award,
    title: 'Registry Number',
    value: '6441',
    description: 'Official registration with Ethiopian authorities',
  },
  {
    icon: Building,
    title: 'Organization Type',
    value: 'Non-profit Association',
    description: 'Dedicated to business development services',
  },
  {
    icon: Calendar,
    title: 'Established',
    value: '2022',
    description: 'Founded to serve Ethiopia\'s BDS ecosystem',
  },
  {
    icon: FileText,
    title: 'Legal Status',
    value: 'Active',
    description: 'Fully compliant with all regulations',
  },
]

export default function LegalInfo() {
  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Legal & Registration Information
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            EBASPA operates with full transparency and compliance with Ethiopian laws 
            and regulations governing business associations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {legalInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {info.title}
              </h3>
              <div className="text-2xl font-bold text-secondary-300 mb-2">
                {info.value}
              </div>
              <p className="text-gray-300 text-sm">
                {info.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Compliance & Governance</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                EBASPA maintains the highest standards of governance and compliance. 
                We operate under the guidance of our board of directors and adhere 
                to all applicable Ethiopian laws and regulations.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Regular financial audits and reporting</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Transparent governance structure</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Compliance with tax regulations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Annual general meetings and reporting</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Documentation</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                All official documents and certificates are available for review 
                by members, partners, and regulatory authorities.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Registration Certificate</h4>
                  <p className="text-sm text-gray-300">Official registration document with Registry Number 6441</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Constitution & Bylaws</h4>
                  <p className="text-sm text-gray-300">Governing documents and organizational structure</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Financial Reports</h4>
                  <p className="text-sm text-gray-300">Annual financial statements and audit reports</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-6">
            For additional legal information or documentation requests, please contact our legal team.
          </p>
          <a
            href="/contact"
            className="btn-outline border-white text-white hover:bg-white hover:text-gray-900"
          >
            Request Documentation
          </a>
        </motion.div>
      </div>
    </section>
  )
} 