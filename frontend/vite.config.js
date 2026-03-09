import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function deferCssPlugin() {
  return {
    name: "defer-css",
    enforce: "post",
    apply: "build",
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/,
        '<style>*,*::before,*::after{box-sizing:border-box;margin:0}body{background:#1C1C1E;min-height:100vh}</style>' +
        '<link rel="stylesheet" crossorigin href="$1" media="print" onload="this.media=\'all\'">' +
        '<noscript><link rel="stylesheet" crossorigin href="$1"></noscript>'
      );
    },
  };
}

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
  plugins: [serveBrandbookPlugin(), react(), tailwindcss(), deferCssPlugin()],
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
          router: ["react-router-dom"],
          animations: ["motion"],
        },
      },
    },
  },
});
