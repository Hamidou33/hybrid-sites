import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CuriculumService } from "../service/curiculum.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-cv-deskop',
  templateUrl: './cv-deskop.component.html',
  styleUrls: ['./cv-deskop.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvDeskopComponent {
  constructor(private curiculumService:  CuriculumService, public translateService: TranslateService) {
  }
  downloadPdfDeskop(): void {
    this.curiculumService.downloadPdf();
  }
}
