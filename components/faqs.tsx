'use client'

import { useState } from 'react'
import ScrollAnimator from './scroll-animator'

export default function Faqs() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "I am an out-of-network provider. I can provide a superbill if you'd like to seek reimbursement through your insurance plan."
    },
    {
      question: "What can I expect in the first session?",
      answer: "Our first session focuses on understanding your concerns, goals, and history. We’ll discuss how we can work together in a way that feels supportive and structured."
    },
    {
      question: "Do you offer both in-person and virtual sessions?",
      answer: "Yes. I offer in-person therapy in Santa Monica and secure telehealth sessions for clients located in California."
    },
    {
      question: "Do you specialize in trauma and anxiety?",
      answer: "Yes. I work with adults experiencing anxiety, panic, trauma, burnout, and high internal pressure, using evidence-based approaches."
    },
    {
      question: "How do I know if we’re a good fit?",
      answer: "We can schedule an initial consultation to explore your needs and see if my approach aligns with what you're looking for."
    }
  ]

  return (
    <section className="bg-[#F0ECE6] py-24 md:py-32 px-6 md:px-12 lg:px-24 text-[#3B3632]">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left - Arch Image */}
          <ScrollAnimator className="order-2 md:order-1 w-full flex justify-center md:justify-start">
            <div className="relative w-full md:max-w-md h-[500px] md:h-[650px] rounded-t-[12rem] md:rounded-t-full rounded-b-none overflow-hidden shadow-lg border border-[#3B3632]/10">
              
              <div className="absolute inset-0 bg-[#3B3632]/5 mix-blend-multiply z-10 pointer-events-none"></div>
              
              <img 
                src="/FAQ.jpg" 
                alt="Vase with flowers in calm light" 
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollAnimator>

          {/* Right - FAQs Content */}
          <div className="order-1 md:order-2 flex flex-col h-full">
            <ScrollAnimator delay={100}>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#3B3632] mb-12 md:mb-16">
                FAQs
              </h2>

              <div className="border-t border-[#3B3632]/20">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-[#3B3632]/20">
                    <button
                      onClick={() => setExpanded(expanded === index ? null : index)}
                      className="w-full flex items-center justify-start gap-6 py-8 text-left group transition-all duration-300"
                    >
            
                      <div className="relative w-5 h-5 flex items-center justify-center">
                        
                        <span className="absolute w-5 h-[1.5px] bg-[#9C5F4B]"></span>
                        <span
                          className={`absolute w-5 h-[1.5px] bg-[#9C5F4B] transition-transform duration-300 ease-in-out ${
                            expanded === index ? 'rotate-0' : 'rotate-90'
                          }`}
                        ></span>

                      </div>

                      <span className="text-xl md:text-2xl font-serif text-[#3B3632] group-hover:text-[#9C5F4B] transition-colors duration-300">
                        {faq.question}
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        expanded === index ? 'max-h-40 opacity-100 pb-8' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-lg text-[#2E2C2A] leading-relaxed pl-10 md:pl-12 pr-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimator>
          </div>

        </div>
      </div>
    </section>
  )
}
