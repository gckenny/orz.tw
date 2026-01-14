import { useState, useEffect, useCallback } from 'react'
import {
  Monitor,
  Cog,
  Waves,
  Trophy,
  RefreshCw,
  BarChart3,
  Target,
  MessageCircle,
  Zap,
  Wrench,
  Mail,
  Menu,
  X,
  MessageSquare
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { FontSizeToggle } from '@/components/ui/font-size-toggle'
import { cn } from '@/lib/utils'
import { HeroBackground } from '@/components/ui/hero-background'

const services = [
  {
    icon: Monitor,
    title: 'Web App 程式設計',
    description: '運用現代化前後端技術，打造響應式網頁應用程式，提供流暢的使用者體驗與穩定的系統效能。'
  },
  {
    icon: Cog,
    title: '軟體工程服務',
    description: '從需求分析、系統設計到開發維護，提供完整的軟體工程服務，確保專案品質與交付時程。'
  },
  {
    icon: Waves,
    title: '游泳成績管理系統',
    description: '專業的游泳成績資訊管理平台，支援成績紀錄、數據分析與歷史查詢，協助選手與教練追蹤進步軌跡。'
  },
  {
    icon: Trophy,
    title: '賽事資訊整合平台',
    description: '整合各類賽事資訊，提供賽程查詢、報名管理、成績發布等功能，打造一站式賽事管理解決方案。'
  },
  {
    icon: RefreshCw,
    title: '流程自動化',
    description: '分析您的工作流程，設計自動化解決方案，減少重複性工作，讓您專注於核心業務。'
  },
  {
    icon: BarChart3,
    title: '客製化系統開發',
    description: '針對您的獨特需求，量身打造專屬系統，從小型工具到大型平台，我們都能為您實現。'
  }
]

const features = [
  { icon: Target, title: '專注細節', description: '對每個功能精雕細琢，確保品質' },
  { icon: MessageCircle, title: '溝通順暢', description: '保持密切聯繫，即時回應您的需求' },
  { icon: Zap, title: '快速交付', description: '敏捷開發流程，有效控制專案進度' },
  { icon: Wrench, title: '持續支援', description: '專案完成後提供維護與技術支援' }
]

const navItems = [
  { label: '關於我們', href: '#about' },
  { label: '服務項目', href: '#services' },
  { label: '為何選擇我們', href: '#why-us' },
  { label: '聯繫我們', href: '#contact' }
]

const sections = ['hero', 'about', 'services', 'why-us', 'contact']

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)

  const scrollToSection = useCallback((index: number) => {
    const sectionId = sections[index]
    const element = sectionId === 'hero'
      ? document.body
      : document.getElementById(sectionId)

    if (element) {
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setCurrentSection(index)
    }
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't interfere with input fields
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault()
        const nextIndex = Math.min(currentSection + 1, sections.length - 1)
        scrollToSection(nextIndex)
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        const prevIndex = Math.max(currentSection - 1, 0)
        scrollToSection(prevIndex)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSection, scrollToSection])

  // Update current section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i]
        const element = sectionId === 'hero'
          ? document.body
          : document.getElementById(sectionId)

        if (element) {
          const offsetTop = sectionId === 'hero' ? 0 : element.offsetTop
          if (scrollPosition >= offsetTop) {
            setCurrentSection(i)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div className="min-h-screen bg-light text-dark transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-surface/95 backdrop-blur-md shadow-sm z-50 transition-colors duration-300 dark:shadow-stone-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="text-xl sm:text-2xl font-bold text-primary shrink-0">
              Orz<span className="text-secondary">.tw</span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-dark font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right side: Font Size + Theme Toggle + Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-3">
              <FontSizeToggle />
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-surface-alt transition-colors"
                aria-label="開啟選單"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-dark" />
                ) : (
                  <Menu className="w-6 h-6 text-dark" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
              mobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
            )}
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-4 text-dark font-medium hover:bg-surface-alt rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-stone-100 dark:bg-[#050505] pt-16 md:pt-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Three.js 3D 背景 */}
        <HeroBackground />

        <div className="text-center max-w-3xl py-12 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-stone-800 dark:text-white">
            五體工作室
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-stone-500 dark:text-stone-400 mb-4">Orz.tw</p>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 mb-8 max-w-xl mx-auto px-4 leading-relaxed">
            懶得做重複的事？我們也是
            <br />
            所以我們寫程式幫你搞定
          </p>
          <a href="#contact">
            <Button size="lg" className="text-base sm:text-lg bg-primary hover:bg-primary/90 text-white">
              開始合作
            </Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 sm:px-6 bg-surface transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-3">關於我們</h2>
            <p className="text-muted text-base sm:text-lg">專注品質，追求卓越</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">五體投地的服務精神</h3>
              <p className="text-muted mb-4 text-base sm:text-lg leading-relaxed">
                五體工作室源自於「五體投地」的精神，代表我們對每個專案的全心投入與專業態度。我們相信，優秀的軟體不僅是程式碼的堆砌，更是對客戶需求的深刻理解與創新實現。
              </p>
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                我們的團隊擁有豐富的軟體開發經驗，從網頁應用程式到專業領域的資訊系統，都能提供客製化的解決方案，協助您的業務數位轉型，提升營運效率。
              </p>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gradient select-none">
                Orz
              </span>
            </div>
          </div>

          {/* Founder Section */}
          <div className="border-t border-border pt-12 md:pt-16">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start bg-surface-alt p-6 sm:p-8 rounded-2xl md:rounded-3xl transition-colors duration-300">
              <img
                src="/founder.webp"
                alt="Kenny Huang"
                className="w-20 h-20 sm:w-24 sm:h-24 min-w-20 sm:min-w-24 rounded-full object-cover shadow-lg"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-dark mb-1">Kenny Huang</h3>
                <p className="text-primary font-semibold mb-4">研發負責人 / Founder</p>
                <p className="text-muted leading-relaxed mb-3 text-sm sm:text-base">
                  擁有超過 20 年軟體設計與開發經驗，曾任職於多間全球知名大型軟體公司，參與千萬用戶級別資安軟體開發、企業級系統架構設計、高流量網站開發及跨國團隊協作專案。專精於 Web 應用程式開發、系統效能優化與敏捷開發流程，注重前端優化與流暢的使用者體驗，對於將複雜的業務需求轉化為優雅的技術解決方案有著豐富的實戰經驗。
                </p>
                <p className="text-muted leading-relaxed text-sm sm:text-base">
                  秉持著「科技源自惰性」的理念，創立五體工作室，致力於協助企業與個人實現數位化轉型，讓繁瑣的工作交給程式處理，把時間留給更重要的事。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 sm:px-6 bg-light transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-3">服務項目</h2>
            <p className="text-muted text-base sm:text-lg">全方位軟體開發解決方案</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <Card key={i} className="p-6 sm:p-8">
                <CardHeader>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary dark:bg-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-sm dark:shadow-teal-900/30">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white dark:text-teal-50" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-16 md:py-24 px-4 sm:px-6 bg-primary dark:bg-stone-800 text-white transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">為何選擇我們</h2>
            <p className="text-white/70 text-base sm:text-lg">您的信任，我們的責任</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {features.map((feature, i) => (
              <div key={i} className="text-center p-4 sm:p-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-white/10 dark:bg-white/5 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white/90" />
                </div>
                <h4 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">{feature.title}</h4>
                <p className="text-white/70 text-xs sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 bg-surface transition-colors duration-300">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-3">聯繫我們</h2>
          <p className="text-muted text-base sm:text-lg mb-8">讓我們一起實現您的想法</p>

          <p className="text-muted mb-8 text-sm sm:text-base">
            無論您有任何軟體開發需求，或是想要討論專案構想，歡迎與我們聯繫。我們將竭誠為您服務。
          </p>

          <div className="bg-surface-alt rounded-2xl p-6 sm:p-8 mb-8 transition-colors duration-300 border border-transparent dark:border-stone-700/50">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <p className="text-muted text-xs sm:text-sm">公司名稱</p>
                <p className="text-dark font-semibold text-base sm:text-lg">五體工作室</p>
              </div>
              <div>
                <p className="text-muted text-xs sm:text-sm">統一編號</p>
                <p className="text-dark font-semibold text-base sm:text-lg">61231555</p>
              </div>
              <div>
                <p className="text-muted text-xs sm:text-sm">Email</p>
                <a href="mailto:gckenny@gmail.com" className="text-dark font-semibold text-base sm:text-lg hover:text-primary transition-colors">
                  gckenny@gmail.com
                </a>
              </div>
              <div>
                <p className="text-muted text-xs sm:text-sm">網站</p>
                <p className="text-dark font-semibold text-base sm:text-lg">https://orz.tw</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:gckenny@gmail.com">
              <Button variant="primary" size="lg" className="gap-2 text-sm sm:text-base w-full sm:w-auto">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Email 聯繫
              </Button>
            </a>
            <a href="https://line.me/ti/p/weX-WQHvTo" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="gap-2 text-sm sm:text-base w-full sm:w-auto bg-[#06C755] hover:bg-[#05b34d]">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                LINE 聯繫
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c1917] dark:bg-stone-950 text-white py-6 sm:py-8 px-4 sm:px-6 text-center transition-colors duration-300">
        <p className="text-stone-400 text-sm sm:text-base">&copy; 2026 五體工作室 Orz.tw. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
