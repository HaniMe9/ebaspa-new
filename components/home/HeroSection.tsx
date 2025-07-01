'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

const slides = [
  {
    image: '/assets/banners/banner-1.jpg',
    title: "Empowering Business Growth",
    subtitle: "Your Partner in Excellence and Innovation",
    description: "EBASPA is dedicated to fostering a robust business ecosystem in Ethiopia by providing top-tier advisory services and support to SMEs and SGBs.",
  },
  {
    image: '/assets/banners/banner-2.jpg',
    title: "Driving Policy and Advocacy",
    subtitle: "Shaping the Future of Business",
    description: "We actively engage with policymakers to advocate for a more favorable business environment, ensuring your voice is heard.",
  },
  {
    image: '/assets/banners/banner-3.jpg',
    title: "Building Capacity for Success",
    subtitle: "Unlocking Your Team's Potential",
    description: "Through targeted training and development programs, we equip businesses with the skills and knowledge needed to thrive in a competitive market.",
  },
  {
    image: '/assets/banners/banner-4.jpg',
    title: "Facilitating Market Connections",
    subtitle: "Expanding Your Network and Reach",
    description: "We connect you with valuable market opportunities, partners, and resources to accelerate your growth and success.",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="100vw"
            quality={100}
            priority={currentSlide === 0}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>
      
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            key={currentSlide + '-title'}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          >
            {slides[currentSlide].title}
            <span className="block text-secondary-300 text-3xl md:text-4xl mt-2">{slides[currentSlide].subtitle}</span>
          </motion.h1>
          <motion.p 
            key={currentSlide + '-desc'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {slides[currentSlide].description}
          </motion.p>
          
          <motion.div 
            key={currentSlide + '-btns'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/membership/join" className="btn-primary text-lg px-8 py-4">
              Join EBASPA
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <Link href="/about" className="flex items-center space-x-2 text-white hover:text-secondary-300 transition-colors duration-200">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span className="text-lg">Learn More</span>
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? 'bg-secondary-300' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
} 