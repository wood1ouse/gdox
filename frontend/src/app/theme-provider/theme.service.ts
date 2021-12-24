import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  darkMode: boolean = false;

  constructor() {
    localStorage.setItem('darkTheme', this.darkMode.toString());
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    localStorage.removeItem('darkTheme');
    localStorage.setItem('darkTheme', this.darkMode.toString());

    const htmlTag = document.getElementsByTagName('html').item(0);
    if (localStorage.getItem('darkTheme') === 'true') {
      htmlTag?.classList.add('dark');
    } else {
      htmlTag?.classList.remove('dark');
    }
  }
}
