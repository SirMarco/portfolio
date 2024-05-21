import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainContentComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ME Portfolio';

  constructor(
    public translate: TranslateService,
    public setDefaultLanguage: LanguageService
  ) {
    let storageLanguage = localStorage.getItem('language');

    if (storageLanguage) {
      translate.use(storageLanguage);
      this.setDefaultLanguage.setCurrentLanguage(storageLanguage);
    } else {
      translate.use('de');
      this.setDefaultLanguage.setCurrentLanguage('de');
    }
  }

  ngOnInit() {
    AOS.refresh();
  }
}
