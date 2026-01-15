"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subTitleRef = useRef<HTMLDivElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const actionsRef = useRef<HTMLDivElement>(null)

  const roles = ["Backend Developer", "Fullstack Developer"]
  const [roleIndex, setRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[roleIndex]
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(role.substring(0, currentText.length + 1))
          if (currentText === role) {
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          setCurrentText(role.substring(0, currentText.length - 1))
          if (currentText === "") {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, roleIndex])

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

    tl.fromTo(titleRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(subTitleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
      .fromTo(descRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
      .fromTo(actionsRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8 }, "-=0.6")
  }, [])

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 md:px-24 max-w-7xl mx-auto pt-20 md:pt-20">
      <div ref={containerRef} className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 md:pt-12">
        <div className="space-y-6 md:space-y-10 flex-1 w-full text-center md:text-left">
          <div className="space-y-3 md:space-y-6">
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.2] md:leading-[1.05] bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/60"
            >
              Amitabh <br className="hidden md:block" /> Anmol Pain
            </h1>
            <div ref={subTitleRef} className="flex items-center justify-center md:justify-start gap-2 md:gap-4">
              <div className="h-px w-6 md:w-10 bg-primary/60" />
              <p className="text-primary font-mono tracking-[0.1em] md:tracking-[0.2em] uppercase text-xs sm:text-sm md:text-lg lg:text-xl font-bold whitespace-nowrap">
                {currentText}
                <span className="animate-pulse ml-1 border-r-2 border-primary h-4 md:h-6 inline-block align-middle" />
              </p>
              <div className="h-px w-6 md:w-0 bg-primary/60 md:hidden" />
            </div>
          </div>

          <p ref={descRef} className="max-w-2xl text-sm sm:text-base md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light mx-auto md:mx-0">
            I build robust, scalable server-side systems and APIs that power seamless digital experiences.
          </p>

          <div ref={actionsRef} className="flex flex-col gap-3 md:gap-6 pt-2 md:pt-4 items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start gap-2 md:gap-4 w-full">
              <div className="h-[1px] flex-1 bg-border/50 max-w-[40px] md:max-w-[60px]" />
              <span className="text-[9px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.15em] md:tracking-[0.3em] whitespace-nowrap">Keep in touch</span>
              <div className="h-[1px] flex-1 bg-border/50 max-w-[40px] md:max-w-[100px]" />
            </div>

            <div className="flex gap-3 md:gap-4 flex-wrap justify-center md:justify-start">
              <a
                href="https://github.com/amitabhanmolpain"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 md:p-4 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <Github className="h-5 md:h-6 w-5 md:w-6 relative z-10 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/amitabh-anmol-pain-118308309/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 md:p-4 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <Linkedin className="h-5 md:h-6 w-5 md:w-6 relative z-10 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:ami05tabh@gmail.com"
                className="group relative p-3 md:p-4 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <Mail className="h-5 md:h-6 w-5 md:w-6 relative z-10 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative group shrink-0 mt-4 md:mt-0">
          <div className="absolute -inset-2 md:-inset-4 bg-primary/20 rounded-[2rem] md:rounded-[4rem] blur-2xl md:blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border border-border bg-muted/20 shadow-lg md:shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
            <Image
              src="/boi.jpeg"
              alt="Amitabh Anmol Pain"
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-110"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
