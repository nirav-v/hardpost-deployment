// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        "/api": "https://gentle-spire-83185-d5ea8d952a7d.herokuapp.com",

        "/shop": "https://gentle-spire-83185-d5ea8d952a7d.herokuapp.com",
      },
    },
  });
};
