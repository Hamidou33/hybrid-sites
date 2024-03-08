import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.getSavedTheme() || 'light');
  theme$: Observable<string> = this.themeSubject.asObservable();

  setTheme(theme: string) {
    this.themeSubject.next(theme);
    localStorage.setItem('selectedTheme', theme); // Save theme in local storage
  }

  getSavedTheme(): string | null {
    return localStorage.getItem('selectedTheme');
  }
}
