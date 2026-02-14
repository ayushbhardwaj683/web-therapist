

'use client'

import Header from '@/components/header'
import ScrollAnimator from '@/components/scroll-animator'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { useParams } from 'next/navigation'

const blogPostsData = {
  1: {
    title: 'When Anxiety Feels Constant: Understanding High-Functioning Worry',
    date: '20 Nov,2025',
    content: `Many people I work with describe themselves as "functioning" — successful at work, dependable in relationships, outwardly calm. Yet internally, anxiety rarely switches off. Their minds are always scanning for what might go wrong next.

High-functioning anxiety often hides beneath achievement and responsibility. It can look like over-preparing, overthinking conversations long after they end, or feeling unable to truly relax. The nervous system remains on alert, even in safe moments.

Anxiety is not a personal flaw or weakness. It is a protective response that has become overactive. In therapy, we begin by understanding how this pattern developed and what it has been trying to protect. From there, we work toward helping the body feel safer and the mind feel less burdened.

Relief doesn't come from eliminating anxiety entirely. It comes from building a different relationship with it — one grounded in awareness, regulation, and self-compassion.`
  },
  2: {
    title: 'Panic, Overthinking, and the Nervous System: What\'s Really Happening?',
    date: '11 Dec,25',
    content: `Panic can feel sudden and overwhelming — a racing heart, tight chest, dizziness, or a sense that something terrible is about to happen. But beneath those intense sensations is a nervous system doing exactly what it was designed to do: protect you.

When the brain perceives threat, even if the threat is emotional or internal, it activates the fight-or-flight response. For some, this response becomes hypersensitive. Overthinking can follow as the mind tries to make sense of what the body is experiencing.

Understanding the biology of panic can reduce the fear surrounding it. These symptoms, while deeply uncomfortable, are not dangerous. They are temporary waves of activation that will rise and fall.

Therapy often involves helping clients learn how to regulate their nervous systems through breath, grounding, and body awareness. Over time, the body learns that it no longer needs to stay on high alert — and panic begins to lose its intensity.`
  },
  3: {
    title: 'Healing from Trauma: Safety, Stabilization, and Sustainable Change',
    date: '14 Jan,2026',
    content: `Trauma is not defined only by what happened, but by how the experience was processed in the body and nervous system. Even when an event is over, the body may continue to react as though it is still unfolding.

Healing from trauma begins with safety. Before revisiting painful memories, it is essential to build stabilization — tools that help regulate emotion, manage distress, and strengthen a sense of control. This foundation creates the conditions for deeper work.

Approaches such as EMDR, cognitive processing, and body-based techniques can help integrate traumatic memories so they feel less intrusive and less overwhelming. The goal is not to erase the past, but to reduce its hold on the present.

Trauma healing is rarely linear. It unfolds gradually, with care and pacing. With the right support, it is possible to move from survival toward a more grounded, connected way of living.`
  },
  4: {
    title: 'Burnout Isn\'t Weakness: Reclaiming Balance in a High-Pressure Life',
    date: '10 Feb,2026',
    content: `Burnout often affects capable, driven individuals who are used to pushing through stress. Over time, constant pressure without adequate rest can lead to emotional exhaustion, irritability, difficulty concentrating, and a sense of detachment.

Burnout is not a sign of laziness or lack of resilience. It is a signal from the body and mind that the current pace is unsustainable. Many high-achieving professionals struggle to recognize this until their energy feels depleted.

Recovery begins with honest reflection. What expectations are driving the pressure? Where has rest been postponed? Therapy can provide a space to explore boundaries, perfectionism, and internal standards that may be contributing to chronic stress.

Reclaiming balance does not mean abandoning ambition. It means creating a rhythm of work and restoration that allows you to remain engaged without sacrificing your well-being. Sustainable success requires both effort and care.`
  },
}

export default function BlogPostPage() {
  const params = useParams()
  const id = params.id as string
  const post = blogPostsData[id as '1' | '2' | '3' | '4']
  const postId = parseInt(id)
  const prevId = postId > 1 ? postId - 1 : 4
  const nextId = postId < 4 ? postId + 1 : 1

  if (!post) {
    return (
      <main className="bg-[#dcd8d0] pt-24 min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto px-8 py-24 text-center">
          <h1 className="text-4xl font-serif font-bold text-[#3B3632]">Post not found</h1>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-[#dcd8d0] min-h-screen">
      <Header />
      <div className="pt-24 md:pt-28" />

      <section className="bg-[#dcd8d0] py-12 md:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12">
          <ScrollAnimator>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-xs sm:text-sm font-medium text-[#9C5F4B] uppercase tracking-[0.2em] mb-4 md:mb-6">
                {post.date}
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#3B3632] mb-6 md:mb-8 leading-tight">
                {post.title}
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base md:text-lg lg:text-xl text-[#2E2C2A] leading-relaxed mb-6 md:mb-8 font-light">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollAnimator>
        </div>
      </section>

      <section className="bg-[#dcd8d0] py-16 md:py-20 px-6 border-t border-[#3B3632]/0">
        <div className="max-w-[90rem] mx-auto px-0 md:px-12">
          
      
          <div className="flex flex-row justify-between items-center w-full">
            
          
            <Link
              href={`/blog/${prevId}`}
              className="group flex items-center gap-2 md:gap-4 text-left w-[45%] md:w-auto"
            >
            
              <span className="text-2xl md:text-4xl font-light text-[#3B3632]  transition-transform duration-300 group-hover:-translate-x-2 shrink-0">
                &lt;
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#9C5F4B] mb-1">Previous </span>
        
                <span className="block text-sm sm:text-lg md:text-2xl lg:text-3xl font-serif font-medium text-[#3B3632]  transition-colors duration-300 leading-tight">
                  {prevId === 0 ? 'Four' : ['Blog One', 'Blog Two', 'Blog Three', 'Blog Four'][prevId - 1]}
                </span>
              </div>
            </Link>

            <Link
              href={`/blog/${nextId}`}
              className="group flex items-center gap-2 md:gap-4 text-right w-[45%] md:w-auto justify-end"
            >
              <div className="flex flex-col items-end">
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#9C5F4B] mb-1">Next </span>

                <span className="block text-sm sm:text-lg md:text-2xl lg:text-3xl font-serif font-medium text-[#3B3632] transition-colors duration-300 leading-tight">
                  {['Blog One', 'Blog Two', 'Blog Three', 'Blog Four'][nextId - 1]}
                </span>
              </div>
           
              <span className="text-2xl md:text-4xl font-light text-[#3B3632]  transition-transform duration-300 group-hover:translate-x-2 shrink-0">
                &gt;
              </span>
            </Link>

          </div>
        </div>
      </section>


      <footer className="bg-[#F0ECE6] text-[#3B3632] border-t border-[#3B3632]/70 font-sans">
            
            <section className="bg-[#F0ECE6] py-10 md:py-16 border-t border-[#3B3632]/20 text-[#3B3632]">
                  <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-24">
                    <ScrollAnimator>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-24 items-start">
                
                        <div className="space-y-6">
                          <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#3B3632]">
                            Dr. Maya Reynolds
                          </h3>
                          
                          <div className="space-y-1 text-base md:text-lg text-[#2E2C2A]">
                            <p>123th Street 45 W</p>
                            <p>Santa Monica, CA 90401</p>
                          </div>
            
                          <div className="flex flex-col items-start gap-3 text-base md:text-lg">
                    
                            <a 
                              href="mailto:drmaya@therapypractice.com" 
                              className="flex items-center gap-3 group transition-all duration-300"
                            >
                              <Mail size={18} className="text-[#3B3632]  transition-colors duration-300" />
                              <span className="text-[#3B3632] border-b border-[#3B3632]  transition-all duration-300 pb-0.5">
                                drmaya@therapypractice.com
                              </span>
                            </a>
            
                            <a 
                              href="tel:+13105551234" 
                              className="flex items-center gap-3 group transition-all duration-300"
                            >
                              <Phone size={18} className="text-[#3B3632]  transition-colors duration-300" />
                              <span className="text-[#3B3632] border-b border-[#3B3632]  transition-all duration-300 pb-0.5">
                                (310) 555-1234
                              </span>
                            </a>
                          </div>
                        </div>
            
                        <div className="md:justify-self-center space-y-6">
                          <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#3B3632]">
                            Hours
                          </h3>
                          <div className="space-y-1 text-base md:text-lg text-[#2E2C2A]">
                            <p>Monday – Friday</p>
                            <p>10am – 6pm</p>
                          </div>
                        </div>
            
                  
                        <div className="md:justify-self-end space-y-6 text-left md:text-right">
                          <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#3B3632]">
                            Find
                          </h3>
                          <nav className="flex flex-col gap-2 md:items-end">
                            <a 
                              href="/" 
                              className="text-base md:text-lg text-[#3B3632] border-b border-[#3B3632]  transition-all duration-300 pb-0.5 w-fit"
                            >
                              Home
                            </a>
                            <a 
                              href="/contact" 
                              className="text-base md:text-lg text-[#3B3632] border-b border-[#3B3632]  transition-all duration-300 pb-0.5 w-fit"
                            >
                              Contact
                            </a>
                            <a 
                              href="/blog" 
                              className="text-base md:text-lg text-[#3B3632] border-b border-[#3B3632]  transition-all duration-300 pb-0.5 w-fit"
                            >
                              Blog
                            </a>
                          </nav>
                        </div>
            
                      </div>
                    </ScrollAnimator>
                  </div>
                </section>
      
            <div className="bg-[#E6E2DC] py-12 px-6 border-t border-[#3B3632]/0 text-[#3B3632]">
              <ScrollAnimator>
                <div className="max-w-[90rem] mx-auto flex flex-col items-center text-center">
              
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium mb-3">
                <a href="#" className=" transition-all duration-300">
                  Privacy Policy
                </a>
                <a href="#" className=" transition-all duration-300">
                  Good Faith Estimate
                </a>
                <a href="#" className=" transition-all duration-300">
                  Disclaimer
                </a>
              </div>
      
         
              <div className="text-sm text-[#3B3632]/80 mb-3 leading-snug">
                <p>Licensed Clinical Psychologist in California</p>
                <p>Santa Monica, CA • In-Person & Secure Telehealth Across California</p>
              </div>
      
             
              <div className="text-xs text-[#3B3632]/60">
                <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All Rights Reserved.</p>
              </div>
      
            </div>
              </ScrollAnimator>
            </div>
          </footer>
          </main>
  )
}