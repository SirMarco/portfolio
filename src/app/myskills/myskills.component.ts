import { animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss',
})
export class MyskillsComponent {
  skills = [
    {
      name: 'Angular',
      img: 'assets/images/icon_angular.png',
      animate: false,
    },
    {
      name: 'TypeScript',
      img: 'assets/images/icon_typescript.png',
      animate: false,
    },
    {
      name: 'JavaScript',
      img: 'assets/images/icon_javscript.png',
      animate: false,
    },
    {
      name: 'HTML',
      img: 'assets/images/icon_html.png',
      animate: false,
    },
    {
      name: 'CSS',
      img: 'assets/images/icon_css.png',
      animate: false,
    },
    {
      name: 'Firebase',
      img: 'assets/images/icon_firebase.png',
      animate: false,
    },
    {
      name: 'Git',
      img: 'assets/images/icon_git.png',
      animate: false,
    },
    {
      name: 'Rest-Api',
      img: 'assets/images/icon_api.png',
      animate: false,
    },
    {
      name: 'Scrum',
      img: 'assets/images/icon_scrum.png',
      animate: false,
    },
    {
      name: 'Material Design',
      img: 'assets/images/icon_material.png',
      animate: false,
    },
  ];

  onMouseEnter(index: number) {
    this.skills[index].animate = true;
  }

  onMouseLeave(index: number) {
    this.skills[index].animate = false;
  }
}
