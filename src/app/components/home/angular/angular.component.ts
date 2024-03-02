import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HeaderDeskopComponent } from "../header/header-deskop/header-deskop.component";

@Component({
  selector: "app-angular",
  standalone: true,
  templateUrl: "./angular.component.html",
  imports: [
    HeaderDeskopComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularComponent {

}
