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
    <footer className="bg-tech-darker border-t border-tech-cyan/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-5 z-0" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-bold mb-3">
              <span className="text-tech-teal">Ervin</span>
              <span className="text-tech-cyan">Fernandez</span>
            </div>
            <p className="text-tech-light/50 font-tech text-sm">Software Engineer</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-tech text-tech-teal text-xs tracking-widest uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-tech-light/50 hover:text-tech-cyan font-tech text-sm transition-colors duration-300"
                  >
                    &gt; {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-tech text-tech-teal text-xs tracking-widest uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-2 font-tech text-sm text-tech-light/50">
              <li>Binmaley Pangasinan, Philippines</li>
              <li>ervsfernandez21@gmail.com</li>
              <li>+639457058871</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-tech-cyan/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-tech-light/30 font-tech text-xs">
            &copy; {currentYear} Ervin Fernandez. All rights reserved.
          </p>
          <p className="text-tech-light/30 font-tech text-xs">
            Designed and built with Artificial Intelligence using React and TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
