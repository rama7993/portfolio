import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss'],
    standalone: false
})
export class IntroComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

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
}
