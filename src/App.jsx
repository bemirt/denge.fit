import Header from './components/Header'
import Hero from './components/Hero'
import WhySection from './components/WhySection'
import HowItWorks from './components/HowItWorks'
import ApproachSection from './components/ApproachSection'
import EarlyAccess from './components/EarlyAccess'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />

      <main>
        <Hero />
        <WhySection />
        <HowItWorks />
        <ApproachSection />
        <EarlyAccess />
      </main>

      <Footer />
    </div>
  )
}

export default App