'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about',    label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills',   label: 'Skills' },
  { href: '/blog',     label: 'Blog' },
  { href: '#contact',  label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-slate-900 text-lg tracking-tight">
          Suresh<span className="text-blue-600">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              {l.label}
            </Link>
          ))}
          <a href="/resume.pdf" download
            className="btn-primary text-xs px-4 py-2">
            Download CV
          </a>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-blue-600">
              {l.label}
            </Link>
          ))}
          <a href="/resume.pdf" download className="btn-primary self-start text-xs px-4 py-2">
            Download CV
          </a>
        </div>
      )}
    </header>
  )
}
