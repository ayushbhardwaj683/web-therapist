


'use client'

import ScrollAnimator from '../scroll-animator'

export default function LetsConnect() {
  return (
    <section className="bg-[#F0ECE6] pt-0 pb-24 md:pb-32 text-[#3B3632]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-24">
        
        
        <div className="pt-16 md:pt-20">

          <ScrollAnimator>  
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-10 text-left">
              Let's Connect
            </h2>
          </ScrollAnimator>

          <div className="flex flex-col gap-16">

            <ScrollAnimator className="w-full">
              <div className="space-y-8 max-w-5xl">

               
                <p className="text-xl md:text-2xl text-[#3B3632]">
                  Starting therapy is a meaningful step.
                </p>

                
                <p className="text-2xl md:text-3xl leading-relaxed font-light text-[#3B3632]">
                  If you have questions or would like to schedule a consultation, 
                  you’re welcome to reach out to begin a conversation about what 
                  support could look like for you.
                </p>

         
                <div className="relative w-[211px] h-[317px] rounded-t-[10rem] rounded-b-none overflow-hidden border border-[#3B3632]/10 shadow-xl mt-12">
                  
                  <div className="absolute inset-0 bg-[#3B3632]/5 mix-blend-multiply z-10 pointer-events-none"></div>
                  
                  <img
                    src="/Dr. Maya Reynolds.png"
                    alt="Portrait of Dr. Maya Reynolds"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

              </div>
            </ScrollAnimator>

          </div>
        </div>
      </div>
    </section>
  )
}
