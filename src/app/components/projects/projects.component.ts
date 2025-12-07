import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: false,
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'QuickChat',
      imageUrl: './assets/images/projects/quick-chat.png',
      description:
        'Architected a scalable real-time messaging application using Socket.io and Node.js, capable of handling concurrent user connections with low-latency delivery. Implemented secure JWT authentication, mongo-persistent chat history, and optimized frontend rendering for instant message updates.',
      techStack: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      githubLink: 'https://github.com/rama7993/QuickChat-Frontend',
      link: 'https://quick-chat-fe.vercel.app/login',
      category: 'Full Stack',
      featured: true,
      status: 'Live',
    },
    {
      name: 'Sportify - Music Discovery Platform',
      imageUrl: './assets/images/projects/sportify.png',
      description:
        'Engineered a robust music discovery platform integrating the complex Spotify Web API. Implemented advanced features like token-based authentication, intelligent infinite scrolling for performance optimization, and a global audio player state managed via RxJS services.',
      techStack: [
        'Angular',
        'Node.js',
        'Express',
        'MongoDB',
        'Spotify Web API',
      ],
      githubLink: 'https://github.com/rama7993/sportify',
      link: 'https://sportify-rho.vercel.app/',
      category: 'Full Stack',
      featured: true,
      status: 'Live',
    },
    {
      name: 'Weatherhub - Advanced Weather Dashboard',
      imageUrl: './assets/images/projects/weather-hub.png',
      description:
        'Developed a high-performance weather dashboard visualizing complex meteorological data through interactive charts and maps. Utilized SCSS modules for a cohesive glassmorphism design system and optimized API calls for sub-second data rendering.',
      techStack: ['Angular', 'TypeScript', 'SCSS', 'Weather API'],
      githubLink: 'https://github.com/rama7993/weather-hub',
      link: 'https://weather-hub-eight.vercel.app/',
      category: 'Frontend',
      featured: true,
      status: 'Live',
    },
    {
      name: 'News Hub',
      imageUrl: './assets/images/projects/news-hub.png',
      description:
        'Built a responsive news aggregation engine that fetches and categorizes global news streams in real-time. Implemented efficient search algorithms and category filtering to deliver a seamless content consumption experience.',
      techStack: ['Angular', 'SCSS', 'Bootstrap', 'GNews API'],
      githubLink: 'https://github.com/rama7993/news-hub',
      link: 'https://rama7993.github.io/news-hub/',
      category: 'Frontend',
      featured: false,
      status: 'Live',
    },
    {
      name: 'Music Search',
      imageUrl: './assets/images/projects/music-search.png',
      description:
        'A comprehensive music exploration interface built with Angular. focused on clean component architecture and efficient state management for handling large lists of tracks and albums.',
      techStack: ['Angular', 'Bootstrap', 'Spotify API'],
      githubLink: 'https://github.com/rama7993/music-search',
      link: 'https://rama7993.github.io/music-search/',
      category: 'Frontend',
      featured: false,
      status: 'Live',
    },
    {
      name: 'Weather Search',
      imageUrl: './assets/images/projects/weather-search.png',
      description:
        'A lightweight, responsive weather application demonstrating effective use of external APIs and asynchronous data handling in Angular 14.',
      techStack: ['Angular', 'TypeScript', 'CSS', 'RapidAPI'],
      githubLink: 'https://github.com/rama7993/weather-search',
      link: 'https://rama7993.github.io/weather-search/',
      category: 'Frontend',
      featured: false,
      status: 'Live',
    },
    {
      name: 'eDairy – Responsive Website',
      imageUrl: './assets/images/projects/eDairy.png',
      description:
        'Designed a fully responsive e-commerce interface for dairy products. Implemented client-side state management for the shopping cart and optimized asset loading for fast First Contentful Paint.',
      techStack: ['JavaScript', 'HTML5', 'CSS', 'CSS Flexbox'],
      githubLink: 'https://github.com/rama7993/edairy',
      link: 'https://rama7993.github.io/eDairy/',
      category: 'Frontend',
      featured: false,
      status: 'Live',
    },
    {
      name: 'SoftPhone – Web SIP & Video Calls',
      imageUrl: './assets/images/projects/soft-phone.png',
      description:
        'Implemented a browser-based VoIP solution using WebRTC and Jitsi Meet integration. Focused on handling real-time media streams and ensuring connection stability across different network conditions.',
      techStack: ['Angular', 'TypeScript', 'WebRTC', 'Jitsi Meet'],
      githubLink: 'https://github.com/rama7993/soft-phone',
      link: 'https://rama7993.github.io/soft-phone',
      category: 'Frontend',
      featured: false,
      status: 'Live',
    },
  ];

  categories = ['All', 'Frontend', 'Full Stack'];
  selectedCategory = 'All';
  ngOnInit(): void {}

  filterProjects(category: string) {
    this.selectedCategory = category;
  }

  get filteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(
      (project) => project.category === this.selectedCategory
    );
  }

  get featuredProjects() {
    return this.projects.filter((project) => project.featured);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
