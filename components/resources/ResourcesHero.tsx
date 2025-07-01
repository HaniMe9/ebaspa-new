'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Search, 
  FileText, 
  BookOpen, 
  Download, 
  HelpCircle,
  Filter 
} from 'lucide-react'

const resourceCategories = [
  {
    icon: FileText,
    title: 'Publications',
    count: '25+',
    description: 'Research reports and studies'
  },
  {
    icon: BookOpen,
    title: 'Toolkits',
    count: '15+',
    description: 'Practical guides and manuals'
  },
  {
    icon: Download,
    title: 'Templates',
    count: '30+',
    description: 'Ready-to-use business tools'
  },
  {
    icon: HelpCircle,
    title: 'FAQ',
    count: '50+',
    description: 'Frequently asked questions'
  }
]

export default function ResourcesHero() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Resources Library
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Access our comprehensive collection of publications, toolkits, research reports, 
            and practical resources designed to support business development services in Ethiopia.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources, publications, toolkits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                <Filter className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resourceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group cursor-pointer"
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <category.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-2xl font-bold text-secondary-300 mb-2">
                {category.count}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {category.title}
              </h3>
              <p className="text-primary-100 text-sm">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <p className="text-primary-100 mb-4">
              <strong>New:</strong> Download our latest "SME Growth Toolkit" and "BDS Standards Guide"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Toolkit
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                <FileText className="w-5 h-5 mr-2" />
                View Standards Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 