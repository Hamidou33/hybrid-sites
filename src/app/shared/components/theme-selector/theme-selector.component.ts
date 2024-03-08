import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ThemeService } from "../../services/theme/theme.service";

@Component({
  standalone: true,
  selector: 'app-theme-selector',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './theme-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSelectorComponent {
  @Input() themeOptions: { value: string; label: string }[] = [];
  themeForm: FormGroup;
  themeControl = this.fb.control(this.themeService.getSavedTheme() || 'light');
  label: string = 'Choisir un thème';
  constructor(private fb: FormBuilder, private themeService: ThemeService, public translate: TranslateService) {
    this.themeForm = this.fb.group({
      theme: this.themeService.getSavedTheme() || 'light',
    });
    translate.addLangs(['en', 'fr']);
  }
  changeTheme() {
    if(this.themeControl && this.themeControl.value) {
      this.themeService.setTheme(this.themeControl.value);
      // if (this.themeControl.value === 'dark-mode') {
      //   this.replaceWhiteBackgroundsWithDark()
      //   this.replaceTextColorsWithWhite();
      // } else {
      //   this.restoreWhiteBackgrounds()
      //   this.restoreTextColors();
      // }
    }
  }
  replaceWhiteBackgroundsWithDark() {
    const elements = document.querySelectorAll<HTMLElement>('.bg-white');
    elements.forEach((element: HTMLElement) => {
      element.classList.remove('bg-white');
      element.classList.add('bg-dark');
    });
  }

  replaceTextColorsWithWhite() {
    const elements = document.querySelectorAll<HTMLElement>('.text-black');
    elements.forEach((element: HTMLElement) => {
      element.classList.remove('text-black');
      element.classList.add('text-white');

    });
  }

  restoreWhiteBackgrounds() {
    const elements = document.querySelectorAll<HTMLElement>('.bg-dark');
    elements.forEach((element: HTMLElement) => {
      element.classList.remove('bg-dark');
      element.classList.add('bg-white');
    });
  }

  restoreTextColors() {
    const elements = document.querySelectorAll<HTMLElement>('.text-white');
    elements.forEach((element: HTMLElement) => {
      element.classList.remove('text-white');
      element.classList.add('text-black');
    });
  }
}
