import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

import svelte from "@astrojs/svelte";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://vaibhavpathak.me/",
  integrations: [
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
    image(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  adapter: netlify({ edgeMiddleware: true }),
  vite: {
    assetsInclude: "**/*.riv",
  },
});
