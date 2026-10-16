import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  site: "https://jcyouxuan.xyz",
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (url) =>
        ![
          "/404/",
          "/ranking/stable/",
          "/ranking/value/",
        ].some((p) => new URL(url).pathname === p),
      serialize: (item) => ({ ...item, lastmod: "2026-10-16" }),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
