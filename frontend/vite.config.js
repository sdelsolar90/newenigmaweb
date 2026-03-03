import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function serveBrandbookPlugin() {
  return {
    name: "serve-brandbook",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === "/brandbook" || req.url === "/brandbook/") {
          req.url = "/brandbook/index.html";
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [serveBrandbookPlugin(), react(), tailwindcss()],
  server: {
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          animations: ["motion"],
        },
      },
    },
  },
});
