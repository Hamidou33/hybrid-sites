import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { HighchartsChartModule } from "highcharts-angular";
import { FreelanceComponent } from "./components/freelance/freelance.component";
import { HeaderComponent } from "./core/header/header.component";
import { FooterComponent } from "./core/footer/footer.component";

@Component({
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    HighchartsChartModule,
    NgOptimizedImage,
    MatSlideToggleModule,
    HeaderComponent,
    FreelanceComponent,
    FooterComponent
  ],
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem("locale") || "fr");
    translate.use(localStorage.getItem("locale") || "fr");
    if (localStorage.getItem("selectedTheme") === "light-mode") {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  }
}
