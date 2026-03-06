import type { TranslationSchema } from './types'

export const en: TranslationSchema = {
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
    spiritP1: "Wuti Studio is inspired by the spirit of full devotion — putting our whole selves into every project with professionalism and passion. We believe great software is more than just code; it's a deep understanding of client needs brought to life through innovation.",
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
    toggleTheme: 'Toggle theme',
    selectLanguage: 'Select language',
    fontSize: 'Font size',
    fontSizeSmall: 'Small',
    fontSizeMedium: 'Medium',
    fontSizeLarge: 'Large',
  },
}
