import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { default: 'Gustavo Haracemiw — Independent Fiction', template: '%s | Gustavo Haracemiw' },
  description: 'Stories, poems, and more by Gustavo Haracemiw.',
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header locale="en" />
      <main className="flex-1">{children}</main>
      <Footer locale="en" />
    </>
  )
}
