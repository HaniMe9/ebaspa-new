'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  FileText, 
  Calendar, 
  MessageSquare,
  Award,
  TrendingUp
} from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Member Directory',
    description: 'Connect with other BDS providers and potential clients'
  },
  {
    icon: FileText,
    title: 'Exclusive Resources',
    description: 'Access to research reports, toolkits, and publications'
  },
  {
    icon: Calendar,
    title: 'Event Registration',
    description: 'Priority registration for training programs and events'
  },
  {
    icon: MessageSquare,
    title: 'Networking Forums',
    description: 'Participate in member-only discussions and forums'
  },
  {
    icon: Award,
    title: 'Professional Development',
    description: 'Access to certification programs and training materials'
  },
  {
    icon: TrendingUp,
    title: 'Business Opportunities',
    description: 'Client referrals and partnership opportunities'
  }
]

export default function LoginBenefits() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="card p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Member Portal Benefits
        </h3>
        
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="flex items-start">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <benefit.icon className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="card p-6 bg-blue-50 border border-blue-200"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Need Help?
        </h3>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-center">
            <span className="font-medium text-gray-900">Email:</span>
            <a href="mailto:support@ebaspa.org" className="text-primary-600 hover:text-primary-700 ml-2">
              support@ebaspa.org
            </a>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-gray-900">Phone:</span>
            <a href="tel:+251911123456" className="text-primary-600 hover:text-primary-700 ml-2">
              +251 911 123 456
            </a>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-gray-900">Hours:</span>
            <span className="text-gray-600 ml-2">Mon-Fri, 8:00 AM - 6:00 PM EAT</span>
          </div>
        </div>
        
        <div className="mt-4">
          <a href="/contact" className="btn-outline w-full text-center">
            Contact Support
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="card p-6 bg-gradient-to-br from-primary-50 to-secondary-50"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          New to EBASPA?
        </h3>
        
        <p className="text-gray-600 mb-6">
          Join our network of qualified business development service providers 
          and start accessing exclusive benefits today.
        </p>
        
        <div className="flex flex-col gap-3">
          <a href="/membership/join" className="btn-primary">
            Apply for Membership
          </a>
          <a href="/membership" className="btn-outline">
            Learn More
          </a>
        </div>
      </motion.div>
    </div>
  )
} 