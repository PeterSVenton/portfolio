import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Mo can't let you see this",
  description: "The AI cited something that isn't fully released yet",
};

export default function BedrockUnreleasedPage() {
  return (
    <main className="flex flex-col items-center justify-center text-center">
      <div className="max-w-xl">
        <Image
          src="/error-codes/moHappy.png"
          alt="Bedrock 404 illustration"
          width={400}
          height={300}
          className="mx-auto mb-6 rounded-lg"
        />

        <h1 className="text-3xl font-semibold mb-2">Project - Coming Soon</h1>
        <p className="mt-2 text-neutral-600">
          PETER referenced a project that exists in my knowledge base, but the
          public write-up isn’t live yet. I keep some work in progress while I
          finish editing, remove sensitive details, or polish the case study. In
          the meantime, Mo’s busy cleaning up the drafts and making sure
          everything’s spotless before it goes live.
        </p>

        <p className="my-2 text-neutral-600">
          You can ask PETER about it for a summary, or explore other published
          projects in the meantime.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="/chat"
            className="rounded-xl border px-4 py-2 hover:bg-neutral-50"
          >
            Ask PETER
          </Link>
          <Link
            href="/work"
            className="rounded-xl bg-black text-white px-4 py-2 hover:bg-neutral-800"
          >
            View Projects
          </Link>
        </div>

        <p className="mt-8 text-xs text-neutral-400">
          Error code: <strong>BEDROCK_REFERENCES_UNRELEASED</strong>
        </p>
      </div>
    </main>
  );
}
