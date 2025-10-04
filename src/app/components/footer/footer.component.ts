import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false,
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rama-koti-reddy-yerram',
      iconClass: 'pi pi-linkedin',
      hoverColor: '#0077b5',
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/ramakotireddy912',
      iconClass: 'pi pi-code',
      hoverColor: '#00cc99',
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/user/ramakotireddyyerram/',
      iconClass: 'pi pi-share-alt',
      hoverColor: '#009688',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/rama_koti_reddy/',
      iconClass: 'pi pi-link',
      hoverColor: '#f9c513',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/rama7993',
      iconClass: 'pi pi-github',
      hoverColor: '#333333',
    },
  ];
  ngOnInit(): void {}
}
