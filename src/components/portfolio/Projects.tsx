import { ShoppingBag, Globe2, Mic, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const projects = [
  {
    icon: ShoppingBag,
    title: "AI-Powered Dropshipping Store",
    tag: "E-Commerce · AI",
    description:
      "An international-market dropshipping store built with Shopify and AI tooling for product research, copy, and creative. Integrated with custom-deployed pages for higher-converting funnels.",
    stack: ["Shopify", "AI Tools", "International"],
    accent: "primary",
  },
  {
    icon: Globe2,
    title: "Custom Website Deployment",
    tag: "Web · DevOps",
    description:
      "Built websites end-to-end using AI tools, version-controlled on GitHub and shipped on Vercel. Experimenting with API integrations and motion design for premium feel.",
    stack: ["GitHub", "Vercel", "APIs"],
    accent: "accent",
  },
  {
    icon: Mic,
    title: "AURA — AI Assistant Concept",
    tag: "AI · Voice",
    description:
      "A JARVIS-inspired voice AI assistant concept. Designed around natural interaction and automation — a personal operating system for everyday tasks.",
    stack: ["Voice AI", "Automation", "Concept"],
    accent: "secondary",
  },
];

const Projects = () => (
  <section id="projects" className="relative py-24 md:py-32">
    <div className="container">
      <SectionHeading
        title="Selected projects"
        subtitle="Bets I'm placing on AI, commerce, and the global digital economy."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <article className="group relative h-full p-6 md:p-7 rounded-2xl glass overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
              {/* Glow on hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />

              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
              </div>

              <div className="font-mono text-xs text-primary mb-2">{p.tag}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-muted/50 border border-border text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
