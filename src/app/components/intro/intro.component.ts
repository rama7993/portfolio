import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';
import Typed from 'typed.js';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  standalone: false,
})
export class IntroComponent implements OnInit, AfterViewInit {
  techStack: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'SCSS',
    'React',
    'Node.js',
    'MongoDB',
    'Git',
  ];

  codingPlatforms = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rama-koti-reddy-yerram',
      iconClass: 'pi pi-linkedin',
      hoverColor: '#0077b5',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/rama7993',
      iconClass: 'pi pi-github',
      hoverColor: '#333333',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/rama_koti_reddy/',
      iconClass: 'pi pi-code',
      hoverColor: '#f9c513',
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/ramakotireddy912',
      iconClass: 'pi pi-share-alt',
      hoverColor: '#00cc99',
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/user/ramakotireddyyerram/',
      iconClass: 'pi pi-link',
      hoverColor: '#009688',
    },
  ];

  constructor() {}

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }

  ngAfterViewInit() {
    // Initialize typing animation with enhanced effects
    const typed = new Typed('.typing-text', {
      strings: [
        'Frontend Developer',
        'Angular Specialist',
        'UI/UX Enthusiast',
        'Full Stack Developer',
        'Problem Solver',
        'Creative Thinker',
        'Tech Innovator',
        'Code Craftsman',
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
    });

    // Add floating animation to tech badges and platform links
    this.animateTechBadges();
    this.animatePlatformLinks();
  }

  animateTechBadges() {
    const badges = document.querySelectorAll('.tech-badge');
    badges.forEach((badge, index) => {
      setTimeout(() => {
        badge.classList.add('animate-in');
      }, index * 100);
    });
  }

  animatePlatformLinks() {
    const platformLinks = document.querySelectorAll('.platform-link');
    platformLinks.forEach((link, index) => {
      setTimeout(() => {
        link.classList.add('animate-in');
      }, index * 150);
    });
  }

  downloadResume() {
    const driveLink =
      'https://drive.google.com/uc?export=download&id=1DQFO464Mu0FNhYEAVslO66JtpOx72aJ3';
    const filename = 'Rama_Koti_Reddy_Yerram_Resume.pdf';
    this.downloadFile(driveLink, filename);
  }

  downloadFile(url: string, filename: string) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
