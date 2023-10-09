import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {NestService} from "./shared/services/nest/nest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private nestService: NestService, translate: TranslateService
  ) {

    translate.setDefaultLang(localStorage.getItem('locale') || 'fr');
    translate.use(localStorage.getItem('locale') || 'fr');

    this.nestService.getNestService().subscribe(
      (value) => {
        console.log('value from nest', value);
      }
    );
    this.nestService.getNestCats().subscribe(
      (value) => {
        console.log('value from nest cats', value);
      }
    );
  }

  // toto() {
  //
  // }
}
