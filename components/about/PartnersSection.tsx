'use client'

import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

export default function PartnersSection() {
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
            Our Partners & Collaborators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            EBASPA works with a network of strategic partners to strengthen Ethiopia's 
            business development services ecosystem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Partner Information Coming Soon
            </h3>
            <p className="text-gray-600 mb-6">
              We're currently updating our partner profiles. EBASPA collaborates with 
              organizations like ANDE, GIZ, USAID/MS4G, AMEA, ATI, ECC, EDI, Mastercard Foundation, 
              UNIDO, JICA and many others.
            </p>
            <a href="/contact" className="btn-primary">
              Become a Partner
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 