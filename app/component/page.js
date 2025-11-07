import React from 'react'
import HeroSection from './hero'
import ProductSection from './product'
import BenefitSection from './benefits'
import AboutSection from './about'
import Header from './header'
import Footer from './footer'

export default function Version3Page(){
  return (
    <div className='flex flex-col min-h-screen items-center'>
      <Header />

      <main className='flex-1 w-full'>
      <HeroSection />
      <ProductSection />
      <BenefitSection />
      <AboutSection />
      </main>

      <Footer />
    </div>
  )
}
