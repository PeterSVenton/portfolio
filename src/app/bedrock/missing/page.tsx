import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "PETER got ahead of himself",
  description: "The AI cited something that doesn't exist (yet).",
};

export default function BedrockMissingPage() {
  return (
    <main className="flex flex-col items-center justify-center text-center">
      <div className="max-w-xl">
        <Image
          src="/error-codes/walleTrash.webp"
          alt="Bedrock 404 illustration"
          width={400}
          height={300}
          className="mx-auto mb-6 rounded-lg"
        />

        <h1 className="text-3xl font-semibold mb-2">
          PETER tried thinking outside the box
        </h1>
        <p className="text-neutral-600 mb-6">
          PETER tried to cite a page that isn’t part of the published
          portfolio... or any portfolio really. It might be a hallucination, a
          typo, or just one of those moments where the AI thinks faster than
          reality can keep up. Either way, there’s nothing here (yet). Try
          asking about something else, or see what does exist in the project
          library.
        </p>

        <div className="flex items-center justify-center gap-3">
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
          Error code: <strong>BEDROCK_MISSING_REF</strong>
        </p>
      </div>
    </main>
  );
}
