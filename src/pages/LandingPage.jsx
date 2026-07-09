import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Tutors from '../components/Tutors'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDF8F0' }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Tutors />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
