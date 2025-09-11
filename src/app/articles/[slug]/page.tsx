import { articles } from "@/data/articles"
import type { Metadata } from 'next'


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/app/md-pages/${slug}.mdx`)
 
  return <Post />
}
 
export function generateStaticParams() {
  
    // TODO: check that the slugs article exist so we don't have dead routes
  const slugs = articles.map(a => ({slug: a.slug}))
  return slugs
}

// metadata generated dynamically based on the document
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((p) => p.slug === slug)

  if (!article) {
    return {
      title: "Not found",
    }
  }

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://peterventon.co.uk/articles/${slug}`,
    },
  }
}
 
export const dynamicParams = false