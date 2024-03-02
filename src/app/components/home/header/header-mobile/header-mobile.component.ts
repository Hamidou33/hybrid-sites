import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { LanguageSelectorComponent } from "../../../../shared/components/language-selector/language-selector.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-header-mobile",
  templateUrl: "./header-mobile.component.html",
  standalone: true,
  styleUrls: ["./header-mobile.component.css"],
  imports: [
    LanguageSelectorComponent,
    TranslateModule,
    RouterLink
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderMobileComponent {

  constructor(public translate: TranslateService) {
  }
}
