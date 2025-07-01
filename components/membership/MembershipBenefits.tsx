'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Award, 
  FileText,
  Globe,
  Shield,
  Zap,
  Target,
  Loader2
} from 'lucide-react'

// Icon mapping
const iconMap = {
  GraduationCap,
  Users,
  MessageSquare,
  TrendingUp,
  Award,
  FileText,
  Globe,
  Shield,
  Zap,
  Target
}

type IconType = keyof typeof iconMap

// Fallback data when API fails
const fallbackBenefits: Array<{
  id: string
  title: string
  description: string
  icon: IconType
  features: string[]
  order: number
}> = [
  {
    id: '1',
    title: 'Capacity Building & Training',
    description: 'Access to specialized training programs, workshops, and certification courses designed to enhance your professional skills.',
    icon: 'GraduationCap' as IconType,
    features: [
      'Exclusive training programs',
      'Professional certification courses',
      'Workshop and seminar access',
      'Skill development resources'
    ],
    order: 1
  },
  {
    id: '2',
    title: 'Networking Opportunities',
    description: 'Connect with fellow business advisory service providers, potential clients, and industry experts.',
    icon: 'Users' as IconType,
    features: [
      'Member-only networking events',
      'Industry conferences and forums',
      'Peer learning communities',
      'Mentorship programs'
    ],
    order: 2
  },
  {
    id: '3',
    title: 'Policy Advocacy',
    description: 'Have your voice heard in policy discussions and contribute to shaping Ethiopia\'s BDS ecosystem.',
    icon: 'MessageSquare' as IconType,
    features: [
      'Policy influence opportunities',
      'Industry representation',
      'Advocacy campaigns',
      'Government engagement'
    ],
    order: 3
  },
  {
    id: '4',
    title: 'Market Facilitation',
    description: 'Access to market opportunities, client referrals, and business development support.',
    icon: 'TrendingUp' as IconType,
    features: [
      'Client referral network',
      'Market access programs',
      'Business development support',
      'Partnership opportunities'
    ],
    order: 4
  },
  {
    id: '5',
    title: 'Standards & Accreditation',
    description: 'Support in achieving industry standards and professional accreditation.',
    icon: 'Award' as IconType,
    features: [
      'Quality standards guidance',
      'Accreditation support',
      'Best practice sharing',
      'Professional recognition'
    ],
    order: 5
  }
]

type Benefit = {
  id: string
  title: string
  description: string
  icon: IconType
  features: string[]
  category?: string
  order: number
}

export default function MembershipBenefits() {
  const [benefits, setBenefits] = useState<Benefit[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBenefits() {
      try {
        const response = await fetch('/api/benefits')
        if (!response.ok) throw new Error('Failed to fetch benefits')
        const data = await response.json()
        setBenefits(data)
      } catch (err) {
        console.error('Error fetching benefits:', err)
        // Use fallback data instead of showing error
        setBenefits(fallbackBenefits)
      } finally {
        setLoading(false)
      }
    }

    fetchBenefits()
  }, [])

  if (loading) {
    return (
      <div className="section-padding bg-white">
        <div className="container-custom flex justify-center items-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
        </div>
      </div>
    )
  }

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
            Membership Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As an EBASPA member, you'll gain access to a comprehensive suite of benefits 
            designed to accelerate your professional growth and business success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon]
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 h-full"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  {Icon && <Icon className="w-8 h-8 text-primary-600" />}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                
                <ul className="space-y-2">
                  {benefit.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Unlock These Benefits?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join EBASPA today and start accessing these exclusive benefits that will 
              transform your business and professional development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/membership/join" className="btn-primary">
                Apply for Membership
              </a>
              <a href="/contact" className="btn-outline">
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 