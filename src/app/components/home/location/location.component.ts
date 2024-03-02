import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  standalone: true,
  styleUrls: ["./location.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationComponent {

}
