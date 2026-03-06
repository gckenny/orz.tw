import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import { translations, type Locale, type Translations } from './locales'

interface I18nContextType {
  locale: Locale
  t: Translations
  toggleLocale: () => void
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem('locale') as Locale | null
    if (saved === 'en' || saved === 'zh') return saved
    // Auto-detect: if browser language starts with zh, use zh; otherwise en
    const browserLang = navigator.language || ''
    return browserLang.startsWith('zh') ? 'zh' : 'en'
  })

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-TW' : 'en'
  }, [locale])

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === 'zh' ? 'en' : 'zh'
      localStorage.setItem('locale', next)
      document.documentElement.lang = next === 'zh' ? 'zh-TW' : 'en'
      return next
    })
  }, [])

  return (
    <I18nContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
