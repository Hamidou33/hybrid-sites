import { Component, VERSION } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css"
})

export class FooterComponent {
  angularVersion: string = VERSION.full;
}
