import { Component } from '@angular/core';
import {CuriculumService} from "../service/curiculum.service";

@Component({
  selector: 'app-cv-deskop',
  templateUrl: './cv-deskop.component.html',
  styleUrls: ['./cv-deskop.component.css']
})
export class CvDeskopComponent {

  constructor(private curiculumService:  CuriculumService) {
  }
  downloadPdfDeskop(): void {
    this.curiculumService.downloadPdf();
  }
}
