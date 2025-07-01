import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, amount, currency, message, paymentMethod } = body

    // Basic validation
    if (!name || !email || !amount || !paymentMethod) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate amount
    if (amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid donation amount' },
        { status: 400 }
      )
    }

    // Create donation record
    const donation = await prisma.donation.create({
      data: {
        name,
        email,
        amount: parseFloat(amount),
        currency: currency || 'USD',
        message,
        paymentMethod,
        status: 'PENDING'
      }
    })

    // TODO: Integrate with payment gateway (Stripe, PayPal, etc.)
    // TODO: Process payment
    // TODO: Send confirmation email
    // TODO: Send notification to admin

    return NextResponse.json(
      { 
        message: 'Donation submitted successfully',
        donationId: donation.id,
        // paymentUrl: paymentUrl // Return payment URL if needed
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Donation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 