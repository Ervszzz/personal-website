import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import ParticlesBackground from "./components/ParticlesBackground";

const SectionDivider = ({ bg = "bg-tech-dark" }: { bg?: string }) => (
  <div className={`w-full py-6 flex justify-center items-center gap-2 ${bg}`}>
    <div className="w-12 h-px bg-gradient-to-r from-transparent to-tech-purple/60" />
    <div className="w-1.5 h-1.5 rounded-full bg-tech-purple/60" />
    <div className="w-20 h-px bg-gradient-to-r from-tech-purple/60 via-tech-cyan to-tech-teal/60" />
    <div className="w-1.5 h-1.5 rounded-full bg-tech-cyan/60" />
    <div className="w-12 h-px bg-gradient-to-l from-transparent to-tech-teal/60" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-tech-dark font-tech relative overflow-hidden">
      {/* Tech-themed background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-tech-gradient opacity-10 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-screen bg-tech-gradient opacity-10 blur-3xl z-0"></div>

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Additional tech elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-tech-purple/5 blur-xl z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-tech-cyan/5 blur-xl z-0"></div>

      {/* Matrix-like code lines */}
      <div className="absolute top-0 left-10 h-screen w-px bg-gradient-to-b from-transparent via-tech-cyan/20 to-transparent z-0"></div>
      <div className="absolute top-0 right-20 h-screen w-px bg-gradient-to-b from-transparent via-tech-teal/20 to-transparent z-0"></div>
      <div className="absolute top-0 left-1/3 h-screen w-px bg-gradient-to-b from-transparent via-tech-purple/20 to-transparent z-0"></div>
      <div className="absolute top-0 right-1/3 h-screen w-px bg-gradient-to-b from-transparent via-tech-pink/20 to-transparent z-0"></div>

      <div className="relative z-10">
        <Header />
        <main className="pt-16">
          <section id="home" className="relative">
            <div className="absolute inset-0 bg-tech-dark z-0"></div>
            <div className="relative z-10">
              <Hero />
            </div>
          </section>

          <SectionDivider bg="bg-tech-dark" />

          <section id="experience" className="relative">
            <div className="absolute inset-0 bg-tech-gray-dark/30 z-0"></div>
            <div className="relative z-10">
              <WorkExperience />
            </div>
          </section>

          <SectionDivider bg="bg-tech-gray-dark/30" />

          <section id="skills" className="relative">
            <div className="absolute inset-0 bg-tech-dark z-0"></div>
            <div className="relative z-10">
              <Skills />
            </div>
          </section>

          <SectionDivider bg="bg-tech-dark" />

          <section id="projects" className="relative">
            <div className="absolute inset-0 bg-tech-gray-dark/30 z-0"></div>
            <div className="relative z-10">
              <Projects />
            </div>
          </section>

          <SectionDivider bg="bg-tech-gray-dark/30" />

          <section id="contact" className="relative">
            <div className="absolute inset-0 bg-tech-dark z-0"></div>
            <div className="relative z-10">
              <Contact />
            </div>
          </section>
        </main>
        <Footer />

        <ChatBot />
      </div>
    </div>
  );
}

export default App;
