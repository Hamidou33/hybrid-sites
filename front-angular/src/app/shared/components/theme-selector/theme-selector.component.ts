import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ThemeService } from "../../services/theme/theme.service";

@Component({
  standalone: true,
  selector: "app-theme-selector",
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./theme-selector.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSelectorComponent {
  @Input() themeOptions: { value: string; label: string }[] = [];
  themeForm: FormGroup;
  themeControl = this.fb.control(this.themeService.getSavedTheme() || "light-mode");
  label: string = "Choisir un thème";

  constructor(private fb: FormBuilder, private themeService: ThemeService, public translate: TranslateService) {
    this.themeForm = this.fb.group({
      theme: this.themeService.getSavedTheme() || "dark-mode"
    });
    translate.addLangs(["en", "fr"]);
  }

  changeTheme(): void {
    if (this.themeControl && this.themeControl.value) {
      this.themeService.setTheme(this.themeControl.value || 'dark-mode');
    } else {
      this.themeService.setTheme('dark-mode');
    }
  }
}
