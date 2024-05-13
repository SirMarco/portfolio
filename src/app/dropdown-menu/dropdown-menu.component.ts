import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { DropdownMenuService } from './../services/dropdown-menu.service';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss',
  imports: [FooterComponent],
})
export class DropdownMenuComponent {
  constructor(
    private dropdownMenuService: DropdownMenuService,
    private viewportScroller: ViewportScroller
  ) {}

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
}
