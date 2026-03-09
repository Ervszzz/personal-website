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
