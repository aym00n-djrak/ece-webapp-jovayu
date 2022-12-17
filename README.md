# Portfolio JOVAYU

## Introduction

Voici notre portfolio réalisé avec NextJS !

*Ce travail a été effectué par notre équipe de deux personnes (Rémy JOVANOVIC et ShiHao YU) *pendant près d'un semestre. 
*Notre projet final est une application de blogging Web, chaque utilisateur qui se connecte doit *entrer son compte et son mot de passe, et tous les utilisateurs qui utilisent des programmes externes pour se connecter ont besoin d'une authentification tierce. 

*Tous les utilisateurs ou visiteurs connectés peuvent choisir de parcourir les articles publiés par d'autres auteurs et laisser leurs commentaires.
*Seuls les utilisateurs connectés au blog peuvent publier leurs propres articles, les visiteurs ne sont pas autorisés. 
*En outre, les auteurs d'articles peuvent choisir d'éditer leurs articles, tels que modifier ou supprimer. 
*De plus, les auteurs sont également autorisés à modifier ou supprimer les commentaires qu'ils n'aiment pas.
*Le forum dispose d'une base de données dédiée pour stocker tous les articles et commentaires.
*Si les touristes souhaitent publier des articles, ils doivent accéder à l'interface d'inscription pour s'inscrire et renseigner les informations personnelles de l'utilisateur, dont certaines seront conservées sur l'interface utilisateur suivante.
*Dans l'interface utilisateur, l'utilisateur peut modifier ses paramètres personnels email, nom, langue..., l'utilisateur peut choisir d'afficher ou non ces attributs.
*De plus, les utilisateurs sont autorisés à choisir leur avatar, la couleur de l'interface utilisateur, la taille du champ de recherche, etc.
*Dans notre projet, nous ferons de notre mieux pour offrir aux utilisateurs la meilleure expérience.

Dans les sections suivantes, nous détaillerons comment installer et exécuter notre programme.

## Instructions pour installation

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

## Instructions pour lancer l'application

1. Lancer l'application en mode développement:

```bash
npm run dev
```

A partir de celle-ci vous pouvez tester votre site de développement

Ensuite démarrer la base de données Supabase:

- Dans votre depôt dirigée vous vers le dossier supabase et démarrer docker:

```bash
cd supabase
sudo service docker start
sudo docker-compose start
```

Votre base de données supabase locale sera ainsi mise en route

2. Build l'application:

```bash
npm run build
```

3. Démarrer la version finale:

```bash
npm run start
```

Voilà, vous pouvez enfin naviguer sur un site prêt à être déployé!

## Auteurs

- Rémy JOVANOVIC E-mail:remy.jovanovic@edu.ece.fr
- Shihao YU E-mail:shihao.yu@edu.ece.fr

