import { getMdPages } from "./getMdPages";

export async function getMdPagesMetadata(directory: "projects" | "articles"){
    const pages = getMdPages(directory)
    const output = []

    for (const p of pages){
        const { metadata } = await import(`@/app/md-pages/${directory}/${p}.mdx`)
        output.push({
            ...metadata,
            slug: p
        })
    }

    return output
}