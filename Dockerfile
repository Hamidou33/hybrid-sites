FROM node:lts-alpine
LABEL authors="hamid"

# Installez les dépendances supplémentaires
RUN apk update && \
    apk add --no-cache \
    openssh-client \
    git \
    curl \
    wget \
    jq \
    bash \
    openssl \
    rsync \
    gettext \
    ca-certificates

# Facultatif : Configurez des variables d'environnement
# ENV VARIABLE_NAME=value

# Facultatif : Définissez le répertoire de travail
# WORKDIR /app

# Facultatif : Copiez des fichiers locaux dans l'image
# COPY . .

# Facultatif : Exécutez des commandes supplémentaires
# RUN command1 && command2

# Facultatif : Exposez des ports
# EXPOSE 3000

# Facultatif : Définissez une commande par défaut pour l'exécution du conteneur
# CMD ["npm", "start"]
