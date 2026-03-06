import { useI18n } from '@/i18n/context'

export function LocaleToggle() {
  const { locale, toggleLocale } = useI18n()

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center justify-center min-w-10 h-8 px-2 rounded-lg transition-all duration-300 bg-stone-300 dark:bg-stone-600 hover:bg-stone-400 dark:hover:bg-stone-500 text-stone-600 dark:text-stone-200 font-semibold text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-stone-800"
      aria-label={locale === 'zh' ? 'Switch to English' : '切換為中文'}
    >
      {locale === 'zh' ? 'EN' : '中'}
    </button>
  )
}
