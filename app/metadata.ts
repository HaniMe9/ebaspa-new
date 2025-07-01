import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EBASPA - Ethiopian Business Advisory Service Providers Association',
  description: 'The Ethiopian Business Advisory Service Providers Association (EBASPA) is a membership organization dedicated to developing Ethiopia\'s business development services (BDS) ecosystem.',
  keywords: 'EBASPA, Ethiopia, Business Advisory, BDS, Business Development Services, SME, SGB, Consulting',
  authors: [{ name: 'EBASPA' }],
  creator: 'EBASPA',
  publisher: 'EBASPA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'EBASPA - Ethiopian Business Advisory Service Providers Association',
    description: 'Empowering Ethiopia\'s business development services ecosystem',
    siteName: 'EBASPA',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EBASPA - Ethiopian Business Advisory Service Providers Association',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EBASPA - Ethiopian Business Advisory Service Providers Association',
    description: 'Empowering Ethiopia\'s business development services ecosystem',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
} 