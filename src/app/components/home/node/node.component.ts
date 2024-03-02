import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-node",
  templateUrl: "./node.component.html",
  standalone: true,
  styleUrls: ["./node.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodeComponent {

}
