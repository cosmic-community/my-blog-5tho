import Link from 'next/link'
import { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  if (!category) return null

  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group block p-6 rounded-xl border border-ink/10 hover:border-accent/40 hover:shadow-lg transition-all bg-white"
    >
      <span className="text-2xl">🏷️</span>
      <h3 className="font-serif text-xl font-bold text-ink mt-3 group-hover:text-accent transition-colors">
        {name}
      </h3>
      {description && <p className="text-sm text-ink-light mt-2 line-clamp-3">{description}</p>}
    </Link>
  )
}