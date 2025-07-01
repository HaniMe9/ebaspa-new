'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  FileText,
  Upload,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

interface FormData {
  organizationName: string
  contactPerson: string
  email: string
  phone: string
  website: string
  logo: File | null
  address: string
  city: string
  region: string
  businessType: string
  servicesOffered: string[]
  yearsInBusiness: string
  numberOfEmployees: string
  annualRevenue: string
  description: string
  motivation: string
  documents: File[]
}

interface FormErrors {
  organizationName?: string
  contactPerson?: string
  email?: string
  phone?: string
  website?: string
  logo?: string
  address?: string
  city?: string
  region?: string
  businessType?: string
  servicesOffered?: string
  yearsInBusiness?: string
  numberOfEmployees?: string
  annualRevenue?: string
  description?: string
  motivation?: string
  documents?: string
}

const businessTypes = [
  'Consulting Firm',
  'Training Institute',
  'Financial Services',
  'Technology Services',
  'Legal Services',
  'Marketing & PR',
  'Research & Development',
  'Other'
]

const serviceOptions = [
  'Business Strategy',
  'Financial Advisory',
  'Marketing & Sales',
  'Operations Management',
  'Human Resources',
  'Technology & Digital',
  'Legal & Compliance',
  'Training & Development',
  'Market Research',
  'Export & Import',
  'Quality Management',
  'Environmental Services'
]

export default function MembershipApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    logo: null,
    address: '',
    city: '',
    region: '',
    businessType: '',
    servicesOffered: [],
    yearsInBusiness: '',
    numberOfEmployees: '',
    annualRevenue: '',
    description: '',
    motivation: '',
    documents: []
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: keyof FormData, value: any) => {
    // Ensure servicesOffered is always an array
    if (field === 'servicesOffered' && !Array.isArray(value)) {
      value = [value]
    }
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleServiceToggle = (service: string) => {
    const current = formData.servicesOffered
    const updated = current.includes(service)
      ? current.filter(s => s !== service)
      : [...current, service]
    handleInputChange('servicesOffered', updated)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, field: 'logo' | 'documents') => {
    const file = event.target.files?.[0]
    if (file) {
      if (field === 'logo') {
        handleInputChange('logo', file)
      } else {
        handleInputChange('documents', [...formData.documents, file])
      }
    }
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!formData.organizationName.trim()) {
      newErrors.organizationName = 'Organization name is required'
    }
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required'
    }
    if (!formData.businessType) {
      newErrors.businessType = 'Business type is required'
    }
    if (formData.servicesOffered.length === 0) {
      newErrors.servicesOffered = 'Please select at least one service'
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Organization description is required'
    }
    if (!formData.motivation.trim()) {
      newErrors.motivation = 'Motivation for joining is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Application Submitted Successfully!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in joining EBASPA. We have received your application 
          and will review it within 5-7 business days. You will receive an email confirmation 
          with further instructions.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
          <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Application review by our membership committee</li>
            <li>• Reference checks and verification</li>
            <li>• Interview (if required)</li>
            <li>• Final decision and welcome package</li>
          </ul>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-8"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Membership Application Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Organization Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Building2 className="w-5 h-5 mr-2" />
            Organization Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Organization Name *
              </label>
              <input
                type="text"
                value={formData.organizationName}
                onChange={(e) => handleInputChange('organizationName', e.target.value)}
                className={`form-input ${errors.organizationName ? 'border-red-500' : ''}`}
                placeholder="Enter organization name"
              />
              {errors.organizationName && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.organizationName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Type *
              </label>
              <select
                value={formData.businessType}
                onChange={(e) => handleInputChange('businessType', e.target.value)}
                className={`form-select ${errors.businessType ? 'border-red-500' : ''}`}
              >
                <option value="">Select business type</option>
                {businessTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.businessType && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.businessType}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Logo
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="logo-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                  >
                    <span>Upload a file</span>
                    <input id="logo-upload" name="logo-upload" type="file" className="sr-only" onChange={(e) => handleFileUpload(e, 'logo')} accept="image/*" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                {formData.logo && <p className="text-sm text-green-600 mt-2">{formData.logo.name}</p>}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Organization Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={4}
              className={`form-textarea ${errors.description ? 'border-red-500' : ''}`}
              placeholder="Describe your organization, its mission, and main activities..."
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.description}
              </p>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <User className="w-5 h-5 mr-2" />
            Contact Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Person *
              </label>
              <input
                type="text"
                value={formData.contactPerson}
                onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                className={`form-input ${errors.contactPerson ? 'border-red-500' : ''}`}
                placeholder="Full name of contact person"
              />
              {errors.contactPerson && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.contactPerson}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                placeholder="contact@organization.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                placeholder="+251 911 123 456"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                className="form-input"
                placeholder="https://www.organization.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address *
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className={`form-input ${errors.address ? 'border-red-500' : ''}`}
                placeholder="Street address"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.address}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City *
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className={`form-input ${errors.city ? 'border-red-500' : ''}`}
                placeholder="City"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.city}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Region
              </label>
              <input
                type="text"
                value={formData.region}
                onChange={(e) => handleInputChange('region', e.target.value)}
                className="form-input"
                placeholder="Region/State"
              />
            </div>
          </div>
        </div>

        {/* Business Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Business Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years in Business
              </label>
              <select
                value={formData.yearsInBusiness}
                onChange={(e) => handleInputChange('yearsInBusiness', e.target.value)}
                className="form-select"
              >
                <option value="">Select years</option>
                <option value="0-1">0-1 years</option>
                <option value="2-5">2-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="11-20">11-20 years</option>
                <option value="20+">20+ years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Employees
              </label>
              <select
                value={formData.numberOfEmployees}
                onChange={(e) => handleInputChange('numberOfEmployees', e.target.value)}
                className="form-select"
              >
                <option value="">Select range</option>
                <option value="1-5">1-5 employees</option>
                <option value="6-20">6-20 employees</option>
                <option value="21-50">21-50 employees</option>
                <option value="51-100">51-100 employees</option>
                <option value="100+">100+ employees</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Revenue (ETB)
              </label>
              <select
                value={formData.annualRevenue}
                onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                className="form-select"
              >
                <option value="">Select range</option>
                <option value="0-1M">0-1M ETB</option>
                <option value="1M-5M">1M-5M ETB</option>
                <option value="5M-10M">5M-10M ETB</option>
                <option value="10M-50M">10M-50M ETB</option>
                <option value="50M+">50M+ ETB</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Services Offered *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {serviceOptions.map(service => (
                <label key={service} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.servicesOffered.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-700">{service}</span>
                </label>
              ))}
            </div>
            {errors.servicesOffered && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.servicesOffered}
              </p>
            )}
          </div>
        </div>

        {/* Motivation */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Motivation for Joining EBASPA
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Why do you want to join EBASPA? *
            </label>
            <textarea
              value={formData.motivation}
              onChange={(e) => handleInputChange('motivation', e.target.value)}
              rows={4}
              className={`form-textarea ${errors.motivation ? 'border-red-500' : ''}`}
              placeholder="Please describe your motivation for joining EBASPA and how you plan to contribute to the association..."
            />
            {errors.motivation && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.motivation}
              </p>
            )}
          </div>
        </div>

        {/* Documents */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Upload className="w-5 h-5 mr-2" />
            Supporting Documents
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Documents (Optional)
            </label>
            <input
              type="file"
              multiple
              onChange={(e) => handleFileUpload(e, 'documents')}
              className="form-input file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
            <p className="text-sm text-gray-500 mt-1">
              Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB each)
            </p>
            
            {formData.documents.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium text-gray-700">Uploaded files:</p>
                {formData.documents.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                    <span className="text-sm text-gray-600">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => handleInputChange('documents', formData.documents.filter((_, i) => i !== index))}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting Application...
              </>
            ) : (
              'Submit Application'
            )}
          </button>
        </div>
      </form>
    </motion.div>
  )
} 