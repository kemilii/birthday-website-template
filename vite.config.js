import { defineConfig } from "vite";

export default defineConfig({
  root: "public", // serve files from /public during dev
  build: {
    outDir: "../dist", // output goes one level up, parallel to /public
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
}); 