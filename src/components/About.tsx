const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-tech-gray-dark relative overflow-hidden"
    >
      {/* Tech background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-tech-purple/5 blur-xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-tech-light mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-tech-cyan mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="w-64 h-64 rounded-none overflow-hidden border border-tech-cyan/30 relative group">
              {/* Replace with your image */}
              <div className="w-full h-full bg-tech-gray flex items-center justify-center text-4xl">
                📷
              </div>
              <div className="absolute inset-0 border border-tech-cyan opacity-0 group-hover:opacity-100 group-hover:shadow-neon transition-all duration-500"></div>
            </div>
          </div>

          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-tech font-semibold text-tech-cyan mb-4">
              &lt;Who_am_I /&gt;
            </h3>
            <p className="text-tech-light/80 mb-6 leading-relaxed">
              I'm a passionate frontend developer with a strong foundation in
              modern web technologies. With expertise in{" "}
              <span className="text-tech-cyan">React</span>,{" "}
              <span className="text-tech-teal">TypeScript</span>, and responsive
              design, I create engaging and user-friendly web applications that
              deliver exceptional experiences across all devices.
            </p>
            <p className="text-tech-light/80 mb-6 leading-relaxed">
              My journey in web development began 5 years ago, and since then,
              I've worked on various projects ranging from small business
              websites to complex web applications. I'm constantly learning and
              adapting to new technologies to stay at the forefront of web
              development.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-tech font-semibold text-tech-teal">
                  Name:
                </h4>
                <p className="text-tech-light/80">Your Name</p>
              </div>
              <div>
                <h4 className="font-tech font-semibold text-tech-teal">
                  Email:
                </h4>
                <p className="text-tech-light/80">your.email@example.com</p>
              </div>
              <div>
                <h4 className="font-tech font-semibold text-tech-teal">
                  Location:
                </h4>
                <p className="text-tech-light/80">Your City, Country</p>
              </div>
              <div>
                <h4 className="font-tech font-semibold text-tech-teal">
                  Availability:
                </h4>
                <p className="text-tech-light/80">Full-time</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block bg-tech-cyan hover:bg-tech-teal text-tech-dark font-bold py-3 px-6 border border-tech-cyan hover:shadow-neon transition duration-300 font-tech"
            >
              &lt; Contact_Me /&gt;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
