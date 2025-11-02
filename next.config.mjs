import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import rehypeExternalLinks from "rehype-external-links";
import remarkMath from 'remark-math'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeMermaid from 'rehype-mermaid';
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow .mdx extensions for files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkMath,
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: 'metadata' }]
    ],
    rehypePlugins: [
      rehypeHighlight,
      rehypeKatex,
      [rehypeExternalLinks, {
        target: "_blank",
        rel: ["noopener", "noreferrer", "nofollow"]
      }],
      rehypeMermaid
    ],
  },
})
 
// Combine MDX and Next.js config
export default withMDX(nextConfig)