import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownMenuService } from './../services/dropdown-menu.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  pathName: string = '';

  constructor(
    public DropdownMenuService: DropdownMenuService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pathName = this.router.url;
  }

  backButton() {
    window.close();
  }

  toggleMenu() {
    this.DropdownMenuService.toggleMenu();
  }
  navigate(sectionId: string): void {
    requestAnimationFrame(() => {
      let section = document.getElementById(sectionId);
      if (section) {
        let offsetTop = section.offsetTop - 0;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    });
  }
}
