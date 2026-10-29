---
layout: ../../layouts/Article.astro
title: "Importer ses relevés bancaires sans connecter sa banque : comment ça marche ?"
titreSeo: "Importer ses relevés bancaires sans connexion à sa banque"
description: "Suivre son budget sans donner accès à sa banque : télécharger un relevé, l’importer, vérifier l’aperçu et catégoriser, le tout sur son ordinateur."
chapeau: "Une alternative à la connexion bancaire : vous gardez la main sur ce qui entre dans l’outil, et vos identifiants restent chez vous."
categorie: "Imports"
date: "2026-10-27"
modifie: "2026-10-29"
lecture: 6
motsCles: ["Importer relevé bancaire CSV", "Budget sans connexion bancaire", "Application budget sans agrégateur", "Suivi des dépenses local", "Catégorisation des transactions"]
---

## Deux façons de suivre ses comptes

Pour suivre ses dépenses dans un outil de budget, il existe deux grandes approches.

La première est la **connexion bancaire** : l’outil se branche sur vos comptes, généralement par l’intermédiaire d’un service d’agrégation, et récupère les opérations de façon automatique. C’est pratique, mais cela suppose d’autoriser un tiers à lire vos comptes, et de renouveler ce consentement régulièrement.

La seconde est **l’import de relevés** : vous téléchargez vous-même un fichier depuis l’espace en ligne de votre banque, puis vous le chargez dans l’outil. Aucun identifiant n’est communiqué, aucun accès permanent n’est donné.

Valoria Vision a choisi la seconde approche. Cet article explique ce qu’elle implique, pas à pas.

## Ce que contient un relevé exportable

La plupart des banques permettent de télécharger l’historique de ses opérations dans un fichier, souvent au format CSV, que l’on ouvre aussi dans un tableur. On y trouve, pour chaque ligne :

- la date de l’opération ;
- le libellé, tel que la banque l’affiche ;
- le montant, en débit ou en crédit.

Le détail des colonnes varie d’une banque à l’autre : c’est la raison pour laquelle l’outil qui lit le fichier doit être tolérant, et vous montrer ce qu’il a compris avant d’enregistrer quoi que ce soit.

## Les étapes dans Valoria Vision

### 1. Télécharger le relevé

Depuis l’espace en ligne de votre banque, vous exportez les opérations de la période souhaitée. Cette étape se fait chez votre banque, avec vos propres identifiants : Valoria Vision n’y participe pas.

### 2. Charger le fichier et lire l’aperçu

Le fichier est lu sur votre ordinateur. Avant tout enregistrement, l’application affiche un **aperçu** : les opérations nouvelles, les doublons écartés et les lignes à vérifier. Rien n’est enregistré sans votre accord, et un import peut être annulé.

### 3. Écarter les doublons

Quand deux relevés se chevauchent, certaines opérations apparaissent deux fois. L’aperçu les repère et les écarte, pour que les soldes restent justes.

### 4. Catégoriser avec ses propres règles

Les opérations sont classées par des **règles que vous définissez** : par exemple, un libellé contenant le nom d’un supermarché va dans « Alimentation ». Les règles s’appliquent localement, et celles qui ne trouvent pas de catégorie laissent l’opération « à catégoriser » pour que vous la traitiez. La version gratuite inclut jusqu’à 5 règles ; la version Premium, après la bêta, n’en limite pas le nombre.

### 5. Rapprocher des échéances

Chaque opération importée peut être reliée à l’échéance attendue : un loyer, un abonnement, un prélèvement. Les écarts de date ou de montant sont signalés. C’est ce qui permet ensuite de **voir venir** les échéances dans le [prévisionnel](/produit#previsionnel).

## Ce que cela change

- **Aucun identifiant bancaire** n’est demandé ni stocké.
- **Les données restent sur votre ordinateur**, protégées par un mot de passe, comme l’explique l’article sur [l’application locale face au Cloud](/blog/application-locale-vs-saas-cloud).
- **Vous contrôlez ce qui entre** : l’aperçu est une étape de vérification, pas un simple chargement.

## Les limites, à connaître avant de choisir

L’import est **manuel** : il faut télécharger et charger un fichier, par exemple une fois par semaine ou par mois. Les soldes ne se mettent donc pas à jour en temps réel, et un virement reçu ce matin n’apparaîtra qu’au prochain import.

Pour beaucoup de personnes, ce rythme suffit. Il convient bien à celles qui veulent comprendre leur situation, préparer le mois à venir et décider, plutôt que consulter leur solde plusieurs fois par jour. À l’inverse, si vous tenez à un suivi automatique en continu, une application connectée répondra mieux à ce besoin.

## Pour aller plus loin

- Voir [l’écran des transactions et des imports](/ecrans) dans le profil de démonstration.
- Lire le mode d’emploi complet pour [suivre son budget sans agrégateur bancaire](/blog/budget-sans-agregateur-bancaire).
- Comprendre [l’approche locale](/securite-locale) et ce qu’elle protège.
- Découvrir [l’offre](/offre) : la version Standard est gratuite, jusqu’à 3 comptes.

Si ce fonctionnement vous correspond, vous pouvez [rejoindre la bêta privée](/inscription), prévue fin avril 2027.
