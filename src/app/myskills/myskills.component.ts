import { Component } from '@angular/core';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss',
})
export class MyskillsComponent {
  skills = [
    {
      name: 'Angular',
      img: 'assets/images/icon_angular.png',
    },
    {
      name: 'TypeScript',
      img: 'assets/images/icon_typescript.png',
    },
    {
      name: 'JavaScript',
      img: 'assets/images/icon_javscript.png',
    },
    {
      name: 'HTML',
      img: 'assets/images/icon_html.png',
    },
    {
      name: 'CSS',
      img: 'assets/images/icon_css.png',
    },
    {
      name: 'Firebase',
      img: 'assets/images/icon_firebase.png',
    },
    {
      name: 'Git',
      img: 'assets/images/icon_git.png',
    },
    {
      name: 'Rest-Api',
      img: 'assets/images/icon_api.png',
    },
    {
      name: 'Scrum',
      img: 'assets/images/icon_scrum.png',
    },
    {
      name: 'Material Design',
      img: 'assets/images/icon_material.png',
    },
  ];
}
