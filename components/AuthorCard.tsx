import Link from 'next/link'
import { Author } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface AuthorCardProps {
  author: Author
}

export default function AuthorCard({ author }: AuthorCardProps) {
  if (!author) return null

  const name = getMetafieldValue(author.metadata?.name) || author.title
  const bio = getMetafieldValue(author.metadata?.bio)
  const photo = author.metadata?.profile_photo

  return (
    <Link
      href={`/authors/${author.slug}`}
      className="group flex flex-col items-center text-center p-6 rounded-xl border border-ink/10 hover:border-accent/40 hover:shadow-lg transition-all bg-white"
    >
      {photo ? (
        <img
          src={`${photo.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
          alt={name}
          width={120}
          height={120}
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-ink/5 flex items-center justify-center mb-4 text-3xl">
          👤
        </div>
      )}
      <h3 className="font-serif text-lg font-bold text-ink group-hover:text-accent transition-colors">
        {name}
      </h3>
      {bio && <p className="text-sm text-ink-light mt-2 line-clamp-3">{bio}</p>}
    </Link>
  )
}