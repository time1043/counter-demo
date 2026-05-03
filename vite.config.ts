import babel from "@rolldown/plugin-babel";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

// https://vite.dev/config/
// https://jotai.org/docs/tools/devtools
export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: ["jotai-babel/preset"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
