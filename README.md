

# Blogging application - JOVAYU-ECE Webtech project 2022/2023

## Introduction

Voici notre portfolio réalisé avec NextJS !

- Ce travail a été effectué par notre équipe de deux personnes (Rémy JOVANOVIC et ShiHao YU) *pendant près d'un semestre. 
- Notre projet final est une application de blogging Web, chaque utilisateur qui se connecte doit entrer son compte et son mot de passe, et tous les utilisateurs qui utilisent des programmes externes pour se connecter ont besoin d'une authentification tierce. 

- Tous les utilisateurs ou visiteurs connectés peuvent choisir de parcourir les articles publiés par d'autres auteurs et laisser leurs commentaires.
- Seuls les utilisateurs connectés au blog peuvent publier leurs propres articles, les visiteurs ne sont pas autorisés. 
- En outre, les auteurs d'articles peuvent choisir d'éditer leurs articles, tels que modifier ou supprimer. 
- De plus, les auteurs sont également autorisés à modifier ou supprimer les commentaires qu'ils n'aiment pas.
- Le forum dispose d'une base de données dédiée pour stocker tous les articles et commentaires.
- Si les touristes souhaitent publier des articles, ils doivent accéder à l'interface d'inscription pour s'inscrire et renseigner les informations personnelles de l'utilisateur, dont certaines seront conservées sur l'interface utilisateur suivante.
- Dans l'interface utilisateur, l'utilisateur peut modifier ses paramètres personnels email, nom, langue..., l'utilisateur peut choisir d'afficher ou non ces attributs.
- De plus, les utilisateurs sont autorisés à choisir leur avatar, la couleur de l'interface utilisateur, la taille du champ de recherche, etc.
- Dans notre projet, nous ferons de notre mieux pour offrir aux utilisateurs la meilleure expérience.

Dans les sections suivantes, nous détaillerons comment installer et exécuter notre programme.

## Production

- Vercel URL: [Blogging-App](https://ece-webapp-jovayu.vercel.app/)
- Supabase URL: [Supabase](https://app.supabase.com/project/icqmzeicgyxwjelgqbfp)

## Usage

Comment lancer notre application, effectuer des tests, etc.

### Instructions pour installation

1. [Installer Git](https://git-scm.com/downloads)

2. [Installer NodeJS](https://nodejs.org/en/download/)

3. [Installer Docker](https://docs.docker.com/engine/install/)

4. Cloner ce dépôt: [Portfolio JovaYu](https://github.com/aym00n-djrak/ece-webapp-jovayu)

5. Se deplacer dans le dossier "app"

```bash
cd app
```

5. Installer les dépendances nodes requises: 

```bash
npm i
```

### Instructions pour lancer l'application

1. Lancer l'application en mode développement:

```bash
npm run dev
```

A partir de celle-ci vous pouvez tester votre site de développement.

Ensuite pour démarrer la base de données locale de Supabase:

- Dans votre depôt dirigée vous vers le dossier supabase et démarrer docker:

```bash
cd supabase
sudo service docker start
sudo docker-compose start
```

Votre base de données supabase locale sera ainsi mise en route.

Dans ce projet, nous utiliserons la base de données online de Supabase, donc vous n'avez pas besoin de démarrer la base de données locale.

2. Build l'application:

```bash
npm run build
```

3. Démarrer la version finale:

```bash
npm run start
```

Voilà, vous pouvez enfin naviguer sur un site prêt à être déployé!

## Tâches effectuées

### Management du projet: 

- Naming convention:

    - Utilisation de la convention de nommage de la communauté.

- Structure du projet:

    - Le projet est structuré en plusieurs dossiers, chacun ayant un rôle spécifique.

    - Le dossier "client" contient le code source de l'application.

    - Le dossier "client":

        - Le dossier "components" contient les composants de l'application. (Avatar, WYSIWYG, etc.)

        - Le dossier "pages" contient les pages de l'application. (Admin, Login, Profile, etc.)

        - Le dossier "public" contient les fichiers publics de l'application. (Images, etc.)

        - Le dossier "styles" contient les styles de l'application. On utilise le framework TailwindCSS.

    - Le dossier "supabase" contient le code source de la base de données locale.

    - Le dossier "server" contient le code source du serveur.

- Git: 

    - Utilisation de Git pour le versionning.

    - Utilisation de Git pour le partage de code.

    - Utilisation de Git pour la gestion des tâches.

    - Utilisation de Git pour la gestion des conflits.

- Qualité du code:

    - Utilisation de l'outil ESLint pour vérifier la qualité du code.

    - Utilisation de l'outil Prettier pour formater le code.

- Design, UX et contenu:

    - Utilisation de TailwindCSS pour le design.

    - Utilisation de Tailwind UI pour les composants.

    - Utilisation de React-Icons pour les icônes.

    - Utilisation de Tiny pour le WYSIWYG.

### Developpement de l'application:

- Page d'accueil:

    - Home page friendly.

    - Affichage des articles.

    - Affichage d'un WYSIWYG pour écrire un article.

    - Intégration de lien externe.

- Login/Logout:

    - Login/Logout button.
    
    - Le bouton login ouvre une page de connexion, sous la forme d'un formulaire Auth fourni par Supabase et il utilise Github Provider en option pour se connecter.
    
    - Le bouton logout permet à l'utilisateur de se déconnecter de son compte.
    
    - La connexion est persistante, c'est-à-dire que l'utilisateur n'a pas besoin de se connecter à chaque fois qu'il visite le site.
    
    - Les informations de connexion sont affichées sur la Navbar.

- Page de profil:

    - Sur la page de profil, l'utilisateur peut modifier ses informations personnelles, telles que le nom, prénom, pseudo etc.

- Création de nouveaux articles:

    - Un bouton permet la création d'un nouvel article.
    
    - Un formulaire de création d'article est utilisé pour créer un nouvel article.
    
    - L'article peut prendre en paramètre un titre, un contenu, un auteur.

- Création de nouveaux commentaires:

    - Un formulaire de création de commentaire est utilisé pour créer un nouveau commentaire.
   
    - Les personnes connectées peuvent commenter les articles.
    
    - Les personnes non connectées peuvent commenter les articles mais elles doivent renseigner un pseudo.

- Contrôle de l'accès au ressources:

    - L'accès aux ressources est contrôlé par les rôles de l'utilisateur.
    
    - Il est activé sur chaque table de la base de données.
    
    - Plusieurs politiques de sécurité sont utilisées pour contrôler l'accès aux ressources. (En fonction de INSERT, SELECT, UPDATE, DELETE)
    
    - Les utilisateurs non connectés ne peuvent pas créer de nouveaux articles.
    
    - Seul les utilisateurs connectés peuvent créer de nouveaux articles des commentaires.

    - Un utilisateur n'a accès qu'à ses propres articles et commentaires. (C'est géré selon l'ID de l'utilisateur, lors de la récupération des données dans une requête SQL)

- Modification d'un article:
    
    - Un bouton permet la modification d'un article.
        
    - Un formulaire de modification d'article est utilisé pour modifier un article.
        
    - L'article peut prendre en paramètre un titre, un contenu, un auteur.

- Suppression d'un article:

    - Un bouton permet la suppression d'un article.
    
    - Une requete SQL est utilisée pour supprimer un article.

- Modification d'un commentaire:

    - Un bouton permet la modification d'un commentaire.
    
    - Un formulaire de modification de commentaire est utilisé pour modifier un commentaire.
    
    - Le commentaire peut prendre en paramètre un Firstname, Lastname, email et un contenu.

- Suppression d'un commentaire:
    
    - Un bouton permet la suppression d'un commentaire.
        
    - Une requete SQL est utilisée pour supprimer un commentaire.

- Paramètre d'un compte :

    - Un bouton permet la modification des paramètres d'un compte.
    
    - Un formulaire de modification de paramètre est utilisé pour modifier les paramètres d'un compte.
    
    - Les paramètres sont mis à jour dans la base de données.

    - Il met a jour le profil de l'utilisateur, et les informations users du site.

- WYSIWYG integration :

    - Il permet de mettre en forme le contenu de l'article.

    - Il est intégré dans la page d'accueil pour rediger un nouvel article.

- Gravatar integration :

    - Il permet de mettre une image de profil pour l'utilisateur.

    - Il est intégré dans la page de profil pour mettre une image de profil dynamique.

    - Il est mis en place en fonction de l'email de l'utilisateur.

- Sombre/Clair mode:

    - Il permet de changer le mode de l'application.

    - Il est intégré dans la page d'accueil.

    - C'est un bouton qui permet de changer le mode de l'application:
        - sombre -> clair   
        - clair -> sombre
    - Il peut être mis en mode automatique.     
    
    - Enlever dans Tailwind.config.js
        ```css
        darkMode: 'class'
        ``` 
    - Enlever dans pages/_app.js
        ```js
        <ThemeProvider attribute="class">
        ```

- Couleur customisée: 

    - Il permet de changer la couleur de l'application.
    - Il est intégré dans la page d'accueil.
    - Il est mis en place en fonction du thème choisi par l'utilisateur.
    - Il est géré par :
    ```css
     /components/theme-picker.js /components/theme-script.js
     /context/theme-context.js 
     /context/use-local-storage.js
    ```
    - Les thèmes sont stockés dans le global.css et appliqué grâce à tailwind.config.js 

### Bonus

## Auteurs

- Rémy JOVANOVIC  remy.jovanovic@edu.ece.fr
- Shihao YU  shihao.yu@edu.ece.fr

