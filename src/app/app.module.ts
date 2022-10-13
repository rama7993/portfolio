import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { NgxSpinnerModule } from "ngx-spinner";
import { ProjectsComponent } from './components/projects/projects.component';



@NgModule({
  declarations: [
    AppComponent,
      AppLayoutComponent,
      HeaderComponent,
      FooterComponent,
      IntroComponent,
      SkillsComponent,
      EducationComponent,
      ExperienceComponent,
      AboutComponent,
      ContactComponent,
      ProjectsComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
