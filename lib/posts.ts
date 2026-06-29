import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content')

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  contentHtml: string
}

// Отримати список всіх постів для певної мови ('uk' або 'en')
export function getAllPosts(lang: 'uk' | 'en'): Omit<Post, 'contentHtml'>[] {
  const dir = path.join(contentDirectory, lang)

  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))

  return files
    .map(filename => {
      const slug = filename.replace('.md', '')
      const fullPath = path.join(dir, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title ?? '',
        date: data.date ?? '',
        excerpt: data.excerpt ?? '',
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

// Отримати один пост по slug
export async function getPostBySlug(slug: string, lang: 'uk' | 'en'): Promise<Post | null> {
  const fullPath = path.join(contentDirectory, lang, `${slug}.md`)

  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processed = await remark().use(html).process(content)
  const contentHtml = processed.toString()

  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    contentHtml,
  }
}