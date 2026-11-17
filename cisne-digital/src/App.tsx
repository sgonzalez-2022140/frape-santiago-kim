import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import TrustStrip from './Components/TrustStrip'
import Services from './Components/Services'
import WhyUs from './Components/WhyUs'
import Process from './Components/Process'
import Portfolio from './Components/Portfolio'
import Pricing from './Components/Pricing'
import About from './Components/About'
import FAQ from './Components/FAQ'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import FloatingContact from './Components/FloatingContact'
import './App.css'

export default function App() {
  const [chosenPlan, setChosenPlan] = useState('')
  const handleSelectPlan = (plan: string) => {
    setChosenPlan(plan)
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <TrustStrip />
        <Services />
        <WhyUs />
        <Process />
        <Portfolio />
        <Pricing onSelectPlan={handleSelectPlan} />
        <About />
        <FAQ />
        <Contact chosenPlan={chosenPlan} />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
