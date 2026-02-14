

'use client'

import ScrollAnimator from '../scroll-animator'
import Image from 'next/image'

export default function SocialLinks() {
  const socialImages = [
    { id: 1, src: '/self_esteem.jpg', alt: 'Self Esteem' },
    { id: 2, src: '/burnout.jpg', alt: 'Burnout' },
    { id: 3, src: '/relationship.jpg', alt: 'Relationship' },
    { id: 4, src: '/alone.jpg', alt: 'Alone' },
  ]
  
  return (
    <section className="bg-[#F0ECE6] py-16 md:py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <ScrollAnimator>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-10 md:mb-14">
            Find me on social.
          </h2>
        </ScrollAnimator>

        <ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {socialImages.map((image) => (
              <div key={image.id} className="w-full aspect-square relative overflow-hidden rounded-sm">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </ScrollAnimator>
      </div>
    </section>
  )
}

