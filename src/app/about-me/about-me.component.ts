import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  animations: [
    trigger('blink', [
      transition('* <=> *', [
        animate('200ms ease-in', style({ color: '#00bc8f' })),
        animate('4s', style({ color: '#00bc8f' })),
        animate('200ms ease-out', style({ color: 'black' })),
        animate('4s', style({ color: 'black' })),
      ]),
    ]),
  ],
})
export class AboutMeComponent implements OnInit, OnDestroy {
  blinkState: boolean = false;
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.blinkState = !this.blinkState;
    }, 4600);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
