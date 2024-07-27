import { Component, OnInit } from '@angular/core';
import { Mode } from 'src/services/mode-toggle/mode-toggle.model';
import { ModeToggleService } from 'src/services/mode-toggle/mode-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  theme!: Mode;
  constructor(private modeToggleService: ModeToggleService) {}

  ngOnInit(): void {
    this.getTheme();
  }

  getTheme = () => {
    this.modeToggleService.modeChanged$.subscribe((mode) => {
      this.theme = mode;
    });
  };

  toggle() {
    this.modeToggleService.toggleMode();
  }
}
