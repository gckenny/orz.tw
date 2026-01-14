import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    // Default to dark theme if no preference stored
    const shouldBeDark = stored ? stored === 'dark' : true
    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle('dark', shouldBeDark)
  }, [])

  const toggle = () => {
    const newValue = !isDark
    setIsDark(newValue)
    document.documentElement.classList.toggle('dark', newValue)
    localStorage.setItem('theme', newValue ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      className={cn(
        "relative w-14 h-8 rounded-full transition-all duration-300",
        "bg-stone-300 dark:bg-stone-600",
        "hover:bg-stone-400 dark:hover:bg-stone-500",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        "dark:focus:ring-offset-stone-800"
      )}
      aria-label="切換主題"
    >
      <div
        className={cn(
          "absolute top-1 left-1 w-6 h-6 rounded-full transition-all duration-300",
          "bg-white dark:bg-stone-900 shadow-md",
          "flex items-center justify-center",
          isDark ? "translate-x-6" : "translate-x-0"
        )}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-amber-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </div>
    </button>
  )
}
