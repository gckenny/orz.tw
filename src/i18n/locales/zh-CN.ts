import type { TranslationSchema } from './types'

export const zhCN: TranslationSchema = {
  nav: {
    about: '关于我们',
    services: '服务项目',
    whyUs: '为何选择我们',
    contact: '联系我们',
  },
  hero: {
    title: '五体工作室',
    subtitle: 'Orz.tw',
    description1: '懒得做重复的事？我们也是',
    description2: '所以我们写程序帮你搞定',
    cta: '开始合作',
  },
  about: {
    heading: '关于我们',
    subheading: '专注品质，追求卓越',
    spiritTitle: '五体投地的服务精神',
    spiritP1: '五体工作室源自于「五体投地」的精神，代表我们对每个专案的全心投入与专业态度。我们相信，优秀的软件不仅是代码的堆砌，更是对客户需求的深刻理解与创新实现。',
    spiritP2: '我们的团队拥有丰富的软件开发经验，从网页应用程序到专业领域的信息系统，都能提供定制化的解决方案，协助您的业务数字化转型，提升运营效率。',
    founderRole: '研发负责人 / Founder',
    founderBio1: '拥有超过20年软件设计与开发经验，曾任职于多家全球知名大型软件公司，参与千万用户级别安全软件开发、企业级系统架构设计、高流量网站开发及跨国团队协作项目。专精于Web应用程序开发、系统性能优化与敏捷开发流程，注重前端优化与流畅的用户体验，对于将复杂的业务需求转化为优雅的技术解决方案有着丰富的实战经验。',
    founderBio2: '秉持着「科技源自惰性」的理念，创立五体工作室，致力于协助企业与个人实现数字化转型，让繁琐的工作交给程序处理，把时间留给更重要的事。',
  },
  services: {
    heading: '服务项目',
    subheading: '全方位软件开发解决方案',
    items: [
      { title: 'Web App 程序设计', description: '运用现代化前后端技术，打造响应式网页应用程序，提供流畅的用户体验与稳定的系统性能。' },
      { title: '软件工程服务', description: '从需求分析、系统设计到开发维护，提供完整的软件工程服务，确保项目品质与交付时程。' },
      { title: '游泳成绩管理系统', description: '专业的游泳成绩信息管理平台，支持成绩记录、数据分析与历史查询，协助选手与教练追踪进步轨迹。' },
      { title: '赛事信息整合平台', description: '整合各类赛事信息，提供赛程查询、报名管理、成绩发布等功能，打造一站式赛事管理解决方案。' },
      { title: '流程自动化', description: '分析您的工作流程，设计自动化解决方案，减少重复性工作，让您专注于核心业务。' },
      { title: '定制化系统开发', description: '针对您的独特需求，量身打造专属系统，从小型工具到大型平台，我们都能为您实现。' },
    ],
  },
  whyUs: {
    heading: '为何选择我们',
    subheading: '您的信任，我们的责任',
    items: [
      { title: '专注细节', description: '对每个功能精雕细琢，确保品质' },
      { title: '沟通顺畅', description: '保持密切联系，即时回应您的需求' },
      { title: '快速交付', description: '敏捷开发流程，有效控制项目进度' },
      { title: '持续支援', description: '项目完成后提供维护与技术支持' },
    ],
  },
  contact: {
    heading: '联系我们',
    subheading: '让我们一起实现您的想法',
    description: '无论您有任何软件开发需求，或是想要讨论项目构想，欢迎与我们联系。我们将竭诚为您服务。',
    companyLabel: '公司名称',
    companyName: '五体工作室',
    taxIdLabel: '统一编号',
    websiteLabel: '网站',
    emailBtn: 'Email 联系',
    lineBtn: 'LINE 联系',
  },
  footer: {
    copyright: '2026 Wuti Studio. All rights reserved.',
  },
  a11y: {
    openMenu: '打开菜单',
    toggleTheme: '切换主题',
    selectLanguage: '选择语言',
    fontSize: '字体大小',
    fontSizeSmall: '小',
    fontSizeMedium: '中',
    fontSizeLarge: '大',
  },
}
