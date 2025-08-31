import { Tech } from '@/data/tech'

export type Project = {
  slug: string
  title: string
  summary: string
  period: string                  
  context: 'Company project' | 'Personal project' | 'Internship'
  impact?: string[]               
  stack?: Tech[]                  
  links?: {
    deepDive?: string             
    explainer?: string
    repo?: string
    demo?: string
  }
  tags?: string[] //for lower grain filtering
}

export const projects: Project[] = [
  {
    slug: 'report-migration',
    title: 'Paginated Report Migration',
    summary: 'Led a paginated reporting migration from BOXI to PowerBI. Reverse engineered datasets, validated totals, and standardised layouts/components for faster change control.',
    period: '2024',
    context: 'Company project',
    stack: [Tech.PowerBI, Tech.ReportBuilder, Tech.SQL],
  },
    {
    slug: 'personal-portfolio',
    title: 'This Website',
    summary: 'Built this personal portfolio to showcase my skillset',
    period: '2025',
    context: 'Personal project',
    stack: [Tech.Typescript, Tech.React, Tech.AWS],
    links: { repo: 'https://github.com/your-handle/delta-demo' },
  },
  {
    slug: 'ga4-databricks',
    title: 'Website Stats',
    summary: 'A PowerBI dashboard built off of this website\'s GA4 metrics. From ingesting the data at source with databricks to creating a dashboard for quick and easy interpretation',
    period: '2025',
    context: 'Personal project',
    stack: [Tech.Python, Tech.Azure],
    links: { repo: 'https://github.com/your-handle/delta-demo' },
  },
]
