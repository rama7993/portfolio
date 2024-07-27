import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  public educationItems = [
    {
      degree: 'Bachelor of Science in Computer Science',
      college: 'University of Example',
      duration: 'August 2015 - May 2019',
      description:
        'Studied computer science with a focus on software development and algorithms.',
    },
    {
      degree: 'Master of Business Administration',
      college: 'Business School of Example',
      duration: 'September 2020 - June 2022',
      description:
        'Specialized in finance and management, with coursework in strategic planning and leadership.',
    },
    {
      degree: 'Diploma in Graphic Design',
      college: 'Art Institute of Example',
      duration: 'January 2013 - December 2014',
      description:
        'Focused on graphic design principles, digital imaging, and typography.',
    },
    // Add more items as needed
  ];

  constructor() {}

  ngOnInit(): void {}
}
