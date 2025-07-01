import { NextResponse } from 'next/server'
import { SignJWT } from 'jose'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    const { email, password, rememberMe } = await request.json()
    console.log('Login attempt for:', email)

    // Temporary hardcoded admin credentials for hanna9
    const validCredentials = {
      'hanna9@ebaspa.org': 'hanna9password',
      'admin@ebaspa.org': 'admin123'
    }

    // Check if credentials are valid
    if (!validCredentials[email as keyof typeof validCredentials] || validCredentials[email as keyof typeof validCredentials] !== password) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Generate JWT token
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || 'your-secret-key'
    )

    const token = await new SignJWT({ 
      userId: 'hanna9-user-id',
      email: email,
      role: 'ADMIN',
      adminId: 'hanna9-admin-id'
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime(rememberMe ? '7d' : '24h')
      .sign(secret)

    console.log('Token generated successfully')

    // Set cookie
    cookies().set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: rememberMe ? 7 * 24 * 60 * 60 : 24 * 60 * 60 // 7 days or 24 hours
    })

    console.log('Cookie set successfully')

    return NextResponse.json({
      message: 'Login successful',
      user: {
        id: 'hanna9-user-id',
        email: email,
        name: email === 'hanna9@ebaspa.org' ? 'hanna9' : 'Admin User',
        role: 'ADMIN',
        adminId: 'hanna9-admin-id'
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { message: 'An error occurred during login. Please try again.' },
      { status: 500 }
    )
  }
} 