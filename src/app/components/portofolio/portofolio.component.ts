import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { HeaderDeskopComponent } from "../home/header/header-deskop/header-deskop.component";

@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderDeskopComponent
  ],
  templateUrl: './portofolio.component.html',
  styleUrl: './portofolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortofolioComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem('locale') || 'fr');
  }
}
