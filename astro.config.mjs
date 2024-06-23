import { defineConfig } from 'astro/config';
import remarkCookieTitles from 'remark-flexible-code-titles';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkCookieTitles],
  }
});
