import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { CvDeskopComponent } from "./cv-deskop/cv-deskop.component";
import { CvMobileComponent } from "./cv-mobile/cv-mobile.component";
import { HeaderDeskopComponent } from "../home/header/header-deskop/header-deskop.component";

@Component({
  selector: "app-curiculum",
  standalone: true,
  templateUrl: "./curiculum.component.html",
  styleUrls: ["./curiculum.component.css"],
  encapsulation: ViewEncapsulation.None,
  imports: [
    HeaderDeskopComponent,
    CvDeskopComponent,
    CvMobileComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CuriculumComponent {
  constructor(public translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem('locale') || 'fr');
  }
}