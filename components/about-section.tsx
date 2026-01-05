"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="px-6 md:px-24 max-w-7xl mx-auto py-32 border-t border-border/50">
      <div className="space-y-12">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
          <div className="h-1 w-12 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a dedicated Backend Developer with a passion for building scalable and reliable systems. My expertise
              lies in designing efficient database schemas, optimizing server performance, and ensuring the seamless
              flow of data across complex architectures.
            </p>
            <p>
              I believe that a strong foundation is key to any successful application. That&apos;s why I focus on clean
              code, comprehensive testing, and security best practices from the very first line of code.
            </p>
            <p>
              Currently, I am diving deep into microservices architectures and distributed systems, exploring how to
              build highly available and resilient services that can scale to millions of users.
            </p>

            <div className="pt-4">
              <a href="/resume.pdf" download>
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
                <span className="text-muted-foreground">Experience</span>
                <span className="font-medium text-foreground">5+ Years</span>
              </li>
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-muted-foreground">Focus</span>
                <span className="font-medium text-foreground">Microservices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
