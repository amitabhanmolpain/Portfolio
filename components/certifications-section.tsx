"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const certifications = [
  {
    title: "Full Stack Development",
    issuer: "Professional Certification",
    date: "2025",
    description: "Comprehensive expertise in full-stack development covering frontend, backend, and database technologies with modern frameworks and best practices.",
    image: "/Amitabh-web-dev-certificate.png",
    credential: "/Amitabh-web-dev-certificate.pdf",
  },
  {
    title: "Building with Claude API",
    issuer: "Anthropic",
    date: "2026",
    description: "Advanced certification in building intelligent applications using the Claude API, including prompt engineering, API integration, and AI-powered workflows.",
    image: "https://cc.sj-cdn.net/certificate/ca6k4fml7abo/certificate-vgjuqygp36nc-1772970357.jpg?Expires=1774638022&Signature=Ch2AQSsnChrUY9obD0RUFgTRdBqMWx5oRSRg7WNXmjOtyU5cVXTC52nq67RvT0iDGh1PPVLu3m-FeRF6aYbM770dDEQu9r2K4w8JY5MfmijvQyuPzwkc6DxOgp~mHGqCGn8PPU72~OMXQ2MF15GEVglM3n5n7NbLgiyokHhpoQj2Lzn4cinYe9pHMPkqxwLl7Ap3HFst3AV7JERsenuzbL5CGUYYSEp4O7vcmVnyQo9WhnvpTUvP5M7xzrdgKZpmbPHMLxIpPFOD6YY9NwjbmxNBpLkmXN5n8Sh2u3XiykDfIcyPXme9peII8e7oeUZ6rkMTY5apY7nlTu8lXjTPJQ__&Key-Pair-Id=APKAI3B7HFD2VYJQK4MQ",
    credential: "/certificate-Building-with-claude-api.pdf",
  },
]

export function CertificationsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const items = containerRef.current.querySelectorAll(".certification-item")
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
    <section id="certifications" className="px-4 sm:px-6 md:px-24 max-w-7xl mx-auto py-16 md:py-32 border-t border-border/50">
      <div className="space-y-12 md:space-y-16">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Certifications</h2>
          <div className="h-1 w-12 bg-primary rounded-full" />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="certification-item flex flex-col p-6 md:p-8 rounded-2xl md:rounded-3xl bg-muted/20 border border-border hover:border-primary/30 transition-all group"
            >
              <div className="relative w-full h-40 md:h-48 mb-4 md:mb-6 rounded-lg overflow-hidden bg-muted/50">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-1">{cert.title}</h3>
                  <p className="text-sm md:text-base font-medium text-foreground">{cert.issuer}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{cert.date}</p>
                </div>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{cert.description}</p>

                <div className="mt-auto pt-4">
                  <a href={cert.credential} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      View Credential
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
