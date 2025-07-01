'use client'

import { motion } from 'framer-motion'
import { Award, Clock, Users, CheckCircle } from 'lucide-react'

const courses = [
  {
    title: 'BDS Professional Certification',
    duration: '6 months',
    participants: '50+',
    description: 'Comprehensive certification program for business development service providers',
    features: ['Industry-recognized credential', 'Practical case studies', 'Mentorship program', 'Networking opportunities']
  },
  {
    title: 'SME Advisory Specialist',
    duration: '4 months',
    participants: '30+',
    description: 'Specialized training for SME advisory and consulting services',
    features: ['SME-specific methodologies', 'Financial advisory skills', 'Market analysis tools', 'Growth strategies']
  },
  {
    title: 'Digital Transformation Consultant',
    duration: '3 months',
    participants: '25+',
    description: 'Training on digital tools and transformation strategies for businesses',
    features: ['Digital tools mastery', 'Change management', 'Technology integration', 'ROI measurement']
  }
]

export default function CertificationCourses() {
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
            Certification Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Industry-recognized certification programs designed to validate your professional expertise 
            and enhance your career in business development services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{course.description}</p>

              <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {course.participants}
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {course.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full btn-primary">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 