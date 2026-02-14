

'use client'

import ScrollAnimator from './scroll-animator'

export default function NotAlone() {
  return (
    <section className="bg-[#F0ECE6] text-[#3B3632]">
      <div className="grid grid-cols-1 md:grid-cols-2">


        <ScrollAnimator className="relative h-[320px] md:h-auto w-full">
          
          <div className="absolute inset-0 bg-[#3B3632]/5 mix-blend-multiply z-10" />

          <img
            src="/alone.jpg"
            alt="Artistic blur of a person feeling overwhelmed"
            className="absolute inset-0 w-full h-full object-cover"
          />

        </ScrollAnimator>

        <div className="bg-[#dcd8d0] flex flex-col justify-between">

          <ScrollAnimator
            delay={100}
            className="flex-grow flex flex-col justify-center"
          >
          
            <div className="px-8 py-12 md:pl-[3.75rem] md:pr-8 md:py-20 w-full max-w-xl mx-auto md:mx-0">

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                You don't have to carry this all{' '}
                <span className="italic">alone</span>.
              </h2>

              <p className="text-base sm:text-lg text-[#2E2C2A] mb-8 font-medium">
                You might recognize yourself in some of these experiences:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-base sm:text-lg text-[#2E2C2A]">
                  <span className="text-[#9C5F4B] font-bold text-xl mt-[-4px]">•</span>
                  <span>Constant overthinking or feeling mentally "on edge"</span>
                </li>
                <li className="flex items-start gap-3 text-base sm:text-lg text-[#2E2C2A]">
                  <span className="text-[#9C5F4B] font-bold text-xl mt-[-4px]">•</span>
                  <span>Tension in your body, difficulty sleeping, or chronic stress</span>
                </li>
                <li className="flex items-start gap-3 text-base sm:text-lg text-[#2E2C2A]">
                  <span className="text-[#9C5F4B] font-bold text-xl mt-[-4px]">•</span>
                  <span>Feeling "functional" on the outside but exhausted underneath</span>
                </li>
                <li className="flex items-start gap-3 text-base sm:text-lg text-[#2E2C2A]">
                  <span className="text-[#9C5F4B] font-bold text-xl mt-[-4px]">•</span>
                  <span>Burnout, perfectionism, or relentless internal pressure</span>
                </li>
                <li className="flex items-start gap-3 text-base sm:text-lg text-[#2E2C2A]">
                  <span className="text-[#9C5F4B] font-bold text-xl mt-[-4px]">•</span>
                  <span>
                    Lingering effects of past experiences impacting your confidence or relationships
                  </span>
                </li>
              </ul>

              <p className="text-base sm:text-lg text-[#2E2C2A] leading-relaxed">
                Therapy can be a space to slow down, feel more regulated, and begin
                understanding both the emotional and physiological patterns
                keeping you stuck. Together, we'll work toward lasting change
                that feels sustainable—not overwhelming.
              </p>

            </div>
          </ScrollAnimator>

          
          <ScrollAnimator delay={200}>
            
            <a
              href="#contact"
              className="block w-full border-t border-[#3B3632]/30 text-[#3B3632] hover:bg-[#3B3632] hover:text-[#F0ECE6] hover:border-[#3B3632] py-6 px-8 md:pl-[3.75rem] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase w-full">
                Work With Me
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </a>
          </ScrollAnimator>

        </div>
      </div>
    </section>
  )
}