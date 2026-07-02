# Mini-TP – React Router, consommation d’API et Login/JWT

Ce projet est une application React créée avec Vite.

L’objectif est de découvrir plusieurs notions importantes :

- React Router pour organiser l’application en plusieurs pages ;
- fetch et useEffect pour récupérer des données depuis une API externe ;
- la gestion des états de chargement et d’erreur ;
- une première approche du login avec token JWT.

L’application utilise l’API éducative DummyJSON.

## Fonctionnalités

L’application contient :

- une page Accueil ;
- une page Produits ;
- une page Détail produit ;
- une page À propos ;
- une page Connexion ;
- une page protégée Mes réservations ;
- une navigation avec React Router ;
- la récupération des produits depuis DummyJSON ;
- la gestion du chargement ;
- la gestion des erreurs ;
- une redirection vers l’accueil pour les routes inconnues ;
- une simulation de connexion avec token ;
- une protection simple de route avec PrivateRoute.

## Installation du projet

Après avoir récupéré le projet, installez les dépendances :

```bash
npm install
```

Installez également React Router DOM si ce n’est pas déjà fait :

```bash
npm install react-router-dom
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
/                  Page d’accueil
/products          Liste des produits
/products/:id      Détail d’un produit
/about             Page À propos
/login             Page de connexion
/my-reservations   Page protégée accessible après connexion
```

Exemple :

```text
/products/1
```

affiche le détail du produit ayant l’identifiant 1.

## API utilisée pour les produits

Les données des produits viennent de DummyJSON :

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

## Partie Login / JWT

Le projet contient une partie Login / JWT à but pédagogique.

Cette partie permet de comprendre :

- le principe d’un token ;
- le stockage temporaire d’un token dans localStorage ;
- l’utilisation d’une route protégée avec PrivateRoute ;
- la redirection vers la page de connexion si l’utilisateur n’est pas connecté ;
- la déconnexion en supprimant le token.

## Identifiants de test

La connexion utilise l’API DummyJSON Auth.

Identifiants de test :

```text
username: emilys
password: emilyspass
```

## Route API utilisée pour la connexion

La connexion est effectuée avec une requête POST vers :

```text
https://dummyjson.com/auth/login
```

Exemple de données envoyées :

```json
{
  "username": "emilys",
  "password": "emilyspass",
  "expiresInMins": 30
}
```

Si la connexion réussit, l’API renvoie notamment un accessToken.

Ce token est ensuite stocké dans localStorage :

```js
localStorage.setItem('token', data.accessToken)
```

## Page protégée

La route suivante est protégée :

```text
/my-reservations
```

Si aucun token n’est présent dans localStorage, l’utilisateur est redirigé vers :

```text
/login
```

Si un token est présent, la page Mes réservations est affichée.

## Déconnexion

La déconnexion supprime les informations stockées dans localStorage :

```js
localStorage.removeItem('token')
localStorage.removeItem('user')
```

L’utilisateur est ensuite redirigé vers la page d’accueil.

## Remarque importante

Cette authentification est une simulation pédagogique.

Dans une vraie application professionnelle, la gestion des tokens, leur stockage, leur durée de vie et leur sécurité doivent être traités avec plus de précautions.

## Dépendances principales

Ce projet utilise :

- React ;
- Vite ;
- React Router DOM ;
- DummyJSON.

## Auteur

Projet réalisé dans le cadre du cours de développement frontend avec React.
