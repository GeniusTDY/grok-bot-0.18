import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sirv from "sirv";
import { defineConfig } from "vite";

const here = path.dirname(fileURLToPath(import.meta.url));
const upstreamRenderer = path.resolve(here, "../src/app/dist/renderer");
const controlPort = process.env.SAND_DEV_CONTROL_PORT ?? "62150";
let rendererHealth: unknown = null;

function readUpstreamManifest() {
  const html = readFileSync(path.join(upstreamRenderer, "index.html"), "utf8");
  const entry = html.match(/<script[^>]+type=["']module["'][^>]+src=["']([^"']+)["']/i)?.[1];
  const styles = [...html.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi)].map((match) => match[1]);
  if (entry == null) throw new Error("Bootstrapped renderer index.html has no module entry.");
  const toDevUrl = (assetPath: string) => `/upstream/${assetPath.replace(/^\.\//, "").replace(/^\//, "")}`;
  return { entry: toDevUrl(entry), styles: styles.map(toDevUrl) };
}

export default defineConfig({
  root: here,
  // Electron loads the packaged renderer from file://. Keep every emitted
  // script, stylesheet, font, and lazy chunk relative to index.html so the
  // normal frontend:build -> package:recovered-frontend path does not depend
  // on an HTTP origin. The production-build helper already enforces this;
  // putting it in the canonical Vite config closes the direct build path too.
  base: "./",
  plugins: [
    react(),
    {
      name: "serve-bootstrapped-upstream",
      configureServer(server) {
        const upstreamManifest = readUpstreamManifest();
        server.middlewares.use((request, response, next) => {
          if (request.url === "/__reconstructed_manifest" && request.method === "GET") {
            response.writeHead(200, { "content-type": "application/json" });
            response.end(JSON.stringify(upstreamManifest));
            return;
          }
          if (request.url !== "/__reconstructed_health") return next();
          if (request.method === "GET") {
            response.writeHead(rendererHealth == null ? 503 : 200, { "content-type": "application/json" });
            response.end(JSON.stringify(rendererHealth ?? { ready: false }));
            return;
          }
          if (request.method !== "POST") {
            response.writeHead(405).end();
            return;
          }
          let body = "";
          request.setEncoding("utf8");
          request.on("data", (chunk) => {
            body += chunk;
          });
          request.on("end", () => {
            try {
              rendererHealth = JSON.parse(body);
              response.writeHead(204).end();
            } catch {
              response.writeHead(400).end();
            }
          });
        });
        server.middlewares.use("/upstream", sirv(upstreamRenderer, { dev: true, etag: true }));
      }
    }
  ],
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: false,
    proxy: {
      "/__sand_control": {
        target: `http://127.0.0.1:${controlPort}`,
        changeOrigin: false,
        rewrite: (requestPath) => requestPath.replace(/^\/__sand_control/, "")
      }
    }
  },
  build: {
    outDir: path.resolve(here, "../.build/frontend-shell"),
    emptyOutDir: true,
    sourcemap: true
  }
});
