import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}
