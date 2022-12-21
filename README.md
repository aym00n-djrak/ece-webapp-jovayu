# Blogging application - JOVAYU-ECE Webtech project 2022/2023

## Introduction

Voici notre portfolio réalisé avec NextJS !

- Ce travail a été effectué par notre équipe de deux personnes (Rémy JOVANOVIC et ShiHao YU) \*pendant près d'un semestre.
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

  - Home page friendly :

    ![Home page friendly](/pictures/accueil.png)

  - Affichage des articles:

    ![Affichage des articles](/pictures/articles.png)

  - Affichage d'un WYSIWYG pour écrire un article:

    ![Affichage d'un WYSIWYG pour écrire un article](/pictures/wysiwyg.png)

  - Intégration de lien externe.

- Login/Logout:

  - Login button :

    ![Login button](/pictures/login.png)

  - Le bouton login ouvre une page de connexion, sous la forme d'un formulaire Auth fourni par Supabase et il utilise Github Provider en option pour se connecter.

  - Connected :
    ![Login/Logout button](/pictures/logout.png)
  - Le bouton logout permet à l'utilisateur de se déconnecter de son compte , il est redirigé vers la page de connexion:

    ![Login/Logout button](/pictures/logoutbutton.png)

  - La connexion est persistante, c'est-à-dire que l'utilisateur n'a pas besoin de se connecter à chaque fois qu'il visite le site.

  - Les informations de connexion sont affichées sur la Navbar.

- Page de profil:

  - Sur la page de profil, l'utilisateur peut modifier ses informations personnelles, telles que le nom, prénom, pseudo etc :

    ![Page de profil](/pictures/profile.png)

- Création de nouveaux articles:

  - Un bouton permet la création d'un nouvel article:

    ![Création d'un nouvel article](/pictures/newarticle.png)

  - Un formulaire de création d'article est utilisé pour créer un nouvel article:

    ![Création d'un nouvel article](/pictures/writearticle.png )

  - L'article peut prendre en paramètre un titre, un contenu, un auteur.

- Création de nouveaux commentaires:

  - Un formulaire de création de commentaire est utilisé pour créer un nouveau commentaire :

    ![Création d'un nouveau commentaire](/pictures/articleid.png)

  - Les personnes connectées peuvent commenter les articles :

    ![Création d'un nouveau commentaire](/pictures/commentaireid.png)

  - Les personnes non connectées peuvent commenter les articles mais elles doivent renseigner un pseudo :

    ![Création d'un nouveau article](/pictures/unconnectedarticle.png)

    ![Création d'un nouveau commentaire](/pictures/unconnectedcomment.png)

- Contrôle de l'accès au ressources:

  - L'accès aux ressources est contrôlé par les rôles de l'utilisateur.

  - Il est activé sur chaque table de la base de données.

  - Plusieurs politiques de sécurité sont utilisées pour contrôler l'accès aux ressources. (En fonction de INSERT, SELECT, UPDATE, DELETE)

  - Les utilisateurs non connectés ne peuvent pas créer de nouveaux articles.

  - Seul les utilisateurs connectés peuvent créer de nouveaux articles des commentaires.

  - Un utilisateur n'a accès qu'à ses propres articles et commentaires. (C'est géré selon l'ID de l'utilisateur, lors de la récupération des données dans une requête SQL)

- Modification d'un article:

  - Un bouton permet la modification d'un article que vous avez créé.
  - Un formulaire de modification d'article est utilisé pour modifier un article.
  - L'article peut prendre en paramètre un titre, un contenu, un auteur.

- Suppression d'un article:

  - Un bouton permet la suppression d'un article que vous avez créé.

    - Pas le bon utilisateur :

      ![Suppression d'un article](/pictures/notuser.png)

    - Bon utilisateur :

      ![Suppression d'un article](/pictures/gooduser.png)

  - Une requete SQL est utilisée pour supprimer un article :

  ```js
  const deleteData = async () => {
    const { data, error } = await supabase

      .from("articles")
      .delete()
      .eq("id", id)
      .single()
      .then(() => {
        window.location.href = "/sheets";
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  ```

  - L'article est supprimé de la base de données lorsque l'on clique sur le bouton DELETE.

- Modification d'un commentaire (que pour les utilisateurs authentifiés):

  - Un bouton permet la modification d'un commentaire que vous avez créé:

    ![Modification d'un commentaire](/pictures/comment.png)

  - Dans "mes commentaires", on peut modifier un commentaire que vous avez créé, après l'avoir sélectionné :

    ![Modification d'un commentaire](/pictures/yourcomment.png)

  - Un formulaire de modification de commentaire est utilisé pour modifier un commentaire :

    ![Modification d'un commentaire](/pictures/modifcomment.png)

  - Le commentaire peut prendre en paramètre un Firstname, Lastname, email et un contenu.

  - On observe les modifications dans la base de données :

    ![Modification d'un commentaire](/pictures/modifcommentbdd.png)

  - cela fonctionne grâce à une requête SQL :

  ```js
  const onSubmit = async function (e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const { error } = await supabase
      .from("contacts")
      .update({
        firstname: data.get("firstname"),
        lastname: data.get("lastname"),
        email: data.get("email"),
        message: data.get("message"),
      })
      .eq("id", id)
      .then(() => {
        window.location.href = "/messages";
      });
    if (error) {
      setMessage("Desole, nous avons rencontre une erreur.");
    } else {
      setMessage(
        <div>
          <h2 className="text-center mt-3">Confirmation</h2>
          <p>Merci d avoir modifie votre commentaire.</p>
        </div>
      );
    }
  };
  ```

- Suppression d'un commentaire (que pour les utilisateurs authentifiés):

  - Un bouton permet la suppression d'un commentaire.
  - Une requete SQL est utilisée pour supprimer un commentaire :
```js
 const deleteData = async () => {
    const { data, error } = await supabase

      .from("contacts")
      .delete()
      .eq("id", id)
      .single()
      .then(() => {
        window.location.href = "/messages";
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
```


- Le commentaire est supprimé de la base de données lorsque l'on clique sur le bouton DELETE.

- Paramètre d'un compte :

  - Un bouton permet la modification des paramètres d'un compte.

  - Un formulaire de modification de paramètre est utilisé pour modifier les paramètres d'un compte.

  - Les paramètres sont mis à jour dans la base de données.

  - Il met a jour le profil de l'utilisateur, et les informations users du site.

- WYSIWYG integration :

  - Il permet de mettre en forme le contenu de l'article.

  - Il est intégré dans la page d'accueil pour rediger un nouvel article :

    ![WYSIWYG integration](/pictures/wysiwyg.png)

- Gravatar integration :

  - Il permet de mettre une image de profil pour l'utilisateur.

  - Il est intégré dans la page de profil pour mettre une image de profil dynamique.

  - Il est mis en place en fonction de l'email de l'utilisateur :

    ![Gravatar integration](/pictures/aymoon.png) ![Gravatar integration](/pictures/julien.png)

- Sombre/Clair mode:

  - Il permet de changer le mode de l'application.

  - Il est intégré dans la page d'accueil.

  - C'est un bouton qui permet de changer le mode de l'application:

    - sombre -> clair :

      ![Dark mode](/pictures/dark.png)

    - clair -> sombre :

      ![Light mode](/pictures/light.png)

  - Il peut être mis en mode automatique.

  - Enlever dans Tailwind.config.js
    ```css
    darkmode: "class";
    ```
  - Enlever dans pages/\_app.js
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

## Auto-évaluation


| Subject                                                         |   Code    | Max. grade| My grade  |
|:----------------------------------------------------------------|:---------:|:---------:|:---------:|
| Naming convention                                               |   NAME    |    +2     |    +2     |
| Project structure                                               |   STRUCT  |    +2     |    +2     |
| Github                                                          |   GIT     |    +2     |    +2     |
| Code Quality                                                    |   CODEQ   |    +4     |    +3     |
| Design, UX, and content     	                                  |   UX      |    +4     |    +3     |
| Home page                                                       |   HOME    |    +2     |    +2     |
| Login and profile page                                          |   LOGIN   |    +4     |    +4     |
| New Articles creation                                           |   ART C   |    +6     |    +6     |
| New comment creation                                            |   COM C   |    +4     |    +4     |
| Resource access control                                         |   RLS     |    +6     |    +6     |
| Article removal                                                 |   ART DEL |    +2     |    +2     |
| Article modification                                            | ART MODIF |    +2     |    +2     |
| Comment removal                                                 |   COM DEL |    +2     |    +2     |
| Comment modification                                            | COM MODIF |    +2     |    +2     |
| Account settings                                                |   SET     |    +4     |    +4     |
| WYSIWYG integration                                             |   WYS     |    +2     |    +1     |
| Gravatar integration                                            |   GRAV    |    +2     |    +2     |
| Dark/Light mode                                                 |   DARK    |    +2     |    +2     |
| Customized color                                                |   COLOR   |    +4     |    +2     |
| **Total**                                                       |           |    60     |    54     |


## Auteurs

- Rémy JOVANOVIC remy.jovanovic@edu.ece.fr
- Shihao YU shihao.yu@edu.ece.fr
