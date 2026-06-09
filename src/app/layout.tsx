import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Suresh Ullagaddi — AI Transformation Lead & AGM',
  description: 'AI Transformation Lead, PMP® & ASQ Six Sigma GB with 22+ years (≈9 in the USA) in program delivery and P&L. Built & shipped 4 production AI systems at Kohlex.',
  openGraph: {
    title: 'Suresh Ullagaddi — AI Transformation Lead & AGM',
    description: '22+ yrs delivery leadership + hands-on agentic AI. 4 production AI systems shipped.',
    url: 'https://portfolio-ruddy-eta-53.vercel.app/',
    siteName: 'Suresh Ullagaddi',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
