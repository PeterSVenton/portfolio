import { projects } from "@/data/projects"
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
    // TODO: check that the slugs project exist so we don't have dead routes
  const slugs = projects.map(p => ({ slug: p.slug })) 
  return slugs
}

// metadata generated dynamically based on the document
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Not found",
    }
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `https://peterventon.co.uk/projects/${slug}`,
    },
  }
}
 
export const dynamicParams = false