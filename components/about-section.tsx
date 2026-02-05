"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="px-4 sm:px-6 md:px-24 max-w-7xl mx-auto py-16 md:py-32 border-t border-border/50">
      <div className="space-y-8 md:space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
          <div className="h-1 w-12 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="md:col-span-2 space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a Computer Science undergraduate currently in my third year, with a strong passion for coding and building scalable backend systems. I actively develop projects and contribute to GitHub, and I occasionally participate in open-source initiatives to collaborate and learn from the developer community.
            </p>
            <p>
              I have taken part in multiple hackathons, including the Bolt Vibe Coding Hackathon and Walmart Sparkathon, and have been a finalist in several competitive hackathons. Currently, I am focusing on learning cloud architecture for backend systems and enjoy collaborating on impactful open-source projects.
            </p>

            <div className="pt-4">
              <a href="/Amitabh-resume-05-Feb-2026.pdf" download="Resume.pdf">
                <Button size="lg" className="gap-2 rounded-full px-8">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          <div className="md:col-span-1 bg-muted/30 p-8 rounded-3xl border border-border">
            <h3 className="font-mono text-sm uppercase tracking-widest text-primary mb-4">Quick Stats</h3>
            <ul className="space-y-4">
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium text-foreground">Remote / India</span>
              </li>
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-muted-foreground">Status</span>
                <span className="font-medium text-foreground">CS Undergraduate</span>
              </li>
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-muted-foreground">Focus</span>
                <span className="font-medium text-foreground">Backend & AI</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
