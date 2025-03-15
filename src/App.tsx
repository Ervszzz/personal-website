import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
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
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
