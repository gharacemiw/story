import { getPostsByCategory } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Poemas' }

export default function PoemasPage() {
  const posts = getPostsByCategory('pt-br', 'poemas')
  return (
    <div className="max-w-layout mx-auto px-6 py-16">
      <header className="mb-4 pb-4">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Poemas</h1>
        <p className="text-warm-muted dark:text-dark-muted mt-2 font-sans">{posts.length} {posts.length === 1 ? 'texto publicado' : 'textos publicados'}</p>
      </header>
      {posts.length === 0 ? (
        <p className="text-warm-muted dark:text-dark-muted font-sans">Em breve.</p>
      ) : (
        <div className="flex flex-col gap-3">{posts.map(post => <PostCard key={post.slug} {...post} locale="pt-br" href={`/pt-br/poemas/${post.slug}`} />)}</div>
      )}
    </div>
  )
}
