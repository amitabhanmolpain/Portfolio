"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    company: "Hacktoberfest 2025",
    role: "Open Source Contributor",
    period: "October 2025 - November 2025",
    description:
      "Participated in Hacktoberfest 2025, contributing to open-source projects worldwide. Made 10+ pull requests and merge requests across various repositories, focusing on backend development, feature implementation, and bug fixes for maintainers' repositories.",
    achievements: [
      "Successfully merged 10+ PRs/MRs across multiple open-source projects, demonstrating versatility in different tech stacks.",
      "Contributed to backend development, implementing new features and API endpoints for production applications.",
      "Fixed critical bugs and improved code quality in maintainers' repositories, enhancing overall project stability.",
      "Collaborated with global developers, following best practices for code review and documentation.",
    ],
    logo: "https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbWZqc20wZGowMDAwaTUwNHVtb2lndTJuIiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=",
  },
  {
    company: "Bolt Hackathon",
    role: "Bolt World Largest Vibecoding Hackathon",
    period: "June 2025 - August 2025",
    description:
      "Built an app for detecting fake jobs using machine learning models including regression modeling and random forest. Developed with Next.js, Tailwind CSS, and GSAP for smooth animations.",
    achievements: [
      "Engineered an automated system to detect fake job listings using pattern recognition and verification algorithms.",
      "Focused on creating a safer environment for job seekers within major job portals.",
    ],
    image: "/fake-job-detection-dashboard.jpg",
    logo: "https://server.cloud-station.io/cloudstation/bold-new-logo-4519818aa650bd2b61e9e0d9f1ed522a.png",
  },
]

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const items = containerRef.current.querySelectorAll(".experience-item")
    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
        },
      )
    })
  }, [])

  return (
    <section id="experience" className="px-6 md:px-24 max-w-7xl mx-auto py-32 border-t border-border/50">
      <div className="space-y-16">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold tracking-tight">Work Experience</h2>
          <div className="h-1 w-12 bg-primary rounded-full" />
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="experience-item flex flex-col p-8 rounded-3xl bg-muted/20 border border-border hover:border-primary/30 transition-all group"
            >
              <div className="flex gap-4 mb-6">
                {exp.logo && (
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
                      <p className="text-lg font-medium text-foreground">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono py-1 px-3 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>

              {exp.achievements && (
                <div className="space-y-3 mt-auto">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
                    Key Contributions:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.skills && (
                <div className="flex flex-wrap gap-2 mt-8">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-bold uppercase tracking-widest text-primary/60 bg-primary/5 px-2 py-1 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
