import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Sobre' }

export default function SobrePage() {
  return (
    <div>
      <div className="max-w-layout mx-auto px-6 pt-8 md:pt-12">
        <Image src="/bio.png" alt="Ilustração do autor" width={864} height={683} quality={100} className="w-[85%] md:w-[50%] mx-auto mb-2" />
      </div>
      <div className="max-w-reading mx-auto px-6 py-4 md:py-6">
      <header className="mb-6 pb-4">
        <h1 className="font-sans font-semibold text-3xl md:text-4xl tracking-tight">Sobre</h1>
      </header>
      <div className="prose-reading text-warm-text dark:text-dark-text">
        <p>Gustavo Haracemiw é escritor e contador de histórias de Cuiabá, Mato Grosso. Em 2022, mudou-se para Vancouver para estudar animação 2D. O que encontrou pelo caminho acabou virando matéria-prima para a escrita (boa parte dos textos que você encontra aqui nasceu dessa travessia).</p>
        <p>Atualmente, Gustavo pesquisa e desenvolve histórias de fantasia, explorando lendas, folclores e narrativas fantásticas do Cerrado brasileiro.</p>
        <p>Sua produção visual pode ser vista em <a href="https://artstation.com/haracemiw" target="_blank" rel="noopener noreferrer" className="text-warm-accent dark:text-dark-accent underline underline-offset-4 hover:opacity-70 transition-opacity">artstation.com/haracemiw</a>.</p>
      </div>
      <div className="mt-12 pt-8">
        <h2 className="font-sans font-semibold text-lg mb-4">Contato</h2>
        <a href="mailto:gharacemiw@gmail.com" className="font-sans text-warm-accent dark:text-dark-accent hover:opacity-70 transition-opacity">
          gharacemiw@gmail.com
        </a>
      </div>
      </div>
    </div>
  )
}
