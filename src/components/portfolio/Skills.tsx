import { BarChart3, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const groups = [
  {
    icon: BarChart3,
    title: "Business & Analytics",
    items: [
      "Business Strategy",
      "Customer Handling",
      "Sales Understanding",
      "Forecasting & Predictive Analysis",
    ],
  },
  {
    icon: Code2,
    title: "Digital & Tech",
    items: [
      "Shopify Basics",
      "Digital Marketing",
      "Website Deployment (GitHub + Vercel)",
      "API Integration",
      "AI Tools Usage",
      "HTML / CSS",
      "Excel",
      "Python (Basics)",
    ],
  },
];

const Skills = () => (
  <section id="skills" className="relative py-24 md:py-32">
    <div className="container">
      <SectionHeading
        number="03"
        title="Skills & stack"
        subtitle="Where business intuition meets technical leverage."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.15}>
            <div className="h-full p-7 md:p-8 rounded-2xl glass relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <g.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{g.title}</h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="px-3.5 py-2 rounded-lg bg-muted/40 border border-border text-sm text-foreground/90 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all cursor-default"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
