export function Metric({
  value,
  label,
  note,
}: {
  value: string | number
  label: string
  note?: string
}) {
  return (
    <div className="rounded-xl border p-4 text-center">
      <div className="text-3xl font-semibold tabular-nums">{value}</div>
      <div className="text-sm text-neutral-600">{label}</div>
      {note ? <div className="mt-1 text-xs text-neutral-500">{note}</div> : null}
    </div>
  )
}

export function Stat({ value, label }: { value: string | number; label: string }) {
  return (
    // Semantic html is good for knowledge base
    // <dl> description list element which encompasses a <dt> title and <dd> description
    <dl className="rounded-xl border p-4 text-center">
      <dt className="text-sm text-neutral-600">{label}</dt>
      <dd className="text-3xl font-semibold tabular-nums">{value}</dd>
    </dl>
  )
}