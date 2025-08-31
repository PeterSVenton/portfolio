// scripts/mdxtohtml.mjs
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import { Metric, Callout } from '@/components/callouts'


// super basic function
function stripImports(file) {
  return file
    .split(/\n/)
    .filter(line => !/^\s*import\b/.test(line))
    .join('\n')
}




const components = { Metric, Callout }

const MD_FILES_PATH = path.join(process.cwd(), 'src/app/md-pages')
const OUTPUT_PATH = path.join(process.cwd(), 'bedrock', 'html')

// compiles a md/mdx page to html, requires the components to be specified
async function compileOne(filePath) {
  const mdx = await fs.readFile(filePath, 'utf8')
  const mdxClean = stripImports(mdx)

  const { default: MDXContent } = await evaluate(mdxClean, {
    ...runtime,
    useMDXComponents: () => components,
    baseUrl: pathToFileURL(filePath)
  })


  const html = renderToStaticMarkup(React.createElement(MDXContent, { components }))
  // console.log('\n--- RAW HTML ---\n', html)

  const safe = String(
    await unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process(html)
  )

  // console.log('\n--- SAFE HTML ---\n', safe)

  const slug = path.basename(filePath).replace(/\.mdx$/, '')
  await fs.mkdir(OUTPUT_PATH, { recursive: true })
  await fs.writeFile(path.join(OUTPUT_PATH, `${slug}.html`), safe, 'utf8')
}

// checks every file in the md-pages dir
async function run() {
  const args = process.argv.slice(2)
  if (args.length === 0){
    throw new Error("Must specify an argument, to build all run with -a")
  }

  if (args.includes('-a')) {
    const files = (await fs.readdir(MD_FILES_PATH)).filter(f => /\.mdx$/.test(f))
    for (const f of files) {
      try { await compileOne(path.join(MD_FILES_PATH, f)); console.log('generated html for', f) }
      catch (e) { console.error('failed to generate html for', f, '\n', e) }
    }
    return
  }

  // build just the provided slugs/paths
  for (const arg of args) {
    const abs = path.resolve(arg)
    try { await compileOne(abs); console.log('generated html for', abs) }
    catch (e) { console.error('failed to generate html for', abs, '\n', e) }
  }
}

run().catch(err => (console.error(err), process.exit(1)))
