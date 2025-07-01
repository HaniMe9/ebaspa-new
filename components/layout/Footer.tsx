'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

const footerLinks = {
  about: [
    { name: 'Who We Are', href: '/about' },
    { name: 'Our Mission', href: '/about#mission' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Partners', href: '/about#partners' },
  ],
  membership: [
    { name: 'Benefits', href: '/membership#benefits' },
    { name: 'How to Join', href: '/membership/join' },
    { name: 'Member Directory', href: '/membership/directory' },
    { name: 'Member Login', href: '/membership/login' },
  ],
  services: [
    { name: 'Capacity Building', href: '/services/capacity-building' },
    { name: 'Policy Advocacy', href: '/services/policy-advocacy' },
    { name: 'Market Facilitation', href: '/services/market-facilitation' },
    { name: 'Standards & Accreditation', href: '/services/standards' },
    { name: 'SME Support', href: '/services/sme-support' },
  ],
  resources: [
    { name: 'Publications', href: '/resources#publications' },
    { name: 'News & Events', href: '/news' },
    { name: 'Toolkits', href: '/resources#toolkits' },
    { name: 'FAQ', href: '/resources#faq' },
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
]

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Image
                src="/EBASPA no BK.png"
                alt="EBASPA Logo"
                width={130}
                height={38}
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The Ethiopian Business Advisory Service Providers Association (EBASPA) is dedicated to 
              developing Ethiopia's business development services ecosystem and empowering SMEs/SGBs 
              through capacity building, policy advocacy, and market facilitation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span>Mexico Debrework bulding 11th floor, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-primary-400" />
                <span>+251 921 259 229</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-primary-400" />
                <span>info@ebaspa.org</span>
              </div>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Membership Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Membership</h4>
            <ul className="space-y-2">
              {footerLinks.membership.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} EBASPA. All rights reserved.<br/> Developed by Hanna Meressa
              </p>
              <div className="flex space-x-4">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Social Media Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-gray-700 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>

              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white hover:bg-primary-700 transition-all duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="border-t border-gray-800 py-4">
          <div className="text-center text-gray-400 text-sm">
            <p>
              EBASPA is registered under Registry Number 6441. Established on 22nd September 2022.
            </p>
            <p>
              The Ethiopian Business Advisory Service Providers Association is a non-profit organization 
              dedicated to the development of Ethiopia's business development services ecosystem.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 