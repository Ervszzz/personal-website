import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedWork from "./components/FeaturedWork";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <FeaturedWork />
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
  );
}

export default App;
