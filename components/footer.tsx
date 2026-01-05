import { Github, Linkedin, Twitter, Mail, MapPin, ExternalLink } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="relative px-6 md:px-24 pt-32 pb-12 bg-muted/5 border-t border-border/50 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold tracking-tight">Amitabh Anmol Pain</h3>
              <p className="text-lg text-muted-foreground font-light max-w-sm">
                Architecting scalable distributed systems and high-performance backend infrastructures.
              </p>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">Remote • India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground/50">Navigation</h4>
            <ul className="space-y-4">
              {["About", "Skills", "Experience", "Projects"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground/50">Connect</h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@example.com"
                className="group p-4 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-medium">hello@example.com</span>
                </div>
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex gap-4">
                {[
                  { icon: Github, label: "GitHub", href: "#" },
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: Twitter, label: "Twitter", href: "#" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 rounded-xl bg-muted/30 border border-border/50 hover:bg-primary hover:text-white transition-all shadow-sm"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-muted-foreground uppercase tracking-widest">
          <p>© {currentYear} Amitabh Anmol Pain. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
