'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, CreditCard, Building2, DollarSign } from 'lucide-react'

const donationAmounts = [
  { amount: 50, label: '$50' },
  { amount: 100, label: '$100' },
  { amount: 250, label: '$250' },
  { amount: 500, label: '$500' },
  { amount: 1000, label: '$1,000' },
  { amount: 0, label: 'Custom' }
]

const paymentMethods = [
  { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
  { id: 'bank', label: 'Bank Transfer', icon: Building2 }
]

export default function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [customAmount, setCustomAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Donation submitted:', {
      amount: selectedAmount || parseFloat(customAmount),
      paymentMethod
    })
    
    setIsProcessing(false)
    // Handle success/error
  }

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="card p-8"
      >
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
            <Heart className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Make a Donation</h2>
            <p className="text-gray-600">Support our mission to empower Ethiopia's business ecosystem</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Donation Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Donation Amount
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {donationAmounts.map((option) => (
                <button
                  key={option.amount}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(option.amount)
                    if (option.amount !== 0) setCustomAmount('')
                  }}
                  className={`p-3 border rounded-lg text-center transition-all duration-200 ${
                    (selectedAmount === option.amount && option.amount !== 0) ||
                    (option.amount === 0 && customAmount)
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-300 hover:border-primary-300'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            
            {selectedAmount === 0 && (
              <div className="mt-3">
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter custom amount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            )}
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Payment Method
            </label>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <label key={method.id} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-primary-300">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <method.icon className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">{method.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Donor Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Donor Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Share why you're supporting EBASPA..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Donation Summary */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Donation Amount:</span>
              <span className="font-semibold text-gray-900">
                ${selectedAmount || customAmount || 0}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Processing Fee:</span>
              <span className="font-semibold text-gray-900">$0</span>
            </div>
            <hr className="my-2" />
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-lg font-bold text-primary-600">
                ${selectedAmount || customAmount || 0}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isProcessing || (!selectedAmount && !customAmount)}
            className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Processing...
              </>
            ) : (
              <>
                <DollarSign className="w-5 h-5 mr-2" />
                Complete Donation
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Your donation is secure and tax-deductible. Thank you for your support!</p>
        </div>
      </motion.div>
    </div>
  )
} 