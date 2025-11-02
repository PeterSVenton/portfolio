'use client'

import TrackLink from '@/components/TrackLink'
// TODO: break down the use client into smaller components so some of it can be SSR

import { useEffect, useMemo, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


function TypingBubble() {
  return (
    <div className="flex justify-start">
      <div className="rounded-2xl border bg-white px-3 py-2 text-sm">
        <span className="inline-flex items-center gap-2">
          Thinking
          <Dots />
        </span>
      </div>
    </div>
  )
}

function Dots() {
  return (
    <span className="inline-flex">
      <span className="mx-0.5 h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:-200ms]" />
      <span className="mx-0.5 h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:-100ms]" />
      <span className="mx-0.5 h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400" />
    </span>
  )
}

function MessageBubble({ msg }: { msg: Msg }) {
  const isUser = msg.role === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={[
          'max-w-[85%] rounded-2xl border px-3 py-2 text-sm leading-relaxed',
          isUser ? 'bg-neutral-50' : 'bg-white',
        ].join(' ')}
      >
        <div className="prose prose-sm max-w-none text-neutral-800">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {msg.text}
            </ReactMarkdown>
        </div>

        {!isUser && msg.sources && msg.sources.length > 0 && (
  <div className="mt-2 border-t pt-2 text-xs text-neutral-600">
    <span className="mr-1 font-medium">Sources:</span>
    <ul className="ml-4 list-disc">
      {msg.sources.map((s, i) => (
        <li key={i}>
          {s.url ? (
            <TrackLink
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {s.title}
            </TrackLink>
          ) : (
            s.title
          )}
        </li>
      ))}
    </ul>
  </div>
)}
      </div>
    </div>
  )
}

type Msg = {
  role: 'user' | 'ai'
  text: string
    sources?: {
    title: string
    url?: string | null
  }[]
}

export default function ChatAboutPeter() {
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  // scroll to latest message
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading])

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading])

  async function send(q?: string) {
    const text = (q ?? input).trim()
    if (!text) return

    const userMsg: Msg = { role: 'user', text }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/ask-stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            question: input,
        }),
      })

      const data = await res.json()
      const botMsg: Msg = {
        role: 'ai',
        text: data.answer ?? data.error ?? 'Sorry, I could not generate a response.',
        sources: data.citations,
      }
      setMessages((m) => [...m, botMsg])
    } catch (err) {
      setMessages((m) => [
        ...m,
        { role: 'ai', text: 'Network error - please try again.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Speak with <strong>PETER</strong></h1>
          <p className="mt-1 text-sm text-neutral-600">
            This is not a conversation with Peter Venton, this is the <strong>P</strong>ersonal <strong>E</strong>ngineering <strong>T</strong>echnology & <strong>E</strong>xperience <strong>R</strong>esponder. A knowledge based assistant trained on my portfolio content to answer questions about my projects, skills, and experience.
          </p>
        </div>
      </div>

      {/* Chat surface */}
      <div
        ref={listRef}
        className="h-[60vh] w-full overflow-auto rounded-2xl border bg-white p-3"
      >
        {messages.length === 0 && (
          <div className="flex h-full items-center justify-center">
            <div className="max-w-sm text-center text-sm text-neutral-600">
              Curious about my experience? Ask a question.
            </div>
          </div>
        )}

        <div className="space-y-3">
          {messages.map((m, i) => (
            <MessageBubble key={i} msg={m} />
          ))}

          {loading && <TypingBubble />}
        </div>
      </div>

      {/* Composer */}
      <div className="mt-3 flex items-center gap-2">
        <input
          className="flex-1 rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-200"
          placeholder="e.g. What is Peter Venton's skillset?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && canSend && send()}
        />
        <button
          onClick={() => send()}
          disabled={!canSend}
          className="rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50 disabled:opacity-50"
        >
          Send
        </button>
      </div>

      {/* Footer */}
      <p className="mt-2 text-xs text-neutral-500">
        Answers summarise content from my site and projects, sources listed when available.
      </p>
    </div>
  )
}
