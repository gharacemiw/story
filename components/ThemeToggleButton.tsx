'use client'
import { useTheme } from './ThemeProvider'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggleButton({ className = '', size = 16 }: { className?: string, size?: number }) {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      className={`p-1.5 text-warm-muted dark:text-dark-muted hover:text-warm-text dark:hover:text-dark-text transition-colors duration-300 ${className}`}
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? <Sun size={size} /> : <Moon size={size} />}
    </button>
  )
}
