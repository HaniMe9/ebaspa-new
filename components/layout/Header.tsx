'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, User, LogIn } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Membership', 
    href: '/membership',
    submenu: [
      { name: 'Benefits', href: '/membership/benefits' },
      { name: 'How to Join', href: '/membership/join' },
      { name: 'Member Directory', href: '/membership/directory' },
      { name: 'Member Login', href: '/membership/login' },
    ]
  },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'Capacity Building', href: '/services/capacity-building' },
      { name: 'Policy Advocacy', href: '/services/policy-advocacy' },
      { name: 'Market Facilitation', href: '/services/market-facilitation' },
      { name: 'Standards & Accreditation', href: '/services/standards' },
      { name: 'SME Support', href: '/services/sme-support' },
    ]
  },
  { name: 'Resources', href: '/resources' },
  { name: 'News & Events', href: '/news-events' },
  { name: 'Contact', href: '/contact' },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [submenuTimeout, setSubmenuTimeout] = useState<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (submenuTimeout) {
        clearTimeout(submenuTimeout)
      }
    }
  }, [submenuTimeout])

  const closeMenu = () => {
    setIsOpen(false)
    setActiveSubmenu(null)
  }

  const handleSubmenuEnter = (itemName: string) => {
    if (submenuTimeout) {
      clearTimeout(submenuTimeout)
      setSubmenuTimeout(null)
    }
    setActiveSubmenu(itemName)
  }

  const handleSubmenuLeave = () => {
    const timeout = setTimeout(() => {
      setActiveSubmenu(null)
    }, 300) // 300ms delay before closing
    setSubmenuTimeout(timeout)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-28">
          {/* EBASPA Logo on the left */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center justify-center" style={{height: 100}}>
              <Image
                src="/EBASPA no BK.png"
                alt="EBASPA Logo"
                width={350}
                height={200}
                style={{objectFit: 'contain'}}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onMouseEnter={() => item.submenu && handleSubmenuEnter(item.name)}
                  onMouseLeave={handleSubmenuLeave}
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                    onMouseEnter={() => handleSubmenuEnter(item.name)}
                    onMouseLeave={handleSubmenuLeave}
                  >
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200"
                        onClick={closeMenu}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side: CTA Buttons, ethiobds.org logo */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex items-center space-x-4">
              <Link href="/membership/login" className="btn-outline">
                <LogIn className="w-4 h-4 mr-2" />
                Member Login
              </Link>
              <Link href="/membership/join" className="btn-primary">
                <User className="w-4 h-4 mr-2" />
                Join EBASPA
              </Link>
            </div>
            <div className="h-10 w-px bg-gray-200"></div>
            <a 
              href="https://ethiobds.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity flex items-center"
            >
              <div className="flex items-center justify-center" style={{height: 75}}>
                <Image
                  src="/ethiobds.png"
                  alt="ethiobds.org"
                  width={250}
                  height={125}
                  style={{objectFit: 'contain'}}
                  className="rounded-lg"
                />
              </div>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200"
            >
              <nav className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`block py-3 px-4 rounded-lg transition-colors duration-200 ${
                        pathname === item.href
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block py-2 px-4 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                            onClick={closeMenu}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <Link
                    href="/membership/login"
                    className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    <LogIn className="w-4 h-4 inline mr-2" />
                    Member Login
                  </Link>
                  <Link
                    href="/membership/join"
                    className="block py-3 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    <User className="w-4 h-4 inline mr-2" />
                    Join EBASPA
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
} 