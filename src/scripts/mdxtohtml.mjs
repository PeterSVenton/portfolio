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
import rehypeMermaid from 'rehype-mermaid'
import matter from 'gray-matter'
import { Metric, Callout } from '@/components/callouts'

function stripImports(file) {
  return file
    .split(/\n/)
    .filter(line => !/^\s*import\b/.test(line))
    .join('\n')
}

function flattenObject(obj, parentKey = '', result = {}) {
  for (const [key, value] of Object.entries(obj)) {
    const newKey = parentKey ? `${parentKey}_${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

const components = { Metric, Callout }

const MD_FILES_PATH = path.join(process.cwd(), 'src/app/md-pages')
const OUTPUT_PATH = path.join(process.cwd(), 'bedrock', 'html')

async function compileOne(filePath) {
  const raw = await fs.readFile(filePath, 'utf8')
  const { data: metadata, content } = matter(raw)
  const mdxClean = stripImports(content)

  const { default: MDXContent } = await evaluate(mdxClean, {
    ...runtime,
    useMDXComponents: () => components,
    baseUrl: pathToFileURL(filePath)
  })

  const html = renderToStaticMarkup(React.createElement(MDXContent, { components }))

  const safe = String(
    await unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeSanitize)
      .use(rehypeMermaid)
      .use(rehypeStringify)
      .process(html)
  )

  const slug = path.basename(filePath).replace(/\.mdx$/, '')
  await fs.mkdir(OUTPUT_PATH, { recursive: true })
  await fs.writeFile(path.join(OUTPUT_PATH, `${slug}.html`), safe, 'utf8')

  const bedrock_metadata = {"metadataAttributes": flattenObject(metadata)}

  await fs.writeFile(
    path.join(OUTPUT_PATH, `${slug}.html.metadata.json`),
    JSON.stringify(bedrock_metadata, null, 2),
    'utf-8'
  )
}

async function run() {
  const args = process.argv.slice(2)
  if (args.length === 0) {
    throw new Error('Must specify an argument, to build all run with -a')
  }

  if (args.includes('-a')) {
    const directories = await fs.readdir(MD_FILES_PATH)
    for (const d of directories) {
      const mdxPath = path.join(MD_FILES_PATH, d)
      const files = (await fs.readdir(mdxPath)).filter(f => /\.mdx$/.test(f))
      for (const f of files) {
        try {
          await compileOne(path.join(mdxPath, f))
          console.log('generated html and metadata for', f)
        } catch (e) {
          console.error('failed to generate html/metadata for', f, '\n', e)
        }
      }
    }
    return
  }

  for (const arg of args) {
    const abs = path.resolve(arg)
    try {
      await compileOne(abs)
      console.log('generated html for', abs)
    } catch (e) {
      console.error('failed to generate html for', abs, '\n', e)
    }
  }
}

run().catch(err => (console.error(err), process.exit(1)))
