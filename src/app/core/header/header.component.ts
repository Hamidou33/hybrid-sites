import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderDeskopComponent } from "./header-deskop/header-deskop.component";
import { HeaderMobileComponent } from "./header-mobile/header-mobile.component";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, HeaderMobileComponent, HeaderDeskopComponent],
  templateUrl: "./header.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
