

'use client'

import ScrollAnimator from './scroll-animator'

const specialties = [
  {
    title: "Anxiety & High Internal Pressure",
    description: "You may appear composed and capable, yet internally feel stuck in overthinking, tension, or constant self-criticism. Together, we'll work to understand the emotional and physiological patterns driving anxiety and help you feel more regulated and grounded in daily life.",
    image: "/self_esteem.jpg",
    alt: "Person standing alone near a window in a quiet room"
  },
  {
    title: "Trauma & Emotional Safety",
    description: "Past experiences—whether a single event or long-standing relational patterns—can quietly shape how safe you feel in the world. I offer carefully paced trauma work that prioritizes stabilization, safety, and helping you reconnect with a stronger sense of self.",
    image: "/relationship.jpg",
    alt: "Person with hands raised against glass, symbolizing emotional barriers"
  },
  {
    title: "Burnout & Chronic Stress",
    description: "Many high-achieving professionals and creatives feel exhausted from years of pushing through stress. Therapy can become a space to slow down, rebuild resilience, and develop more sustainable ways of living and working without sacrificing your well-being.",
    image: "/burnout.jpg",
    alt: "Silhouette of a person sitting alone in a dim hallway"
  }
]

export default function Specialties() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#F0ECE6] text-[#3B3632] relative z-10">
      <ScrollAnimator>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-center mb-16">
          My Specialties
        </h2>
      </ScrollAnimator>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[90rem] mx-auto md:items-stretch">
        {specialties.map((item, index) => (
          <div key={index} className="flex">
            <ScrollAnimator delay={index * 100}>
              <div className="flex flex-col h-full p-8 border border-[#3B3632]/20 bg-[#dcd8d0] hover:bg-[#E8E4DE] transition-colors duration-300">
                
                <div className="flex-grow">
                  <h3 className="text-3xl font-serif font-bold mb-6 text-[#3B3632]">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#2E2C2A] leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                <div className="w-full flex justify-center mt-8">
                  <div className="w-72 h-72 md:w-80 md:h-80 relative rounded-full overflow-hidden border-2 border-[#E8E4DE] shadow-sm flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
              </div>
            </ScrollAnimator>
          </div>
        ))}
      </div>
    </section>
  )
}
