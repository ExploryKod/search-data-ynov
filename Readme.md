# Projet : Proof of Concept (POC)

Projet mis en ligne : [accés au site web](https://www.wica4254.odns.fr/)

Une fois sur le site en ligne il faut se connecter avec ces identifiants :

- Email
```
user@test.com
```
- Mot de passe
```
password
```
Ou créer votre compte si ça ne marche pas.

## Objectif
Ce projet a pour but de s'immerger dans une technologie ou un concept spécifique en développant un Proof of Concept (POC). 
À travers cette démarche, on peux explorer des outils, expérimenter des fonctionnalités, et partager des apprentissages.

## Mon choix

J'ai choisi de travailler sur l'intégration de Algolia avec Laravel sur un jeu de données publique issue de Algolia. 

#### Mon but:
Créer un outil pour rechercher par mot-clés des articles dans l'index (jeu de données) issu de Algolia.

## Installation

Nécessite les outils suivants : 
- [Node.js](https://nodejs.org/) (version recommandée : LTS)
- Gestionnaire de packages npm
- PHP > 8.1
- MySQL en local

Me demander les clés API pour Algolia ou alors utilisez les vôtre et générez un index "ecommerce" avec leur sample de données "ecommerce".

Installer les dépendances :
- `composer install`
- `npm install`

Créer votre base de donnée locale 
Copier le `env.example` dans un `.env` et le mettre à jour avec vos données, surtout pour la BDD.
Mettre à jour `config/scout.php` avec vos clés API Algolia le cas échéant.

Ouvrir 2 terminaux et à la racine du projet : 

Sur un premier terminal:
- `php artisan key:generate`
- `php artisan migrate`
- `php artisan serve`

Puis sur le second : 
- `npm run build`
- `npm run dev`

et aller sur `localhost:8000`


## Consignes et étapes demandées

### 1. Choix du Sujet
- **Description** : Les participants sélectionnent un sujet parmi une liste proposée ou peuvent soumettre une idée originale (soumise à validation).
- **Exemples de sujets** :
  - Création d’une Progressive Web App (PWA) avec React.
  - Mise en œuvre d’une recherche intelligente avec Elasticsearch ou Algolia.
  - Développement d’un dashboard en temps réel avec D3.js et Node.js.

### 2. Recherche et Documentation
- **Objectifs** :
  - Comprendre le sujet : qu’est-ce que c’est, pourquoi l’utiliser ?
  - Étudier des exemples d’utilisation.
  - Identifier les outils nécessaires (frameworks, bibliothèques, services, etc.).

### 3. Création du POC
- **Objectifs** :
  - Développer une application minimaliste qui illustre le concept choisi.
  - **Backend** : Créer une API ou un service correspondant au concept.
  - **Frontend** : Créer une interface utilisateur démontrant le concept.
- **Exemples de POCs** :
  - Un moteur de recherche interne avec filtrage avancé, basé sur Elasticsearch.
  - Un tableau de bord visualisant des données en direct avec D3.js.
  - Une PWA avec des notifications push.

### 4. Présentation à la Classe
- **Durée** : 10-15 minutes.
- **Contenu** :
  - Expliquer brièvement le concept ou la technologie abordée.
  - Démontrer le fonctionnement du POC.
  - Répondre aux questions des participants.

---

## Ressources
- [React](https://reactjs.org/)
- [Elasticsearch](https://www.elastic.co/)
- [D3.js](https://d3js.org/)
- [Documentation Progressive Web Apps (PWA)](https://web.dev/progressive-web-apps/)



