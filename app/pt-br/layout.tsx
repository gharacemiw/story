import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { default: 'Gustavo Haracemiw — Ficção Independente', template: '%s | Gustavo Haracemiw' },
  description: 'Contos, poemas e mais de Gustavo Haracemiw.',
}

export default function PtBrLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header locale="pt-br" />
      <main className="flex-1">{children}</main>
      <Footer locale="pt-br" />
    </>
  )
}
