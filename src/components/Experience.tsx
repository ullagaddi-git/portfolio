import { Briefcase } from 'lucide-react'

const roles = [
  {
    title: 'Associate General Manager',
    org: 'Kohlex',
    loc: 'Hyderabad, India',
    period: 'Nov 2018 – Present',
    points: [
      'Own a $1M, 28-project engineering portfolio; cut project turnaround ~20% and grew delivery capacity 80–100%.',
      'Drove org-wide AI adoption and built & shipped 4 production multi-agent platforms; serve as Scrum Master for a 40+ member team.',
    ],
    current: true,
  },
  {
    title: 'Founder / Consultant',
    org: 'ULTI Consulting Services',
    loc: 'India',
    period: 'May 2015 – Nov 2018',
    points: [
      'Delivered RPA automation across Finance & E-commerce; architected governance for the APCRDA “Mana Amaravati” government transformation program.',
    ],
  },
  {
    title: 'Strategic Project Manager',
    org: 'Harsco Rail',
    loc: 'USA',
    period: 'Jun 2014 – Dec 2014',
    points: [
      'Led growth/transformation via the IGROW framework; built strategic playbooks for the Pooltas–Harsco Joint Venture.',
    ],
  },
  {
    title: 'NPI Project & Business Development Manager',
    org: 'Hinduja Tech',
    loc: 'India / USA',
    period: 'Mar 2012 – Jan 2014',
    points: [
      'Led multi-million-dollar programs (Halliburton Next-Gen Drilling Tool, Covidien Orbis); owned P&L; CMMI/ISO frameworks, QFD.',
    ],
  },
  {
    title: 'Project Manager',
    org: 'Chant Engineering',
    loc: 'Pennsylvania, USA',
    period: 'Jul 2009 – Feb 2012',
    points: [
      'Owned the Hydraulic Business Unit P&L and growth, incl. multi-million-dollar US Defense test-stand programs.',
    ],
  },
  {
    title: 'BD / Six Sigma Engineer · Sr. Product Dev Engineer',
    org: 'Caterpillar & Danaher',
    loc: 'USA',
    period: 'May 2005 – Mar 2009',
    points: [
      'Caterpillar: led Six Sigma DMAIC/NPD for Motor-Grader hydraulic systems. Danaher: led vapor-recovery valve certification.',
    ],
  },
  {
    title: 'Early career — Design & Quality Engineering',
    org: 'Sino Swearingen · Advanced Heat Transfer · Univ. of Memphis · Bharat Dynamics',
    loc: 'USA / India',
    period: '2002 – 2005',
    points: [
      'CAD design (Unigraphics NX), HVAC design, research assistantship, and QC of aerospace/missile components.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label">Career</p>
          <h2 className="section-heading">22+ Years of Delivery Leadership</h2>
          <p className="section-sub max-w-xl mx-auto">
            From global engineering and P&amp;L ownership across the U.S. and India to building agentic AI today.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-100 ml-3 md:ml-6">
          {roles.map(r => (
            <div key={r.org + r.period} className="relative pl-8 pb-9 last:pb-0">
              <span className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 ${r.current ? 'bg-blue-600 border-blue-600' : 'bg-white border-slate-300'}`} />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <h3 className="font-bold text-slate-900 text-base">{r.title}</h3>
                <span className="text-blue-600 font-semibold text-sm">{r.org}</span>
              </div>
              <div className="text-xs text-slate-400 font-medium mb-2">{r.period} &nbsp;·&nbsp; {r.loc}</div>
              <ul className="space-y-1.5">
                {r.points.map((p, i) => (
                  <li key={i} className="text-sm text-slate-600 leading-relaxed flex gap-2">
                    <span className="text-blue-400 mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-blue-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/resume.pdf" download className="btn-outline inline-flex items-center gap-2">
            <Briefcase size={14} /> Download Full Resume
          </a>
        </div>
      </div>
    </section>
  )
}
