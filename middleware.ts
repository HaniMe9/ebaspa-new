import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname

  // Allow access to login and register pages
  if (path === '/admin/login' || path === '/admin/register') {
    return NextResponse.next()
  }

  // Only protect other /admin routes
  if (path.startsWith('/admin')) {
    const token = request.cookies.get('admin_token')?.value
    if (!token) {
      // Not logged in, redirect to login
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    // Verify token function
    const verifyToken = async () => {
      if (!token) return null

      try {
        const secret = new TextEncoder().encode(
          process.env.JWT_SECRET || 'your-jwt-secret-key-here'
        )
        const { payload } = await jwtVerify(token, secret)
        return payload
      } catch (error) {
        return null
      }
    }

    const payload = await verifyToken()
    if (!payload) {
      // Invalid token, redirect to login
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    // Valid token, allow access
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
} 