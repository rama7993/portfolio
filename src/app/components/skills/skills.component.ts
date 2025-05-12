import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: false,
})
export class SkillsComponent implements OnInit {
  skills = [
    { name: 'Angular', image: './assets/skills/angular.svg' },
    { name: 'HTML', image: './assets/skills/html.svg' },
    { name: 'JavaScript', image: './assets/skills/javascript.svg' },
    { name: 'CSS', image: './assets/skills/css.svg' },
    { name: 'TypeScript', image: './assets/skills/typescript.svg' },
    { name: 'SCSS', image: './assets/skills/sass.svg' },
    { name: 'React', image: './assets/skills/react.svg' },
    { name: 'Bootstrap', image: './assets/skills/bootstrap.svg' },
    { name: 'NodeJs', image: './assets/skills/nodejs.svg' },
    { name: 'MongoDb', image: './assets/skills/mongodb.svg' },
    { name: 'C', image: './assets/skills/c.svg' },
    { name: 'C++', image: './assets/skills/cpp.svg' },
    { name: 'Java', image: './assets/skills/java.svg' },
    { name: 'Python', image: './assets/skills/python.svg' },
    { name: 'MySQL', image: './assets/skills/mysql.svg' },
  ];

  constructor() {}

  ngOnInit() {}
}
