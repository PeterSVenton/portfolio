import { articles } from "@/data/articles"

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
 
export const dynamicParams = false