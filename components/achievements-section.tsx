"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Trophy, Star, Award } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const achievements = [
  {
    title: "2nd Prize in Commit and Conquer Hackathon",
    org: "Commit and Conquer Hackathon",
    icon: Trophy,
    description: "Secured 2nd prize for outstanding project development and implementation.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7461277110540738560/",
  },
  {
    title: "Artira Hackathon Finalist",
    org: "Artira Hackathon",
    icon: Award,
    description: "Selected as a finalist for innovative solutions and technical excellence.",
    link: "https://consumer-justice-ai.vercel.app/",
  },
]

export function AchievementsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const floatingCardHintRef = useRef<HTMLDivElement>(null)

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

    // Floating card hint animation with section exit
    if (floatingCardHintRef.current) {
      gsap.fromTo(
        floatingCardHintRef.current,
        { x: -40, opacity: 0, scale: 0.7 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Exit animation when leaving section
      gsap.to(floatingCardHintRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 40%",
          onLeave: () => {
            gsap.to(floatingCardHintRef.current, {
              opacity: 0,
              x: -40,
              scale: 0.7,
              duration: 0.4,
              ease: "back.in",
            })
          },
          onEnterBack: () => {
            gsap.to(floatingCardHintRef.current, {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.4,
              ease: "back.out",
            })
          },
        },
      })

      // Floating animation with vertical motion
      gsap.to(floatingCardHintRef.current, {
        y: -12,
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
    }
  }, [])

  return (
    <section id="achievements" className="px-4 sm:px-6 md:px-24 max-w-7xl mx-auto py-16 md:py-32 border-t border-border/50 relative">
      {/* Floating Card Hint */}
      <div
        ref={floatingCardHintRef}
        className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 z-40 pointer-events-none"
      >
        <div className="relative">
          {/* Animated background blur */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-orange-500/30 via-amber-500/20 to-orange-400/30 blur-2xl opacity-60 animate-pulse" />
          
          {/* Main card container */}
          <div className="relative overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-400/40 to-amber-600/20" />
            
            {/* Content */}
            <div className="relative px-6 py-5 rounded-3xl bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent backdrop-blur-2xl border border-orange-400/50 shadow-[0_8px_32px_rgba(249,115,22,0.2)]">
              <div className="flex items-center gap-4">
                {/* Animated indicator dot */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-orange-400 blur-md opacity-75 animate-pulse" />
                  <div className="relative w-3 h-3 rounded-full bg-gradient-to-r from-orange-300 to-orange-500 shadow-lg shadow-orange-500/50" />
                </div>

                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 tracking-wide">
                    Explore Achievements
                  </p>
                  <p className="text-xs text-orange-600/80 dark:text-orange-300/80 font-medium mt-0.5">
                    Click cards to discover more
                  </p>
                </div>

                {/* Arrow accent */}
                <div className="flex-shrink-0 text-lg opacity-70 animate-bounce" style={{ animationDelay: '0.2s' }}>
                  →
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12 md:space-y-16">
        <div className="space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70">
            Achievements
          </h2>
          <div className="h-1 md:h-1.5 w-16 md:w-20 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
          <p className="text-muted-foreground mt-2">Click on any achievement to learn more details</p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                if (item.link) {
                  window.open(item.link, "_blank")
                }
              }}
              className="p-6 md:p-8 rounded-2xl border border-border bg-muted/30 hover:bg-muted/50 transition-all group cursor-pointer"
            >
              <item.icon className="h-8 w-8 md:h-10 md:w-10 text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-primary/80 font-mono mb-4">{item.org}</p>
              <p className="text-muted-foreground text-sm">{item.description}</p>
              <p className="text-xs text-primary/60 mt-4 font-medium group-hover:text-primary transition-colors">Click to learn more →</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
