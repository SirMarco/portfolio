import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit, OnDestroy {
  blinkState: boolean = false;
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.blinkState = !this.blinkState;
    }, 2600);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
