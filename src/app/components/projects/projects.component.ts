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
      name: 'Edairy',
      imageUrl: './assets/images/projects/eDairy.png',
      description:
        'Designed and developed a static website for an online dairy product ordering service. Focused on a visually appealing and user-friendly layout with features such as login, signup, reset password, and a search bar functionality, all presented in a static format for ease of use.',
      techStack: 'HTML, CSS, JavaScript',
      githubLink: 'https://github.com/rama7993/eDairy',
      link: 'https://rama7993.github.io/eDairy/',
    },
    {
      name: 'Sportify (Music Search)',
      imageUrl: './assets/images/projects/music-search.png',
      description:
        'Built a dynamic music search platform leveraging the Spotify API to fetch real-time data. Focused on delivering a seamless user experience, integrating features such as a shimmer effect for smooth loading states, ensuring users remained engaged during data fetch operations.',
      techStack: 'Angular, SCSS, Bootstrap, Spotify API, Shimmer Effect',
      githubLink: 'https://github.com/rama7993/music-search',
      link: 'https://rama7993.github.io/music-search/',
    },
    {
      name: 'Weather Search',
      imageUrl: './assets/images/projects/weather-search.png',
      description:
        'Developed a responsive weather search application that provides current and forecasted weather details using real-time data from a weather API. The app’s user interface, built with Angular and Bootstrap, offers a clean, intuitive experience optimized for both desktop and mobile devices.',
      techStack: 'Angular, SCSS, Bootstrap',
      githubLink: 'https://github.com/rama7993/weather-search',
      link: 'https://rama7993.github.io/weather-search/',
    },
  ];

  ngOnInit(): void {}
}
