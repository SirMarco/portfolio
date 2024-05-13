import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

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
      img: 'assets/images/project_join.png',
      name: 'Join2',
      subheader: 'Angular | TypeScript | HTML | CSS | Firebase ',
      text: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      github: '',
      live: '',
    },
  ];

  ngOnInit() {
    AOS.init({
      startEvent: 'scroll',
    });
  }
  formatProjectsLength(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}
