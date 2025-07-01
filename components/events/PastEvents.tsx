'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, CheckCircle } from 'lucide-react'

const pastEvents = [
  {
    id: 1,
    title: 'SME Growth Strategies Workshop',
    description: 'Practical strategies for small and medium enterprises to scale their operations.',
    date: '2023-12-15',
    location: 'Addis Ababa, Ethiopia',
    attendees: '45',
    type: 'Workshop',
    status: 'Completed'
  },
  {
    id: 2,
    title: 'BDS Policy Forum 2023',
    description: 'Annual policy discussion forum with government officials and industry leaders.',
    date: '2023-11-20',
    location: 'Addis Ababa, Ethiopia',
    attendees: '120',
    type: 'Forum',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Digital Marketing for SMEs',
    description: 'Workshop on leveraging digital marketing tools for business growth.',
    date: '2023-10-28',
    location: 'Addis Ababa, Ethiopia',
    attendees: '60',
    type: 'Workshop',
    status: 'Completed'
  },
  {
    id: 4,
    title: 'Member Networking Event',
    description: 'Quarterly networking event for EBASPA members and partners.',
    date: '2023-09-15',
    location: 'Addis Ababa, Ethiopia',
    attendees: '80',
    type: 'Networking',
    status: 'Completed'
  }
]

export default function PastEvents() {
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
            Past Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Relive the success of our previous events and see the impact we've made 
            in Ethiopia's business development services sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full">
                    {event.type}
                  </span>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{event.status}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {event.description}
                </p>
                
                <div className="space-y-2 text-gray-600 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                    <span>
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-primary-600" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-primary-600" />
                    <span>{event.attendees} participants</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 btn-outline text-sm">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-outline">
            View All Past Events
          </button>
        </motion.div>
      </div>
    </section>
  )
} 