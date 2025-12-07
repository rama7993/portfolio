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
        'Results-driven Software Developer specializing in building scalable web applications with Angular and TypeScript. Consistently delivering high-performance solutions that optimize user workflows and drive business efficiency.',
      details: [
        'Architected a unified state management layer using NgRx to handle complex data flows across Sales, Marketing, and Analytics modules, ensuring predictable UI synchronization and easier debugging.',
        'Engineered high-performance CRM data tables using PrimeNG, enabling complex inline editing, row expansion, frozen columns, and handling large datasets (10k+ records) with sub-second rendering.',
        'Engineered intelligent "Lead Distribution" algorithms supporting "Round Robin", "Shark Tank", and Manual assignment modes, utilizing Email Notifications and efficient API polling strategies to ensure timely delivery of new leads to agents.',
        'Developed a dynamic "Call Script" engine for Telemarketers featuring Script Listing Tables, interactive "Script Previews", and live "Execution Sessions" to record Q&A and Objections, which automates post-call Appointment Scheduling and Task Assignment based on specific Call Outcomes.',
        'Built a comprehensive "Social Monitoring" suite with advanced Channel Tables and segmented Post Listing Pages (Draft, Scheduled, Published, Unpublished), enabling users to navigate to Post Details to manage Comments, Replies, and Reactions from a centralized hub.',
        'Built interactive, real-time analytics dashboards using eCharts, empowering marketing teams with actionable insights and reducing manual reporting time by approximately 40%.',
        'Designed and implemented a granular RBAC (Role-Based Access Control) system, allowing dynamic permission toggles across multiple modules, which significantly improved security compliance and admin efficiency.',
        'Revamped the Keycloak authentication flow by designing custom themes for login, 2FA, and email templates, resulting in a cohesive brand experience and improved user retention.',
        'Authored comprehensive internal developer guides and launch documentation using Docusaurus, streamlining the onboarding process for new team members and reducing ramp-up time by 50%.',
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
