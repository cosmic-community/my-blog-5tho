import { getAllPosts } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

export const revalidate = 60

export default async function HomePage() {
  const posts = await getAllPosts()

  const featuredPost = posts[0]
  const restPosts = posts.slice(1)

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
          Welcome to
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-black text-ink leading-none">
          My Blog
        </h1>
        <p className="text-lg text-ink-light mt-6 max-w-2xl mx-auto">
          Stories, ideas, and inspiration from a community of creative writers.
        </p>
      </section>

      {posts.length === 0 ? (
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-ink-light">No posts published yet. Check back soon!</p>
        </section>
      ) : (
        <div className="max-w-6xl mx-auto px-6 pb-16">
          {featuredPost && (
            <section className="mb-16">
              <PostCard post={featuredPost} featured />
            </section>
          )}

          {restPosts.length > 0 && (
            <section>
              <h2 className="font-serif text-2xl font-bold text-ink mb-8 border-b border-ink/10 pb-4">
                Latest Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {restPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {/* Explore links */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/authors"
            className="group p-8 rounded-xl bg-ink text-paper hover:bg-ink-light transition-colors"
          >
            <span className="text-3xl">👤</span>
            <h3 className="font-serif text-2xl font-bold mt-3">Meet the Authors</h3>
            <p className="text-paper/70 mt-2">Discover the writers behind our stories.</p>
          </Link>
          <Link
            href="/categories"
            className="group p-8 rounded-xl bg-accent text-white hover:bg-accent-hover transition-colors"
          >
            <span className="text-3xl">🏷️</span>
            <h3 className="font-serif text-2xl font-bold mt-3">Browse Categories</h3>
            <p className="text-white/80 mt-2">Explore topics that interest you.</p>
          </Link>
        </div>
      </section>
    </div>
  )
}