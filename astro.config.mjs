// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Yahan apna final GoDaddy wala domain daaliye
  site: 'https://vapehyderabad.in', 
  
  integrations: [
    sitemap()
  ],
});