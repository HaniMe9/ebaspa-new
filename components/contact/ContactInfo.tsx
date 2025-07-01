'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Building, Users, Award, Calendar } from 'lucide-react'

const contactInfo = [
  {
    icon: Building,
    title: 'Office Address',
    content: 'Addis Ababa, Ethiopia',
    description: 'Main office location',
  },
  {
    icon: Phone,
    title: 'Phone Number',
    content: '+251 911 123 456',
    description: 'Call us during business hours',
  },
  {
    icon: Mail,
    title: 'Email Address',
    content: 'info@ebaspa.org',
    description: 'Send us an email anytime',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon - Fri: 8:00 AM - 6:00 PM',
    description: 'Saturday: 9:00 AM - 1:00 PM',
  },
]

const quickLinks = [
  { title: 'Membership Benefits', href: '/membership/benefits' },
  { title: 'How to Join', href: '/membership/join' },
  { title: 'Member Directory', href: '/membership/directory' },
  { title: 'Our Services', href: '/services' },
  { title: 'News & Events', href: '/news-events' },
  { title: 'Resources', href: '/resources' },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Contact Information */}
      <div className="card p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
            <MapPin className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            <p className="text-gray-600">Get in touch with our team</p>
          </div>
        </div>

        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <info.icon className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                <p className="text-lg text-primary-600 font-medium mb-1">{info.content}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Legal Information */}
      <div className="card p-8 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
            <Award className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Legal Information</h2>
            <p className="text-gray-600">Official registration details</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-sm font-bold text-primary-600">E</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">EBASPA</p>
              <p className="text-sm text-gray-600">Ethiopian Business Advisory Service Providers Association</p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Registry Number:</span> 6441
            </p>
            <div className="flex">
              <Calendar className="w-6 h-6 text-primary-500 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Established</h3>
                <p className="text-gray-600">22nd September 2022</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Type:</span> Non-profit Organization
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="card p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4">
            <Users className="w-6 h-6 text-secondary-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Quick Links</h2>
            <p className="text-gray-600">Find what you're looking for</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{link.title}</span>
                <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-200">
                  <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="card p-8 bg-red-50 border border-red-200">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Contact</h3>
          <p className="text-gray-600 mb-4">
            For urgent matters outside business hours
          </p>
          <a
            href="tel:+251911123456"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Emergency Line
          </a>
        </div>
      </div>
    </motion.div>
  )
} 