import { Mail, Linkedin, Github, FileText } from 'lucide-react'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ku@kohlex.com',
    href: 'mailto:ku@kohlex.com',
    desc: 'Best for project inquiries',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sureshullagaddi',
    href: 'https://linkedin.com/in/sureshullagaddi',
    desc: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ullagaddi-git',
    href: 'https://github.com/ullagaddi-git',
    desc: 'See the code',
  },
  {
    icon: FileText,
    label: 'Resume',
    value: 'Download PDF',
    href: '/resume.pdf',
    desc: 'Full CV with credentials',
    download: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="section-label">Get in Touch</p>
        <h2 className="section-heading">Let&apos;s Work Together</h2>
        <p className="section-sub mb-12 max-w-lg mx-auto">
          Open to AGM, Director, and AI Product Manager roles. Available for consulting on AI system
          architecture and automation strategy.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 text-left mb-10">
          {links.map(l => {
            const Icon = l.icon
            return (
              <a key={l.label} href={l.href}
                {...(l.download ? { download: true } : { target: '_blank', rel: 'noreferrer' })}
                className="card p-4 flex items-center gap-4 hover:border-blue-200 group">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600 group-hover:bg-blue-100 transition-colors">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{l.label}</div>
                  <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{l.value}</div>
                  <div className="text-xs text-slate-400">{l.desc}</div>
                </div>
              </a>
            )
          })}
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-slate-900 text-white px-8 py-8 text-center">
          <div className="text-2xl font-extrabold mb-2">Ready to build something?</div>
          <p className="text-slate-400 text-sm mb-5">
            Whether it&apos;s an AI system, a product leadership role, or a consulting engagement — I&apos;d love to hear from you.
          </p>
          <a href="mailto:ku@kohlex.com" className="btn-primary">
            <Mail size={15} />
            Send a message
          </a>
        </div>
      </div>
    </section>
  )
}
