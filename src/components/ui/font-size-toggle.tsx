import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type FontSize = 'small' | 'medium' | 'large'

const fontSizeConfig = {
  small: { label: '小', scale: 0.875 },
  medium: { label: '中', scale: 1 },
  large: { label: '大', scale: 1.125 }
}

export function FontSizeToggle() {
  const [fontSize, setFontSize] = useState<FontSize>('medium')

  useEffect(() => {
    const stored = localStorage.getItem('fontSize') as FontSize | null
    if (stored && fontSizeConfig[stored]) {
      setFontSize(stored)
      document.documentElement.style.fontSize = `${fontSizeConfig[stored].scale * 16}px`
    }
  }, [])

  const cycleFontSize = () => {
    const sizes: FontSize[] = ['small', 'medium', 'large']
    const currentIndex = sizes.indexOf(fontSize)
    const nextIndex = (currentIndex + 1) % sizes.length
    const newSize = sizes[nextIndex]

    setFontSize(newSize)
    document.documentElement.style.fontSize = `${fontSizeConfig[newSize].scale * 16}px`
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
      aria-label={`字體大小: ${fontSizeConfig[fontSize].label}`}
      title={`字體大小: ${fontSizeConfig[fontSize].label}`}
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
