import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Post() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-2xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-10">
          <ArrowLeft size={14} /> All posts
        </Link>

        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 mb-4 inline-block">
          AI Engineering
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 leading-tight mb-3">
          How I Built a Multi-Agent Lead Qualification Pipeline in 6 Weeks
        </h1>
        <p className="text-slate-400 text-sm mb-10">May 2026 · 7 min read</p>

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5">
          <p>
            When we started building Lead-Kohlex-AI, the goal was simple: stop spending 3 hours per
            lead manually researching companies, verifying contacts, and copy-pasting into Zoho CRM.
            Six weeks later we had a 7-stage multi-agent pipeline that does it in under 4 minutes —
            cutting research time by 70%.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">The Problem</h2>
          <p>
            Our sales process required qualifying inbound leads against a dozen criteria before they
            hit the CRM: company size, tech stack, hiring signals, budget indicators, contact
            seniority. A skilled SDR could do 4–5 leads per hour. We needed 10×.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">The Architecture</h2>
          <p>
            The pipeline runs as a NestJS service with 7 sequential agent stages, each with a
            focused prompt and structured output contract:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li><strong>Intake agent</strong> — normalises raw lead data from Apollo API</li>
            <li><strong>Company intelligence agent</strong> — enriches with funding, headcount, tech stack signals</li>
            <li><strong>Contact resolution agent</strong> — identifies decision-maker hierarchy</li>
            <li><strong>Fit scoring agent</strong> — scores against ICP criteria (0–100)</li>
            <li><strong>Blocker detection agent</strong> — flags disqualifiers (competitor use, budget mismatch)</li>
            <li><strong>Summary agent</strong> — writes a 3-sentence human-readable brief</li>
            <li><strong>CRM push agent</strong> — formats and writes the enriched record to Zoho</li>
          </ol>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">What We Learned</h2>
          <p>
            The biggest surprise was how important structured output contracts between agents were.
            Early versions used free-form text handoffs — the downstream agents hallucinated on
            ambiguous inputs constantly. Switching to validated JSON schemas at every stage boundary
            cut error rates by ~80%.
          </p>
          <p>
            Redis was essential for caching Apollo API responses — without it, we were burning API
            credits re-fetching the same company data across multiple leads from the same account.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Results</h2>
          <p>
            After 6 weeks in production: 70% reduction in research time per lead, 3× increase in
            leads processed per day, and zero missed high-fit leads (the blocker agent catches
            disqualifiers the team used to miss under time pressure).
          </p>
          <p>
            The system cost about $0.08 per lead in LLM API calls. For context, an SDR hour at
            market rate costs roughly $35. The math is obvious.
          </p>
        </div>
      </div>
    </div>
  )
}
