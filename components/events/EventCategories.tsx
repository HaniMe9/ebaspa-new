'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const categories = [
  { id: 'all', name: 'All Events', count: 12 },
  { id: 'workshop', name: 'Workshops', count: 5 },
  { id: 'conference', name: 'Conferences', count: 2 },
  { id: 'training', name: 'Training Programs', count: 3 },
  { id: 'networking', name: 'Networking', count: 2 },
]

export default function EventCategories() {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Event Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Filter events by type to find the ones most relevant to your interests and needs.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
              }`}
            >
              {category.name}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeCategory === category.id
                  ? 'bg-white/20'
                  : 'bg-gray-100'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Host an Event with EBASPA
            </h3>
            <p className="text-gray-600 mb-6">
              Interested in organizing an event or workshop? Partner with EBASPA 
              to reach our network of business advisory service providers.
            </p>
            <button className="btn-primary">
              Propose an Event
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 