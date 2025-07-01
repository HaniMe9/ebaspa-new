import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

// Dynamically import the ChatBot with no SSR
const ChatBot = dynamic(() => import('@/components/chat/ChatBot').then(mod => ({ default: mod.ChatBot })), {
  ssr: false,
  loading: () => null,
})

export const metadata: Metadata = {
  title: 'EBASPA - Ethiopian Business Advisory Service Providers Association',
  description: 'The Ethiopian Business Advisory Service Providers Association (EBASPA) is a membership organization dedicated to developing Ethiopia\'s business development services (BDS) ecosystem.',
  keywords: 'EBASPA, Ethiopia, Business Advisory, BDS, Business Development Services, SME, SGB, Consulting',
  authors: [{ name: 'EBASPA' }],
  creator: 'EBASPA',
  publisher: 'EBASPA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Suspense fallback={null}>
            <Header />
          </Suspense>
          <main className="flex-grow">{children}</main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
          <Suspense fallback={null}>
            <ChatBot />
          </Suspense>
        </div>
      </body>
    </html>
  )
} 