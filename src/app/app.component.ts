import { Component } from '@angular/core';
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
  title = 'Portfolio';

  constructor(
    public translate: TranslateService,
    public setDefaultLanguage: LanguageService
  ) {
    // translate.addLangs(['en', 'de']);
    // translate.setDefaultLang('en');

    translate.use('en');
    this.setDefaultLanguage.setCurrentLanguage('en');
  }
  ngOnInit() {
    AOS.refresh();
  }
}
