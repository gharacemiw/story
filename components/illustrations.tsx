// Spot illustrations in editorial line-art style

export function IllustrationQuill({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* Feather body */}
      <path d="M52 6 C44 14 28 28 14 58" />
      <path d="M52 6 C58 18 50 36 14 58" />
      {/* Barbs left */}
      <path d="M46 14 C40 20 32 24 22 34" />
      <path d="M40 21 C35 27 28 30 20 40" />
      <path d="M34 29 C30 34 25 36 18 46" />
      {/* Barbs right */}
      <path d="M50 18 C47 22 43 25 38 30" />
      <path d="M46 26 C43 30 40 32 36 37" />
      <path d="M41 34 C39 37 37 39 33 43" />
      {/* Quill nib */}
      <path d="M14 58 L10 63 L16 61 Z" />
      <path d="M14 58 L14 63" />
    </svg>
  )
}

export function IllustrationBook({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* Left page */}
      <path d="M36 8 C28 6 16 6 8 9 L8 42 C16 39 28 39 36 42 Z" />
      {/* Right page */}
      <path d="M36 8 C44 6 56 6 64 9 L64 42 C56 39 44 39 36 42 Z" />
      {/* Spine */}
      <line x1="36" y1="8" x2="36" y2="42" />
      {/* Left page lines */}
      <line x1="14" y1="16" x2="30" y2="15" />
      <line x1="14" y1="21" x2="30" y2="20" />
      <line x1="14" y1="26" x2="30" y2="25" />
      <line x1="14" y1="31" x2="28" y2="30" />
      {/* Right page lines */}
      <line x1="42" y1="15" x2="58" y2="16" />
      <line x1="42" y1="20" x2="58" y2="21" />
      <line x1="42" y1="25" x2="58" y2="26" />
      <line x1="42" y1="30" x2="56" y2="31" />
    </svg>
  )
}

export function IllustrationMoon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* Crescent */}
      <path d="M32 8 A18 18 0 1 0 32 48 A12 12 0 1 1 32 8 Z" />
      {/* Stars */}
      <line x1="44" y1="10" x2="44" y2="14" />
      <line x1="42" y1="12" x2="46" y2="12" />
      <line x1="50" y1="22" x2="50" y2="25" />
      <line x1="48.5" y1="23.5" x2="51.5" y2="23.5" />
      <line x1="46" y1="36" x2="46" y2="39" />
      <line x1="44.5" y1="37.5" x2="47.5" y2="37.5" />
    </svg>
  )
}

export function IllustrationCup({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* Steam */}
      <path d="M20 12 C20 8 24 8 24 4" />
      <path d="M28 12 C28 8 32 8 32 4" />
      <path d="M36 12 C36 8 40 8 40 4" />
      {/* Cup body */}
      <path d="M14 18 L18 46 L42 46 L46 18 Z" />
      {/* Handle */}
      <path d="M46 24 C54 24 54 38 46 38" />
      {/* Saucer */}
      <path d="M10 50 Q30 54 50 50" />
      <line x1="10" y1="50" x2="50" y2="50" />
    </svg>
  )
}

export function IllustrationPen({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* Pen barrel */}
      <rect x="16" y="4" width="16" height="36" rx="4" />
      {/* Clip */}
      <path d="M32 8 C38 8 38 28 32 32" />
      {/* Nib section */}
      <path d="M16 40 L12 56 L24 52 L36 56 L32 40" />
      {/* Nib tip */}
      <path d="M12 56 L24 48 L36 56" />
      <line x1="24" y1="48" x2="24" y2="56" />
      {/* Band */}
      <line x1="16" y1="36" x2="32" y2="36" />
    </svg>
  )
}

export function IllustrationOrnament({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* Left branch */}
      <path d="M4 12 C12 12 16 6 24 12" />
      <path d="M4 12 C12 12 16 18 24 12" />
      {/* Right branch */}
      <path d="M56 12 C64 12 68 6 76 12" />
      <path d="M56 12 C64 12 68 18 76 12" />
      {/* Center diamond */}
      <path d="M36 6 L42 12 L36 18 L30 12 Z" />
      {/* Connecting lines */}
      <line x1="24" y1="12" x2="30" y2="12" />
      <line x1="42" y1="12" x2="56" y2="12" />
    </svg>
  )
}
