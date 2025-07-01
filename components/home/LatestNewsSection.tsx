'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const latestNews = [
  {
    id: 1,
    title: 'EBASPA Launches New Capacity Building Program',
    excerpt: 'A comprehensive training program designed to strengthen business advisory services across Ethiopia.',
    date: '2024-01-15',
    category: 'Capacity Building'
  },
  {
    id: 2,
    title: 'Policy Advocacy Success: New BDS Regulations',
    excerpt: 'Government introduces supportive policies for business development services providers.',
    date: '2024-01-10',
    category: 'Policy Advocacy'
  },
  {
    id: 3,
    title: 'Member Spotlight: Excellence in Business Advisory',
    excerpt: 'Highlighting outstanding achievements of EBASPA members in serving Ethiopian businesses.',
    date: '2024-01-05',
    category: 'Member News'
  }
]

export default function LatestNewsSection() {
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
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest developments in Ethiopia's business development 
            services sector and EBASPA's activities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestNews.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="/news-events" className="btn-outline">
            View All News
          </a>
        </motion.div>
      </div>
    </section>
  )
} 