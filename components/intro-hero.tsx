
'use client'

import ScrollAnimator from './scroll-animator'

export default function IntroHero() {
  return (
    <section
      className="bg-[#F0ECE6] pb-24 lg:pb-0"
      style={{ paddingTop: '90px' }}
    >
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">

        <div className="flex flex-col items-center lg:flex-row lg:items-center gap-16 lg:gap-32">


          <ScrollAnimator>
            <div
              className="
                relative 
                rounded-t-full 
                overflow-hidden 
                flex-shrink-0
                w-[70vw] 
                max-w-[420px]
                sm:w-[55vw]
                lg:w-[32vw] 
                lg:max-w-[520px]
                aspect-[2/3]
                mx-auto
                lg:ml-[-40px]
              "
            >
              <img
                src="/landing.jpg"
                alt="Calm coastal still life with shells"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollAnimator>

          <ScrollAnimator delay={100}>
            <div className="w-full max-w-xl text-center lg:text-left mx-auto lg:mx-0 lg:ml-20">

              <h1 className="
                text-4xl 
                sm:text-5xl 
                md:text-6xl 
                lg:text-7xl 
                font-serif 
                leading-[1.05] 
                text-[#3B3632] 
                mb-10
              ">
                A grounded space<br />
                to begin again
              </h1>

              <div className="flex flex-col items-center lg:items-start max-w-md mx-auto lg:mx-0">

                <p className="text-base sm:text-lg text-[#2E2C2A] mb-8 leading-relaxed text-center lg:text-left">
                  Therapy for adults in Santa Monica, CA — supporting anxiety, trauma, and burnout with warmth, depth, and practical tools.
                </p>

                <button
                  className="
                    border 
                    border-[#3B3632] 
                    text-[#3B3632] 
                    px-8 sm:px-10 
                    py-3 sm:py-4 
                    tracking-wide 
                    hover:bg-[#3B3632] 
                    hover:text-white 
                    transition duration-300
                  "
                >
                  CONNECT WITH ME →
                </button>

              </div>

            </div>
          </ScrollAnimator>

        </div>
      </div>
    </section>
  )
}
