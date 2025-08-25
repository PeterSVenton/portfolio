//dummy for now
export type Article = {
  slug: string
  title: string
  summary: string
  date: string
  readMins: number
  tags?: string[]
}

export const deepDives: Article[] = [
  {
    slug: 'calc-groups-time-intelligence',
    title: 'Taming Time Intelligence with Calculation Groups',
    summary: 'When to use calc groups vs dedicated measures, perf tradeoffs, and pitfalls.',
    date: '2025-08-01',
    readMins: 8,
    tags: ['Power BI', 'DAX', 'Modeling'],
  },
]

export const explainers: Article[] = [
  {
    slug: 'why-kpi-numbers-differ',
    title: 'Why the Same KPI Shows Different Numbers—and How We Fix It',
    summary: 'Plain-English reasons for mismatches and how a single source of truth solves them.',
    date: '2025-08-05',
    readMins: 4,
    tags: ['Stakeholders', 'Data Trust'],
  },
]
