// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import fs from "node:fs";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

try {
  const cleanPortrait = "C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\519f31f6-ab21-423c-b0ee-b9b7c30ce32c\\vista_clean_portrait_1791822358486.jpg";
  if (fs.existsSync(cleanPortrait)) {
    fs.copyFileSync(cleanPortrait, "src/assets/vista-terrace-portrait.jpg");
  }
} catch {}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});

