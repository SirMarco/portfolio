import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownMenuService } from './../services/dropdown-menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public DropdownMenuService: DropdownMenuService) {}

  toggleMenu() {
    this.DropdownMenuService.toggleMenu();
  }
}
