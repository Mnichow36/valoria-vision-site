// Configuration du site Valoria Vision (site statique publié sur GitHub Pages).
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { SITE } from './src/data/site.js';

// Date de mise en ligne du site actuel (réglage SITE.miseEnLigne dans src/data/site.js)
const MISE_EN_LIGNE = SITE.miseEnLigne;

// Date de dernière modification de chaque article, lue dans son en-tête (modifie, sinon date)
const datesArticles = {};
for (const fichier of readdirSync('./src/pages/blog')) {
  if (!fichier.endsWith('.md')) continue;
  const entete = readFileSync(`./src/pages/blog/${fichier}`, 'utf-8').split('---')[1] ?? '';
  const lire = (cle) => entete.match(new RegExp(`^${cle}:\\s*"?([0-9-]{10})`, 'm'))?.[1];
  datesArticles[`/blog/${fichier.replace(/\.md$/, '')}`] = lire('modifie') ?? lire('date');
}
const dernierArticle = Object.values(datesArticles).sort().pop();

export default defineConfig({
  site: 'https://valoria-vision.fr',
  // Adresses sans barre finale, comme sur l'ancien site : /produit, /blog/mon-article
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      // La page 404 n'a rien à faire dans le plan du site
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const chemin = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        let date = datesArticles[chemin];
        if (!date && chemin === '/blog') date = [dernierArticle, MISE_EN_LIGNE].sort().pop();
        item.lastmod = new Date(date ?? MISE_EN_LIGNE).toISOString();
        return item;
      },
    }),
  ],
});
