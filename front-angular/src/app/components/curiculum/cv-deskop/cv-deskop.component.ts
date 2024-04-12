import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CuriculumService } from "../service/curiculum/curiculum.service";
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-cv-deskop",
  templateUrl: "./cv-deskop.component.html",
  styleUrls: ["./cv-deskop.component.css"],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvDeskopComponent {
  constructor(private curiculumService: CuriculumService) {
  }

  downloadPdfDeskop(): void {
    this.curiculumService.downloadPdf();
  }
}
