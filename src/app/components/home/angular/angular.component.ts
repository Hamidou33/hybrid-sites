import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-angular",
  standalone: true,
  templateUrl: "./angular.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularComponent {

}
