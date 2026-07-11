// app/categories/[slug]/page.tsx
import { getCategoryBySlug, getPostsByCategory, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

export const revalidate = 60

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="text-center mb-14">
        <span className="text-4xl">🏷️</span>
        <h1 className="font-serif text-4xl md:text-5xl font-black text-ink mt-4">{name}</h1>
        {description && <p className="text-ink-light mt-4 max-w-2xl mx-auto">{description}</p>}
      </header>

      <section>
        {posts.length === 0 ? (
          <p className="text-center text-ink-light">No posts in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>

      <div className="mt-12 text-center">
        <Link href="/categories" className="text-accent hover:text-accent-hover font-medium">
          ← All categories
        </Link>
      </div>
    </div>
  )
}