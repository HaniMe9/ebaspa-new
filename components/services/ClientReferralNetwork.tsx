'use client'

import { motion } from 'framer-motion'

export default function ClientReferralNetwork() {
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
            Client Referral Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connecting SMEs with qualified business development service providers through our comprehensive referral network.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 