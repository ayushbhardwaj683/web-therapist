
'use client'

import { useState } from 'react'
import ScrollAnimator from './scroll-animator'

export default function Subscribe() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
 
    <section className="bg-[#3B3632] py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimator>

          <div className="border border-[#F0ECE6]/30 p-8 md:p-16 lg:p-20">
            <div className="text-center">
              
  
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F0ECE6] mb-6">
                Subscribe
              </h2>
              
  
              <p className="text-lg md:text-xl text-[#F0ECE6]/80 mb-10 md:mb-12 font-light max-w-xl mx-auto">
                Sign up with your email address to receive news and updates.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-8">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
     
                  className="w-full sm:w-auto sm:flex-1 px-6 py-4 text-base bg-[#F0ECE6] text-[#3B3632] placeholder-[#3B3632]/50 focus:outline-none focus:ring-2 focus:ring-[#9C5F4B]"
                />
                <button
                  type="submit"
      
                  className="w-full sm:w-auto px-10 py-4 bg-transparent border border-[#F0ECE6] text-[#F0ECE6] font-bold text-sm hover:bg-[#F0ECE6] hover:text-[#3B3632] transition-all duration-300 uppercase tracking-[0.2em]"
                >
                  Sign Up
                </button>
              </form>

              <p className="text-sm md:text-base text-[#F0ECE6]/60 font-light">
                We respect your privacy.
              </p>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  )
}