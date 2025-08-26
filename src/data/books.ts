// data/books.ts
export type BookStatus = 'read' | 'reading' | 'queued'

export type Book = {
  slug: string
  title: string
  author: string
  year?: number
  status: BookStatus
  tags: string[]
  link?: string          // publisher/store page
  notes?: string         // route to your notes, e.g. /reading/dwia
  blurb?: string         // 1–2 lines in your words
  rating?: 1|2|3|4|5
}

export const BOOKS: Book[] = [
  {
    slug: 'data-warehouse-toolkit',
    title: 'The Data Warehouse Toolkit',
    author: 'Ralph Kimball, Margy Ross',
    year: 2013,
    status: 'read',
    tags: ['Modeling','BI','Dimensional'],
    blurb: 'Dimensional modeling patterns that still matter for clear, queryable analytics.',
    notes: '/reading/data-warehouse-toolkit',
    link: 'https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/books/',
    rating: 5,
  },
  {
    slug: 'definitive-guide-to-dax',
    title: 'The Definitive Guide to DAX',
    author: 'Marco Russo, Alberto Ferrari',
    year: 2020,
    status: 'reading',
    tags: ['DAX','Power BI'],
    blurb: 'Deep mental model for filter context and CALCULATE.',
    notes: '/reading/definitive-guide-to-dax',
    link: 'https://www.sqlbi.com/books/the-definitive-guide-to-dax-2nd-edition/',
    rating: 5,
  },
  {
    slug: 'storytelling-with-data',
    title: 'Storytelling with Data',
    author: 'Cole Nussbaumer Knaflic',
    year: 2015,
    status: 'read',
    tags: ['Visualization','UX'],
    blurb: 'Crisp design principles for decision-oriented dashboards.',
    link: 'https://www.storytellingwithdata.com/books',
    rating: 4,
  },
  {
    slug: 'ddia',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    year: 2017,
    status: 'queued',
    tags: ['Engineering','Data'],
    blurb: 'Systems thinking for data pipelines and reliability.',
    link: 'https://dataintensive.net/',
  },
]
