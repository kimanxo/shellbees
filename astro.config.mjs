// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://kimanxo.github.io",
  base: "/shellbees",
  vite: {
    plugins: [tailwindcss()],
  },
});
