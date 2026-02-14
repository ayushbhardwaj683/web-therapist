


'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ScrollAnimatorProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function ScrollAnimator({
  children,
  className = '',
  delay = 0,
}: ScrollAnimatorProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
