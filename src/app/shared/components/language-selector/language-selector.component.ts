import { ChangeDetectionStrategy, Component } from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-language-selector',
  imports: [CommonModule, FormsModule],
  templateUrl: './language-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSelectorComponent {
  label: string = 'Choisir une langue';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('locale', lang);
    this.translate.setDefaultLang(lang);
  }
}
