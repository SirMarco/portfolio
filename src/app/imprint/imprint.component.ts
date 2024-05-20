import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-imprint',
  standalone: true,
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
  imports: [TranslateModule, FooterComponent, HeaderComponent, MatIconModule],
})
export class ImprintComponent {}
