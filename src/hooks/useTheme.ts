import { useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const root = document.documentElement;

// Light by default. The initial class is set by the inline script in
// index.html before paint, from the visitor's saved choice if there is one.
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => (root.classList.contains("dark") ? "dark" : "light"));

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    root.classList.add("theme-ready");
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode); the choice lasts for this visit only
    }
    setTheme(next);
  };

  return { theme, toggleTheme };
}
