// =====================================================================
//  Réglages du site Valoria Vision
//  C'est le seul fichier à modifier pour les mises à jour courantes.
// =====================================================================

export const SITE = {
  nom: 'Valoria Vision',
  slogan: 'Voir venir. Décider juste.',
  studio: 'DeltaOne Studio',
  url: 'https://valoria-vision.fr',
  description:
    'Valoria Vision, le logiciel de finances personnelles local pour Windows : comptes, échéances, budgets, patrimoine et trésorerie prévisionnelle, sans connexion bancaire.',
  linkedin: 'https://www.linkedin.com/company/valoria-vision',
  // Nom affiché sous la citation de la page Histoire (prénom et nom, initiales, ou « Le fondateur »)
  signatureFondateur: 'François Delrieu, fondateur de Valoria Vision',
};

// ---------------------------------------------------------------------
//  Formulaires (liste de la bêta privée et contact)
//  Adresse fournie par le service de formulaires choisi (par exemple
//  https://formspree.io/f/xxxxxxxx). Tant qu'elle est vide, les
//  formulaires affichent un message d'attente au lieu d'envoyer.
// ---------------------------------------------------------------------
export const FORMULAIRES = {
  beta: '',
  contact: '',
};

// ---------------------------------------------------------------------
//  Compteur de la bêta privée
//  progression : pourcentage de 0 à 100, ou null tant qu'il n'est pas
//  recalculé (le pourcentage est alors masqué).
//  Formule du plan bêta : 1 - (charge restante / charge initiale).
// ---------------------------------------------------------------------
export const BETA = {
  cible: 'fin avril 2027',
  cibleCourte: 'Avril 2027',
  progression: null,
  miseAJour: '25/10/2026',
  etapes: [
    { etat: 'fait', texte: 'La nouvelle interface : sept modules utilisables' },
    { etat: 'en-cours', texte: 'L’installateur Windows, puis les investissements' },
    { etat: 'a-venir', texte: 'La recette complète, puis l’ouverture de la bêta' },
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
  previsionnel: { fichier: 'previsionnel.webp', disponible: true, titre: 'Prévisionnel', texte: 'La trajectoire du solde, le seuil de sécurité et le volet « Et si ? ».' },
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
