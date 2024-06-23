import { defineConfig } from 'astro/config';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import RehypeVideo from 'rehype-video';
import remarkCookieTitles from 'remark-flexible-code-titles';

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    div: [
      ...defaultSchema.attributes.div,
      ['className', /remark-code-.+/]
    ],
    '*': [
      ...(defaultSchema.attributes['*']),
      'style',
    ],
  },
}

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkCookieTitles],
    rehypePlugins: [
      [rehypeSanitize, schema],
      [RehypeVideo, {test: /\/videos\/.+\.mp4/}],
    ],
  }
});
