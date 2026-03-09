import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;

      for (const { id } of NAV_ITEMS) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-md bg-tech-gray/90 border-b border-tech-cyan/20 z-50 shadow-lg shadow-tech-dark/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-display text-2xl font-bold">
          <span className="text-tech-teal">Ervin</span>
          <span className="text-tech-cyan">Fernandez</span>
        </div>

        {/* Social links - desktop */}
        <div className="hidden md:flex items-center space-x-3 mr-4">
          <a
            href="https://github.com/Ervszzz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-tech-light/50 hover:text-tech-cyan transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ervin-fernandez/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-tech-light/50 hover:text-tech-cyan transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none text-tech-cyan"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-tech">
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-tech-light hover:text-tech-cyan transition duration-300 relative group ${
                activeSection === id ? "text-tech-cyan" : ""
              }`}
            >
              <span>{label}</span>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-tech-cyan transition-all duration-300 ${
                  activeSection === id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-tech-dark/95 backdrop-blur-md border-t border-tech-cyan/20">
          <div className="container mx-auto px-4 flex flex-col space-y-3 py-4 font-tech">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-tech-light hover:text-tech-cyan transition duration-300 py-2 border-l-2 pl-2 ${
                  activeSection === id
                    ? "border-tech-cyan text-tech-cyan"
                    : "border-transparent hover:border-tech-cyan"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                &gt; {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
