'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Users, CheckCircle } from 'lucide-react'

const eventDetails = {
  title: 'Digital Transformation Workshop for SMEs',
  date: '2024-02-15',
  time: '09:00 AM - 05:00 PM',
  location: 'Addis Ababa, Ethiopia',
  capacity: '50',
  price: 'Free',
  organizer: 'EBASPA'
}

const benefits = [
  'Practical digital tools and strategies',
  'Networking with industry experts',
  'Certificate of participation',
  'Lunch and refreshments included',
  'Follow-up support and resources'
]

export default function EventRegistration() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Event Registration
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Secure your spot at our upcoming events. Registration is quick and easy, 
              and you'll receive confirmation and event details via email.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4">
                {eventDetails.title}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-secondary-300" />
                  <span>
                    {new Date(eventDetails.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-secondary-300" />
                  <span>{eventDetails.time}</span>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-secondary-300" />
                  <span>{eventDetails.location}</span>
                </div>
                
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-3 text-secondary-300" />
                  <span>{eventDetails.capacity} spots available</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white/20 rounded-lg">
                <div className="text-2xl font-bold text-secondary-300">
                  {eventDetails.price}
                </div>
                <div className="text-primary-100 text-sm">
                  Organized by {eventDetails.organizer}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">What You'll Get</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-300" />
                    <span className="text-primary-100">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">
              Register Now
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    placeholder="Enter first name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    placeholder="Enter last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  placeholder="Enter email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  placeholder="Enter phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  placeholder="Enter organization name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Dietary Requirements
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-white/50 focus:border-transparent">
                  <option value="" className="text-gray-900">Select dietary preference</option>
                  <option value="none" className="text-gray-900">No special requirements</option>
                  <option value="vegetarian" className="text-gray-900">Vegetarian</option>
                  <option value="vegan" className="text-gray-900">Vegan</option>
                  <option value="gluten-free" className="text-gray-900">Gluten-free</option>
                  <option value="other" className="text-gray-900">Other (please specify)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Special Requirements
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  placeholder="Any special requirements or accessibility needs"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Complete Registration
              </button>
            </form>
            
            <p className="text-center text-primary-100 text-sm mt-4">
              You'll receive a confirmation email with event details within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 