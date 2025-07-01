'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'

export default function ContactMap() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Our Office</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us at our main office in Addis Ababa, Ethiopia. 
            We're conveniently located in the heart of the city.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <div className="card p-0 overflow-hidden">
              <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                {/* Placeholder for Google Maps */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      Interactive Map
                    </h3>
                    <p className="text-gray-500">
                      Google Maps integration will be added here
                    </p>
                  </div>
                </div>
                
                {/* Map Controls Overlay */}
                <div className="absolute top-4 right-4">
                  <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
                    <Navigation className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                {/* Location Marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Location</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">EBASPA Headquarters</p>
                  <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Getting Here</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Located in the central business district</li>
                    <li>• Accessible by public transportation</li>
                    <li>• Parking available on-site</li>
                    <li>• Wheelchair accessible entrance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-primary-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Us</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Business Hours</p>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Note:</strong> We recommend scheduling an appointment for meetings.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    Schedule a Meeting
                  </a>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transportation</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-gray-900">Public Transport</p>
                  <p>Bus routes: 1, 3, 5, 7</p>
                  <p>Light rail: Red Line, Blue Line</p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-900">Parking</p>
                  <p>Free parking available for visitors</p>
                  <p>Secure parking with 24/7 surveillance</p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-900">Accessibility</p>
                  <p>Wheelchair accessible entrance</p>
                  <p>Elevator access to all floors</p>
                  <p>Accessible restrooms available</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 