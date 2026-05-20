import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Suresh Ullagaddi — AI Product Leader',
  description: 'Associate General Manager & AI Product Leader. PMP®, ASQ Six Sigma GB. 4 production AI systems shipped at Kohlex.',
  openGraph: {
    title: 'Suresh Ullagaddi — AI Product Leader',
    description: '4 production AI systems. Built & shipped.',
    url: 'https://sureshullagaddi.com',
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
