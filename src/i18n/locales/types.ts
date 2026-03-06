export interface TranslationSchema {
  nav: {
    about: string
    services: string
    whyUs: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    description1: string
    description2: string
    cta: string
  }
  about: {
    heading: string
    subheading: string
    spiritTitle: string
    spiritP1: string
    spiritP2: string
    founderRole: string
    founderBio1: string
    founderBio2: string
  }
  services: {
    heading: string
    subheading: string
    items: { title: string; description: string }[]
  }
  whyUs: {
    heading: string
    subheading: string
    items: { title: string; description: string }[]
  }
  contact: {
    heading: string
    subheading: string
    description: string
    companyLabel: string
    companyName: string
    taxIdLabel: string
    websiteLabel: string
    emailBtn: string
    lineBtn: string
  }
  footer: {
    copyright: string
  }
  a11y: {
    openMenu: string
    toggleTheme: string
    selectLanguage: string
    fontSize: string
    fontSizeSmall: string
    fontSizeMedium: string
    fontSizeLarge: string
  }
}
