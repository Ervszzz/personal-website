const Hero = () => {
  return (
    <section id="home" className="py-20 relative overflow-hidden">
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
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <div className="mb-2 inline-block">
            <span className="font-tech text-sm text-tech-cyan tracking-widest">
              FRONTEND DEVELOPER
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-tech-light">
            <span className="block text-tech-teal">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-tech-gradient">
              Your Name
            </span>
          </h1>
          <div className="h-1 w-20 bg-tech-cyan mb-6 md:mx-0 mx-auto"></div>
          <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0 text-tech-light/80">
            I create <span className="text-tech-cyan">beautiful</span>,{" "}
            <span className="text-tech-teal">responsive</span> websites with
            modern technologies to deliver{" "}
            <span className="text-tech-purple">exceptional</span> user
            experiences.
          </p>
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
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-tech-gray/30 flex items-center justify-center border border-tech-cyan relative group">
            {/* Replace with your profile image */}
            <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
              👨‍💻
            </div>
            <div className="absolute inset-0 rounded-full border border-tech-cyan opacity-50 group-hover:opacity-100 group-hover:shadow-neon transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
