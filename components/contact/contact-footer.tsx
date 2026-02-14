'use client'

import ScrollAnimator from '../scroll-animator'
import { Mail, Phone } from 'lucide-react'

export default function ContactFooter() {
  return (
   
    <footer className="bg-[#F0ECE6] text-[#3B3632] border-t border-[#3B3632]/70 font-sans">
      
      <section className="bg-[#F0ECE6] py-10 md:py-16 border-t border-[#3B3632]/20 text-[#3B3632]">
            <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-24">
              <ScrollAnimator>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-24 items-start">
          
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#3B3632]">
                      Dr. Maya Reynolds
                    </h3>
                    
                    <div className="space-y-1 text-base md:text-lg text-[#2E2C2A]">
                      <p>123th Street 45 W</p>
                      <p>Santa Monica, CA 90401</p>
                    </div>
      
                    <div className="flex flex-col items-start gap-3 text-base md:text-lg">
              
                      <a 
                        href="mailto:drmaya@therapypractice.com" 
                        className="flex items-center gap-3 group transition-all duration-300"
                      >
                        <Mail size={18} className="text-[#3B3632]  transition-colors duration-300" />
                        <span className="text-[#3B3632] border-b border-[#3B3632]  transition-all duration-300 pb-0.5">
                          drmaya@therapypractice.com
                        </span>
                      </a>
      
                      <a 
                        href="tel:+13105551234" 
                        className="flex items-center gap-3 group transition-all duration-300"
                      >
                        <Phone size={18} className="text-[#3B3632]  transition-colors duration-300" />
                        <span className="text-[#3B3632] border-b border-[#3B3632]  transition-all duration-300 pb-0.5">
                          (310) 555-1234
                        </span>
                      </a>
                    </div>
                  </div>
      
                  <div className="md:justify-self-center space-y-6">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#3B3632]">
                      Hours
                    </h3>
                    <div className="space-y-1 text-base md:text-lg text-[#2E2C2A]">
                      <p>Monday – Friday</p>
                      <p>10am – 6pm</p>
                    </div>
                  </div>
      
            
                  <div className="md:justify-self-end space-y-6 text-left md:text-right">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#3B3632]">
                      Find
                    </h3>
                    <nav className="flex flex-col gap-2 md:items-end">
                      <a 
                        href="/" 
                        className="text-base md:text-lg text-[#3B3632] border-b border-[#3B3632]  transition-all duration-300 pb-0.5 w-fit"
                      >
                        Home
                      </a>
                      <a 
                        href="/contact" 
                        className="text-base md:text-lg text-[#3B3632] border-b border-[#3B3632]  transition-all duration-300 pb-0.5 w-fit"
                      >
                        Contact
                      </a>
                      <a 
                        href="/blog" 
                        className="text-base md:text-lg text-[#3B3632] border-b border-[#3B3632]  transition-all duration-300 pb-0.5 w-fit"
                      >
                        Blog
                      </a>
                    </nav>
                  </div>
      
                </div>
              </ScrollAnimator>
            </div>
          </section>

      <div className="bg-[#E6E2DC] py-12 px-6 border-t border-[#3B3632]/0 text-[#3B3632]">
        <ScrollAnimator>
          <div className="max-w-[90rem] mx-auto flex flex-col items-center text-center">
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium mb-3">
          <a href="#" className=" transition-all duration-300">
            Privacy Policy
          </a>
          <a href="#" className=" transition-all duration-300">
            Good Faith Estimate
          </a>
          <a href="#" className=" transition-all duration-300">
            Disclaimer
          </a>
        </div>

   
        <div className="text-sm text-[#3B3632]/80 mb-3 leading-snug">
          <p>Licensed Clinical Psychologist in California</p>
          <p>Santa Monica, CA • In-Person & Secure Telehealth Across California</p>
        </div>

       
        <div className="text-xs text-[#3B3632]/60">
          <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All Rights Reserved.</p>
        </div>

      </div>
        </ScrollAnimator>
      </div>
    </footer>
  )
}