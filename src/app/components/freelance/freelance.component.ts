import { Component } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { HeaderDeskopComponent } from "../home/header/header-deskop/header-deskop.component";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-freelance",
  templateUrl: "./freelance.component.html",
  standalone: true,
  imports: [
    TranslateModule,
    HeaderDeskopComponent,
    NgOptimizedImage
  ],
  styleUrls: ["./freelance.component.css"]
})
export class FreelanceComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem('locale') || 'fr');
  }
}
