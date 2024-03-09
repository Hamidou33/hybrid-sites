import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-header-deskop",
  templateUrl: "./header-deskop.component.html",
  standalone: true,
  styleUrls: ["./header-deskop.component.css"],
  imports: [
    RouterLink,
    TranslateModule,
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderDeskopComponent {
}
