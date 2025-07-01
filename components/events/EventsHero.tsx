'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Clock } from 'lucide-react'

const upcomingEvents = [
  {
    id: 1,
    title: 'Digital Transformation Workshop for SMEs',
    date: '2024-02-15',
    time: '09:00 AM - 05:00 PM',
    location: 'Addis Ababa, Ethiopia',
    attendees: '50',
    type: 'Workshop'
  },
  {
    id: 2,
    title: 'Annual BDS Conference 2024',
    date: '2024-03-20',
    time: '08:00 AM - 06:00 PM',
    location: 'Addis Ababa, Ethiopia',
    attendees: '200',
    type: 'Conference'
  },
  {
    id: 3,
    title: 'Policy Advocacy Roundtable',
    date: '2024-02-28',
    time: '02:00 PM - 05:00 PM',
    location: 'Addis Ababa, Ethiopia',
    attendees: '30',
    type: 'Roundtable'
  }
]

export default function EventsHero() {
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
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us for workshops, conferences, and networking events designed to strengthen 
            Ethiopia's business development services ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="text-sm text-gray-500">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                  {event.title}
                </h3>
                
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-3 text-primary-600" />
                    <span className="text-sm">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-3 text-primary-600" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-3 text-primary-600" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-3 text-primary-600" />
                    <span className="text-sm">{event.attendees} attendees</span>
                  </div>
                </div>
                
                <button className="w-full mt-6 btn-primary">
                  Register Now
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
            View All Events
          </button>
        </motion.div>
      </div>
    </section>
  )
} 