'use client'
import { useState } from 'react'
import Image from 'next/image'
import { t, type Locale } from '@/lib/i18n'

export default function NewsletterForm({ locale }: { locale: Locale }) {
  const tr = t(locale)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
          <h2 className="font-serif font-bold text-2xl md:text-3xl mb-3">{tr.newsletterTitle}</h2>
          <p className="text-warm-muted dark:text-dark-muted text-lg mb-6">{tr.newsletterSubtitle}</p>
          <p className="font-sans text-sm text-warm-muted dark:text-dark-muted italic font-bold">{tr.newsletterComingSoon}</p>
        </div>
      </div>
    </section>
  )
}
