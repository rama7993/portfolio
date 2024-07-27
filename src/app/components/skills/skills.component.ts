import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = [
    { name: 'C++', percent: 90, color: '#00599C' },
    { name: 'Java', percent: 85, color: '#E76F00' },
    { name: 'Python', percent: 80, color: '#357C4C' },
    { name: 'C', percent: 90, color: '#00599C' },
    { name: 'HTML', percent: 75, color: '#E8A200' },
    { name: 'CSS', percent: 70, color: '#2862B9' },
    { name: 'JavaScript', percent: 70, color: '#F0DB4F' },
    { name: 'TypeScript', percent: 65, color: '#007ACC' },
    { name: 'Bootstrap', percent: 60, color: '#563D7C' },
    { name: 'Angular', percent: 65, color: '#B52E31' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
