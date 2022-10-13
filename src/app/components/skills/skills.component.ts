import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 skills=['C++','Java','Python','C','HTML','CSS','Java Script','Angular'];
 percent=['ninety','eighty','eighty','ninety','seventy-five','seventy','seventy','sixty-five']
}
