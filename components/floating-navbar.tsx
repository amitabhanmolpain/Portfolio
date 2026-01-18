"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function FloatingNavbar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.5 },
    )
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto max-w-[95vw] px-4 md:px-6 py-3 rounded-full border border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl"
    >
      <ul className="flex items-center justify-center gap-3 sm:gap-4 md:gap-8 overflow-x-auto scrollbar-hide">
        {navItems.map((item) => (
          <li key={item.name} className="shrink-0">
            <Link
              href={item.href}
              className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
