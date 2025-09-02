import type { Metadata } from 'next'
import Image from 'next/image'
import TrackLink from '@/components/TrackLink'
import TechChip from '@/components/TechChip'
import { Tech } from '@/data/tech'
import { SocialOrder, Socials } from '@/data/socials' // expects { icon: LucideIcon, label, href }

export const metadata: Metadata = {
  title: 'About',
  description: 'Who I am, how I work, and the tools I use.',
}

const mailto = (() => {
  const subject = encodeURIComponent('Project inquiry: BI help')
  const body = encodeURIComponent(
    `Hi Peter,

I'm reaching out about…

Company:
Budget:
Timeline:`
  )
  return `mailto:contact@peterventon.co.uk?subject=${subject}&body=${body}`
})()

const SKILL_OVERVIEW = ["Semantic modeling & conventions", "Power BI · DAX · SQL · Python", "Governance & time-intelligence patterns"]

const BULLETS: Record<string, Bullet[]> = {
    principles: [
    ["Shared model first.", "Thin reports sit on top of a governed semantic layer."],
    ["Name it once, reuse everywhere.", "Remove duplicated measures and logic."],
    ["Design for change.", "New questions shouldn't require rewrites."],
    ["Trust & protection.", "Right data, right people (RLS/OLS and model boundaries)."]
    ],

    howIWork: [
    ["Discovery.", "Align on KPIs, definitions, and source systems."],
    ["Modeling & standards.", "Star schema, conventions, calc groups, testing."],
    ["Delivery & handover.", "Dashboards + docs, with measurable outcomes."]
    ],

    highlights: [
        "Reduced duplicate metrics by ~30% via centralized measures & conventions.",
        "Migrated legacy reports to Power BI (paginated + interactive) for compliance.",
        "Cut maintenance by ~3–4 hours/week through model cleanup & automation."
    ]


}

const SectionCardWithTitle = ({title, children}: {title: string, children: React.ReactNode}) => {
    return(
        <section className="rounded-2xl border p-5">
            <h2 className="text-xl font-semibold mb-3">{title}</h2>
            {children}
          </section>


    )
}

type Bullet = [strong: string, body: string] | string

const SectionCardBulleted = ({title, bullets}: {title: string, bullets: Bullet[]}) => {
    return(
        <SectionCardWithTitle title={title}>
            <ul className="list-disc ps-5 text-neutral-700">
                {bullets.map((b, i)=>{
                    if (typeof(b)==="string"){  // if its a string then return the string
                        return <li key={i}>{b}</li>
                    }

                    const [strong, body] = b  // its not a string so it must be a bullet type
                    return(
                    <li key={i}>
                      <strong>{strong}</strong> {body}
                    </li>
                )
            }
            )}
            </ul>
          </SectionCardWithTitle>

    )
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
              'https://www.linkedin.com/in/your-handle',
              'https://github.com/your-handle',
            ],
          }),
        }}
      />

      {/* Header */}
      <section className="grid items-center gap-6 sm:grid-cols-[128px_1fr]">
        <div className="relative h-28 w-28 overflow-hidden rounded-2xl border">
          <Image src="/selfie.JPG" alt="Peter Venton" fill className="object-cover" />
        </div>

        <div>
          <h1 className="text-4xl font-semibold">About Me</h1>
          <p className="mt-3 text-neutral-700">
            BI engineer & analyst focused on <strong>clean semantic models</strong>, <strong>tested
            transformations</strong>, and <strong>governed delivery</strong>. I work across the stack,
            from data modeling and SQL/Python to Fabric/Azure and Power BI, so solutions are fast,
            consistent, and easy to evolve.
          </p>

          {/* Quick facts */}
          <ul className="mt-4 flex flex-wrap gap-3 text-sm">
            {SKILL_OVERVIEW.map((skill, i)=>(
                    <li key={i} className="rounded-xl border px-3 py-1.5">{skill}</li>
                )
            )}
          </ul>
        </div>
      </section>


      {/* Body layout */}
      <section className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Sidebar (sticky) */}
        <aside className="lg:sticky lg:top-20 self-start">
          <div className="rounded-2xl border p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">Elsewhere</h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {SocialOrder.map((label, key) => {
                const { href, Icon } = Socials[label]
                const external = href.startsWith('http')
                return (
                  <li key={key}>
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer me' : undefined}
                      className="group inline-flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                      aria-label={label}
                      title={label}
                    >
                        <Icon size={30} />
                      <span>{label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

            <hr className="my-4" />

            <div className="flex gap-2">
              <TrackLink href="/experience" className="flex-1 rounded-xl border px-3 py-2 text-sm">
                View experience
              </TrackLink>
              <TrackLink href="/work" className="flex-1 rounded-xl border px-3 py-2 text-sm">
                Projects
              </TrackLink>
            </div>

            <a href={mailto} className="mt-3 block rounded-xl bg-black px-3 py-2 text-center text-sm text-white">
              Get in touch
            </a>
          </div>
        </aside>

        {/* Main content (carded sections) */}
        <div className="space-y-8">
          <SectionCardBulleted title={"Principles"} bullets={BULLETS["principles"]} />

          <SectionCardBulleted title={"How I Work"} bullets={BULLETS["howIWork"]} />


          <SectionCardWithTitle title={"Toolbox"}>
            <TechChip
              items={[
                Tech.PowerBI,
                Tech.DAX,
                Tech.SQL,
                Tech.ReportBuilder,
                Tech.PowerAutomate,
                Tech.Python,
                Tech.Pandas,
                Tech.NumPy,
                Tech.Matplotlib,
                Tech.Azure,
                Tech.AWS,
              ]}
            />
            <p className="mt-3 text-sm text-neutral-500">Click any chip to visit the official site.</p>
          </SectionCardWithTitle>

          <SectionCardBulleted title={"Selected Highlights"} bullets={BULLETS["highlights"]} />

          <SectionCardWithTitle title={"Featured writing"}>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              <li className="rounded-xl border p-4 hover:bg-black/5">
                <TrackLink href="/articles/deep-dives" className="block">
                  <h3 className="font-medium">Deep Dives</h3>
                  <p className="mt-1 text-sm text-neutral-700">Hands-on modeling, DAX, governance.</p>
                  <span className="mt-2 inline-block text-blue-600">Browse →</span>
                </TrackLink>
              </li>
              <li className="rounded-xl border p-4 hover:bg-black/5">
                <TrackLink href="/articles/explainers" className="block">
                  <h3 className="font-medium">Explainers</h3>
                  <p className="mt-1 text-sm text-neutral-700">Plain-English outcomes for stakeholders.</p>
                  <span className="mt-2 inline-block text-blue-600">Browse →</span>
                </TrackLink>
              </li>
            </ul>
          </SectionCardWithTitle>
        </div>
      </section>
    </main>
  )
}
