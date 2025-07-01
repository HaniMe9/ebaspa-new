'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { 
  Search, 
  Filter, 
  MapPin, 
  Building2, 
  Users, 
  Star,
  ExternalLink,
  Mail,
  Phone
} from 'lucide-react'

const members = [
  {
    id: 1,
    name: 'BCaD Consulting Management PLC',
    logo: '/assets/member-logos/BCaD Consulting.jpg',
    type: 'Full Member',
    category: 'Consulting Firm',
    location: 'Addis Ababa',
    services: ['Supply Chain Management', 'Training of Trainers', 'Business Management Systems', 'Business Skills Training'],
    description: 'Leading business consulting firm specializing in strategic planning and financial advisory services.',
    contact: {
      email: 'afework.germamo@bcadconsulting.com',
      phone: '+251911242303',
      website: 'https://www.bcadconsulting.com'
    },
    rating: 4.8,
    clients: 100,
    established: 2010
  },
  {
    id: 2,
    name: 'Lelena Global Consulting (LGC)',
    logo: '/assets/member-logos/Lelena Global Consulting (LGC).jpg',
    type: 'Full Member',
    category: 'Consulting Firm',
    location: 'Addis Ababa',
    services: ['Private Sector Development', 'Value Chains', 'Market Systems'],
    description: 'We provide expert support in private sector development through innovative, market-driven solutions across value chains.',
    contact: {
      email: 'lelenaglobal@gmail.com',
      phone: '+251911517345/6',
      website: ''
    },
    rating: 4.9,
    clients: 100,
    established: 2012
  },
  {
    id: 3,
    name: 'GOLDIE Management Consultancy Service',
    logo: '/assets/member-logos/GOLDIE .jpg',
    type: 'Full Member',
    category: 'Consulting Firm',
    location: 'Addis Ababa',
    services: ['Management Consulting', 'Business Advisory', 'Strategic Planning'],
    description: 'Professional management consultancy service provider focused on business growth and development.',
    contact: {
      email: 'goldieconsult@gmail.com',
      phone: ' +251 911 256 488',
      website: ''
    },
    rating: 4.6,
    clients: 100,
    established: 2018
  }
]

const categories = [
  'All Categories',
  'Consulting Firm',
  'Training Institute',
  'Technology Services',
  'Legal Services',
  'Research & Development'
]

const locations = [
  'All Locations',
  'Addis Ababa',
  'Dire Dawa',
  'Mekelle',
  'Gondar',
  'Bahir Dar'
]

export default function MemberDirectory() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedLocation, setSelectedLocation] = useState('All Locations')
  const [selectedType, setSelectedType] = useState('All Types')

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All Categories' || member.category === selectedCategory
    const matchesLocation = selectedLocation === 'All Locations' || member.location === selectedLocation
    const matchesType = selectedType === 'All Types' || member.type === selectedType

    return matchesSearch && matchesCategory && matchesLocation && matchesType
  })

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
            Member Directory
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover qualified business development service providers in our network. 
            Connect with professionals who can help your business grow and succeed.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="card p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="form-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="form-select"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="form-select"
            >
              <option value="All Types">All Types</option>
              <option value="Full Member">Full Member</option>
              <option value="Associate Member">Associate Member</option>
              <option value="Student Member">Student Member</option>
            </select>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredMembers.length} of {members.length} members
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 h-full flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    member.type === 'Full Member' ? 'bg-primary-100 text-primary-800' : 'bg-secondary-100 text-secondary-800'
                  }`}>
                    {member.type}
                  </span>
                </div>
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ml-4 border-2 border-gray-100">
                  <Image src={member.logo} alt={`${member.name} logo`} width={64} height={64} objectFit="cover" />
                </div>
              </div>
              
              <div className="space-y-3 text-sm text-gray-600 mb-4 flex-grow">
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">{member.category}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{member.rating}</span>
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                {member.location}
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {member.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Services:</h4>
                <div className="flex flex-wrap gap-1">
                  {member.services.map(service => (
                    <span key={service} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>Est. {member.established}</span>
                <span>{member.clients} clients served</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 mr-2 text-gray-400" />
                  <a href={`mailto:${member.contact.email}`} className="text-primary-600 hover:text-primary-700">
                    {member.contact.email}
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="w-4 h-4 mr-2 text-gray-400" />
                  <a href={`tel:${member.contact.phone}`} className="text-primary-600 hover:text-primary-700">
                    {member.contact.phone}
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <ExternalLink className="w-4 h-4 mr-2 text-gray-400" />
                  <a href={`https://${member.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                    {member.contact.website}
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <button className="btn-outline w-full">
                  Contact Member
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No members found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters to find what you're looking for.
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Become a Member
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our network of qualified business development service providers 
              and connect with potential clients and partners.
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