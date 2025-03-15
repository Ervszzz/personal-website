import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-404-html",
      closeBundle() {
        try {
          // Copy 404.html to dist directory
          if (fs.existsSync("public/404.html")) {
            fs.copyFileSync("public/404.html", resolve("dist", "404.html"));
            console.log("Copied 404.html to dist directory");
          }
        } catch (error) {
          console.error("Error copying 404.html:", error);
        }
      },
    },
  ],
  base: "/personal-website/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    sourcemap: false,
  },
});
