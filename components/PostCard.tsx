import Link from 'next/link'
import type { Locale } from '@/lib/i18n'

interface PostCardProps {
  title: string
  date: string
  readingTime: string
  preview?: string
  href: string
  locale: Locale
  showPreview?: boolean
}

export default function PostCard({ title, date, readingTime, preview, href, locale, showPreview = false }: PostCardProps) {
  const formatted = new Date(date + 'T12:00:00').toLocaleDateString(
    locale === 'pt-br' ? 'pt-BR' : 'en-US',
    { day: '2-digit', month: 'long', year: 'numeric' }
  )
  const readCta = locale === 'pt-br' ? 'Ler →' : 'Read →'
  const readingLabel = locale === 'pt-br' ? `${readingTime} min de leitura` : `${readingTime} min read`

  return (
    <Link href={href} className="group block">
      <article className="bg-warm-card dark:bg-dark-surface px-5 py-5 rounded-lg transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.015]">
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-2xl font-bold leading-snug">
            {title}
          </h3>

          {showPreview && preview && (
            <p className="font-serif text-lg leading-relaxed text-warm-muted dark:text-dark-muted line-clamp-3">
              {preview}
            </p>
          )}

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2 text-sm font-sans text-warm-muted dark:text-dark-muted">
              <time dateTime={date}>{formatted}</time>
              <span>·</span>
              <span>{readingLabel}</span>
            </div>
            <span className="text-sm font-sans text-warm-accent dark:text-dark-accent">
              {readCta}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
