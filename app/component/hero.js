"use client"
import React, { useEffect, useState } from 'react'
import { Search, Sparkles, Leaf, Heart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[700px] overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 10 Q50 20 40 30 Q30 20 40 10 M20 40 Q30 50 20 60 Q10 50 20 40 M60 40 Q70 50 60 60 Q50 50 60 40" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    className="text-emerald-600 animate-pulse"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)"/>
        </svg>
      </div>

      {/* Floating Essential Oil Drops */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-400/30 backdrop-blur-sm"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs with Parallax */}
      <div 
        className="absolute top-20 -left-20 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
        }}
      />
      <div 
        className="absolute bottom-20 -right-20 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${-mousePos.x * 0.02}px, ${-mousePos.y * 0.02}px)`,
          animationDelay: '1.5s'
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(-50%, -50%) translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)`,
          animationDelay: '0.5s'
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Premium Badge */}
          <div className={`text-center mb-8 transform transition-all duration-1000 ${
            mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-emerald-900 px-5 py-2 rounded-full font-semibold text-sm shadow-lg shadow-yellow-400/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Star className="w-4 h-4 fill-emerald-900 animate-spin" style={{ animationDuration: '3s' }} />
              <span>Premium Young Living Essential Oils</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          {/* Main Headline */}
          <div className={`text-center mb-8 transform transition-all duration-1000 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent" style={{ backgroundSize: '200% auto', animation: 'gradient 4s ease infinite' }}>
                Elevate Your Wellness
              </span>
              <br />
              <span className="text-slate-800">with Nature's Essence</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className={`text-center mb-10 transform transition-all duration-1000 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Hi! I'm your personal Young Living consultant. Let me help you discover the transformative power of 
              <span className="font-semibold text-emerald-700"> pure, therapeutic-grade</span> essential oils.
            </p>
          </div>

          {/* Feature Pills */}
          <div className={`flex flex-wrap justify-center gap-3 mb-10 transform transition-all duration-1000 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            {[
              { icon: Leaf, text: '100% Pure', color: 'from-emerald-500 to-teal-500' },
              { icon: Heart, text: 'Therapeutic Grade', color: 'from-rose-500 to-pink-500' },
              { icon: Sparkles, text: 'Premium Quality', color: 'from-amber-500 to-yellow-500' }
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border-2 border-white/50 hover:scale-110 hover:shadow-xl transition-all duration-300`}
              >
                <div className={`p-1 rounded-full bg-gradient-to-br ${feature.color}`}>
                  <feature.icon className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-700">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-10 transform transition-all duration-1000 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '800ms' }}>
            <Button
              className="group relative p-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold text-lg shadow-xl shadow-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/60 transition-all duration-300 hover:scale-105 overflow-hidden"
              onClick={() => window.open("https://wa.me/1234567890?text=I'm%20interested%20in%20learning%20more%20about%20Young%20Living%20Essential%20Oils", "_blank")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                Contact Me
              </span>
            </Button>

           <button
              className="group px-4 bg-white/90 backdrop-blur-sm text-emerald-700 border-2 border-emerald-600 rounded-full font-bold text-lg shadow-lg hover:bg-emerald-50 hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center justify-center gap-2">
                <Leaf className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Explore Oils
              </span>
            </button>
          </div>

          {/* Enhanced Search Bar */}
          <div className={`max-w-2xl mx-auto transform transition-all duration-1000 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '1000ms' }}>
            <div className={`relative group ${searchFocused ? 'scale-105' : ''} transition-transform duration-300`}>
              <div className={`absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity ${searchFocused ? 'opacity-60 animate-pulse' : ''}`} />
              
              <div className="relative bg-white rounded-full shadow-2xl border-2 border-emerald-100 overflow-hidden">
                <Search className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${searchFocused ? 'text-emerald-600' : 'text-slate-400'}`} />
                <input
                  type="search"
                  placeholder="Search for essential oils..."
                  className="w-full pl-14 pr-6 py-4 text-lg bg-transparent focus:outline-none text-slate-700 placeholder:text-slate-400"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                
                <div className={`absolute inset-0 rounded-full border-2 border-emerald-500 transition-opacity ${searchFocused ? 'opacity-100' : 'opacity-0'}`} />
              </div>

              {searchFocused && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl border border-emerald-100 p-3" style={{ animation: 'slide-down 0.3s ease-out' }}>
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-2 px-3">Popular Searches</p>
                  {['Lavender', 'Peppermint', 'Tea Tree', 'Eucalyptus'].map((oil, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-emerald-50 text-slate-700 transition-colors flex items-center gap-2"
                    >
                      <Leaf className="w-4 h-4 text-emerald-600" />
                      {oil}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`flex flex-wrap justify-center gap-6 mt-12 transform transition-all duration-1000 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '1200ms' }}>
            {[
              { label: 'Certified Consultant', value: '⭐' },
              { label: 'Happy Customers', value: '500+' },
              { label: 'Premium Products', value: '100+' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold text-emerald-700">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          25% { transform: translateY(-30px) translateX(15px) scale(1.1); }
          50% { transform: translateY(-50px) translateX(-15px) scale(0.9); }
          75% { transform: translateY(-30px) translateX(15px) scale(1.05); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

