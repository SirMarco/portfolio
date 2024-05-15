import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      img: 'assets/images/project_join.png',
      name: 'Join',
      subheader: 'Angular | TypeScript | HTML | CSS | Firebase ',
      text: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      github: '',
      live: '',
    },
    {
      img: 'assets/images/project_elpololoco.png',
      name: 'El PoloLoco',
      subheader: 'JavaScript | HTML | CSS',
      text: 'A simple Jump-and-Run game based on an object-oriented approach. Help pepe to find coins and poison bottles to fight against the killer chicken. ',
      github: '',
      live: '',
    },
    {
      img: 'assets/images/project_pokedex.png',
      name: 'Pokédex',
      subheader: 'JavaScript | HTML | CSS | Api',
      text: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      github: '',
      live: '',
    },
  ];

  ngOnInit() {}
  formatProjectsLength(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}
