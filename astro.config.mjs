// Configuration du site Valoria Vision (site statique publié sur GitHub Pages).
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://valoria-vision.fr',
  // Adresses sans barre finale, comme sur l'ancien site : /produit, /blog/mon-article
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
