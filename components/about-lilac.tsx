



'use client'

import ScrollAnimator from './scroll-animator'

export default function AboutLilac() {
  return (
    <section className="bg-[#F0ECE6] py-20 md:py-32 relative overflow-hidden">
  
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E6E2DC] opacity-30 -skew-x-12 z-0 hidden md:block" />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
 
          <ScrollAnimator>
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#3B3632] mb-10 leading-tight">
                Hi, I'm <span className="italic text-[#9C5F4B]">Dr. Maya.</span>
              </h2>

              <p className="text-lg md:text-xl text-[#2E2C2A] leading-relaxed mb-8 font-medium">
                I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors.
              </p>
              
              <p className="text-lg md:text-xl text-[#2E2C2A] leading-relaxed mb-12">
                 With empathy and guidance, we'll work together to navigate the challenges life throws your way, helping you find clarity and resilience.
              </p>

              <a 
                href="#contact"
                className="inline-block border border-[#3B3632] text-[#3B3632] hover:bg-[#3B3632] hover:text-[#F0ECE6] py-4 px-10 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300"
              >
                Let's Chat →
              </a>
            </div>
          </ScrollAnimator>


          <ScrollAnimator delay={100} className="w-full flex justify-center md:justify-end">
            
            <div className="relative w-full md:max-w-md h-[500px] md:h-[700px] rounded-t-[10rem] md:rounded-t-full rounded-b-none overflow-hidden border-b-0 border border-[#3B3632]/10 shadow-xl md:translate-x-6">

              <div className="absolute inset-0 bg-[#3B3632]/5 mix-blend-multiply z-10 pointer-events-none"></div>
              

              <img
                src="/Dr. Maya Reynolds.png"
                alt="Portrait of Dr. Maya Reynolds"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </ScrollAnimator>

        </div>
      </div>
    </section>
  )
}