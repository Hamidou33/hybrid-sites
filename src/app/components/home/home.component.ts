import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { HeaderDeskopComponent } from "./header/header-deskop/header-deskop.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  imports: [HeaderComponent, ContentComponent],
  standalone: true,
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
}
