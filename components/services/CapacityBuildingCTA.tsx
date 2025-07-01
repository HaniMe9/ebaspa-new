'use client'

import { motion } from 'framer-motion'

export default function CapacityBuildingCTA() {
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
            Ready to Enhance Your Skills?
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Join our capacity building programs and take your professional development to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
            <a href="/events" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              View Training Schedule
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 