import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts('uk')
  return posts.map(post => ({ slug: post.slug }))
}

export default async function UaPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug, 'uk')

  if (!post) notFound()

  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem' }}>
      <h1>{post.title}</h1>
      <p style={{ color: '#888', fontSize: '0.9rem' }}>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </main>
  )
}