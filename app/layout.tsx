import type { Metadata } from 'next'
import { Literata, Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const literata = Literata({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-literata',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Gustavo Haracemiw',
    template: '%s | Gustavo Haracemiw',
  },
  description: 'Independent fiction by Gustavo Haracemiw — stories, poems, and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className={`${literata.variable} ${outfit.variable} bg-warm-bg dark:bg-dark-bg text-warm-text dark:text-dark-text transition-colors duration-300 flex flex-col min-h-screen`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
