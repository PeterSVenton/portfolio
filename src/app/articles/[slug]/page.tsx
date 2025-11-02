import { getMdPages } from "@/app/helpers/getMdPages"
import type { Metadata } from 'next'


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/app/md-pages/articles/${slug}.mdx`)
 
  return <Post />
}
 
export function generateStaticParams() {
  
    // TODO: check that the slugs article exist so we don't have dead routes
  const pages = getMdPages("articles")
  return pages.map(p=>({ slug: p }))
}

// metadata generated dynamically based on the document
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { metadata } = await import(`@/app/md-pages/articles/${slug}.mdx`)

  if (!metadata) {
    return {
      title: "Not found",
    }
  }

  return {
    ...metadata,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://peterventon.co.uk/articles/${slug}`,
    },
  }
}
 
export const dynamicParams = false