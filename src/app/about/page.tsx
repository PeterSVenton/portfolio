import type { Metadata } from 'next'
import Image from 'next/image'
import TrackLink from '@/components/TrackLink'
import { SocialOrder, Socials } from '@/data/socials'
import { config } from '@/data/config'

export const metadata: Metadata = {
  title: 'About',
  description: 'Who I am, how I work, and the tools I use.',
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      {/* SEO: person profile */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Peter Venton',
            url: 'https://www.peterventon.co.uk/',
            sameAs: [
              'mailto:contact@peterventon.co.uk',
              'https://www.linkedin.com/in/peter-venton-082bb3230/',
              'https://github.com/PeterSVenton',
            ],
          }),
        }}
      />

      {/* top bit photo + short description*/}
      <section className="flex flex-col items-start gap-10 md:flex-row md:items-center">
        <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
          <Image src="/selfie.JPG" alt="Peter Venton" fill className="object-cover" />
        </div>

        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="text-4xl font-semibold">About Me</h1>
          <p className="mt-3 text-neutral-700 text-pretty">
            I work as a BI engineer & analyst with a focus on clean semantic models and reliable
            data pipelines. I enjoy turning messy, scattered data into simple structures that teams
            can rely on day to day.
          </p>
          <p className="mt-2 text-neutral-700 text-pretty">
            I care as much about the data model and naming conventions as I do about the final
            dashboard. When the foundations are solid, new questions are easier to answer and
            reports are simpler to maintain.
          </p>

          {/* Socials inline */}
          <ul className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            {SocialOrder.map((label, key) => {
              const { href, Icon } = Socials[label]
              const external = href.startsWith('http')
              return (
                <li key={key}>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer me' : undefined}
                    className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1.5 text-neutral-700 hover:bg-black/5"
                  >
                    <Icon size={24} />
                    <span>{label}</span>
                  </a>
                </li>
              )
            })}
            {config.showGit && (
              <li>
                <a
                  href={Socials.Email.href}
                  className="inline-flex items-center gap-2 rounded-full border border-black px-4 py-1.5 text-sm font-medium text-black hover:bg-black hover:text-white transition-colors"
                >
                  Get in touch
                </a>
              </li>
            )}
          </ul>
        </div>
      </section>

      {/* grid */}
      <section className="mt-10 grid gap-8 text-sm text-neutral-700 md:grid-cols-2 md:gap-x-10 md:gap-y-6">
        <div className="space-y-2">
          <h2 className="text-[11px] font-semibold tracking-wide text-neutral-600">
            WHAT I DO
          </h2>
          <p>
            BI engineering across modeling, reporting, and light automation. Most of my work sits
            around building and maintaining semantic layers that support multiple teams.
          </p>
          <p>
            I like working close to the business, helping translate questions into models,
            definitions, and dashboards that people actually use.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-[11px] font-semibold tracking-wide text-neutral-600">
            HOW I WORK
          </h2>
          <ul className="space-y-1.5">
            <li>• Start with KPIs, grain, and source-of-truth systems before modeling.</li>
            <li>• Use conventions and shared logic so dashboards stay thin and consistent.</li>
            <li>• Iterate: simplify, document, and improve performance over time.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-[11px] font-semibold tracking-wide text-neutral-600">
            TOOLS &amp; CERTS
          </h2>

          <p>
            <span className="font-semibold">Tools:</span> Power BI, DAX, SQL, Power Automate,
            Python, Azure, AWS.
          </p>

          <div>
            <p className="font-semibold">Certifications:</p>
            <ul className="mt-1 space-y-0.5 list-disc">
              <li>DP700 – Microsoft Certified: Fabric Data Engineer Associate</li>
              <li>DP600 – Microsoft Certified: Fabric Analytics Engineer Associate</li>
              <li>Member of British Mensa</li>
            </ul>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-[11px] font-semibold tracking-wide text-neutral-600">
            NOTABLE PROJECTS
          </h2>
          <ul className="space-y-1.5">
            <li>
              • <strong>GA4 → BigQuery → Power BI pipeline</strong> with a dimensional model for
              long-term product reporting.
            </li>
            <li>
              • <strong>AI-powered portfolio assistant</strong> and personal site built with
              TypeScript and AWS Bedrock.
            </li>
          </ul>
        </div>
      </section>

      {/* footer / writing sentence */}
      <section className="mt-6 text-sm text-neutral-700">
  <p className='text-center'>
    I also write. Check out my{' '}
    <TrackLink
      href="/work"
      className="underline-offset-4 hover:underline text-blue-600"
    >
      work projects
    </TrackLink>{' '}
    or read my{' '}
    <TrackLink
      href="/articles"
      className="underline-offset-4 hover:underline text-blue-600"
    >
      articles
    </TrackLink>{' '}
    on analytics, exams, and anything else that catches my interest.
  </p>
    </section>
    </main>
  )
}
