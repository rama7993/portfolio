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

import { ProjectsComponent } from './components/projects/projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MODE_STORAGE_SERVICE,
  ModeLocalStorageService,
} from 'src/services/mode-storage/mode-storage.service';
import { ModeToggleService } from 'src/services/mode-toggle/mode-toggle.service';

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
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    ModeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: ModeLocalStorageService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
