import NextAuth from 'next-auth'

// Extend the built-in types for session and user

declare module 'next-auth' {
  interface Session {
    user: {
      name?: string | null
      email?: string | null
      image?: string | null
      role?: 'ADMIN' | 'MEMBER'
    }
  }
  interface User {
    role?: 'ADMIN' | 'MEMBER'
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: 'ADMIN' | 'MEMBER'
  }
} 