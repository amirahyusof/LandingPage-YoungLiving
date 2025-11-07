// This is the main page of the application
import React from 'react'
import HeroSection from './component/hero'
import ProductSection from './component/product'
import BenefitSection from './component/benefits'
import AboutSection from './component/about'
import Header from './component/header'
import Footer from './component/footer'


export default function MainPage(){
  return (
    <div className="flex flex-col min-h-screen mx-auto justify-center">
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
    </div>
  )
}

