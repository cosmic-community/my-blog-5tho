import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <span className="text-6xl">🔍</span>
      <h1 className="font-serif text-4xl font-black text-ink mt-6">Page Not Found</h1>
      <p className="text-ink-light mt-4">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <Link
        href="/"
        className="inline-block mt-8 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}