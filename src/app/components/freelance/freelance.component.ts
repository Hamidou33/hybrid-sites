import { Component } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { NgOptimizedImage } from "@angular/common";
import { HeaderDeskopComponent } from "../../core/header/header-deskop/header-deskop.component";
import { FooterComponent } from "../../core/footer/footer.component";

@Component({
  selector: "app-freelance",
  templateUrl: "./freelance.component.html",
  standalone: true,
  imports: [
    TranslateModule,
    HeaderDeskopComponent,
    NgOptimizedImage,
    FooterComponent
  ],
  styleUrls: ["./freelance.component.css"]
})
export class FreelanceComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem("locale") || "fr");
  }
}
