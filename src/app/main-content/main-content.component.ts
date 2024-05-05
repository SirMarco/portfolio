import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContactComponent } from '../contact/contact.component';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { AboutMeComponent } from '../about-me/about-me.component';

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
  ],
})
export class MainContentComponent {}
