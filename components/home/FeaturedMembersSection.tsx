'use client'

import { motion } from 'framer-motion'
import { Star, Users, Award } from 'lucide-react'

const featuredMembers = [
  {
    id: 1,
    name: 'BCaD Consulting Management PLC',
    category: 'Business Advisory',
    rating: 4.9,
    clients: '100+',
    description: 'Leading provider of supply chain management, business systems, and professional training services.'
  },
  {
    id: 2,
    name: 'Lelena Global Consulting (LGC)',
    category: 'Strategic Consulting',
    rating: 4.8,
    clients: '100+',
    description: 'Expert support in private sector development through innovative, market-driven solutions across value chains.'
  },
  {
    id: 3,
    name: 'GOLDIE Management Consultancy',
    category: 'Management Consulting',
    rating: 4.9,
    clients: '100+',
    description: 'Professional management consultancy services focused on business growth and development.'
  }
]

export default function FeaturedMembersSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Featured Members
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet some of our outstanding members who are making a difference in 
            Ethiopia's business development services sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-secondary-100 text-secondary-600 text-sm font-medium rounded-full">
                  {member.category}
                </span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium text-gray-700">
                    {member.rating}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {member.name}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {member.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  <span className="text-sm">{member.clients} clients served</span>
                </div>
                
                <div className="flex items-center text-primary-600">
                  <Award className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">Featured</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="/membership/directory" className="btn-outline">
            View Member Directory
          </a>
        </motion.div>
      </div>
    </section>
  )
} 