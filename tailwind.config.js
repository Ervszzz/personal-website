/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cyberpunk/tech inspired color palette
        "tech-darker": "#070709", // Even darker background
        "tech-dark": "#0B0C10",
        "tech-gray-dark": "#141824", // Darker gray
        "tech-gray": "#1F2833",
        "tech-gray-light": "#2C3E50", // Lighter gray
        "tech-light": "#C5C6C7",
        "tech-cyan": "#66FCF1",
        "tech-teal": "#45A29E",
        "tech-purple": "#7928CA",
        "tech-pink": "#FF0080",
        "tech-blue": "#2D00F7",
      },
      fontFamily: {
        tech: ["Space Mono", "JetBrains Mono", "monospace"],
        display: ["Orbitron", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 5px theme(colors.tech-cyan), 0 0 20px theme(colors.tech-cyan)",
        "neon-purple":
          "0 0 5px theme(colors.tech-purple), 0 0 20px theme(colors.tech-purple)",
        "neon-pink":
          "0 0 5px theme(colors.tech-pink), 0 0 20px theme(colors.tech-pink)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "matrix-code": "matrix-code 20s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": {
            boxShadow:
              "0 0 5px theme(colors.tech-cyan), 0 0 10px theme(colors.tech-cyan)",
          },
          "100%": {
            boxShadow:
              "0 0 10px theme(colors.tech-cyan), 0 0 20px theme(colors.tech-cyan)",
          },
        },
        "matrix-code": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      backgroundImage: {
        "tech-gradient":
          "linear-gradient(to right, theme(colors.tech-blue), theme(colors.tech-purple))",
        "cyber-grid":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2345A29E' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
