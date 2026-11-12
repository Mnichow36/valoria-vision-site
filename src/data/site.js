// =====================================================================
//  Réglages du site Valoria Vision
//  C'est le seul fichier à modifier pour les mises à jour courantes.
// =====================================================================

// ---------------------------------------------------------------------
//  Réseaux sociaux
//  Pour activer un réseau : coller l'adresse de la page dans « url ».
//  Tant que « url » est vide, le réseau n'apparaît nulle part sur le site
//  (ni dans le pied de page, ni dans les pages, ni pour Google).
//  Exemples : 'https://www.instagram.com/valoriavision'
//             'https://www.youtube.com/@valoriavision'
// ---------------------------------------------------------------------
export const RESEAUX = [
  { id: 'linkedin', nom: 'LinkedIn', url: 'https://www.linkedin.com/company/valoria-vision', icone: 'linkedin' },
  { id: 'instagram', nom: 'Instagram', url: 'https://www.instagram.com/valoria.vision', icone: 'instagram' },
  { id: 'youtube', nom: 'YouTube', url: '', icone: 'youtube' },
];
export const RESEAUX_ACTIFS = RESEAUX.filter((r) => r.url);

export const SITE = {
  nom: 'Valoria Vision',
  slogan: 'Voir venir. Décider juste.',
  studio: 'DeltaOne Studio',
  url: 'https://valoria-vision.fr',
  description:
    'Valoria Vision, le logiciel de finances personnelles local pour Windows : comptes, échéances, budgets, patrimoine et trésorerie prévisionnelle, sans connexion bancaire.',
  linkedin: RESEAUX[0].url,
  // Nom affiché sous la citation de la page Histoire (prénom et nom, initiales, ou « Le fondateur »)
  signatureFondateur: 'François Delrieu, fondateur de Valoria Vision',
  // Auteur des articles du blog (affiché sous chaque article et déclaré à Google)
  auteur: { nom: 'François Delrieu', role: 'Fondateur de Valoria Vision', page: '/histoire' },
  // Date de mise en ligne du site actuel : date de mise à jour des pages dans le plan du site
  miseEnLigne: '2026-10-25',
};

// ---------------------------------------------------------------------
//  Formulaires (liste de la bêta privée et contact)
//  Adresse fournie par le service de formulaires choisi (par exemple
//  https://formspree.io/f/xxxxxxxx). Tant qu'elle est vide, les
//  formulaires affichent un message d'attente au lieu d'envoyer.
// ---------------------------------------------------------------------
export const FORMULAIRES = {
  beta: 'https://formspree.io/f/mljjjejb',
  contact: 'https://formspree.io/f/mljjjejb',
};

// ---------------------------------------------------------------------
//  Compteur de la bêta privée
//  Le pourcentage est calculé ci-dessous à partir des lots du plan de
//  travail (planning du 01/11/2026, avancement du 07/11/2026) :
//  progression = séances terminées / séances prévues jusqu'à la bêta.
//  Pour mettre à jour : modifier « faites » (en séances, décimales
//  permises) et « miseAJour ». Le module Investissements (Premium), placé
//  dans la réserve après le gel du périmètre, n'entre pas dans le calcul.
// ---------------------------------------------------------------------
const LOTS_BETA = [
  { nom: 'A — Socle d’aplomb', seances: 4, faites: 4 },
  { nom: 'B — Chiffres du Prévisionnel et des totaux', seances: 7, faites: 7 },
  { nom: 'C — Patrimoine net', seances: 4, faites: 4 },
  { nom: 'D — Sécurité, données, installateur', seances: 5, faites: 5 },
  { nom: 'E — Moteur de rapprochement unique', seances: 5.5, faites: 5.5 },
  { nom: 'F — Volumétrie et gel du périmètre', seances: 3, faites: 3 },
  { nom: 'Refonte des Budgets', seances: 5.5, faites: 4 },
  { nom: 'Signature visuelle', seances: 6.5, faites: 0 },
  { nom: 'L2b — Menu en grands thèmes', seances: 4, faites: 0 },
  { nom: 'Recette module par module (7 écrans)', seances: 21, faites: 0 },
  { nom: 'Recette générale et publication', seances: 9, faites: 0 },
];
const totalSeances = LOTS_BETA.reduce((s, l) => s + l.seances, 0);
const seancesFaites = LOTS_BETA.reduce((s, l) => s + l.faites, 0);

export const BETA = {
  cible: 'fin avril 2027',
  cibleCourte: 'Avril 2027',
  dateCible: '2027-04-30',
  dateCibleTexte: '30/04/2027',
  progression: Math.round((seancesFaites / totalSeances) * 100),
  miseAJour: '07/11/2026',
  etapes: [
    { etat: 'fait', texte: 'Fiabilisation du socle : chiffres, patrimoine net, sécurité des données, rapprochements' },
    { etat: 'en-cours', texte: 'Refonte de l’écran Budgets' },
    { etat: 'a-venir', texte: 'Nouvelle signature visuelle et menu en grands thèmes' },
    { etat: 'a-venir', texte: 'Recette de chaque écran, puis recette générale sur l’installateur' },
    { etat: 'a-venir', texte: 'Ouverture de la bêta privée, fin avril 2027' },
  ],
};

// ---------------------------------------------------------------------
//  Captures d'écran de l'application
//  Images en public/images/ecrans/ (captures du profil Démo, données fictives). Pour en ajouter une, la déposer avec ce nom, puis
//  passer « disponible » à true. Tant qu'une capture manque, un cadre
//  neutre s'affiche à sa place.
// ---------------------------------------------------------------------
export const ECRANS = {
  tableauDeBord: { fichier: 'tableau-de-bord.webp', disponible: true, titre: 'Tableau de bord', texte: 'Cash, dépenses, patrimoine et alertes au même endroit.' },
  transactions: { fichier: 'transactions.webp', disponible: true, titre: 'Transactions et imports', texte: 'Aperçu avant import, doublons écartés, catégorisation par règles.' },
  previsionnel: { fichier: 'previsionnel.webp', disponible: true, titre: 'Prévisionnel', texte: 'La trajectoire du solde, le point bas et le seuil de sécurité. La courbe Prudent et le volet « Et si ? » font partie de l’édition Premium.' },
  budgets: { fichier: 'budgets.webp', disponible: true, titre: 'Budgets', texte: 'Le prévu face au réalisé, mois par mois et sur l’année.' },
  patrimoine: { fichier: 'patrimoine.webp', disponible: true, titre: 'Patrimoine', texte: 'Patrimoine net, allocation et évolution sur douze mois.' },
  rapprochements: { fichier: 'rapprochements.webp', disponible: true, titre: 'Rapprochements', texte: 'Les opérations importées reliées aux échéances attendues.' },
};

// ---------------------------------------------------------------------
//  Menu principal
// ---------------------------------------------------------------------
export const MENU = [
  {
    titre: 'Produit',
    liens: [
      { href: '/produit', titre: 'Le cockpit', texte: 'Cash, dépenses et patrimoine en un coup d’œil', icone: 'horloge' },
      { href: '/produit#previsionnel', titre: 'Le prévisionnel', texte: 'Voir venir les échéances et le point bas', icone: 'courbe' },
      { href: '/produit#imports', titre: 'Imports et transactions', texte: 'Vos relevés, vérifiés avant d’entrer', icone: 'import' },
      { href: '/produit#budgets', titre: 'Budgets et patrimoine', texte: 'Le prévu face au réalisé, le net sur douze mois', icone: 'camembert' },
      { href: '/ecrans', titre: 'Les écrans', texte: 'L’interface en grand, écran par écran', icone: 'ecran' },
      { href: '/calculateur-patrimoine-net', titre: 'Calculateur de patrimoine', texte: 'Gratuit, dans votre navigateur', icone: 'camembert' },
    ],
  },
  {
    titre: 'Votre sécurité',
    liens: [
      { href: '/securite-locale', titre: 'L’approche locale', texte: 'Vos chiffres restent sur votre ordinateur', icone: 'bouclier' },
      { href: '/blog/application-locale-vs-saas-cloud', titre: 'Local ou Cloud ?', texte: 'Pourquoi ce choix d’architecture', icone: 'nuage' },
    ],
  },
  {
    titre: 'Le projet',
    liens: [
      { href: '/histoire', titre: 'L’histoire', texte: 'Une carrière en trésorerie, un outil pour soi', icone: 'plume' },
      { href: '/roadmap', titre: 'La feuille de route', texte: 'Où en est la bêta privée', icone: 'drapeau' },
      { href: '/contact', titre: 'Contact', texte: 'Poser une question directement', icone: 'message' },
    ],
  },
  { titre: 'Offre', href: '/offre' },
  { titre: 'Blog', href: '/blog' },
];
