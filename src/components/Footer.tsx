import { container } from "./ui";

const LINKS = [
  { href: "https://github.com/Ervszzz", label: "GitHub" },
  { href: "https://www.linkedin.com/in/ervin-fernandez/", label: "LinkedIn" },
  { href: "mailto:ervsfernandez21@gmail.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className={`${container} flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between`}>
        <div>
          <p className="font-semibold tracking-tight text-ink">Ervin Fernandez</p>
          <p className="text-sm text-muted">&copy; {currentYear}. Built with React and Tailwind CSS, with help from AI.</p>
        </div>
        <ul className="flex gap-5 text-sm">
          {LINKS.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-muted hover:text-ink transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
