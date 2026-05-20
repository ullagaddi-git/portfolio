import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

// ── Edit this array to add blog posts ──────────────────────────────────────
// Each post maps to /blog/[slug] — create the matching file in src/app/blog/[slug]/page.tsx
export const posts = [
  {
    slug: 'how-i-built-a-multi-agent-lead-pipeline',
    title: 'How I Built a Multi-Agent Lead Qualification Pipeline in 6 Weeks',
    excerpt:
      'A behind-the-scenes look at architecting Lead-Kohlex-AI: the tech decisions, the LLM prompt chain, and how we cut research time by 70%.',
    date: 'May 2026',
    readTime: '7 min read',
    tag: 'AI Engineering',
  },
  {
    slug: 'why-ai-scrum-master-works',
    title: 'Why an AI Scrum Master Actually Works (and Where It Fails)',
    excerpt:
      'Lessons from running Kohlex AI Scrum in production — what the AI handles well, what still needs a human, and how the team adapted.',
    date: 'April 2026',
    readTime: '5 min read',
    tag: 'Product Leadership',
  },
  {
    slug: 'pmp-meets-ai-product-management',
    title: 'PMP® Meets AI: How Traditional PM Frameworks Survive the LLM Era',
    excerpt:
      'Six Sigma and PMP gave me the rigour. Claude AI gave me the speed. Here\'s how I blend both to ship faster without cutting corners.',
    date: 'March 2026',
    readTime: '6 min read',
    tag: 'Product Management',
  },
]
// ───────────────────────────────────────────────────────────────────────────

const tagColors: Record<string, string> = {
  'AI Engineering':    'bg-blue-50 text-blue-700',
  'Product Leadership':'bg-purple-50 text-purple-700',
  'Product Management':'bg-amber-50 text-amber-700',
}

export default function BlogPreview() {
  return (
    <section id="blog" className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="section-label">Writing</p>
            <h2 className="section-heading mb-0">Latest Posts</h2>
          </div>
          <Link href="/blog" className="btn-outline hidden sm:inline-flex items-center gap-1.5 text-xs">
            All posts <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="card p-5 flex flex-col gap-3 hover:border-blue-200 group">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full self-start ${tagColors[post.tag] ?? 'bg-slate-100 text-slate-600'}`}>
                {post.tag}
              </span>
              <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed flex-1">{post.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-slate-400 mt-auto">
                <span>{post.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden text-center">
          <Link href="/blog" className="btn-outline inline-flex items-center gap-1.5 text-xs">
            All posts <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  )
}
