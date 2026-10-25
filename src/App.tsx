import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import BackToTop from "./components/BackToTop";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div className="min-h-screen bg-tech-dark font-tech text-tech-text relative">
      <ParticlesBackground />

      <div className="relative z-10">
        <Header />
        <main className="pt-16">
          <Hero />
          <WorkExperience />
          <Skills />
          <Projects />
          <Education />
          <Testimonials />
          <Contact />
        </main>
        <Footer />

        <ChatBot />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
