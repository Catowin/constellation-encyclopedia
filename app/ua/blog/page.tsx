import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function UaBlogPage() {
  const posts = getAllPosts('uk')

  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem' }}>
      <h1>Блог</h1>
      {posts.length === 0 && <p>Постів поки немає.</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map(post => (
          <li key={post.slug} style={{ marginBottom: '2rem' }}>
            <Link href={`/ua/blog/${post.slug}`}>
              <h2 style={{ marginBottom: '0.25rem' }}>{post.title}</h2>
            </Link>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>{post.date}</p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}