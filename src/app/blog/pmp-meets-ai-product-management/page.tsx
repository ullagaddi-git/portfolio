import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Post() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-2xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-10">
          <ArrowLeft size={14} /> All posts
        </Link>

        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 mb-4 inline-block">
          Product Management
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 leading-tight mb-3">
          PMP® Meets AI: How Traditional PM Frameworks Survive the LLM Era
        </h1>
        <p className="text-slate-400 text-sm mb-10">March 2026 · 6 min read</p>

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5">
          <p>
            I spent two decades learning to deliver projects the disciplined way: PMP for structure,
            Six Sigma for measurement. Then I started building with LLMs and watched work that used to
            take a week collapse into an afternoon. The obvious question followed — do the old
            frameworks still matter when AI moves this fast? My answer, after shipping four production
            AI systems, is that they matter more, not less.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">What does not change</h2>
          <p>
            Scope, stakeholders, risk, and quality are human problems, and AI does not solve them. A
            model will happily generate the wrong feature beautifully. PMP's discipline — define the
            outcome, identify the stakeholders, track the risks, govern the change — is exactly what
            keeps an AI-accelerated team from shipping fast in the wrong direction. The faster you can
            build, the more expensive a missing requirement becomes.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">What AI accelerates</h2>
          <p>
            Where AI changes the game is the cost of iteration. Drafting PRDs, exploring solution
            options, prototyping, writing tests, and producing status artefacts all shrink from days to
            minutes. Six Sigma's DMAIC loop — define, measure, analyse, improve, control — runs far
            faster when the measure and analyse steps are AI-assisted. You get more turns of the loop
            per sprint, which is the real compounding advantage.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">The new PM skill</h2>
          <p>
            The skill that now separates good delivery leaders is knowing where to point the speed.
            Anyone can ask a model to build something; the value is in choosing the highest-leverage
            problem, specifying it precisely, and validating the output against a real acceptance bar.
            That is judgement, and judgement is exactly what PMP and Six Sigma train.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Bottom line</h2>
          <p>
            AI did not make my project-management training obsolete. It removed the friction around the
            work so that the discipline could actually shine. The rigour tells you what to build and how
            to know it is right; the AI lets you get there in a fraction of the time. Blend both and you
            ship faster without cutting the corners that sink projects.
          </p>
        </div>
      </div>
    </div>
  )
}
