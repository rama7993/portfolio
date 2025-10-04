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
        'As a Junior Software Developer at Satisfic, I drive innovation across diverse projects, architecting robust and scalable software solutions that deliver measurable business impact. Recognized for exceptional performance with the Rising Star Award in 2023, I excel in cross-functional collaboration, continuously advancing technical expertise while delivering exceptional user experiences through agile development practices.',
      details: [
        'Architected and optimized CRM data table features, significantly improving data accessibility and user interaction efficiency, resulting in enhanced system performance and streamlined user workflows.',
        'Engineered dynamic permissions management system for user groups, implementing granular access controls that significantly enhanced platform security while improving operational flexibility and user management efficiency.',
        'Developed comprehensive data visualization suite for marketing and sales dashboards, delivering real-time business intelligence that enabled data-driven decision making and improved strategic planning efficiency.',
        'Implemented enterprise-grade authentication system using Keycloak, integrating secure login, signup, and 2FA features that enhanced platform security compliance and reduced authentication-related support tickets.',
        'Built intelligent appointment scheduling system with multi-timezone support, automating lead management workflows and reducing scheduling conflicts while improving customer engagement.',
        'Awarded Rising Star Award in 2023 for exceptional performance and contributions to project success, demonstrating a commitment to excellence and continuous improvement in software development practices.',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  get experienceStats() {
    const totalAchievements = this.experiences.reduce((sum, exp) => sum + exp.details.length, 0);
    const technologies = new Set([
      'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'Node.js', 
      'Keycloak', 'CRM Systems', 'Data Visualization', 'Authentication', 'API Integration',
      'Git', 'Agile', 'Scrum', 'REST APIs'
    ]);

    return {
      companies: this.experiences.length,
      totalYears: this.calculateTotalYears(),
      achievements: totalAchievements,
      technologies: technologies.size
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
