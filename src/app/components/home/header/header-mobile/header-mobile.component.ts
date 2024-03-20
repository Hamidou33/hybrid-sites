import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { LanguageSelectorComponent } from "../../../../shared/components/language-selector/language-selector.component";
import { RouterLink } from "@angular/router";
import { ThemeSelectorComponent } from "../../../../shared/components/theme-selector/theme-selector.component";
import { FormBuilder, FormGroup } from "@angular/forms";
import { THEMES } from "../../../../shared/constantes/theme.constants";
import { ThemeService } from "../../../../shared/services/theme/theme.service";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-header-mobile",
  templateUrl: "./header-mobile.component.html",
  standalone: true,
  styleUrls: ["./header-mobile.component.css"],
  imports: [
    LanguageSelectorComponent,
    TranslateModule,
    RouterLink,
    ThemeSelectorComponent,
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderMobileComponent {
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
