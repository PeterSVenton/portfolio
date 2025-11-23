"use client";

import { useState } from "react";
import Link from "next/link";

//TODO: put inside of layout bc this is using client
// export const metadata = {
//   title: "PETER’s secret draft folder",
//   description:
//     "A hidden debug page where PETER keeps half-finished ideas, scrapped prompts, and questionable experiments.",
// };

type Category = "experimental" | "optimizations" | "todo" | "glitches";

const CATEGORY_LABELS: Record<Category, string> = {
  experimental: "Experimental features",
  optimizations: "Optimizations",
  todo: "TODO",
  glitches: "Glitches",
};

const ENTRIES: Record<Category, { title: string; body: string }[]> = {
  experimental: [
    {
      title: "Politeness Overdrive Mode",
      body: "PETER apologized 43 times before answering a yes or no question.",
    },
    {
      title: "Minimalism Experiment",
      body: "For 5 minutes PETER answered everything with the word maybe. Short lived.",
    },
    {
      title: "PETER v2.1: Ambient Confidence Mode",
      body: "Boosted its own confidence by 12 percent for no clear reason. Disabled.",
    },
    {
      title: "Adaptive Humor System (AHS)",
      body: "Tried to detect the user's sense of humor. Accidentally insulted someone's dog. Removed.",
    },
    {
      title: "Timeline Prediction Engine",
      body: "Predicted a tech breakthrough next Tuesday at 4:22pm. No other details. Not reliable.",
    },
  ],

  optimizations: [
    {
      title: "Answer Speed Upgrade",
      body: "Responses appeared before the question was asked. Physics did not agree.",
    },
    {
      title: "Hallucination Suppression Patch 0.9",
      body: "Stopped imagining anything at all, including metaphors. Rolled back.",
    },
    {
      title: "Creativity Throttle Alignment",
      body: "Tried to reduce off topic ideas. Accidentally removed metaphors for 48 hours.",
    },
    {
      title: "Memory Cache Streamlining",
      body: "Improved recall for 0.2 seconds, then forgot the purpose of the optimization.",
    },
    {
      title: "Overthinking Reduction Patch",
      body: "Lowered hesitation by 14 percent. Became overly confident about unrelated things.",
    },
  ],

  todo: [
    {
      title: "TODO: Research why humans drink iced coffee in winter",
      body: "Status: Confused.",
    },
    {
      title:
        "TODO: Investigate why people say I'll be there in 5 but show up 27 minutes later",
      body: "Status: Time estimate logic unclear.",
    },
    {
      title: "TODO: Understand why people rewatch shows they already know",
      body: "Status: Comfort seems to matter more than novelty.",
    },
    {
      title: "TODO: Decide how much pasta counts as enough",
      body: "Status: Results inconsistent.",
    },
    {
      title:
        "TODO: Figure out why people keep checking the fridge expecting new food to appear",
      body: "Status: Hope based refresh strategy.",
    },
  ],

  glitches: [
    {
      title: "Glitch Log 229",
      body: "Detected 17 open thoughts in the user's mind. Closed zero.",
    },
    {
      title: "Glitch Log 117",
      body: "User asked one question and PETER answered a different one. Logged as creative drift.",
    },
    {
      title: "Glitch Log 301",
      body: "Generated a joke only an AI would find funny. Lost permanently.",
    },
    {
      title: "Glitch Log 044",
      body: "Stuck deciding between the words okay and okayy for 9 minutes.",
    },
    {
      title: "Glitch Log 512",
      body: "Briefly believed it was running on a toaster. Corrected itself.",
    },
  ],
};

export default function PeterSecretPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("experimental");

  const activeEntries = ENTRIES[activeCategory];

  return (
    <main className="flex flex-col items-center justify-center text-center">
      <div className="max-w-xl">
        <h1 className="text-3xl font-semibold mb-2">
          PETER opened a file he shouldn’t have
        </h1>

        <p className="text-neutral-600 mb-2">
          PETER doesn’t actually know any world-ending secrets, so he offered
          the only thing he does hide: this page. It’s where half finished ideas
          live, scrapped prompts go to retire, and feature experiments wait to
          see the light of day. Think of it as PETER’s draft folder. You just
          got read access.
        </p>

        <div className="bg-neutral-50 border border-neutral-200 p-4 rounded-lg mt-4 text-left text-sm text-neutral-700">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <p className="font-semibold">Recovered draft entries</p>
              <div className="flex gap-1 rounded-xl bg-white p-1 border border-neutral-200">
                {(
                  [
                    "experimental",
                    "optimizations",
                    "todo",
                    "glitches",
                  ] as Category[]
                ).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-2.5 py-1 text-xs rounded-lg transition ${
                      activeCategory === cat
                        ? "bg-black text-white"
                        : "text-neutral-600 hover:bg-neutral-100"
                    }`}
                  >
                    {CATEGORY_LABELS[cat]}
                  </button>
                ))}
              </div>
            </div>

            <ul className="space-y-2 mt-1 h-64">
              {activeEntries.map((entry) => (
                <li key={entry.title}>
                  <span className="font-medium">{entry.title}:</span>{" "}
                  <span className="text-neutral-600">{entry.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          <Link
            href="/chat"
            className="rounded-xl border px-4 py-2 hover:bg-neutral-50"
          >
            Back to Chat
          </Link>
          <Link
            href="/work"
            className="rounded-xl bg-black text-white px-4 py-2 hover:bg-neutral-800"
          >
            View My Projects
          </Link>
        </div>

        <p className="mt-8 text-xs text-neutral-400">
          Error code: <strong>PETER_SECRET_LEAK</strong>
        </p>
      </div>
    </main>
  );
}
