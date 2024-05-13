import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContactComponent } from '../contact/contact.component';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MyskillsComponent } from '../myskills/myskills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { FooterComponent } from '../footer/footer.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { DropdownMenuService } from './../services/dropdown-menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
  imports: [
    HeaderComponent,
    AboveTheFoldComponent,
    ContactComponent,
    AboutMeComponent,
    MyskillsComponent,
    PortfolioComponent,
    FooterComponent,
    DropdownMenuComponent,
    CommonModule,
  ],
})
export class MainContentComponent {
  constructor(public DropdownMenuService: DropdownMenuService) {}
}
