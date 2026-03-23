import { getPostsByCategory } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Short Stories' }

export default function StoriesPage() {
  const posts = getPostsByCategory('en', 'stories')
  return (
    <div className="max-w-layout mx-auto px-6 py-8 md:py-16">
      <header className="mb-4 pb-4">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Short Stories</h1>
        <p className="text-warm-muted dark:text-dark-muted mt-2 font-sans">{posts.length} {posts.length === 1 ? 'text published' : 'texts published'}</p>
      </header>
      {posts.length === 0 ? (
        <p className="text-warm-muted dark:text-dark-muted font-sans">Coming soon.</p>
      ) : (
        <div className="flex flex-col gap-3">{posts.map(post => <PostCard key={post.slug} {...post} locale="en" href={`/en/stories/${post.slug}`} />)}</div>
      )}
    </div>
  )
}
