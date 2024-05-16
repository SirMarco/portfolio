import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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

  constructor(translate: TranslateService) {
    this.translate = translate;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
    console.log(this.currentLanguage);
  }
}
