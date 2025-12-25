import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
    historyApiFallback: true,
  },
  build: {
    outDir: "build", // <- this makes Vite build to "build" instead of "dist"
  },
});
