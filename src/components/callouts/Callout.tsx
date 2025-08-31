import { Info, CheckCircle2, AlertTriangle, ShieldAlert, Lightbulb, type LucideIcon } from 'lucide-react'
import React from 'react';

type Kind = 'info' | 'success' | 'warning' | 'danger' | 'tip'

const STYLES: Record<Kind, { icon: LucideIcon; box: string; badge: string }> = {
  info: {icon: Info, box: 'bg-sky-50 border-sky-200', badge: 'bg-sky-100 text-sky-800' },
  success: {icon: CheckCircle2, box: 'bg-emerald-50 border-emerald-200', badge: 'bg-emerald-100 text-emerald-800' },
  warning: {icon: AlertTriangle, box: 'bg-amber-50 border-amber-200', badge: 'bg-amber-100 text-amber-800' },
  danger: {icon: ShieldAlert, box: 'bg-rose-50 border-rose-200', badge: 'bg-rose-100 text-rose-800' },
  tip: {icon: Lightbulb, box: 'bg-violet-50 border-violet-200', badge: 'bg-violet-100 text-violet-800' },
}

export default function Callout({
  kind = 'info',
  title,
  children,
  className,
}: {
  kind?: Kind
  title?: string
  children: React.ReactNode
  className?: string
}) {
  const { icon: Icon, box, badge } = STYLES[kind]
  return (
    <aside role="note" className={`rounded-xl border p-4 ${box} ${className ?? ''}`}>
      <div className="mb-2 inline-flex items-center gap-2">
        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${badge}`}>
          <Icon className="h-4 w-4" />
          <span className="capitalize">{title ?? kind}</span>
        </span>
      </div>
      <div className="text-sm text-neutral-800">{children}</div>
    </aside>
  )
}
