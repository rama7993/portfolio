import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../../animations/animation';

interface Experience {
  logo: string;
  designation: string;
  companyName: string;
  duration: string;
  description: string;
  details: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [fadeInAnimation],
  standalone: false,
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      logo: './assets/images/satisfic.jpg',
      designation: 'Junior Software Developer',
      companyName: 'Satisfic',
      duration: 'July 2022 - Present',
      description:
        'As a Junior Software Developer at Satisfic, I contributed to a variety of projects, developing robust and scalable software solutions. In recognition of my commitment and growth, I was honored with the Rising Star Award in 2023. My role allowed me to work across multiple domains, honing my technical skills and enhancing user experience through collaborative teamwork and continuous learning.',
      details: [
        'Developed and optimized CRM data table features, significantly improving data accessibility, user interaction, and overall system performance, leading to a more intuitive and efficient user experience.',
        'Designed and implemented dynamic permissions toggling for user groups, enabling granular access control and enhancing both security and operational flexibility within the platform.',
        'Built and integrated advanced data visualizations for marketing and sales dashboards and reports, empowering leadership with real-time insights into key business metrics. Additionally, authored a comprehensive launch guide to document all implemented modules for team-wide reference and seamless future integrations.',
        'Customized and integrated secure login, signup, and two-factor authentication (2FA) features using Keycloak, ensuring the highest security standards and improving the platform’s authentication processes.',
        'Developed and implemented appointment scheduling functionality for lead management, with time zone support, ensuring seamless coordination and efficient management of appointments across regions.',
        'Collaborated closely in the execution of targeted marketing campaigns, integrating campaign data with the CRM platform to streamline business workflows and enhance data-driven decision-making capabilities.',
        'Contributed actively in code reviews and agile sprint meetings, driving continuous improvements in development practices and fostering a collaborative environment within the team to ensure timely delivery of high-quality software.',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
