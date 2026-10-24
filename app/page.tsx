import Categories from '@/components/Categories'
import FeaturedGigs from '@/components/FeaturedGigs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import SellerCta from '@/components/SellerCta'
import TrustBand from '@/components/TrustBand'

export default function AnaSayfa() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Categories />
        <HowItWorks />
        <FeaturedGigs />
        <TrustBand />
        <SellerCta />
      </main>
      <Footer />
    </>
  )
}
