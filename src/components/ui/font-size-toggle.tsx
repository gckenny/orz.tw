import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'

type FontSize = 'small' | 'medium' | 'large'

const fontSizeScales: Record<FontSize, number> = {
  small: 0.875,
  medium: 1,
  large: 1.125,
}

export function FontSizeToggle() {
  const [fontSize, setFontSize] = useState<FontSize>('medium')
  const { t } = useI18n()

  const fontSizeLabels: Record<FontSize, string> = {
    small: t.a11y.fontSizeSmall,
    medium: t.a11y.fontSizeMedium,
    large: t.a11y.fontSizeLarge,
  }

  useEffect(() => {
    const stored = localStorage.getItem('fontSize') as FontSize | null
    if (stored && fontSizeScales[stored]) {
      setFontSize(stored)
      document.documentElement.style.fontSize = `${fontSizeScales[stored] * 16}px`
    }
  }, [])

  const cycleFontSize = () => {
    const sizes: FontSize[] = ['small', 'medium', 'large']
    const currentIndex = sizes.indexOf(fontSize)
    const nextIndex = (currentIndex + 1) % sizes.length
    const newSize = sizes[nextIndex]

    setFontSize(newSize)
    document.documentElement.style.fontSize = `${fontSizeScales[newSize] * 16}px`
    localStorage.setItem('fontSize', newSize)
  }

  return (
    <button
      onClick={cycleFontSize}
      className={cn(
        "flex items-center justify-center w-10 h-8 rounded-lg transition-all duration-300",
        "bg-stone-300 dark:bg-stone-600",
        "hover:bg-stone-400 dark:hover:bg-stone-500",
        "text-stone-600 dark:text-stone-200",
        "font-semibold",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        "dark:focus:ring-offset-stone-800"
      )}
      aria-label={`${t.a11y.fontSize}: ${fontSizeLabels[fontSize]}`}
      title={`${t.a11y.fontSize}: ${fontSizeLabels[fontSize]}`}
    >
      <span className="text-xs">A</span>
      <span className={cn(
        fontSize === 'small' && 'text-xs',
        fontSize === 'medium' && 'text-sm',
        fontSize === 'large' && 'text-base'
      )}>A</span>
    </button>
  )
}
