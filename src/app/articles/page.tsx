import Link from 'next/link'
import { deepDives, explainers } from '@/data/articles'

export const metadata = {
  title: 'Articles | Deep Dives & Explainers',
  description: 'Technical BI patterns and plain-English explainers.',
}

type ArticleKind = keyof typeof WRITING_CONFIG

const WRITING_CONFIG: Record<string, {
  header: string
  description: string
  href: string
  count: number
}> = {
  DeepDive: {
    header: "Deep Dives",
    description: "Hands-on modeling, DAX, Fabric, and governance for tech readers.",
    href: "/articles/deep-dives",
    count: deepDives.length,
  },
  Explainer: {
    header: "Explainers",
    description: "Plain-English takeaways and outcomes for non-tech readers.",
    href: "/articles/explainers",
    count: explainers.length,
  },

  Reading: {
    header: "Readings",
    description: "Plain-English takeaways and outcomes for non-tech readers.",
    href: "/readings",
    count: explainers.length,
  }
}

const ArticleItem = ({kind}: {kind: ArticleKind}) => {
    const { header, description, href, count } = WRITING_CONFIG[kind]
    return (
    <li className="rounded-2xl border p-6 hover:bg-black/5">
        <h2 className="text-2xl font-semibold">{header}</h2>
        <p className="mt-2 text-neutral-700">{description}</p>
        <p className="mt-4 text-sm text-neutral-500">{count} {count > 1 ? "articles" : "article"}</p>
        <Link href={href} className="mt-4 inline-block text-blue-600">
        Browse {header} &rarr;
        </Link>
    </li>
    )

}

export default function ArticlesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-6 text-4xl font-semibold">Articles</h1>
      <p className="mb-10 text-neutral-600">
        Two Article Types: <strong>Deep Dives</strong> for practitioners and <strong>Explainers</strong> for stakeholders.
      </p>

      <ul className="grid gap-6 sm:grid-cols-2">
        <ArticleItem kind="DeepDive" />
        <ArticleItem kind="Explainer" />
      </ul>
    </main>
  )
}
