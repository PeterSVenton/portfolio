import type { Metadata } from 'next'
import TrackLink from '@/components/TrackLink'
import { experience } from '@/data/experience'
import TechChip from '@/components/TechChip'
import { Tech } from '@/data/tech'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Roles, impact, and tools with links to related work.',
}

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <header className="mb-8 flex items-center gap-3">
        <h1 className="text-4xl font-semibold">Experience</h1>
        <TrackLink
          target="_blank"
          href="/PeterVentonCV.pdf"
          gaEvent="cv_download"
          className="ms-auto rounded-xl border px-3 py-2 text-sm transition hover:bg-black hover:text-white"
        >
          Download CV
        </TrackLink>
      </header>
      {/* Border left is the timeline, the blips are done in the map  */}
      <ol className="relative border-l pl-6">
        <div className="absolute left-[-1px] -bottom-12 block h-12 rounded-full border-l" />

        <span className="absolute -left-3 -bottom-12 inline-flex items-center justify-center h-6 w-6 rounded-full border bg-white">
            S
        </span>

        {experience.map((item, i) => (
          <li key={i} className="mb-10 ms-6">
            {/* timeline dot */}
            <span className="absolute -start-3 block h-6 w-6 rounded-full border bg-white" />

            <div>
              <h2 className="text-xl font-semibold">
                {item.role}{' '}
                <span className="text-neutral-500">
                  @
                  {item.companyUrl ? (
                    <TrackLink
                      href={item.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      gaEvent="exp_company_click"
                      gaParams={{ company: item.company }}
                      className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-800"
                    >
                      {item.company}
                    </TrackLink>
                  ) : (
                    item.company
                  )}
                </span>
              </h2>

              <span className="text-sm text-neutral-500">
                <time dateTime={iso(item.start)}>{fmt(item.start)}</time>
                {' — '}
                <time dateTime={item.end !== 'Present' ? iso(item.end) : undefined}>
                  {fmt(item.end)}
                </time>
                {item.location ? ` · ${item.location}` : ''}
              </span>
            </div>

            {item.summary ? <p className="mt-2">{item.summary}</p> : null}

            {item.bullets?.length ? (
              <ul className="mt-3 list-disc ps-5 text-neutral-700">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            ) : null}

            {item.stack?.length ? <TechChip items={item.stack as Tech[]} /> : null}


            {item.caseStudyUrl ? (
              <p className="mt-3">
                <TrackLink
                  href={item.caseStudyUrl}
                  gaEvent="timeline_case_click"
                  gaParams={{ role: item.role, company: item.company }}
                  className="text-blue-600"
                >
                  Related case study &rarr;
                </TrackLink>
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </main>
  )
}

function fmt(s: string) {
  if (s === 'Present') return s
  try {
    const [y, m] = s.includes('-') ? s.split('-').map(Number) : [NaN, NaN]
    if (!isNaN(y) && !isNaN(m)) {
      return new Date(y, m - 1).toLocaleString(undefined, { month: 'short', year: 'numeric' })
    }
  } catch {}
  return s
}

function iso(s: string) {
  if (s === 'Present') return ''
  return s.length === 7 ? `${s}-01` : s
}
