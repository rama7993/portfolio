import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: false,
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects = [
    {
      name: 'QuickChat',
      imageUrl: './assets/images/projects/quick-chat.png',
      description:
        'Real-time chat application enabling user-to-user messaging with authentication, route protection, and HTTP interceptors. Includes features like date-grouped message history, user profile management, and live typing indicators via Socket.io. Backend powered by Node.js with persistent data storage in MongoDB.',
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
        'Built a comprehensive music discovery platform using Angular 17 with real-time Spotify API integration. Features include advanced multi-type search (tracks, artists, albums, playlists), smart infinite scroll with intelligent pagination, global audio player with album previews, fully responsive design with glassmorphism UI, and real-time API integration with proper error handling.',
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
        'A modern, feature-rich weather application built with Angular 18, featuring real-time weather data, interactive maps, charts, and a beautiful glassmorphism UI design.',
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
        'A responsive news aggregation platform built with Angular. It fetches real-time news from the GNews API and includes category filtering, keyword search, and a modern, user-friendly interface.',
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
        'A modern, responsive Angular application for discovering and exploring music from Spotify. Built with Angular 14 and enhanced with intelligent search flow, beautiful UI/UX, advanced audio player, and comprehensive music information.',
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
        'A beautiful, modern weather application built with Angular 14, featuring real-time weather data, interactive elements, and a stunning glassmorphism UI design powered by RapidAPI.',
      techStack: ['Angular', 'TypeScript', 'CSS', 'RapidAPI'],
      githubLink: 'https://github.com/rama7993/weather-search',
      link: 'https://rama7993.github.io/weather-search/',
      category: 'Frontend',
      featured: false,
      status: 'Live',
    },
    {
      name: 'eDairy – Responsive Website for Organic Dairy Products',
      imageUrl: './assets/images/projects/eDairy.png',
      description:
        'Designed and developed a modern, responsive website for showcasing dairy products using HTML, CSS, and JavaScript. Implemented an interactive product catalog with search, product preview modal, and wishlist/favorites feature. Built a smart cart-like experience with item management and persistent data storage using LocalStorage. Developed a user authentication system with login, registration, password reset, and client-side validation.',
      techStack: ['JavaScript', 'HTML5', 'CSS', 'CSS Flexbox'],
      githubLink: 'https://github.com/rama7993/edairy',
      link: 'https://rama7993.github.io/eDairy/',
      category: 'Frontend',
      featured: false,
      status: 'Live',
    },
  ];

  categories = ['All', 'Frontend', 'Full Stack'];
  selectedCategory = 'All';
  swiper: Swiper | null = null;

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.initSwiper();
  }

  initSwiper() {
    this.swiper = new Swiper('.projects-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

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
