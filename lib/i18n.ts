export type Locale = 'pt-br' | 'en'

export const locales: Locale[] = ['pt-br', 'en']

export const translations = {
  'pt-br': {
    locale: 'pt-br' as Locale,
    lang: 'pt-BR',
    // Tagline
    tagline: 'Ficção Independente',
    // Nav
    navHome: 'Início',
    navStories: 'Contos',
    navPoems: 'Poemas',
    navHallucinations: 'Alucinações',
    navAbout: 'Sobre',
    // Routes
    routeStories: 'contos',
    routePoems: 'poemas',
    routeHallucinations: 'alucinacoes',
    routeAbout: 'sobre',
    // Category labels
    categoryLabels: { contos: 'Contos', poemas: 'Poemas', alucinacoes: 'Alucinações' } as Record<string, string>,
    // Post page
    readingTime: (min: number) => `${min} min de leitura`,
    prev: 'Anterior',
    next: 'Próximo',
    endReached: 'Você chegou ao fim',
    backToHome: '← Voltar ao início',
    // Category pages
    textsPublished: (n: number) => `${n} ${n === 1 ? 'texto publicado' : 'textos publicados'}`,
    comingSoon: 'Em breve.',
    viewAll: 'Ver todos →',
    // Newsletter
    newsletterTitle: 'Saiba quando uma nova história é publicada',
    newsletterSubtitle: 'Sem frequência fixa. Só quando há algo novo para contar.',
    newsletterComingSoon: '(newsletter em breve)',
    // About
    aboutTitle: 'Sobre',
    aboutBio: [
      'Gustavo Haracemiw é um contador de histórias de Cuiabá, Brasil. Mudou-se para Vancouver em 2022, para estudar animação 2D. Suas experiências neste período moldaram boa parte dos textos que você vê aqui hoje.',
    ],
    contactTitle: 'Contato',
    // PostCard
    readCta: 'Ler →',
    // Footer
    footerQuote: '"Amar a estória."',
    // Language switcher
    switchTo: 'EN',
    switchToLocale: 'en' as Locale,
  },
  en: {
    locale: 'en' as Locale,
    lang: 'en',
    // Tagline
    tagline: 'Independent Fiction',
    // Nav
    navHome: 'Home',
    navStories: 'Short Stories',
    navPoems: 'Poems',
    navHallucinations: 'Hallucinations',
    navAbout: 'About',
    // Routes
    routeStories: 'stories',
    routePoems: 'poems',
    routeHallucinations: 'hallucinations',
    routeAbout: 'about',
    // Category labels
    categoryLabels: { stories: 'Short Stories', poems: 'Poems', hallucinations: 'Hallucinations' } as Record<string, string>,
    // Post page
    readingTime: (min: number) => `${min} min read`,
    prev: 'Previous',
    next: 'Next',
    endReached: "You've reached the end",
    backToHome: '← Back to home',
    // Category pages
    textsPublished: (n: number) => `${n} ${n === 1 ? 'text published' : 'texts published'}`,
    comingSoon: 'Coming soon.',
    viewAll: 'View all →',
    // Newsletter
    newsletterTitle: 'Stay updated on new stories',
    newsletterSubtitle: 'No fixed schedule. Only when there is something new to tell.',
    newsletterComingSoon: '(newsletter coming soon)',
    // About
    aboutTitle: 'About',
    aboutBio: [
      'Gustavo Haracemiw is a storyteller from Cuiabá, Brazil. He moved to Vancouver in 2022 to study 2D animation. His experiences during that period shaped much of the writing you see here today.',
    ],
    contactTitle: 'Contact',
    // PostCard
    readCta: 'Read →',
    // Footer
    footerQuote: '"To love the tale."',
    // Language switcher
    switchTo: 'PT-BR',
    switchToLocale: 'pt-br' as Locale,
  },
} as const

export type T = typeof translations['pt-br']
export const t = (locale: Locale) => translations[locale]
