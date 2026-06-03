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
            I spent 20+ years learning to do things properly: PMP® for governance, ASQ Six Sigma for
            rigor, CMMI and ISO for delivery discipline. Then I started shipping production AI
            systems with Claude and Cursor and discovered I could build in days what used to take a
            quarter. The obvious question: do the old frameworks still matter? My answer, after four
            shipped platforms — yes, more than ever. But their <em>role</em> changes.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Speed Without Rigor Is Just Fast Mistakes</h2>
          <p>
            LLMs collapse the cost of producing work — code, PRDs, analysis. What they don&apos;t
            collapse is the cost of producing the <em>wrong</em> work at scale. That&apos;s exactly
            the gap PMP and Six Sigma fill: defining the problem, the acceptance criteria, and the
            measure of done before you let the AI sprint toward a solution.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">How I Blend the Two</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li><strong>PRD first, always</strong> — I still author a tight requirements doc. The difference: Claude turns it into a working prototype the same day, so the PRD gets validated against reality immediately.</li>
            <li><strong>Define the metric before the build</strong> — Six Sigma taught me to baseline first. &quot;Cut per-lead research time by 70%&quot; was a target, not a result I discovered afterward.</li>
            <li><strong>Structured handoffs</strong> — the same discipline that governs a stage-gate review now governs the JSON contracts between AI agents. Ambiguity is the enemy in both.</li>
            <li><strong>Governance as guardrails, not gates</strong> — CI/CD and code review replace the heavyweight approval boards. The control is continuous, not a quarterly ceremony.</li>
          </ol>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">What Actually Changed</h2>
          <p>
            The frameworks didn&apos;t get replaced — the cadence did. Planning that took weeks now
            takes a conversation. Iteration that took a sprint takes an afternoon. The PM&apos;s job
            shifts from <em>managing the work</em> to <em>defining what good looks like</em> and
            verifying the AI got there.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">The Takeaway</h2>
          <p>
            PMP gave me the rigor; Claude gave me the speed. Used together, I ship faster without
            cutting the corners that matter. The teams that struggle with AI aren&apos;t the ones
            with too much process — they&apos;re the ones who threw it all out and called the chaos
            &quot;moving fast.&quot;
          </p>
        </div>
      </div>
    </div>
  )
}
