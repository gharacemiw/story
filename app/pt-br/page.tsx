import Link from 'next/link'
import Image from 'next/image'
import { getPostsByCategory } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import NewsletterForm from '@/components/NewsletterForm'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Gustavo Haracemiw — Ficção Independente' }

function Divider() { return null }

export default function HomePage() {
  const contos = getPostsByCategory('pt-br', 'contos').slice(0, 3)
  const poemas = getPostsByCategory('pt-br', 'poemas').slice(0, 3)
  const alucinacoes = getPostsByCategory('pt-br', 'alucinacoes').slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="max-w-layout mx-auto px-6 pt-8 pb-6 md:pt-12 md:pb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-warm-muted dark:text-dark-muted mb-5">
            Ficção Independente
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
            Gustavo<br />Haracemiw
          </h1>
        </div>
        <Image src="/eu2.png" alt="Ilustração do hero" width={1075} height={463} quality={100} className="w-full md:w-[55%]" />
      </section>

      <Divider />

      {poemas.length > 0 && (
        <section className="max-w-layout mx-auto px-6 py-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-warm-text dark:text-dark-text">Poemas</h2>
            <Link href="/pt-br/poemas" className="font-sans text-sm px-3 py-1.5 rounded bg-warm-accent dark:bg-dark-accent text-warm-bg dark:text-dark-bg hover:bg-warm-text dark:hover:bg-dark-text dark:hover:text-dark-bg hover:scale-105 transition-all duration-150 ease-out">
              Ver todos →
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {poemas.map(post => <PostCard key={post.slug} {...post} locale="pt-br" href={`/pt-br/poemas/${post.slug}`} />)}
          </div>
        </section>
      )}

      <Divider />

      {contos.length > 0 && (
        <section className="max-w-layout mx-auto px-6 py-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-warm-text dark:text-dark-text">Contos</h2>
            <Link href="/pt-br/contos" className="font-sans text-sm px-3 py-1.5 rounded bg-warm-accent dark:bg-dark-accent text-warm-bg dark:text-dark-bg hover:bg-warm-text dark:hover:bg-dark-text dark:hover:text-dark-bg hover:scale-105 transition-all duration-150 ease-out">
              Ver todos →
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {contos.map(post => <PostCard key={post.slug} {...post} locale="pt-br" href={`/pt-br/contos/${post.slug}`} />)}
          </div>
        </section>
      )}

      <Divider />

      {alucinacoes.length > 0 && (
        <section className="max-w-layout mx-auto px-6 py-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-warm-text dark:text-dark-text">Alucinações</h2>
            <Link href="/pt-br/alucinacoes" className="font-sans text-sm px-3 py-1.5 rounded bg-warm-accent dark:bg-dark-accent text-warm-bg dark:text-dark-bg hover:bg-warm-text dark:hover:bg-dark-text dark:hover:text-dark-bg hover:scale-105 transition-all duration-150 ease-out">
              Ver todos →
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {alucinacoes.map(post => <PostCard key={post.slug} {...post} locale="pt-br" href={`/pt-br/alucinacoes/${post.slug}`} />)}
          </div>
        </section>
      )}

      <Divider />

      <NewsletterForm locale="pt-br" />
    </div>
  )
}
