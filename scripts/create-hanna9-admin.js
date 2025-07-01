const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  try {
    // Check if hanna9 user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: 'hanna9@ebaspa.org' }
    });

    if (existingUser) {
      console.log('User hanna9 already exists');
      return;
    }

    // Create hanna9 user with admin role
    const hashedPassword = await bcrypt.hash('hanna9password', 10);
    
    const user = await prisma.user.create({
      data: {
        name: 'hanna9',
        email: 'hanna9@ebaspa.org',
        password: hashedPassword,
        role: 'ADMIN',
        admin: {
          create: {
            role: 'ADMIN'
          }
        }
      }
    });

    console.log('User hanna9 created successfully:');
    console.log('Email: hanna9@ebaspa.org');
    console.log('Password: hanna9password');
    console.log('Role: ADMIN');
  } catch (error) {
    console.error('Error creating hanna9 user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 