// app/authors/[slug]/page.tsx
import { getAuthorBySlug, getPostsByAuthor, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

export const revalidate = 60

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id)
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const bio = getMetafieldValue(author.metadata?.bio)
  const photo = author.metadata?.profile_photo

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="flex flex-col items-center text-center mb-14">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=280&h=280&fit=crop&auto=format,compress`}
            alt={name}
            width={140}
            height={140}
            className="w-32 h-32 rounded-full object-cover mb-6"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-ink/5 flex items-center justify-center mb-6 text-4xl">
            👤
          </div>
        )}
        <h1 className="font-serif text-4xl md:text-5xl font-black text-ink">{name}</h1>
        {bio && <p className="text-ink-light mt-4 max-w-2xl">{bio}</p>}
      </header>

      <section>
        <h2 className="font-serif text-2xl font-bold text-ink mb-8 border-b border-ink/10 pb-4">
          Posts by {name}
        </h2>
        {posts.length === 0 ? (
          <p className="text-ink-light">No posts by this author yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>

      <div className="mt-12">
        <Link href="/authors" className="text-accent hover:text-accent-hover font-medium">
          ← All authors
        </Link>
      </div>
    </div>
  )
}