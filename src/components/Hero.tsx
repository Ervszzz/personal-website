import profileImage from "../assets/images/profile/ervszz.png";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  return (
    <section id="home" className="py-20 relative overflow-hidden">
      {/* Particles background for Hero section */}
      <ParticlesBackground
        containerId="hero-particles"
        className="absolute inset-0 z-0"
      />

      {/* Animated tech background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-20 h-20 border border-tech-cyan opacity-20 animate-pulse-slow"></div>
        <div
          className="absolute bottom-40 right-20 w-32 h-32 border border-tech-purple opacity-20 animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-16 h-16 border border-tech-pink opacity-20 animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-cyber-grid opacity-5 z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <div className="mb-2 inline-block">
              <span className="font-tech text-sm text-tech-cyan tracking-widest">
                Full-Stack Developer | AI & Data Engineer | DevOps Enthusiast
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-tech-light">
              <span className="block text-tech-teal">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-tech-gradient">
                Ervin Fernandez
              </span>
            </h1>
            <div className="h-1 w-20 bg-tech-cyan mb-6 md:mx-0 mx-auto"></div>

            <p className="text-lg mb-4 max-w-lg mx-auto md:mx-0 text-tech-light/80">
              A passionate{" "}
              <span className="text-tech-cyan">SOFTWARE ENGINEER</span> crafting
              elegant, user-friendly digital solutions with modern technologies,
              AI, Automation, and DevOps.
            </p>

            <div className="mb-6 max-w-lg mx-auto md:mx-0">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-tech-cyan mr-2"></span>
                  <span className="text-tech-light/80">
                    <span className="text-tech-teal font-medium">
                      Frontend:
                    </span>{" "}
                    React JS, HTML, CSS, JavaScript, TailWind CSS
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-tech-teal mr-2"></span>
                  <span className="text-tech-light/80">
                    <span className="text-tech-cyan font-medium">Backend:</span>{" "}
                    Python, PHP, Laravel, C#, Mocha JS
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-tech-purple mr-2"></span>
                  <span className="text-tech-light/80">
                    <span className="text-tech-purple font-medium">
                      DevOps & Automation:
                    </span>{" "}
                    DataDog, Betterstack, ArgoCD, GitHub Actions, RPA
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-tech-pink mr-2"></span>
                  <span className="text-tech-light/80">
                    <span className="text-tech-pink font-medium">
                      Tools & Workflow:
                    </span>{" "}
                    GitHub, Linear, Notion, Cronicle
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="bg-tech-cyan hover:bg-tech-teal text-tech-dark font-bold py-3 px-6 rounded-none border border-tech-cyan hover:shadow-neon transition duration-300 font-tech"
              >
                &lt; Contact_Me /&gt;
              </a>
              <a
                href="#projects"
                className="bg-transparent hover:bg-tech-gray/30 text-tech-cyan font-bold py-3 px-6 border border-tech-cyan rounded-none hover:shadow-neon transition duration-300 font-tech"
              >
                &lt; View_Projects /&gt;
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-tech-gray/30 flex items-center justify-center border border-tech-cyan relative group overflow-hidden">
              {/* Profile image */}
              <img
                src={profileImage}
                alt="Ervin Joshua Fernandez"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full border border-tech-cyan opacity-50 group-hover:opacity-100 group-hover:shadow-neon transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* About Section - Merged from About component */}
        <div className="mt-16 pt-8 border-t border-tech-border/30">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-tech font-semibold text-tech-cyan mb-4">
                Ervin Joshua Fernandez
              </h3>

              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <h4 className="font-tech font-semibold text-tech-teal">
                    Location:
                  </h4>
                  <p className="text-tech-light/80">
                    Binmaley Pangasinan, Philippines
                  </p>
                </div>
                <div>
                  <h4 className="font-tech font-semibold text-tech-teal">
                    Availability:
                  </h4>
                  <p className="text-tech-light/80">Full-time</p>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 md:pl-12">
              <p className="text-tech-light/80 mb-6 leading-relaxed">
                I develop <span className="text-tech-cyan">innovative</span>,{" "}
                <span className="text-tech-teal">data-driven</span> solutions
                that combine Python expertise with{" "}
                <span className="text-tech-purple">AI/ML capabilities</span> and
                modern web technologies.
              </p>

              <p className="text-tech-light/80 mb-6 leading-relaxed">
                My journey in software engineering spans Python development,
                data engineering, and DevOps automation. I've built everything
                from automated ETL pipelines to AI-powered applications and
                responsive web interfaces. I'm passionate about optimizing
                systems, automating processes, and creating technology that
                solves real-world problems.
              </p>

              <p className="text-tech-light/80 mb-6 leading-relaxed">
                I'm also a{" "}
                <span className="text-tech-purple">DevOps enthusiast</span>,
                currently exploring the DevOps methodology and best practices to
                enhance system reliability, streamline deployment processes, and
                improve collaboration between development and operations teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
