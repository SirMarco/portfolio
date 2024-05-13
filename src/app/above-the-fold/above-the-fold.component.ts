import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  constructor() {}
  navigate(sectionId: string): void {
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
