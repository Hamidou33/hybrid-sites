import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CvBase64Service} from "../cv-base64/cv-base64.service";

@Injectable({
  providedIn: 'root'
})
export class CuriculumService {
  constructor(private http: HttpClient,
              private cv: CvBase64Service) {
  }

  downloadPdf(): void {
    const source = `data:application/pdf;base64,${this.cv.CV_FRONT}`;
    const link = document.createElement('a');
    link.href = source;
    link.download = `cv.pdf`;
    link.click();
  }
}
