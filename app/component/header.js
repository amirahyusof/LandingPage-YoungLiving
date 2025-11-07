"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { 
  Sheet, 
  SheetTrigger, 
  SheetHeader, 
  SheetContent 
} from '@/components/ui/sheet'

export default function HeaderSection(){
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 shadow-md shadow-emerald-600 border-emerald-100 bg-white/95 backdrop-blur-md ">
      <div className='container mx-auto px-4'>
        <div className="relative flex h-16 items-center justify-between px-4">
          <div className=" left-6 flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-[#48615b]">Essentique</span>
            </Link>
          </div>

          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-6 text-emerald-900">
            <Link href="#" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="#products" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Products
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              About Me
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Benefits
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Button className="bg-[#26643F] hover:bg-emerald-700 w-32">
              Contact Me
            </Button>
          </div>

          <div className='md:hidden flex items-center'>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="border text-emerald-900 hover:bg-emerald-100">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-1/2 bg-orange-100 text-emerald-600">
                <SheetHeader>
                  <h2 className="text-lg font-bold">Menu</h2>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                  <Link href="#" className="text-lg font-medium hover:text-emerald-400 transition-colors">
                    Home
                  </Link>
                  <Link href="#products" className="text-lg font-medium hover:text-emerald-400 transition-colors">
                    Products
                  </Link>
                  <Link href="#about" className="text-lg font-medium hover:text-emerald-400 transition-colors">
                    About Me
                  </Link>
                  <Link href="#benefits" className="text-lg font-medium hover:text-emerald-400 transition-colors">
                    Benefits
                  </Link>
                  
                </div>
                <div className="flex items-center mt-8">
                  <Button className="bg-emerald-500 text-white hover:bg-emerald-700 w-32">
                    Contact Me
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

