import { notFoundMessages, funFacts } from "@/data/404Messages";
import Link from "next/link";

export default function NotFound() {


  const randomMessage = notFoundMessages[Math.floor(Math.random() * notFoundMessages.length)];
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];


  return (
    <div className="flex flex-col items-center justify-center h-screen mt-[-3.5rem] text-center p-6 space-y-6">

      <p className="text-xl">Uh-oh, we couldn&apos;t find the page you&apos;re looking for...</p>

      <h1 className="text-8xl font-extrabold">404</h1>

      <p className="text-xl">{randomMessage}</p>

      <div className="flex space-x-4 mt-4">
        <Link href="/" className="px-5 py-2 rounded-xl bg-black text-white hover:bg-gray-800">
          Back to Home
        </Link>
        <Link href="/articles" className="px-5 py-2 rounded-xl border border-black hover:bg-gray-100">
          Read Articles
        </Link>
        <Link href="/work" className="px-5 py-2 rounded-xl border border-black hover:bg-gray-100">
          View Work
        </Link>
      </div>

      <p className="text-sm text-gray-500 mt-6">{randomFact}</p>
    </div>
  );
}
