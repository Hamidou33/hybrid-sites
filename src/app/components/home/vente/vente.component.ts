import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: "app-vente",
  templateUrl: "./vente.component.html",
  standalone: true,
  styleUrls: ["./vente.component.css"],
  imports: [
    HeaderComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VenteComponent {

}
