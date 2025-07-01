'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center px-4">
      <div className="text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-8xl md:text-9xl font-bold mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-primary-100 max-w-md mx-auto mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/"
              className="btn-secondary inline-flex items-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center">
              <Search className="w-5 h-5 mr-2" />
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 gap-2 text-left">
              <Link href="/about" className="text-primary-100 hover:text-white transition-colors">
                About EBASPA
              </Link>
              <Link href="/membership" className="text-primary-100 hover:text-white transition-colors">
                Membership
              </Link>
              <Link href="/services" className="text-primary-100 hover:text-white transition-colors">
                Our Services
              </Link>
              <Link href="/contact" className="text-primary-100 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 