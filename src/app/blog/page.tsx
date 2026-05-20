import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'
import { posts } from '@/components/BlogPreview'

const tagColors: Record<string, string> = {
  'AI Engineering':    'bg-blue-50 text-blue-700',
  'Product Leadership':'bg-purple-50 text-purple-700',
  'Product Management':'bg-amber-50 text-amber-700',
}

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-8">
          <ArrowLeft size={14} /> Back home
        </Link>

        <p className="section-label">Writing</p>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Blog</h1>
        <p className="text-slate-500 mb-12">
          Thoughts on AI engineering, product leadership, and building systems that actually work.
        </p>

        <div className="flex flex-col gap-5">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="card p-6 flex flex-col gap-3 hover:border-blue-200 group">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full self-start ${tagColors[post.tag] ?? 'bg-slate-100 text-slate-600'}`}>
                {post.tag}
              </span>
              <h2 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span>{post.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
