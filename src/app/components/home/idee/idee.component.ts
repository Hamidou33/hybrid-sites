import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { FormControl } from "@angular/forms";
import { NestService } from "../../../shared/services/nest/nest.service";

@Component({
  selector: 'app-idee',
  templateUrl: './idee.component.html',
  styleUrls: ['./idee.component.css']
})
export class IdeeComponent {
  idee: FormControl<string | null> = new FormControl('');
  constructor(translate: TranslateService, private nest: NestService) {
    translate.setDefaultLang(localStorage.getItem('locale') || 'fr');
  }

  sendMessage() {
    if(this.idee.value)
    this.nest.addNestIdeas(this.idee.value).subscribe();
  }
}
