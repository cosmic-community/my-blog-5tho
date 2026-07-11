import { getAllCategories } from '@/lib/cosmic'
import CategoryCard from '@/components/CategoryCard'

export const revalidate = 60

export default async function CategoriesPage() {
  const categories = await getAllCategories()

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="text-center mb-12">
        <span className="text-4xl">🏷️</span>
        <h1 className="font-serif text-4xl md:text-5xl font-black text-ink mt-4">Categories</h1>
        <p className="text-ink-light mt-3 max-w-xl mx-auto">
          Explore posts organized by topic.
        </p>
      </header>

      {categories.length === 0 ? (
        <p className="text-center text-ink-light">No categories found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  )
}