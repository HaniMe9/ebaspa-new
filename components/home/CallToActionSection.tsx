'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Building2 } from 'lucide-react'

export default function CallToActionSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join EBASPA Today
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Become part of Ethiopia's premier business advisory services network. 
              Connect with industry leaders, access exclusive resources, and contribute 
              to the growth of Ethiopia's business ecosystem.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Network with Peers
                  </h3>
                  <p className="text-primary-100">
                    Connect with 48 qualified business advisory service providers
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Access Opportunities
                  </h3>
                  <p className="text-primary-100">
                    Get access to exclusive partnerships and business opportunities
                  </p>
                </div>
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
              Ready to Get Started?
            </h3>
            
            <div className="space-y-4">
              <a
                href="/membership/join"
                className="w-full bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Apply for Membership
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              
              <a
                href="/contact"
                className="w-full border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200 flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
            
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-primary-100 text-sm">
                <strong>Not ready to join?</strong> Subscribe to our newsletter to stay 
                updated with industry news and opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 