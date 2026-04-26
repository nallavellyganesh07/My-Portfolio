import { GraduationCap, Globe, Cpu, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const highlights = [
  { icon: GraduationCap, label: "B.Com Business Analytics", desc: "Currently pursuing" },
  { icon: Cpu, label: "AI & Automation", desc: "Building smart systems" },
  { icon: Globe, label: "MBA Abroad", desc: "International ambition" },
  { icon: TrendingUp, label: "Growth Mindset", desc: "Experimentation-driven" },
];

const About = () => (
  <section id="about" className="relative py-24 md:py-32">
    <div className="container">
      <SectionHeading number="01" title="About me" />

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
        <Reveal className="lg:col-span-3 space-y-5 text-lg text-foreground/85 leading-relaxed">
          <p>
            I'm a <span className="text-primary font-semibold">Business Analytics</span> student with the
            mind of a builder and the eye of an entrepreneur. While most of my peers chase grades, I'm
            chasing <span className="text-foreground font-semibold">systems</span> — the kind that compound,
            scale, and run while you sleep.
          </p>
          <p>
            My focus sits at the intersection of <span className="text-accent">AI</span>,{" "}
            <span className="text-accent">automation</span>, and{" "}
            <span className="text-accent">digital business</span>. I'm planning to pursue an MBA abroad to
            sharpen the strategic edge needed to operate globally and build location-independent income
            streams.
          </p>
          <p>
            I don't believe in linear careers. I believe in experimentation, fast feedback loops, and
            betting on the technology that will define the next decade.
          </p>
        </Reveal>

        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.1}>
              <div className="group h-full p-5 rounded-xl glass hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-neon">
                <h.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-semibold text-foreground">{h.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{h.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
