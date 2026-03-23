import Link from 'next/link'
import Image from 'next/image'
import { getPostsByCategory } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import NewsletterForm from '@/components/NewsletterForm'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Gustavo Haracemiw — Independent Fiction' }

function Divider() { return null }

export default function HomePage() {
  const stories = getPostsByCategory('en', 'stories').slice(0, 3)
  const poems = getPostsByCategory('en', 'poems').slice(0, 3)
  const hallucinations = getPostsByCategory('en', 'hallucinations').slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="max-w-layout mx-auto px-6 pt-8 pb-6 md:pt-12 md:pb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-warm-muted dark:text-dark-muted mb-5">
            Independent Fiction
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
            Gustavo<br />Haracemiw
          </h1>
        </div>
        <Image src="/eu2.png" alt="Hero illustration" width={1075} height={463} quality={100} className="w-full md:w-[55%]" />
      </section>

      <Divider />

      {stories.length > 0 && (
        <section className="max-w-layout mx-auto px-6 py-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-warm-text dark:text-dark-text">Stories</h2>
            <Link href="/en/stories" className="font-sans text-sm px-3 py-1.5 rounded bg-warm-accent dark:bg-dark-accent text-warm-bg dark:text-dark-bg hover:bg-warm-text dark:hover:bg-dark-text dark:hover:text-dark-bg hover:scale-105 transition-all duration-150 ease-out">
              View all →
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {stories.map(post => <PostCard key={post.slug} {...post} locale="en" href={`/en/stories/${post.slug}`} />)}
          </div>
        </section>
      )}

      <Divider />

      {poems.length > 0 && (
        <section className="max-w-layout mx-auto px-6 py-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-warm-text dark:text-dark-text">Poems</h2>
            <Link href="/en/poems" className="font-sans text-sm px-3 py-1.5 rounded bg-warm-accent dark:bg-dark-accent text-warm-bg dark:text-dark-bg hover:bg-warm-text dark:hover:bg-dark-text dark:hover:text-dark-bg hover:scale-105 transition-all duration-150 ease-out">
              View all →
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {poems.map(post => <PostCard key={post.slug} {...post} locale="en" href={`/en/poems/${post.slug}`} />)}
          </div>
        </section>
      )}

      <Divider />

      {hallucinations.length > 0 && (
        <section className="max-w-layout mx-auto px-6 py-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-warm-text dark:text-dark-text">Hallucinations</h2>
            <Link href="/en/hallucinations" className="font-sans text-sm px-3 py-1.5 rounded bg-warm-accent dark:bg-dark-accent text-warm-bg dark:text-dark-bg hover:bg-warm-text dark:hover:bg-dark-text dark:hover:text-dark-bg hover:scale-105 transition-all duration-150 ease-out">
              View all →
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {hallucinations.map(post => <PostCard key={post.slug} {...post} locale="en" href={`/en/hallucinations/${post.slug}`} />)}
          </div>
        </section>
      )}

      <Divider />

      <NewsletterForm locale="en" />
    </div>
  )
}
