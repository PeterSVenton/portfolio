//dummy for now
export type Article = {
  slug: string
  type: 'DeepDive' | 'Explainer' | 'Reading'
  title: string
  description: string
  date: string
  readMins: number
  tags?: string[]
}
