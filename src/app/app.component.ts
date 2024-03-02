import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from "highcharts-angular";
import { HeaderComponent } from "./components/home/header/header.component";

@Component({
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule,
    HighchartsChartModule,
    NgOptimizedImage,
    MatSlideToggleModule,
    HeaderComponent
  ],
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  providers: [HttpClient],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem('locale') || 'fr');
    translate.use(localStorage.getItem('locale') || 'fr');
  }
}
