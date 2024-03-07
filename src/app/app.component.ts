import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from "highcharts-angular";
import { HeaderComponent } from "./components/home/header/header.component";
import { FreelanceComponent } from "./components/freelance/freelance.component";
import { initFlowbite } from "flowbite";

@Component({
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    HttpClientModule,
    HighchartsChartModule,
    NgOptimizedImage,
    MatSlideToggleModule,
    HeaderComponent,
    FreelanceComponent
  ],
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  providers: [HttpClient],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem('locale') || 'fr');
    translate.use(localStorage.getItem('locale') || 'fr');
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
