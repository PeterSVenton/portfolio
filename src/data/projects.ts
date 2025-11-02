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

// export const projects: Project[] = [
//   {
//     slug: 'report-migration',
//     title: 'Paginated Report Migration',
//     summary: 'Led a paginated reporting migration from BOXI to PowerBI. Reverse engineered datasets, validated totals, and standardised layouts/components for faster change control.',
//     period: '2024',
//     context: 'Company project',
//     stack: [Tech.PowerBI, Tech.ReportBuilder, Tech.SQL],
//   },
//   {
//     slug: 'personal-portfolio',
//     title: 'This Website',
//     summary: 'Built this personal portfolio to showcase my skillset',
//     period: '2025',
//     context: 'Personal project',
//     stack: [Tech.Typescript, Tech.React, Tech.AWS],
//     links: { repo: 'https://github.com/PeterSVenton/portfolio' },
//   },
//   {
//     slug: 'website-dashboard',
//     title: 'Website Dashboard',
//     summary: 'A powerBI dashboard that shows this website\'s usage and stats. From ingesting the data out of Google Analytics,  creating a databricks job to store the data in Azure Blob Storage and then using the output to build a dashboard in PowerBI.',
//     period: '2025',
//     context: 'Personal project',
//     stack: [Tech.PowerBI, Tech.Python, Tech.DAX, Tech.SQL, Tech.Azure],
//     links: { demo: 'https://github.com/PeterSVenton/portfolio' },
//   },
//   {
//     slug: 'scalable-power-automate',
//     title: 'Power Automate at Scale',
//     summary: 'In order to be informed within the business when high value transactions are happening we needed',
//     period: '2025',
//     context: 'Company project',
//     stack: [Tech.PowerAutomate, Tech.SharepointLists, Tech.Dataverse, Tech.SQL],
//     links: { demo: 'https://github.com/PeterSVenton/portfolio' },
//   },
//   {
//     slug: 'accounts-optical-character-recognition',
//     title: 'OCR for a Competitive Edge',
//     summary: 'Exploring how optical character recognition can extract key insights from company accounts, turning static documents into actionable data.',
//     period: '2025',
//     context: 'Personal project',
//     stack: [Tech.Python, Tech.AWS],
//     links: { demo: 'https://github.com/PeterSVenton/xxx' },
//   },
//   {
//   slug: 'call-audio-sentiment-analysis',
//   title: 'Creating BI ready Audio data',
//   summary: 'Transforming raw audio into structured sentiment data to enable deeper call analytics and uncover patterns hidden in conversation.',
//   period: '2025',
//   context: 'Personal project',
//   stack: [Tech.Python, Tech.AWS],
//   links: { demo: 'https://github.com/PeterSVenton/xxx' },
// },
// ]
