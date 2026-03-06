import type { TranslationSchema } from './types'

export const ko: TranslationSchema = {
  nav: {
    about: '회사 소개',
    services: '서비스',
    whyUs: '강점',
    contact: '문의하기',
  },
  hero: {
    title: 'Wuti Studio',
    subtitle: 'Orz.tw',
    description1: '반복적인 업무가 귀찮으신가요? 저희도 그렇습니다.',
    description2: '그래서 저희가 대신 개발해 드립니다.',
    cta: '시작하기',
  },
  about: {
    heading: '회사 소개',
    subheading: '품질과 탁월함을 향한 약속',
    spiritTitle: '전력을 다하는 헌신',
    spiritP1: "Wuti Studio는 '오체투지(五體投地)'의 정신에서 영감을 받아, 모든 프로젝트에 전문성과 열정을 담아 온 힘을 다합니다. 훌륭한 소프트웨어는 단순한 코드를 넘어, 혁신을 통해 구현된 고객 니즈에 대한 깊은 이해라고 믿습니다.",
    spiritP2: '저희 팀은 웹 애플리케이션부터 도메인 특화 정보 시스템에 이르기까지 폭넓은 소프트웨어 개발 경험을 보유하고 있습니다. 고객의 비즈니스가 디지털 전환과 운영 효율성을 달성할 수 있도록 최적화된 맞춤형 솔루션을 제공합니다.',
    founderRole: 'R&D 총괄 / 설립자',
    founderBio1: '20년 이상의 소프트웨어 설계 및 개발 경력을 보유하고 있으며, 다수의 세계적인 소프트웨어 기업에서 근무했습니다. 수천만 명의 사용자를 대상으로 하는 보안 소프트웨어, 엔터프라이즈 시스템 아키텍처 설계, 대규모 트래픽 웹사이트 개발 및 글로벌 팀 협업 경험이 있습니다. 웹 애플리케이션 개발, 시스템 성능 최적화, 애자일 프로세스에 전문성이 있으며, 특히 프론트엔드 최적화와 매끄러운 사용자 경험 제공에 주력합니다.',
    founderBio2: "'기술은 게으름에서 탄생한다'는 믿음으로 Wuti Studio를 설립했습니다. 소프트웨어가 번거로운 작업을 처리하게 함으로써 기업과 개인이 디지털 전환을 이루고, 가장 중요한 가치에 집중할 수 있도록 돕는 데 헌신하고 있습니다.",
  },
  services: {
    heading: '서비스',
    subheading: '포괄적인 소프트웨어 개발 솔루션',
    items: [
      { title: '웹 앱 개발', description: '최신 프론트엔드 및 백엔드 기술을 활용하여 반응형 웹 애플리케이션을 구축하며, 매끄러운 사용자 경험과 안정적인 성능을 제공합니다.' },
      { title: '소프트웨어 엔지니어링', description: '요구 사항 분석 및 시스템 설계부터 개발, 유지 보수까지. 품질과 납기 준수를 보장하는 완벽한 소프트웨어 엔지니어링 서비스를 제공합니다.' },
      { title: '수영 기록 시스템', description: '선수와 코치가 훈련 성과를 모니터링할 수 있도록 성과 추적, 데이터 분석, 과거 기록 조회를 지원하는 전문 수영 기록 관리 플랫폼입니다.' },
      { title: '이벤트 관리 플랫폼', description: '일정 조회, 등록 관리, 결과 발표 기능을 통합하여 제공하는 원스톱 이벤트 관리 솔루션입니다.' },
      { title: '프로세스 자동화', description: '워크플로우를 분석하고 자동화 솔루션을 설계하여 반복적인 업무를 줄임으로써, 고객이 핵심 비즈니스에 집중할 수 있도록 돕습니다.' },
      { title: '맞춤형 시스템 개발', description: '소규모 도구부터 대규모 플랫폼까지, 고객의 고유한 요구 사항에 맞춰 비전을 현실로 구현하는 맞춤형 시스템을 제작합니다.' },
    ],
  },
  whyUs: {
    heading: '우리를 선택해야 하는 이유',
    subheading: '고객의 신뢰, 우리의 책임',
    items: [
      { title: '디테일에 대한 집념', description: '품질을 위해 모든 기능을 세심하게 제작합니다' },
      { title: '명확한 커뮤니케이션', description: '긴밀한 소통을 유지하며 고객의 요구에 신속하게 대응합니다' },
      { title: '신속한 배포', description: '효율적인 프로젝트 관리를 위한 애자일 개발 프로세스를 적용합니다' },
      { title: '지속적인 지원', description: '프로젝트 완료 후에도 유지 보수 및 기술 지원을 제공합니다' },
    ],
  },
  contact: {
    heading: '문의하기',
    subheading: '여러분의 아이디어를 실현해 보세요',
    description: '소프트웨어 개발이 필요하시거나 프로젝트 아이디어를 논의하고 싶으시다면 언제든 연락해 주세요. 함께 일할 수 있기를 기대합니다.',
    companyLabel: '회사명',
    companyName: 'Wuti Studio',
    taxIdLabel: '사업자 등록번호 (대만)',
    websiteLabel: '웹사이트',
    emailBtn: '이메일 보내기',
    lineBtn: 'LINE으로 문의하기',
  },
  footer: {
    copyright: '2026 Wuti Studio. All rights reserved.',
  },
  a11y: {
    openMenu: '메뉴 열기',
    toggleTheme: '테마 변경',
    selectLanguage: '언어 선택',
    fontSize: '글자 크기',
    fontSizeSmall: '작게',
    fontSizeMedium: '중간',
    fontSizeLarge: '크게',
  },
}
