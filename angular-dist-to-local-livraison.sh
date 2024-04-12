#!/bin/bash

# Chemin vers le dossier dist d'Angular
DIST_DIR="front-angular/dist"

# Chemin vers le dossier de livraison sur le Bureau
LIVRAISON_DIR="$HOME/Desktop/livraison"

# Vérifier si le dossier dist existe
if [ ! -d "$DIST_DIR" ]; then
    echo "Erreur: Le dossier dist d'Angular n'existe pas."
    exit 1
fi

# Créer le dossier de livraison s'il n'existe pas
mkdir -p "$LIVRAISON_DIR"

# Copier le contenu du dossier dist vers le dossier de livraison
if cp -R "$DIST_DIR/." "$LIVRAISON_DIR"; then
    echo "Le contenu du dossier dist a été copié avec succès dans le dossier de livraison sur le Bureau."
else
    echo "Erreur: Impossible de copier le contenu du dossier dist dans le dossier de livraison."
    exit 1
fi
