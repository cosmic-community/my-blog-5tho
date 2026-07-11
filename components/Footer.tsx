export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-ink/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-xl font-bold text-ink">📝 My Blog</p>
        <p className="text-sm text-ink-light">
          © {year} My Blog. Crafted with care.
        </p>
      </div>
    </footer>
  )
}