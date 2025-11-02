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