
'use client'

import Header from '@/components/header'
import ScrollAnimator from '@/components/scroll-animator'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Subscribe from '@/components/subscribe'

const blogPosts = [
  {
    id: 1,
    title: 'When Anxiety Feels Constant: Understanding High-Functioning Worry',
    date: '20/11/2025',
    image: '/anxiety.jpg',
  },
  {
    id: 2,
    title: 'Panic, Overthinking, and the Nervous System: What\'s Really Happening?',
    date: '11/12/2025',
    image: '/anxiety_2.jpg',
  },
  {
    id: 3,
    title: 'Healing from Trauma: Safety, Stabilization, and Sustainable Change',
    date: '14/01/2026',
    image: '/trauma.jpg',
  },
  {
    id: 4,
    title: 'Burnout Isn\'t Weakness: Reclaiming Balance in a High-Pressure Life',
    date: '10/02/2026',
    image: '/burnout_blog.jpg',
  },
]

export default function BlogPage() {
  return (
    <main className="bg-[#F0ECE6] pt-24 min-h-screen">
      <Header />

     
<section className="w-full bg-[#F0ECE6] py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-24">


      <ScrollAnimator className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <div className="relative w-[280px] sm:w-[340px] lg:w-[391px] 
                        aspect-[2/3] 
                        rounded-t-[10rem] lg:rounded-t-[12rem] 
                        overflow-hidden border border-[#3B3632]/10 shadow-xl">

          <div className="absolute inset-0 bg-[#3B3632]/5 mix-blend-multiply z-10 pointer-events-none" />

          <img
            src="/landing_blog.jpg"
            alt="Therapy office setting"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </ScrollAnimator>


      <ScrollAnimator className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-[#3B3632] mb-8 leading-tight">
          Dr. Maya's Blog
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-[#2E2C2A] font-light leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
          Thoughtful reflections on anxiety, panic, trauma recovery,
          and professional burnout. A space for grounded clinical insight,
          nervous system education, and practical tools for sustainable change.
        </p>

        <p className="text-lg lg:text-xl font-serif font-semibold text-[#3B3632]">
          Supporting deeper understanding and emotional resilience.
        </p>
      </ScrollAnimator>

    </div>
  </div>
</section>


      <section className="w-full bg-[#dcd8d0] py-16 md:py-24 border-t border-[#3B3632]/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {blogPosts.map((post, index) => (
              <ScrollAnimator key={post.id} delay={index * 100}>
                <div className="group cursor-pointer">
                  <div className="mb-8 overflow-hidden rounded-sm border border-[#3B3632]/10 relative">
                    <div className="w-full h-80 md:h-96 relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  <div className="text-sm font-medium text-[#9C5F4B] mb-3 uppercase tracking-widest">
                    {post.date}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3B3632] mb-6  transition-colors duration-300">
                    {post.title}
                  </h2>

                  <Link
                    href={`/blog/${post.id}`}
                    className="text-[#3B3632] border-b border-[#3B3632] pb-0.5 font-semibold transition-all duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

          <Subscribe />

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
          </main>
  )
}