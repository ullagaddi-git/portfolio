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
            We built Kohlex AI Scrum because our distributed engineering team kept losing time to the
            ceremony of Scrum rather than the substance of it. Stand-ups ran long, blockers surfaced
            late, and sprint commitments rarely matched real capacity. After running an AI delivery
            co-pilot in production for several months, here is the honest account of what it does well,
            what it can not do, and how the team changed around it.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">What the AI handles well</h2>
          <p>
            The AI is excellent at the mechanical, high-frequency work that humans do badly when they
            are busy: collecting asynchronous stand-up updates across time zones, summarising them into
            a single status, and flagging when the same blocker appears two days in a row. It models
            capacity honestly — it does not get optimistic at planning time — so sprint commitments are
            grounded in actual historical throughput rather than wishful thinking.
          </p>
          <p>
            Pattern detection is where it earns its keep. A human Scrum Master notices a recurring
            blocker eventually; the AI notices it on the second occurrence and escalates with the
            relevant history attached. Over-commitment dropped measurably once the team could see a
            data-backed forecast instead of a gut feel.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Where it still needs a human</h2>
          <p>
            The AI cannot read the room. It does not know that an engineer is quiet in stand-up because
            they are stuck and embarrassed, not because they are heads-down and fine. It cannot navigate
            the politics of a dependency owned by another team, or decide that this sprint we protect a
            person from burnout at the cost of a deadline. Judgement, trust, and difficult conversations
            remain firmly human work.
          </p>
          <p>
            It also fails when the input is thin. If people write one-line updates, the summaries are
            shallow. The tool amplifies the team's discipline — it does not replace it.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">How the team adapted</h2>
          <p>
            The biggest shift was cultural: once the status reporting was automated, our live stand-ups
            stopped being status theatre and became problem-solving sessions. We spend the fifteen
            minutes on the two blockers that matter, because everyone has already read the AI-generated
            summary. The Scrum Master role did not disappear — it moved up the value chain, from
            chasing updates to coaching and removing impediments.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">The verdict</h2>
          <p>
            An AI Scrum Master is a force multiplier, not a replacement. Treat it as a senior coach that
            never sleeps and never forgets a blocker, and pair it with a human who owns the judgement
            calls. That combination shipped more predictable sprints for us than either could alone.
          </p>
        </div>
      </div>
    </div>
  )
}
