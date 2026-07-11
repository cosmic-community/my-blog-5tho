import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-ink/10 bg-paper/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">📝</span>
          <span className="font-serif text-2xl font-bold text-ink tracking-tight group-hover:text-accent transition-colors">
            My Blog
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-ink-light hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/authors" className="text-ink-light hover:text-accent transition-colors">
            Authors
          </Link>
          <Link href="/categories" className="text-ink-light hover:text-accent transition-colors">
            Categories
          </Link>
        </nav>
      </div>
    </header>
  )
}