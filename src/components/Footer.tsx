const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-darker border-t border-tech-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="font-display text-xl font-semibold text-tech-ink mb-2">Ervin Fernandez</p>
            <p className="text-sm text-tech-text-secondary">Site reliability engineer at Zendesk</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-medium text-tech-ink mb-4">On this page</h2>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-tech-text-secondary hover:text-tech-cyan transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-medium text-tech-ink mb-4">Contact</h2>
            <ul className="space-y-2 text-sm text-tech-text-secondary">
              <li>
                <a href="mailto:ervsfernandez21@gmail.com" className="hover:text-tech-cyan transition-colors duration-200">
                  ervsfernandez21@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-tech-border pt-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-tech-text-secondary">
          <p>&copy; {currentYear} Ervin Fernandez</p>
          <p>Built with React and Tailwind CSS, with help from AI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
