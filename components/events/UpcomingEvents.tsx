'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react'

const upcomingEvents = [
  {
    id: 1,
    title: 'Digital Transformation Workshop for SMEs',
    description: 'Learn how to leverage technology to grow your business and improve operational efficiency.',
    date: '2024-02-15',
    time: '09:00 AM - 05:00 PM',
    location: 'Addis Ababa, Ethiopia',
    attendees: '50',
    type: 'Workshop',
    price: 'Free',
    organizer: 'EBASPA'
  },
  {
    id: 2,
    title: 'Annual BDS Conference 2024',
    description: 'Join industry leaders and experts for the premier business development services conference.',
    date: '2024-03-20',
    time: '08:00 AM - 06:00 PM',
    location: 'Addis Ababa, Ethiopia',
    attendees: '200',
    type: 'Conference',
    price: 'ETB 2,000',
    organizer: 'EBASPA'
  },
  {
    id: 3,
    title: 'Policy Advocacy Roundtable',
    description: 'Discussion on current policy challenges and opportunities in the BDS sector.',
    date: '2024-02-28',
    time: '02:00 PM - 05:00 PM',
    location: 'Addis Ababa, Ethiopia',
    attendees: '30',
    type: 'Roundtable',
    price: 'Free',
    organizer: 'EBASPA'
  },
  {
    id: 4,
    title: 'Capacity Building Training Series',
    description: 'Comprehensive training program for business advisory service providers.',
    date: '2024-04-10',
    time: '10:00 AM - 04:00 PM',
    location: 'Addis Ababa, Ethiopia',
    attendees: '75',
    type: 'Training',
    price: 'ETB 1,500',
    organizer: 'EBASPA'
  }
]

export default function UpcomingEvents() {
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
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mark your calendar for these exciting events designed to strengthen 
            Ethiopia's business development services ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
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
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                    {event.type}
                  </span>
                  <span className="text-lg font-bold text-primary-600">
                    {event.price}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {event.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                    <span className="text-sm">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-primary-600" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-primary-600" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-primary-600" />
                    <span className="text-sm">{event.attendees} spots</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Organized by {event.organizer}
                  </span>
                  
                  <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
                    Register
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
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
          className="text-center mt-12"
        >
          <button className="btn-primary">
            View All Upcoming Events
          </button>
        </motion.div>
      </div>
    </section>
  )
} 