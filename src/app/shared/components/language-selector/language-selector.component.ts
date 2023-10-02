import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent {
  constructor(public translate: TranslateService) {
    // translate.use('fr');
    translate.addLangs(['en', 'fr']);
    //
    console.log('lang', translate);
    console.log(localStorage.getItem('locale'));
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('locale', lang);
    this.translate.setDefaultLang(lang);
  }
}
