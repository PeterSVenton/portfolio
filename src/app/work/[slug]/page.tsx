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
  return [{ slug: 'report-migration' }, { slug: 'personal-portfolio' }]
}
 
export const dynamicParams = false