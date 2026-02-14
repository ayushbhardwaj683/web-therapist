'use client'

import ScrollAnimator from './scroll-animator'

export default function Collaboration() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        {/* Left - Content */}
        <ScrollAnimator>
          <div className="px-0 md:px-12 py-20">
            <h2 className="text-6xl font-serif font-bold text-neutral-900 mb-8">
              Hi, I'm Lilac.
            </h2>

            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.
            </p>

            <button className="btn-lilac">
              LET'S CHAT →
            </button>
          </div>
        </ScrollAnimator>

        {/* Right - Square Image Placeholder */}
        <ScrollAnimator delay={100}>
          <div className="relative h-96 flex items-center justify-center p-8">
            <div className="relative z-10 w-full max-w-md h-96 bg-neutral-300 overflow-hidden flex items-center justify-center text-neutral-500 font-medium rounded-lg">
              {/* 
                ADD IMAGE HERE:
                Replace the placeholder with your image:
                <img 
                  src="/images/collaboration-image.jpg" 
                  alt="Hi, I'm Lilac" 
                  className="w-full h-full object-cover rounded-lg"
                />
              */}
              Image Placeholder
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  )
}
