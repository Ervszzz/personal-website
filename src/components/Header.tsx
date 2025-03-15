import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="backdrop-blur-md bg-tech-gray/90 border-b border-tech-cyan/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-display text-2xl font-bold">
          <span className="text-tech-cyan">&lt;</span>
          <span className="text-tech-teal">Your</span>
          <span className="text-tech-cyan">Name</span>
          <span className="text-tech-cyan">/&gt;</span>
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
            className="text-tech-light hover:text-tech-cyan transition duration-300 relative group"
          >
            <span>Home</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-cyan group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#about"
            className="text-tech-light hover:text-tech-cyan transition duration-300 relative group"
          >
            <span>About</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-cyan group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#skills"
            className="text-tech-light hover:text-tech-cyan transition duration-300 relative group"
          >
            <span>Skills</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-cyan group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#projects"
            className="text-tech-light hover:text-tech-cyan transition duration-300 relative group"
          >
            <span>Projects</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-cyan group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#contact"
            className="text-tech-light hover:text-tech-cyan transition duration-300 relative group"
          >
            <span>Contact</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-cyan group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-tech-dark/95 backdrop-blur-md border-t border-tech-cyan/20">
          <div className="container mx-auto px-4 flex flex-col space-y-3 py-4 font-tech">
            <a
              href="#home"
              className="text-tech-light hover:text-tech-cyan transition duration-300 py-2 border-l-2 border-transparent hover:border-tech-cyan pl-2"
              onClick={toggleMenu}
            >
              &gt; Home
            </a>
            <a
              href="#about"
              className="text-tech-light hover:text-tech-cyan transition duration-300 py-2 border-l-2 border-transparent hover:border-tech-cyan pl-2"
              onClick={toggleMenu}
            >
              &gt; About
            </a>
            <a
              href="#skills"
              className="text-tech-light hover:text-tech-cyan transition duration-300 py-2 border-l-2 border-transparent hover:border-tech-cyan pl-2"
              onClick={toggleMenu}
            >
              &gt; Skills
            </a>
            <a
              href="#projects"
              className="text-tech-light hover:text-tech-cyan transition duration-300 py-2 border-l-2 border-transparent hover:border-tech-cyan pl-2"
              onClick={toggleMenu}
            >
              &gt; Projects
            </a>
            <a
              href="#contact"
              className="text-tech-light hover:text-tech-cyan transition duration-300 py-2 border-l-2 border-transparent hover:border-tech-cyan pl-2"
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
