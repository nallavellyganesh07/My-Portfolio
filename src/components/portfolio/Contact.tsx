import { Mail, Instagram, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const links = [
  {
    icon: Mail,
    label: "Email",
    handle: "nallavellyganesh07@gmail.com",
    href: "mailto:nallavellyganesh07@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@mr_rocky_ganesh",
    href: "https://www.instagram.com/mr_rocky_ganesh?igsh=MTZ1cWI4ajJ1Y3hjeA==",
  },
];

const Contact = () => (
  <section id="contact" className="relative py-24 md:py-32">
    <div className="container">
      <SectionHeading title="Let's build something" />

      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="relative p-8 md:p-12 rounded-3xl glass overflow-hidden">
            <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

            <div className="relative">
              <h3 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Got an idea, opportunity, or just want to{" "}
                <span className="text-gradient">connect?</span>
              </h3>
              <p className="text-muted-foreground mb-10 max-w-xl">
                Open to job offers, collaborations, networking, or even just a good conversation —
                feel free to reach out for anything.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {links.map((l, i) => (
                  <Reveal key={l.label} delay={i * 0.1}>
                    <a
                      href={l.href}
                      target={l.label === "Email" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-5 rounded-xl bg-card/50 border border-border hover:border-primary/60 hover:bg-card transition-all"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="w-11 h-11 shrink-0 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                          <l.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-mono text-muted-foreground">{l.label}</div>
                          <div className="text-sm font-medium text-foreground truncate">{l.handle}</div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all shrink-0 ml-3" />
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <footer className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="font-mono">© {new Date().getFullYear()} Nallavelly Ganesh</div>
            <div className="font-mono text-xs">
              Crafted with <span className="text-primary">vision</span> · Built to scale.
            </div>
          </footer>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Contact;
