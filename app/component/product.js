"use client"
import React from 'react'
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from "react-icons/fa";

export default function ProductSection(){
  return (
    <section id="products" className="flex py-20 bg-orange-100 mx-auto items-center justify-center">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-emerald-800">Premium Essential Oils Collection</h2>
          <p className="text-slate-600 max-w-2xl">
            Carefully sourced and distilled to preserve their therapeutic properties, our oils bring nature's
            healing power to your daily wellness routine.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl lg:max-w-6xl mx-auto px-4">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out transform translate-x-0 gap-6">
              {/* Product 1 */}
              <div className="min-w-[300px] md:min-w-[350px] bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 flex flex-col h-full">
                  <div className="relative h-48 mb-4">
                    <Image 
                      src="/images/Lavender.png" 
                      alt="Lavender Essential Oil" 
                      fill 
                      className="object-contain" 
                    />
                    <Badge className="absolute top-2 right-2 bg-amber-100 text-amber-800 hover:bg-amber-200">
                      Best Seller
                    </Badge>
                  </div>
                  <h3 className="text-xl text-slate-500 font-semibold mb-2">Lavender Essential Oil</h3>
                  <p className="text-slate-600 mb-4 flex-1">
                    Calming and relaxing, perfect for promoting restful sleep and reducing stress.
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-emerald-700">RM 59.99</span>
                    <Button 
                      variant="outline" 
                      className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 p-2"
                      onClick={() => window.open("https://wa.me/1234567890?text=I'm%20interested%20in%20the%20Lavender%20Essential%20Oil", "_blank")}
                    >
                      <FaWhatsapp />
                      Inquire
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="min-w-[300px] md:min-w-[350px] bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 flex flex-col h-full">
                  <div className="relative h-48 mb-4">
                    <Image 
                      src="/images/Peppermint.png" 
                      alt="Peppermint Essential Oil" 
                      fill 
                      className="object-contain" 
                    />
                    <Badge className="absolute top-2 right-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                      Popular
                    </Badge>
                  </div>
                  <h3 className="text-xl text-slate-500 font-semibold mb-2">Peppermint Vitality</h3>
                  <p className="text-slate-600 mb-4 flex-1">
                    Invigorating and refreshing, ideal for enhancing focus and supporting digestion.
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-emerald-700">RM 49.99</span>
                    <Button 
                      variant="outline" 
                      className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 p-2"
                      onClick={() => window.open("https://wa.me/1234567890?text=I'm%20interested%20in%20the%20Peppermint%20Vitality%20Oil", "_blank")}
                    >
                      <FaWhatsapp />
                      Inquire
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="min-w-[300px] md:min-w-[350px] bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 flex flex-col h-full">
                  <div className="relative h-48 mb-4">
                    <Image
                      src="/images/Frank.png"
                      alt="Frankincense Essential Oil"
                      fill
                      className="object-contain"
                    />
                    <Badge className="absolute top-2 right-2 bg-purple-100 text-purple-800 hover:bg-purple-200">
                      Premium
                    </Badge>
                  </div>
                  <h3 className="text-xl text-slate-500 font-semibold mb-2">Frankincense</h3>
                  <p className="text-slate-600 mb-4 flex-1">
                    Sacred and grounding, perfect for meditation and supporting skin health.
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-emerald-700">RM 129.99</span>
                    <Button 
                      variant="outline" 
                      className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 p-2"
                      onClick={() => window.open("https://wa.me/1234567890?text=I'm%20interested%20in%20the%20Frankincense%20Oil", "_blank")}
                    >
                      <FaWhatsapp  />
                      Inquire
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product 4 */}
              <div className="min-w-[300px] md:min-w-[350px] bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 flex flex-col h-full">
                  <div className="relative h-48 mb-4">
                    <Image 
                      src="/images/Lemon.png" 
                      alt="Lemon Essential Oil" 
                      fill 
                      className="object-contain" 
                    />
                    <Badge className="absolute top-2 right-2 bg-amber-100 text-amber-800 hover:bg-amber-200">
                      Best Seller
                    </Badge>
                  </div>
                  <h3 className="text-xl text-slate-500 font-semibold mb-2">Lemon Essential Oil</h3>
                  <p className="text-slate-600 mb-4 flex-1">
                    Bright and uplifting, perfect for cleansing and boosting your mood.
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-emerald-700">RM 64.99</span>
                    <Button 
                      variant="outline" 
                      className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 p-2"
                      onClick={() => window.open("https://wa.me/1234567890?text=I'm%20interested%20in%20the%20Lemon%20Essential%20Oil", "_blank")}
                    >
                      <FaWhatsapp />
                      Inquire
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Carousel Controls */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
            onClick={() => {
              const carousel = document.querySelector('.transition-transform');
              const currentTranslate = carousel.style.transform || 'translateX(0px)';
              const currentX = Number.parseInt(currentTranslate.replace('translateX(', '').replace('px)', '')) || 0;
              const newX = Math.min(0, currentX + 350);
              carousel.style.transform = `translateX(${newX}px)`;
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald-600">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
            onClick={() => {
              const carousel = document.querySelector('.transition-transform');
              const carouselWidth = carousel.scrollWidth;
              const containerWidth = carousel.parentElement.clientWidth;
              const currentTranslate = carousel.style.transform || 'translateX(0px)';
              const currentX = Number.parseInt(currentTranslate.replace('translateX(', '').replace('px)', '')) || 0;
              const maxScroll = -(carouselWidth - containerWidth);
              const newX = Math.max(maxScroll, currentX - 350);
              carousel.style.transform = `translateX(${newX}px)`;
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald-600">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
