const categories = [
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Leaflet / Maps'],
  },
  {
    name: 'Backend',
    skills: ['NestJS', 'Node.js', 'PostgreSQL', 'Redis', 'REST APIs'],
  },
  {
    name: 'AI & Automation',
    skills: ['Claude AI', 'Multi-agent systems', 'Prompt engineering', 'ZenRows', 'Gmail IMAP automation'],
  },
  {
    name: 'Infrastructure & DevOps',
    skills: ['AWS ECR', 'Vercel', 'GitHub Actions', 'Docker', 'CI/CD pipelines'],
  },
  {
    name: 'CRM & Sales Tools',
    skills: ['Zoho CRM', 'Apollo API', 'Lead enrichment', 'Territory mapping', 'Pipeline analytics'],
  },
  {
    name: 'Leadership & Delivery',
    skills: ['PMP®', 'ASQ Six Sigma GB', 'Scrum / Agile', 'Cross-functional leadership', 'OKR planning'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label">Capabilities</p>
          <h2 className="section-heading">Skills &amp; Stack</h2>
          <p className="section-sub max-w-lg mx-auto">
            A full-stack AI builder with the leadership credentials to drive delivery end-to-end.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(cat => (
            <div key={cat.name} className="card p-5">
              <h3 className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill}
                    className="text-xs font-medium bg-slate-50 border border-slate-100 text-slate-700 px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Credentials highlight */}
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-blue-600 text-white p-6 flex items-start gap-4">
            <div className="text-3xl">🎓</div>
            <div>
              <div className="font-bold text-lg mb-1">PMP® Certified</div>
              <div className="text-blue-100 text-sm">
                Project Management Professional — proven framework for delivering complex initiatives on time and on budget.
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-800 text-white p-6 flex items-start gap-4">
            <div className="text-3xl">📊</div>
            <div>
              <div className="font-bold text-lg mb-1">ASQ Six Sigma Green Belt</div>
              <div className="text-slate-300 text-sm">
                Data-driven process improvement. Systems I build are not just functional — they are optimised, measurable, and scalable.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
