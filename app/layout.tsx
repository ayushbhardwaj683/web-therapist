

import type { Metadata } from 'next'
import { Fraunces, Mulish } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'


const fraunces = Fraunces({ 
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})


const mulish = Mulish({ 
  subsets: ['latin'], 
  variable: '--font-mulish',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Therapy App',
  description: 'Connect with a therapist and get the support you need.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(
        fraunces.variable,
        mulish.variable,
        "font-sans antialiased bg-[#F0ECE6] text-[#2E2C2A]"
      )}>
        {children}
      </body>
    </html>
  )
}


