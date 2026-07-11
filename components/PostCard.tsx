import Link from 'next/link'
import { Post } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface PostCardProps {
  post: Post
  featured?: boolean
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  if (!post) return null

  const title = getMetafieldValue(post.metadata?.title) || post.title
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const category = post.metadata?.category

  const imageSize = featured ? 'w=1200&h=675' : 'w=800&h=500'

  return (
    <article className="group">
      <Link href={`/posts/${post.slug}`} className="block">
        {featuredImage && (
          <div className={`overflow-hidden rounded-xl mb-4 ${featured ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
            <img
              src={`${featuredImage.imgix_url}?${imageSize}&fit=crop&auto=format,compress`}
              alt={title}
              width={featured ? 1200 : 800}
              height={featured ? 675 : 500}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div>
          {category && (
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              {getMetafieldValue(category.metadata?.name) || category.title}
            </span>
          )}
          <h3
            className={`font-serif font-bold text-ink group-hover:text-accent transition-colors leading-tight ${
              featured ? 'text-3xl md:text-4xl' : 'text-xl'
            }`}
          >
            {title}
          </h3>
          {author && (
            <p className="text-sm text-ink-light mt-3">
              By {getMetafieldValue(author.metadata?.name) || author.title}
            </p>
          )}
        </div>
      </Link>
    </article>
  )
}