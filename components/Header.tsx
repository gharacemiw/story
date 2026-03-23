'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from './ThemeProvider'
import { Moon, Sun } from 'lucide-react'
import { t, type Locale } from '@/lib/i18n'

const routeMap: Record<string, string> = {
  contos: 'stories', poemas: 'poems', alucinacoes: 'hallucinations', sobre: 'about',
  stories: 'contos', poems: 'poemas', hallucinations: 'alucinacoes', about: 'sobre',
}

function getAlternatePath(pathname: string, currentLocale: Locale, targetLocale: Locale): string {
  const segments = pathname.split('/')
  segments[1] = targetLocale
  if (segments[2]) segments[2] = routeMap[segments[2]] ?? segments[2]
  // On a post page (slug present), redirect to the category instead
  if (segments[3]) segments.splice(3)
  return segments.join('/')
}

export default function Header({ locale }: { locale: Locale }) {
  const { theme, toggle } = useTheme()
  const tr = t(locale)
  const base = `/${locale}`
  const pathname = usePathname()
  const alternatePath = getAlternatePath(pathname, locale, tr.switchToLocale)

  return (
    <header className="sticky top-0 z-50 bg-warm-text dark:bg-dark-surface relative">
      {/* Masthead */}
      <div className="max-w-layout mx-auto px-6 pt-4 pb-3 flex items-center justify-center">
        <Link
          href={base}
          className="font-serif font-bold text-base md:text-lg tracking-wide text-warm-bg dark:text-dark-text hover:opacity-70 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        >
          Gustavo Haracemiw
        </Link>
      </div>

      {/* Nav bar */}
      <nav className="max-w-layout mx-auto px-6 pb-3 flex items-center justify-center gap-7">
        <Link href={base} className="font-sans text-xs tracking-widest uppercase text-warm-bg/50 dark:text-dark-muted hover:text-warm-bg dark:hover:text-dark-text transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {tr.navHome}
        </Link>
        <Link href={`${base}/${tr.routePoems}`} className="font-sans text-xs tracking-widest uppercase text-warm-bg/50 dark:text-dark-muted hover:text-warm-bg dark:hover:text-dark-text transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {tr.navPoems}
        </Link>
        <Link href={`${base}/${tr.routeStories}`} className="font-sans text-xs tracking-widest uppercase text-warm-bg/50 dark:text-dark-muted hover:text-warm-bg dark:hover:text-dark-text transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {tr.navStories}
        </Link>
        <Link href={`${base}/${tr.routeHallucinations}`} className="font-sans text-xs tracking-widest uppercase text-warm-bg/50 dark:text-dark-muted hover:text-warm-bg dark:hover:text-dark-text transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {tr.navHallucinations}
        </Link>
<Link href={`${base}/${tr.routeAbout}`} className="font-sans text-xs tracking-widest uppercase text-warm-bg/50 dark:text-dark-muted hover:text-warm-bg dark:hover:text-dark-text transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {tr.navAbout}
        </Link>
      </nav>

      {/* Controls: language switcher + theme toggle */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-3">
        <Link
          href={alternatePath}
          className="font-sans text-xs tracking-widest text-warm-bg/50 dark:text-dark-muted hover:text-warm-bg dark:hover:text-dark-text transition-colors duration-300"
        >
          {tr.switchTo}
        </Link>
        <button
          onClick={toggle}
          className="p-1 text-warm-bg/50 dark:text-dark-muted hover:text-warm-bg dark:hover:text-dark-text transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          aria-label="Alternar tema"
        >
          {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
        </button>
      </div>
    </header>
  )
}
