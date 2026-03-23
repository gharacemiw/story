import { t, type Locale } from '@/lib/i18n'

export default function Footer({ locale }: { locale: Locale }) {
  const tr = t(locale)
  return (
    <footer className="mt-8">
      <div className="max-w-layout mx-auto px-6 py-14 flex flex-col items-center gap-4 text-center">
        <p className="font-serif text-xl text-warm-muted dark:text-dark-muted italic">{tr.footerQuote}</p>
        <p className="text-xs text-warm-muted dark:text-dark-muted">© {new Date().getFullYear()} Gustavo Haracemiw</p>
      </div>
    </footer>
  )
}
