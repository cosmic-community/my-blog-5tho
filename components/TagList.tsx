interface TagListProps {
  tags: string[]
}

export default function TagList({ tags }: TagListProps) {
  if (!tags || tags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-ink/5 text-ink-light"
        >
          #{tag}
        </span>
      ))}
    </div>
  )
}