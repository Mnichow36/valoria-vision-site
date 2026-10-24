# Site internet Valoria Vision

Site officiel de Valoria Vision, publié sur **https://valoria-vision.fr**.

- Site statique construit avec [Astro](https://astro.build), publié gratuitement par **GitHub Pages**.
- Le domaine reste chez **OVH** : seules quelques lignes de la zone DNS pointent vers GitHub.
- Chaque envoi (`git push`) sur la branche `main` met le site en ligne automatiquement, en 1 à 2 minutes.

## Les fichiers utiles

| Fichier | À quoi il sert |
|---|---|
| `src/data/site.js` | **Les réglages courants** : formulaires, compteur de la bêta, captures d’écran, menu |
| `src/pages/` | Une page par fichier (`offre.astro` = la page `/offre`) |
| `src/pages/blog/` | Les articles du blog, un fichier `.md` par article |
| `public/images/` | Les illustrations et les captures d’écran |
| `voir_le_site.bat` | Ouvre le site sur ton ordinateur, avant publication |

## Voir le site sur son ordinateur

Double-clique sur `voir_le_site.bat`. Le site s’ouvre dans le navigateur à l’adresse `http://localhost:4321`. Ferme la fenêtre noire pour l’arrêter.

## Mises à jour courantes

- **Compteur de la bêta** : dans `src/data/site.js`, rubrique `BETA`, remplacer `progression: null` par le pourcentage (par exemple `progression: 42`) et mettre à jour `miseAJour`.
- **Captures d’écran** : déposer les images dans `public/images/ecrans/` avec les noms indiqués dans `src/data/site.js` (rubrique `ECRANS`), puis passer `disponible: false` à `true`.
- **Formulaires** : coller l’adresse fournie par le service de formulaires dans `FORMULAIRES.beta` et `FORMULAIRES.contact`.
- **Nouvel article** : copier un fichier de `src/pages/blog/`, changer son nom (il devient l’adresse) et son contenu. Il apparaît tout seul dans la page Blog.

Puis publier :

```powershell
git add .
git commit -m "Mise à jour du site"
git push
```

## Avant la bascule du domaine (à cocher)

- [ ] Captures d’écran de l’interface ajoutées (profil Démo, données d’exemple)
- [ ] Service de formulaires choisi et adresses renseignées dans `src/data/site.js`
- [ ] Mentions légales et confidentialité complétées (passages entre crochets)
- [ ] Liste des inscrits de l’ancien site exportée depuis `https://valoria-vision.fr/leads`
- [ ] Tâche programmée ChatGPT qui met à jour le compteur arrêtée
- [ ] Site vérifié sur ordinateur et sur téléphone

## Mise en ligne, première fois

### 1. Créer le dépôt sur GitHub

Sur github.com : **New repository**, nom `valoria-vision-site`, visibilité **Public**, sans README ni autre fichier. Puis, dans PowerShell, depuis le dossier du site :

```powershell
git remote add origin https://github.com/Mnichow36/valoria-vision-site.git
git push -u origin main
```

### 2. Activer GitHub Pages

Dans le dépôt : **Settings › Pages › Build and deployment › Source : GitHub Actions**. L’onglet **Actions** montre la publication en cours ; une coche verte indique qu’elle a réussi.

### 3. Basculer le domaine chez OVH

Dans l’espace client OVH, **valoria-vision.fr › Zone DNS** :

1. **Ne pas toucher** aux lignes `NS`, `MX` et `SPF` (messagerie).
2. **Supprimer** les deux lignes `A` actuelles (`162.159.143.30` et `172.66.3.26`) et la ligne `CNAME` de `www` (`custom-domains.chatgpt.site`).
3. **Ajouter** quatre lignes de type `A`, sous-domaine vide :
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. **Ajouter** une ligne `CNAME` : sous-domaine `www`, cible `mnichow36.github.io.`

Puis sur GitHub, **Settings › Pages › Custom domain** : saisir `valoria-vision.fr`, enregistrer, attendre la vérification, puis cocher **Enforce HTTPS**.

La propagation prend de quelques minutes à 24 heures. Les lignes `TXT` liées à ChatGPT peuvent être supprimées une fois le nouveau site en ligne.

### 4. Après la bascule

Dans Google Search Console, soumettre à nouveau `https://valoria-vision.fr/sitemap-index.xml` et demander l’indexation de l’accueil.

## Adresses conservées

Toutes les adresses de l’ancien site existent à l’identique (`/produit`, `/securite-locale`, `/blog/application-locale-vs-saas-cloud`…), pour garder le référencement. L’ancien plan du site `/sitemap.xml` renvoie vers le nouveau.
