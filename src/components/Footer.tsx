export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-sm font-bold text-slate-900">
          Suresh<span className="text-blue-600">.</span>
        </span>
        <span className="text-xs text-slate-400">
          © {new Date().getFullYear()} Suresh Ullagaddi · PMP® · ASQ Six Sigma GB
        </span>
        <span className="text-xs text-slate-400">
          Built with Next.js · Deployed on Vercel
        </span>
      </div>
    </footer>
  )
}
