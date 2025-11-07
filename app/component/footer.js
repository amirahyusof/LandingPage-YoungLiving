"use client"
import React, {useState, useEffect} from 'react'
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

export default function FooterSection(){
  const [currentYear, setCurrentYear] = useState(null)
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])


  return (
    <footer id="contact" className="bg-white text-emerald-600 w-full px-10">
      <div className="container py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[#48615b] text-lg font-semibold mb-4">Essentique</h3>
            <p className="text-slate-400 mb-4">
              Your personal source for premium Young Living essential oils. Pure, potent, and transformative.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-emerald-600 hover:text-slate-600">
                <FaFacebook size={30} />
              </a>
              <a href="#" className="text-emerald-600 hover:text-slate-600">
                <FaInstagram size={30} />
              </a>
              <a href="#" className="text-emerald-600 hover:text-slate-600">
                <FaThreads size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-600 text-center">
            <p>© {currentYear} EssentialLife. All rights reserved.</p>
          </div>
      </div>
    </footer>  
  )
}

