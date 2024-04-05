import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ContentComponent } from "./content/content.component";
import { HeaderComponent } from "../../core/header/header.component";
import { FooterComponent } from "../../core/footer/footer.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  imports: [HeaderComponent, ContentComponent, FooterComponent],
  standalone: true,
  styleUrls: ["./home.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
}
