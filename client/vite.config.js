// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  const isProduction = mode === "production";

  const proxyTarget = isProduction
    ? "https://hardpost-02998f60f4cf.herokuapp.com/"
    : "http://localhost:3000"; // Change the port to match your local backend port

  return defineConfig({
    plugins: [react()],
    build: {
      // generate manifest.json in outDir
      manifest: true,
      rollupOptions: {
        // overwrite default .html entry
        input: "./src/main.jsx",
      },
    },
    server: {
      proxy: {
        "/api": {
          target: proxyTarget,
          changeOrigin: true,
          secure: isProduction,
        },
        "/shop": {
          target: proxyTarget,
          changeOrigin: true,
          secure: isProduction,
        },
      },
    },
  });
};
