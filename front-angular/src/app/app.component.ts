import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { HttpClient } from "@angular/common/http";
import { HighchartsChartModule } from "highcharts-angular";
import { FreelanceComponent } from "./components/freelance/freelance.component";
import { HeaderComponent } from "./core/header/header.component";
import { FooterComponent } from "./core/footer/footer.component";
import { ThemeService } from "./shared/services/theme/theme.service";

@Component({
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule,
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
  providers: [HttpClient],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(translate: TranslateService, private themeService: ThemeService) {
    translate.setDefaultLang(localStorage.getItem("locale") || "fr");
    translate.use(localStorage.getItem("locale") || "fr");
    this.themeService.getSavedTheme();
  }
}
