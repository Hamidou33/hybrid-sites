import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CuriculumService} from "../service/curiculum/curiculum.service";
@Component({
  selector: 'app-cv-deskop',
  templateUrl: './cv-deskop.component.html',
  styleUrls: ['./cv-deskop.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvDeskopComponent {
  constructor(private curiculumService: CuriculumService) {
  }

  downloadPdfDeskop(): void {
    this.curiculumService.downloadPdf();
  }
}
