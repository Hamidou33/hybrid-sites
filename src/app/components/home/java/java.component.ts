import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HeaderDeskopComponent } from "../header/header-deskop/header-deskop.component";

@Component({
  selector: "app-java",
  templateUrl: "./java.component.html",
  standalone: true,
  styleUrls: ["./java.component.css"],
  imports: [
    HeaderDeskopComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JavaComponent {

}
