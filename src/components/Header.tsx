"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { Socials } from "@/data/socials";
import BurgerIcon from "./svgs/animated/Burger";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About Me" }
];

export default function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [isAtTopOfPage, setIsAtTopOfPage] = useState(true);
  const [hovered, setHovered] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setIsAtTopOfPage(latest <= 100);
    if (latest > prev && latest > 30) setHidden(true);
    else if (latest < prev) setHidden(false);
  });

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ type: "spring", stiffness: 600, damping: 40, mass: 0.6 }}
      className={`sticky top-0 z-50 bg-white/70 backdrop-blur ${
        !isAtTopOfPage ? "border-b" : ""
      }`}
      style={{ willChange: "transform" }}
    >
      <nav className="ml-6 flex h-14 items-center gap-4 px-4">
        {/* mobile menu when open has a z index of 40 */}
        <Link href="/" className="font-semibold z-50">
          Peter Venton
        </Link>

        {/* 
        ------------------
             DESKTOP 
        ------------------
        */}
        <ul className="ml-auto hidden lg:flex items-center gap-1 rounded-full bg-white/60 p-1 shadow-sm">
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

        <Link
          href={Socials.Email.href}
          className="hidden lg:inline-block rounded-xl bg-black px-3 py-2 text-sm text-white"
          onClick={() =>
            window.gtag?.("event", "cta_click", { label: "Get In Touch" })
          }
        >
          Get In Touch
        </Link>

        {/* 
        ------------------
             MOBILE 
        ------------------
        */}

        {/* hamburger */}
        <button
          type="button"
          className="ml-auto inline-flex items-center justify-center rounded-md p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <BurgerIcon open={open} />
        </button>
      </nav>

      {/* mobile menu when opened */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              className="fixed inset-0 z-40 lg:hidden"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            {/* dropdown */}
            <motion.div
              className="lg:hidden absolute left-0 right-0 z-50 origin-top rounded-b-2xl bg-white backdrop-blur shadow-md"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              <div className="px-4 pb-4 pt-2">
                <ul className="space-y-1">
                  {NAV.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`block rounded-lg px-3 py-2 text-sm ${
                            active ? "bg-black/10 font-medium" : "hover:bg-black/5"
                          }`}
                          onClick={() =>
                            window.gtag?.("event", "nav_click", {
                              label: item.label,
                            })
                          }
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-3">
                  <Link
                    href={Socials.Email.href}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-black px-3 py-2 text-sm text-white"
                    onClick={() =>
                      window.gtag?.("event", "cta_click", {
                        label: "Get In Touch",
                      })
                    }
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
