import { FloatingNavbar } from "@/components/floating-navbar"
import { HeroSection } from "@/components/hero-section"
import { ProjectCard } from "@/components/project-card"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { AchievementsSection } from "@/components/achievements-section"
import { Footer } from "@/components/footer" // Moving footer to its own component
import { AboutSection } from "@/components/about-section"

const projects: Array<{
  title: string
  description: string
  tags: string[]
  image: string
}> = []

export default function Home() {
  return (
    <main className="relative selection:bg-primary selection:text-white">
      <FloatingNavbar />

      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <ExperienceSection />

      <section id="projects" className="px-6 md:px-24 max-w-7xl mx-auto py-32 border-t border-border/50">
        <div className="space-y-16">
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
              <div className="h-1 w-12 bg-primary rounded-full mx-auto md:mx-0" />
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {["All", "Backend", "AI Agents", "Microservices", "Fullstack", "Next.js"].map((tag) => (
                <button
                  key={tag}
                  className="px-5 py-2 rounded-full text-sm font-medium border border-border bg-muted/30 hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <AchievementsSection />

      <Footer />
    </main>
  )
}
