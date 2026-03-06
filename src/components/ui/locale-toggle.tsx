import { useState, useRef, useEffect } from 'react'
import { Globe } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import { localeNames, type Locale } from '@/i18n/locales'
import { cn } from '@/lib/utils'

const localeKeys = Object.keys(localeNames) as Locale[]

export function LocaleToggle() {
  const { locale, setLocale, t } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center justify-center w-10 h-8 rounded-lg transition-all duration-300",
          "bg-stone-300 dark:bg-stone-600",
          "hover:bg-stone-400 dark:hover:bg-stone-500",
          "text-stone-600 dark:text-stone-200",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          "dark:focus:ring-offset-stone-800"
        )}
        aria-label={t.a11y.selectLanguage}
        title={t.a11y.selectLanguage}
      >
        <Globe className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-40 bg-surface rounded-xl shadow-lg border border-border overflow-hidden z-50">
          {localeKeys.map((key) => (
            <button
              key={key}
              onClick={() => {
                setLocale(key)
                setOpen(false)
              }}
              className={cn(
                "w-full text-left px-4 py-2.5 text-sm transition-colors",
                "hover:bg-surface-alt",
                key === locale
                  ? "text-primary font-semibold bg-surface-alt"
                  : "text-dark"
              )}
            >
              {localeNames[key]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
