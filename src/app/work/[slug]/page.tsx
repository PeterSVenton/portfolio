import type { Metadata } from 'next'
import { getMdPages } from '@/app/helpers/getMdPages'
import { redirect } from 'next/navigation'


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post, metadata } = await import(`@/app/md-pages/projects/${slug}.mdx`)

  if (!metadata.active){
    redirect("/bedrock/unreleased")
  }
 
  return <Post />
}
 
export function generateStaticParams() {
    // TODO: check that the slugs project exist so we don't have dead routes
  // const slugs = projects.map(p => ({ slug: p.slug })) 
  // return slugs

  const pages = getMdPages("projects")

  return pages.map(p=>({ slug: p }))
}

// metadata generated dynamically based on the document
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { metadata } = await import(`@/app/md-pages/projects/${slug}.mdx`)

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
      url: `https://peterventon.co.uk/projects/${slug}`,
    },
  }
}
 
export const dynamicParams = false