'use client'

import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  FileText, 
  Award, 
  Users,
  Clock,
  AlertCircle
} from 'lucide-react'

const requirements = [
  {
    category: 'Business Requirements',
    items: [
      'Valid business license and registration',
      'Minimum operational period (varies by category)',
      'Professional qualifications and certifications',
      'Quality standards compliance',
      'Financial stability and good standing'
    ]
  },
  {
    category: 'Professional Requirements',
    items: [
      'Relevant professional experience',
      'Client references and testimonials',
      'Commitment to professional development',
      'Adherence to ethical standards',
      'Continuous learning and improvement'
    ]
  },
  {
    category: 'Documentation Required',
    items: [
      'Business registration certificate',
      'Tax registration certificate',
      'Professional certifications',
      'Client testimonials (minimum 3)',
      'Business profile and description',
      'Financial statements (if applicable)'
    ]
  }
]

const processSteps = [
  {
    step: 1,
    title: 'Submit Application',
    duration: '15-30 minutes',
    description: 'Complete the online form with all required information'
  },
  {
    step: 2,
    title: 'Review Process',
    duration: '5-7 business days',
    description: 'Our committee reviews and verifies your application'
  },
  {
    step: 3,
    title: 'Interview (If Required)',
    duration: '30-60 minutes',
    description: 'Discussion about your business and goals'
  },
  {
    step: 4,
    title: 'Final Decision',
    duration: '2-3 business days',
    description: 'Notification of approval and next steps'
  }
]

export default function MembershipRequirements() {
  return (
    <div className="space-y-8">
      {/* Requirements */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="card p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Award className="w-6 h-6 mr-2 text-primary-600" />
          Membership Requirements
        </h3>
        
        <div className="space-y-6">
          {requirements.map((req, index) => (
            <div key={req.category}>
              <h4 className="font-semibold text-gray-900 mb-3">
                {req.category}
              </h4>
              <ul className="space-y-2">
                {req.items.map((item) => (
                  <li key={item} className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Process Timeline */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="card p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Clock className="w-6 h-6 mr-2 text-primary-600" />
          Application Process
        </h3>
        
        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <div key={step.step} className="flex items-start">
              <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                {step.step}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600 mb-1">
                  {step.description}
                </p>
                <p className="text-xs text-primary-600 font-medium">
                  {step.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Important Notes */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="card p-6 bg-blue-50 border border-blue-200"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
          Important Notes
        </h3>
        
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Incomplete applications will not be processed</li>
          <li>• All documents must be current and valid</li>
          <li>• References will be contacted for verification</li>
          <li>• Membership fees are due upon approval</li>
          <li>• Annual renewal is required to maintain membership</li>
        </ul>
      </motion.div>

      {/* Contact Support */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="card p-6 bg-gradient-to-br from-primary-50 to-secondary-50"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2 text-primary-600" />
          Need Help?
        </h3>
        
        <p className="text-gray-600 mb-4">
          Our membership team is here to help you with the application process.
        </p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <span className="font-medium text-gray-900">Email:</span>
            <a href="mailto:getachew.habtu@ebaspa.org" className="text-primary-600 hover:text-primary-700 ml-2">
              getachew.habtu@ebaspa.org
            </a>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-gray-900">Phone:</span>
            <a href="tel:+251988744690" className="text-primary-600 hover:text-primary-700 ml-2">
              +251 98 874 4690
            </a>
          </div>
        </div>
        
        <div className="mt-4">
          <a href="/contact" className="btn-outline w-full text-center">
            Contact Support
          </a>
        </div>
      </motion.div>
    </div>
  )
} 