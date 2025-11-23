import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "katex/dist/katex.min.css"; // to render math formulas correctly in mdx files


export const metadata: Metadata = {
  title: "Chat with PETER",
  description: "Chat with PETER",
};

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
    </>
  );
}
