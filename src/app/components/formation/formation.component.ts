import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HeaderComponent } from "../home/header/header.component";
import { CommonModule } from "@angular/common";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { HeaderDeskopComponent } from "../home/header/header-deskop/header-deskop.component";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-formation",
  standalone: true,
  templateUrl: "./formation.component.html",
  imports: [
    TranslateModule,
    HeaderComponent,
    CommonModule,
    HeaderDeskopComponent,
    ReactiveFormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormationComponent {
  formations: string[] = [
    "HTML/CSS",
    "Angular",
    "Git",
    "Base de données"
  ];

  formationControl: FormControl = new FormControl('');
  formation: string = "";

  formationForm: FormGroup = new FormGroup({
    formation: this.formationControl
  });

  constructor(translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem('locale') || 'fr');
    this.formationControl.valueChanges.subscribe((v) => {
      this.formation = v;
    });
  }
}
