import Link from 'next/link'
import { articles, type Article } from '@/data/articles'
import clsx from 'clsx'

type ArticleType = Article['type']                
type FilterKind = 'All' | ArticleType            

const TYPE_META: Record<FilterKind, { label: string; desc?: string }> = {
  All:       { label: 'All' },
  DeepDive:  { label: 'Deep Dives',  desc: 'Hands on modeling, DAX, Fabric, governance.' },
  Explainer: { label: 'Explainers',  desc: 'Plain English takeaways for stakeholders.' },
  Reading:   { label: 'Readings',    desc: 'Notes/highlights from what I read.' },
}

export const metadata = {
  title: 'Articles | Deep Dives & Explainers',
  description: 'Technical BI patterns and Plain English explainers.',
}

type Search = { type?: string } //queryParameter in url

export default async function ArticlesPage({
  searchParams,
}: { searchParams?: Promise<Search> }) {

  const current = ((await searchParams)?.type ?? 'All') as FilterKind

  const list = current === 'All' ? articles : articles.filter(a => a.type === current)

  // determines the order
  const kinds: FilterKind[] = ['All', 'DeepDive', 'Explainer', 'Reading']

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-3 text-4xl font-semibold">Articles</h1>
      <p className="mb-6 text-neutral-600">
        Quick Reads about things I find most interesting
      </p>

      {/* Filter bar */}
      <div className="mb-8 flex flex-wrap gap-2">
        {kinds.map(kind => {
          const active = kind === current
          const href = kind === 'All' ? '/articles' : `/articles?type=${encodeURIComponent(kind)}`
          return (
            <Link
              key={kind}
              href={href}
              className={clsx(
                'rounded-full border px-3 py-1 text-sm',
                active ? 'bg-black text-white border-black' : 'hover:bg-black/5'
              )}
            >
              {TYPE_META[kind].label}
            </Link>
          )
        })}
      </div>

      {/* Description for current selection */}
      <p className="mb-8 text-sm text-neutral-500">
        {TYPE_META[current].desc ?? 'All articles'}
      </p>

      {/* Articles */}
      <ul className="grid gap-6 sm:grid-cols-2">
        {list.map(a => (
          <li key={a.slug} className="rounded-2xl border p-6 hover:bg-black/5">
            <p className="mb-2 text-xs uppercase tracking-wide text-neutral-500">
              {TYPE_META[a.type].label}
            </p>
            <h2 className="text-xl font-semibold">
              <Link href={`/${a.slug}`} className="hover:underline">
                {a.title}
              </Link>
            </h2>
            {a.summary ? (
              <p className="mt-2 text-neutral-700">{a.summary}</p>
            ) : null}
            {a.date ? (
              <p className="mt-4 text-xs text-neutral-500">{a.date}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  )
}
