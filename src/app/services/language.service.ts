import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLanguage: string = '';

  constructor() {}
  setCurrentLanguage(language: string) {
    this.currentLanguage = language;
    localStorage.setItem('language', this.currentLanguage);
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }
}
