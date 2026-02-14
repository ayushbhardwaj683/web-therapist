
'use client'

import ScrollAnimator from './scroll-animator'

export default function OurOffice() {
  return (
    <section className="bg-[#F0ECE6] py-24 md:py-32 px-6 md:px-12 lg:px-24 text-[#3B3632]">
      <div className="max-w-[90rem] mx-auto">
       
        <ScrollAnimator>
          <div className="mb-20 md:mb-28">
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 leading-tight">
              A Calm Space for Healing.
            </h2>
            <p className="text-lg md:text-xl text-[#2E2C2A] leading-relaxed max-w-3xl font-medium">
              My Santa Monica office is designed as a quiet, private sanctuary where healing can happen. The space is thoughtfully arranged with natural light, comfortable seating, and an uncluttered environment—allowing you to feel at ease from the moment you arrive.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24">
          
          {/* Card 1 */}
          <ScrollAnimator delay={0} className="h-full">
            <div className="flex flex-col h-full">
              <div className="w-full h-64 md:h-80 mb-8 bg-[#E6E2DC] overflow-hidden">
                <img 
                  src="office1.jpeg" 
                  alt="Therapy office interior" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">
                Private & Peaceful
              </h3>
              <p className="text-base text-[#2E2C2A] leading-relaxed">
                A serene environment designed to feel grounding and safe. Privacy and comfort are at the heart of this space.
              </p>
            </div>
          </ScrollAnimator>

          {/* Card 2 */}
          <ScrollAnimator delay={100} className="h-full">
            <div className="flex flex-col h-full">
              
              <div className="w-full h-64 md:h-80 mb-8 bg-[#E6E2DC] overflow-hidden">
                <img 
                  src="office2.jpeg" 
                  alt="Natural light in office" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">
                Natural Light & Calm
              </h3>
              <p className="text-base text-[#2E2C2A] leading-relaxed">
                Abundant natural light and minimal distractions create an atmosphere where you can feel present and supported.
              </p>
            </div>
          </ScrollAnimator>

          {/* Card 3 */}
          <ScrollAnimator delay={200} className="h-full">
            <div className="flex flex-col h-full"> 
              <div className="w-full h-64 md:h-80 mb-8 bg-[#E6E2DC] overflow-hidden">
                <img 
                  src="office3.jpg" 
                  alt="Comfortable seating area" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">
                Comfortable & Welcoming
              </h3>
              <p className="text-base text-[#2E2C2A] leading-relaxed">
                Thoughtfully designed for your comfort, the office is a space where vulnerability feels safe and healing begins.
              </p>
            </div>
          </ScrollAnimator>
        </div>

       
        <ScrollAnimator>
          <div className="border-t border-[#3B3632]/20 pt-16 md:pt-20">
            <div className="max-w-4xl">
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#3B3632]">
                Session Options
              </h3>
              <p className="text-lg md:text-xl text-[#2E2C2A] leading-relaxed">
                I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California. Whether you prefer face-to-face connection or the convenience of virtual sessions, a calm and private therapeutic environment is maintained.
              </p>
            </div>
          </div>
        </ScrollAnimator>

      </div>
    </section>
  )
}