


// 'use client'

// import ScrollAnimator from './scroll-animator'

// export default function Hero() {
//   return (
//     <section className="flex flex-col-reverse md:grid md:grid-cols-2 min-h-screen bg-[#F0ECE6]">
 
//       <div className="flex flex-col justify-between bg-[#dcd8d0] relative">
        
//         <div className="flex-grow flex flex-col justify-center px-8 md:px-20 py-16 md:py-24">
//           <ScrollAnimator>
//             <div className="max-w-xl">
//               <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#3B3632] mb-8 md:mb-12 leading-tight">
//                 Find steadiness, even when life feels overwhelming.
//               </h1>
              
//               <p className="text-lg text-[#2E2C2A] mb-6 leading-relaxed">
//                 You may be high-achieving and capable on the outside—yet privately carrying anxiety, burnout, or the weight of past experiences that still shape how you move through the world.
//               </p>
              
//               <p className="text-lg text-[#2E2C2A] leading-relaxed">
//                 Therapy can be a grounded space to slow down, reconnect with yourself, and build resilience in a way that feels steady, intentional, and sustainable.
//               </p>
//             </div>
//           </ScrollAnimator>
//         </div>

//         <ScrollAnimator delay={200}>
//           <a 
//             href="#contact" 
//             className="block w-full border-t border-[#3B3632] text-[#3B3632] hover:bg-[#3B3632] hover:text-[#F0ECE6] py-6 md:py-8 px-8 md:px-20 transition-all duration-300 group bg-[#dcd8d0]"
//           >
//             <div className="flex items-center justify-center gap-3 text-sm font-bold tracking-[0.2em] uppercase">
//               Get In Touch 
//               <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
//             </div>
//           </a>
//         </ScrollAnimator>
//       </div>

//       <div className="relative w-full h-[50vh] md:h-auto">
//         <ScrollAnimator className="h-full w-full">
//           <div className="relative w-full h-full bg-[#E6E2DC]">
//             <img 
//               src="/fulfilling.jpg" 
//               alt="A surfer walking into the ocean at sunset"
//               className="absolute inset-0 w-full h-full object-cover object-center"
//             />
//           </div>
//         </ScrollAnimator>
//       </div>

//     </section>
//   )
// }




'use client'

import ScrollAnimator from './scroll-animator'

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:grid md:grid-cols-2 min-h-screen bg-[#F0ECE6] overflow-x-hidden">
      
      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-between bg-[#dcd8d0] min-h-[50vh] md:min-h-screen">

        {/* Text Block */}
        {/* Adjusted padding: Reduced horizontal padding on MD screens to give text more room */}
        <div className="flex-grow flex items-center px-6 sm:px-10 md:px-8 lg:px-20 py-14 sm:py-16 md:py-20">
          <ScrollAnimator className="w-full">
            <div className="max-w-xl mx-auto md:mx-0">

              {/* Typography Fix: 
                  - Added 'break-words' to prevent overflow.
                  - Adjusted 'md:text-5xl' to 'md:text-4xl lg:text-5xl' to ensure it fits on narrower tablets.
              */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#3B3632] mb-6 sm:mb-8 md:mb-10 leading-tight break-words">
                Find steadiness, even when life feels overwhelming.
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#2E2C2A] mb-5 sm:mb-6 leading-relaxed">
                You may be high-achieving and capable on the outside—yet privately carrying anxiety, burnout, or the weight of past experiences that still shape how you move through the world.
              </p>

              <p className="text-base sm:text-lg md:text-xl text-[#2E2C2A] leading-relaxed">
                Therapy can be a grounded space to slow down, reconnect with yourself, and build resilience in a way that feels steady, intentional, and sustainable.
              </p>

            </div>
          </ScrollAnimator>
        </div>

        {/* CTA Button */}
        <ScrollAnimator delay={200}>
          <a 
            href="#contact" 
            className="block w-full border-t border-[#3B3632] text-[#3B3632] hover:bg-[#3B3632] hover:text-[#F0ECE6] transition-all duration-300 group bg-[#dcd8d0]"
          >
            <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase py-5 sm:py-6 md:py-8 px-6 sm:px-10 md:px-12 lg:px-20">
              Get In Touch
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>
          </a>
        </ScrollAnimator>

      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-auto md:min-h-screen">
        <ScrollAnimator className="h-full w-full">
          <div className="relative w-full h-full bg-[#E6E2DC]">
            <img 
              src="/fulfilling.jpg" 
              alt="A surfer walking into the ocean at sunset"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </ScrollAnimator>
      </div>

    </section>
  )
}