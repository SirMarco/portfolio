import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLanguage: string = '';

  constructor() {}
  setCurrentLanguage(language: string) {
    this.currentLanguage = language;
    console.log('service language ' + this.currentLanguage);
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }
}
