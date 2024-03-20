# Étape de build
FROM node:20 AS build

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers de dépendances
COPY . .

# Installer les dépendances
RUN npm install

# Compiler l'application
RUN npm run build

# Étape d'exécution
FROM node:20-alpine AS run

WORKDIR /usr/src/app

# Copier les dépendances nécessaires depuis l'étape de build
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

ENV DATABASE_TYPE=mysql
ENV DATABASE_HOST=192.168.1.13
ENV DATABASE_PORT=3109
ENV DATABASE_USER=root
ENV DATABASE_PASSWORD=Aburame13$
ENV DATABASE_NAME=pandoramid
ENV DATABASE_SYNCHRONISATION=true

# Exposer le port sur lequel l'application va tourner
EXPOSE 3000

# Lancer l'application
CMD ["node", "dist/main"]
