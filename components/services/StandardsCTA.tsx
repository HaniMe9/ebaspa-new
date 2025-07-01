'use client'

import { motion } from 'framer-motion'

export default function StandardsCTA() {
  return (
    <section className="section-padding bg-primary-600 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Maintain High Standards
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Join our accreditation program and demonstrate your commitment to quality in business development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
            <a href="/membership/join" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Get Accredited
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 