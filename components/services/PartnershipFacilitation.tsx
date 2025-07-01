'use client'

import { motion } from 'framer-motion'

export default function PartnershipFacilitation() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Partnership Facilitation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Facilitating strategic partnerships between businesses, development organizations, and service providers.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 