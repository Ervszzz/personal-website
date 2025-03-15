import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-tech-dark font-tech relative overflow-hidden">
      {/* Tech-themed background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-tech-gradient opacity-10 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-screen bg-tech-gradient opacity-10 blur-3xl z-0"></div>

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
          {/* Home/Hero Section - Primary background */}
          <section id="home" className="relative">
            <div className="absolute inset-0 bg-tech-dark z-0"></div>
            <div className="relative z-10">
              <Hero />
            </div>
          </section>

          {/* Section Divider */}
          <div className="w-full py-4 flex justify-center bg-tech-dark">
            <div className="w-24 h-px bg-gradient-to-r from-tech-purple via-tech-cyan to-tech-teal"></div>
          </div>

          {/* Work Experience Section - Secondary background */}
          <section id="experience" className="relative">
            <div className="absolute inset-0 bg-tech-gray-dark/30 z-0"></div>
            <div className="relative z-10">
              <WorkExperience />
            </div>
          </section>

          {/* Section Divider */}
          <div className="w-full py-4 flex justify-center bg-tech-gray-dark/30">
            <div className="w-24 h-px bg-gradient-to-r from-tech-purple via-tech-cyan to-tech-teal"></div>
          </div>

          {/* Skills Section - Primary background */}
          <section id="skills" className="relative">
            <div className="absolute inset-0 bg-tech-dark z-0"></div>
            <div className="relative z-10">
              <Skills />
            </div>
          </section>

          {/* Section Divider */}
          <div className="w-full py-4 flex justify-center bg-tech-dark">
            <div className="w-24 h-px bg-gradient-to-r from-tech-purple via-tech-cyan to-tech-teal"></div>
          </div>

          {/* Projects Section - Secondary background */}
          <section id="projects" className="relative">
            <div className="absolute inset-0 bg-tech-gray-dark/30 z-0"></div>
            <div className="relative z-10">
              <Projects />
            </div>
          </section>

          {/* Section Divider */}
          <div className="w-full py-4 flex justify-center bg-tech-gray-dark/30">
            <div className="w-24 h-px bg-gradient-to-r from-tech-purple via-tech-cyan to-tech-teal"></div>
          </div>

          {/* Contact Section - Primary background */}
          <section id="contact" className="relative">
            <div className="absolute inset-0 bg-tech-dark z-0"></div>
            <div className="relative z-10">
              <Contact />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
