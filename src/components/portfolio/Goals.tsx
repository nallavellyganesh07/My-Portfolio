import { Plane, Layers, Brain, Coins } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const goals = [
  { icon: Plane, title: "MBA Abroad", desc: "Pursue a globally-ranked MBA to operate at international scale." },
  { icon: Layers, title: "Scalable Online Income", desc: "Build digital systems that compound and run independently." },
  { icon: Brain, title: "AI-Driven Business Models", desc: "Design ventures where AI is the moat, not the gimmick." },
  { icon: Coins, title: "Financial Independence", desc: "Engineer freedom — of time, location, and decisions." },
];

const Goals = () => (
  <section id="goals" className="relative py-24 md:py-32">
    <div className="container">
      <SectionHeading
        number="05"
        title="Future trajectory"
        subtitle="The destinations I'm building toward — publicly accountable, intentionally bold."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {goals.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.1}>
            <div className="group relative h-full p-6 rounded-2xl glass overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors" />
              <div className="relative">
                <div className="font-mono text-xs text-muted-foreground mb-3">0{i + 1}</div>
                <g.icon className="w-7 h-7 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Goals;
