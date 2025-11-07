"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FaWhatsapp } from 'react-icons/fa'

export default function AboutSection(){
  return (
    <section id="about" className="py-20 bg-orange-100 flex mx-auto justify-center items-center">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-emerald-800 font-bold mb-4">About Me</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Your personal guide to the world of Young Living Essential Oils
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
                  <Image 
                    src="/placeholder.jpg" 
                    alt="Young Living Consultant" 
                    fill 
                    className="object-cover border-2 border-emerald-600 rounded-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl text-emerald-500 font-semibold mb-4">Hi, I'm Sarah!</h3>
                <p className="text-slate-600 mb-4">
                  I've been a passionate advocate for natural wellness for over 5 years. My journey with Young Living began when I was searching for natural solutions for my family's health concerns.
                </p>
                <p className="text-slate-600 mb-4">
                  As a certified aromatherapist and Young Living Silver distributor, I'm dedicated to helping others discover the transformative power of essential oils. I believe that everyone deserves to experience the benefits of these amazing natural products.
                </p>
                <p className="text-slate-600">
                  Whether you're new to essential oils or looking to expand your collection, I'm here to guide you every step of the way. Let's connect and start your wellness journey together!
                </p>
                
                <Button 
                  className="mt-6 bg-[#26643F] hover:bg-emerald-700 p-2"
                  onClick={() => window.open("https://wa.me/1234567890?text=I'd%20like%20to%20learn%20more%20about%20your%20Young%20Living%20journey", "_blank")}
                >
                  <FaWhatsapp className="text-white" />
                  Chat with Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

