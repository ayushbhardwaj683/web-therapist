


'use client'

import ScrollAnimator from './scroll-animator'

export default function NotAlone() {
  return (
    <section className="bg-[#F0ECE6] text-[#3B3632]">
      <div className="flex flex-col md:grid md:grid-cols-2">
<div className="relative w-full h-[260px] sm:h-[320px] md:h-auto md:min-h-screen">
        <ScrollAnimator >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-[#3B3632]/5 mix-blend-multiply z-10"></div>
            <img
              src="/alone.jpg"
              alt="Artistic blur of a person feeling overwhelmed"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollAnimator>
</div>

        <div className="bg-[#dcd8d0] flex flex-col justify-between md:min-h-screen">

          <div className="flex-grow flex flex-col justify-center p-10 sm:p-12 md:p-24">
            <div className="max-w-xl mx-auto w-full">

              <ScrollAnimator delay={100}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#3B3632] mb-8 md:mb-10 leading-tight">
                  You don’t have to carry this all <span className="italic font-serif">alone</span>.
                </h2>

                <p className="text-base sm:text-lg text-[#2E2C2A] mb-6 md:mb-8 font-medium">
                  You might recognize yourself in some of these experiences:
                </p>

                <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10">
                  <li className="text-[#2E2C2A] flex items-start gap-4 text-base sm:text-lg">
                    <span className="text-[#9C5F4B] font-bold text-xl mt-[-2px]">•</span>
                    <span>Constant overthinking or feeling mentally “on edge”</span>
                  </li>
                  <li className="text-[#2E2C2A] flex items-start gap-4 text-base sm:text-lg">
                    <span className="text-[#9C5F4B] font-bold text-xl mt-[-2px]">•</span>
                    <span>Tension in your body, difficulty sleeping, or chronic stress</span>
                  </li>
                  <li className="text-[#2E2C2A] flex items-start gap-4 text-base sm:text-lg">
                    <span className="text-[#9C5F4B] font-bold text-xl mt-[-2px]">•</span>
                    <span>Feeling “functional” on the outside but exhausted underneath</span>
                  </li>
                  <li className="text-[#2E2C2A] flex items-start gap-4 text-base sm:text-lg">
                    <span className="text-[#9C5F4B] font-bold text-xl mt-[-2px]">•</span>
                    <span>Burnout, perfectionism, or relentless internal pressure</span>
                  </li>
                  <li className="text-[#2E2C2A] flex items-start gap-4 text-base sm:text-lg">
                    <span className="text-[#9C5F4B] font-bold text-xl mt-[-2px]">•</span>
                    <span>Lingering effects of past experiences impacting your confidence or relationships</span>
                  </li>
                </ul>

                <p className="text-base sm:text-lg text-[#2E2C2A] leading-relaxed">
                  Therapy can be a space to slow down, feel more regulated, and begin understanding both the emotional and physiological patterns keeping you stuck. Together, we’ll work toward lasting change that feels sustainable—not overwhelming.
                </p>
              </ScrollAnimator>
            </div>
          </div>

          <ScrollAnimator delay={200}>
            <a
              href="#contact"
              className="block w-full border-t border-[#3B3632]/30 text-[#3B3632] hover:bg-[#3B3632] hover:text-[#F0ECE6] hover:border-[#3B3632] py-6 md:py-8 px-10 md:px-24 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center md:justify-start gap-3 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase max-w-xl mx-auto w-full">
                Work With Me
                <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
              </div>
            </a>
          </ScrollAnimator>

        </div>
      </div>
    </section>
  )
}



