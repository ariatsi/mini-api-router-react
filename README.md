# Mini-TP 7 – React Router et consommation d’API

Ce projet est une application React créée avec Vite.

L’objectif est de découvrir deux notions importantes :

- React Router pour organiser l’application en plusieurs pages ;
- fetch et useEffect pour récupérer des données depuis une API externe.

L’application utilise l’API éducative DummyJSON.

## Fonctionnalités

L’application contient :

- une page Accueil ;
- une page Produits ;
- une page Détail produit ;
- une page À propos ;
- une navigation avec React Router ;
- la récupération des produits depuis DummyJSON ;
- la gestion du chargement ;
- la gestion des erreurs ;
- une redirection vers l’accueil pour les routes inconnues.

## Installation du projet

Après avoir récupéré le projet, installez les dépendances :

```bash
npm install
```

## Lancement du projet

Pour lancer l’application en mode développement :

```bash
npm run dev
```

Ouvrez ensuite l’adresse affichée dans le terminal, par exemple :

```text
http://localhost:5173
```

## Routes disponibles

```text
/              Page d’accueil
/products      Liste des produits
/products/:id  Détail d’un produit
/about         Page À propos
```

Exemple :

```text
/products/1
```

affiche le détail du produit ayant l’identifiant 1.

## API utilisée

Les données viennent de DummyJSON :

```text
https://dummyjson.com/products
```

La liste des produits est récupérée avec :

```text
https://dummyjson.com/products?limit=12
```

Le détail d’un produit est récupéré avec :

```text
https://dummyjson.com/products/:id
```

## Dépendances principales

Ce projet utilise :

- React ;
- Vite ;
- React Router DOM.

React Router doit être installé avec :

```bash
npm install react-router-dom
```

## Partie Login / JWT

Une partie Login / JWT peut être ajoutée en complément pédagogique.

Elle permet de comprendre :

- le principe d’un token ;
- le stockage temporaire dans localStorage ;
- l’envoi d’un token dans le header Authorization ;
- la protection simple d’une route avec un composant PrivateRoute.

Cette partie prépare le projet final, mais ne remplace pas une vraie authentification sécurisée en production.

## Auteur

Projet réalisé dans le cadre du cours de développement frontend avec React.
