import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const root = document.documentElement;

const readSaved = (): Theme | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
};

// The initial class is set by the inline script in index.html before paint.
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => (root.classList.contains("dark") ? "dark" : "light"));

  // Follow the system setting until the visitor picks a theme themselves
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (readSaved()) return;
      root.classList.toggle("dark", query.matches);
      setTheme(query.matches ? "dark" : "light");
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

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
