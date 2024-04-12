import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { RouterLink } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";
import { ThemeSelectorComponent } from "../../../shared/components/theme-selector/theme-selector.component";
import { LanguageSelectorComponent } from "../../../shared/components/language-selector/language-selector.component";

@Component({
  selector: "app-header-mobile",
  templateUrl: "./header-mobile.component.html",
  standalone: true,
  styleUrls: ["./header-mobile.component.css"],
  imports: [
    LanguageSelectorComponent,
    TranslateModule,
    RouterLink,
    ThemeSelectorComponent,
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderMobileComponent {
}
