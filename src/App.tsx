import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedWork from "./components/FeaturedWork";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import BlogSection from "./components/BlogSection";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import BlogIndexPage from "./components/BlogIndexPage";
import BlogPostPage from "./components/BlogPostPage";
import { getRoute } from "./lib/route";

function App() {
  const route = getRoute();

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header route={route} />
      <main className="pt-16">
        {route.page === "home" && (
          <>
            <Hero />
            <About />
            <FeaturedWork />
            <WorkExperience />
            <Skills />
            <Projects />
            <BlogSection />
            <Education />
            <Testimonials />
            <Contact />
          </>
        )}
        {route.page === "blog" && <BlogIndexPage />}
        {route.page === "post" && <BlogPostPage slug={route.slug} />}
      </main>
      <Footer />

      <BackToTop />
    </div>
  );
}

export default App;
