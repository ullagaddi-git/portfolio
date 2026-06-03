import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Post() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-2xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-10">
          <ArrowLeft size={14} /> All posts
        </Link>

        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 mb-4 inline-block">
          Product Leadership
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 leading-tight mb-3">
          Why an AI Scrum Master Actually Works (and Where It Fails)
        </h1>
        <p className="text-slate-400 text-sm mb-10">April 2026 · 5 min read</p>

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5">
          <p>
            When I set out to build Kohlex AI Scrum, the skeptic in me — the PMP®-certified, Six
            Sigma one — assumed an AI would never replace the human judgment a good Scrum Master
            brings. After running it in production across distributed engineering teams, I was half
            right. The AI is exceptional at some things, useless at others. Here&apos;s the honest
            breakdown.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">What It Does</h2>
          <p>
            Kohlex AI Scrum is a delivery-intelligence platform (Next.js, Node.js, PostgreSQL) that
            acts as an AI delivery co-pilot rather than a replacement for the team. It runs
            asynchronous daily stand-ups, does AI-driven sprint planning with capacity modeling,
            detects blocker patterns across sprints, and forecasts delivery risk before it
            materializes.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Where It Wins</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li><strong>Async stand-ups</strong> — distributed teams across time zones stop losing a daily meeting; the AI synthesizes updates into a single status view.</li>
            <li><strong>Capacity modeling</strong> — it catches over-commitment that humans optimistically wave through during planning.</li>
            <li><strong>Blocker pattern detection</strong> — it spots the same blocker recurring across sprints, something a rotating human SM rarely connects.</li>
            <li><strong>Risk forecasting</strong> — it flags a sprint goal at risk days earlier than a burndown chart reveals it.</li>
          </ol>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Where It Fails</h2>
          <p>
            The AI cannot read a room. When a developer is quietly burning out, when two engineers
            have an unspoken design disagreement, or when a stakeholder&apos;s &quot;urgent&quot;
            request is really political — that still needs a human. The AI surfaces the signal
            (velocity dropping, blockers piling up); a person has to interpret the why.
          </p>
          <p>
            It also won&apos;t make the hard prioritization calls. It can model that you&apos;re
            over capacity by 20%; deciding <em>what</em> to cut is a leadership decision, not a
            calculation.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">The Takeaway</h2>
          <p>
            Treat the AI Scrum Master as instrumentation, not authority. It reduces over-commitment
            and improves sprint-goal achievement by removing the busywork and catching patterns
            humans miss — and it frees the actual Scrum Master to do the one thing AI still
            can&apos;t: lead people.
          </p>
        </div>
      </div>
    </div>
  )
}
