import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    rollupOptions: {
      output: {
        // Keep the heavy 3D stack out of the initial bundle path (Vite 8 needs a function).
        manualChunks(id: string) {
          if (!id.includes("node_modules")) return;
          if (/[\\/]node_modules[\\/]three[\\/]/.test(id)) return "three";
          if (id.includes("@react-three")) return "r3f";
          if (/[\\/]node_modules[\\/](gsap|@gsap|framer-motion|lenis)[\\/]/.test(id)) return "motion";
        },
      },
    },
  },
});
