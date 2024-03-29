import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { HeaderDeskopComponent } from "../home/header/header-deskop/header-deskop.component";
import { ProjetSelectorComponent } from "./projet-selector/projet-selector.component";
import { CarouselStyleComponent } from "./carousel-style/carousel-style.component";

@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderDeskopComponent,
    ProjetSelectorComponent,
    CarouselStyleComponent
  ],
  templateUrl: './portofolio.component.html',
  styleUrl: './portofolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortofolioComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem('locale') || 'fr');
  }

  selectedProjet: number;

  onProjetSelectionne(projetId: number) {
    this.selectedProjet = projetId;
  }
}