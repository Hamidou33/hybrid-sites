import {Component, ViewEncapsulation} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-curiculum',
  templateUrl: './curiculum.component.html',
  styleUrls: ['./curiculum.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CuriculumComponent {
  cv: any = {};
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem('locale') || 'fr');
  }
}
