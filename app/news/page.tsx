import NewsHero from '@/components/news/NewsHero'
import NewsGrid from '@/components/news/NewsGrid'
import NewsCategories from '@/components/news/NewsCategories'
import NewsletterSignup from '@/components/news/NewsletterSignup'

export const metadata = {
  title: 'News & Updates - EBASPA',
  description: 'Stay updated with the latest news, announcements, and developments from EBASPA and the Ethiopian business development services sector.',
}

export default function NewsPage() {
  return (
    <div className="pt-20">
      <NewsHero />
      <NewsCategories />
      <NewsGrid />
      <NewsletterSignup />
    </div>
  )
} 