import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { LanguageSelectorComponent } from "../../shared/components/language-selector/language-selector.component";
import { ThemeSelectorComponent } from "../../shared/components/theme-selector/theme-selector.component";
import { FormBuilder, FormGroup } from "@angular/forms";
import { THEMES } from "../../shared/constantes/theme.constants";
import { ThemeService } from "../../shared/services/theme/theme.service";
import { RouterLink } from "@angular/router";
import { HeaderDeskopComponent } from "../../core/header/header-deskop/header-deskop.component";

@Component({
  selector: 'app-parametres',
  standalone: true,
  imports: [
    CommonModule,
    HeaderDeskopComponent,
    LanguageSelectorComponent,
    ThemeSelectorComponent,
    NgOptimizedImage,
    RouterLink,
    TranslateModule],
  templateUrl: './parametres.component.html',
  styleUrl: './parametres.component.css'
})
export class ParametresComponent {
  themeForm!: FormGroup;
  themeOptions = THEMES.map((theme: string) => ({
    value: theme,
    label: theme.charAt(0).toUpperCase() + theme.slice(1)
  }));

  constructor(private fb: FormBuilder, private themeService: ThemeService, translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem('locale') || 'fr');
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
