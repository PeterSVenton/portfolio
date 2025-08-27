import type { Metadata } from 'next'
import Link from 'next/link'
import TrackLink from '@/components/TrackLink'
import TechChip from '@/components/TechChip'
import { projects } from '@/data/projects'


export const metadata: Metadata = {
  title: 'Projects',
  description: 'Outcome-first case studies.',
}

type Search = { type?: string } //queryParameter in url

export default async function WorkPage({ searchParams }: { searchParams: Promise<Search> }) {
  const type = (await searchParams).type as undefined | 'Company project' | 'Personal project'
  const filtered = type ? projects.filter(p => p.context === type) : projects
  const byDate = filtered //TODO: sort by dates for relevancy

  const types: Array<{ label: string; value?: Search['type'] }> = [
    { label: 'All' },
    { label: 'Company', value: 'Company project' },
    { label: 'Personal', value: 'Personal project' }
]

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header>
        <h1 className="text-4xl font-semibold">Projects</h1>
        <p className="mt-2 text-neutral-700">
          Outcome-first case studies. Each shows the problem, approach, and measurable impact.
        </p>

        {/* Filter options */}
        <ul className="mt-5 flex flex-wrap gap-2 text-sm">
          {types.map(({ label, value }) => {
            const href = value ? `/work?type=${encodeURIComponent(value)}` : '/work'
            const active = (!type && !value) || (type && value === type)
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`rounded-full px-3 py-1 ring-1 ring-neutral-300 ${
                    active ? 'bg-black text-white ring-black' : 'bg-white hover:bg-black/5'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </header>

      {/* Cards */}
      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {byDate.map((p) => (
          <li key={p.slug} className="rounded-2xl border p-5 hover:bg-black/5">
            <h2 className="text-lg font-semibold">
              <TrackLink href={`/work/${p.slug}`}>{p.title}</TrackLink>
            </h2>
            <p className="mt-1 text-sm text-neutral-700">{p.summary}</p>
            <p className="mt-1 text-xs text-neutral-500">{p.period} · {p.context}</p>

            {p.stack?.length && (
              <div className="mt-2">
                <TechChip items={p.stack} />
              </div>
            )}

            {p.impact?.length && (
              <ul className="mt-3 list-disc ps-5 text-sm text-neutral-700">
                {p.impact.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <TrackLink href={`/work/${p.slug}`} className="text-blue-600">Read case study →</TrackLink>
              {p.links?.deepDive && <TrackLink href={p.links.deepDive} className="text-blue-600">Deep Dive</TrackLink>}
              {p.links?.explainer && <TrackLink href={p.links.explainer} className="text-blue-600">Explainer</TrackLink>}
              {p.links?.repo && (
                <a href={p.links.repo} target="_blank" rel="noopener noreferrer" className="text-blue-600">GitHub</a>
              )}
              {p.links?.demo && (
                <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600">Demo</a>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Empty */}
      {byDate.length === 0 && (
        <p className="mt-10 text-neutral-600">No projects yet for this filter.</p>
      )}
    </main>
  )
}
