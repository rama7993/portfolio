import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: false,
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {
  skills = [
    {
      name: 'Angular',
      image: './assets/skills/angular.svg',
      level: 88,
      category: 'Frontend',
      color: '#DD0031',
    },
    {
      name: 'TypeScript',
      image: './assets/skills/typescript.svg',
      level: 85,
      category: 'Frontend',
      color: '#3178C6',
    },
    {
      name: 'JavaScript',
      image: './assets/skills/javascript.svg',
      level: 87,
      category: 'Frontend',
      color: '#F7DF1E',
    },
    {
      name: 'HTML',
      image: './assets/skills/html.svg',
      level: 92,
      category: 'Frontend',
      color: '#E34F26',
    },
    {
      name: 'CSS',
      image: './assets/skills/css.svg',
      level: 88,
      category: 'Frontend',
      color: '#1572B6',
    },
    {
      name: 'SCSS',
      image: './assets/skills/sass.svg',
      level: 82,
      category: 'Frontend',
      color: '#CC6699',
    },
    {
      name: 'React',
      image: './assets/skills/react.svg',
      level: 65,
      category: 'Frontend',
      color: '#61DAFB',
    },
    {
      name: 'Bootstrap',
      image: './assets/skills/bootstrap.svg',
      level: 70,
      category: 'Frontend',
      color: '#7952B3',
    },
    {
      name: 'NodeJs',
      image: './assets/skills/nodejs.svg',
      level: 72,
      category: 'Backend',
      color: '#339933',
    },
    {
      name: 'MongoDb',
      image: './assets/skills/mongodb.svg',
      level: 60,
      category: 'Database',
      color: '#47A248',
    },
    {
      name: 'MySQL',
      image: './assets/skills/mysql.svg',
      level: 65,
      category: 'Database',
      color: '#4479A1',
    },
    {
      name: 'Java',
      image: './assets/skills/java.svg',
      level: 55,
      category: 'Backend',
      color: '#007396',
    },
    {
      name: 'Python',
      image: './assets/skills/python.svg',
      level: 50,
      category: 'Backend',
      color: '#3776AB',
    },
    {
      name: 'C++',
      image: './assets/skills/cpp.svg',
      level: 45,
      category: 'Backend',
      color: '#00599C',
    },
    {
      name: 'C',
      image: './assets/skills/c.svg',
      level: 40,
      category: 'Backend',
      color: '#A8B9CC',
    },
    {
      name: 'Git',
      image: './assets/skills/git.svg',
      level: 80,
      category: 'Tools',
      color: '#F05032',
    },
  ];

  skillCategories = ['Frontend', 'Backend', 'Database', 'Tools'];
  selectedCategory = 'All';
  skillChart: Chart | null = null;
  private themeChangeListener?: () => void;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.createSkillChart();
    this.setupThemeListener();
  }

  ngOnDestroy() {
    if (this.skillChart) {
      this.skillChart.destroy();
    }
    if (this.themeChangeListener) {
      this.themeChangeListener();
    }
  }

  private setupThemeListener() {
    // Listen for theme changes
    this.themeChangeListener = () => {
      if (this.skillChart) {
        this.skillChart.destroy();
        setTimeout(() => this.createSkillChart(), 100);
      }
    };

    // Listen for class changes on document element
    const observer = new MutationObserver(this.themeChangeListener);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Store the cleanup function
    this.themeChangeListener = () => {
      observer.disconnect();
    };
  }

  filterSkills(category: string) {
    this.selectedCategory = category;
  }

  get filteredSkills() {
    if (this.selectedCategory === 'All') {
      return this.skills;
    }
    return this.skills.filter(
      (skill) => skill.category === this.selectedCategory
    );
  }

  createSkillChart() {
    const ctx = document.getElementById('skillChart') as HTMLCanvasElement;
    if (!ctx) return;

    const frontendSkills = this.skills.filter((s) => s.category === 'Frontend');
    const backendSkills = this.skills.filter((s) => s.category === 'Backend');
    const databaseSkills = this.skills.filter((s) => s.category === 'Database');

    // Get theme-aware colors
    const isDarkMode =
      document.documentElement.classList.contains('dark-theme') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const textColor = isDarkMode ? '#e6e6e6' : '#6c757d'; // Muted text only in light mode

    this.skillChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Frontend', 'Backend', 'Database'],
        datasets: [
          {
            data: [
              frontendSkills.reduce((sum, skill) => sum + skill.level, 0) /
                frontendSkills.length,
              backendSkills.reduce((sum, skill) => sum + skill.level, 0) /
                backendSkills.length,
              databaseSkills.reduce((sum, skill) => sum + skill.level, 0) /
                databaseSkills.length,
            ],
            backgroundColor: [
              isDarkMode
                ? 'rgba(102, 126, 234, 0.8)'
                : 'rgba(102, 126, 234, 0.9)',
              isDarkMode
                ? 'rgba(118, 75, 162, 0.8)'
                : 'rgba(118, 75, 162, 0.9)',
              isDarkMode
                ? 'rgba(78, 205, 196, 0.8)'
                : 'rgba(78, 205, 196, 0.9)',
            ],
            borderColor: [
              isDarkMode ? 'rgba(102, 126, 234, 1)' : 'rgba(102, 126, 234, 1)',
              isDarkMode ? 'rgba(118, 75, 162, 1)' : 'rgba(118, 75, 162, 1)',
              isDarkMode ? 'rgba(78, 205, 196, 1)' : 'rgba(78, 205, 196, 1)',
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: textColor,
              font: {
                size: isDarkMode ? 14 : 15,
                weight: 'normal',
              },
              padding: isDarkMode ? 20 : 25,
              usePointStyle: true,
              pointStyle: 'circle',
              boxWidth: isDarkMode ? 12 : 14,
              boxHeight: isDarkMode ? 12 : 14,
            },
          },
          tooltip: {
            backgroundColor: isDarkMode
              ? 'rgba(24, 23, 23, 0.95)'
              : 'rgba(255, 255, 255, 0.95)',
            titleColor: textColor,
            bodyColor: textColor,
            borderColor: isDarkMode
              ? 'rgba(50, 50, 50, 1)'
              : 'rgba(200, 200, 200, 1)',
            borderWidth: 1,
            cornerRadius: 8,
            displayColors: true,
          },
        },
      },
    });
  }
}
