  import fs from "fs"
  import path from "path"

  export function getMdPages(directory: "articles" | "projects" | "kb-internal" ){
    const files = fs.readdirSync(path.join(process.cwd(), "src", "app", "md-pages", directory))

    const slugs = files
      .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
      .map((file) => (file.replace(/\.mdx?$/, "")))

    return slugs

  }
  