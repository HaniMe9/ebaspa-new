import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  try {
    const cookieStore = await cookies()
    
    // Clear the admin token cookie
    const response = NextResponse.json({ message: 'Logged out successfully' })
    response.cookies.delete('admin_token')
    
    return response
  } catch (error) {
    return NextResponse.json(
      { message: 'Logout failed' },
      { status: 500 }
    )
  }
} 