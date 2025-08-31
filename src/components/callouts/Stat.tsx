import React from "react";

export default function Stat({ value, label }: { value: string | number; label: string }) {
  return (
    // Semantic html is good for knowledge base
    // <dl> description list element which encompasses a <dt> title and <dd> description
    <dl className="rounded-xl border p-4 text-center">
      <dt className="text-sm text-neutral-600">{label}</dt>
      <dd className="text-3xl font-semibold tabular-nums">{value}</dd>
    </dl>
  )
}