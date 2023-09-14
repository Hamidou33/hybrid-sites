import { Component } from '@angular/core';
import { NestService } from './shared/services/nest/nest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private nestService: NestService) {
    // this.nestService.getNestService().subscribe(
    //   (value) => {
    //     console.log(value)
    //   }
    // );
  }

  // toto() {
  //
  // }
}
