import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {CuriculumService} from "../service/curiculum.service";
import {Experience} from "../../../../shared/models/experience.model";
import {Education} from "../../../../shared/models/education.model";

@Component({
  selector: 'app-cv-mobile',
  templateUrl: './cv-mobile.component.html',
  styleUrls: ['./cv-mobile.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvMobileComponent {
  @Input() experiences: Experience[];
  @Input() educations: Education[];
  constructor(private curiculumService:  CuriculumService) {
  }
  downloadPdfMobile(): void {
    this.curiculumService.downloadPdf();
  }
}
