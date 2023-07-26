import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://hardpost-02998f60f4cf.herokuapp.com/",
        changeOrigin: true,
        secure: true,
      }, // Replace with your backend server URL
      "/shop": "https://hardpost-02998f60f4cf.herokuapp.com/",
    },
  },
});
