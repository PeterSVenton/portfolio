//dummy for now
export type Article = {
  slug: string
  type: 'DeepDive' | 'Explainer' | 'Reading'
  title: string
  summary: string
  date: string
  readMins: number
  tags?: string[]
}

export const articles: Article[] = [
  {
    slug: 'dp-700-experience',
    type: 'Explainer',
    title: 'The DP-700 Exam Experience',
    summary: 'My Experience on taking the DP-700: Microsoft Certified Data Engineer Associate Exam',
    date: '2025-10-30',
    readMins: 20,
    tags: ['Fabric'],
  },

  {
    slug: 'think-bayes',
    type: 'Reading',
    title: 'Think Bayes',
    summary: 'Think Bayes',
    date: '2025-08-05',
    readMins: 4,
    tags: ['Stakeholders', 'Data Trust'],
  },
]
