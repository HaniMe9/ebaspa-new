import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  try {
    // Check if admin already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: 'admin@ebaspa.org' }
    })

    if (existingAdmin) {
      console.log('Admin user already exists')
      return
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('Admin@12345', 10)
    
    const user = await prisma.user.create({
      data: {
        name: 'Admin',
        email: 'admin@ebaspa.org',
        password: hashedPassword,
        role: 'ADMIN',
        admin: {
          create: {
            role: 'ADMIN'
          }
        }
      }
    })

    console.log('Admin user created successfully:', user.email)
  } catch (error) {
    console.error('Error creating admin user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main() 