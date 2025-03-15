import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to determine which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 300; // Offset to trigger active state earlier

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to determine if a section is active
  const isActive = (section: string) => activeSection === section;

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-md bg-tech-gray/90 border-b border-tech-cyan/20 z-50 shadow-lg shadow-tech-dark/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-display text-2xl font-bold">
          <span className="text-tech-teal">Ervin</span>
          <span className="text-tech-cyan">Fernandez</span>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none text-tech-cyan"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-tech">
          <a
            href="#home"
            className={`text-tech-light hover:text-tech-cyan transition duration-300 relative group ${
              isActive("home") ? "text-tech-cyan" : ""
            }`}
          >
            <span>Home</span>
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-tech-cyan transition-all duration-300 ${
                isActive("home") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>
          <a
            href="#experience"
            className={`text-tech-light hover:text-tech-cyan transition duration-300 relative group ${
              isActive("experience") ? "text-tech-cyan" : ""
            }`}
          >
            <span>Experience</span>
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-tech-cyan transition-all duration-300 ${
                isActive("experience") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>
          <a
            href="#skills"
            className={`text-tech-light hover:text-tech-cyan transition duration-300 relative group ${
              isActive("skills") ? "text-tech-cyan" : ""
            }`}
          >
            <span>Skills</span>
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-tech-cyan transition-all duration-300 ${
                isActive("skills") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>
          <a
            href="#projects"
            className={`text-tech-light hover:text-tech-cyan transition duration-300 relative group ${
              isActive("projects") ? "text-tech-cyan" : ""
            }`}
          >
            <span>Projects</span>
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-tech-cyan transition-all duration-300 ${
                isActive("projects") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>
          <a
            href="#contact"
            className={`text-tech-light hover:text-tech-cyan transition duration-300 relative group ${
              isActive("contact") ? "text-tech-cyan" : ""
            }`}
          >
            <span>Contact</span>
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-tech-cyan transition-all duration-300 ${
                isActive("contact") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-tech-dark/95 backdrop-blur-md border-t border-tech-cyan/20">
          <div className="container mx-auto px-4 flex flex-col space-y-3 py-4 font-tech">
            <a
              href="#home"
              className={`text-tech-light hover:text-tech-cyan transition duration-300 py-2 border-l-2 ${
                isActive("home")
                  ? "border-tech-cyan text-tech-cyan"
                  : "border-transparent hover:border-tech-cyan"
              } pl-2`}
              onClick={toggleMenu}
            >
              &gt; Home
            </a>
            <a
              href="#experience"
              className={`text-tech-light hover:text-tech-cyan transition duration-300 py-2 border-l-2 ${
                isActive("experience")
                  ? "border-tech-cyan text-tech-cyan"
                  : "border-transparent hover:border-tech-cyan"
              } pl-2`}
              onClick={toggleMenu}
            >
              &gt; Experience
            </a>
            <a
              href="#skills"
              className={`text-tech-light hover:text-tech-cyan transition duration-300 py-2 border-l-2 ${
                isActive("skills")
                  ? "border-tech-cyan text-tech-cyan"
                  : "border-transparent hover:border-tech-cyan"
              } pl-2`}
              onClick={toggleMenu}
            >
              &gt; Skills
            </a>
            <a
              href="#projects"
              className={`text-tech-light hover:text-tech-cyan transition duration-300 py-2 border-l-2 ${
                isActive("projects")
                  ? "border-tech-cyan text-tech-cyan"
                  : "border-transparent hover:border-tech-cyan"
              } pl-2`}
              onClick={toggleMenu}
            >
              &gt; Projects
            </a>
            <a
              href="#contact"
              className={`text-tech-light hover:text-tech-cyan transition duration-300 py-2 border-l-2 ${
                isActive("contact")
                  ? "border-tech-cyan text-tech-cyan"
                  : "border-transparent hover:border-tech-cyan"
              } pl-2`}
              onClick={toggleMenu}
            >
              &gt; Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
