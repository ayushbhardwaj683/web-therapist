



'use client'

import ScrollAnimator from './scroll-animator'

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:grid md:grid-cols-2 min-h-screen bg-[#F0ECE6]">
 
      
      <div className="flex flex-col justify-between bg-[#dcd8d0] relative">
        
        <ScrollAnimator>
          <div className="px-8 md:px-20 py-20 flex flex-col justify-center h-full">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#3B3632] mb-8 md:mb-12">
              Find steadiness, even when life feels overwhelming.
            </h1>
            
            <p className="text-lg text-[#2E2C2A] mb-6 leading-relaxed max-w-md">
              You may be high-achieving and capable on the outside—yet privately carrying anxiety, burnout, or the weight of past experiences that still shape how you move through the world.
            </p>
            
            <p className="text-lg text-[#2E2C2A] leading-relaxed max-w-md">
              Therapy can be a grounded space to slow down, reconnect with yourself, and build resilience in a way that feels steady, intentional, and sustainable.
            </p>
          </div>
        </ScrollAnimator>

        <ScrollAnimator delay={200}>
          <a 
            href="#contact" 
            className="block w-full border-t border-[#3B3632] text-[#3B3632] hover:bg-[#3B3632] hover:text-[#F0ECE6] py-6 md:py-8 px-8 md:px-20 transition-all duration-300 group"
          >
            <div className="flex items-center justify-center gap-3 text-sm font-bold tracking-[0.2em] uppercase">
              Get In Touch 
              <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
            </div>
          </a>
        </ScrollAnimator>
      </div>

      <ScrollAnimator delay={100} className="h-full w-full">
        <div className="relative w-full h-[400px] md:h-full bg-[#E6E2DC]">
          <img 
            src="/fulfilling.jpg" 
            alt="A surfer walking into the ocean at sunset"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </ScrollAnimator>
    </section>
  )
}






