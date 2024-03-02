import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  standalone: true,
  styleUrls: ["./location.component.css"],
  imports: [
    HeaderComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationComponent {

}
