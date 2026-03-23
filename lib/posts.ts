import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkBreaks from 'remark-breaks'
import readingTime from 'reading-time'
import type { Locale } from './i18n'

export type { Locale }

export interface Post {
  slug: string
  title: string
  date: string
  category: string
  locale: Locale
  excerpt: string
  preview: string
  readingTime: string
  content?: string
}

function extractPreview(markdown: string, maxChars = 260): string {
  const plain = markdown
    .replace(/^#+\s.*/gm, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    .replace(/^[-*]\s/gm, '')
    .trim()

  const firstPara = plain.split(/\n\n+/).find(p => p.trim().length > 20) || plain
  const text = firstPara.replace(/\n/g, ' ').trim()

  if (text.length <= maxChars) return text
  const cut = text.lastIndexOf(' ', maxChars)
  return text.slice(0, cut > 0 ? cut : maxChars) + '…'
}

const contentDir = path.join(process.cwd(), 'content')

export function getPostsByCategory(locale: Locale, category: string): Post[] {
  const dir = path.join(contentDir, locale, category)
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))

  const posts = files.map(filename => {
    const slug = filename.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(dir, filename), 'utf8')
    const { data, content } = matter(raw)
    const stats = readingTime(content)
    return {
      slug,
      title: stripYear(data.title),
      date: data.date,
      category,
      locale,
      excerpt: data.excerpt || '',
      preview: extractPreview(content),
      readingTime: `${Math.ceil(stats.minutes)}`,
    }
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

function stripYear(title: string): string {
  return title.replace(/\s*\(\d{4}\)\s*$/, '').trim()
}

export async function getPost(locale: Locale, category: string, slug: string): Promise<Post | null> {
  const filepath = path.join(contentDir, locale, category, `${slug}.md`)
  if (!fs.existsSync(filepath)) return null

  const raw = fs.readFileSync(filepath, 'utf8')
  const { data, content } = matter(raw)
  const stats = readingTime(content)
  const processed = await remark().use(remarkBreaks).use(html, { allowDangerousHtml: true }).process(content)

  return {
    slug,
    title: stripYear(data.title),
    date: data.date,
    category,
    locale,
    excerpt: data.excerpt || '',
    preview: extractPreview(content),
    readingTime: `${Math.ceil(stats.minutes)}`,
    content: processed.toString(),
  }
}

export function getAllPosts(locale: Locale): Post[] {
  const categories = locale === 'pt-br'
    ? ['contos', 'poemas', 'alucinacoes']
    : ['stories', 'poems', 'hallucinations']
  return categories.flatMap(cat => getPostsByCategory(locale, cat))
}
