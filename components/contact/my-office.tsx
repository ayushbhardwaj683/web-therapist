

'use client'

import ScrollAnimator from '../scroll-animator'

export default function MyOffice() {
  return (
    <section className="bg-[#3B3632] text-[#F0ECE6] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

   
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">


          <ScrollAnimator>
            <div className="space-y-12 text-left">

              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#F0ECE6]">
                  My Office
                </h2>
                <div className="space-y-1 text-lg md:text-xl text-[#F0ECE6]/90 leading-relaxed">
                  <p>123th Street 45 W</p>
                  <p>Santa Monica, CA 90401</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#F0ECE6]">
                  Hours
                </h2>
                <div className="space-y-1 text-lg md:text-xl text-[#F0ECE6]/90 leading-relaxed">
                  <p>Monday – Friday</p>
                  <p>10am – 6pm</p>
                </div>
              </div>

            </div>
          </ScrollAnimator>

          <div className="w-full">
          <ScrollAnimator delay={100} >
            <div className="relative w-full h-[300px] md:h-[400px] bg-[#2E2C2A] rounded-sm overflow-hidden border border-[#F0ECE6]/10 shadow-2xl">
              <img
                src="/map.png"
                alt="Office location map"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollAnimator></div>

        </div>

      </div>
    </section>
  )
}



