import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/",                    // IMPORTANT
  build: {
    outDir: "dist",             // IMPORTANT (Vercel looks for dist)
    emptyOutDir: true
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
