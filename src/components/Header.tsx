"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [isAtTopOfPage, setIsAtTopOfPage] = useState(true);
  const [hovered, setHovered] = useState<number | null>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;

    setIsAtTopOfPage(latest <= 100);

    if (latest > prev && latest > 30) {
      setHidden(true);
    } else if (latest < prev) {
      setHidden(false);
    }
  });

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ type: "spring", stiffness: 600, damping: 40, mass: 0.6 }}
      className={`sticky top-0 z-50  bg-white/70 backdrop-blur ${
        !isAtTopOfPage ? "border-b" : undefined
      }`}
      style={{ willChange: "transform" }}
    >
      <nav className="ml-6 flex h-14 items-center gap-4 px-4">
        <Link href="/" className="font-semibold">
          Peter Venton
        </Link>

        <ul className="ml-auto flex items-center gap-1 rounded-full bg-white/60 p-1 shadow-sm">
          {NAV.map((item, i) => {
            const active = pathname === item.href;
            return (
              <li
                key={item.href}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  href={item.href}
                  onClick={() =>
                    window.gtag?.("event", "nav_click", { label: item.label })
                  }
                  className="relative block rounded-full px-3 py-1.5 text-sm"
                >
                  <AnimatePresence>
                    {(active || hovered === i) && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-black/10"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 40,
                          mass: 0.6,
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href="mailto:peterstevenventon@gmail.com"
          className="rounded-xl bg-black px-3 py-2 text-sm text-white"
          onClick={() =>
            window.gtag?.("event", "cta_click", { label: "Get In Touch" })
          }
        >
          Get In Touch
        </a>
      </nav>
    </motion.header>
  );
}
