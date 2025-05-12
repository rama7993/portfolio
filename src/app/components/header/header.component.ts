import { Component, OnInit } from '@angular/core';
import { ModeToggleService } from '../../../services/mode-toggle/mode-toggle.service';
import { Mode } from '../../../services/mode-toggle/mode-toggle.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent implements OnInit {
  theme!: Mode;

  navItems = [
    { name: 'About', link: '#about', active: false },
    { name: 'Skills', link: '#skills', active: false },
    { name: 'Experience', link: '#experience', active: false },
    { name: 'Education', link: '#education', active: false },
    { name: 'Projects', link: '#projects', active: false },
    { name: 'Certifications', link: '#certifications', active: false },
    { name: 'Contact', link: '#contact', active: false },
  ];

  constructor(private modeToggleService: ModeToggleService) {}

  ngOnInit(): void {
    this.getTheme();
  }

  getTheme = () => {
    this.modeToggleService.modeChanged$.subscribe((mode) => {
      this.theme = mode;
    });
  };

  setActive(item: any): void {
    this.navItems.forEach((navItem) => (navItem.active = false));
    item.active = true;
  }

  toggle() {
    this.modeToggleService.toggleMode();
  }
}
