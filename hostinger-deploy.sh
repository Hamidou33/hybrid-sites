#!/bin/bash

# Chemin vers le contenu du dossier dist
DIST_CONTENT="front-angular/dist/*"

# Informations d'identification pour se connecter au serveur Hostinger
HOSTINGER_USER="your_username"
HOSTINGER_SERVER="your_server_address"
HOSTINGER_DIR="your_server_directory"

# Vérifier si le contenu du dossier dist existe
if [ -z "$(ls -A $DIST_CONTENT)" ]; then
    echo "Erreur: Le contenu du dossier dist est vide ou n'existe pas."
    exit 1
fi

# Vérifier si les informations d'identification pour le serveur Hostinger sont définies
if [ -z "$HOSTINGER_USER" ] || [ -z "$HOSTINGER_SERVER" ] || [ -z "$HOSTINGER_DIR" ]; then
    echo "Erreur: Veuillez définir les informations d'identification pour le serveur Hostinger."
    exit 1
fi

# Copier le contenu du dossier dist vers le serveur Hostinger
if scp -r $DIST_CONTENT $HOSTINGER_USER@$HOSTINGER_SERVER:$HOSTINGER_DIR; then
    echo "Le contenu du dossier dist a été déployé avec succès sur le serveur Hostinger."
else
    echo "Erreur: Impossible de déployer le contenu du dossier dist sur le serveur Hostinger."
    exit 1
fi
