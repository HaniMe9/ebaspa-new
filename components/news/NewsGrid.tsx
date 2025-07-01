'use client'

import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'

const newsArticles = [
  {
    id: 1,
    title: 'EBASPA Launches New Capacity Building Program for SMEs',
    excerpt: 'A comprehensive training program designed to strengthen business advisory services across Ethiopia.',
    category: 'Capacity Building',
    author: 'EBASPA Team',
    date: '2024-01-15',
    image: '/news-1.jpg'
  },
  {
    id: 2,
    title: 'Policy Advocacy Success: New BDS Regulations Announced',
    excerpt: 'Government introduces supportive policies for business development services providers.',
    category: 'Policy Advocacy',
    author: 'Policy Team',
    date: '2024-01-10',
    image: '/news-2.jpg'
  },
  {
    id: 3,
    title: 'Member Spotlight: Excellence in Business Advisory Services',
    excerpt: 'Highlighting outstanding achievements of EBASPA members in serving Ethiopian businesses.',
    category: 'Member News',
    author: 'Communications Team',
    date: '2024-01-05',
    image: '/news-3.jpg'
  },
  {
    id: 4,
    title: 'Partnership Announcement: Collaboration with International Organizations',
    excerpt: 'EBASPA strengthens ties with global partners to enhance service delivery.',
    category: 'Partnerships',
    author: 'Partnership Team',
    date: '2023-12-28',
    image: '/news-4.jpg'
  },
  {
    id: 5,
    title: 'Industry Report: State of BDS in Ethiopia 2023',
    excerpt: 'Comprehensive analysis of business development services landscape and opportunities.',
    category: 'Research',
    author: 'Research Team',
    date: '2023-12-20',
    image: '/news-5.jpg'
  },
  {
    id: 6,
    title: 'Upcoming Workshop: Digital Transformation for SMEs',
    excerpt: 'Join us for a practical workshop on leveraging technology for business growth.',
    category: 'Events',
    author: 'Events Team',
    date: '2023-12-15',
    image: '/news-6.jpg'
  }
]

export default function NewsGrid() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">
                      {article.title.charAt(0)}
                    </span>
                  </div>
                  <p className="text-primary-600 font-semibold">News Image</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
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
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                  
                  <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-primary">
            View All News
          </button>
        </motion.div>
      </div>
    </section>
  )
} 