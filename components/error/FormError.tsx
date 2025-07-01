'use client'

import { AlertCircle } from 'lucide-react'

interface FormErrorProps {
  message: string
  className?: string
}

export default function FormError({ message, className = '' }: FormErrorProps) {
  if (!message) return null

  return (
    <div className={`bg-red-50 border border-red-200 rounded-md p-4 ${className}`}>
      <div className="flex">
        <AlertCircle className="h-5 w-5 text-red-400" />
        <div className="ml-3">
          <p className="text-sm text-red-500">{message}</p>
        </div>
      </div>
    </div>
  )
} 