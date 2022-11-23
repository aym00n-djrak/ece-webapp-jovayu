# Portfolio JOVAYU

## Introduction

Voici notre portfolio réalisé avec NextJS !

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

- Rémy JOVANOVIC
- Shihao YU

