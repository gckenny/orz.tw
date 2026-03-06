import { useI18n } from '@/i18n/context'

export function LocaleToggle() {
  const { locale, toggleLocale } = useI18n()

  return (
    <button
      onClick={toggleLocale}
      className="px-2 py-1 text-xs sm:text-sm font-semibold rounded-lg hover:bg-surface-alt transition-colors text-dark border border-border"
      aria-label={locale === 'zh' ? 'Switch to English' : '切換為中文'}
    >
      {locale === 'zh' ? 'EN' : '中'}
    </button>
  )
}
