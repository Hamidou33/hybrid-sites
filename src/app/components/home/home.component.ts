import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  imports: [HeaderComponent, ContentComponent],
  standalone: true,
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
}
