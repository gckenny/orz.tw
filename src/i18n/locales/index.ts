import { zhTW } from './zh-TW'
import { en } from './en'
import { ja } from './ja'
import { ko } from './ko'
import { zhCN } from './zh-CN'
import { es } from './es'
import { fr } from './fr'
import { de } from './de'
import { pt } from './pt'
import { th } from './th'
import type { TranslationSchema } from './types'

export type Locale = 'zh-TW' | 'en' | 'ja' | 'ko' | 'zh-CN' | 'es' | 'fr' | 'de' | 'pt' | 'th'

export type { TranslationSchema }

export const localeNames: Record<Locale, string> = {
  'zh-TW': '繁體中文',
  'en': 'English',
  'ja': '日本語',
  'ko': '한국어',
  'zh-CN': '简体中文',
  'es': 'Español',
  'fr': 'Français',
  'de': 'Deutsch',
  'pt': 'Português',
  'th': 'ภาษาไทย',
}

export const localeHtmlLang: Record<Locale, string> = {
  'zh-TW': 'zh-TW',
  'en': 'en',
  'ja': 'ja',
  'ko': 'ko',
  'zh-CN': 'zh-CN',
  'es': 'es',
  'fr': 'fr',
  'de': 'de',
  'pt': 'pt',
  'th': 'th',
}

export const translations: Record<Locale, TranslationSchema> = {
  'zh-TW': zhTW,
  'en': en,
  'ja': ja,
  'ko': ko,
  'zh-CN': zhCN,
  'es': es,
  'fr': fr,
  'de': de,
  'pt': pt,
  'th': th,
}

const localeList = Object.keys(translations) as Locale[]

export function detectLocale(): Locale {
  const saved = localStorage.getItem('locale')
  if (saved && saved in translations) return saved as Locale

  const browserLang = navigator.language || ''
  // Exact match first (e.g. zh-TW, zh-CN)
  if (browserLang in translations) return browserLang as Locale
  // Prefix match (e.g. ja-JP -> ja, fr-FR -> fr)
  const prefix = browserLang.split('-')[0]
  const match = localeList.find((l) => l === prefix || l.startsWith(prefix + '-'))
  if (match) return match
  return 'en'
}
