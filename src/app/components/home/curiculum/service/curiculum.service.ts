import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CuriculumService {
  constructor(private http: HttpClient) {}

  downloadPdf(): void {
    // Spécifiez le chemin vers le fichier PDF dans le dossier "assets"
    const pdfUrl = '/assets/cv.pdf';

    // Effectuez une requête HTTP GET pour obtenir le fichier PDF
    this.http
      .get(pdfUrl, { responseType: 'blob' })
      .subscribe((blob: Blob) => {
        const url = window.URL.createObjectURL(blob);

        // Créez un élément d'ancrage invisible pour déclencher le téléchargement
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cv.pdf';
        document.body.appendChild(a);
        a.click();

        // Libérez les ressources
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      });
  }
}
