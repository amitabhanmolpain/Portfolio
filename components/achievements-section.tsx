"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Trophy, Star, Award } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const achievements = [
  {
    title: "Artira Hackathon Finalist",
    org: "Artira Hackathon",
    icon: Award,
    description: "Selected as a finalist for innovative solutions and technical excellence.",
  },
]

export function AchievementsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Disable animations on mobile
    if (window.innerWidth < 768 || !containerRef.current) return

    const cards = containerRef.current.children
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <section id="achievements" className="px-4 sm:px-6 md:px-24 max-w-7xl mx-auto py-16 md:py-32 border-t border-border/50">
      <div className="space-y-12 md:space-y-16">
        <div className="space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70">
            Achievements
          </h2>
          <div className="h-1 md:h-1.5 w-16 md:w-20 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-2xl border border-border bg-muted/30 hover:bg-muted/50 transition-all group"
            >
              <item.icon className="h-8 w-8 md:h-10 md:w-10 text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-primary/80 font-mono mb-4">{item.org}</p>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
