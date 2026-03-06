export type Locale = 'zh' | 'en'

export const translations = {
  zh: {
    nav: {
      about: '關於我們',
      services: '服務項目',
      whyUs: '為何選擇我們',
      contact: '聯繫我們',
    },
    hero: {
      title: '五體工作室',
      subtitle: 'Orz.tw',
      description1: '懶得做重複的事？我們也是',
      description2: '所以我們寫程式幫你搞定',
      cta: '開始合作',
    },
    about: {
      heading: '關於我們',
      subheading: '專注品質，追求卓越',
      spiritTitle: '五體投地的服務精神',
      spiritP1: '五體工作室源自於「五體投地」的精神，代表我們對每個專案的全心投入與專業態度。我們相信，優秀的軟體不僅是程式碼的堆砌，更是對客戶需求的深刻理解與創新實現。',
      spiritP2: '我們的團隊擁有豐富的軟體開發經驗，從網頁應用程式到專業領域的資訊系統，都能提供客製化的解決方案，協助您的業務數位轉型，提升營運效率。',
      founderRole: '研發負責人 / Founder',
      founderBio1: '擁有超過 20 年軟體設計與開發經驗，曾任職於多間全球知名大型軟體公司，參與千萬用戶級別資安軟體開發、企業級系統架構設計、高流量網站開發及跨國團隊協作專案。專精於 Web 應用程式開發、系統效能優化與敏捷開發流程，注重前端優化與流暢的使用者體驗，對於將複雜的業務需求轉化為優雅的技術解決方案有著豐富的實戰經驗。',
      founderBio2: '秉持著「科技源自惰性」的理念，創立五體工作室，致力於協助企業與個人實現數位化轉型，讓繁瑣的工作交給程式處理，把時間留給更重要的事。',
    },
    services: {
      heading: '服務項目',
      subheading: '全方位軟體開發解決方案',
      items: [
        { title: 'Web App 程式設計', description: '運用現代化前後端技術，打造響應式網頁應用程式，提供流暢的使用者體驗與穩定的系統效能。' },
        { title: '軟體工程服務', description: '從需求分析、系統設計到開發維護，提供完整的軟體工程服務，確保專案品質與交付時程。' },
        { title: '游泳成績管理系統', description: '專業的游泳成績資訊管理平台，支援成績紀錄、數據分析與歷史查詢，協助選手與教練追蹤進步軌跡。' },
        { title: '賽事資訊整合平台', description: '整合各類賽事資訊，提供賽程查詢、報名管理、成績發布等功能，打造一站式賽事管理解決方案。' },
        { title: '流程自動化', description: '分析您的工作流程，設計自動化解決方案，減少重複性工作，讓您專注於核心業務。' },
        { title: '客製化系統開發', description: '針對您的獨特需求，量身打造專屬系統，從小型工具到大型平台，我們都能為您實現。' },
      ],
    },
    whyUs: {
      heading: '為何選擇我們',
      subheading: '您的信任，我們的責任',
      items: [
        { title: '專注細節', description: '對每個功能精雕細琢，確保品質' },
        { title: '溝通順暢', description: '保持密切聯繫，即時回應您的需求' },
        { title: '快速交付', description: '敏捷開發流程，有效控制專案進度' },
        { title: '持續支援', description: '專案完成後提供維護與技術支援' },
      ],
    },
    contact: {
      heading: '聯繫我們',
      subheading: '讓我們一起實現您的想法',
      description: '無論您有任何軟體開發需求，或是想要討論專案構想，歡迎與我們聯繫。我們將竭誠為您服務。',
      companyLabel: '公司名稱',
      companyName: '五體工作室',
      taxIdLabel: '統一編號',
      websiteLabel: '網站',
      emailBtn: 'Email 聯繫',
      lineBtn: 'LINE 聯繫',
    },
    footer: {
      copyright: '2026 五體工作室 Orz.tw. All rights reserved.',
    },
    a11y: {
      openMenu: '開啟選單',
    },
  },
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      whyUs: 'Why Us',
      contact: 'Contact',
    },
    hero: {
      title: 'Wuti Studio',
      subtitle: 'Orz.tw',
      description1: 'Too lazy for repetitive tasks? So are we.',
      description2: "That's why we code it for you.",
      cta: 'Get Started',
    },
    about: {
      heading: 'About Us',
      subheading: 'Committed to Quality and Excellence',
      spiritTitle: 'Wholehearted Dedication',
      spiritP1: 'Wuti Studio is inspired by the spirit of full devotion — putting our whole selves into every project with professionalism and passion. We believe great software is more than just code; it\'s a deep understanding of client needs brought to life through innovation.',
      spiritP2: 'Our team brings extensive software development experience, from web applications to domain-specific information systems. We deliver customized solutions to help your business achieve digital transformation and operational efficiency.',
      founderRole: 'Head of R&D / Founder',
      founderBio1: 'Over 20 years of software design and development experience, having worked at several globally renowned software companies. Involved in security software serving tens of millions of users, enterprise system architecture design, high-traffic website development, and cross-border team collaboration. Specializes in web application development, system performance optimization, and agile processes, with a focus on frontend optimization and seamless user experiences.',
      founderBio2: 'Founded Wuti Studio with the belief that "technology is born from laziness" — dedicated to helping businesses and individuals achieve digital transformation by letting software handle the tedious work, so you can focus on what truly matters.',
    },
    services: {
      heading: 'Services',
      subheading: 'Comprehensive Software Development Solutions',
      items: [
        { title: 'Web App Development', description: 'Building responsive web applications with modern frontend and backend technologies, delivering smooth user experiences and reliable performance.' },
        { title: 'Software Engineering', description: 'From requirements analysis and system design to development and maintenance — complete software engineering services ensuring quality and timely delivery.' },
        { title: 'Swimming Records System', description: 'A professional swimming records management platform supporting performance tracking, data analysis, and historical queries to help athletes and coaches monitor progress.' },
        { title: 'Event Management Platform', description: 'An integrated event information platform providing schedule lookup, registration management, and results publishing — a one-stop event management solution.' },
        { title: 'Process Automation', description: 'Analyzing your workflows and designing automation solutions to reduce repetitive tasks, so you can focus on your core business.' },
        { title: 'Custom System Development', description: 'Tailored systems built for your unique needs — from small tools to large-scale platforms, we bring your vision to life.' },
      ],
    },
    whyUs: {
      heading: 'Why Choose Us',
      subheading: 'Your Trust, Our Responsibility',
      items: [
        { title: 'Attention to Detail', description: 'Every feature is carefully crafted for quality' },
        { title: 'Clear Communication', description: 'Staying in close contact, responding to your needs promptly' },
        { title: 'Fast Delivery', description: 'Agile development process for effective project management' },
        { title: 'Ongoing Support', description: 'Maintenance and technical support after project completion' },
      ],
    },
    contact: {
      heading: 'Contact Us',
      subheading: "Let's bring your ideas to life",
      description: 'Whether you have software development needs or want to discuss a project idea, feel free to reach out. We look forward to working with you.',
      companyLabel: 'Company',
      companyName: 'Wuti Studio',
      taxIdLabel: 'Tax ID (Taiwan)',
      websiteLabel: 'Website',
      emailBtn: 'Email Us',
      lineBtn: 'LINE Us',
    },
    footer: {
      copyright: '2026 Wuti Studio. All rights reserved.',
    },
    a11y: {
      openMenu: 'Open menu',
    },
  },
} as const

export type Translations = (typeof translations)[Locale]
