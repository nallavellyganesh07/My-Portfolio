import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [showMonogram, setShowMonogram] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShowMonogram(false);
      return;
    }

    const timeout = window.setTimeout(() => setShowMonogram(false), 700);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-glow mb-8 font-mono text-xs"
          >
            <span className="text-muted-foreground">Building the future, exploring the opportunities</span>
          </motion.div>

          <motion.h1
            aria-label="Nallavelly Ganesh"
            className="relative min-h-[2.1em] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.05]"
          >
            <AnimatePresence mode="wait" initial={false}>
              {showMonogram ? (
                <motion.span
                  key="monogram"
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 1.45, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.82, filter: "blur(8px)" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center text-gradient"
                >
                  NG
                </motion.span>
              ) : (
                <motion.span
                  key="full-name"
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <motion.span
                    initial={{ opacity: 0, scaleX: 0.72, filter: "blur(6px)" }}
                    animate={{ opacity: 1, scaleX: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="block text-foreground"
                  >
                    Nallavelly
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scaleX: 0.72, filter: "blur(6px)" }}
                    animate={{ opacity: 1, scaleX: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="block text-gradient bg-[length:200%_auto] animate-gradient-shift"
                  >
                    Ganesh
                  </motion.span>
                </motion.span>
              )}
            </AnimatePresence>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 font-mono"
          >
            Business Analytics Student
            <span className="text-primary mx-2">·</span>
            Aspiring Entrepreneur
            <span className="text-primary mx-2">·</span>
            <span className="hidden sm:inline">AI-Powered Builder</span>
            <span className="sm:hidden">AI Builder</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.65 }}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Building <span className="text-primary font-semibold">systems</span>, not just income.
            Focused on global opportunities and scalable digital business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium overflow-hidden transition-all hover:scale-[1.02] glow-primary"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-border bg-card/30 text-foreground font-medium hover:border-primary hover:text-primary transition-all backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to about"
        >
          <ArrowDown className="w-5 h-5 animate-float" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
