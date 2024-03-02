import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: "app-formation",
  standalone: true,
  templateUrl: "./formation.component.html",
  imports: [
    HeaderComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormationComponent {

}
