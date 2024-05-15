import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { DropdownMenuService } from './../services/dropdown-menu.service';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss',
  imports: [FooterComponent, TranslateModule],
})
export class DropdownMenuComponent {
  translate: TranslateService;
  constructor(
    private dropdownMenuService: DropdownMenuService,
    translate: TranslateService
  ) {
    this.translate = translate;
  }

  navigate(sectionId: string): void {
    this.dropdownMenuService.closeMenu();
    requestAnimationFrame(() => {
      let section = document.getElementById(sectionId);
      if (section) {
        let offsetTop = section.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
