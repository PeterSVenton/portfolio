import { Tech } from "./tech"

export type Experience = {
  role: string
  company: string
  companyUrl?: string
  location?: string
  start: string // 'YYYY-MM'
  end: string   // 'Present' | 'YYYY-MM'
  summary?: string
  bullets: string[]
  stack?: string[]
  caseStudyUrl?: string
}

export const experience: Experience[] = [
  {
    role: 'Business Analyst',
    company: 'Tri-Star Packaging',
    companyUrl: 'https://www.linkedin.com/company/tristarpackaging/posts/?feedView=all',
    location: 'Essex, UK',
    start: '2023-12',
    end: 'Present',
    bullets: [
      'Migrated legacy BOXI reports to Power BI (paginated + interactive).',
      'Established a reusable semantic model (Sales/Stock/Finance) with centralized measures.',
      'Reduced duplicate metrics and sped up new requests with calc groups & conventions.',
    ],
    stack: [Tech.PowerBI, Tech.DAX, Tech.SQL, Tech.ReportBuilder, Tech.PowerAutomate, Tech.Python],
    caseStudyUrl: '/work/clean-models',
  },
  {
    role: 'Risk Analyst Intern',
    company: 'PurpleTreeFunding',
    companyUrl: 'https://purpletreefunding.com/',
    location: 'Florida, USA',
    start: '2023-06',
    end: '2023-08',
    bullets: [
      'Built lightweight risk models to flag high-risk applications.',
      'Automated slices of the risk assessment process to cut manual review time.',
    ],
    stack: [Tech.Python, Tech.SQL, Tech.Pandas, Tech.ScikitLearn],
  },
  {
    role: 'Mobile Payments Analyst Intern',
    company: 'Samsung Electronics',
    companyUrl: 'https://www.samsung.com/de/',
    location: 'Frankfurt, DE',
    start: '2022-07',
    end: '2023-01',
    bullets: [
      'Analyzed product usage data; packaged insights for product and execs.',
      'Scraped user feedback and ran sentiment to surface product issues.',
    ],
    stack: [Tech.Python, Tech.Pandas, Tech.NumPy, Tech.Matplotlib],
  },

  {
    role: 'Mathematics Tutor',
    company: 'Frankfurt School of Finance & Management',
    companyUrl: 'https://www.frankfurt-school.de/en/home',
    location: 'Frankfurt, DE',
    start: '2022-01',
    end: '2022-06',
    bullets: [
      'Distinguished for effective teaching methods, causing 12 students from other intakes to join classes, fostering genuine comprehension.',
      'Employed Python\'s Manim library to create fluid animations, enhancing the learning experience with my course being 2 weeks ahead of other tutors.',
    ],
    stack: [Tech.Python, Tech.Manim],
  }
]
