import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {CuriculumService} from "../service/curiculum.service";

@Component({
  selector: 'app-cv-mobile',
  templateUrl: './cv-mobile.component.html',
  styleUrls: ['./cv-mobile.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvMobileComponent {
  constructor(private curiculumService: CuriculumService) {
  }

  downloadPdfMobile(): void {
    this.curiculumService.downloadPdf();
  }
}
