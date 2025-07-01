import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed benefits
  const benefits = [
    {
      title: 'Capacity Building & Training',
      description: 'Access to specialized training programs, workshops, and certification courses designed to enhance your professional skills.',
      icon: 'GraduationCap',
      features: [
        'Exclusive training programs',
        'Professional certification courses',
        'Workshop and seminar access',
        'Skill development resources'
      ],
      order: 1
    },
    {
      title: 'Networking Opportunities',
      description: 'Connect with fellow business advisory service providers, potential clients, and industry experts.',
      icon: 'Users',
      features: [
        'Member-only networking events',
        'Industry conferences and forums',
        'Peer learning communities',
        'Mentorship programs'
      ],
      order: 2
    },
    {
      title: 'Policy Advocacy',
      description: 'Have your voice heard in policy discussions and contribute to shaping Ethiopia\'s BDS ecosystem.',
      icon: 'MessageSquare',
      features: [
        'Policy influence opportunities',
        'Industry representation',
        'Advocacy campaigns',
        'Government engagement'
      ],
      order: 3
    },
    {
      title: 'Market Facilitation',
      description: 'Access to market opportunities, client referrals, and business development support.',
      icon: 'TrendingUp',
      features: [
        'Client referral network',
        'Market access programs',
        'Business development support',
        'Partnership opportunities'
      ],
      order: 4
    },
    {
      title: 'Standards & Accreditation',
      description: 'Support in achieving industry standards and professional accreditation.',
      icon: 'Award',
      features: [
        'Quality standards guidance',
        'Accreditation support',
        'Best practice sharing',
        'Professional recognition'
      ],
      order: 5
    },
    {
      title: 'Resources & Information',
      description: 'Access to exclusive research, reports, toolkits, and industry insights.',
      icon: 'FileText',
      features: [
        'Research reports and publications',
        'Toolkits and guides',
        'Industry insights and trends',
        'Best practice documentation'
      ],
      order: 6
    },
    {
      title: 'International Exposure',
      description: 'Connect with international partners and access global business opportunities.',
      icon: 'Globe',
      features: [
        'International partnerships',
        'Global network access',
        'Cross-border opportunities',
        'International best practices'
      ],
      order: 7
    },
    {
      title: 'Professional Support',
      description: 'Legal, technical, and business support services to help you succeed.',
      icon: 'Shield',
      features: [
        'Legal advisory services',
        'Technical support',
        'Business consulting',
        'Risk management guidance'
      ],
      order: 8
    },
    {
      title: 'Technology Access',
      description: 'Access to digital tools, platforms, and technology solutions.',
      icon: 'Zap',
      features: [
        'Digital platform access',
        'Technology tools',
        'Online learning resources',
        'Digital marketing support'
      ],
      order: 9
    },
    {
      title: 'Business Growth',
      description: 'Direct support for business expansion and market penetration.',
      icon: 'Target',
      features: [
        'Business expansion support',
        'Market penetration strategies',
        'Growth consulting',
        'Strategic planning assistance'
      ],
      order: 10
    }
  ]

  for (const benefit of benefits) {
    await prisma.benefit.upsert({
      where: { id: benefit.title.toLowerCase().replace(/\s+/g, '-') },
      update: {
        ...benefit,
        membershipType: 'FULL'
      },
      create: {
        ...benefit,
        id: benefit.title.toLowerCase().replace(/\s+/g, '-'),
        membershipType: 'FULL'
      }
    })
  }

  console.log('Benefits seeded successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 