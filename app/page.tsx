"use client"

import { useState } from "react"
import { FloatingNavbar } from "@/components/floating-navbar"
import { HeroSection } from "@/components/hero-section"
import { ProjectCard } from "@/components/project-card"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { AchievementsSection } from "@/components/achievements-section"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"

const projects: Array<{
  title: string
  description: string
  tags: string[]
  image: string
  github?: string
}> = [
  {
    title: "Restaurant Management & Analysis",
    description: "A full-stack web application for restaurant owners to analyze customer reviews, monitor sales trends, reduce food wastage, and boost revenue. Built with React, Flask, and MongoDB with interactive dashboards using Matplotlib, Seaborn, and Scatterplotlib for real-time insights.",
    tags: ["Flask", "React", "MongoDB", "Data Visualization", "Fullstack"],
    image: "/resturant-analysis.jpg",
    github: "https://github.com/amitabhanmolpain/restaurant-analysis"
  },
  {
    title: "Real-Time Chat Application",
    description: "A full-stack MERN chat application with real-time messaging using WebSockets. MongoDB serves as the main database, while Redis is used as a cache database for efficient message handling.",
    tags: ["MERN", "Redis", "WebSockets", "Fullstack"],
    image: "/chat-app.png",
    github: "https://github.com/amitabhanmolpain/real-time-chat-app"
  },
  {
    title: "Ecofinds - Student Marketplace",
    description: "A smart MERN stack marketplace where students can buy and sell second-hand products at affordable prices. Features a user-friendly interface for browsing, listing, and managing transactions.",
    tags: ["MERN", "MongoDB", "Marketplace", "Fullstack"],
    image: "/eco-finds.png",
    github: "https://github.com/amitabhanmolpain/Eco-finds"
  },
  {
    title: "React Native Hotel App",
    description: "A mobile application built with React Native for browsing and booking hotels. Features a modern UI and seamless user experience across iOS and Android platforms.",
    tags: ["React Native", "Mobile"],
    image: "/hotel-app.jpg",
    github: "https://github.com/amitabhanmolpain/react-native-hotel-app"
  },
  {
    title: "Real Estate Multi-Agent AI",
    description: "An intelligent multi-agent AI system for real estate built using Google ADK. Leverages AI agents to automate property analysis, recommendations, and market insights.",
    tags: ["Google ADK", "AI Agents", "Real Estate"],
    image: "https://via.placeholder.com/800x500?text=Real+Estate+AI",
    github: "https://github.com/amitabhanmolpain/Real-Estate-Multi-Agent"
  },
  {
    title: "Consumer Justice AI Agent",
    description: "A smart AI-Agent that analyzes user-reported injustices to determine if they fall under Consumer Act provisions. It provides guidance for settlement and can automatically file complaints on government websites.",
    tags: ["Google ADK", "AI Agents", "Consumer Protection"],
    image: "/consumer-justice.png",
    github: "https://github.com/amitabhanmolpain/CONSUMER_JUSTICE_AI_AGENT"
  }
]

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All")
  const filters = ["All", "Backend", "AI Agents", "Microservices", "Fullstack", "Mobile", "MERN", "Flask"]

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true
    return project.tags.some((tag) => tag.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(tag.toLowerCase()))
  })

  return (
    <main className="relative selection:bg-primary selection:text-white">
      <FloatingNavbar />

      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <ExperienceSection />

      <section id="projects" className="px-4 sm:px-6 md:px-24 max-w-7xl mx-auto py-16 md:py-32 border-t border-border/50">
        <div className="space-y-12 md:space-y-16">
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h2>
              <div className="h-1 w-12 bg-primary rounded-full mx-auto md:mx-0" />
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium border transition-all ${
                    activeFilter === filter
                      ? "bg-primary text-white border-primary"
                      : "border-border bg-muted/30 hover:bg-primary hover:text-white hover:border-primary"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, i) => (
                <ProjectCard key={project.title} {...project} index={i} />
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-muted-foreground">No projects found for this filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <AchievementsSection />

      <Footer />
    </main>
  )
}
