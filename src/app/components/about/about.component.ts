import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: false,
})
export class AboutComponent implements OnInit {
  stats = [
    {
      icon: 'pi pi-code',
      value: '3+',
      label: 'Years Experience',
    },
    {
      icon: 'pi pi-briefcase',
      value: '10+',
      label: 'Projects Completed',
    },
    {
      icon: 'pi pi-users',
      value: '8',
      label: 'Technologies Used',
    },
    {
      icon: 'pi pi-trophy',
      value: '1',
      label: 'Award Received',
    },
  ];

  highlights = [
    'Frontend Development with Angular',
    'Responsive Web Design',
    'API Integration & Development',
    'Database Design & Management',
    'Code Review & Optimization',
  ];

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy() {}
}
