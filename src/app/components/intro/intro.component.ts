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
  constructor() {}

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }

  ngAfterViewInit() {
    // Initialize typing animation
    const typed = new Typed('.typing-text', {
      strings: [
        'Frontend Developer',
        'Angular Specialist',
        'UI/UX Enthusiast',
        'Full Stack Developer',
        'Problem Solver',
      ],
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
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
