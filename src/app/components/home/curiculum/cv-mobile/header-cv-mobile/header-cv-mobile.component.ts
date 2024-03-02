import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-header-cv-mobile",
  templateUrl: "./header-cv-mobile.component.html",
  standalone: true,
  styleUrls: ["./header-cv-mobile.component.css"],
  imports: [
    TranslateModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderCvMobileComponent {

}
