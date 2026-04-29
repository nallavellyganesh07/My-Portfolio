import { Briefcase, Users, Package } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const experiences = [
  {
    icon: Package,
    role: "Dropshipper",
    company: "Independent / Online",
    points: [
      "Built and ran a dropshipping store targeting global customers",
      "Handled product research, supplier sourcing, and order fulfillment",
      "Learned paid ads, conversion, and the economics of online business",
    ],
  },
  {
    icon: Briefcase,
    role: "Cashier",
    company: "Vishal Mart & DMart",
    points: [
      "Managed transactions, billing, and high-volume cash flow accurately",
      "Handled customer interactions across diverse demographics",
      "Operated efficiently in a fast-paced retail environment",
    ],
  },
  {
    icon: Users,
    role: "Recruiter",
    company: "Angeles Convent High School",
    points: [
      "Recruited and onboarded new students for the institution",
      "Sharpened communication and presentation skills",
      "Built trust through direct client and parent interaction",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="relative py-24 md:py-32">
    <div className="container">
      <SectionHeading
        title="Real-world experience"
        subtitle="Roles that taught me sales, systems, and how people actually behave."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:-translate-x-px" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 0.15}>
              <div className={`relative flex md:items-center gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-primary z-10" />

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden md:block flex-1" />

                <div className="flex-1 pl-12 md:pl-0">
                  <div className="p-6 rounded-2xl glass hover:border-primary/40 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center">
                        <exp.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{exp.role}</h3>
                        <p className="text-xs text-muted-foreground font-mono">{exp.company}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exp.points.map((pt) => (
                        <li key={pt} className="flex gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
