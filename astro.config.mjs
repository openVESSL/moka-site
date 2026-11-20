import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://moka.openvessl.com",
  trailingSlash: "never",
  compressHTML: false,
  build: { format: "file" },
});
