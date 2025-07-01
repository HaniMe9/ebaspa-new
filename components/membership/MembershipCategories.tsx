'use client'

import { motion } from 'framer-motion'
import { 
  Crown, 
  Building2, 
  Users, 
  Star,
  Check,
  X 
} from 'lucide-react'

const membershipTypes = [
  {
    type: 'Full Member',
    icon: Crown,
    description: 'For established business development service providers',
    price: '5,000 ETB/year',
    color: 'from-primary-600 to-primary-700',
    features: [
      'Full voting rights',
      'Access to all training programs',
      'Priority client referrals',
      'Policy advocacy participation',
      'Standards & accreditation support',
      'International networking opportunities',
      'Exclusive member events',
      'Research & publication access',
      'Business development support',
      'Legal advisory services'
    ],
    requirements: [
      'Minimum 3 years in business',
      'Valid business license',
      'Professional certifications',
      'Client references',
      'Quality standards compliance'
    ]
  },
  {
    type: 'Associate Member',
    icon: Building2,
    description: 'For emerging BDS providers and startups',
    price: '2,500 ETB/year',
    color: 'from-secondary-600 to-secondary-700',
    features: [
      'Limited voting rights',
      'Access to basic training programs',
      'Client referral network',
      'Policy advocacy participation',
      'Standards guidance',
      'Networking opportunities',
      'Member events access',
      'Resource library access',
      'Mentorship programs',
      'Business advisory support'
    ],
    requirements: [
      'Minimum 1 year in business',
      'Valid business license',
      'Professional background',
      'Growth potential',
      'Commitment to standards'
    ]
  },
  {
    type: 'Student Member',
    icon: Users,
    description: 'For students and recent graduates',
    price: '500 ETB/year',
    color: 'from-gray-600 to-gray-700',
    features: [
      'No voting rights',
      'Access to student programs',
      'Internship opportunities',
      'Mentorship programs',
      'Networking events',
      'Resource access',
      'Career development support',
      'Industry insights',
      'Training discounts',
      'Professional guidance'
    ],
    requirements: [
      'Currently enrolled student',
      'Relevant field of study',
      'Academic performance',
      'Interest in BDS sector',
      'Faculty recommendation'
    ]
  }
]

export default function MembershipCategories() {
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
            Membership Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the membership category that best fits your organization's stage 
            and needs. Each category offers different benefits and requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {membershipTypes.map((membership, index) => (
            <motion.div
              key={membership.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${membership.color} text-white rounded-2xl p-8 h-full`}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <membership.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{membership.type}</h3>
                  <p className="text-white/80 mb-4">{membership.description}</p>
                  <div className="text-3xl font-bold text-secondary-300">
                    {membership.price}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Check className="w-5 h-5 mr-2" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {membership.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm">
                          <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {membership.requirements.map((requirement) => (
                        <li key={requirement} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <a 
                    href="/membership/join" 
                    className="btn-secondary w-full text-center block"
                  >
                    Apply for {membership.type}
                  </a>
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
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not Sure Which Category Fits?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our membership team is here to help you choose the right category 
              and guide you through the application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Contact Membership Team
              </a>
              <a href="/membership/requirements" className="btn-outline">
                View Detailed Requirements
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 