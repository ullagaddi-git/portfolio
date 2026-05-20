# Suresh Ullagaddi — Portfolio

Personal portfolio site built with Next.js 14 + Tailwind CSS.

## 🚀 Deploy in 3 Steps

### 1. Push to GitHub
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repo
3. Click **Deploy** — done. Zero config needed.

### 3. Add your resume PDF
Drop your resume as `public/resume.pdf` — the "Download CV" button links to it automatically.

---

## ✏️ How to Edit Content

| What to change | File |
|---|---|
| Your name, bio, stats | `src/components/Hero.tsx` |
| AI project cards | `src/components/Projects.tsx` |
| Skills & stack | `src/components/Skills.tsx` |
| Blog post list | `src/components/BlogPreview.tsx` (edit the `posts` array) |
| Contact links | `src/components/Contact.tsx` |
| Nav links | `src/components/Nav.tsx` |
| Site title / SEO | `src/app/layout.tsx` |

## 📝 Adding a New Blog Post

1. Add an entry to the `posts` array in `src/components/BlogPreview.tsx`:
```ts
{
  slug: 'my-new-post',
  title: 'My Post Title',
  excerpt: 'Short preview text...',
  date: 'June 2026',
  readTime: '5 min read',
  tag: 'AI Engineering',
}
```

2. Create the file: `src/app/blog/my-new-post/page.tsx`
   (copy the existing post as a template)

3. Push to GitHub → Vercel auto-deploys.

## 🛠 Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```
