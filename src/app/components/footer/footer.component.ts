import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  socialLinks = [
    {
      url: 'https://linkedin.com',
      iconClass: 'fab fa-linkedin',
      hoverColor: '#0077b5',
    },
    {
      url: 'https://twitter.com',
      iconClass: 'fab fa-twitter',
      hoverColor: '#1da1f2',
    },
    {
      url: 'https://facebook.com',
      iconClass: 'fab fa-facebook',
      hoverColor: '#3b5998',
    },
    {
      url: 'https://github.com',
      iconClass: 'fab fa-github',
      hoverColor: '#333333',
    },
  ];

  ngOnInit(): void {}
}
