import { ExternalLink, Zap, Mail, RefreshCw, Map } from 'lucide-react'

const projects = [
  {
    icon: Zap,
    color: 'blue',
    name: 'Lead-Kohlex-AI',
    tagline: 'Multi-agent lead qualification platform',
    description:
      'End-to-end lead intelligence pipeline with 7-stage automated filtering. Enriches prospects via Apollo API, qualifies with Claude AI, and pushes records to Zoho CRM — reducing research time per lead by 70%.',
    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'Zoho CRM', 'Apollo API', 'Claude AI'],
    outcome: '↓ 70% research time per lead',
    outcomeColor: 'text-blue-600 bg-blue-50',
  },
  {
    icon: Mail,
    color: 'purple',
    name: 'Indeed Alert Automation',
    tagline: '24/7 zero-touch recruitment pipeline',
    description:
      'Gmail IMAP listener ingests job-posting alerts, applies keyword + relevance filtering, scrapes enriched data via ZenRows, and automatically pushes qualified candidates into CRM. No human touchpoints.',
    stack: ['Node.js', 'Gmail IMAP', 'ZenRows', 'PostgreSQL', 'Zoho CRM'],
    outcome: '24/7 autonomous · zero touch',
    outcomeColor: 'text-purple-600 bg-purple-50',
  },
  {
    icon: RefreshCw,
    color: 'amber',
    name: 'Kohlex AI Scrum',
    tagline: 'AI delivery co-pilot for engineering teams',
    description:
      'Async stand-up collector, sprint planning assistant, and blocker detection engine. Analyses team velocity, surfaces risks early, and generates AI-driven delivery forecasts for stakeholders.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Claude AI', 'Vercel'],
    outcome: 'Scrum coach that never sleeps',
    outcomeColor: 'text-amber-600 bg-amber-50',
  },
  {
    icon: Map,
    color: 'green',
    name: 'CRM Sales Mapping',
    tagline: 'Geographic territory intelligence platform',
    description:
      'Interactive heatmaps of lead density and pipeline health by territory. Week-over-week trend analysis, deal stage overlays, and rep assignment tools. Fully containerised on AWS ECR.',
    stack: ['NestJS', 'React', 'Leaflet', 'Google Maps API', 'PostgreSQL', 'AWS ECR', 'GitHub Actions'],
    outcome: 'Live · CI/CD via GitHub Actions',
    outcomeColor: 'text-green-600 bg-green-50',
  },
]

const colorMap: Record<string, { icon: string; bar: string; badge: string }> = {
  blue:   { icon: 'bg-blue-50 text-blue-600',   bar: 'bg-blue-600',   badge: 'border-blue-100' },
  purple: { icon: 'bg-purple-50 text-purple-600', bar: 'bg-purple-500', badge: 'border-purple-100' },
  amber:  { icon: 'bg-amber-50 text-amber-600',  bar: 'bg-amber-500',  badge: 'border-amber-100' },
  green:  { icon: 'bg-green-50 text-green-600',  bar: 'bg-green-500',  badge: 'border-green-100' },
}

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label">AI Projects</p>
          <h2 className="section-heading">4 Systems. Built &amp; Shipped.</h2>
          <p className="section-sub max-w-xl mx-auto">
            Not pilots or demos — production systems running in our business every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(proj => {
            const c = colorMap[proj.color]
            const Icon = proj.icon
            return (
              <div key={proj.name} className="card p-6 flex flex-col gap-4">
                {/* Top bar */}
                <div className={`h-1 w-12 rounded-full ${c.bar}`} />

                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${c.icon}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{proj.name}</h3>
                    <p className="text-slate-500 text-sm">{proj.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">{proj.description}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map(t => (
                    <span key={t} className={`text-xs font-medium px-2.5 py-1 rounded-full border bg-white text-slate-600 ${c.badge}`}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Outcome */}
                <div className="mt-auto">
                  <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full ${proj.outcomeColor}`}>
                    {proj.outcome}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-10">
          <a href="https://github.com/ullagaddi-git" target="_blank" rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2">
            <ExternalLink size={14} />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
