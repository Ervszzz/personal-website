const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400">Ervin Fernandez</h2>
            <p className="mt-2 text-gray-400">Software Engineer</p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Binmaley Pangasinan, Philippines</li>
                <li className="text-gray-400">ervsfernandez21@gmail.com</li>
                <li className="text-gray-400">+639457058871</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Ervin Fernandez. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed and built with Artificial Intelligence{" "}
            using React and TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
