


import Header from '@/components/header'
import IntroHero from '@/components/intro-hero'
import Hero from '@/components/hero'
import Specialties from '@/components/specialties'
import AboutLilac from '@/components/about-lilac'
import OurOffice from '@/components/our-office'
import Faqs from '@/components/faqs'
import NotAlone from '@/components/not-alone'
import Background from '@/components/background'
import Footer from '@/components/footer'
import ScrollAnimator from '@/components/scroll-animator'

export default function Page() {
  return (
    <main className="bg-[#F0ECE6] overflow-x-hidden">
      
      <Header />

 
      <div className="pt-20 md:pt-24 lg:pt-28" />

      <IntroHero />
      <Hero />
      <Specialties />
      <NotAlone />
      <AboutLilac />
      <OurOffice />
      <Faqs />
      <Background />

      <section
        id="get-started"
        className="w-full bg-[#3B3632] py-14 sm:py-16 md:py-20 lg:py-24 text-[#F0ECE6]"
      >
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-10 text-center">
          
          <ScrollAnimator>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Get started today.
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 font-light max-w-2xl mx-auto opacity-90">
              If anxiety, burnout, or past experiences are quietly shaping your life, therapy can offer a steady, grounded space to slow down, feel more regulated, and begin meaningful, lasting change.
            </p>
            
            <a href="#contact" className="inline-block">
              <button className="bg-transparent border border-[#F0ECE6] text-[#F0ECE6] px-6 sm:px-8 py-3 sm:py-4 font-bold tracking-[0.15em] sm:tracking-[0.2em] hover:bg-[#F0ECE6] hover:text-[#3B3632] transition-all duration-300 uppercase text-xs sm:text-sm md:text-base">
                Get In Touch →
              </button>
            </a>

          </ScrollAnimator>

        </div>
      </section>

      <Footer />
    </main>
  )
}
