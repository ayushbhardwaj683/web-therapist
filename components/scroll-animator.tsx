'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollAnimatorProps {
  children: ReactNode
  delay?: number
}

export default function ScrollAnimator({ children, delay = 0 }: ScrollAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (ref.current) {
              ref.current.classList.add('fade-in')
            }
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="opacity-0">
      {children}
    </div>
  )
}
