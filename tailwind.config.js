/** @type {import('tailwindcss').Config} */

// Theme colors come from CSS variables (see src/index.css) so light and dark
// mode share one set of tokens. Values are space-separated RGB channels.
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        ink: token("ink"),
        muted: token("muted"),
        line: token("line"),
        accent: token("accent"),
        "accent-ink": token("accent-ink"),
        ok: token("ok"),
        warn: token("warn"),
      },
      fontFamily: {
        sans: ["Schibsted Grotesk", "system-ui", "sans-serif"],
        mono: ["Martian Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};
