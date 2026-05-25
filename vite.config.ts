import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/bashkortostan-stats-dashboard/" : "/",
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://127.0.0.1:4100"
    }
  },
  build: {
    outDir: "dist/client"
  },
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"]
  }
});
