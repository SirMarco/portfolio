import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  translate: TranslateService;
  currentLanguage: string = '';

  constructor(
    translate: TranslateService,
    public languageService: LanguageService
  ) {
    this.translate = translate;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
    this.languageService.setCurrentLanguage(language);
    console.log(this.currentLanguage);
  }
}
