import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CuriculumService } from "../service/curiculum.service";
import {Experience} from "../../../../shared/models/experience.model";
import {Education} from "../../../../shared/models/education.model";

@Component({
  selector: 'app-cv-deskop',
  templateUrl: './cv-deskop.component.html',
  styleUrls: ['./cv-deskop.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvDeskopComponent {
  @Input() experiences: Experience[];
  @Input() educations: Education[];

  constructor(private curiculumService:  CuriculumService) {
  }
  downloadPdfDeskop(): void {
    this.curiculumService.downloadPdf();
  }
}
