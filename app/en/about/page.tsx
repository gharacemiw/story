import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <div>
      <div className="max-w-layout mx-auto px-6 pt-8 md:pt-12">
        <Image src="/bio.png" alt="Author illustration" width={864} height={683} quality={100} className="w-[50%] mx-auto mb-2" />
      </div>
      <div className="max-w-reading mx-auto px-6 py-4 md:py-6">
        <header className="mb-6 pb-4">
          <h1 className="font-sans font-semibold text-3xl md:text-4xl tracking-tight">About</h1>
        </header>
        <div className="prose-reading text-warm-text dark:text-dark-text">
          <p>Gustavo Haracemiw is a writer and storyteller from Cuiabá, Brazil. In 2022, he moved to Vancouver to study 2D animation. What he found along the way became raw material for his writing (much of the work you'll find here was born from that crossing).</p>
        <p>He is currently researching and developing fantasy stories, drawing from the legends, folklore, and mythic traditions of the Brazilian Cerrado.</p>
        <p>His visual production can be seen at <a href="https://artstation.com/haracemiw" target="_blank" rel="noopener noreferrer" className="text-warm-accent dark:text-dark-accent underline underline-offset-4 hover:opacity-70 transition-opacity">artstation.com/haracemiw</a>.</p>
        </div>
        <div className="mt-12 pt-8">
          <h2 className="font-sans font-semibold text-lg mb-4">Contact</h2>
          <a href="mailto:gharacemiw@gmail.com" className="font-sans text-warm-accent dark:text-dark-accent hover:opacity-70 transition-opacity">
            gharacemiw@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
