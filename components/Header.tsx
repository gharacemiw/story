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

const navLinkClass = "font-sans text-xs tracking-wide md:tracking-widest uppercase text-warm-bg/50 dark:text-dark-muted hover:text-warm-bg dark:hover:text-dark-text transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] py-1.5"

export default function Header({ locale }: { locale: Locale }) {
  const { theme, toggle } = useTheme()
  const tr = t(locale)
  const base = `/${locale}`
  const pathname = usePathname()
  const alternatePath = getAlternatePath(pathname, locale, tr.switchToLocale)

  return (
    <header className="sticky top-0 z-50 bg-warm-text dark:bg-dark-surface">
      {/* Masthead: spacer | name | controls */}
      <div className="max-w-layout mx-auto px-6 pt-4 pb-3 flex items-center">
        <div className="flex-1" />
        <Link
          href={base}
          className="font-serif font-bold text-base md:text-lg tracking-wide text-warm-bg dark:text-dark-text hover:opacity-70 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        >
          Gustavo Haracemiw
        </Link>
        <div className="flex-1 flex items-center justify-end gap-1">
          <Link
            href={alternatePath}
            className="font-sans text-xs tracking-widest text-warm-bg/50 dark:text-dark-muted hover:text-warm-bg dark:hover:text-dark-text transition-colors duration-300 px-2 py-2"
          >
            {tr.switchTo}
          </Link>
          <button
            onClick={toggle}
            className="p-2 text-warm-bg/50 dark:text-dark-muted hover:text-warm-bg dark:hover:text-dark-text transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="max-w-layout mx-auto px-6 pb-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 md:gap-x-7">
        <Link href={base} className={navLinkClass}>
          {tr.navHome}
        </Link>
        <Link href={`${base}/${tr.routePoems}`} className={navLinkClass}>
          {tr.navPoems}
        </Link>
        <Link href={`${base}/${tr.routeStories}`} className={navLinkClass}>
          {tr.navStories}
        </Link>
        <Link href={`${base}/${tr.routeHallucinations}`} className={navLinkClass}>
          {tr.navHallucinations}
        </Link>
        <Link href={`${base}/${tr.routeAbout}`} className={navLinkClass}>
          {tr.navAbout}
        </Link>
      </nav>
    </header>
  )
}
