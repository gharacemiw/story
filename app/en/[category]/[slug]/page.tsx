import { getPost, getPostsByCategory } from '@/lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const LOCALE = 'en' as const
const CATEGORIES = ['stories', 'poems', 'hallucinations'] as const
const categoryLabels: Record<string, string> = { stories: 'Short Stories', poems: 'Poems', hallucinations: 'Hallucinations' }

type Category = typeof CATEGORIES[number]

export async function generateStaticParams() {
  return CATEGORIES.flatMap(category =>
    getPostsByCategory(LOCALE, category).map(post => ({ category, slug: post.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params
  const post = await getPost(LOCALE, category, slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export default async function PostPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params
  if (!CATEGORIES.includes(category as Category)) notFound()

  const post = await getPost(LOCALE, category, slug)
  if (!post) notFound()

  const allInCategory = getPostsByCategory(LOCALE, category)
  const currentIndex = allInCategory.findIndex(p => p.slug === slug)
  const prev = allInCategory[currentIndex + 1] || null
  const next = allInCategory[currentIndex - 1] || null

  const formatted = new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })

  return (
    <div className="max-w-reading mx-auto px-6 py-16 md:py-24">
      <nav className="mb-10">
        <Link href={`/en/${category}`} className="font-sans text-sm text-warm-muted dark:text-dark-muted hover:text-warm-text dark:hover:text-dark-text transition-colors">
          ← {categoryLabels[category]}
        </Link>
      </nav>
      <header className="mb-10 pb-8">
        <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4">{post.title}</h1>
        <div className="flex items-center gap-3 text-sm font-sans text-warm-muted dark:text-dark-muted">
          <time dateTime={post.date}>{formatted}</time>
          <span>·</span>
          <span>{post.readingTime} min read</span>
        </div>
      </header>
      <article className="prose-reading text-warm-text dark:text-dark-text" dangerouslySetInnerHTML={{ __html: post.content || '' }} />
      <nav className="mt-16 pt-8 flex justify-between gap-8">
        <div className="flex-1">
          {prev ? (
            <Link href={`/en/${category}/${prev.slug}`} className="group flex flex-col gap-1">
              <span className="font-sans text-xs text-warm-muted dark:text-dark-muted uppercase tracking-wider">Previous</span>
              <span className="font-sans text-base font-medium group-hover:text-warm-accent dark:group-hover:text-dark-accent transition-colors">{prev.title}</span>
            </Link>
          ) : (
            <Link href="/en" className="group flex flex-col gap-1">
              <span className="font-sans text-xs text-warm-muted dark:text-dark-muted uppercase tracking-wider">You've reached the end</span>
              <span className="font-sans text-base font-medium group-hover:text-warm-accent dark:group-hover:text-dark-accent transition-colors">← Back to home</span>
            </Link>
          )}
        </div>
        <div className="flex-1 text-right">
          {next && (
            <Link href={`/en/${category}/${next.slug}`} className="group flex flex-col gap-1 items-end">
              <span className="font-sans text-xs text-warm-muted dark:text-dark-muted uppercase tracking-wider">Next</span>
              <span className="font-sans text-base font-medium group-hover:text-warm-accent dark:group-hover:text-dark-accent transition-colors">{next.title}</span>
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}
