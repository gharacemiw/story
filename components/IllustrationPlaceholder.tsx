interface IllustrationPlaceholderProps {
  className?: string
  label?: string
}

export default function IllustrationPlaceholder({ className = '', label = 'ilustração' }: IllustrationPlaceholderProps) {
  return (
    <div
      className={`rounded-2xl border border-dashed border-warm-border dark:border-dark-border bg-warm-card dark:bg-dark-surface flex items-center justify-center shrink-0 ${className}`}
    >
      <span className="font-sans text-xs text-warm-muted dark:text-dark-muted opacity-50 select-none">
        {label}
      </span>
    </div>
  )
}
