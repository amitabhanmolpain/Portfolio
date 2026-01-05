"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, Github } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface ProjectProps {
  title: string
  description: string
  tags: string[]
  image: string
  index: number
}

export function ProjectCard({ title, description, tags, image, index }: ProjectProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <div
      ref={cardRef}
      className="group flex flex-col p-6 rounded-[2rem] bg-muted/20 border border-border hover:bg-muted/40 hover:border-primary/20 transition-all duration-300"
    >
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-muted mb-6">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <div className="p-4 bg-background rounded-2xl hover:bg-primary transition-colors group/icon cursor-pointer">
            <Github className="h-6 w-6 group-hover/icon:text-white" />
          </div>
          <div className="p-4 bg-background rounded-2xl hover:bg-primary transition-colors group/icon cursor-pointer">
            <ExternalLink className="h-6 w-6 group-hover/icon:text-white" />
          </div>
        </div>
      </div>

      <div className="space-y-4 flex-grow px-2">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{title}</h3>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>

        <div className="pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground group-hover:gap-4 transition-all cursor-pointer">
          View Details
          <ExternalLink className="h-3 w-3" />
        </div>
      </div>
    </div>
  )
}
