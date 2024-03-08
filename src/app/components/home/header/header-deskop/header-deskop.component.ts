import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LanguageSelectorComponent } from "../../../../shared/components/language-selector/language-selector.component";
import { TranslateModule } from "@ngx-translate/core";
import { ThemeSelectorComponent } from "../../../../shared/components/theme-selector/theme-selector.component";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ThemeService } from "../../../../shared/services/theme/theme.service";
import { THEMES } from "../../../../shared/constantes/theme.constants";

@Component({
  selector: "app-header-deskop",
  templateUrl: "./header-deskop.component.html",
  standalone: true,
  styleUrls: ["./header-deskop.component.css"],
  imports: [
    RouterLink,
    LanguageSelectorComponent,
    TranslateModule,
    ThemeSelectorComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderDeskopComponent {
  themeForm!: FormGroup;
  themeOptions = THEMES.map((theme: string) => ({
    value: theme,
    label: theme.charAt(0).toUpperCase() + theme.slice(1)
  }));

  constructor(private fb: FormBuilder, private themeService: ThemeService) {
    this.setupThemeForm();
  }

  private setupThemeForm(): void {
    this.themeForm = this.fb.group({
      theme: this.fb.control(this.themeService.getSavedTheme() || 'light'),
    });
    this.themeService.theme$.subscribe((theme) => {
      this.themeForm.get('theme')?.setValue(theme);
      document.body.className = '';
      document.body.classList.add(theme);
    });
  }
}
