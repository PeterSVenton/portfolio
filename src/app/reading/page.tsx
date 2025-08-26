// app/reading/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOKS, type BookStatus } from '@/data/books'

export const metadata: Metadata = {
  title: 'Reading',
  description: 'Books I’ve read or am reading, with notes.',
}

const STATUS_STYLE: Record<BookStatus, string> = {
  read: 'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200',
  reading: 'bg-amber-100 text-amber-800 ring-1 ring-amber-200',
  queued: 'bg-slate-100 text-slate-800 ring-1 ring-slate-200',
}

export default function ReadingPage() {
  const byStatus = (s: BookStatus) => BOOKS.filter(b => b.status === s)

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-semibold">Reading</h1>
      <p className="mt-2 text-neutral-700">
        Tech books I find useful. Notes on selected titles.
      </p>

      {(['reading','read','queued'] as BookStatus[]).map(status => (
        <section key={status} className="mt-8">
          <h2 className="text-xl font-semibold capitalize">
            {status === 'reading' ? 'Currently reading' : status === 'read' ? 'Finished' : 'Queued'}
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {byStatus(status).map(b => (
              <li key={b.slug} className="rounded-2xl border p-5 hover:bg-black/5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold">{b.title}</h3>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${STATUS_STYLE[b.status]}`}>
                    {b.status}
                  </span>
                </div>
                <p className="text-sm text-neutral-600">{b.author}{b.year ? ` · ${b.year}` : ''}</p>
                {b.blurb && <p className="mt-2 text-sm text-neutral-700">{b.blurb}</p>}

                {b.tags?.length ? (
                  <ul className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-700">
                    {b.tags.map(t => (
                      <li key={t} className="rounded-full border px-2 py-0.5">{t}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  {b.notes && <Link href={b.notes} className="text-blue-600">Notes →</Link>}
                  {b.link && (
                    <a href={b.link} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      Book page ↗
                    </a>
                  )}
                  {b.rating && (
                    <span aria-label={`Rating ${b.rating} of 5`} className="ms-auto text-xs text-neutral-500">
                      {'★'.repeat(b.rating)}{'☆'.repeat(5 - b.rating)}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  )
}
