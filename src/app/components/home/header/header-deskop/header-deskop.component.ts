import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LanguageSelectorComponent } from "../../../../shared/components/language-selector/language-selector.component";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-header-deskop",
  templateUrl: "./header-deskop.component.html",
  standalone: true,
  styleUrls: ["./header-deskop.component.css"],
  imports: [
    RouterLink,
    LanguageSelectorComponent,
    TranslateModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderDeskopComponent {
}
