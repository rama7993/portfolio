import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Project 1',
      imageUrl: './assets/images/projects.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      techStack: 'Angular, TypeScript, CSS',
      link: 'http://example.com/project1',
    },
    {
      name: 'Project 2',
      imageUrl: './assets/images/projects.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      techStack: 'React, JavaScript, HTML',
      link: 'http://example.com/project2',
    },
    {
      name: 'Project 3',
      imageUrl: './assets/images/projects.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      techStack: 'Vue, JavaScript, SCSS',
      link: 'http://example.com/project3',
    },
    {
      name: 'Project 4',
      imageUrl: './assets/images/projects.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      techStack: 'Node.js, Express, MongoDB',
      link: 'http://example.com/project4',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
