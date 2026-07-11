import { getAllAuthors } from '@/lib/cosmic'
import AuthorCard from '@/components/AuthorCard'

export const revalidate = 60

export default async function AuthorsPage() {
  const authors = await getAllAuthors()

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="text-center mb-12">
        <span className="text-4xl">👤</span>
        <h1 className="font-serif text-4xl md:text-5xl font-black text-ink mt-4">Authors</h1>
        <p className="text-ink-light mt-3 max-w-xl mx-auto">
          The talented writers who bring our stories to life.
        </p>
      </header>

      {authors.length === 0 ? (
        <p className="text-center text-ink-light">No authors found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      )}
    </div>
  )
}