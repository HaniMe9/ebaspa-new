import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin_token')?.value

    if (!token) {
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 }
      )
    }

    // Verify token
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || 'your-jwt-secret-key-here'
    )
    
    const { payload } = await jwtVerify(token, secret)
    
    return NextResponse.json({
      message: 'Authenticated',
      user: {
        id: payload.id,
        email: payload.email,
        name: payload.name,
        role: payload.role
      }
    })
  } catch (error) {
    return NextResponse.json(
      { message: 'Invalid token' },
      { status: 401 }
    )
  }
} 