import { Component, HostListener, OnInit, VERSION } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css"
})

export class FooterComponent implements OnInit {
  angularVersion: string = VERSION.full;
  showFooter: boolean = false;
  timer: any;

  ngOnInit(): void {
    // Afficher le footer pendant une seconde au chargement de la page
    this.showFooterForOneSecond();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.scrollY > 0) {
      // Si l'utilisateur fait défiler vers le bas, afficher le footer
      this.showFooter = true;

      // Si un timer est déjà en cours, le réinitialiser
      if (this.timer) {
        clearTimeout(this.timer);
      }

      // Retirer le footer après une seconde de la fin du défilement
      this.timer = setTimeout(() => {
        this.showFooter = false;
      }, 1000);
    } else {
      // Si l'utilisateur fait défiler vers le haut, masquer immédiatement le footer
      this.hideFooter();
    }
  }

  showFooterForOneSecond() {
    // Afficher le footer pendant une seconde après le chargement de la page
    this.showFooter = true;

    // Retirer le footer après une seconde
    setTimeout(() => {
      this.hideFooter();
    }, 1000);
  }

  hideFooter() {
    // Masquer le footer
    this.showFooter = false;

    // Si un timer est déjà en cours, le réinitialiser
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
