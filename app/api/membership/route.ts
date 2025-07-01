import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      organizationName, 
      contactPerson, 
      email, 
      phone, 
      address, 
      city, 
      region,
      membershipType,
      services,
      description,
      motivation,
      logo
    } = body

    // Basic validation
    if (!organizationName || !contactPerson || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      )
    }

    // Create user account
    const hashedPassword = await bcrypt.hash('temporary-password', 12)
    
    const user = await prisma.user.create({
      data: {
        email,
        name: contactPerson,
        password: hashedPassword,
        role: 'MEMBER'
      }
    })

    // Create member profile
    const member = await prisma.member.create({
      data: {
        userId: user.id,
        organizationName,
        contactPerson,
        email,
        phone,
        address,
        city,
        region,
        membershipType: membershipType || 'FULL',
        services: services || [],
        description,
        logo,
        status: 'PENDING'
      }
    })

    // TODO: Send confirmation email
    // TODO: Send notification to admin

    return NextResponse.json(
      { 
        message: 'Membership application submitted successfully',
        memberId: member.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Membership application error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    
    const where = status ? { status: status as any } : {}
    
    const members = await prisma.member.findMany({
      where,
      include: {
        user: {
          select: {
            name: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(members)
  } catch (error) {
    console.error('Get members error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 