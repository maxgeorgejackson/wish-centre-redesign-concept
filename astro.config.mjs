// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // PLACEHOLDER: switch to https://www.thewishcentre.org when the domain moves to Render.
  site: 'https://wish-centre-website.onrender.com',
  output: 'static',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
