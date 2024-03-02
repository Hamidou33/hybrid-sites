import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HeaderDeskopComponent } from "../header/header-deskop/header-deskop.component";

@Component({
  selector: "app-node",
  templateUrl: "./node.component.html",
  standalone: true,
  styleUrls: ["./node.component.css"],
  imports: [
    HeaderDeskopComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodeComponent {

}
