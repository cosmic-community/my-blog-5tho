// app/posts/[slug]/page.tsx
import { getPostBySlug, getMetafieldValue, normalizeTags } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import TagList from '@/components/TagList'

export const revalidate = 60

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const title = getMetafieldValue(post.metadata?.title) || post.title
  const content = getMetafieldValue(post.metadata?.content) || post.content || ''
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const category = post.metadata?.category
  const tags = normalizeTags(post.metadata?.tags)

  return (
    <article className="pb-16">
      {/* Header */}
      <header className="max-w-3xl mx-auto px-6 pt-12 text-center">
        {category && (
          <Link
            href={`/categories/${category.slug}`}
            className="inline-block text-sm font-semibold uppercase tracking-wider text-accent hover:text-accent-hover mb-4"
          >
            {getMetafieldValue(category.metadata?.name) || category.title}
          </Link>
        )}
        <h1 className="font-serif text-4xl md:text-5xl font-black text-ink leading-tight">
          {title}
        </h1>
        {author && (
          <Link
            href={`/authors/${author.slug}`}
            className="inline-flex items-center gap-3 mt-6 group"
          >
            {author.metadata?.profile_photo ? (
              <img
                src={`${author.metadata.profile_photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                alt={getMetafieldValue(author.metadata?.name) || author.title}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <span className="w-12 h-12 rounded-full bg-ink/5 flex items-center justify-center text-lg">
                👤
              </span>
            )}
            <span className="text-ink-light group-hover:text-accent transition-colors">
              By {getMetafieldValue(author.metadata?.name) || author.title}
            </span>
          </Link>
        )}
      </header>

      {/* Featured image */}
      {featuredImage && (
        <div className="max-w-4xl mx-auto px-6 my-10">
          <img
            src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={title}
            width={1600}
            height={900}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6">
        <div
          className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-ink prose-a:text-accent"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-ink/10">
            <TagList tags={tags} />
          </div>
        )}

        <div className="mt-12">
          <Link href="/" className="text-accent hover:text-accent-hover font-medium">
            ← Back to all posts
          </Link>
        </div>
      </div>
    </article>
  )
}