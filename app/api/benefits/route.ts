import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Get all benefits
export async function GET() {
  try {
    const benefits = await prisma.benefit.findMany({
      where: { active: true },
      orderBy: { order: 'asc' }
    })

    return NextResponse.json(benefits)
  } catch (error) {
    console.error('Error fetching benefits:', error)
    return NextResponse.json(
      { error: 'Failed to fetch benefits' },
      { status: 500 }
    )
  }
}

// Create new benefit (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, icon, features, category, order, membershipType } = body

    // Basic validation
    if (!title || !description || !icon || !features || !membershipType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const benefit = await prisma.benefit.create({
      data: {
        title,
        description,
        icon,
        features,
        category,
        order: order || 0,
        membershipType
      }
    })

    return NextResponse.json(benefit, { status: 201 })
  } catch (error) {
    console.error('Error creating benefit:', error)
    return NextResponse.json(
      { error: 'Failed to create benefit' },
      { status: 500 }
    )
  }
} 