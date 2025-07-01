'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Twitter, Mail, ArrowLeft, ArrowRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'

const boardMembers = [
  {
    name: 'Mr. Afework Yohannes',
    title: 'President',
    image: '/assets/board/board-1.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:eleni@ebaspa.org'
    }
  },
  {
    name: ' Dr. Aynalem Abayneh',
    title: 'Vice President',
    image: '/assets/board/board-2.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:addis@ebaspa.org'
    }
  },
  {
    name: 'Mr. Tewodros Ylema',
    title: 'Treasurer',
    image: '/assets/board/board-3.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:sara@ebaspa.org'
    }
  },
  {
    name: 'Dr. Addis Kassahun',
    title: 'Secretary',
    image: '/assets/board/board-4.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:kibret@ebaspa.org'
    }
  },
  {
    name: 'Ms. Haven',
    title: 'Cashier',
    image: '/assets/board/board-5.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:bethlehem@ebaspa.org'
    }
  },
  {
    name: ' Dr. Bezabih Bekele',
    title: 'GA Chairman',
    image: '/assets/board/board-6.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:haileyesus@ebaspa.org'
    }
  },
  {
    name: 'Mr. Tsedeke Tesfa',
    title: 'Auditor',
    image: '/assets/board/board-7.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:feven@ebaspa.org'
    }
  },
  {
    name: 'Mis. Tsige Enawgaw',
    title: 'GA Secretary',
    image: '/assets/board/board-8.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:ermias@ebaspa.org'
    }
  }
]

const secretariat = [
  {
    name: 'Mr. Berhanu gebremichael',
    title: 'Secretory General ',
    image: '/assets/secretariat/secretariat-1.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:berhabu.g@ebaspa.org'
    }
  },
  {
    name: 'Mr. Gerachewu Habtu',
    title: 'Organization development and membership mobilization officer ',
    image: '/assets/secretariat/secretariat-2.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:getachew.habtu@ebaspa.org'
    }
  },
  {
    name: 'Mis. Hanna Meressa',
    title: 'IT officer',
    image: '/assets/secretariat/secretariat-3.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:hanna.me@ebaspa.org'
    }
  },
  {
    name: 'Mr. Mohamed Abubeker',
    title: 'Finance Officer',
    image: '/assets/secretariat/secretariat-4.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:mohamed.abubeker@ebaspa.org'
    }
  },
  {
    name: 'Mr. Serkalem Dejene',
    title: 'Secretory & Communication Officer',
    image: '/assets/secretariat/secretariat-5.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:serkalem.d@ebaspa.org'
    }
  },
  // {
  //   name: 'EBASPA AI Assistant',
  //   title: 'Virtual Support Specialist',
  //   image: '/assets/secretariat/ai-assistant.jpg',
  //   social: {
  //     linkedin: '#',
  //     twitter: '#',
  //     email: 'mailto:ai@ebaspa.org'
  //   },
    // description: "Available 24/7 to assist with membership applications, explain benefits, provide information about EBASPA, and guide you through our Business Development Services ecosystem. I can help you with:",
    // capabilities: [
    //   "Membership form completion guidance",
    //   "Detailed explanation of member benefits",
    //   "Information about EBASPA's mission and services",
    //   "Navigation through BDS ecosystem",
    //   "Quick responses to common queries"
    // ]
  // }
];

type TeamMember = {
  name: string;
  title: string;
  image: string;
  social: {
    linkedin: string;
    twitter: string;
    email: string;
  };
  description?: string;
  capabilities?: string[];
};

interface TeamMemberCardProps {
  member: TeamMember;
  delay: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-white rounded-lg shadow-lg overflow-hidden text-center transition-transform duration-300 hover:scale-105"
  >
    <div className="relative h-64">
      <Image 
        src={member.image} 
        alt={member.name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="grayscale hover:grayscale-0 transition-all duration-300 object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
      <p className="text-primary-600 mb-4">{member.title}</p>
      {member.description && (
        <p className="text-sm text-gray-600 mb-3">{member.description}</p>
      )}
      {member.capabilities && (
        <ul className="text-sm text-left text-gray-600 mb-4 list-disc list-inside">
          {member.capabilities.map((capability, index) => (
            <li key={index} className="mb-1">{capability}</li>
          ))}
        </ul>
      )}
      <div className="flex justify-center space-x-4">
        {member.social.linkedin !== 'https://linkedin.com' && (
          <a href={member.social.linkedin} className="text-gray-400 hover:text-primary-600" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
        )}
        {member.social.twitter !== 'https://twitter.com' && (
          <a href={member.social.twitter} className="text-gray-400 hover:text-primary-600" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
        )}
        <a href={member.social.email} className="text-gray-400 hover:text-primary-600">
          <Mail />
        </a>
      </div>
    </div>
  </motion.div>
)

export default function TeamSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Board Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Board of Directors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our board provides strategic leadership and governance, guiding EBASPA towards 
            its mission of fostering a vibrant business ecosystem in Ethiopia.
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {boardMembers.map((member, index) => (
                <div key={member.name} className="flex-grow-0 flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pl-4">
                  <TeamMemberCard member={member} delay={index * 0.05} />
                </div>
              ))}
            </div>
          </div>
          <button onClick={scrollPrev} className="absolute top-1/2 -translate-y-1/2 -left-4 bg-white/80 backdrop-blur-sm shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-white transition-all">
            <ArrowLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button onClick={scrollNext} className="absolute top-1/2 -translate-y-1/2 -right-4 bg-white/80 backdrop-blur-sm shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-white transition-all">
            <ArrowRight className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Secretariat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Secretariat
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The secretariat team manages the day-to-day operations of EBASPA, implementing 
            our programs and serving our members.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center max-w-7xl mx-auto">
          {secretariat.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
} 