import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  standalone: true,
  styleUrls: ["./content.component.css"],
  imports: [
    TranslateModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent {
  constructor(public translate: TranslateService) {
  }
}
