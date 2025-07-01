'use client'

import { motion } from 'framer-motion'

export default function SMESupportCTA() {
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
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Get the support you need to take your SME to the next level with our comprehensive business development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
            <a href="/membership/directory" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Find an Advisor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 