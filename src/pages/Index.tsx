import ParticleField from "@/components/portfolio/ParticleField";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Goals from "@/components/portfolio/Goals";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleField />
      <Navbar />
      <main>
        <h1 className="sr-only">
          Nallavelly Ganesh — Business Analytics Student & Aspiring Entrepreneur
        </h1>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Goals />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
