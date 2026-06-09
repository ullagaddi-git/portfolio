import { ArrowRight, Linkedin, Github, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="about" className="relative bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Open to AI Transformation / Delivery leadership roles
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-4">
              Suresh<br />
              <span className="text-blue-600">Ullagaddi</span>
            </h1>

            <p className="text-lg font-semibold text-slate-600 mb-2">
              AI Transformation Lead &amp; Associate General Manager
            </p>
            <p className="text-sm text-slate-400 font-medium mb-6 tracking-wide">
              PMP® &nbsp;·&nbsp; ASQ Six Sigma Green Belt &nbsp;·&nbsp; 22+ yrs &nbsp;·&nbsp; ~9 yrs USA
            </p>

            <p className="text-slate-600 leading-relaxed mb-8 max-w-md">
              I pair 22+ years of program delivery, P&amp;L ownership, and Lean Six Sigma rigour
              with hands-on agentic-AI engineering — architecting and shipping production
              multi-agent systems that automate operations and accelerate delivery.
              4 systems live. 70% time saved. 24/7 autonomous.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="#projects" className="btn-primary">
                View Projects <ArrowRight size={15} />
              </Link>
              <a href="/resume.pdf" download className="btn-outline">
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/in/sureshullagaddi" target="_blank" rel="noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/ullagaddi-git" target="_blank" rel="noreferrer"
                className="text-slate-400 hover:text-slate-700 transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:ullagaddi@gmail.com"
                className="text-slate-400 hover:text-blue-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '22+', label: 'Years Experience', desc: 'PMP · AGM · ~9 yrs USA' },
              { num: '4', label: 'AI Systems Shipped', desc: 'Production, not pilots' },
              { num: '$1M+', label: 'P&L Portfolio', desc: '28 engineering projects' },
              { num: '70%', label: 'Time Saved', desc: 'Per lead qualification' },
            ].map(s => (
              <div key={s.label} className="card p-5">
                <div className="text-3xl font-extrabold text-blue-600 mb-1">{s.num}</div>
                <div className="text-sm font-semibold text-slate-800 mb-0.5">{s.label}</div>
                <div className="text-xs text-slate-400">{s.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
