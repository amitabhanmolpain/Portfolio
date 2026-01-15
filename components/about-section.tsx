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
              I am a backend-focused Computer Science undergraduate with strong hands-on experience in building scalable, data-driven applications. I work primarily with Python, Flask, FastAPI, Node.js, and MongoDB, and I enjoy designing APIs, handling databases, and integrating machine learning into real-world systems.
            </p>
            <p>
              I have built and shipped multiple full-stack projects, including a fake and ghost job detection system developed during a global hackathon, where I implemented Random Forest and Logistic Regression models and connected them to a production-ready backend. As a solo developer and open-source contributor, I am comfortable owning end-to-end backend responsibilities—from API design and authentication to deployment and performance optimization.
            </p>
            <p>
              I am particularly interested in backend systems, AI-powered applications, and scalable architectures, and I aim to grow into a backend engineer who builds reliable systems that solve meaningful problems.
            </p>

            <div className="pt-4">
              <a href="/Amitabh-resume-3.pdf" download="Resume.pdf">
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
