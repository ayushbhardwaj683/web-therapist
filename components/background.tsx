'use client'

import { useState } from 'react'
import ScrollAnimator from './scroll-animator'

export default function Background() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const sections = [
    {
      title: "Education",
      content: "I hold a Doctorate in Clinical Psychology (PsyD) and received advanced training in evidence-based approaches for anxiety, trauma, and stress-related conditions. My education emphasized both practical clinical skills and depth-oriented therapeutic work, allowing me to support clients with structure while leaving room for reflection and insight."
    },
    {
      title: "Licensure",
      content: "I am a Licensed Clinical Psychologist in the state of California, practicing in Santa Monica and via telehealth across the state. My work adheres to California licensure standards and ethical guidelines, with a strong emphasis on client safety, confidentiality, and collaborative care."
    },
    {
      title: "Clinical Approach & Specialization",
      content: "My practice focuses on anxiety, panic, trauma, burnout, and high internal pressure. I integrate cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. My approach is warm, structured, and paced carefully—especially in trauma work—prioritizing safety, nervous system regulation, and sustainable long-term change."
    }
  ]

  return (
   
    <section className="bg-[#dcd8d0] py-12 md:py-20 px-6 md:px-12 text-[#3B3632]">
      <div className="max-w-5xl mx-auto"> 
        
        <ScrollAnimator>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-[#3B3632] mb-12 md:mb-16">
            My Professional Background
          </h2>
        </ScrollAnimator>

        <ScrollAnimator delay={100}>
          <div className="border-t border-[#3B3632]/20 max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <div key={index} className="border-b border-[#3B3632]/20">
                <button
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left group transition-all duration-300 cursor-pointer"
                >
                 
                  <span className="text-xl md:text-2xl font-serif text-[#3B3632] group-hover:text-[#9C5F4B] transition-colors duration-300">
                    {section.title}
                  </span>
                  
                  
                  <div className="relative w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
               
                    <span className="absolute w-full h-[2px] bg-[#3B3632] group-hover:bg-[#9C5F4B] transition-colors duration-300"></span>
                    
                   
                    <span 
                      className={`absolute w-full h-[2px] bg-[#3B3632] group-hover:bg-[#9C5F4B] transition-transform duration-300 ease-in-out transform ${
                        expanded === index ? 'rotate-0' : 'rotate-90'
                      }`}
                    ></span>
                  </div>
                </button>

               
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expanded === index ? 'max-h-96 opacity-100 pb-6 md:pb-8' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-base md:text-lg text-[#2E2C2A] leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimator>

      </div>
    </section>
  )
}