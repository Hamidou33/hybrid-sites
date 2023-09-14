import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-deskop',
  templateUrl: './header-deskop.component.html',
  styleUrls: ['./header-deskop.component.css']
})
export class HeaderDeskopComponent {

  constructor(private route: Router) {
  }

  openMenu(): void {
    this.route.navigate(['/']);
  }
}
