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
      designation: 'Software Developer',
      companyName: 'Satisfic',
      duration: 'July 2022 - Present',
      description:
        'Working as a Software Developer at Satisfic, I develop and maintain web applications using Angular, TypeScript, and related technologies. I work closely with the development team to build features that enhance our CRM platform and improve user workflows. My role involves both frontend development and integrating with backend services.',
      details: [
        'Developed and maintained CRM data table features with advanced filtering, sorting, and pagination to help users efficiently manage large datasets of customer information.',
        'Built a comprehensive user permission management system that allows administrators to create custom user groups and assign specific access levels, improving security and operational control.',
        'Created interactive data visualization components for marketing and sales dashboards using charts and graphs to help stakeholders track key business metrics and performance indicators.',
        'Integrated Keycloak authentication system to provide secure user login, registration, and two-factor authentication, enhancing platform security and user trust.',
        'Implemented appointment scheduling functionality with multi-timezone support and automated notifications, streamlining the booking process and reducing scheduling conflicts.',
        'Collaborated with cross-functional teams using Agile methodologies to deliver features on time and maintain code quality through regular code reviews and testing.',
        'Received Rising Star Award in 2023 for consistent contributions, proactive problem-solving, and positive collaboration with team members.',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  get experienceStats() {
    const totalAchievements = this.experiences.reduce(
      (sum, exp) => sum + exp.details.length,
      0
    );
    const technologies = new Set([
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SCSS',
      'Node.js',
      'Git',
      'REST APIs',
    ]);

    return {
      companies: this.experiences.length,
      totalYears: this.calculateTotalYears(),
      achievements: totalAchievements,
      technologies: technologies.size,
    };
  }

  private calculateTotalYears(): string {
    // This is a simplified calculation - you can enhance this based on your actual experience
    const startYear = 2022;
    const currentYear = new Date().getFullYear();
    const years = currentYear - startYear;
    return years >= 1 ? `${years}+` : '< 1';
  }
}
