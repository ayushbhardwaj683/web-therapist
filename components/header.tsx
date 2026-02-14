

'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isBlogActive = pathname?.startsWith('/blog')
  const isContactActive = pathname?.startsWith('/contact')


  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
  }, [isMenuOpen])

  return (
    <>

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-[#F0ECE6]">
        

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative w-8 h-8 md:hidden flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute w-6 h-[2px] bg-[#3B3632] transition-all duration-300 ${
              isMenuOpen ? 'rotate-45' : '-translate-y-2'
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] bg-[#3B3632] transition-all duration-300 ${
              isMenuOpen ? '-rotate-45' : 'translate-y-2'
            }`}
          />
        </button>

   
        <Link
          href="/"
          className="text-2xl font-serif font-semibold text-[#3B3632]  transition-colors duration-300"
        >
          Dr. Maya
        </Link>

        <nav className="hidden md:flex gap-10">
          <Link
            href="/blog"
            className={`relative text-lg transition-colors duration-300 ${
              isBlogActive
                ? 'text-[#9C5F4B] after:absolute after:left-0 after:-bottom-[2px] after:w-full after:h-[1px] after:bg-[#9C5F4B] after:content-[""]'
                : 'text-[#3B3632] hover:text-[#9C5F4B]'
            }`}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className={`relative text-lg transition-colors duration-300 ${
              isContactActive
                ? 'text-[#9C5F4B] after:absolute after:left-0 after:-bottom-[2px] after:w-full after:h-[1px] after:bg-[#9C5F4B] after:content-[""]'
                : 'text-[#3B3632] hover:text-[#9C5F4B]'
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="md:hidden w-8" />
      </header>


      <div
        className={`fixed inset-0 bg-[#F0ECE6] z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
  
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-8 left-8 text-[#3B3632] text-3xl"
        >
          ✕
        </button>


        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-2xl font-serif text-[#3B3632]">
          Dr. Maya
        </div>


        <nav className="flex flex-col gap-14 text-center">
          <Link
            href="/blog"
            onClick={() => setIsMenuOpen(false)}
            className="text-5xl font-serif text-[#3B3632] hover:text-[#9C5F4B] transition-colors duration-300"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-5xl font-serif text-[#3B3632] hover:text-[#9C5F4B] transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  )
}
