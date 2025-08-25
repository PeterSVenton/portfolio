import { TECH_META, CATEGORY_STYLE, Tech, type TechMeta } from '@/data/tech'
import clsx from 'clsx'

export default function TechChip({ items }: { items: Tech[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2 text-xs">
      {items.map((t) => {
        const meta: TechMeta = TECH_META[t]
        const chipStyle = CATEGORY_STYLE[meta.category]
        return (
          <li key={t}>
            <a
              href={meta.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Open ${meta.label}`}
              aria-label={`${meta.label} (${meta.category}) — opens in new tab`}
              className={clsx(
                'inline-block rounded-full px-2 py-0.5 ring-1 transition',
                'hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20',
                chipStyle
              )}
            >
            {meta.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
