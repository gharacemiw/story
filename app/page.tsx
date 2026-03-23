import Link from 'next/link'
import type { Metadata } from 'next'
import ThemeToggleButton from '@/components/ThemeToggleButton'

export const metadata: Metadata = { title: 'Gustavo Haracemiw' }

export default function LanguageSelectionPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-12 px-6">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <ThemeToggleButton size={32} className="p-3" />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-6">
          Gustavo<br />Haracemiw
        </h1>
        <div className="flex items-center justify-center gap-4 mb-1">
          <span className="h-px w-12 bg-warm-border dark:bg-dark-border" />
          <span className="font-sans text-xs uppercase tracking-widest text-warm-muted dark:text-dark-muted">
            Ficção Independente · Independent Fiction
          </span>
          <span className="h-px w-12 bg-warm-border dark:bg-dark-border" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch gap-4">
        <Link
          href="/pt-br"
          className="group w-48 h-32 flex items-center justify-center bg-warm-card dark:bg-dark-surface border border-warm-border dark:border-dark-border rounded-lg transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-[4px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] hover:border-warm-accent/50 dark:hover:border-dark-accent/50 text-center"
        >
          <span className="font-serif text-xl font-bold text-warm-text dark:text-dark-text leading-tight">
            Português<br />Brasileiro
          </span>
        </Link>

        <Link
          href="/en"
          className="group w-48 h-32 flex items-center justify-center bg-warm-card dark:bg-dark-surface border border-warm-border dark:border-dark-border rounded-lg transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-[4px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] hover:border-warm-accent/50 dark:hover:border-dark-accent/50 text-center"
        >
          <span className="font-serif text-xl font-bold text-warm-text dark:text-dark-text">
            English
          </span>
        </Link>
      </div>
    </main>
  )
}
