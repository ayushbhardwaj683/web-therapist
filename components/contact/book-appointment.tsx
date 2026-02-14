


'use client'

import ScrollAnimator from '../scroll-animator'

export default function BookAppointment() {
  return (
    <section className="bg-[#dcd8d0] py-24 md:py-32 text-[#3B3632]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">

        <ScrollAnimator>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">
            Book an Appointment
          </h2>

          <p className="text-lg md:text-xl leading-relaxed mb-10 font-light">
            Beginning therapy is a meaningful step. I offer in-person sessions in Santa Monica 
            as well as secure telehealth appointments across California. Whether you're 
            navigating anxiety, burnout, trauma, or ongoing stress, we can start with a 
            15-minute consultation to explore whether working together feels like the right fit.
          </p>

          
          <button className="border border-[#3B3632] text-[#3B3632] px-10 py-4 tracking-wide transition-all duration-300 hover:bg-[#3B3632] hover:text-white">
            SCHEDULE A CONSULTATION
          </button>
        </ScrollAnimator>

      </div>
    </section>
  )
}

