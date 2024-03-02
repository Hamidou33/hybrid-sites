import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {CuriculumService} from "../service/curiculum/curiculum.service";
import { TranslateModule } from "@ngx-translate/core";
import { HeaderCvMobileComponent } from "./header-cv-mobile/header-cv-mobile.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-cv-mobile",
  templateUrl: "./cv-mobile.component.html",
  styleUrls: ["./cv-mobile.component.css"],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HeaderCvMobileComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvMobileComponent {
  constructor(private curiculumService: CuriculumService) {
  }

  downloadPdfMobile(): void {
    this.curiculumService.downloadPdf();
  }
}
