'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with Buttondown/Mailchimp
    if (email) {
      setStatus('success')
      setEmail('')
    }
  }

  return (
    <section className="py-10">
      <div className="max-w-layout mx-auto px-6 flex items-center gap-10">
        <Image
          src="/mensageiro.png"
          alt="Mensageiro"
          width={400}
          height={400}
          quality={100}
          className="w-36 md:w-44 hidden sm:block"
        />
        <div className="flex-1">
          <h2 className="font-serif font-bold text-2xl md:text-3xl mb-3">Saiba quando uma nova história é publicada</h2>
          <p className="text-warm-muted dark:text-dark-muted text-lg mb-6">Sem frequência fixa. Só quando há algo novo para contar.</p>
          {status === 'success' ? (
            <p className="text-warm-accent dark:text-dark-accent font-sans">Ótimo! Você será avisado nas próximas publicações.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="flex-1 px-4 py-2.5 rounded-md border border-warm-border dark:border-dark-border bg-white dark:bg-dark-surface text-warm-text dark:text-dark-text placeholder-warm-muted dark:placeholder-dark-muted font-sans text-sm focus:outline-none focus:border-warm-accent dark:focus:border-dark-accent transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-warm-text dark:bg-dark-text text-warm-bg dark:text-dark-bg rounded-md font-sans text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Inscrever
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
