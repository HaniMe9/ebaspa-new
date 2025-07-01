'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Calendar, CheckCircle } from 'lucide-react'

const membershipPlans = [
  {
    id: 'full',
    name: 'Full Membership',
    price: 500,
    duration: '1 year',
    features: [
      'Access to all training programs',
      'Member directory access',
      'Policy advocacy participation',
      'Networking events',
      'Resource library access',
      'Priority support'
    ]
  },
  {
    id: 'associate',
    name: 'Associate Membership',
    price: 300,
    duration: '1 year',
    features: [
      'Access to basic training programs',
      'Member directory access',
      'Networking events',
      'Resource library access'
    ]
  },
  {
    id: 'student',
    name: 'Student Membership',
    price: 100,
    duration: '1 year',
    features: [
      'Access to student programs',
      'Networking events',
      'Resource library access',
      'Mentorship opportunities'
    ]
  }
]

export default function MembershipRenewalForm() {
  const [selectedPlan, setSelectedPlan] = useState('full')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Renewal submitted:', { plan: selectedPlan })
    
    setIsProcessing(false)
    // Handle success/error
  }

  const selectedPlanData = membershipPlans.find(plan => plan.id === selectedPlan)

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Membership Plans */}
        <div className="lg:col-span-2">
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Plan</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {membershipPlans.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedPlan === plan.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-300 hover:border-primary-300'
                  }`}
                >
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-primary-600 mb-1">
                      ${plan.price}
                    </div>
                    <div className="text-sm text-gray-600 mb-4">per {plan.duration}</div>
                    
                    <ul className="text-sm text-gray-600 space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div>
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Member Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Member ID
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your member ID"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <div className="space-y-2">
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-primary-300">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      defaultChecked
                      className="mr-3"
                    />
                    <CreditCard className="w-5 h-5 text-gray-500 mr-3" />
                    <span className="text-gray-700">Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-primary-300">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      className="mr-3"
                    />
                    <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                    <span className="text-gray-700">Bank Transfer</span>
                  </label>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Membership Plan:</span>
                    <span className="font-medium">{selectedPlanData?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{selectedPlanData?.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium">${selectedPlanData?.price}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Total:</span>
                    <span className="font-bold text-primary-600">${selectedPlanData?.price}</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  'Complete Renewal'
                )}
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-500">
              <p>Your membership will be renewed immediately upon successful payment.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 