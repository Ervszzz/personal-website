import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { container } from "./ui";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "testimonials", label: "Recommendations" },
  { id: "contact", label: "Contact" },
];

// Sections that count as "Experience" in the nav
const SECTION_TO_NAV: Record<string, string> = { "featured-work": "experience" };

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let current = "";
      document.querySelectorAll<HTMLElement>("main > section[id]").forEach((el) => {
        if (scrollPosition >= el.offsetTop) current = SECTION_TO_NAV[el.id] ?? el.id;
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `transition-colors ${activeSection === id ? "text-ink" : "text-muted hover:text-ink"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className={`${container} flex h-16 items-center justify-between gap-6`}>
        <a href="#home" className="font-semibold tracking-tight text-ink">
          Ervin Fernandez
        </a>

        <nav className="hidden lg:flex items-center gap-6 text-sm" aria-label="Main">
          {NAV_ITEMS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} aria-current={activeSection === id ? "true" : undefined} className={linkClass(id)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav id="mobile-nav" aria-label="Main" className="lg:hidden border-t border-line bg-bg">
          <div className={`${container} flex flex-col py-3`}>
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={activeSection === id ? "true" : undefined}
                className={`py-2.5 ${linkClass(id)}`}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
