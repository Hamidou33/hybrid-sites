import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
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
  activeLink: string = '';
  constructor(private router: Router) {
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  setActiveLink(route: string): void {
    this.activeLink = route;
  }
}
